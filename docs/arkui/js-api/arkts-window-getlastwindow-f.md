# getLastWindow

## getLastWindow

```TypeScript
function getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>): void
```

获取当前应用内层级最高的子窗口，使用callback异步回调。 若无应用子窗口或子窗口未调用[showWindow()](arkts-window-window-i.md#showWindow)进行显示，则返回应用主 窗口。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ctx | BaseContext | Yes | Current application context. |
| callback | AsyncCallback&lt;Window> | Yes | Callback used to return the top window obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal. Possible cause:  1. Top window or main window is null or destroyed;  2. This window context is abnormal. |
| 1300006 | This window context is abnormal. |

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  // ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    console.info('onWindowStageCreate');
    let windowClass: window.Window | undefined = undefined;
    windowStage.loadContent('pages/Index', (err: BusinessError) => {
      if (err.code) {
        console.error(`Failed to load content for main window. Cause code: ${err.code}, message: ${err.message}`);
      }
      windowStage.createSubWindow('TestSubWindow').then((subWindow) => {
        let storage: LocalStorage = new LocalStorage();
        subWindow.loadContent('pages/Index', storage, (err: BusinessError) => {
          if (err.code) {
            console.error(`Failed to load content for sub window. Cause code: ${err.code}, message: ${err.message}`);
          }
          subWindow.showWindow().then(() => {
            try {
              window.getLastWindow(this.context, (err: BusinessError, data) => {
                const errCode: number = err.code;
                if (errCode) {
                  console.error(`Failed to obtain the top window. Cause code: ${err.code}, message: ${err.message}`);
                  return;
                }
                windowClass = data;
                console.info(`Succeeded in obtaining the top window. Window id: ${windowClass.getWindowProperties().id}`);
              });
            } catch (exception) {
              console.error(`Failed to obtain the top window. Cause code: ${exception.code}, message: ${exception.message}`);
            }
          });
        });
      });
    });
  }
  // ...
}

```

## getLastWindow

```TypeScript
function getLastWindow(ctx: BaseContext): Promise<Window>
```

获取当前应用内层级最高的子窗口，使用Promise异步回调。 若无应用子窗口或子窗口未调用[showWindow()](arkts-window-window-i.md#showWindow)进行显示，则返回应用主 窗口。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ctx | BaseContext | Yes | 当前应用上下文信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Window> | Promise对象。返回当前应用内层级最高的窗口对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal. Possible cause:  1. Top window or main window is null or destroyed;  2. This window context is abnormal. |
| 1300006 | This window context is abnormal. |

**Example**

```TypeScript
// EntryAbility.ets
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  // ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    console.info('onWindowStageCreate');
    let windowClass: window.Window | undefined = undefined;
    windowStage.loadContent('pages/Index', (err: BusinessError) => {
      if (err.code) {
        console.error(`Failed to load content for main window. Cause code: ${err.code}, message: ${err.message}`);
      }
      windowStage.createSubWindow('TestSubWindow').then((subWindow) => {
        let storage: LocalStorage = new LocalStorage();
        subWindow.loadContent('pages/Index', storage, (err: BusinessError) => {
          if (err.code) {
            console.error(`Failed to load content for sub window. Cause code: ${err.code}, message: ${err.message}`);
          }
          subWindow.showWindow().then(() => {
            try {
              window.getLastWindow(this.context).then((topWindow) => {
                windowClass = topWindow;
                console.info(`Succeeded in obtaining the top window. Window id: ${topWindow.getWindowProperties().id}`);
              }).catch((err: BusinessError) => {
                console.error(`Failed to obtain the top window. Cause code: ${err.code}, message: ${err.message}`);
              });
            } catch (exception) {
              console.error(`Failed to obtain the top window. Cause code: ${exception.code}, message: ${exception.message}`);
            }
          });
        });
      });
    });
  }
  // ...
}

```

