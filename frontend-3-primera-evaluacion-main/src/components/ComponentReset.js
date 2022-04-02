import React from "react";

class ComponentReset extends React.Component {
    render(props) {
        return (
            <button className="boton-reset" id="reset" onClick={this.props.clickHandler}>Volver al incio</button>
        )
    }
}

export default ComponentReset;