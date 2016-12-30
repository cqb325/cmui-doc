const React = require("react");
const Label = require("Label");


let Page = React.createClass({

    render(){

        return (
            <div className="main-container">
                <h1 className="page-h1">色值参考</h1>
                <blockquote className="page-tip">
                    色彩在界面设计中的使用应同时具备品牌识别性以及界面设计功能性。色彩是相当感性的东西，设计中对色彩的运用首要应考虑到品牌层面的表达，另外很重要的一点是色彩的运用应达到信息传递，动作指引，交互反馈，或是强化和凸现某一个元素的目的。任何颜色的选取和使用应该是有意义的。
                </blockquote>

                <h1 className="page-h1">主色</h1>
                <blockquote className="page-tip">
                    CMUI的主色是鲜艳、友好的蓝色。
                </blockquote>
                <div className="mb-10">
                    <Label grid={0.3} className="color-box">
                        <div className="bg-blue-light color-box-inner">
                            <div>LIGHT BLUE</div>
                            <div>#58B7FF</div>
                        </div>
                    </Label>
                    <Label grid={0.3} className="color-box">
                        <div className="bg-blue color-box-inner">
                            <div>BLUE</div>
                            <div>#20A0FF</div>
                        </div>
                    </Label>
                    <Label grid={0.3} className="color-box">
                        <div className="bg-blue-dark color-box-inner">
                            <div>DARK BLUE</div>
                            <div>#1D8CE0</div>
                        </div>
                    </Label>
                </div>


                <h1 className="page-h1">辅助色</h1>
                <blockquote className="page-tip">
                    除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。
                </blockquote>

                <div className="mb-10">
                    <Label grid={0.25} className="color-box">
                        <div className="bg-blue color-box-inner">
                            <div>BLUE</div>
                            <div>#20A0FF</div>
                        </div>
                    </Label>
                    <Label grid={0.25} className="color-box">
                        <div className="bg-success color-box-inner">
                            <div>SUCCESS</div>
                            <div>#13CE66</div>
                        </div>
                    </Label>
                    <Label grid={0.25} className="color-box">
                        <div className="bg-warning color-box-inner">
                            <div>WARNING</div>
                            <div>#F7BA2A</div>
                        </div>
                    </Label>
                    <Label grid={0.25} className="color-box">
                        <div className="bg-danger color-box-inner">
                            <div>DANGER</div>
                            <div>#FF4949</div>
                        </div>
                    </Label>
                </div>

                <h1 className="page-h1">中性色</h1>
                <blockquote className="page-tip">
                    中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。
                </blockquote>

                <div className="mb-10">
                    <Label grid={0.25} className="color-box">
                        <div className="bg-dark color-box-inner">
                            <div>DARK</div>
                            <div>#1F2D3D</div>
                        </div>
                        <div className="bg-dark-light color-box-inner">
                            <div>LIGHT DARK</div>
                            <div>#324057</div>
                        </div>
                        <div className="bg-dark-lighter color-box-inner">
                            <div>LIGHTER DARK</div>
                            <div>#475669</div>
                        </div>
                    </Label>

                    <Label grid={0.25} className="color-box">
                        <div className="bg-silver color-box-inner">
                            <div>Silver</div>
                            <div>#8492A6</div>
                        </div>
                        <div className="bg-silver-light color-box-inner">
                            <div>LIGHT Silver</div>
                            <div>#99A9BF</div>
                        </div>
                        <div className="bg-silver-lighter color-box-inner">
                            <div>LIGHTER Silver</div>
                            <div>#C0CCDA</div>
                        </div>
                    </Label>

                    <Label grid={0.25} className="color-box">
                        <div className="bg-gray color-box-inner text-dark-lighter">
                            <div>GRAY</div>
                            <div>#D3DCE6</div>
                        </div>
                        <div className="bg-gray-light color-box-inner text-dark-lighter">
                            <div>LIGHT GRAY</div>
                            <div>#E5E9F2</div>
                        </div>
                        <div className="bg-gray-lighter color-box-inner text-dark-lighter">
                            <div>LIGHTER GRAY</div>
                            <div>#EFF2F7</div>
                        </div>
                    </Label>

                    <Label grid={0.25} className="color-box">
                        <div className="bg-white color-box-inner text-dark-lighter">
                            <div>WHITE</div>
                            <div>#F9FAFC</div>
                        </div>
                        <div className="bg-white-light color-box-inner text-dark-lighter">
                            <div>LIGHT WHITE</div>
                            <div>#FFFFFF</div>
                        </div>
                        <div className="bg-white color-box-inner text-dark">

                        </div>
                    </Label>

                </div>
            </div>
        );
    }
});

module.exports = Page;