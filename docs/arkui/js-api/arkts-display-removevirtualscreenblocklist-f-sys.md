# removeVirtualScreenBlocklist

## removeVirtualScreenBlocklist

```TypeScript
function removeVirtualScreenBlocklist(windowIds: Array<int>): Promise<void>
```

将窗口从禁止投屏显示的名单中移除，被移除的窗口可以在投屏时显示。仅对应用主窗或系统窗口生效。使用Promise异步回调。

**Since:** 18

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowIds | Array&lt;int> | Yes | 窗口id列表，传入子窗窗口id时不生效。窗口id为大于0的整数。推荐使用  [getWindowProperties()](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getwindowproperties9)方法获取窗口  id属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported.Function removeVirtualScreenBlocklist  can not work correctly due to limited device capabilities. |
| 1400003 | This display manager service works abnormally. |

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

