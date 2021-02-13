import { useCallback, useState } from 'react';
import { creatorOptions, app, engine, spawnBox } from '../PixiApp';
import CheckBox from './CheckBox';
import Button from './Button';
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

    const [boundriesCreated, setBoundriesCreated] = useState(false);
    const createBoundries = useCallback(() => {
        const thickness = 5;
        const { width, height } = app.screen;

        spawnBox(width / 2, thickness, width, thickness * 2, true);
        spawnBox(width / 2, height - thickness, width, thickness * 2, true);

        spawnBox(thickness, height / 2, thickness * 2, height, true);
        spawnBox(width - thickness, height / 2, thickness * 2, height, true)

        setBoundriesCreated(true);
    }, [setBoundriesCreated]);

    return (<div className="side-panel">
        <CheckBox id="spawnStatic" onToggle={toggleStatic}>Make object static</CheckBox>
        <Range id="simulationSpeed" value={speed} min={0.01} max={2} step={0.01} onChange={onSpeedChange}>Simulation Speed ({speed})</Range>
        <Button disabled={boundriesCreated} onClick={createBoundries}>Create boundries</Button>
    </div>);
}