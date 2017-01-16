const React = require("react");
const BaseDemo = require("../BaseDemo");
const FontIcon = require("FontIcon");
const Layout = require("Layout");
const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;
const Sider = require("Sider");
const Code = require("../Code");

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Layout className="demo-layout">
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>

                    <Layout className="demo-layout mt-30">
                        <Header>Header</Header>
                        <Layout>
                            <Sider>Sider</Sider>
                            <Content>Content</Content>
                        </Layout>
                        <Footer>Footer</Footer>
                    </Layout>

                    <Layout className="demo-layout mt-30">
                        <Header>Header</Header>
                        <Layout>
                            <Content>Content</Content>
                            <Sider>Sider</Sider>
                        </Layout>
                        <Footer>Footer</Footer>
                    </Layout>

                    <Layout className="demo-layout mt-30">
                        <Sider>Sider</Sider>
                        <Layout>
                            <Header>Header</Header>
                            <Content>Content</Content>
                            <Footer>Footer</Footer>
                        </Layout>
                    </Layout>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">基本用法</div>
                    <div>
                        基本布局
                        <FontIcon icon={"chevron-circle-down"} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const Layout = require("Layout");
const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;
const Sider = require("Sider");


ReactDOM.render(
<div>
    <Layout className="demo-layout">
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
    </Layout>

    <Layout className="demo-layout mt-30">
        <Header>Header</Header>
        <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>

    <Layout className="demo-layout mt-30">
        <Header>Header</Header>
        <Layout>
            <Content>Content</Content>
            <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>

    <Layout className="demo-layout mt-30">
        <Sider>Sider</Sider>
        <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    </Layout>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

module.exports = Demo;