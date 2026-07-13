# @ohos.web.webNativeMessagingExtensionManager

The webNativeMessagingExtensionManager module provides the capability of managing message extensions based on web
standards.

**Since:** 21

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webNativeMessagingExtensionManager } from '@kit.ArkWeb';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [connectNative](arkts-arkweb-connectnative-f.md#connectnative-1) | Connects the current ability to the specified web native message extension ability. |
| [disconnectNative](arkts-arkweb-disconnectnative-f.md#disconnectnative-1) | Disconnects the connection of a specified web native message extension. |

### Interfaces

| Name | Description |
| --- | --- |
| [ConnectionNativeInfo](arkts-arkweb-connectionnativeinfo-i.md) | Represents the information about the web native message connection. |
| [WebExtensionConnectionCallback](arkts-arkweb-webextensionconnectioncallback-i.md) | As an input parameter when connecting a web native messaging extension, it is used to receivestate changes during the connection. |

### Enums

| Name | Description |
| --- | --- |
| [NmErrorCode](arkts-arkweb-nmerrorcode-e.md) | Provides the native messaging error codes. |

