import { useCallback, useState } from 'react';
import { creatorOptions, engine } from '../PixiApp';
import CheckBox from './CheckBox';
import Range from './Range';

function toggleStatic() {
    creatorOptions.static = !creatorOptions.static;
}

export default function SidePanel() {
    const [speed, setSpeed] = useState(1);
    const onSpeedChange = useCallback((value) => {
        setSpeed(value);
        engine.timing.timeScale = value;
    }, [setSpeed]);

    return (<div className="side-panel">
        <CheckBox id="spawnStatic" onToggle={toggleStatic}>Make object static</CheckBox>
        <Range id="simulationSpeed" value={speed} min={0.01} max={2} step={0.01} onChange={onSpeedChange}>Simulation Speed ({speed})</Range>
    </div>);
}