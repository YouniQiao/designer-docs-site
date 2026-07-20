# disconnectNative

## Modules to Import

```TypeScript
import { webNativeMessagingExtensionManager } from '@kit.ArkWeb';
```

## disconnectNative

```TypeScript
function disconnectNative(connectionId: number): Promise<void>
```

Disconnects the connection of a specified web native message extension.

**Since:** 21

**Required permissions:** ohos.permission.WEB_NATIVE_MESSAGING

**Model restriction:** This API can be used only in the stage model.

<!--Device-webNativeMessagingExtensionManager-function disconnectNative(connectionId: number): Promise<void>--><!--Device-webNativeMessagingExtensionManager-function disconnectNative(connectionId: number): Promise<void>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connectionId | number | Yes | Connection ID<br>The value range is all integers. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [16000011](../../apis-ability-kit/errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |
| [16000050](../../apis-ability-kit/errorcode-ability.md#16000050-internal-error) | Internal error. Possible causes: 1. Failed to connect to the system service;2. The system service failed to communicate with dependency module. |

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { webNativeMessagingExtensionManager } from '@kit.ArkWeb';

export default class EntryAbility extends UIAbility {
  async disconnect() {
    try {
        let connectionId = 1;
        // Assume that the connection has been established and connectionId has been obtained.
        await webNativeMessagingExtensionManager.disconnectNative(connectionId).then(() => {
            console.info('disconnectNative success');
        })
    } catch (err) {
      // Process input parameter errors.
      let code = (err as BusinessError).code;
      let message = (err as BusinessError).message;
      console.error(`disconnectNative failed, code is ${code}, message is ${message}`);
    }
  }
  onForeground() {
    this.disconnect();
  }
}

```

