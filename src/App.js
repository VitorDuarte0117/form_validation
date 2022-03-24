import "./App.css";
import rocketImg from "./assets/rocket.png";
import { SignUp } from "./components/SignUp";

function App() {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-5">
                    <SignUp />
                </div>
                <div className="col-md-7 my-auto">
                    <img className="img-fluid w-100" src={rocketImg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default App;
