
import { Helmet } from 'react-helmet';


const Pagetittle = ({title, favicon}) => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                {/* <link rel="icon" type="image/png" href={favicon}/> */}
                {/* <link rel="canonical" href={favicon} /> */}
           </Helmet>
           
        </div>
    );
};

export default Pagetittle;