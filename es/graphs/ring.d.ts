import { RingShape } from '../types/graphs/shape';
import Graph from '../core/graph.class';
import { GraphConfig, Point } from '../types/core/graph';
declare class Ring extends Graph<RingShape> {
    name: string;
    constructor(config: GraphConfig<Partial<RingShape>>);
    draw(): void;
    hoverCheck(point: Point): boolean;
    setGraphCenter(): void;
    move({ movementX, movementY }: MouseEvent): void;
}
export default Ring;
