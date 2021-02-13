import { Bodies, Engine, Events, Runner, World } from 'matter-js';
import * as PIXI from 'pixi.js';

export const app = new PIXI.Application({
    antialias: true,
    resolution: 1
});
export const stage = app.stage;
stage.interactive = true;

export const engine = Engine.create();
export const world = engine.world;
export const runner = Runner.create();
Runner.start(runner, engine);

/**
 * Spawns a rectangular box at a specific location.
 * @param x The X coords of the box's center.
 * @param y The Y coords of the box's center.
 * @param width The width of the box.
 * @param height The height of the box.
 * @param isStatic Whether the box will be static or not.
 */
export function spawnBox(x: number, y: number, width: number, height: number, isStatic: boolean = false): Matter.Body {
    const body = Bodies.rectangle(x, y, width, height, { isStatic });

    const graphics = new PIXI.Graphics();

    graphics.beginFill(0, 0);
    graphics.lineStyle(3, isStatic ? 0xFCBF18 : 0xFFFFFF);
    graphics.drawRect(- width / 2, - height / 2, width, height);
    graphics.endFill();

    graphics.position.set(x, y);

    stage.addChild(graphics);

    if (!isStatic) {
        Events.on(engine, "afterUpdate", () => {
            graphics.position.set(body.position.x, body.position.y);
            graphics.rotation = body.angle;
        });
    }

    World.addBody(world, body);

    return body;
}

export const creatorOptions = {
    static: false
}

stage.on('pointerdown', (event: PIXI.InteractionEvent) => {
    const spawnPoint = event.data.getLocalPosition(stage);
    spawnBox(spawnPoint.x, spawnPoint.y, 50, 50, creatorOptions.static);
});