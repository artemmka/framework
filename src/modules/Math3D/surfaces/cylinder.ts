import { Point, Edge, Polygon, Surface } from "../entities"
class Cylinder extends Surface {
    constructor(
        a: number = 10,
        b: number = 10,
        h: number = 3,
        count: number = 20,
        color: string = '#00ffff', 
    ){
    const points: Point[] = [];
    const edges: Edge[] = [];
    const polygons: Polygon[] = [];

    //точки
    const dt = 2 * Math.PI / count;
    for (let p = -h; p < h; p = p + 2) {
        for (let i = 0; i <= Math.PI; i += 2 * dt + count) {
            for (let j = 0; j < 2 * Math.PI; j += dt) {
                points.push(new Point(
                    a * Math.cos(i) * Math.cos(j),
                    b * Math.sin(j),
                    p
                ));
            }
        }
    }

    //ребра
    for (let i = 0; i < points.length; i++) {
        if (i + 1 < points.length && (i + 1) % count !== 0) {
            edges.push(new Edge(
                i,
                i + 1
            ));
        } else if ((i + 1) % count === 0) {
            edges.push(new Edge(
                i,
                i + 1 - count
            ));
        }
        if (i < points.length - count) {
            edges.push(new Edge(
                i,
                i + count
            ));
        }
    }

    //полигоны
    for (let i = 0; i < points.length; i++) {
        if (i + 1 + count < points.length && (i + 1) % count !== 0) {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count],color));
        } else if (i + count < points.length && (i + 1) % count === 0) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count],color));
        }
    }
    super(points, edges, polygons);
}

}
export default Cylinder;