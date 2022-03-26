import "./App.css"
import React from "react"
import { Input, Image, Select, Button } from "antd"
import { AudioOutlined } from "@ant-design/icons"
import logo from "./waohfun_logo.png"
const { Search } = Input
const { Option } = Select

const selectBefore = (
  <Select defaultValue="Google" className="select-before">
    <Option value="Baidu">Baidu</Option>
    <Option value="Google">Google</Option>
  </Select>
)

enum searchOption {
  Baidu = "Baidu",
  Google = "Google",
}
export default class SearchPage extends React.Component {
  searchPrefix: string = "Google"
  _getSearchPrefixUrl(): string {
    if (this.searchPrefix === searchOption.Google) {
      return "https://www.google.com/search?q="
    }
    switch (this.searchPrefix) {
      case searchOption.Baidu:
        return "https://www.baidu.com/s?wd="
      case searchOption.Google:
      default:
        return "https://www.google.com/search?q="
    }
  }
  icpUrl: string = "https://beian.miit.gov.cn"

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
          <Image preview={false} height={594 / 6} width={1310 / 6} src={logo} />
        </div>
        <text>个人知识总结学习</text>
        <text>内容正等待补充</text>
        {/* <Search
          addonBefore={
            <Select
              onChange={this._onSelectOptionChange}
              defaultValue="Google"
              className="select-before"
            >
              <Option value="Baidu">Baidu</Option>
              <Option value="Google">Google</Option>
            </Select>
          }
          allowClear
          enterButton
          style={{ width: "33vw" }}
          placeholder="搜一搜"
          onSearch={this._onSearch}
        /> */}
        <div className="officalRecord">
          <Button
            type="link"
            style={{ color: "lightgray" }}
            onClick={this._onClickIcp}
          >
            皖ICP备2022003636号
          </Button>
        </div>
      </div>
    )
  }

  _onSearch = (keyWord?: string) => {
    if (!keyWord?.length) {
      return
    }
    window.open(`${this._getSearchPrefixUrl()}${keyWord}`)
  }

  _onSelectOptionChange = (value: string) => {
    this.searchPrefix = value
  }

  _onClickIcp = () => {
    window.open(`${this.icpUrl}`)
  }
}
