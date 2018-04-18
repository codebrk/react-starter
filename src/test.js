const ReactDOM = require("react-dom");
const React = require("react");

class CheckBox extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: true
        }
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck() {
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        let msg = this.state.checked ? "checked" : "not checked";
        return (
            <div>
                <input type="checkbox" checked={this.state.checked} onChange={this.handleCheck}/>
                <p>Message: {msg}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <CheckBox/>,
    document.getElementById("root")
);