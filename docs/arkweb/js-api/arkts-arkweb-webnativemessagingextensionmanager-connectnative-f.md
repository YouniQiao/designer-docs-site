# connectNative

## Modules to Import

```TypeScript
import { webNativeMessagingExtensionManager } from '@kit.ArkWeb';
```

## connectNative

```TypeScript
function connectNative(context: UIAbilityContext, want: Want, callback: WebExtensionConnectionCallback): number
```

Connects the current ability to the specified web native message extension ability.

**Since:** 21

**Required permissions:** ohos.permission.WEB_NATIVE_MESSAGING

**Model restriction:** This API can be used only in the stage model.

<!--Device-webNativeMessagingExtensionManager-function connectNative(context: UIAbilityContext, want: Want, callback: WebExtensionConnectionCallback): number--><!--Device-webNativeMessagingExtensionManager-function connectNative(context: UIAbilityContext, want: Want, callback: WebExtensionConnectionCallback): number-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [UIAbilityContext](../../apis-ability-kit/arkts-apis/arkts-ability-common-uiabilitycontext-t.md) | Yes | Context of the caller UIAbility. |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| callback | [WebExtensionConnectionCallback](arkts-arkweb-webnativemessagingextensionmanager-webextensionconnectioncallback-i.md) | Yes | Callback object of the WebExtensionConnection status. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Connection ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

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

