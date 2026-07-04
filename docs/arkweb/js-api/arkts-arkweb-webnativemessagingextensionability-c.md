# WebNativeMessagingExtensionAbility

class of web native messaging extension ability.

**Inheritance/Implementation:** WebNativeMessagingExtensionAbility extends [ExtensionAbility](../../apis-ability-kit/arkts-apis/arkts-ability-extensionability-c.md#extensionability)

**Since:** 21

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { ConnectionInfo } from '@ohos.web.WebNativeMessagingExtensionAbility';
```

## onConnectNative

```TypeScript
onConnectNative(info: ConnectionInfo): void
```

Called when a web native messaging connection is established.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | ConnectionInfo | Yes | Indicates connection information about new native connection. |

**Example**

```TypeScript
import { WebNativeMessagingExtensionAbility, ConnectionInfo } from '@kit.ArkWeb';

export class MyWebNativeMessagingExtension extends WebNativeMessagingExtensionAbility {
  onConnectNative(info: ConnectionInfo): void {
    console.info('Web Native connection established!');
    console.info(`Connection ID: ${info.connectionId}`);
    console.info(`Caller bundle: ${info.bundleName}`);
    // Process the service logic after the connection is established.
  }
}

```

## onDestroy

```TypeScript
onDestroy(): void
```

Called when the WebNativeMessagingExtensionAbility is destroyed.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Example**

```TypeScript
import { WebNativeMessagingExtensionAbility } from '@kit.ArkWeb';

export class MyWebNativeMessagingExtension extends WebNativeMessagingExtensionAbility {
  onDestroy(): void {
    console.info('WebNativeMessagingExtensionAbility is about to be destroyed!');
    // Release resources or perform cleanup operations.
  }
}

```

## onDisconnectNative

```TypeScript
onDisconnectNative(info: ConnectionInfo): void
```

Called when a web native messaging connection is disconnected.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | ConnectionInfo | Yes | Indicates connection information about new native connection. |

**Example**

```TypeScript
import { WebNativeMessagingExtensionAbility, ConnectionInfo } from '@kit.ArkWeb';

export class MyWebNativeMessagingExtension extends WebNativeMessagingExtensionAbility {
  onDisconnectNative(info: ConnectionInfo): void {
    console.info('Web Native connection closed!');
    console.info(`Connection ID: ${info.connectionId}`);
    // Process the cleanup after the connection is disconnected.
  }
}

```

## context

```TypeScript
context: WebNativeMessagingExtensionContext
```

Indicates web native messaging extension ability context.

**Type:** WebNativeMessagingExtensionContext

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Web.Webview.Core

