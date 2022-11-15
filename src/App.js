import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./tuiter/home";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/*"
                           element={<Labs/>}/>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/tuiter"
                           element={<Tuiter/>}/>
                    <Route path="/home"
                           element={<Home/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;