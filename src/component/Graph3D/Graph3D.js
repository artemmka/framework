import React from "react";

class Graph3D extends React.Component {
    render() {
        return (<div>
            <canvas id='canvasGraph3D' className='asg'></canvas>
            <div>
                <select id='selectFigure'>
                    <option value='sphere'>Сфера</option>
                    <option value='ellipse'>Эллипс</option>
                    <option value='thor'>Тор</option>
                    <option value='cube'>Куб</option>
                    <option value='hyperbolicCylinder'>Гиперболический цилиндр</option>
                </select>
            </div>
            <div>
                <label htmlFor="points">Рисовать точки</label>
                <input className='customSurface' data-custom='drawPoints' type='checkbox' id='points' checked></input>
                <label htmlFor="points">Рисовать рёбра</label>
                <input className='customSurface' data-custom='drawEdges' type='checkbox' id='edges' checked></input>
                <label htmlFor="points">Рисовать полигоны</label>
                <input className='customSurface' data-custom='drawPolygons' type='checkbox' id='polygons' checked></input>
            </div>
        </div>);
    }
}
export default Graph3D