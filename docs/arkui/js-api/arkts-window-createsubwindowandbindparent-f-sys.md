# createSubWindowAndBindParent

## createSubWindowAndBindParent

```TypeScript
function createSubWindowAndBindParent(name: string, parentId: int, ctx: BaseContext,
    parentWindowEventListener: WindowEventListener): Promise<Window>
```

创建一个子窗，并绑定父窗。使用Promise异步回调。 子窗跟随父窗显示/隐藏，但并不跟随父窗销毁，子窗通过回调函数监听父窗生命周期变化。 建议在父窗销毁后主动销毁创建的子窗。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Indicates window name. |
| parentId | int | Yes | Indicates parent window id. The window id is a non-negative number and exists. |
| ctx | BaseContext | Yes | Indicates the context on which the window depends |
| parentWindowEventListener | WindowEventListener | Yes | Indicates the event listener of parent window. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Window> | Promise对象。返回当前创建的子窗口对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported.  This can not work correctly due to limited device capabilities. |
| 1300001 | Repeated operation.  Possible cause: The window has been created and can not be created again. |
| 1300002 | This window state is abnormal.  Possible cause: 1. Internal task error.  2. The number of windows has reached the limit. |
| 1300003 | This window manager service works abnormally. |
| 1300009 | The parent window is invalid.  Possible cause: 1. The parent window does not exist or has been destroyed.  2. Invalid window type. Only main windows are supported. |

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  // ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    let windowClass: window.Window | undefined = undefined;
    const parentWindowEventListener = (windowId: number, event: window.WindowEventType) => {
      // ...
    }
    try {
      let promise = window.createSubWindowAndBindParent('test', 100, this.context, parentWindowEventListener);
      promise.then((data) => {
        console.info('Succeeded in creating the window. Data:' + JSON.stringify(data));
        windowClass = data;
      }).catch((err: BusinessError) => {
        console.error(`Failed to create the Window. Cause code: ${err.code}, message: ${err.message}`);
      });
    } catch (exception) {
      console.error(`Failed to create the window. Cause code: ${exception.code}, message: ${exception.message}`);
    }
  }
}

```

