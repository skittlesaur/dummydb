import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Navigation from "./components/navigation/Navigation";
import './shared/css/master.css';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;