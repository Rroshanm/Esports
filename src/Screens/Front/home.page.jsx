
import './home.page.css';
import Cards from './Cards';
import Carausol from '../../Carosol/Carausol';


const HomePage = () => {


    return (
       
        <div className="container p-3" >
            <Carausol/>
                <Cards/>

             </div>
    );
};

export {HomePage};
