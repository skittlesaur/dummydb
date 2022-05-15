import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Navigation from "./components/navigation/Navigation";
import './shared/css/master.css';
import Generate from "./pages/generate/Generate";
import Result from "./pages/result/Result";

const App = () => {
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/generate'} element={<Generate/>}/>
                <Route path={'/result'} element={<Result/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;