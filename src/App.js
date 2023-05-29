import './App.css';
import {BrowserRouter} from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import Layout from "./layout/Layout";

const App =()=>{
    return(
        <BrowserRouter>
            <Layout>
                <MainRoutes/>
            </Layout>
        </BrowserRouter>
    );
}

export default App
