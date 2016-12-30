const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Label = require("Label");

class Demo extends BaseDemo{
    render(){
        let webIcons = ["ambulance","car","bicycle","bus","taxi","car","fighter-jet","motorcycle","plane","rocket","ship","space-shuttle","subway","taxi","train","truck","wheelchair","wheelchair-alt"];
        webIcons = webIcons.map((icon, index)=>{
            return (
                <Label grid={1/8} className="iconItem" key={index}>
                    <FontIcon icon={icon}></FontIcon>
                    <span>{icon}</span>
                </Label>
            );
        });

        return (
            <div className="icons icon-list">
                {webIcons}
            </div>
        );
    }
}

module.exports = Demo;