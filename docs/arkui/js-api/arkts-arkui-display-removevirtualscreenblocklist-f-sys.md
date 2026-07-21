# removeVirtualScreenBlocklist (System API)

## Modules to Import

```TypeScript
import { display } from '@kit.ArkUI';
```

<a id="removevirtualscreenblocklist"></a>
## removeVirtualScreenBlocklist

```TypeScript
function removeVirtualScreenBlocklist(windowIds: Array<number>): Promise<void>
```

Removes windows from the list of windows that are not allowed to be displayed during casting. This API takes effect only for the main window of an application or system windows. This API uses a promise to return the result.

**Since:** 18

<!--Device-display-function removeVirtualScreenBlocklist(windowIds: Array<int>): Promise<void>--><!--Device-display-function removeVirtualScreenBlocklist(windowIds: Array<int>): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowIds | Array&lt;number&gt; | Yes | List of window IDs. If a child window ID is passed in, it will not take effect.The window ID is an integer greater than 0. You are advised to call [getWindowProperties()](@ohos.window:window.getwindowproperties) to obtain the window ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Function removeVirtualScreenBlocklist can not work correctly due to limited device capabilities. |
| [1400003](../errorcode-display.md#1400003-abnormal-display-manager-service) | This display manager service works abnormally. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { display, window } from '@kit.ArkUI';

export default class EntryAbility extends UIAbility {
  // ...
  onWindowStageCreate(windowStage: window.WindowStage) {
    // ...
    let windowId = windowStage.getMainWindowSync().getWindowProperties().id; // Obtain the window IDs.
    let windowIds = [windowId];

    // Add windows to the list of windows that are not allowed to be displayed during casting.
    let promise = display.addVirtualScreenBlocklist(windowIds);
    promise.then(() => {
      console.info('Succeeded in adding virtual screen blocklist.');
    }).catch((err: BusinessError) => {
      console.error(`Failed to add virtual screen blocklist. Code: ${err.code}, message: ${err.message}`);
    });

    // Remove windows from the list of windows that are not allowed to be displayed during casting.
    promise = display.removeVirtualScreenBlocklist(windowIds);
    promise.then(() => {
      console.info('Succeeded in removing virtual screen blocklist.');
    }).catch((err: BusinessError) => {
      console.error(`Failed to remove virtual screen blocklist. Code: ${err.code}, message: ${err.message}`);
    });
  }
}

```

