/**
 * Created by cqb32_000 on 2016-12-01.
 */

define(function(module, exports){
    return [
        {id:"1", text: "基础说明", children: [
            {id:"11", text: "使用说明",link: "base/use"}
        ]},
        {id: "2", "text": "页面元素", children: [
            {id:"21", text: "颜色",link: "elements/color"},
            {id:"22", text: "字体",link: "elements/font"}
        ]},
        {id: "3", "text": "组件", children: [
            {id:"31", text: "Button",link: "components/button"},
            {id:"32", text: "CheckBox",link: "components/checkbox"},
            {id:"33", text: "Radio",link: "components/radio"},
            {id:"34", text: "Icon",link: "components/icon"},
            {id:"35", text: "All Icons",link: "components/allIcons"},
            {id:"36", text: "Affix",link: "components/affix"},
            {id:"37", text: "Grid",link: "components/grid"},
            {id:"371", text: "Layout",link: "components/layout"},
            {id:"38", text: "Breadcrumb",link: "components/breadcrumb"},
            {id:"39", text: "DateTime",link: "components/datetime"},
            {id:"310", text: "DateRange",link: "components/daterange"},
            {id:"311", text: "Pagination",link: "components/pagination"},
            {id:"312", text: "Input",link: "components/input"},
            {id:"313", text: "Steps",link: "components/steps"},
            {id:"314", text: "Switch",link: "components/switch"},
            {id:"315", text: "Card",link: "components/card"},
            {id:"316", text: "Tooltip",link: "components/tooltip"}
        ]}
    ];
});