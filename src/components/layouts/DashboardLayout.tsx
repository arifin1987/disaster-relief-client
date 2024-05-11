import { NavLink, Outlet } from "react-router-dom";

import { Layout, Menu } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "Home",
    label: <NavLink to="/">Home</NavLink>,
  },
  {
    key: "Dashboard",
    label: <NavLink to="/dashboard">Dashboard</NavLink>,
    children: [
      {
        key: "donations",
        label: <NavLink to="/dashboard/donations">All Donations</NavLink>,
      },
      {
        key: "create donation",
        label: (
          <NavLink to="/dashboard/create-donation">Create Donation</NavLink>
        ),
      },
    ],
  },
];

const DashboardLayout = () => {
  return (
    <Layout style={{ height: "full", width: "full" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: "100vh",
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
