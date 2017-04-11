const React = require("react");
const ReactDOM = require("react-dom");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Dialog = require("Dialog");
const Code = require("../Code");
const Button = require("Button");

class Demo extends BaseDemo{

    openDialog(){
        this.refs.dialog.open();
        this.refs.dialog.setData({params: 1});
    }

    onDialogConfirm(flag){
        let data = this.refs.dialog.getData();
        console.log(data);
        console.log(flag);
        if(flag){
            console.log("ok click");
        }else{
            console.log("cancel click");
        }

        //must return true
        return true;
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Dialog ref="dialog" title="提示" onConfirm={this.onDialogConfirm.bind(this)} hasFooter={true} okButtonText="提 交" cancleButtonText="关 闭">
                        <p>dialog content</p>
                        <p>dialog content</p>
                        <p>dialog content</p>
                    </Dialog>

                    <Button theme="success" onClick={this.openDialog.bind(this)}>open dialog</Button>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">footer</div>
                    <div>
                        hasFooter设置Dialog是否显示默认Footer
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Dialog = require("Dialog");

openDialog(){
    this.refs.dialog.open();
    this.refs.dialog.setData({params: 1});
}

onDialogConfirm(flag){
    let data = this.refs.dialog.getData();
    console.log(data);
    console.log(flag);
    if(flag){
        console.log("ok click");
    }else{
        console.log("cancel click");
    }

    //must return true
    return true;
}

ReactDOM.render(
<div>
    <Dialog ref="dialog" title="提示" onConfirm={this.onDialogConfirm.bind(this)} hasFooter={true} okButtonText="提 交" cancleButtonText="关 闭">
        <p>dialog content</p>
        <p>dialog content</p>
        <p>dialog content</p>
    </Dialog>

    <Button onClick={this.openDialog.bind(this)}>open dialog</Button>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;