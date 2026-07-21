# WebExtensionConnectionCallback

As an input parameter when connecting a web native messaging extension, it is used to receive state changes during the connection.

**Since:** 21

<!--Device-webNativeMessagingExtensionManager-interface WebExtensionConnectionCallback--><!--Device-webNativeMessagingExtensionManager-interface WebExtensionConnectionCallback-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webNativeMessagingExtensionManager } from '@kit.ArkWeb';
```

<a id="onconnect"></a>
## onConnect

```TypeScript
onConnect(connection: ConnectionNativeInfo): void
```

Called when a connection is set up.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebExtensionConnectionCallback-onConnect(connection: ConnectionNativeInfo): void--><!--Device-WebExtensionConnectionCallback-onConnect(connection: ConnectionNativeInfo): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | [ConnectionNativeInfo](arkts-arkweb-webnativemessagingextensionmanager-connectionnativeinfo-i.md) | Yes | Connection information. |

**Example**

```TypeScript
import { UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { webNativeMessagingExtensionManager } from '@kit.ArkWeb';
import { common } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onForeground() {
    try {
        let context: common.UIAbilityContext = this.context; // Obtain UIAbilityContext.
        let want:Want = {
          bundleName: 'com.example.app',
          abilityName: 'MyWebNativeMessageExtAbility',
          parameters: {
            'ohos.arkweb.messageReadPipe': { 'type': 'FD', 'value': 333 }, // Assume that the pipefd is valid.
            'ohos.arkweb.messageWritePipe': { 'type': 'FD', 'value': 444 }, // Assume that the pipefd is valid.
            'ohos.arkweb.extensionOrigin': 'chrome-extension://knldjmfmopnpolahpmmgbagdohdnhkik/' // The plug-in URI is required.
          },
        };

        let callback: webNativeMessagingExtensionManager.WebExtensionConnectionCallback = {
            onConnect(connection) {
                console.info('onConnect, connectionId:' + connection.connectionId);
            },
            onDisconnect(connection) {
                console.info('onDisconnect');
            },
            onFailed(code, errMsg) {
                console.info(`onFailed, code:${code} errMsg:${errMsg}`);
            }
        };

        let connectionId = webNativeMessagingExtensionManager.connectNative(context, want, callback);
    } catch (err) {
      // Process input parameter errors.
      let code = (err as BusinessError).code;
      let message = (err as BusinessError).message;
      console.error(`connectNative failed, code is ${code}, message is ${message}`);
    }
  }
}

```

<a id="ondisconnect"></a>
## onDisconnect

```TypeScript
onDisconnect(connection: ConnectionNativeInfo): void
```

Called when a connection is interrupted.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebExtensionConnectionCallback-onDisconnect(connection: ConnectionNativeInfo): void--><!--Device-WebExtensionConnectionCallback-onDisconnect(connection: ConnectionNativeInfo): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | [ConnectionNativeInfo](arkts-arkweb-webnativemessagingextensionmanager-connectionnativeinfo-i.md) | Yes | Connection information. |

**Example**

```TypeScript
import { UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { webNativeMessagingExtensionManager } from '@kit.ArkWeb';
import { common } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onForeground() {
    try {
        let context: common.UIAbilityContext = this.context; // Obtain UIAbilityContext.
        let want:Want = {
          bundleName: 'com.example.app',
          abilityName: 'MyWebNativeMessageExtAbility',
          parameters: {
            'ohos.arkweb.messageReadPipe': { 'type': 'FD', 'value': 333 }, // Assume that the pipefd is valid.
            'ohos.arkweb.messageWritePipe': { 'type': 'FD', 'value': 444 }, // Assume that the pipefd is valid.
            'ohos.arkweb.extensionOrigin': 'chrome-extension://knldjmfmopnpolahpmmgbagdohdnhkik/' // The plug-in URI is required.
          },
        };

        let callback: webNativeMessagingExtensionManager.WebExtensionConnectionCallback = {
            onConnect(connection) {
                console.info('onConnect, connectionId:' + connection.connectionId);
            },
            onDisconnect(connection) {
                console.info('onDisconnect');
            },
            onFailed(code, errMsg) {
                console.info(`onFailed, code:${code} errMsg:${errMsg}`);
            }
        };

        let connectionId = webNativeMessagingExtensionManager.connectNative(context, want, callback);
    } catch (err) {
      // Process input parameter errors.
      let code = (err as BusinessError).code;
      let message = (err as BusinessError).message;
      console.error(`connectNative failed, code is ${code}, message is ${message}`);
    }
  }
}

```

<a id="onfailed"></a>
## onFailed

```TypeScript
onFailed(code: NmErrorCode, errMsg: string): void
```

Called when the connection fails.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

<!--Device-WebExtensionConnectionCallback-onFailed(code: NmErrorCode, errMsg: string): void--><!--Device-WebExtensionConnectionCallback-onFailed(code: NmErrorCode, errMsg: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | [NmErrorCode](arkts-arkweb-webnativemessagingextensionmanager-nmerrorcode-e.md) | Yes | Error code. |
| errMsg | string | Yes | Error message. |

**Example**

```TypeScript
import { UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { webNativeMessagingExtensionManager } from '@kit.ArkWeb';
import { common } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onForeground() {
    try {
        let context: common.UIAbilityContext = this.context; // Obtain UIAbilityContext.
        let want:Want = {
          bundleName: 'com.example.app',
          abilityName: 'MyWebNativeMessageExtAbility',
          parameters: {
            'ohos.arkweb.messageReadPipe': { 'type': 'FD', 'value': 333 }, // Assume that the pipefd is valid.
            'ohos.arkweb.messageWritePipe': { 'type': 'FD', 'value': 444 }, // Assume that the pipefd is valid.
            'ohos.arkweb.extensionOrigin': 'chrome-extension://knldjmfmopnpolahpmmgbagdohdnhkik/' // The plug-in URI is required.
          },
        };

        let callback: webNativeMessagingExtensionManager.WebExtensionConnectionCallback = {
            onConnect(connection) {
                console.info('onConnect, connectionId:' + connection.connectionId);
            },
            onDisconnect(connection) {
                console.info('onDisconnect');
            },
            onFailed(code, errMsg) {
                console.info(`onFailed, code:${code} errMsg:${errMsg}`);
            }
        };

        let connectionId = webNativeMessagingExtensionManager.connectNative(context, want, callback);
    } catch (err) {
      // Process input parameter errors.
      let code = (err as BusinessError).code;
      let message = (err as BusinessError).message;
      console.error(`connectNative failed, code is ${code}, message is ${message}`);
    }
  }
}

```

