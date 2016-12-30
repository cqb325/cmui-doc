const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Label = require("Label");

class Demo extends BaseDemo{
    render(){
        let webIcons = ["circle-o-notch","cog","gear","refresh","spinner"];
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