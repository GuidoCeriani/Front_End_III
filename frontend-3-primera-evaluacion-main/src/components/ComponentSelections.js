import React from "react";

class Selections extends React.Component {
    render(props) {
        return (
            <div className="recordatorio">
                <h3>Selección anterior: {this.props.previous}</h3>
                <h4>Historial de opciones elegidas: </h4>
                <ul>{this.props.selections}</ul>
            </div>
        )   
    }
}

export default Selections;