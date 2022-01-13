<!--
 * @Author: luoxi
 * @LastEditTime: 2022-01-13 23:48:40
 * @LastEditors: your name
 * @Description: 组件文档说明
-->
# Avatar

![image](https://github.com/LLLLuoXi/my-site/raw/6d23c6060620c60e40b7f3943e0392bd2b287213/md-imgs/cpn-avatar.jpg)

## 属性

| 属性名 | 含义               | 类型   | 必填 | 默认值 |
| ------ | ------------------ | ------ | ---- | ------ |
| url    | 头像图片路径       | String | 是   | 无     |
| size   | 头像尺寸，宽高相等 | Number | 否   | 150    |

# Icon
![image](https://github.com/LLLLuoXi/my-site/raw/main/md-imgs/cpn-icon.jpg)


图标组件

使用的图标源来自于「阿里巴巴矢量库」

## 属性

| 属性名 | 含义     | 类型   | 必填 | 默认值 |
| ------ | -------- | ------ | ---- | ------ |
| type   | 图标类型 | String | 是   | 无     |

有效的图标类型：
![image](https://github.com/LLLLuoXi/my-site/raw/main/md-imgs/cpn-icon-type.jpg)

# pager
![image](https://github.com/LLLLuoXi/my-site/raw/main/md-imgs/cpn-pager.jpg)

## 属性

| 属性名        | 含义       | 类型   | 必填 | 默认值 |
| ------------- | ---------- | ------ | ---- | ------ |
| current       | 当前页码   | Number | 否   | 1      |
| total         | 总数据量   | Number | 否   | 0      |
| limit         | 页容量     | Number | 否   | 10     |
| visibleNumber | 可见页码数 | Number | 否   | 10     |

## 事件

| 事件名     | 含义     | 事件参数 | 参数类型 |
| ---------- | -------- | -------- | -------- |
| pageChange | 页码变化 | 新的页码 | Number   |


# Empty

![image](https://github.com/LLLLuoXi/my-site/raw/main/md-imgs/cpn-empty.jpg)

该组件需要在外层容器中横向垂直居中

## 属性

| 属性名 | 含义       | 类型   | 必填 | 默认值   |
| ------ | ---------- | ------ | ---- | -------- |
| text   | 显示的文字 | String | 否   | "无数据" |

