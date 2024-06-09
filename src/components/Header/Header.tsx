import React from "react";
import { EPages } from "../../App";

type THeader = {
    setPageName: (name: EPages) => void;
}

const Header: React.FC<THeader> = (props : THeader) => {
    const { setPageName } = props;

    return (<><div className="headbuttons">
        <button onClick={() => setPageName(EPages.graph3D)}>последствия употребления плотнейшей травы</button>
        <button onClick={() => setPageName(EPages.graph2D)}>2D</button>
        <button onClick={() => setPageName(EPages.calculator)}>Калькулятор</button>
        <button onClick={() => setPageName(EPages.esse)}>Эссе</button>
        </div>
    </>);
}

export default Header;