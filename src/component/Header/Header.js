import React from "react";

class Header extends React.Component {
    render() {
        return (<>
            <button onClick={() => this.setPageName('Graph3D')}>3D графика</button>
            <button onClick={() => this.setPageName('Graph2D')}>2D графика</button>
            <button onClick={() => this.setPageName('Calc')}>Калькулятор</button>
        </>);
    }
};
export default Header