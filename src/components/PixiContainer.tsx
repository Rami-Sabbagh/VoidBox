import { app } from '../PixiApp';
import { useEffect, useRef } from 'react';

export default function PixiContainer() {

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = ref.current;
        if (container === null || container.childNodes.length !== 0) return;

        app.resizeTo = container;
        app.stage.hitArea = app.screen;
        container.appendChild(app.view);

        return () => { container.removeChild(app.view) };
    }, [ref]);

    return <div ref={ref} style={{ width: '100%', flex: 1 }} />;
}