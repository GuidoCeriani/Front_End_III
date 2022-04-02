import React from "react";

class Text extends React.Component {
    render(props) {
        return (
                <h1 className="historia">{this.props.text}</h1>
        )
    }
}

export default Text;