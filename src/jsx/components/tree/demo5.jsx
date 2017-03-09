const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Tree = require("Tree");
const Code = require("../Code");

class Demo extends BaseDemo{

    componentDidMount(){
        let tree = this.refs.tree;
        tree.on("open", function(item){
            if(item.open) {
                window.setTimeout(function(){
                    tree.loadDynamicJSON(item, [{id: new Date().getTime(), text: "新节点"}]);
                }, 300);
            }
        });
    }

    render(){
        let treeData = [{
            id: 0,
            text: "中国",
            open: true,
            children: [
                {
                    id: '1',
                    text: "北京",
                    children: [{id: '11', text: "海淀"},{id: '12', text: "朝阳"}]
                },{
                    id: '2',
                    text: "上海"
                }
            ]
        }];

        return (
            <div>
                <div className="code-box-demo">
                    <Tree data={treeData} ref="tree"></Tree>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">实时加载子节点</div>
                    <div>
                        在节点open的事件中通过loadDynamicJSON函数加载子节点
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Tree = require("Tree");

class Demo extends BaseDemo{

    componentDidMount(){
        let tree = this.refs.tree;
        tree.on("open", function(item){
            if(item.open) {
                window.setTimeout(function(){
                    tree.loadDynamicJSON(item, [{id: new Date().getTime(), text: "新节点"}]);
                }, 300);
            }
        });
    }

    render(){
        let treeData = [{
            id: 0,
            text: "中国",
            open: true,
            children: [
                {
                    id: '1',
                    text: "北京",
                    children: [{id: '11', text: "海淀"},{id: '12', text: "朝阳"}]
                },{
                    id: '2',
                    text: "上海"
                }
            ]
        }];

        return (
            <div className="code-box-demo">
                <Tree data={treeData} ref="tree"></Tree>
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