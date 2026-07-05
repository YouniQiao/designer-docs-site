# shiftAppWindowFocus

## shiftAppWindowFocus

```TypeScript
function shiftAppWindowFocus(sourceWindowId: int, targetWindowId: int): Promise<void>
```

在同应用内将窗口焦点从源窗口转移到目标窗口，仅支持应用主窗、子窗范围内的焦点转移。使用Promise异步回调。 目标窗口需确保具有获得焦点的能力（可通过 [setWindowFocusable()](arkts-window-window-i.md#setWindowFocusable) 设置），并确保调用[showWindow()](arkts-window-window-i.md#showWindow)成功且执行完毕。 > **说明：** > > 在调用shiftAppWindowFocus()前，建议确保目标窗口已调用 > [loadContent()](arkts-window-window-i.md#loadContent) > 或[setUIContent()](arkts-window-window-i.md#setUIContent)并生效， > 否则可能会导致不可见窗口获取焦点，造成功能异常或影响用户体验。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sourceWindowId | int | Yes | 源窗口id，必须是获焦状态。推荐使用  [getWindowProperties()](arkts-window-window-i.md#getWindowProperties)方法获取窗口id属性。 |
| targetWindowId | int | Yes | 目标窗口id。推荐使用  [getWindowProperties()](arkts-window-window-i.md#getWindowProperties)方法获取窗口id属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: 1. Invalid window type. Only main windows and subwindows are supported.  2. The two windows are not from the same process. |

**Example**

```TypeScript
// EntryAbility.ets
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    // ...
    console.info('onWindowStageCreate');
    let mainWindow: window.Window | undefined = undefined;
    let subWindow: window.Window | undefined = undefined;
    let mainWindowId: number = -1;
    let subWindowId: number = -1;

    try {
      windowStage.loadContent('pages/Index', (err) => {
        if (err.code) {
          console.error(`Failed to load content for main window. Cause code: ${err.code}, message: ${err.message}`);
        }
        // Obtain the main window and ID of the application.
        windowStage.getMainWindow().then((data) => {
          if (data == null) {
            console.error('Failed to obtain the main window. Cause: The data is empty');
            return;
          }
          mainWindow = data;
          mainWindowId = mainWindow.getWindowProperties().id;
          console.info('Succeeded in obtaining the main window');
        }).catch((err: BusinessError) => {
          console.error(`Failed to obtain the main window. Cause code: ${err.code}, message: ${err.message}`);
        });

        // Create or obtain a child window and its ID. In this case, the child window has focus.
        windowStage.createSubWindow('testSubWindow').then((data) => {
          if (data == null) {
            console.error('Failed to obtain the sub window. Cause: The data is empty');
            return;
          }
          subWindow = data;
          subWindowId = subWindow.getWindowProperties().id;
          subWindow.resize(500, 500);
          subWindow.setUIContent('pages/Index');
          subWindow.showWindow();

          // Listen for the window status and ensure that the window is ready.
          subWindow.on("windowEvent", (windowEvent) => {
            if (windowEvent == window.WindowEventType.WINDOW_ACTIVE) {
              // Switch the focus.
              window.shiftAppWindowFocus(subWindowId, mainWindowId).then(() => {
                console.info('Succeeded in shifting app window focus');
              }).catch((err: BusinessError) => {
                console.error(`Failed to shift app window focus. Cause code: ${err.code}, message: ${err.message}`);
              });
            }
          });
        });
      });
    } catch (exception) {
      console.error(`Failed to shift app focus. Cause code: ${exception.code}, message: ${exception.message}`);
    }
  }
}

```

