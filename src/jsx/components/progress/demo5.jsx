const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Progress = require("Progress");
const Button = require("Button");
const ButtonGroup = require('ButtonGroup');
const Code = require("../Code");

class Demo extends BaseDemo{

    substract(){
        let progress = this.refs.progress;
        let max = progress.getMax();
        let current = progress.getValue();
        if(current - 10 <= max) {
            progress.update(current - 10);
        }
    }

    plus(){
        let progress = this.refs.progress;
        let max = progress.getMax();
        let current = progress.getValue();
        if(current + 10 <= max) {
            progress.update(current + 10);
        }
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Progress value={0} ref="progress" className="mr-20"></Progress>
                    <ButtonGroup>
                        <Button onClick={this.substract.bind(this)}>-</Button>
                        <Button onClick={this.plus.bind(this)}>+</Button>
                    </ButtonGroup>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">动态效果</div>
                    <div>
                        动态效果
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Progress = require("Progress");
const Button = require("Button");
const ButtonGroup = require('ButtonGroup');
const Code = require("../Code");

class Demo extends BaseDemo{

    substract(){
        let progress = this.refs.progress;
        let max = progress.getMax();
        let current = progress.getValue();
        if(current - 10 <= max) {
            progress.update(current - 10);
        }
    }

    plus(){
        let progress = this.refs.progress;
        let max = progress.getMax();
        let current = progress.getValue();
        if(current + 10 <= max) {
            progress.update(current + 10);
        }
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Progress value={0} ref="progress" className="mr-20"></Progress>
                    <ButtonGroup>
                        <Button onClick={this.substract.bind(this)}>-</Button>
                        <Button onClick={this.plus.bind(this)}>+</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;