const express = require('express');
const cors = require('cors');
require('dotenv').config();
const cookiepasser = require('cookie-parser')

const jwt = require('jsonwebtoken')
const port = process.env.PORT || 5000;

const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middelware
app.use(express.json());
app.use(cors(
  {
    origin: ['http://localhost:5173',
      'https://marathon-tau.vercel.app',
      'https://jobproject-ea2e1.firebaseapp.com',
    ],
    credentials: true
  }
));
app.use(cookiepasser());
const logger = (req, res, next) => {
  // console.log('inside the logger', req.cookies);
  const token = req?.cookies?.token;
  if (!token) {
    return res.status(401).send({ message: 'unauthorized access' })

  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'unauthorized access again' })
    }
    req.user = decoded;
    next();

  })

}



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kmpsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // jwt 
    app.post('/jwt', async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '20h' });
      res
        .cookie('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",

        })
        .send({ success: true });
    })
    // ok done
    app.post('/logout', (req, res) => {
      res
        .clearCookie('token', {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true })
    })


    const upcomesCollection = client.db('marathon').collection('upcome')
    const registrationsCollection = client.db('marathon').collection('registation')
    const marathonsCollection = client.db('marathon').collection('card')
    // Add Marathon of dashboard page
    // app.post('/upcome', async (req, res) => {
    //   const marathon = req.body;
    //   marathon.createdAt = new Date();
    //   const result = await upcomesCollection.insertOne(marathon);
    //   res.send(result);
    // });
    // UPCOME
    app.post('/marathon', async (req, res) => {
      const marathon = req.body;
      marathon.createdAt = new Date();
      const result = await marathonsCollection.insertOne(marathon);
      res.send(result);
    });



    // try my marathon page  er jonno
    app.get("/marathons", logger, async (req, res) => {
      const userEmail = req.query.email;

      try {
        // Build query based on the search term
        const query = { email: userEmail };
        if (req.user.email !== req.query.email) {
          return res.status(403).send({ message: 'forbidden access' });
        }
        const marathon = await marathonsCollection.find(query).toArray();
        res.status(200).send(marathon);
      } catch (error) {
        console.error("Error fetching registrations:", error);
        res.status(500).send({ message: "Failed to fetch registrations" });
      }


    });








    // Get All Marathons for marathon page
    app.get('/marathon', async (req, res) => {
      console.log('cuk cuk', req.cookies);
      const sortOrder = req.query.sort || 'desc'; // Default is descending
      const marathons = await marathonsCollection
        .find({})
        .sort({ createdAt: sortOrder === 'desc' ? -1 : 1 })
        .toArray();
      res.send(marathons);
    });

    // Get Marathon by ID for details page
    app.get('/marathon/:id', async (req, res) => {
      const id = req.params.id;
      const marathon = await marathonsCollection.findOne({ _id: new ObjectId(id) });
      res.send(marathon);
    });






    // home page
    // **Get 6 Marathons for Home Page**
    app.get('/marathonsort', async (req, res) => {
      try {
        // Fetch 6 marathons sorted by createdAt descending (newest first)
        const marathons = await marathonsCollection
          .find({})
          .sort({ createdAt: -1 })
          .limit(6)
          .toArray();

        res.send(marathons);
      } catch (error) {
        console.error("Error fetching marathons for home page:", error);
        res.status(500).send({ message: "Failed to fetch marathons." });
      }
    });

    // **Get 6 Upcoming Marathons**
    app.get('/upcome', async (req, res) => {
      try {
        // Fetch 6 marathons sorted by createdAt descending (newest first)
        const marathons = await upcomesCollection
          .find({})
          .sort({ createdAt: -1 })
          .limit(6)
          .toArray();

        res.send(marathons);
      } catch (error) {
        console.error("Error fetching marathons for home page:", error);
        res.status(500).send({ message: "Failed to fetch marathons." });
      }
    });


    // email verification





    // registation

    // Register for a Marathon
    app.post('/registration', async (req, res) => {
      const registration = req.body;

      // Add timestamp and save registration details
      registration.createdAt = new Date();

      // Update total registration count
      const updateResult = await marathonsCollection.updateOne(
        { _id: new ObjectId(registration.marathonId) },
        { $inc: { totalRegistrationCount: 1 } }
      );

      if (updateResult.modifiedCount > 0) {
        const result = await registrationsCollection.insertOne(registration);
        res.send(result);
      } else {
        res.status(400).send({ message: "Failed to update registration count." });
      }
    });


    // Get Registrations for a User old

    // Fetch registrations for a logged-in user

    app.get("/registration", logger, async (req, res) => {
      const userEmail = req.query.email;
      const searchTerm = req.query.searchQuery || ""; // Get search term if provided



      try {
        // Build query based on the search term
        const query = { email: userEmail };
        if (req.user.email !== req.query.email) {
          return res.status(403).send({ message: 'forbidden access' });
        }

        if (searchTerm) {
          query.marathonTitle = { $regex: searchTerm, $options: "i" }; // Case-insensitive search
        }

        const registrations = await registrationsCollection.find(query).toArray();
        res.status(200).send(registrations);
      } catch (error) {
        console.error("Error fetching registrations:", error);
        res.status(500).send({ message: "Failed to fetch registrations" });
      }


    });




    // Update Registration old

    app.put('/registration/:id', async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      const query = { _id: new ObjectId(id) };
      const update = {
        $set: {
          firstName: data?.firstName,
          lastName: data?.lastName,
          contactNumber: data?.contactNumber,
          additionalInfo: data?.additionalInfo,

        }
      }

      const result = await registrationsCollection.updateOne(query, update)
      res.send(result)
    })




    // Delete Registration

    app.delete("/registration/:id", async (req, res) => {
      const id = req.params.id;
      try {
        const result = await registrationsCollection.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount > 0) {
          res.status(200).send({ message: "Registration deleted successfully" });
        } else {
          res.status(400).send({ message: "Failed to delete registration" });
        }
      } catch (error) {
        console.error("Error deleting registration:", error);
        res.status(500).send({ message: "Error deleting registration" });
      }
    });


    // delate ,marathon
    app.delete('/marathon/:id', async (req, res) => {
      const { id } = req.params;

      try {
        // const deletedMarathon = await marathonsCollection.findByIdAndDelete(id);
        const deletedMarathon = await marathonsCollection.deleteOne({ _id: new ObjectId(id) });
        if (deletedMarathon) {
          return res.status(200).json({ message: 'Marathon deleted successfully' });
        } else {
          return res.status(404).json({ message: 'Marathon not found' });
        }
      } catch (error) {
        console.error("Error deleting marathon:", error);
        return res.status(500).json({ message: 'Failed to delete marathon' });
      }
    });


    // Update marathon

    app.put('/marathon/:id', async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      const query = { _id: new ObjectId(id) };
      const update = {
        $set: {
          title: data?.title,

          description: data?.description,
          distance: data?.distance,


        }
      }

      const result = await marathonsCollection.updateOne(query, update)
      res.send(result)
    })











    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('CineHub server is running')
});

app.listen(port, () => {
  console.log(`CineHub is getting warmer in port:${port}`);

})