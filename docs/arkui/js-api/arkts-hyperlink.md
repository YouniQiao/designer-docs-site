# hyperlink

## hyperlink

```TypeScript
hyperlink(address: string | Resource, content?: string | Resource)
```

定义超链接组件构造函数。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| address | string \| Resource | Yes | Hyperlink组件跳转的网页。 |
| content | string \| Resource | No | Hyperlink组件中超链接显示文本。 默认值：''。若不传该参数且组件内无子组件时，默认显示address参数值链接地址。  说明： 组件内有子组件时，不显示超链接文本。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [HyperlinkAttribute](arkts-hyperlinkattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |

### Interfaces

| Name | Description |
| --- | --- |
| [HyperlinkInterface](arkts-hyperlinkinterface-i.md) | 超链接组件，组件宽高范围内点击实现跳转。 > **说明：** > > - 该组件仅支持与系统浏览器配合使用。 |

### Constants

| Name | Description |
| --- | --- |
| [Hyperlink](arkts-hyperlink-con.md#Hyperlink) | 超链接组件，组件宽高范围内点击实现跳转。 > **说明：** > > - 该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。 > > - 该组件仅支持与系统浏览器配合使用。 ###### 需要权限 跳转的目标应用使用网络时，需要申请权限ohos.permission.INTERNET。具体申请方式请参考[声明权限](docroot://security/AccessToken/declare-permissions.md)。 ###### 子组件 可以包含[Image]{@link image}子组件。 |
| [HyperlinkInterface](arkts-hyperlink-con.md#HyperlinkInterface) | 定义超链接组件实例。 |

