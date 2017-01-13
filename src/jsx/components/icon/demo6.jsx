const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Label = require("Label");


class Demo extends BaseDemo{
    render(){
        let webIcons = ["hand-rock-o","hand-lizard-o","hand-o-down","hand-o-left","hand-o-right","hand-o-up","hand-paper-o","hand-peace-o","hand-pointer-o","hand-rock-o","hand-scissors-o","hand-spock-o","hand-paper-o","thumbs-down","thumbs-o-down","thumbs-o-up","thumbs-up"];
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