import * as PIXI from 'pixi.js';
import { Bodies, Engine, Events, World } from 'matter-js';

export default class Simulation {
    app: PIXI.Application;
    stage: PIXI.Container;

    engine = Engine.create();
    world = this.engine.world;

    constructor(app: PIXI.Application) {
        this.app = app;
        this.stage = this.app.stage;

        this.stage.interactive = true;

        Engine.run(this.engine);

        this.stage.on('pointerdown', (event: PIXI.InteractionEvent) => {
            const spawnPoint = event.data.getLocalPosition(this.stage);
            console.log('screen', this.app.screen);
            console.log('spawn', spawnPoint.x, spawnPoint.y);
            this.createBox(spawnPoint.x, spawnPoint.y, 50, 50);
        });
    }

    createBox(x: number, y: number, width: number, height: number, isStatic: boolean = false): Matter.Body {
        const body = Bodies.rectangle(x, y, width, height, { isStatic });

        const graphics = new PIXI.Graphics();

        graphics.beginFill(0, 0);
        graphics.lineStyle(3, 0xFFFFFF);
        graphics.drawRect(- width / 2, - height / 2, width, height);
        graphics.endFill();

        graphics.position.set(x, y);

        this.stage.addChild(graphics);

        if (!isStatic) {
            Events.on(this.engine, "afterUpdate", () => {
                graphics.position.set(body.position.x, body.position.y);
                graphics.rotation = body.angle;
            });
        }

        World.addBody(this.world, body);

        return body;
    }
}