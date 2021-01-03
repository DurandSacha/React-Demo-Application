import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {

    render(props) {

        return (
        <h1 className="BlueReact">Hello, { this.props.name }</h1>
        )
    }
    //ReactDOM.render(<HelloWorld name={ props.name } />, document.getElementById('root'))
}
export default HelloWorld;
