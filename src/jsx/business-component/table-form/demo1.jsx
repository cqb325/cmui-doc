const React = require("react");
const ReactDOM = require("react-dom");
const BaseDemo = require("../../components/BaseDemo");
const Code = require("../../components/Code");
const FontIcon = require("FontIcon");
const Button = require("Button");
const ALL_DISTRICT = require("../../all_district");
const TableForm = require("business/TableForm");


class Demo extends BaseDemo{

    addRow(){
        this.refs.tableForm.addRow();
    }

    removeRow(id){
        this.refs.tableForm.removeRowById(id);
    }

    getData(){
        console.log(this.refs.tableForm.getData());
    }


    onChange(name, value, col, items, selectItem){
        if(name === "loopDomain"){
            items["checkURL"].setValue("http://"+value);
        }
    }

    componentDidMount(){
        let table_form = ReactDOM.findDOMNode(this.refs.tableForm);

        let scope = this;
        $(table_form).on("click",".delete-btn", function () {
            let id = $(this).data("id");
            scope.removeRow(id);
        })
    }

    render(){
        let columns = [
            {name: "domain", type: "text", text: "域名", props: {required: true, placeholder: "www.baidu.com"}},
            {name: "loopDomain", type: "textarea", text: "回源IP/回源域名", props: {required: true}, messages: {required: "请填写回源IP/回源域名"}},
            {name: "checkURL", type: "textarea", text: "回源检测URL", props: {required: true}},
            {name: "clientIP", type: "select", text: "获取客户端IP", props: {required: true, defaultValue: "1", data: [{id: "0", text: "北京"},{id: "1", text: "上海"}]}},
            {name: "district", type: "select", text: "加速区域", props: {required: true, multi: true, data: ALL_DISTRICT}},
            {name: "op", text: "操作", format: function(value, col, row){
                return '<a href="javascript:void(0)" class="text-blue delete-btn" data-id="'+row.id+'"><i class="fa fa-trash"></i>删除</a>';
            }},
        ];

        return (
            <div>
                <div className="code-box-demo">
                    <TableForm ref="tableForm" bordered={true} columns={columns} className="form-table text-center" onChange={this.onChange.bind(this)}></TableForm>

                    <div className="mt-25 text-center">
                        <Button theme="primary" >提 交</Button>
                    </div>

                    <div className="mt-20">
                        <Button onClick={this.addRow.bind(this)}>添加</Button>
                        <Button onClick={this.getData.bind(this)}>获取数据</Button>
                    </div>

                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">简单的表单</div>
                    <div>
                        通过配置来展现表单<br/>
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const SimpleForm = require("business/SimpleForm");

let formData = {
    action: "asdasdasd",
    method: "post",
    props: {
        layout: "stack-inline",
        labelWidth: "120",
        useDefaultSubmitBtn: true,
        submitText: "",
        target: "",
        className: "",
        style: {}
    },
    items: [
        {name: "shortName", label: "企业简称：", type: "text", props: {}, rules: {required: true}, messages: {required: "请填写企业简称"}},
        {name: "name", label: "企业名称：", type: "text", props: {required: true}, rules: {}, messages: {}},
        {name: "email", label: "企业联系邮箱：", type: "text", props: {required: true}, rules: {email: true}, messages: {}},
        {name: "tel", label: "企业联系电话：", type: "number", props: {required: true, maxLength: 11}, rules: {mobile: true,}, messages: {}},
        {type: "row", props: {className: "cm-form-inline", required: true}, children: [
            {name: "province", label: "详细地址：", type: "select", props: {
                data: ALL_DISTRICT
            }, rules: {}, messages: {}},
            {name: "city", label: "", type: "select", props: {
                data: []
            }, rules: {}, messages: {}},
        ]},
        {name: "address", label: "&nbsp;", type: "textarea", props: {
            itemStyle: {height: 50, width: 335}
        }, rules: {required: true}, messages: {}},
        {name: "radio", label: "类型选择：", type: "radio", props: {required: true, data: ["央企","国企","民企"]}, rules: {required: true}, messages: {}},
        {name: "radio2", label: "类型选择2：", type: "radio", props: {stick: true, required: true, data: ["央企","国企","民企"]}, rules: {required: true}, messages: {}},
        {name: "checkbox", label: "权限选择：", type: "checkbox", props: {required: true, data: [{id: "0", text: "admin"},{id: "1", text: "企业"},{id: "2", text: "运营"}]}, rules: {required: true}, messages: {}},
    ]
};

ReactDOM.render(
<div>
    <SimpleForm ref="simpleForm" data={formData} onChange={this.onChange.bind(this)}></SimpleForm>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;