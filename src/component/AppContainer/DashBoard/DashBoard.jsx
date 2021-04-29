import React from "react";
import { Layout, Divider } from "antd";
import { Redirect, Route, withRouter } from "react-router-dom";
import { NavigationMenu } from "../DashBoard";
import Filter from "./Filters";
import "./DashBoard.scss";
import ResourceGrid from "./ResourceList/ResourceGrid";

import ResourceList from "./ResourceList";

const { Content, Sider } = Layout;

const DashBoard = ({history}) => {

  return (
    <Layout
      style={{
        overflowX: "auto",
      }}
    >
      <Sider
        className="sider"
        breakpoint="md"
        collapsedWidth="0"
        style={{ background: "#fff" }}
      >
        <div className="logo">
          <img width="180px" height="150px" src="/cvr.jpg" alt="" />
        </div>
        <Divider></Divider>
        <NavigationMenu history={history} />
      </Sider>
      <Layout style={{ minHeight: "100%" }}>
        {/* <NavigationHeader /> */}
        <Filter></Filter>

        <Content
          style={{
            background: "#fff",
            margin: 0,
            minHeight: 280,
            height: "100%",
            paddingTop: "1.5rem",
            overflow: "auto",
          }}
        >
          <Route exact path="/">
            <Redirect to="oxygen"></Redirect>
          </Route>
          <Route
            path="/oxygen"
            render={(props) => <ResourceGrid id="oxygen" {...props} />}
          ></Route>
          <Route
            path="/beds"
            render={(props) => <ResourceGrid id="beds" {...props} />}
          ></Route>
          <Route
            path="/remdesivir"
            render={(props) => <ResourceGrid id="remdesivir" {...props} />}
          ></Route>
          <Route
            path="/fabiflu"
            render={(props) => <ResourceGrid id="fabiflu" {...props} />}
          ></Route>
          <Route
            path="/plasma"
            render={(props) => <ResourceGrid id="plasma" {...props} />}
          ></Route>
          <Route
            path="/others"
            render={(props) => <ResourceGrid id="others" {...props} />}
          ></Route>
          <Route
            path="/links"
            render={(props) => <ResourceList id="links" {...props} />}
          ></Route>
        </Content>
      </Layout>
    </Layout>
  );
};

export default withRouter(DashBoard);
