"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
function App() {
    return (<>
      <Todos title='title' description='des' done={false}></Todos>
    </>);
}
function Todos(props) {
    return <div>
    <div>{props.title}</div>
    <div>{props.description}</div>
  </div>;
}
exports.default = App;
