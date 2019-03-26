const renderToString = require("preact-render-to-string");

const funcAsChildComponent = () => <div>{() => {}}</div>;

console.log(renderToString(funcAsChildComponent));
