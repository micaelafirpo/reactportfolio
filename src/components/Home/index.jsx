import { Link, useLocation} from "react-router-dom";
import "./style.css"
const Home = () => {
    return (
        <div className="home">
           <div className="title">
               <h1>
                   <p>Hola,</p>
                   <p>Soy Micaela Dato Firpo</p>
                   <p>Front End Developer</p>
               </h1>
               <Link to="about">
                   <button>Más información</button>
               </Link>
           </div>
           <div className="person">
               <img src={`${process.env.PUBLIC_URL}/images/profilepicv2.svg`} alt="imagen mia" />
           </div>
        </div>
    )
}

export default Home;