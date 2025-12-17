import {createRoot} from "react-dom/client";
import "../src/index.css";
import KycListData from "./pages/KycListData";

const App = () => {
    return (
        <div>
            <KycListData/>
        </div>
    )
}
const root = createRoot(document.getElementById('root'));
root.render(<App/>)

