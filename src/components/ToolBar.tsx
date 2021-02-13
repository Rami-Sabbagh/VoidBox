import styles from './ToolBar.module.css';
import Icon from '@mdi/react';
import { mdiPlay, mdiPause } from '@mdi/js';
import { useCallback, useState } from 'react';
import { runner } from '../PixiApp';

export function PlayButton() {
    const [paused, setPaused] = useState(false);
    const togglePaused = useCallback(() => setPaused(!paused), [paused]);

    runner.enabled = !paused;

    return (<button onClick={togglePaused}>
        <Icon path={paused ? mdiPause : mdiPlay} color={paused ? '#fcbf18' : '#2bf12b'} size='25px' />
    </button>);
}

export default function ToolBar() {
    return (<div className={styles.container}>
        <PlayButton />
    </div>);
}