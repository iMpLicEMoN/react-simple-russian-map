import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';
import Map from './Map/';
import russiaJson from "./Map/russia.areas.topo.json";


const App = () => {
    const [content, setContent] = useState("");
    return (
    <div className="app">
        <Map topoJson={russiaJson} setTooltipContent={setContent}/>
        <ReactTooltip place="top">{content}</ReactTooltip>
    </div>)
}

export default App;




