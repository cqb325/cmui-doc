const React = require("react");
const BaseDemo = require("../../components/BaseDemo");
const Code = require("../../components/Code");
const FontIcon = require("FontIcon");
const Button = require("Button");
const ALL_DISTRICT = require("../../all_district");
const SimpleForm = require("business/SimpleForm");


class Demo extends BaseDemo{

    onChange(item, value, selectItem){
        if(item.name === "province"){
            let cities = selectItem.children;
            let city = this.refs.simpleForm.getItem("city");
            city.setData(cities);
        }
    }

    render(){
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
        return (
            <div>
                <div className="code-box-demo">
                    <SimpleForm ref="simpleForm" data={formData} onChange={this.onChange.bind(this)}></SimpleForm>
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