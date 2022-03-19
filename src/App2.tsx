import "./App.css"
import React from "react"
import { Input, Image } from "antd"
import { AudioOutlined } from "@ant-design/icons"
import logo from "./waohfun_logo.png"
const { Search } = Input

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
)

export default class SearchPage extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "30vh",
        }}
      >
        <div style={{ paddingBottom: 20 }}>
          <Image
            preview={false}
            height={(68 * 2) / 3}
            width={(344 * 2) / 3}
            src={logo}
          />
        </div>
        <Search
          allowClear
          enterButton
          style={{ width: "33vw" }}
          placeholder="欢乐搜索"
          onSearch={() => console.log("helloworld")}
        />
      </div>
    )
  }
}
