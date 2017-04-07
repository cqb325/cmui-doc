const React = require("react");
const BaseDemo = require("../../components/BaseDemo");
const SimpleListPage = require("business/SimpleListPage");
const Code = require("../../components/Code");
const FontIcon = require("FontIcon");
const FormControl = require("FormControl");
const Input = require("Input");
const Select = require("Select");
const Button = require("Button");


class Demo extends BaseDemo{

    render(){
        let columns = [
            {name: "index", text: "序号", type: "index"},
            {name: "username", text: "用户名"},
            {name: "mobile", text: "手机号码"},
            {name: "email", text: "邮箱"},
            {name: "createTime", text: "注册时间"},
            {name: "status", text: "状态", format: function(value, column, row){
                return ["禁用","激活"][value];
            }},
            {name: "op", text: "操作", format: function(value, column, row){
                if(row.status) {
                    return '<a class="text-warning" href="javascript:void(0)" data-id="'+row.id+'">禁用</a>';
                }else{
                    return '<a href="javascript:void(0)" class="text-success" data-id="'+row.id+'">激活</a>'
                }
            }}
        ];
        return (
            <div>
                <div className="code-box-demo">
                    <div className="search-wrap mb-10">
                        <label>用户名</label> <Input type="text" name="username" className="searchItem"/>
                        <label>手机号</label> <Input type="number" name="mobile"  className="searchItem"/>
                        <label>状态</label> <Select name="status" data={[{id: "0", text: "禁用"},{id: "1", text: "激活"}]} className="searchItem"/>
                        <a className="cm-button primary ml-10" id="search-btn">查 询</a>
                    </div>
                    <SimpleListPage pagination={true} columns={columns} action="http://192.168.105.202:8415/mock/cdn/getOperatorList.html"></SimpleListPage>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">列表页组件的约定</div>
                    <div>
                        约定1：查询项的name是必须的,class 为searchItem<br/>
                        约定2：查询按钮的id为search-btn
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const SimpleListPage = require("business/SimpleListPage");
const FormControl = require("FormControl");
const Input = require("Input");
const Select = require("Select");
const Button = require("Button");

let columns = [
    {name: "username", text: "用户名"},
    {name: "mobile", text: "手机号码"},
    {name: "email", text: "邮箱"},
    {name: "createTime", text: "注册时间"},
    {name: "status", text: "状态", format: function(value, column, row){
        return ["禁用","激活"][value];
    }}
];

ReactDOM.render(
<div>
    <div className="search-wrap mb-10">
        <label>用户名</label> <Input type="text" name="username" className="searchItem"/>
        <label>手机号</label> <Input type="number" name="mobile"  className="searchItem"/>
        <label>状态</label> <Select name="status" data={[{id: "0", text: "禁用"},{id: "1", text: "激活"}]} className="searchItem"/>
        <a className="cm-button primary ml-10" id="search-btn">查 询</a>
    </div>
    <SimpleListPage pagination={true} columns={columns} action="http://192.168.105.202:8415/mock/cdn/getOperatorList.html"></SimpleListPage>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;