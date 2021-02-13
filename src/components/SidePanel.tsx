import { creatorOptions } from '../PixiApp';
import CheckBox from './CheckBox';

function toggleStatic() {
    creatorOptions.static = !creatorOptions.static;
}

export default function SidePanel() {
    return (<div className="side-panel">
        <CheckBox id="spawnStatic" onToggle={toggleStatic}>Make object static</CheckBox>
    </div>);
}