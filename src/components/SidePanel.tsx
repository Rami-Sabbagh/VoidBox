import { creatorOptions } from '../PixiApp';

function toggleStatic() {
    creatorOptions.static = !creatorOptions.static;
}

export default function SidePanel() {
    

    return (<div className="side-panel">
        <input type="checkbox" name="static" onChange={toggleStatic}/>
        <label htmlFor="static">{' '}Spawn static boxes</label>
    </div>);
}