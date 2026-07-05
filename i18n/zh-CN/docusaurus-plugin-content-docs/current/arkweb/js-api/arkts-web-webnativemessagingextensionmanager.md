# @ohos.web.webNativeMessagingExtensionManager

The webNativeMessagingExtensionManager module provides the capability of managing message extensions based on web standards.

**起始版本：** 21

**系统能力：** SystemCapability.Web.Webview.Core

## 导入模块

```TypeScript
import { webNativeMessagingExtensionManager } from '@kit.ArkWeb';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [connectNative](arkts-webnativemessagingextensionmanager-connectnative-f.md#connectNative-1) | Connects the current ability to the specified web native message extension ability. |
| [disconnectNative](arkts-webnativemessagingextensionmanager-disconnectnative-f.md#disconnectNative-1) | Disconnects the connection of a specified web native message extension. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ConnectionNativeInfo](arkts-webnativemessagingextensionmanager-connectionnativeinfo-i.md) | Represents the information about the web native message connection. |
| [WebExtensionConnectionCallback](arkts-webnativemessagingextensionmanager-webextensionconnectioncallback-i.md) | As an input parameter when connecting a web native messaging extension, it is used to receive state changes during the connection. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [NmErrorCode](arkts-webnativemessagingextensionmanager-nmerrorcode-e.md) | Provides the native messaging error codes. |

