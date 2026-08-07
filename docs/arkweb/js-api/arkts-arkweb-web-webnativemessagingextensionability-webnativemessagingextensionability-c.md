# WebNativeMessagingExtensionAbility

class of web native messaging extension ability.

**Inheritance/Implementation:** WebNativeMessagingExtensionAbility extends [ExtensionAbility](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-extensionability-extensionability-c.md)

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

<!--Device-unnamed-declare class WebNativeMessagingExtensionAbility extends ExtensionAbility--><!--Device-unnamed-declare class WebNativeMessagingExtensionAbility extends ExtensionAbility-End-->

**System capability:** SystemCapability.Web.Webview.Core

## onConnectNative

```TypeScript
onConnectNative(info: ConnectionInfo): void
```

Called when a web native messaging connection is established.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebNativeMessagingExtensionAbility-onConnectNative(info: ConnectionInfo): void--><!--Device-WebNativeMessagingExtensionAbility-onConnectNative(info: ConnectionInfo): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Indicates connection information about new native connection. |

## onDestroy

```TypeScript
onDestroy(): void
```

Called when the WebNativeMessagingExtensionAbility is destroyed.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebNativeMessagingExtensionAbility-onDestroy(): void--><!--Device-WebNativeMessagingExtensionAbility-onDestroy(): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

## onDisconnectNative

```TypeScript
onDisconnectNative(info: ConnectionInfo): void
```

Called when a web native messaging connection is disconnected.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebNativeMessagingExtensionAbility-onDisconnectNative(info: ConnectionInfo): void--><!--Device-WebNativeMessagingExtensionAbility-onDisconnectNative(info: ConnectionInfo): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Indicates connection information about new native connection. |

## context

```TypeScript
context: WebNativeMessagingExtensionContext
```

Indicates web native messaging extension ability context.

**Type:** WebNativeMessagingExtensionContext

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebNativeMessagingExtensionAbility-context: WebNativeMessagingExtensionContext--><!--Device-WebNativeMessagingExtensionAbility-context: WebNativeMessagingExtensionContext-End-->

**System capability:** SystemCapability.Web.Webview.Core

