import React from "react";


class ComponentOptions extends React.Component {
    render(props) {
        return (
        <div className="opciones">
            <div className="opcion">
                <button id="A"  className = "botones" onClick={this.props.clickHandler}>A</button>
                <h2>{this.props.a}</h2>
            </div>
        <div className="opcion">
                <button id="B" className = "botones" onClick={this.props.clickHandler}>B</button>
                <h2>{this.props.b}</h2>
            </div>
        </div>
        )
    }
}

export default ComponentOptions;