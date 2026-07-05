# Window

当前窗口实例，窗口管理器管理的基本单元。 下列API示例中都需先使用 [getLastWindow()](arkts-window-getlastwindow-f.md#getLastWindow-1)、 [createWindow()](arkts-window-createwindow-f.md#createWindow-1)、 [findWindow()](arkts-window-findwindow-f.md#findWindow-1)中的任一方法获取到Window实例（windowClass），再通过此实例调用对应方法。

**起始版本：** 6

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

## 导入模块

```TypeScript
import { window } from '@kit.ArkUI';
```

## attachLayoutToParentWindow

```TypeScript
attachLayoutToParentWindow(anchorInfo?: WindowAnchorInfo, attachOptions?: SubWindowAttachOptions): Promise<void>
```

设置一级子窗与主窗保持相对位置不变。使用Promise异步回调。 该相对位置通过子窗与主窗之间的锚点偏移量表示，子窗和主窗使用的窗口锚点相同。 > **说明：** > > - 只支持一级子窗调用该接口，子窗需处于自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING）。 > > - 当子窗调用该接口后，立即使其显示位置跟随主窗并保持相对位置不变，并且可以监听主窗大小及模式切换。除非调用 > [detachLayoutToParentWindow()]window.Window.detachLayoutToParentWindow接口解绑，否则效果将持续。 > > - 当子窗调用该接口后，再调用 > [moveWindowTo()](arkts-window-window-i.md#moveWindowTo)、 > [maximize()](arkts-window-window-i.md#maximize)、 > [setFollowParentWindowLayoutEnabled()](arkts-window-window-i.md#setFollowParentWindowLayoutEnabled)等修改窗 > 口位置的接口，或通过鼠标/触摸操作对子窗进行拖拽移动、拖拽缩放时将不生效。

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| anchorInfo | WindowAnchorInfo | 否 |  |
| attachOptions | SubWindowAttachOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function attachLayoutToParentWindow can not work correctly due to limited device capabilities. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: 1. Invalid window type. Only subwindows are supported;  2. The current window's parent window is not a main window;  3. Only level-1 subwindows are supported. |
| 1300010 | The operation in the current window status is invalid.  Possible cause: 1. The subwindow is following its parent window's layout.  2. The subwindow is not in the floating mode. |

**示例：**

```TypeScript
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import { UIAbility } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage): void {
    windowStage.loadContent('pages/Index', (loadError: BusinessError) => {
      if (loadError.code) {
        console.error(`Failed to load the content. Cause code: ${loadError.code}, message: ${loadError.message}`);
        return;
      }
      console.info("Succeeded in loading the content.");
      windowStage.createSubWindow("subWindow").then((subWindow: window.Window) => {
        if (subWindow == null) {
          console.error("Failed to create the subWindow. Cause: The data is empty");
          return;
        }
        let anchorInfo : window.WindowAnchorInfo = {
          anchorType: window.WindowAnchor.TOP_START,
          offsetX: 0,
          offsetY: 0
        };
        let attachOptions: window.SubWindowAttachOptions = {
          parentWindowSizeChangeCallback:(data: window.Size) => {
            console.info(`Successfully accepted parentWindow size change, width: ${data.width}, height: ${data.height}`);
          },
          parentWindowStatusChangeCallback:(type: window.WindowStatusType) => {
            console.info(`Successfully accepted parentWindow status change, statusType: ${type}`);
          },
          isIntersectedWidthLimit: true,
          isIntersectedHeightLimit: true
        }
        subWindow.attachLayoutToParentWindow(anchorInfo, attachOptions).then(() => {
          console.info("Succeeded in attaching to the main window");
        }).catch((error: BusinessError) => {
          console.error(`attachLayoutToParentWindow failed. ${error.code} ${error.message}`);
        })
      }).catch((error: BusinessError) => {
        console.error(`createSubWindow failed. ${error.code} ${error.message}`);
      })
    });
  }
}

```

## bindDialogTarget

```TypeScript
bindDialogTarget(token: rpc.RemoteObject, deathCallback: Callback<void>): Promise<void>
```

绑定模态窗口与目标窗口，成功绑定后，目标窗口不能响应用户操作。同时添加目标窗口销毁监听，使用Promise异步回调。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| token | rpc.RemoteObject | 是 | 目标窗口token值。 |
| deathCallback | Callback&lt;void> | 是 | 目标窗口销毁监听。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 401 | Parameter error. Possible cause: Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { dialogRequest, Want, ServiceExtensionAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export class Property {
  public value: Object

  constructor(value: Object) {
    this.value = value
  }
}

export default class ServiceExtAbility extends ServiceExtensionAbility {
  onRequest(want: Want, startId: number) {
    console.info('onRequest');
    let config: window.Configuration = {
      name: "test",
      windowType: window.WindowType.TYPE_DIALOG,
      ctx: this.context
    };
    try {
      window.createWindow(config, (err: BusinessError, data) => {
        const errCode: number = err?.code;
        if (errCode) {
          console.error(`Failed to create the window. Cause code: ${err?.code}, message: ${err?.message}`);
          return;
        }
        if (!data) {
          console.error('data is null');
          return;
        }
        let token = want.parameters?.['ohos.ability.params.request.token'] as Property;
        let value = token.value as rpc.RemoteObject;
        let promise = data.bindDialogTarget(value, () => {
          console.info('Dialog Window Need Destroy.');
        });
        promise.then(() => {
          console.info('Succeeded in binding dialog target.');
        }).catch((err: BusinessError) => {
          console.error(`Failed to bind dialog target. Cause code: ${err?.code}, message: ${err?.message}`);
        });
      });
    } catch (err) {
      console.error(`Failed to bind dialog target. Cause code: ${err?.code}, message: ${err?.message}`)
    }
  }
}

```

## bindDialogTarget

```TypeScript
bindDialogTarget(token: rpc.RemoteObject, deathCallback: Callback<void>, callback: AsyncCallback<void>): void
```

绑定模态窗口与目标窗口，成功绑定后，目标窗口不能响应用户操作。同时添加目标窗口销毁监听，使用callback异步回调。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| token | rpc.RemoteObject | 是 | 目标窗口token值。 |
| deathCallback | Callback&lt;void> | 是 | 目标窗口销毁监听。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 401 | Parameter error. Possible cause: Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { dialogRequest, Want, ServiceExtensionAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export class Property {
  public value: Object

  constructor(value: Object) {
    this.value = value
  }
}

export default class ServiceExtAbility extends ServiceExtensionAbility {
  onRequest(want: Want, startId: number) {
    console.info('onRequest');
    let config: window.Configuration = {
      name: "test",
      windowType: window.WindowType.TYPE_DIALOG,
      ctx: this.context
    };
    try {
      window.createWindow(config, (err: BusinessError, data) => {
        let errCode: number = err?.code;
        if (errCode) {
          console.error(`Failed to create the window. Cause code: ${err?.code}, message: ${err?.message}`);
          return;
        }
        if (!data) {
          console.error('data is null');
          return;
        }
        let token = want.parameters?.['ohos.ability.params.request.token'] as Property;
        let value = token.value as rpc.RemoteObject;
        data.bindDialogTarget(value, () => {
          console.info('Dialog Window Need Destroy.');
          }, (err: BusinessError) => {
          let errCode: number = err?.code;
          if (errCode) {
            console.error(`Failed to bind dialog target. Cause code: ${err?.code}, message: ${err?.message}`);
            return;
          }
          console.info('Succeeded in binding dialog target.');
        });
      });
    } catch (err) {
      console.error(`Failed to bind dialog target. Cause code: ${err?.code}, message: ${err?.message}`)
    }
  }
}

```

## bindDialogTarget

```TypeScript
bindDialogTarget(requestInfo: dialogRequest.RequestInfo, deathCallback: Callback<void>): Promise<void>
```

绑定模态窗口与目标窗口，成功绑定后，目标窗口不能响应用户操作。同时添加目标窗口销毁监听，使用Promise异步回调。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| requestInfo | dialogRequest.RequestInfo | 是 | 目标窗口RequestInfo值。 |
| deathCallback | Callback&lt;void> | 是 | 目标窗口销毁监听。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 401 | Parameter error. Possible cause: Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

**示例：**

```TypeScript
import { dialogRequest, Want, ServiceExtensionAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class ServiceExtAbility extends ServiceExtensionAbility {
  onRequest(want: Want, startId: number) {
    console.info('onRequest');
    let config: window.Configuration = {
      name: "test", windowType: window.WindowType.TYPE_DIALOG, ctx: this.context
    };
    try {
      window.createWindow(config, (err: BusinessError, data) => {
        const errCode: number = err?.code;
        if (errCode) {
          console.error(`Failed to create the window. Cause code: ${err?.code}, message: ${err?.message}`);
          return;
        }
        if (!data) {
          console.error('data is null');
          return;
        }
        let requestInfo = dialogRequest.getRequestInfo(want);
        let promise = data.bindDialogTarget(requestInfo, () => {
          console.info('Dialog Window Need Destroy.');
        });
        promise.then(() => {
          console.info('Succeeded in binding dialog target.');
        }).catch((err: BusinessError) => {
          console.error(`Failed to bind dialog target. Cause code: ${err?.code}, message: ${err?.message}`);
        });
      });
    } catch (err) {
      console.error(`Failed to bind dialog target. Cause code: ${err?.code}, message: ${err?.message}`)
    }
  }
}

```

## bindDialogTarget

```TypeScript
bindDialogTarget(requestInfo: dialogRequest.RequestInfo, deathCallback: Callback<void>, callback: AsyncCallback<void>): void
```

绑定模态窗口与目标窗口，成功绑定后，目标窗口不能响应用户操作。同时添加目标窗口销毁监听，使用callback异步回调。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| requestInfo | dialogRequest.RequestInfo | 是 | 目标窗口RequestInfo值。 |
| deathCallback | Callback&lt;void> | 是 | 目标窗口销毁监听。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 401 | Parameter error. Possible cause: Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

**示例：**

```TypeScript
import { dialogRequest, Want, ServiceExtensionAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class ServiceExtAbility extends ServiceExtensionAbility {
  onRequest(want: Want, startId: number) {
    console.info('onRequest');
    let config: window.Configuration = {
      name: "test", windowType: window.WindowType.TYPE_DIALOG, ctx: this.context
    };
    try {
      window.createWindow(config, (err: BusinessError, data) => {
        let errCode: number = err?.code;
        if (errCode) {
          console.error(`Failed to create the window. Cause code: ${err?.code}, message: ${err?.message}`);
          return;
        }
        if (!data) {
          console.error('data is null');
          return;
        }
        let requestInfo = dialogRequest.getRequestInfo(want);
        data.bindDialogTarget(requestInfo, () => {
          console.info('Dialog Window Need Destroy.');
          }, (err: BusinessError) => {
          let errCode: number = err?.code;
          if (errCode) {
            console.error(`Failed to bind dialog target. Cause code: ${err?.code}, message: ${err?.message}`);
            return;
          }
          console.info('Succeeded in binding dialog target.');
        });
      });
    } catch (err) {
      console.error(`Failed to bind dialog target. Cause code: ${err?.code}, message: ${err?.message}`)
    }
  }
}

```

## clearWindowMask

```TypeScript
clearWindowMask(): Promise<void>
```

清除异形窗口的掩码使其恢复为矩形窗口，使用Promise异步回调。异形窗口为非常规形状的窗口，掩码用于描述异形窗口的形状。此接口仅限子窗和全局悬浮窗可用。

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed.  2. Internal task error.  3. The window has not set window mask yet. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only subwindows and float windows are supported. |

## clientToGlobalDisplay

```TypeScript
clientToGlobalDisplay(winX: int, winY: int): Position
```

将相对于当前窗口左上角的坐标转换为相对于主屏幕左上角的全局坐标。 不支持在经过显示缩放的窗口中调用，例如手机或平板设备在非自由多窗模式下的悬浮窗场景。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| winX | int | 是 | 表示以当前窗口左上角为原点的x轴方向偏移量，单位为px。值为正表示在原点右侧，  值为负表示在原点左侧。该参数应为整数，非整数输入将向下取整。 |
| winY | int | 是 | 表示以当前窗口左上角为原点的y轴方向偏移量，单位为px。值为正表示在原点下方，  值为负表示在原点上方。该参数应为整数，非整数输入将向下取整。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Position | 返回转换后的坐标。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300010 | The operation in the current window status is invalid. |
| 1300016 | Parameter error. Possible cause: 1. Invalid parameter range. |

## convertOrientationAndRotation

```TypeScript
convertOrientationAndRotation(from: RotationInfoType, to: RotationInfoType, value: int): int
```

提供窗口方向、屏幕方向和屏幕角度互相转换的能力。 窗口方向指窗口所在屏幕的方向，以窗口模块对横竖屏的定义方式表示，窗口的方向分别用0、1、2和3表示竖屏、反向横屏、反向竖屏和横屏四个方向，其对横竖屏的定义与 [RotationChangeInfo](arkts-window-rotationchangeinfo-i.md#RotationChangeInfo)和枚举类 [Orientation](arkts-window-orientation-e.md#Orientation)中对横竖屏的定义一致，如Orientation设置为LANDSCAPE时，窗口方向为横屏。 > **说明：** > > 示意图和表格展示了直板机窗口方向、屏幕方向和屏幕角度的关系。 > > ![orientationAndRotation](docroot://reference/apis-arkui/figures/orientationAndRotation.PNG) | 屏幕角度 | 屏幕方向 | 窗口方向 | | ------- | ------- | ------- | | 0 | PORTRAIT | PORTRAIT | | 90 | LANDSCAPE | LANDSCAPE_INVERTED | | 180 | PORTRAIT_INVERTED | PORTRAIT_INVERTED | | 270 | LANDSCAPE_INVERTED | LANDSCAPE |

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| from | RotationInfoType | 是 | 待转换的值的类型。 |
| to | RotationInfoType | 是 | 目标值的类型。 |
| value | int | 是 | 待转换的值。该参数为整数，浮点数输入将向下取整，取值范围为[0, 3]，范围外为非法参数（抛出错误码  [401](docroot://reference/errorcode-universal.md#401-参数检查失败)）。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | 返回目标类型的转换值。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## createSubWindowWithOptions

```TypeScript
createSubWindowWithOptions(name: string, options: SubWindowOptions): Promise<Window>
```

创建主窗口、子窗口或悬浮窗下的子窗口，使用Promise异步回调。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | 子窗口的名字。 |
| options | SubWindowOptions | 是 | 子窗口参数。decorEnabled为true时，子窗口为非  [沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)；decorEnabled为false时，子窗口为沉浸式布局。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Window> | Promise对象。返回当前Window下创建的子窗口对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error;  3. The subWindow has been created and can not be created again.  4. It is not allowed to create non-secure window when secure extension exists. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. Possible cause:  1. Invalid window type. Only main windows, subwindows, and floating windows are supported;  2. When SubWindowOptions.zLevelAboveParentLoosened is true, only main windows are supported. |

## destroy

```TypeScript
destroy(callback: AsyncCallback<void>): void
```

销毁当前窗口，使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [destroyWindow()]window.Window.destroyWindow(callback: AsyncCallback<void>)替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.destroyWindow(callback:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

## destroy

```TypeScript
destroy(): Promise<void>
```

销毁当前窗口，使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[destroyWindow()]window.Window.destroyWindow()替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.destroyWindow()

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## destroyWindow

```TypeScript
destroyWindow(callback: AsyncCallback<void>): void
```

销毁当前窗口，使用callback异步回调，支持系统窗口及应用子窗口，全局悬浮窗和模态窗。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. [since 9 - 9] |

## destroyWindow

```TypeScript
destroyWindow(): Promise<void>
```

销毁当前窗口，使用Promise异步回调，支持系统窗口及应用子窗口，全局悬浮窗和模态窗。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. [since 9 - 9] |

## detachLayoutToParentWindow

```TypeScript
detachLayoutToParentWindow(): Promise<void>
```

解除一级子窗与主窗保持相对位置不变的协同关系。使用Promise异步回调。 > **说明：** > > - 子窗调用接口时需保持子窗处于协同状态。 > > - 调用接口解除协同后，子窗将保持协同时的位置，可对子窗进行拖拽以修改子窗大小和位置。 > > - 解除协同后，调用 > [moveWindowTo()](arkts-window-window-i.md#moveWindowTo)、 > [maximize()](arkts-window-window-i.md#maximize)、 > [setFollowParentWindowLayoutEnabled()](arkts-window-window-i.md#setFollowParentWindowLayoutEnabled)修改窗口 > 位置的接口，或通过鼠标/触摸操作对子窗进行拖拽移动、拖拽缩放时将生效。

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function detachLayoutToParentWindow cannot work correctly due to limited device capabilities. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: 1. Invalid window type. Only subwindows are supported;  2. Only level-1 subwindows are supported. |
| 1300010 | The operation in the current window status is invalid.  Possible cause: The subwindow is not attached to the main window. |

**示例：**

```TypeScript
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import { UIAbility } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage): void {
    windowStage.loadContent('pages/Index', (loadError: BusinessError) => {
      if (loadError.code) {
        console.error(`Failed to load the content. Cause code: ${loadError.code}, message: ${loadError.message}`);
        return;
      }
      console.info("Succeeded in loading the content.");
      windowStage.createSubWindow("subWindow").then((subWindow: window.Window) => {
        if (subWindow == null) {
          console.error("Failed to create the subWindow. Cause: The data is empty");
          return;
        }
        subWindow.detachLayoutToParentWindow().then(() => {
          console.info("Succeeded in detaching to the main window");
        }).catch((error: BusinessError) => {
          console.error(`detachLayoutToParentWindow failed. ${error.code} ${error.message}`);
        })
      }).catch((error: BusinessError) => {
        console.error(`createSubWindow failed. ${error.code} ${error.message}`);
      })
    });
  }
}

```

## disableLandscapeMultiWindow

```TypeScript
disableLandscapeMultiWindow(): Promise<void>
```

应用部分界面支持横向布局时，在退出该界面时去使能，去使能后不支持进入横向多窗。 此接口只对应用主窗口生效，且需要在module.json5配置文件中[abilities](docroot://quick-start/module-configuration-file.md#abilities标签)标签中配 置preferMultiWindowOrientation属性为"landscape_auto"。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | 该窗口状态异常。可能原因：窗口未创建或已销毁。 |
| 1300003 | 窗口管理器服务运行异常。可能原因：内部错误。 |

## enableDrag

```TypeScript
enableDrag(enable: boolean): Promise<void>
```

使能/禁止拖拽窗口，仅对系统窗口、应用子窗口、全局悬浮窗和模态窗口生效。使用Promise异步回调。 使能后，将允许通过鼠标操作或触摸对窗口进行拉伸操作。

**起始版本：** 14

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 是否允许拖拽。 true表示允许，false表示不允许。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 14 - 19] |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |

## enableLandscapeMultiWindow

```TypeScript
enableLandscapeMultiWindow(): Promise<void>
```

应用部分界面支持横向布局时，在进入该界面时使能，使能后可支持进入横向多窗。不建议竖向布局界面使用。 此接口只对应用主窗口生效，且需要在module.json5配置文件中[abilities](docroot://quick-start/module-configuration-file.md#abilities标签)标签中配 置preferMultiWindowOrientation属性为"landscape_auto"。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | 该窗口状态异常。可能原因：窗口未创建或已销毁。 |
| 1300003 | 窗口管理器服务运行异常。可能原因：内部错误。 |

## getAvoidArea

```TypeScript
getAvoidArea(type: AvoidAreaType, callback: AsyncCallback<AvoidArea>): void
```

获取当前窗口内容规避的区域；如系统栏区域、刘海屏区域、手势区域、软键盘区域等与窗口内容重叠时，需要窗口内容避让的区域。 主窗口/子窗口： - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING）下， 仅存在固定态软键盘（[AvoidAreaType](arkts-window-avoidareatype-e.md#AvoidAreaType)为TYPE_KEYBOARD）类型的避让区域。 - 主窗口在非自由窗口状态的自由悬浮窗口模式下，仅存在系统栏（[AvoidAreaType](arkts-window-avoidareatype-e.md#AvoidAreaType)为TYPE_SYSTEM）类型的避让区域。 - 主窗口在其余场景下，仅当在非自由悬浮窗口模式下或设备类型为Phone和Tablet，才能通过此接口获取计算后的避让区域，否则获取的避让区域为空。 - 子窗口在非自由窗口状态或非自由悬浮窗口模式下，仅当窗口的位置和大小与主窗口一致时，才能通过此接口获取计算后的避让区域，否则获取的避让区域为空。 全局悬浮窗、模态窗或系统窗口： - 仅在调用[setSystemAvoidAreaEnabled]window.Window.setSystemAvoidAreaEnabled方法使能后，才能通过此接口获取计算后的避让区域，否则获取的避让区域 为空。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[getWindowAvoidArea()]window.Window.getWindowAvoidArea替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.getWindowAvoidArea

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | AvoidAreaType | 是 | 表示避让区类型。 |
| callback | AsyncCallback&lt;AvoidArea> | 是 | 回调函数。返回窗口内容避让区域。 |

## getAvoidArea

```TypeScript
getAvoidArea(type: AvoidAreaType): Promise<AvoidArea>
```

获取当前窗口内容规避的区域；如系统栏区域、刘海屏区域、手势区域、软键盘区域等与窗口内容重叠时，需要窗口内容避让的区域。 主窗口/子窗口： - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING）下， 仅存在固定态软键盘（[AvoidAreaType](arkts-window-avoidareatype-e.md#AvoidAreaType)为TYPE_KEYBOARD）类型的避让区域。 - 主窗口在非自由窗口状态的自由悬浮窗口模式下，仅存在系统栏（[AvoidAreaType](arkts-window-avoidareatype-e.md#AvoidAreaType)为TYPE_SYSTEM）类型的避让区域。 - 主窗口在其余场景下，仅当在非自由悬浮窗口模式下或设备类型为Phone和Tablet，才能通过此接口获取计算后的避让区域，否则获取的避让区域为空。 - 子窗口在非自由窗口状态或非自由悬浮窗口模式下，仅当窗口的位置和大小与主窗口一致时，才能通过此接口获取计算后的避让区域，否则获取的避让区域为空。 全局悬浮窗、模态窗或系统窗口： - 仅在调用[setSystemAvoidAreaEnabled]window.Window.setSystemAvoidAreaEnabled方法使能后，才能通过此接口获取计算后的避让区域，否则获取的避让区域 为空。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[getWindowAvoidArea()]window.Window.getWindowAvoidArea替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.getWindowAvoidArea

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | AvoidAreaType | 是 | 表示避让区类型。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AvoidArea> | Promise对象。返回窗口内容避让区域。 |

## getColorSpace

```TypeScript
getColorSpace(): Promise<ColorSpace>
```

获取当前窗口色域模式，使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[getWindowColorSpace()]window.Window.getWindowColorSpace替代。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** window.Window.getWindowColorSpace

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ColorSpace> | Promise对象。返回当前色域模式。 |

## getColorSpace

```TypeScript
getColorSpace(callback: AsyncCallback<ColorSpace>): void
```

获取当前窗口色域模式，使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用[getWindowColorSpace()]window.Window.getWindowColorSpace替代。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** window.Window.getWindowColorSpace

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;ColorSpace> | 是 | 回调函数。当获取成功，err为undefined，data为当前色域模式。 |

## getDecorButtonStyle

```TypeScript
getDecorButtonStyle(): DecorButtonStyle
```

获取装饰栏按钮样式，仅对主窗和子窗生效。

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DecorButtonStyle | 返回当前窗口装饰栏上的按钮样式，窗口装饰按钮区域位于窗口的右上角。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows and subwindows are supported. |

## getGlobalRect

```TypeScript
getGlobalRect(): Rect
```

获取窗口在其所在物理屏幕上的真实显示区域，同步接口。 在某些设备上，窗口显示时可能经过了缩放，此接口可以获取缩放后窗口在屏幕上的真实位置和大小。

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Rect | 四元组分别表示距离屏幕左上角的x坐标、距离屏幕左上角的y坐标、缩放后的窗口宽度和缩放后的窗口高度。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed.  2. Failed to convert result into JS value object. |
| 1300003 | This window manager service works abnormally. |

## getImmersiveModeEnabledState

```TypeScript
getImmersiveModeEnabledState(): boolean
```

查询当前窗口是否开启沉浸式布局。 仅支持主窗和子窗调用。 返回值与[setImmersiveModeEnabledState()]window.Window.setImmersiveModeEnabledState以及 [setWindowLayoutFullScreen()]window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)设置结果一致，若 未调用上述两个接口则默认返回false。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | - 是否设置开启沉浸式布局。true表示开启沉浸式布局，false表示关闭沉浸式布局。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows and subwindows are supported. |

## getParentWindow

```TypeScript
getParentWindow(): Window
```

获取子窗口的父窗口。

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Window | 子窗口的父窗口对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300004 | Unauthorized operation. |
| 1300009 | The parent window is invalid. |

## getPreferredOrientation

```TypeScript
getPreferredOrientation(): Orientation
```

获取窗口的显示方向属性。未指定方向时，返回window.Orientation.UNSPECIFIED。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Orientation | 窗口显示方向的属性。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed;  2. Internal task error. |

## getProperties

```TypeScript
getProperties(callback: AsyncCallback<WindowProperties>): void
```

获取当前窗口的属性，使用callback异步回调，返回WindowProperties。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用[getWindowProperties()]window.Window.getWindowProperties替代。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** window.Window.getWindowProperties

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;WindowProperties> | 是 | 回调函数。返回当前窗口属性。 |

## getProperties

```TypeScript
getProperties(): Promise<WindowProperties>
```

获取当前窗口的属性，使用Promise异步回调，返回WindowProperties。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用[getWindowProperties()]window.Window.getWindowProperties替代。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** window.Window.getWindowProperties

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;WindowProperties> | Promise对象。返回当前窗口属性。 |

## getRotationLocked

```TypeScript
getRotationLocked(): boolean
```

仅支持[系统窗口](docroot://windowmanager/window-terminology.md#系统窗口)获取当前旋转锁定状态。非系统窗口调用返回1300029错误码。

**起始版本：** 22

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 当前系统窗是否设置旋转锁定。true表示当前系统窗已锁定旋转；false表示当前系统窗未锁定旋转。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Function setRotationLocked can not work correctly due  to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300029 | This window type is invalid. |

**示例：**

```TypeScript
try {
  let locked = windowClass.getRotationLocked();
  console.info('Succeeded in getting rotation locked.');
} catch (exception) {
  console.error(`Failed to get rotation locked. Cause code: ${exception.code}, message: ${exception.message}`);
};

```

## getStatusBarProperty

```TypeScript
getStatusBarProperty(): StatusBarProperty
```

获取主窗口状态栏的属性，如状态栏文字颜色。 子窗口不支持查询，调用会返回错误码1300004。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| StatusBarProperty | 当前状态栏属性，如状态栏颜色。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed.  2. Internal task error. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows are supported. |

## getSubWindowZLevel

```TypeScript
getSubWindowZLevel(): int
```

获取当前子窗口层级级别。不支持主窗、系统窗调用。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | 当前子窗口层级级别。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function setSubWindowZLevel can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

## getTitleButtonRect

```TypeScript
getTitleButtonRect(): TitleButtonRect
```

获取主窗口或启用装饰的子窗口的标题栏上的最小化、最大化、关闭按钮矩形区域。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TitleButtonRect | 标题栏上的最小化、最大化、关闭按钮矩形区域，该区域位置坐标相对窗口右上角。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |

## getTransitionController

```TypeScript
getTransitionController(): TransitionController
```

获取窗口属性转换控制器。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TransitionController | 属性转换控制器。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

**示例：**

```TypeScript
let controller = windowClass.getTransitionController(); // 获取属性转换控制器

```

## getUIContext

```TypeScript
getUIContext() : UIContext
```

获取UIContext实例。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| UIContext | 返回UIContext实例对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |

## getWindowAvoidArea

```TypeScript
getWindowAvoidArea(type: AvoidAreaType): AvoidArea
```

获取当前窗口避让区域。 主窗口/子窗口： - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的自由悬浮窗口模式（即窗口模式为 [window.WindowStatusType.FLOATING](arkts-window-windowstatustype-e.md#WindowStatusType)）下，仅存在固定态软键盘（ [AvoidAreaType](arkts-window-avoidareatype-e.md#AvoidAreaType)为TYPE_KEYBOARD）类型的避让区域。 - 主窗口在非自由窗口状态的自由悬浮窗口模式下，仅存在系统栏（[AvoidAreaType](arkts-window-avoidareatype-e.md#AvoidAreaType)为TYPE_SYSTEM）类型的避让区域。 - 主窗口在其余场景下，仅当在非自由悬浮窗口模式下或设备类型为Phone和Tablet，才能通过此接口获取计算后的避让区域，否则获取的避让区域为空。 - 子窗口在非自由窗口状态或非自由悬浮窗口模式下，仅当窗口的位置和大小与主窗口一致时，才能通过此接口获取计算后的避让区域，否则获取的避让区域为空。 全局悬浮窗、模态窗或系统窗口： - 仅在调用[setSystemAvoidAreaEnabled]window.Window.setSystemAvoidAreaEnabled方法使能后，才能通过此接口获取避让区域，否则获取的避让区域为空。 该接口一般适用于两种场景： - 在[onWindowStageCreate()](../../apis-ability-kit/arkts-apis/arkts-uiability-c.md#onWindowStageCreate)方法中，获取应用启动时的初始布局避让区域时可 调用该接口。 - 当应用内子窗需要临时显示，对显示内容做布局避让时可调用该接口。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | AvoidAreaType | 是 | Type of the area |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AvoidArea | 窗口内容避让区域。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Convert avoid area failed. |

## getWindowAvoidAreaIgnoringVisibility

```TypeScript
getWindowAvoidAreaIgnoringVisibility(type: AvoidAreaType): AvoidArea
```

获取当前应用窗口的避让区域，即使避让区域当前处于不可见状态。 主窗口/子窗口： - 主窗口在非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的自由悬浮窗口模式（即窗口模式为 [window.WindowStatusType.FLOATING](arkts-window-windowstatustype-e.md#WindowStatusType)）下，仅存在系统栏（ [AvoidAreaType](arkts-window-avoidareatype-e.md#AvoidAreaType)为TYPE_SYSTEM）类型的避让区域。 - 主窗口在其余场景下，仅当在非自由悬浮窗口模式下或设备类型为Phone和Tablet，才能通过此接口获取计算后的避让区域，否则获取的避让区域为空。 - 子窗口在非自由窗口状态或非自由悬浮窗口模式下，仅当窗口的位置和大小与主窗口一致时，才能通过此接口获取计算后的避让区域，否则获取的避让区域为空。 全局悬浮窗、模态窗或系统窗口： - 仅在调用[setSystemAvoidAreaEnabled]window.Window.setSystemAvoidAreaEnabled方法使能后，才能通过此接口获取计算后的避让区域，否则获取的避让区域 为空。

**起始版本：** 22

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | AvoidAreaType | 是 | Type of the area. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AvoidArea | 窗口内容避让区域。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Convert avoid area failed. |
| 1300003 | This window manager service works abnormally. |
| 1300016 | Parameter error. |

## getWindowColorSpace

```TypeScript
getWindowColorSpace(): ColorSpace
```

获取当前窗口色域模式。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorSpace | 当前色域模式。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |

## getWindowCornerRadius

```TypeScript
getWindowCornerRadius(): double
```

该接口用于获取子窗或悬浮窗的圆角半径值，在未调用[setWindowCornerRadius()]window.Window.setWindowCornerRadius接口设置窗口圆角半径值时，调用此接口可获取 窗口默认圆角半径值。

**起始版本：** 17

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | 当前子窗或悬浮窗的圆角半径值，单位为vp。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed;  2. Internal task error. |
| 1300004 | Unauthorized operation. Possible cause:  Invalid window type. Only subwindows and float windows are supported. |

## getWindowDecorHeight

```TypeScript
getWindowDecorHeight(): int
```

对存在标题栏和三键区的窗口形态生效，用于获取窗口的标题栏高度。如果使用Stage模型，该接口需要在 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)调用生效后使用。 由于系统像素转换可能存在精度误差，调用[setWindowDecorHeight()]window.Window.setWindowDecorHeight设置的值与获取的值可能存在1vp的差异。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | 返回的窗口标题栏高度。该参数为整数，取值范围为[37,112]，单位为vp。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |

## getWindowDecorVisible

```TypeScript
getWindowDecorVisible(): boolean
```

查询窗口标题栏是否可见。如果使用Stage模型，该接口需要在 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)调用生效后使用。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 返回当前窗口标题栏是否可见，true表示可见，false表示不可见。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |

## getWindowDensityInfo

```TypeScript
getWindowDensityInfo(): WindowDensityInfo
```

获取当前窗口所在屏幕的系统显示大小缩放系数、系统默认显示大小缩放系数和自定义显示大小缩放系数信息。

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WindowDensityInfo | 当前窗口的显示大小缩放系数信息。当返回值为[-1, -1, -1]时，表示当前设备不支持使用该接口。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |

## getWindowLimits

```TypeScript
getWindowLimits(): WindowLimits
```

获取当前应用窗口的尺寸限制，单位为物理像素px。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WindowLimits | 当前窗口尺寸限制。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |

## getWindowLimitsVP

```TypeScript
getWindowLimitsVP(): WindowLimits
```

获取当前应用窗口的尺寸限制，单位为虚拟像素vp。 对于系统窗口和全局悬浮窗，默认窗口宽高的系统限制最小值为1px，通过此接口获取到的1vp，是计算取整后的值。

**起始版本：** 22

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WindowLimits | 当前窗口尺寸限制。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |

## getWindowProperties

```TypeScript
getWindowProperties(): WindowProperties
```

获取当前窗口的属性。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WindowProperties | 当前窗口属性。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |

## getWindowStateSnapshot

```TypeScript
getWindowStateSnapshot(): Promise<string>
```

获取设备形态，仅测试使用

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise used to return the window state snapshot. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the api due to limited device  capabilities. Possible cause: The device does not support the api itself. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed; |
| 1300003 | This window manager service works abnormally.  Possible cause: The internal services of the window are not started normally. |

## getWindowStatus

```TypeScript
getWindowStatus(): WindowStatusType
```

获取当前应用窗口的模式。 > **说明：** > > 在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，应用的 > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#配置文件标签)设置小于14时，在窗口最大化状态（窗口铺满整个屏幕，2in1设备会有 > dock栏和状态栏，Tablet设备会有状态栏）时返回值对应为WindowStatusType::FULL_SCREEN。应用的 > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#配置文件标签)设置大于等于14时，在窗口最大化状态（窗口铺满整个屏幕，2in1设备会有 > dock栏和状态栏，Tablet设备会有状态栏）时返回值对应为WindowStatusType::MAXIMIZE。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WindowStatusType | 当前窗口模式。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |

## getWindowSystemBarProperties

```TypeScript
getWindowSystemBarProperties(): SystemBarProperties
```

获取主窗口<!--Del-->三键导航栏、<!--DelEnd-->状态栏的属性。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SystemBarProperties | 当前三键导航栏、状态栏属性。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally.  Possible cause: Create js object failed. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows are supported. |

## getWindowTransitionAnimation

```TypeScript
getWindowTransitionAnimation(transitionType: WindowTransitionType): TransitionAnimation | undefined
```

获取特定场景下的窗口转场动画配置。 当前只支持在应用主窗下使用。

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| transitionType | WindowTransitionType | 是 | 本次转场动画场景。当前只支持销毁场景。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TransitionAnimation | Transition animation configuration in the corresponding scene. If  the [setWindowTransitionAnimation]window.Window.setWindowTransitionAnimation API is not used,  undefined is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |
| 1300016 | Parameter error. Possible cause: 1. Invalid parameter range. |

## globalDisplayToClient

```TypeScript
globalDisplayToClient(globalDisplayX: int, globalDisplayY: int): Position
```

将相对于主屏幕左上角的全局坐标转换为相对于当前窗口左上角的坐标。 不支持在经过显示缩放的窗口中调用，例如手机或平板设备在非自由多窗模式下的悬浮窗场景。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| globalDisplayX | int | 是 | 表示以当前窗口左上角为原点的x轴方向偏移量，单位为px。值为正表示在原点右侧，  值为负表示在原点左侧。该参数应为整数，非整数输入将向下取整。 |
| globalDisplayY | int | 是 | 表示以当前窗口左上角为原点的y轴方向偏移量，单位为px。  值为正表示在原点下方，值为负表示在原点上方。该参数应为整数，非整数输入将向下取整。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Position | 返回转换后的坐标。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300010 | The operation in the current window status is invalid. |
| 1300016 | Parameter error. Possible cause: 1. Invalid parameter range. |

## hide

```TypeScript
hide (callback: AsyncCallback<void>): void
```

隐藏当前窗口，使用callback异步回调，仅支持系统窗口与应用子窗口。

**起始版本：** 7

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 1300002 | This window state is abnormal. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

windowClass.hide((err: BusinessError) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to hide the window. Cause code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in hiding the window.');
});

```

## hide

```TypeScript
hide(): Promise<void>
```

隐藏当前窗口，使用Promise异步回调，仅支持系统窗口与应用子窗口。

**起始版本：** 7

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 1300002 | This window state is abnormal. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let promise = windowClass.hide();
promise.then(() => {
  console.info('Succeeded in hiding the window.');
}).catch((err: BusinessError) => {
  console.error(`Failed to hide the window. Cause code: ${err.code}, message: ${err.message}`);
});

```

## hideNonSystemFloatingWindows

```TypeScript
hideNonSystemFloatingWindows(shouldHide: boolean, callback: AsyncCallback<void>): void
```

设置是否隐藏非系统级悬浮窗口（[windowType](arkts-window-windowtype-e.md#WindowType)类型为TYPE_FLOAT），使用callback异步回调。 非系统级悬浮窗口是指非系统应用创建的悬浮窗口。默认情况下，一个系统应用主窗口可以与非系统级悬浮窗口共同显示，即该主窗口可以被上层的非系统级悬浮窗口遮挡，如果设置为true，则所有的非系统级悬浮窗口都会被隐藏，此时该主窗口就不会 被上层的非系统级悬浮窗口遮挡。

**起始版本：** 11

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| shouldHide | boolean | 是 | 指示是否隐藏非系统级的悬浮窗口，true表示隐藏，false表示不隐藏。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |

**示例：**

```TypeScript
// EntryAbility.ets
import { UIAbility, Want } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    // 加载主窗口对应的页面
    windowStage.loadContent('pages/Index', (err) => {
      if (err.code) {
        console.error(`Failed to load the content. Cause code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('Succeeded in loading the content.');
    });

    // 获取应用主窗口。
    let mainWindow: window.Window | undefined = undefined;
    windowStage.getMainWindow((err, data) => {
      if (err.code) {
        console.error(`Failed to obtain the main window. Cause code: ${err.code}, message: ${err.message}`);
        return;
      }
      mainWindow = data;
      console.info('Succeeded in obtaining the main window. Data: ' + JSON.stringify(data));

      let shouldHide = true;
      try {
        // 调用带callback参数的hideNonSystemFloatingWindows接口
        mainWindow.hideNonSystemFloatingWindows(shouldHide, (err) => {
          if (err.code) {
            console.error(`Failed to hide the non-system floating windows. Cause code: ${err.code}, message: ${err.message}`);
            return;
          }
          console.info('Succeeded in hiding the non-system floating windows.');
        });
      } catch (exception) {
        console.error(`Failed to hide the non-system floating windows. Cause code: ${exception.code}, message: ${exception.message}`);
      }
    });
  }
}

```

## hideNonSystemFloatingWindows

```TypeScript
hideNonSystemFloatingWindows(shouldHide: boolean): Promise<void>
```

设置是否隐藏非系统级悬浮窗口（[windowType](arkts-window-windowtype-e.md#WindowType)类型为TYPE_FLOAT），使用Promise异步回调。 非系统级悬浮窗口是指非系统应用创建的悬浮窗口。默认情况下，一个系统应用主窗口可以与非系统级悬浮窗口共同显示，即该主窗口可以被上层的非系统级悬浮窗口遮挡，如果设置为true，则所有的非系统级悬浮窗口都会被隐藏，此时该主窗口就不会 被上层的非系统级悬浮窗口遮挡。

**起始版本：** 11

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| shouldHide | boolean | 是 | 指示是否隐藏非系统级的悬浮窗口，true表示隐藏，false表示不隐藏。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |

**示例：**

```TypeScript
// EntryAbility.ets
import { UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    // 加载主窗口对应的页面
    windowStage.loadContent('pages/Index', (err) => {
      if (err.code) {
        console.error(`Failed to load the content. Cause code: ${err.code}, message: ${err.message}`);
        return;
      }
      console.info('Succeeded in loading the content.');
    });

    // 获取应用主窗口。
    let mainWindow: window.Window | undefined = undefined;
    windowStage.getMainWindow((err, data) => {
      if (err.code) {
        console.error(`Failed to obtain the main window. Cause code: ${err.code}, message: ${err.message}`);
        return;
      }
      mainWindow = data;
      console.info('Succeeded in obtaining the main window. Data: ' + JSON.stringify(data));

      let shouldHide = true;
      try {
        // 调用hideNonSystemFloatingWindows接口，获取promise对象
        let promise = mainWindow.hideNonSystemFloatingWindows(shouldHide);
        promise.then(()=> {
          console.info('Succeeded in hiding the non-system floating windows.');
        }).catch((err: BusinessError)=>{
          console.error(`Failed to hide the non-system floating windows. Cause code: ${err.code}, message: ${err.message}`);
        });
      } catch (exception) {
        console.error(`Failed to hide the non-system floating windows. Cause code: ${exception.code}, message: ${exception.message}`);
      }
    });
  }
}

```

## hideWithAnimation

```TypeScript
hideWithAnimation(callback: AsyncCallback<void>): void
```

隐藏当前窗口，过程中播放动画，使用callback异步回调，仅支持系统窗口。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only system windows are supported. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

windowClass.hideWithAnimation((err: BusinessError) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to hide the window with animation. Cause code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in hiding the window with animation.');
});

```

## hideWithAnimation

```TypeScript
hideWithAnimation(): Promise<void>
```

隐藏当前窗口，过程中播放动画，使用Promise异步回调，仅支持系统窗口。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only system windows are supported. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let promise = windowClass.hideWithAnimation();
promise.then(() => {
  console.info('Succeeded in hiding the window with animation.');
}).catch((err: BusinessError) => {
  console.error(`Failed to hide the window with animation. Cause code: ${err.code}, message: ${err.message}`);
});

```

## isFloatNavigationAvoidAreaEnabled

```TypeScript
isFloatNavigationAvoidAreaEnabled(): boolean
```

查询当前窗口是否支持获取三键导航类型的避让区域。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 是否支持获取三键导航类型的避让区域。  true表示支持，false表示不支持。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Create js value failed. |

## isFocused

```TypeScript
isFocused(): boolean
```

判断当前窗口是否已获焦。为获取准确的获焦状态，需要在[WindowEventType](arkts-window-windoweventtype-e.md#WindowEventType)生命周期处于WINDOW_ACTIVE之后调用。 可使用[on('windowEvent')]window.Window.on(type: 'windowEvent', callback: Callback<WindowEventType>)监听对应状态变更， 再执行对应具体业务。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 当前窗口是否已获焦。true表示当前窗口已获焦，false则表示当前窗口未获焦。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal. Possible cause:  The window is not created or destroyed. |

## isGestureBackEnabled

```TypeScript
isGestureBackEnabled(): boolean
```

获取当前窗口是否启用返回手势功能，仅主窗可以调用成功，其他类型的窗口调用返回1300004错误码。

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 是否已经启用返回手势。true表示已启用返回手势功能，false表示已禁用返回手势功能。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows are supported. |

## isImmersiveLayout

```TypeScript
isImmersiveLayout(): boolean
```

查询当前窗口是否处于沉浸式布局状态。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 是否处于沉浸式布局状态。true表示处于沉浸式布局状态，false表示不处于沉浸式布局状态。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |

## isInFreeWindowMode

```TypeScript
isInFreeWindowMode(): boolean
```

查询当前窗口是否为[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)模式。

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 返回true表示在自由窗口模式，false表示非自由窗口模式。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |

## isMainWindowFullScreenAcrossDisplays

```TypeScript
isMainWindowFullScreenAcrossDisplays(): Promise<boolean>
```

判断当前窗口的主窗口是否是跨多块屏幕使用全屏模式显示，使用Promise异步回调，仅支持主窗口与应用子窗口。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示当前窗口的主窗口跨多块屏幕使用全屏模式显示，返回false表示当前窗口的主窗口未跨多块屏幕使用全屏模式显示。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let promise = windowClass.isMainWindowFullScreenAcrossDisplays();
  promise.then((data: boolean)=> {
      console.info(`Succeeded in using isMainWindowFullScreenAcrossDisplays function. Data: ${data}`);
  }).catch((err: BusinessError)=>{
      console.error(`Failed to use isMainWindowFullScreenAcrossDisplays function. code:${err.code}, message:${err.message}.`);
  });
} catch (exception) {
  console.error(`Failed to use isMainWindowFullScreenAcrossDisplays function. Cause code: ${exception.code}, message: ${exception.message}.`);
}

```

## isReceiveDragEventEnabled

```TypeScript
isReceiveDragEventEnabled(): boolean
```

获取当前窗口是否能接收[拖拽事件]./@internal/component/ets/common:DragEvent的状态。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 当前窗口是否能接收拖拽事件的状态。true表示能接收拖拽事件的状态，false表示不能接收拖拽事件的状态。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function can not work because the current device does  not support this ability. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |

## isSeparationTouchEnabled

```TypeScript
isSeparationTouchEnabled(): boolean
```

获取当前窗口是否支持事件分离的状态。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 当前窗口是否支持事件分离。true表示支持窗口事件分离，false表示不支持窗口事件分离。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function can not work because the current device does  not support this ability. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |

## isShowing

```TypeScript
isShowing(callback: AsyncCallback<boolean>): void
```

判断当前窗口是否已显示，使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[isWindowShowing()]window.Window.isWindowShowing替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.isWindowShowing

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | 回调函数。返回true表示当前窗口已显示，返回false表示当前窗口未显示。 |

## isShowing

```TypeScript
isShowing(): Promise<boolean>
```

判断当前窗口是否已显示，使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[isWindowShowing()]window.Window.isWindowShowing替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.isWindowShowing

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示当前窗口已显示，返回false表示当前窗口未显示。 |

## isSupportWideGamut

```TypeScript
isSupportWideGamut(): Promise<boolean>
```

判断当前窗口是否支持广色域模式，使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [isWindowSupportWideGamut()]window.Window.isWindowSupportWideGamut()替代。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** window.Window.isWindowSupportWideGamut()

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示当前窗口支持广色域模式，返回false表示当前窗口不支持广色域模式。 |

## isSupportWideGamut

```TypeScript
isSupportWideGamut(callback: AsyncCallback<boolean>): void
```

判断当前窗口是否支持广色域模式，使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [isWindowSupportWideGamut()]window.Window.isWindowSupportWideGamut(callback: AsyncCallback<boolean>)替代。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** window.Window.isWindowSupportWideGamut(callback:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | 回调函数。返回true表示当前窗口支持广色域模式，返回false表示当前窗口不支持广色域模式。 |

## isSystemAvoidAreaEnabled

```TypeScript
isSystemAvoidAreaEnabled(): boolean
```

获取悬浮窗、模态窗或WindowType为系统类型的窗口是否可以获取窗口内容的避让区[AvoidArea](arkts-window-avoidarea-i.md#AvoidArea)。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 是否可以获取窗口内容的避让区。  true表示可以获取避让区；false表示不可以获取避让区。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Create js value failed. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. |

## isWindowHighlighted

```TypeScript
isWindowHighlighted(): boolean
```

获取当前窗口是否为激活态。为准确获取激活态，需要在[WindowEventType](arkts-window-windoweventtype-e.md#WindowEventType)生命周期处于WINDOW_ACTIVE之后调用。 可使用 [on('windowHighlightChange')]window.Window.on(type: 'windowHighlightChange', callback: Callback<boolean>) 监听对应状态变更，再执行对应具体业务。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 当前窗口是否为激活态。true表示当前窗口为激活态，false表示当前窗口非激活态。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  The window is not created or destroyed. |

## isWindowShowing

```TypeScript
isWindowShowing(): boolean
```

判断当前窗口是否已显示。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 当前窗口是否已显示。true表示当前窗口已显示，false则表示当前窗口未显示。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |

## isWindowSupportWideGamut

```TypeScript
isWindowSupportWideGamut(): Promise<boolean>
```

判断当前窗口是否支持广色域模式，使用Promise异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示当前窗口支持广色域模式，返回false表示当前窗口不支持广色域模式。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |

## isWindowSupportWideGamut

```TypeScript
isWindowSupportWideGamut(callback: AsyncCallback<boolean>): void
```

判断当前窗口是否支持广色域模式，使用callback异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | 回调函数。返回true表示当前窗口支持广色域模式，返回false表示当前窗口不支持广色域模式。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |

## keepKeyboardOnFocus

```TypeScript
keepKeyboardOnFocus(keepKeyboardFlag: boolean): void
```

当前窗口获焦时是否保留由其他窗口创建的软键盘，支持系统窗口、应用子窗口、模态窗和全局悬浮窗。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keepKeyboardFlag | boolean | 是 | 是否保留其他窗口创建的软键盘。true表示保留；false表示不保留。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

## loadContent

```TypeScript
loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void
```

根据当前工程中指定的页面路径为窗口加载具体页面内容，通过LocalStorage传递状态属性给加载的页面，使用callback异步回调。 建议在UIAbility启动过程中使用该接口，重复调用将先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 要加载到窗口中的页面内容的路径，该路径需添加到工程的main_pages.json文件中。不支持相对路径写法，需与main_pages.json中的src取值保持一致。 |
| storage | LocalStorage | 是 | 页面级UI状态存储单元，这里用于为加载到窗口的页面内容传递状态属性。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Invalid path parameter. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. [since 9 - 9] |

## loadContent

```TypeScript
loadContent(path: string, storage: LocalStorage): Promise<void>
```

根据当前工程中指定的页面路径为窗口加载具体页面内容，通过LocalStorage传递状态属性给加载的页面，使用Promise异步回调。 建议在UIAbility启动过程中使用该接口，重复调用将先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 要加载到窗口中的页面内容的路径，该路径需添加到工程的main_pages.json文件中。不支持相对路径写法，需与main_pages.json中的src取值保持一致。 |
| storage | LocalStorage | 是 | 页面级UI状态存储单元，这里用于为加载到窗口的页面内容传递状态属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Invalid path parameter. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. [since 9 - 9] |

## loadContent

```TypeScript
loadContent(path: string, callback: AsyncCallback<void>): void
```

为当前窗口加载具体页面内容，使用callback异步回调。 建议在UIAbility启动过程中使用该接口，多次调用该接口会先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.setUIContent(path:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 要加载到窗口中的页面内容的路径，Stage模型下该路径需添加到工程的main_pages.json文件中，FA模型下该路径需添加到工程的config.json文件中。不支持相对  路径写法，需与main_pages.json或config.json中的src取值保持一致。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

## loadContent

```TypeScript
loadContent(path: string): Promise<void>
```

为当前窗口加载具体页面内容，使用Promise异步回调。 建议在UIAbility启动过程中使用该接口，多次调用该接口会先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[setUIContent()]window.Window.setUIContent(path: string)替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.setUIContent(path:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 要加载到窗口中的页面内容的路径，Stage模型下该路径需添加到工程的main_pages.json文件中，FA模型下该路径需添加到工程的config.json文件中。不支持相对  路径写法，需与main_pages.json或config.json中的src取值保持一致。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## loadContentByName

```TypeScript
loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void
```

根据指定路由页面名称为当前窗口加载[命名路由](docroot://ui/arkts-routing.md#命名路由)页面，通过LocalStorage传递状态属性至加载页面，使用callback异步回调。 建议在UIAbility启动过程中使用该接口，重复调用该接口将先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | 命名路由页面的名称。 |
| storage | LocalStorage | 是 | 页面级UI状态存储单元，这里用于为加载到窗口的页面内容传递状态属性。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |

## loadContentByName

```TypeScript
loadContentByName(name: string, callback: AsyncCallback<void>): void
```

根据指定路由页面名称为当前窗口加载[命名路由](docroot://ui/arkts-routing.md#命名路由)页面，使用callback异步回调。 建议在UIAbility启动过程中使用该接口，重复调用该接口将先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | 命名路由页面的名称。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |

## loadContentByName

```TypeScript
loadContentByName(name: string, storage?: LocalStorage): Promise<void>
```

根据指定路由页面名称为当前窗口加载[命名路由](docroot://ui/arkts-routing.md#命名路由)页面，通过LocalStorage传递状态属性至加载页面，使用Promise异步回调。 建议在UIAbility启动过程中使用该接口，重复调用该接口将先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | 命名路由页面的名称。 |
| storage | LocalStorage | 否 | 页面级UI状态存储单元，这里用于为加载到窗口的页面内容传递状态属性，默认值为空。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |

## maximize

```TypeScript
maximize(presentation?: MaximizePresentation): Promise<void>
```

实现最大化功能。主窗口可调用此接口实现最大化功能；子窗口需在创建时设置子窗口参数maximizeSupported为true， 再调用此接口可实现最大化功能。使用Promise异步回调。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| presentation | MaximizePresentation | 否 | set window presentation when maximize. [since 12 - 19] |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function maximize can not work correctly due to limited  device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows and maximizable subwindows are supported. |
| 1300005 | This window stage is abnormal. [since 12 - 19] |

## maximize

```TypeScript
maximize(presentation?: MaximizePresentation, acrossDisplay?: boolean): Promise<void>
```

实现最大化功能。主窗口可调用此接口实现最大化功能；子窗口需在创建时设置子窗口参数maximizeSupported为true，再调用此接口可实现最大化功能。在具备折叠功能的2in1设备上，支持控制悬停态（参考 [折叠屏悬停态最佳实践](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-folded-hover)）下主窗口的瀑布流模式行为，即窗口在悬停态下 最大化时是否跨上下两个半屏显示。使用Promise异步回调。

**起始版本：** 22

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| presentation | MaximizePresentation | 否 |  |
| acrossDisplay | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function maximize can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows and maximizable subwindows are supported. |

## maximizeWithOptions

```TypeScript
maximizeWithOptions(maximizeOptions?: MaximizeOptions): Promise<void>
```

最大化应用窗口。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| maximizeOptions | MaximizeOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. Possible cause:  1. Invalid window type. Only main windows and maximizable subwindows are supported;  2. The acrossDisplay parameter only supports main windows. |
| 1300016 | Parameter error. Possible cause: Invalid parameter range. |

## minimize

```TypeScript
minimize(callback: AsyncCallback<void>): void
```

此接口根据调用对象不同，实现不同的功能： - 当调用对象为主窗口时，实现最小化功能，可在Dock栏中还原，2in1 设备上可以使用[restore()]window.Window.restore进行还原。 - 当调用对象为子窗口或全局悬浮窗时，实现隐藏功能，不可在Dock栏中还原，可以使用 [showWindow()]window.Window.showWindow(callback: AsyncCallback<void>)进行还原。 该接口仅支持主窗口、子窗口或全局悬浮窗，其它窗口调用返回1300002错误码，使用callback异步回调。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error;  3. Invalid window type. Only main windows, subwindows, and float windows are supported. |
| 1300003 | This window manager service works abnormally. |

## minimize

```TypeScript
minimize(): Promise<void>
```

此接口根据调用对象不同，实现不同的功能： - 当调用对象为主窗口时，实现最小化功能，可在Dock栏中还原，2in1 设备上可以使用[restore()]window.Window.restore进行还原。 - 当调用对象为子窗口或全局悬浮窗时，实现隐藏功能，不可在Dock栏中还原，可以使用 [showWindow()]window.Window.showWindow(callback: AsyncCallback<void>)进行还原。 该接口仅支持主窗口、子窗口或全局悬浮窗，其它窗口调用返回1300002错误码，使用Promise异步回调。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error;  3. Invalid window type. Only main windows, subwindows, and float windows are supported. |
| 1300003 | This window manager service works abnormally. |

## moveTo

```TypeScript
moveTo(x: number, y: number): Promise<void>
```

移动窗口位置，使用Promise异步回调。 全屏模式窗口不支持该操作。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[moveWindowTo()]window.Window.moveWindowTo(x: int, y: int)替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.moveWindowTo(x:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 窗口在x轴方向移动到的坐标位置，单位为px，值为正表示位置在x轴右侧；值为负表示位置在x轴左侧；值为0表示位置在x轴坐标原点。该参数仅支持整数输入，浮点数输入将向下取整。 |
| y | number | 是 | 窗口在y轴方向移动到的坐标位置，单位为px，值为正表示位置在y轴下侧；值为负表示位置在y轴上侧；值为0表示位置在y轴坐标原点。该参数仅支持整数输入，浮点数输入将向下取整。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## moveTo

```TypeScript
moveTo(x: number, y: number, callback: AsyncCallback<void>): void
```

移动窗口位置，使用callback异步回调。 全屏模式窗口不支持该操作。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [moveWindowTo()]window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.moveWindowTo(x:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | 窗口在x轴方向移动到的坐标位置，单位为px，值为正表示位置在x轴右侧；值为负表示位置在x轴左侧；值为0表示位置在x轴坐标原点。该参数仅支持整数输入，浮点数输入将向下取整。 |
| y | number | 是 | 窗口在y轴方向移动到的坐标位置，单位为px，值为正表示位置在y轴下侧；值为负表示位置在y轴上侧；值为0表示位置在x轴坐标原点。该参数仅支持整数输入，浮点数输入将向下取整。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

## moveWindowTo

```TypeScript
moveWindowTo(x: int, y: int): Promise<void>
```

移动窗口位置，使用Promise异步回调。调用成功即返回，但返回后无法立即获取最终生效结果。如需立即获取，请使用 [moveWindowToAsync()]window.Window.moveWindowToAsync(x: int, y: int)。 > **说明：** > > - 不建议在除自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，WindowStatusType可通过 > [getWindowStatus()]window.Window.getWindowStatus获取）外的其他窗口模式下使用。 > > - 在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，窗口相对于屏幕左上顶点移动；在非自由窗口状态下，窗口相对于父窗口左上顶点移动。 > > - 若需在非自由窗口状态下实现相对于屏幕左上顶点的移动，请使用 > [moveWindowToGlobal()]window.Window.moveWindowToGlobal(x: int, y: int, moveConfiguration?: MoveConfiguration) > 。 > > - 该方法对非自由窗口状态下的主窗口无效。 > > - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，若主窗口或子窗口的标题栏移出屏幕可视区域，系统将自动回弹窗口，确保标题栏保持可见。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | int | 是 | 窗口在x轴方向移动到的坐标位置，单位为px，值为正表示在原点右侧，值为负表示在原点左侧。该参数仅支持整数输入，浮点数输入将向下取整。 |
| y | int | 是 | 窗口在y轴方向移动到的坐标位置，单位为px，值为正表示在原点下方，值为负表示在原点上方。该参数仅支持整数输入，浮点数输入将向下取整。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## moveWindowTo

```TypeScript
moveWindowTo(x: int, y: int, callback: AsyncCallback<void>): void
```

移动窗口位置，使用callback异步回调。调用成功即返回，但返回后无法立即获取最终生效结果。如需立即获取，请使用 [moveWindowToAsync()]window.Window.moveWindowToAsync(x: int, y: int)。 > **说明：** > > - 不建议在除自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，WindowStatusType可通过 > [getWindowStatus()]window.Window.getWindowStatus获取）外的其他窗口模式下使用。 > > - 在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，窗口相对于屏幕左上顶点移动；在非自由窗口状态下，窗口相对于父窗口左上顶点移动。 > > - 若需在非自由窗口状态下实现相对于屏幕左上顶点的移动，请使用 > [moveWindowToGlobal()]window.Window.moveWindowToGlobal(x: int, y: int, moveConfiguration?: MoveConfiguration) > 。 > > - 该方法对非自由窗口状态下的主窗口无效。 > > - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，若主窗口或子窗口的标题栏移出屏幕可视区域，系统将自动回弹窗口，确保标题栏保持可见。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | int | 是 | 窗口在x轴方向移动到的坐标位置，单位为px，值为正表示在原点右侧，值为负表示在原点左侧。  该参数仅支持整数输入，浮点数输入将向下取整。 |
| y | int | 是 | 窗口在y轴方向移动到的坐标位置，单位为px，值为正表示在原点下方，值为负表示在原点上方。  该参数仅支持整数输入，浮点数输入将向下取整。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## moveWindowToAsync

```TypeScript
moveWindowToAsync(x: int, y: int): Promise<void>
```

移动窗口位置，使用Promise异步回调。调用生效后返回，回调中可使用[getWindowProperties()]window.Window.getWindowProperties（见示例）立即获取最终生效结 果。 该接口仅在窗口为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，窗口模式可通过 [getWindowStatus()]window.Window.getWindowStatus获取）时调用生效，在其他窗口模式下调用返回错误码1300010错误码。 在自由悬浮窗口模式下，不同类型窗口的移动行为如下： | 窗口类型 | [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态 | 非自由窗口状态 | |---------|---------------|-----------------| | 主窗口 | 相对于屏幕移动 | 调用不生效不报错 | | 应用子窗口/模态窗 | 相对于屏幕移动 | 相对于主窗口移动 | | 系统窗口/全局悬浮窗 | 相对于屏幕移动 | 相对于屏幕移动 | > **说明：** > > - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，若主窗口或子窗口的标题栏移出屏幕可视区域，系统将自动回弹窗口，确保标题栏保持可见。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | int | 是 | 窗口在x轴方向移动到的坐标位置，单位为px，值为正表示位置在x轴右侧；值为负表示位置在x轴左侧；  值为0表示位置在x轴坐标原点。该参数仅支持整数输入，浮点数输入将向下取整。 |
| y | int | 是 | 窗口在y轴方向移动到的坐标位置，单位为px，值为正表示位置在y轴下侧；值为负表示位置在y轴上侧；  值为0表示位置在y轴坐标原点。该参数仅支持整数输入，浮点数输入将向下取整。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed.  2. The window type is not supported for this operation. |
| 1300003 | This window manager service works abnormally. |
| 1300010 | The operation in the current window status is invalid.  Possible cause: The window status is not FLOATING. |

## moveWindowToAsync

```TypeScript
moveWindowToAsync(x: int, y: int, moveConfiguration?: MoveConfiguration): Promise<void>
```

移动窗口位置，支持配置moveConfiguration参数指定窗口移动的目标屏幕ID，使用Promise异步回调。调用生效后返回，回调中可使用 [getWindowProperties()]window.Window.getWindowProperties（见示例）立即获取最终生效结果。 该接口仅在窗口为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，窗口模式可通过 [getWindowStatus()]window.Window.getWindowStatus获取）时调用生效，在其他窗口模式下调用返回错误码1300010错误码。 在自由悬浮窗口模式下，不同类型窗口的移动行为如下： | 窗口类型 | [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态 | 非自由窗口状态 | |---------|---------------|-----------------| | 主窗口 | 相对于屏幕移动 | 调用不生效不报错 | | 应用子窗口/模态窗 | 相对于屏幕移动 | 相对于主窗口移动 | | 系统窗口/全局悬浮窗 | 相对于屏幕移动 | 相对于屏幕移动 | > **说明：** > > - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，若主窗口或子窗口的标题栏移出屏幕可视区域，系统将自动回弹窗口，确保标题栏保持可见。

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | int | 是 | 窗口在x轴方向移动的值，值为正表示右移，单位为px，该参数应该为整数，非整数输入将向下取整。 |
| y | int | 是 | 窗口在y轴方向移动的值，值为正表示下移，单位为px，该参数应该为整数，非整数输入将向下取整。 |
| moveConfiguration | MoveConfiguration | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed.  2. The window type is not supported for this operation. |
| 1300003 | This window manager service works abnormally. |
| 1300010 | The operation in the current window status is invalid.  Possible cause: The window status is not FLOATING. |

## moveWindowToGlobal

```TypeScript
moveWindowToGlobal(x: int, y: int): Promise<void>
```

基于屏幕坐标移动窗口位置，使用Promise异步回调。调用生效后返回，回调中可使用[getWindowProperties()]window.Window.getWindowProperties（见示例）立即获 取最终生效结果。 该接口仅在窗口为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，窗口模式可通过 [getWindowStatus()]window.Window.getWindowStatus获取）时调用生效，在其他窗口模式下调用返回错误码1300010错误码。 > **说明：** > > - 主窗处于自由悬浮窗口模式时，在非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下调用不生效不报错。 > > - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，若主窗口或子窗口的标题栏移出屏幕可视区域，系统将自动回弹窗口，确保标题栏保持可见。

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | int | 是 | 表示以屏幕左上角为起点，窗口在x轴方向移动的值，单位为px。值为正表示右移，值为负表示左移。  该参数仅支持整数输入，浮点数输入将向下取整。 |
| y | int | 是 | 表示以屏幕左上角为起点，窗口在y轴方向移动的值，单位为px。值为正表示下移，值为负表示上移。  该参数仅支持整数输入，浮点数输入将向下取整。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed.  2. The window type is not supported for this operation. |
| 1300003 | This window manager service works abnormally. |
| 1300010 | The operation in the current window status is invalid.  Possible cause: The window status is not FLOATING. |

## moveWindowToGlobal

```TypeScript
moveWindowToGlobal(x: int, y: int, moveConfiguration?: MoveConfiguration): Promise<void>
```

基于屏幕坐标移动窗口位置，支持配置moveConfiguration参数指定窗口移动的目标屏幕ID，使用Promise异步回调。调用生效后返回，回调中可使用 [getWindowProperties()]window.Window.getWindowProperties（见示例）立即获取最终生效结果。 该接口仅在窗口为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，窗口模式可通过 [getWindowStatus()]window.Window.getWindowStatus获取）时调用生效，在其他窗口模式下调用返回错误码1300010错误码。 > **说明：** > > - 主窗处于自由悬浮窗口模式时，在非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下调用不生效不报错。 > > - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，若主窗口或子窗口的标题栏移出屏幕可视区域，系统将自动回弹窗口，确保标题栏保持可见。

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | int | 是 | 表示以目标屏幕左上角为起点，窗口在x轴方向移动的值，单位为px。值为正表示右移，值为负表示左移。  该参数应该为整数，非整数输入将向下取整。 |
| y | int | 是 | 表示以目标屏幕左上角为起点，窗口在y轴方向移动的值，单位为px。值为正表示下移，值为负表示上移。  该参数应该为整数，非整数输入将向下取整。 |
| moveConfiguration | MoveConfiguration | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed.  2. The window type is not supported for this operation. |
| 1300003 | This window manager service works abnormally. |
| 1300010 | The operation in the current window status is invalid.  Possible cause: The window status is not FLOATING. |

## moveWindowToGlobalDisplay

```TypeScript
moveWindowToGlobalDisplay(x: int, y: int): Promise<void>
```

基于[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)移动窗口位置，使用Promise异步回调。 该接口仅在窗口为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，窗口模式可通过 [getWindowStatus()]window.Window.getWindowStatus获取）时调用生效，在其他窗口模式下调用返回错误码1300010错误码。 > **说明：** > > - 主窗处于自由悬浮窗口模式时，在非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下调用不生效不报错。 > > - 窗口移动后，如果窗口跨越多个屏幕，窗口将归属于与其重叠面积最大的屏幕。 > > - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，若主窗口或子窗口的标题栏移出屏幕可视区域，系统将自动回弹窗口，确保标题栏保持可见。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | int | 是 | 表示以主屏幕左上角为起点，窗口在x轴方向移动的值，单位为px。值为正表示右移，值为负表示左移。  该参数应该为整数，非整数输入将向下取整。 |
| y | int | 是 | 表示以主屏幕左上角为起点，窗口在y轴方向移动的值，单位为px。值为正表示下移，值为负表示上移。  该参数应该为整数，非整数输入将向下取整。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed.  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300010 | The operation in the current window status is invalid.  Possible cause: The window status is not FLOATING. |
| 1300016 | Parameter error. Possible cause: 1. Invalid parameter range. |

## off('rotationChange')

```TypeScript
off(type: 'rotationChange', 
       callback?: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void>): void
```

关闭窗口旋转变化的监听。

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'rotationChange' | 是 | 监听事件，固定为'rotationChange'，即窗口旋转变化事件。 |
| callback | RotationChangeCallback&lt;RotationChangeInfo, RotationChangeResult \| void> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## off

```TypeScript
off(eventType: 'uiExtensionSecureLimitChange', callback?: Callback<boolean>): void
```

关闭窗口内uiextension安全限制变化事件的监听。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| eventType | 'uiExtensionSecureLimitChange' | 是 | 监听事件，固定为'uiExtensionSecureLimitChange'，即窗口内uiExtension安全限制变  化事件。 |
| callback | Callback&lt;boolean> | 否 | 回调函数。若传入参数，则关闭该监听。若未传入参数，则关闭所有窗口安全限制变化的监听。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function off('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## off('frameMetricsMeasured')

```TypeScript
off(type: 'frameMetricsMeasured', callback?: Callback<FrameMetrics>): void
```

关闭窗口帧率指标变化事件的监听。该接口需要在 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)调用生效后使用。

**起始版本：** 22

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'frameMetricsMeasured' | 是 | 监听事件类型，固定为'frameMetricsMeasured'，即窗口帧率指标变化事件。 |
| callback | Callback&lt;FrameMetrics> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## off('occlusionStateChanged')

```TypeScript
off(type: 'occlusionStateChanged', callback?: Callback<OcclusionState>): void
```

关闭窗口可见性状态变化事件的监听。

**起始版本：** 22

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'occlusionStateChanged' | 是 | 监听事件，固定为'occlusionStateChanged'，即窗口可见性变化事件。 |
| callback | Callback&lt;OcclusionState> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## off('windowSizeChange')

```TypeScript
off(type: 'windowSizeChange', callback?: Callback<Size>): void
```

关闭窗口尺寸变化的监听。仅在主线程调用。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowSizeChange' | 是 | 监听事件，固定为'windowSizeChange'，即窗口尺寸变化事件。 |
| callback | Callback&lt;Size> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |

## off('systemAvoidAreaChange')

```TypeScript
off(type: 'systemAvoidAreaChange', callback?: Callback<AvoidArea>): void
```

关闭当前窗口系统避让区变化的监听。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [off('avoidAreaChange')]window.Window.off(type: 'avoidAreaChange', callback?: Callback<AvoidAreaOptions>) > 替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.off(type:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'systemAvoidAreaChange' | 是 | 监听事件，固定为'systemAvoidAreaChange'，即系统避让区变化事件。 |
| callback | Callback&lt;AvoidArea> | 否 | 回调函数。返回当前避让区。若传入参数，则关闭该监听。若未传入参数，则关闭所有系统避让区变化的监听。 |

## off('avoidAreaChange')

```TypeScript
off(type: 'avoidAreaChange', callback?: Callback<AvoidAreaOptions>): void
```

关闭当前窗口系统避让区变化的监听。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'avoidAreaChange' | 是 | 监听事件，固定为'avoidAreaChange'，即系统避让区变化事件。 |
| callback | Callback&lt;AvoidAreaOptions> | 否 | 回调函数。返回当前避让区以及避让区类型。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有系统避让区变化的监听  。 [since 12 - 19] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types;  2. Parameter verification failed. |

## off('keyboardHeightChange')

```TypeScript
off(type: 'keyboardHeightChange', callback?: Callback<int>): void
```

关闭固定态软键盘高度变化的监听，使应用程序不再接收键盘高度变化的通知。从API version 10开始，有关将软键盘设置为固定态或悬浮态的方法，请参见 [输入法服务](../../apis-ime-kit/arkts-apis/arkts-inputmethodengine-panel-i.md#changeFlag)。

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyboardHeightChange' | 是 | 监听事件，固定为'keyboardHeightChange'，即键盘高度变化事件。 |
| callback | Callback&lt;int> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |

## off('keyboardWillShow')

```TypeScript
off(type: 'keyboardWillShow', callback?: Callback<KeyboardInfo>): void
```

关闭固定态软键盘即将开始显示的监听。改变输入法窗口为固定态或者悬浮态方法详细介绍请参见 [输入法服务](../../apis-ime-kit/arkts-apis/arkts-inputmethodengine-panel-i.md#changeFlag)。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyboardWillShow' | 是 | 监听事件，固定为'keyboardWillShow'，即固定态软键盘即将开始显示的事件。 |
| callback | Callback&lt;KeyboardInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function keyboardWillShow can not work correctly due to  limited device capabilities. |
| 1300002 | This window state is abnormal. |

## off('keyboardDidShow')

```TypeScript
off(type: 'keyboardDidShow', callback?: Callback<KeyboardInfo>): void
```

关闭固定态软键盘显示动画完成的监听。改变输入法窗口为固定态或者悬浮态方法详细介绍请参见 [输入法服务](../../apis-ime-kit/arkts-apis/arkts-inputmethodengine-panel-i.md#changeFlag)。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyboardDidShow' | 是 | 监听事件，固定为'keyboardDidShow'，即固定态软键盘显示动画完成事件。 |
| callback | Callback&lt;KeyboardInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function keyboardDidShow can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## off('keyboardWillHide')

```TypeScript
off(type: 'keyboardWillHide', callback?: Callback<KeyboardInfo>): void
```

关闭固定态软键盘即将开始隐藏的监听。改变输入法窗口为固定态切换至悬浮态方法详细介绍请参见 [输入法服务](../../apis-ime-kit/arkts-apis/arkts-inputmethodengine-panel-i.md#changeFlag)。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyboardWillHide' | 是 | 监听事件，固定为'keyboardWillHide'，即固定态软键盘即将开始隐藏的事件。 |
| callback | Callback&lt;KeyboardInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function keyboardWillHide can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## off('keyboardDidHide')

```TypeScript
off(type: 'keyboardDidHide', callback?: Callback<KeyboardInfo>): void
```

关闭固定态软键盘隐藏动画完成的监听。改变输入法窗口为固定态切换至悬浮态方法详细介绍请参见 [输入法服务](../../apis-ime-kit/arkts-apis/arkts-inputmethodengine-panel-i.md#changeFlag)。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyboardDidHide' | 是 | 监听事件，固定为'keyboardDidHide'，即固定态软键盘隐藏动画完成事件。 |
| callback | Callback&lt;KeyboardInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function keyboardDidHide can not work correctly due to  limited device capabilities. |
| 1300002 | This window state is abnormal. |

## off('touchOutside')

```TypeScript
off(type: 'touchOutside', callback?: Callback<void>): void
```

关闭本窗口区域范围外的点击事件的监听。

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'touchOutside' | 是 | 监听事件，固定为'touchOutside'，即本窗口范围外的点击事件。 |
| callback | Callback&lt;void> | 否 | 回调函数。当点击事件发生在本窗口范围之外的回调。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有本窗口区域范围外的点击事件的监听。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |

## off('displayIdChange')

```TypeScript
off(type: 'displayIdChange', callback?: Callback<long>): void
```

关闭本窗口所处屏幕变化事件的监听。

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'displayIdChange' | 是 | 监听事件，固定为'displayIdChange'，即本窗口所处屏幕变化的事件。 |
| callback | Callback&lt;long> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |

## off('windowVisibilityChange')

```TypeScript
off(type: 'windowVisibilityChange', callback?: Callback<boolean>): void
```

关闭本窗口可见状态变化事件的监听。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowVisibilityChange' | 是 | 监听事件，固定为'windowVisibilityChange'，即本窗口可见状态变化的事件。 |
| callback | Callback&lt;boolean> | 否 | 回调函数。当本窗口可见状态发生变化时的回调。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有本窗口可见状态变化事件的回调  。 [since 11 - 11] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## off('systemDensityChange')

```TypeScript
off(type: 'systemDensityChange', callback?: Callback<double>): void
```

关闭本窗口所处屏幕的系统显示大小缩放系数变化事件的监听。 在接口回调函数中，建议直接使用返回值进行vp和px的转换。例如，若返回值为density，计算px可使用vp * density = px。

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'systemDensityChange' | 是 | 监听事件，固定为'systemDensityChange'，即本窗口所处屏幕的系统显示大小缩放系数变化的事件。 |
| callback | Callback&lt;double> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause:  1. Incorrect parameter types;  2. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |

## off('mainWindowFullScreenAcrossDisplaysChanged')

```TypeScript
off(type: 'mainWindowFullScreenAcrossDisplaysChanged', callback?: Callback<boolean>): void
```

取消监听本窗口的主窗口跨多块屏幕使用全屏模式显示的状态变化事件。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'mainWindowFullScreenAcrossDisplaysChanged' | 是 | 监听事件，固定为'mainWindowFullScreenAcrossDisplaysChanged'  ，即本窗口的主窗口跨多块屏幕使用全屏模式显示的状态变化。 |
| callback | Callback&lt;boolean> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows and subwindows are supported. |

**示例：**

```TypeScript
const callback = (mainWindowFullScreenAcrossDisplaysChanged: boolean) => {
  // ...
}
try {
  // 通过on接口开启监听
  windowClass.on('mainWindowFullScreenAcrossDisplaysChanged', callback);
  // 关闭指定callback的监听
  windowClass.off('mainWindowFullScreenAcrossDisplaysChanged', callback);
  // 如果通过on开启多个callback进行监听，同时关闭所有监听：
  windowClass.off('mainWindowFullScreenAcrossDisplaysChanged');
} catch (exception) {
  console.error(`Failed to unregister callback. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## off('noInteractionDetected')

```TypeScript
off(type: 'noInteractionDetected', callback?: Callback<void>): void
```

关闭本窗口在指定超时时间内无交互事件的监听，交互事件支持物理键盘输入事件和屏幕触控点击事件，不支持软键盘输入事件。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'noInteractionDetected' | 是 | 监听事件，固定为'noInteractionDetected'，即本窗口在指定超时时间内无交互的事件。 |
| callback | Callback&lt;void> | 否 | 回调函数，当本窗口在指定超时时间内无交互事件时的回调。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有本窗口在指定超时时间内无交互事件的监听。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## off('screenshot')

```TypeScript
off(type: 'screenshot', callback?: Callback<void>): void
```

关闭截屏事件的监听。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'screenshot' | 是 | 监听事件，固定为'screenshot'，即截屏事件。 |
| callback | Callback&lt;void> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause:  1. Incorrect parameter types;  2. Parameter verification failed. |

## off('screenshotAppEvent')

```TypeScript
off(type: 'screenshotAppEvent', callback?: Callback<ScreenshotEventType>): void
```

关闭屏幕截屏事件类型的监听。

**起始版本：** 20

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'screenshotAppEvent' | 是 | 监听事件，固定为'screenshotAppEvent'，即屏幕截屏的事件类型。 |
| callback | Callback&lt;ScreenshotEventType> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## off('dialogTargetTouch')

```TypeScript
off(type: 'dialogTargetTouch', callback?: Callback<void>): void
```

关闭模态窗口目标窗口的点击事件的监听。

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'dialogTargetTouch' | 是 | 监听事件，固定为'dialogTargetTouch'，即模态窗口目标窗口的点击事件。 |
| callback | Callback&lt;void> | 否 | 回调函数。当点击事件发生在模态窗口目标窗口的回调。若传入参数，则关闭该监听。若未传入参数，则关闭所有模态窗口目标窗口的点击事件的监听。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |

## off('windowEvent')

```TypeScript
off(type: 'windowEvent', callback?: Callback<WindowEventType>): void
```

关闭窗口生命周期变化的监听。

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowEvent' | 是 | 监听事件，固定为'windowEvent'，即窗口生命周期变化事件。 |
| callback | Callback&lt;WindowEventType> | 否 | 回调函数。返回当前的窗口生命周期状态。若传入参数，则关闭该监听。若未传入参数，则关闭所有窗口生命周期变化的监听。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |

## off('windowStatusChange')

```TypeScript
off(type: 'windowStatusChange', callback?: Callback<WindowStatusType>): void
```

关闭窗口模式变化的监听。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowStatusChange' | 是 | 监听事件，固定为'windowStatusChange'，即窗口模式变化事件。 |
| callback | Callback&lt;WindowStatusType> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |

## off('windowStatusDidChange')

```TypeScript
off(type: 'windowStatusDidChange', callback?: Callback<WindowStatusType>): void
```

关闭窗口模式变化的监听。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowStatusDidChange' | 是 | 监听事件，固定为'windowStatusDidChange'，即窗口模式变化完成事件。 |
| callback | Callback&lt;WindowStatusType> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |

## off('subWindowClose')

```TypeScript
off(type: 'subWindowClose', callback?: Callback<void>): void
```

关闭子窗口关闭事件的监听。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'subWindowClose' | 是 | 监听事件，固定为'subWindowClose'，即子窗口关闭事件。 |
| callback | Callback&lt;void> | 否 | 回调函数。当点击子窗口右上角关闭按钮事件发生时的回调。该回调函数不返回任何参数。回调函数内部逻辑的返回值决定当前子窗是否继续关闭，如果返回boolean  类型的true表示不关闭子窗，返回false或者其他非boolean类型表示关闭子窗。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有子窗口关闭的监听。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only subwindows are supported. |

## off('windowWillClose')

```TypeScript
off(type: 'windowWillClose', callback?: Callback<void, Promise<boolean>>): void
```

用于关闭主窗口或子窗口关闭事件的监听。

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowWillClose' | 是 | 监听事件，固定为'windowWillClose'，即窗口关闭事件。 |
| callback | Callback&lt;void, Promise&lt;boolean>> | 否 | 回调函数。当点击窗口系统提供的右上角关闭按钮事件发生时的回调。该回调函数不返回任何参数。回调函数内部逻辑需要有  Promise类型的返回值。在返回的Promise函数里，执行resolve(true) 方法表示不关闭当前窗口，执行resolve(false) 方法或者reject方法均表示关闭当前窗口。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

## off('windowHighlightChange')

```TypeScript
off(type: 'windowHighlightChange', callback?: Callback<boolean>): void
```

关闭窗口激活态变化事件的监听。

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowHighlightChange' | 是 | 监听事件，固定为'windowHighlightChange'，即窗口激活态变化事件。 |
| callback | Callback&lt;boolean> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## off('windowTitleButtonRectChange')

```TypeScript
off(type: 'windowTitleButtonRectChange', callback?: Callback<TitleButtonRect>): void
```

关闭窗口标题栏上的最小化、最大化、关闭按钮矩形区域变化的监听，对存在标题栏和三键区的窗口形态生效。如果使用Stage模型，该接口需要在 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)调用生效后使用。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowTitleButtonRectChange' | 是 | 监听事件，固定为'windowTitleButtonRectChange'，即标题栏上的最小化、最大化、关闭按钮矩形区域变化事件。 |
| callback | Callback&lt;TitleButtonRect> | 否 | 回调函数。返回当前标题栏上的最小化、最大化、关闭按钮矩形区域。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有标题栏上的最小  化、最大化、关闭按钮矩形区域变化的监听。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |

## off('windowRectChange')

```TypeScript
off(type: 'windowRectChange', callback?: Callback<RectChangeOptions>): void
```

关闭窗口矩形（窗口位置及窗口大小）变化的监听。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowRectChange' | 是 | 监听事件，固定为'windowRectChange'，即窗口矩形变化事件。 |
| callback | Callback&lt;RectChangeOptions> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## off('rectChangeInGlobalDisplay')

```TypeScript
off(type: 'rectChangeInGlobalDisplay', callback?: Callback<RectChangeOptions>): void
```

关闭[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)下窗口矩形（窗口位置及窗口大小）变化的监听事件。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'rectChangeInGlobalDisplay' | 是 | 监听事件，固定为'rectChangeInGlobalDisplay'，即全局坐标系下窗口矩形变化事件。 |
| callback | Callback&lt;RectChangeOptions> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## off('freeWindowModeChange')

```TypeScript
off(type: 'freeWindowModeChange', callback?: Callback<boolean>): void
```

关闭自由窗口模式变化事件的监听。

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'freeWindowModeChange' | 是 | 监听事件，固定为'freeWindowModeChange'，即自由窗口模式变化事件。 |
| callback | Callback&lt;boolean> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |

## offAvoidAreaChange

```TypeScript
offAvoidAreaChange(callback?: Callback<AvoidAreaOptions>): void
```

关闭当前窗口系统避让区变化的监听。

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AvoidAreaOptions> | 否 | 回调函数。返回当前避让区以及避让区类型。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有系统避让区变化的监听  。 [since 12 - 19] |

## offDialogTargetTouch

```TypeScript
offDialogTargetTouch(callback?: Callback<void>): void
```

Unsubscribes from the touch event of the target window in the modal window mode.

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 否 |  |

## offDisplayIdChange

```TypeScript
offDisplayIdChange(callback?: Callback<long>): void
```

关闭本窗口所处屏幕变化事件的监听。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;long> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |

## offFrameMetricsMeasured

```TypeScript
offFrameMetricsMeasured(callback?: Callback<FrameMetrics>): void
```

关闭窗口帧率指标变化事件的监听。该接口需要在 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)调用生效后使用。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;FrameMetrics> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## offFreeWindowModeChange

```TypeScript
offFreeWindowModeChange(callback?: Callback<boolean>): void
```

free window mode change callback off.

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |

## offKeyboardDidHide

```TypeScript
offKeyboardDidHide(callback?: Callback<KeyboardInfo>): void
```

Unregister the callback of keyboard did hide

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;KeyboardInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function keyboardDidHide can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## offKeyboardDidShow

```TypeScript
offKeyboardDidShow(callback?: Callback<KeyboardInfo>): void
```

Unregister the callback of keyboard did show

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;KeyboardInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function keyboardDidShow can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## offKeyboardHeightChange

```TypeScript
offKeyboardHeightChange(callback?: Callback<int>): void
```

解注册键盘高度监听

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | 否 |  |

## offKeyboardWillHide

```TypeScript
offKeyboardWillHide(callback?: Callback<KeyboardInfo>): void
```

Unregister the callback of keyboard will hide

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;KeyboardInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function keyboardWillHide can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## offKeyboardWillShow

```TypeScript
offKeyboardWillShow(callback?: Callback<KeyboardInfo>): void
```

Unregister the callback of keyboard will show

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;KeyboardInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function keyboardWillShow can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## offMainWindowFullScreenAcrossDisplaysChanged

```TypeScript
offMainWindowFullScreenAcrossDisplaysChanged(callback?: Callback<boolean>): void
```

取消监听本窗口的主窗口跨多块屏幕使用全屏模式显示的状态变化事件。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A nonsystem application calls a system API. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows and subwindows are supported. |

## offNoInteractionDetected

```TypeScript
offNoInteractionDetected(callback?: Callback<void>): void
```

Unsubscribes from non-interaction events in a window within the specified period. Interaction events include physical keyboard input events and screen touch/click events, but not soft keyboard input events.

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## offOcclusionStateChanged

```TypeScript
offOcclusionStateChanged(callback?: Callback<OcclusionState>): void
```

关闭窗口可见性状态变化事件的监听。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;OcclusionState> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## offRectChangeInGlobalDisplay

```TypeScript
offRectChangeInGlobalDisplay(callback?: Callback<RectChangeOptions>): void
```

关闭[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)下窗口矩形（窗口位置及窗口大小）变化的监听事件。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;RectChangeOptions> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## offRotationChange

```TypeScript
offRotationChange(callback?: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined>):
      void
```

Unregister the callback of rotation change

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | RotationChangeCallback&lt;RotationChangeInfo, RotationChangeResult \| undefined> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## offScreenshot

```TypeScript
offScreenshot(callback?: Callback<void>): void
```

关闭截屏事件的监听。

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 否 |  |

## offScreenshotAppEvent

```TypeScript
offScreenshotAppEvent(callback?: Callback<ScreenshotEventType>): void
```

关闭屏幕截屏事件类型的监听。

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ScreenshotEventType> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## offSubWindowClose

```TypeScript
offSubWindowClose(callback?: Callback<void>): void
```

关闭子窗口关闭事件的监听。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only subwindows are supported. |

## offSystemDensityChange

```TypeScript
offSystemDensityChange(callback?: Callback<double>): void
```

关闭本窗口所处屏幕的系统显示大小缩放系数变化事件的监听。 在接口回调函数中，建议直接使用返回值进行vp和px的转换。例如，若返回值为density，计算px可使用vp * density = px。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;double> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |

## offTouchOutside

```TypeScript
offTouchOutside(callback?: Callback<void>): void
```

Unsubscribes from the touch event outside this window.

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 否 |  |

## offUiExtensionSecureLimitChange

```TypeScript
offUiExtensionSecureLimitChange(callback?: Callback<boolean>): void
```

UIExtension in window secure limit change callback off.

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function off('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## offWindowEvent

```TypeScript
offWindowEvent(callback?: Callback<WindowEventType>): void
```

关闭窗口生命周期变化的监听。

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;WindowEventType> | 否 |  |

## offWindowHighlightChange

```TypeScript
offWindowHighlightChange(callback?: Callback<boolean>): void
```

Unregister the callback of window highlight state change

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## offWindowRectChange

```TypeScript
offWindowRectChange(callback?: Callback<RectChangeOptions>): void
```

关闭窗口矩形（窗口位置及窗口大小）变化的监听。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;RectChangeOptions> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## offWindowSizeChange

```TypeScript
offWindowSizeChange(callback?: Callback<Size>): void
```

关闭窗口尺寸变化的监听。仅在主线程调用。

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Size> | 否 |  |

## offWindowStatusChange

```TypeScript
offWindowStatusChange(callback?: Callback<WindowStatusType>): void
```

关闭窗口模式变化的监听。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;WindowStatusType> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

## offWindowStatusDidChange

```TypeScript
offWindowStatusDidChange(callback?: Callback<WindowStatusType>): void
```

关闭窗口模式变化的监听。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;WindowStatusType> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## offWindowTitleButtonRectChange

```TypeScript
offWindowTitleButtonRectChange(callback?: Callback<TitleButtonRect>): void
```

Unsubscribes from the change event of the rectangle that holds the minimize, maximize, and close buttons on the title bar of the window.

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;TitleButtonRect> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |

## offWindowVisibilityChange

```TypeScript
offWindowVisibilityChange(callback?: Callback<boolean>): void
```

关闭本窗口可见状态变化事件的监听。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## offWindowWillClose

```TypeScript
offWindowWillClose(callback?: Callback<void, Promise<boolean>>): void
```

关闭主窗口或子窗口关闭事件的监听。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void, Promise&lt;boolean>> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

## on('rotationChange')

```TypeScript
on(type: 'rotationChange', callback: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void>): void
```

开启窗口旋转变化的监听。[RotationChangeInfo](arkts-window-rotationchangeinfo-i.md#RotationChangeInfo)中窗口旋转事件类型为窗口即将旋转时，必须返回 [RotationChangeResult](arkts-window-rotationchangeresult-i.md#RotationChangeResult)。窗口旋转事件类型为窗口旋转结束时返回 [RotationChangeResult](arkts-window-rotationchangeresult-i.md#RotationChangeResult)不生效。 该函数只允许在主线程注册。同一个窗口多次注册同类型回调函数，只生效最新注册的同类型回调函数返回值。系统提供了超时保护机制，若20ms内窗口未返回 [RotationChangeResult](arkts-window-rotationchangeresult-i.md#RotationChangeResult)，系统不处理该返回值。

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'rotationChange' | 是 | 监听事件，固定为'rotationChange'，即窗口旋转变化事件。 |
| callback | RotationChangeCallback&lt;RotationChangeInfo, RotationChangeResult \| void> | 是 | 回调函数。返回窗口旋转信息  [RotationChangeInfo](arkts-window-rotationchangeinfo-i.md#RotationChangeInfo)，应用返回当前窗口变化结果  [RotationChangeResult](arkts-window-rotationchangeresult-i.md#RotationChangeResult)。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## on

```TypeScript
on(eventType: 'uiExtensionSecureLimitChange', callback: Callback<boolean>): void
```

开启窗口内uiExtension安全限制变化事件的监听, 建议在窗口创建后立即监听。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| eventType | 'uiExtensionSecureLimitChange' | 是 | 监听事件，固定为'uiExtensionSecureLimitChange'，即窗口内uiExtension安全限制变  化事件。 |
| callback | Callback&lt;boolean> | 是 | 回调函数。当窗口内uiExtension安全限制变化时触发回调。当返回参数为true表示窗口内uiExtension开启了隐藏不安全窗口；当返回参  数为false表示窗口内uiExtension关闭了隐藏不安全窗口。若窗口内存在多个uiExtension，当返回参数为true表示窗口内至少一个uiExtension开启了隐藏不安全窗口；当返回参数为false表示窗  口内所有uiExtension关闭了隐藏不安全窗口。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function on('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## on('frameMetricsMeasured')

```TypeScript
on(type: 'frameMetricsMeasured', callback: Callback<FrameMetrics>): void
```

开启窗口帧率指标变化事件的监听。该接口需要在 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)调用生效后使用。 应用注册帧率变化监听后，只有当客户端UI内容发生重绘时（如页面切换、和可响应组件交互、设置背景色和透明度等），才会触发注册的回调。但当同时使用该接口和 [postFrameCallback](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#postframecallback12)、 [postDelayedFrameCallback](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#postdelayedframecallback12) 、 [displaySync.on('frame')](../../apis-arkgraphics2d/arkts-apis/arkts-displaysync-displaysync-i.md#on) 中的任意一个时，即使无UI内容重绘，也可能触发回调。

**起始版本：** 22

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'frameMetricsMeasured' | 是 | 监听事件类型，固定为'frameMetricsMeasured'，即窗口帧率指标变化事件。 |
| callback | Callback&lt;FrameMetrics> | 是 | 窗口帧率指标变化时的回调函数。详情见帧率指标  [FrameMetrics](arkts-window-framemetrics-i.md#FrameMetrics)。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## on('occlusionStateChanged')

```TypeScript
on(type: 'occlusionStateChanged', callback: Callback<OcclusionState>): void
```

开启窗口可见性状态变化事件的监听。本接口返回的可见性与肉眼所见的可见性可能存在区别，如以下场景： - 非主窗口的阴影区域（可分别通过[setWindowShadowEnabled](arkts-window-window-i.md#setWindowShadowEnabled)和 [setWindowShadowRadius](arkts-window-window-i.md#setWindowShadowRadius)设置是否显示阴影以及对应的阴影半径）被挡住也算遮挡，此时肉眼所见虽是 完全可见，但实际返回的是部分可见。 - 上层窗口带有透明效果时（包括完全不透明之外的所有透明程度）不会遮挡下层窗口，此时下层窗口是可见的。 - 大多数处于动画效果下的窗口也不会遮挡住下层窗口，比如在手机设备上拖动悬浮窗时返回的下层窗口依然是可见的。

**起始版本：** 22

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'occlusionStateChanged' | 是 | 监听事件，固定为'occlusionStateChanged'，即窗口可见性变化事件。 |
| callback | Callback&lt;OcclusionState> | 是 | 窗口可见性变化时的回调函数。详情见[可见性状态](arkts-window-occlusionstate-e.md#OcclusionState)  。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## on('windowSizeChange')

```TypeScript
on(type: 'windowSizeChange', callback: Callback<Size>): void
```

开启窗口尺寸变化的监听。仅在主线程调用。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowSizeChange' | 是 | 监听事件，固定为'windowSizeChange'，即窗口尺寸变化事件。 |
| callback | Callback&lt;Size> | 是 | 回调函数。返回当前的窗口尺寸。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## on('systemAvoidAreaChange')

```TypeScript
on(type: 'systemAvoidAreaChange', callback: Callback<AvoidArea>): void
```

开启当前窗口系统避让区变化的监听。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [on('avoidAreaChange')]window.Window.on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>)替 > 代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.on(type:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'systemAvoidAreaChange' | 是 | 监听事件，固定为'systemAvoidAreaChange'，即系统避让区变化事件。 |
| callback | Callback&lt;AvoidArea> | 是 | 回调函数。返回当前避让区。 |

## on('avoidAreaChange')

```TypeScript
on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>): void
```

开启当前应用窗口系统避让区域变化的监听。 主窗口/子窗口： - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的自由悬浮窗口模式（即窗口模式为 [window.WindowStatusType.FLOATING](arkts-window-windowstatustype-e.md#WindowStatusType)）下触发回调时，仅存在固定态软键盘（ [AvoidAreaType](arkts-window-avoidareatype-e.md#AvoidAreaType)为TYPE_KEYBOARD）类型的避让区域。 - 主窗口在非自由窗口状态的自由悬浮窗口模式下触发回调时，仅存在系统栏（[AvoidAreaType](arkts-window-avoidareatype-e.md#AvoidAreaType)为TYPE_SYSTEM）类型的避让区域。 - 主窗口在其余场景下触发回调时，仅当在非自由悬浮窗口模式下或设备类型为Phone和Tablet，才能返回计算后的避让区域，否则直接返回空的避让区域。 - 子窗口在非自由窗口状态或非自由悬浮窗口模式下触发回调时，仅当子窗口的位置和大小与主窗口一致时，才能返回计算后的子窗口避让区域，否则直接返回空的避让区域。 全局悬浮窗、模态窗或系统窗口： - 仅在调用[setSystemAvoidAreaEnabled]window.Window.setSystemAvoidAreaEnabled方法使能后，触发回调时才能返回计算后的避让区域，否则直接返回空的避 让区域。 <!--RP7-->常见的触发避让区回调的场景如下：应用窗口在全屏模式、悬浮模式、分屏模式之间的切换；应用窗口旋转；可折叠设备在屏幕折叠状态发生变化；应用窗口在多设备之间的流转。<!--RP7End-->

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'avoidAreaChange' | 是 | 监听事件，固定为'avoidAreaChange'，即系统避让区变化事件。 |
| callback | Callback&lt;AvoidAreaOptions> | 是 | 回调函数。返回当前避让区以及避让区类型。 [since 12] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## on('keyboardHeightChange')

```TypeScript
on(type: 'keyboardHeightChange', callback: Callback<int>): void
```

开启固定态软键盘高度变化的监听。当软键盘从本窗口唤出且与窗口有重叠区域时，通知键盘高度变化。从API version 10开始，有关将软键盘设置为固定态或悬浮态的方法，请参见 [输入法服务](../../apis-ime-kit/arkts-apis/arkts-inputmethodengine-panel-i.md#changeFlag)。

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyboardHeightChange' | 是 | 监听事件，固定为'keyboardHeightChange'，即键盘高度变化事件。 |
| callback | Callback&lt;int> | 是 | 回调函数。返回当前的键盘高度。返回值为整数，单位为px。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## on('keyboardWillShow')

```TypeScript
on(type: 'keyboardWillShow', callback: Callback<KeyboardInfo>): void
```

开启固定态软键盘即将开始显示的监听。此监听在固定态软键盘即将开始显示或软键盘由悬浮态切换为固定态时触发，此监听仅对当前拉起或隐藏固定态软键盘的应用窗口生效。对于虚拟屏上应用拉起输入法键盘到主屏上，输入法键盘显隐通知只会给主屏上 获焦窗口，而不是虚拟屏上应用窗口。 改变软键盘为固定态或者悬浮态方法详细介绍请参见[输入法服务](../../apis-ime-kit/arkts-apis/arkts-inputmethodengine-panel-i.md#changeFlag)。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyboardWillShow' | 是 | 监听事件，固定为'keyboardWillShow'，即固定态软键盘即将开始显示的事件。 |
| callback | Callback&lt;KeyboardInfo> | 是 | 回调函数。返回软键盘窗口信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function keyboardWillShow can not work correctly due to  limited device capabilities. |
| 1300002 | This window state is abnormal. |

## on('keyboardDidShow')

```TypeScript
on(type: 'keyboardDidShow', callback: Callback<KeyboardInfo>): void
```

开启固定态软键盘显示动画完成的监听。此监听在固定态软键盘显示动画完成或软键盘由悬浮态切换至固定态时触发，此监听仅对当前拉起或隐藏固定态软键盘的应用窗口生效。对于虚拟屏上应用拉起输入法键盘到主屏上，输入法键盘显隐通知只会给主屏上 获焦窗口，而不是虚拟屏上应用窗口。 改变软键盘为固定态或者悬浮态方法详细介绍请参见[输入法服务](../../apis-ime-kit/arkts-apis/arkts-inputmethodengine-panel-i.md#changeFlag)。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyboardDidShow' | 是 | 监听事件，固定为'keyboardDidShow'，即固定态软键盘显示动画完成事件。 |
| callback | Callback&lt;KeyboardInfo> | 是 | 回调函数。返回软键盘窗口信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function keyboardDidShow can not work correctly due to  limited device capabilities. |
| 1300002 | This window state is abnormal. |

## on('keyboardWillHide')

```TypeScript
on(type: 'keyboardWillHide', callback: Callback<KeyboardInfo>): void
```

开启固定态软键盘即将开始隐藏的监听。此监听在固定态软键盘即将开始隐藏或软键盘由固定态切换为悬浮态时触发，此监听仅对当前拉起或隐藏固定态软键盘的应用窗口生效。对于虚拟屏上应用拉起输入法键盘到主屏上，输入法键盘显隐通知只会给主屏上 获焦窗口，而不是虚拟屏上应用窗口。 改变软键盘为固定态或者悬浮态方法详细介绍请参见[输入法服务](../../apis-ime-kit/arkts-apis/arkts-inputmethodengine-panel-i.md#changeFlag)。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyboardWillHide' | 是 | 监听事件，固定为'keyboardWillHide'，即固定态软键盘即将开始隐藏的事件。 |
| callback | Callback&lt;KeyboardInfo> | 是 | 回调函数。返回软键盘窗口信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function keyboardWillHide can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## on('keyboardDidHide')

```TypeScript
on(type: 'keyboardDidHide', callback: Callback<KeyboardInfo>): void
```

开启固定态软键盘隐藏动画完成的监听。此监听在固定态软键盘隐藏动画完成或软键盘由固定态切换至悬浮态时触发，此监听仅对当前拉起或隐藏固定态软键盘的应用窗口生效。对于虚拟屏上应用拉起输入法键盘到主屏上，输入法键盘显隐通知只会给主屏上 获焦窗口，而不是虚拟屏上应用窗口。 改变软键盘为固定态或者悬浮态方法详细介绍请参见[输入法服务](../../apis-ime-kit/arkts-apis/arkts-inputmethodengine-panel-i.md#changeFlag)。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyboardDidHide' | 是 | 监听事件，固定为'keyboardDidHide'，即固定态软键盘隐藏动画完成事件。 |
| callback | Callback&lt;KeyboardInfo> | 是 | 回调函数。返回软键盘窗口信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function keyboardDidHide can not work correctly due to  limited device capabilities. |
| 1300002 | This window state is abnormal. |

## on('touchOutside')

```TypeScript
on(type: 'touchOutside', callback: Callback<void>): void
```

开启本窗口区域范围外的点击事件的监听。

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'touchOutside' | 是 | 监听事件，固定为'touchOutside'，即本窗口范围外的点击事件。 |
| callback | Callback&lt;void> | 是 | 回调函数。当点击事件发生在本窗口范围之外的回调。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## on('displayIdChange')

```TypeScript
on(type: 'displayIdChange', callback: Callback<long>): void
```

开启本窗口所处屏幕变化事件的监听。比如，当前窗口移动到其他屏幕时，可以从此接口监听到这个行为。

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'displayIdChange' | 是 | 监听事件，固定为'displayIdChange'，即本窗口所处屏幕变化的事件。 |
| callback | Callback&lt;long> | 是 | 回调函数。当本窗口所处屏幕发生变化后的回调。回调函数返回number类型参数，表示窗口所处屏幕的displayId。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |

## on('windowVisibilityChange')

```TypeScript
on(type: 'windowVisibilityChange', callback: Callback<boolean>): void
```

开启本窗口可见状态变化事件的监听。本接口返回的可见性与肉眼所见的可见性可能存在区别，如以下场景： - 非主窗口的阴影区域（可分别通过[setWindowShadowEnabled](arkts-window-window-i.md#setWindowShadowEnabled)和 [setWindowShadowRadius](arkts-window-window-i.md#setWindowShadowRadius)设置是否显示阴影以及对应的阴影半径）被挡住也算遮挡，此时肉眼所见虽是 完全可见，但实际返回的是部分可见。 - 上层窗口带有透明效果时（包括完全不透明之外的所有透明程度）不会遮挡下层窗口，此时下层窗口是可见的。 - 大多数处于动画效果下的窗口也不会遮挡住下层窗口，比如在手机设备上拖动悬浮窗时返回的下层窗口依然是可见的。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowVisibilityChange' | 是 | 监听事件，固定为'windowVisibilityChange'，即本窗口可见状态变化的事件。 |
| callback | Callback&lt;boolean> | 是 | 回调函数。当本窗口可见状态发生变化后的回调。回调函数返回boolean类型参数，当返回参数为true时表示窗口可见，否则表示窗口不可见。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## on('systemDensityChange')

```TypeScript
on(type: 'systemDensityChange', callback: Callback<double>): void
```

开启本窗口所处屏幕的系统显示大小缩放系数变化事件的监听。比如，当调整窗口所处屏幕的显示大小缩放系数时，可以从此接口监听到这个行为。 在接口回调函数中，建议直接使用返回值进行vp和px的转换。例如，若返回值为density，计算px可使用vp * density = px。

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'systemDensityChange' | 是 | 监听事件，固定为'systemDensityChange'，即本窗口所处屏幕的系统显示大小缩放系数变化的事件。 |
| callback | Callback&lt;double> | 是 | 回调函数。当本窗口所处屏幕的系统显示大小缩放系数发生变化后的回调。回调函数返回number类型参数，表示当前窗口所处屏幕的系统显示大小缩放系数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |

## on('mainWindowFullScreenAcrossDisplaysChanged')

```TypeScript
on(type: 'mainWindowFullScreenAcrossDisplaysChanged', callback: Callback<boolean>): void
```

监听本窗口的主窗口跨多块屏幕使用全屏模式显示的状态变化事件。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'mainWindowFullScreenAcrossDisplaysChanged' | 是 | 监听事件，固定为'mainWindowFullScreenAcrossDisplaysChanged'  ，即本窗口的主窗口跨多块屏幕使用全屏模式显示的状态变化。 |
| callback | Callback&lt;boolean> | 是 | 回调函数。即本窗口的主窗口跨多块屏幕使用全屏模式显示的状态变化回调。true表示主窗口进入跨多块屏幕使用全屏模式显示状态，false表示主窗口退出  跨多块屏幕使用全屏模式显示状态。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows and subwindows are supported. |

**示例：**

```TypeScript
const callback = (mainWindowFullScreenAcrossDisplaysChanged: boolean) => {
  console.info(`main window across displays changed. Data: ${mainWindowFullScreenAcrossDisplaysChanged}`);
}
try {
  windowClass.on('mainWindowFullScreenAcrossDisplaysChanged', callback);
} catch (exception) {
  console.error(`Failed to register callback. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## on('noInteractionDetected')

```TypeScript
on(type: 'noInteractionDetected', timeout: number, callback: Callback<void>): void
```

开启本窗口在指定超时时间内无交互事件的监听，交互事件支持物理键盘输入事件和屏幕触控点击事件，不支持软键盘输入事件。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'noInteractionDetected' | 是 | 监听事件，固定为'noInteractionDetected'，即本窗口在指定超时时间内无交互的事件。 |
| timeout | number | 是 | 指定本窗口在多长时间内无交互即回调，单位为秒(s)。该参数仅支持整数输入，负数和小数为非法参数。 |
| callback | Callback&lt;void> | 是 | 回调函数。当本窗口在指定超时时间内无交互事件时的回调。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## on('screenshot')

```TypeScript
on(type: 'screenshot', callback: Callback<void>): void
```

开启截屏事件的监听。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'screenshot' | 是 | 监听事件，固定为'screenshot'，即截屏事件，对控制中心截屏、hdc命令截屏、整屏截屏接口生效。 |
| callback | Callback&lt;void> | 是 | 回调函数。发生截屏事件时的回调。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## on('screenshotAppEvent')

```TypeScript
on(type: 'screenshotAppEvent', callback: Callback<ScreenshotEventType>): void
```

开启屏幕截屏事件类型的监听。

**起始版本：** 20

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'screenshotAppEvent' | 是 | 监听事件，固定为'screenshotAppEvent'，即屏幕截屏的事件类型，对控制中心截屏、快捷键截屏以及滚动截屏生效。 |
| callback | Callback&lt;ScreenshotEventType> | 是 | 回调函数。返回触发的截屏事件类型。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## on('dialogTargetTouch')

```TypeScript
on(type: 'dialogTargetTouch', callback: Callback<void>): void
```

开启模态窗口所遮盖窗口的点击或触摸事件的监听，除模态窗口以外其他窗口调用此接口不生效。

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'dialogTargetTouch' | 是 | 监听事件，固定为'dialogTargetTouch'，即模态窗口所遮盖窗口的点击或触摸事件。 |
| callback | Callback&lt;void> | 是 | 回调函数。当点击或触摸事件发生在模态窗口所遮盖窗口的回调。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## on('windowEvent')

```TypeScript
on(type: 'windowEvent', callback: Callback<WindowEventType>): void
```

开启窗口生命周期变化的监听。

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowEvent' | 是 | 监听事件，固定为'windowEvent'，即窗口生命周期变化事件。 |
| callback | Callback&lt;WindowEventType> | 是 | 回调函数。返回当前的窗口生命周期状态。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

## on('windowStatusChange')

```TypeScript
on(type: 'windowStatusChange', callback: Callback<WindowStatusType>): void
```

开启窗口模式变化的监听，当窗口windowStatus发生变化时进行通知（此时窗口属性可能还没有更新，如果需要在收到windowStatus变化通知时能够立即获取到变化后的窗口大小、位置，建议使用 [on('windowStatusDidChange')](arkts-window-window-i.md#on) ）。 使用当前接口开启监听后，在调用maximize、recover方法时会收到多次回调，如需获取去重后的回调，可使用 [on('windowStatusDidChange')]window.Window.on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>) 。 > **说明：** > > 在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，应用的 > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#配置文件标签)设置小于14时，在窗口最大化状态（窗口铺满整个屏幕，2in1设备会有 > dock栏和状态栏，Tablet设备会有状态栏）时返回值对应为WindowStatusType::FULL_SCREEN。应用的 > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#配置文件标签)设置大于等于14时，在窗口最大化状态（窗口铺满整个屏幕，2in1设备会有 > dock栏和状态栏，Tablet设备会有状态栏）时返回值对应为WindowStatusType::MAXIMIZE。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowStatusChange' | 是 | 监听事件，固定为'windowStatusChange'，即窗口模式变化事件。 |
| callback | Callback&lt;WindowStatusType> | 是 | 回调函数。返回当前的窗口模式。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |

## on('windowStatusDidChange')

```TypeScript
on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>): void
```

开启窗口模式变化的监听，当窗口windowStatus发生变化后进行通知（此时窗口[Rect](arkts-window-rect-i.md#Rect)属性已经完成更新）。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowStatusDidChange' | 是 | 监听事件，固定为'windowStatusDidChange'，即窗口模式变化完成事件。 |
| callback | Callback&lt;WindowStatusType> | 是 | 回调函数。返回当前的窗口模式。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |

## on('subWindowClose')

```TypeScript
on(type: 'subWindowClose', callback: Callback<void>): void
```

开启子窗口关闭事件的监听。此监听仅在点击系统提供的右上角关闭按钮关闭子窗时触发，其余关闭方式不触发回调。 当重复注册窗口关闭事件的监听时，最后一次注册成功的监听事件生效。 该接口触发的窗口关闭事件监听回调函数是同步执行，子窗口的异步关闭事件监听参考 [on('windowWillClose')]window.Window.on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>) 方法。 如果存在 [on('windowWillClose')]window.Window.on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>) 监听事件，只响应 [on('windowWillClose')]window.Window.on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>) 接口。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'subWindowClose' | 是 | 监听事件，固定为'subWindowClose'，即子窗口关闭事件。 |
| callback | Callback&lt;void> | 是 | 回调函数。当点击子窗口右上角关闭按钮事件发生时的回调。该回调函数不返回任何参数。回调函数内部逻辑的返回值决定当前子窗是否继续关闭，如果返回boolean  类型的true表示不关闭子窗，返回false或者其他非boolean类型表示关闭子窗。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only subwindows are supported. |

## on('windowWillClose')

```TypeScript
on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>): void
```

开启主窗口或子窗口关闭事件的监听。此监听仅能通过系统提供的窗口标题栏关闭按键触发，其余关闭窗口的方式不触发回调。 该接口触发的回调函数是异步执行。子窗口的同步关闭事件监听参考 [on('subWindowClose')]window.Window.on(type: 'subWindowClose', callback: Callback<void>)方法。主窗口的同步关闭事件监听参考 [on('windowStageClose')](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#onwindowstageclose14)方法。

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowWillClose' | 是 | 监听事件，固定为'windowWillClose'，即窗口关闭事件。 |
| callback | Callback&lt;void, Promise&lt;boolean>> | 是 | 回调函数。当点击窗口系统提供的右上角关闭按钮事件发生时的回调。该回调函数不返回任何参数。回调函数内部逻辑需要有  Promise类型的返回值。在返回的Promise函数里，执行resolve(true) 方法表示不关闭当前窗口，执行resolve(false) 方法或者reject方法均表示关闭当前窗口。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

## on('windowHighlightChange')

```TypeScript
on(type: 'windowHighlightChange', callback: Callback<boolean>): void
```

开启窗口激活态变化事件的监听。

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowHighlightChange' | 是 | 监听事件，固定为'windowHighlightChange'，即窗口激活态变化事件。 |
| callback | Callback&lt;boolean> | 是 | 回调函数。当本窗口的激活态发生变化时的回调。回调函数返回boolean类型参数。当返回参数为true表示激活态；false表示非激活态。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## on('windowTitleButtonRectChange')

```TypeScript
on(type: 'windowTitleButtonRectChange', callback: Callback<TitleButtonRect>): void
```

开启窗口标题栏上的最小化、最大化、关闭按钮矩形区域变化的监听，对存在标题栏和三键区的窗口形态生效。如果使用Stage模型，该接口需要在 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)调用生效后使用。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowTitleButtonRectChange' | 是 | 监听事件，固定为'windowTitleButtonRectChange'，即标题栏上的最小化、最大化、关闭按钮矩形区域变化事件。 |
| callback | Callback&lt;TitleButtonRect> | 是 | 回调函数。返回当前标题栏上的最小化、最大化、关闭按钮矩形区域。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |

## on('windowRectChange')

```TypeScript
on(type: 'windowRectChange', callback: Callback<RectChangeOptions>): void
```

开启窗口矩形（窗口位置及窗口大小）变化的监听。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowRectChange' | 是 | 监听事件，固定为'windowRectChange'，即窗口矩形变化事件。 |
| callback | Callback&lt;RectChangeOptions> | 是 | 回调函数。返回当前窗口矩形变化值及变化原因。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## on('rectChangeInGlobalDisplay')

```TypeScript
on(type: 'rectChangeInGlobalDisplay', callback: Callback<RectChangeOptions>): void
```

开启[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)下窗口矩形（窗口位置及窗口大小）变化的监听事件。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'rectChangeInGlobalDisplay' | 是 | 监听事件，固定为'rectChangeInGlobalDisplay'，即全局坐标系下窗口矩形变化事件。 |
| callback | Callback&lt;RectChangeOptions> | 是 | 回调函数。返回当前窗口矩形变化值及变化原因。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## on('freeWindowModeChange')

```TypeScript
on(type: 'freeWindowModeChange', callback: Callback<boolean>): void
```

开启自由窗口模式变化事件的监听。

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'freeWindowModeChange' | 是 | 监听事件，固定为'freeWindowModeChange'，即自由窗口模式变化事件。 |
| callback | Callback&lt;boolean> | 是 | 回调函数。返回当前窗口是否在自由窗口模式，true表示是自由窗口模式，false表示非自由窗口模式。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |

## onAvoidAreaChange

```TypeScript
onAvoidAreaChange(callback: Callback<AvoidAreaOptions>): void
```

开启当前应用窗口系统避让区域变化的监听。 主窗口/子窗口： - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的自由悬浮窗口模式（即窗口模式为 [window.WindowStatusType.FLOATING](arkts-window-windowstatustype-e.md#WindowStatusType)）下触发回调时，仅存在固定态软键盘（ [AvoidAreaType](arkts-window-avoidareatype-e.md#AvoidAreaType)为TYPE_KEYBOARD）类型的避让区域。 - 主窗口在非自由窗口状态的自由悬浮窗口模式下触发回调时，仅存在系统栏（[AvoidAreaType](arkts-window-avoidareatype-e.md#AvoidAreaType)为TYPE_SYSTEM）类型的避让区域。 - 主窗口在其余场景下触发回调时，仅当在非自由悬浮窗口模式下或设备类型为Phone和Tablet，才能返回计算后的避让区域，否则直接返回空的避让区域。 - 子窗口在非自由窗口状态或非自由悬浮窗口模式下触发回调时，仅当子窗口的位置和大小与主窗口一致时，才能返回计算后的子窗口避让区域，否则直接返回空的避让区域。 全局悬浮窗、模态窗或系统窗口： - 仅在调用[setSystemAvoidAreaEnabled]window.Window.setSystemAvoidAreaEnabled方法使能后，触发回调时才能返回计算后的避让区域，否则直接返回空的避 让区域。 <!--RP7-->常见的触发避让区回调的场景如下：应用窗口在全屏模式、悬浮模式、分屏模式之间的切换；应用窗口旋转；可折叠设备在屏幕折叠状态发生变化；应用窗口在多设备之间的流转。<!--RP7End-->

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AvoidAreaOptions> | 是 | 回调函数。返回当前避让区以及避让区类型。 [since 12] |

## onDialogTargetTouch

```TypeScript
onDialogTargetTouch(callback: Callback<void>): void
```

Subscribes to click or touch events in a window covered by a modal window. This API takes effect only when it is called by a modal window.

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 | - Callback invoked when the click event occurs in the target window of the modal window mode. |

## onDisplayIdChange

```TypeScript
onDisplayIdChange(callback: Callback<long>): void
```

开启本窗口所处屏幕变化事件的监听。比如，当前窗口移动到其他屏幕时，可以从此接口监听到这个行为。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;long> | 是 | 回调函数。当本窗口所处屏幕发生变化后的回调。回调函数返回number类型参数，表示窗口所处屏幕的displayId。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |

## onFrameMetricsMeasured

```TypeScript
onFrameMetricsMeasured(callback: Callback<FrameMetrics>): void
```

开启窗口帧率指标变化事件的监听。该接口需要在 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)调用生效后使用。 应用注册帧率变化监听后，只有当客户端UI内容发生重绘时（如页面切换、和可响应组件交互、设置背景色和透明度等），才会触发注册的回调。但当同时使用该接口和 [postFrameCallback](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#postframecallback12)、 [postDelayedFrameCallback](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#postdelayedframecallback12) 、 [displaySync.on('frame')](../../apis-arkgraphics2d/arkts-apis/arkts-displaysync-displaysync-i.md#on) 中的任意一个时，即使无UI内容重绘，也可能触发回调。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;FrameMetrics> | 是 | 窗口帧率指标变化时的回调函数。详情见帧率指标  [FrameMetrics](arkts-window-framemetrics-i.md#FrameMetrics)。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## onFreeWindowModeChange

```TypeScript
onFreeWindowModeChange(callback: Callback<boolean>): void
```

free window mode change callback on.

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 是 | Callback used to return the result if the current device  is in free window mode. true - means in free window mode; false - means not in free window mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |

## onKeyboardDidHide

```TypeScript
onKeyboardDidHide(callback: Callback<KeyboardInfo>): void
```

Register the callback of keyboard did hide

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;KeyboardInfo> | 是 | Callback invoked when the keyboard hide animation is completed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function keyboardDidHide can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## onKeyboardDidShow

```TypeScript
onKeyboardDidShow(callback: Callback<KeyboardInfo>): void
```

Register the callback of keyboard did show

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;KeyboardInfo> | 是 | Callback invoked when the keyboard show animation is completed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function keyboardDidShow can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## onKeyboardHeightChange

```TypeScript
onKeyboardHeightChange(callback: Callback<int>): void
```

Register the callback of keyboard height change

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | 是 | Callback used to return the current keyboard height,  which is an integer, in px. |

## onKeyboardWillHide

```TypeScript
onKeyboardWillHide(callback: Callback<KeyboardInfo>): void
```

Register the callback of keyboard will hide

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;KeyboardInfo> | 是 | Callback invoked before the keyboard hide animation start. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function keyboardWillHide can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## onKeyboardWillShow

```TypeScript
onKeyboardWillShow(callback: Callback<KeyboardInfo>): void
```

Register the callback of keyboard will show

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;KeyboardInfo> | 是 | Callback invoked before the keyboard show animation start. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function keyboardWillShow can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## onMainWindowFullScreenAcrossDisplaysChanged

```TypeScript
onMainWindowFullScreenAcrossDisplaysChanged(callback: Callback<boolean>): void
```

监听本窗口的主窗口跨多块屏幕使用全屏模式显示的状态变化事件。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 是 | 回调函数。即本窗口的主窗口跨多块屏幕使用全屏模式显示的状态变化回调。true表示主窗口进入跨多块屏幕使用全屏模式显示状态，false表示主窗口退出  跨多块屏幕使用全屏模式显示状态。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A nonsystem application calls a system API. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows and subwindows are supported. |

## onNoInteractionDetected

```TypeScript
onNoInteractionDetected(timeout: long, callback: Callback<void>): void
```

Subscribes to non-interaction events in a window within the specified period. Interaction events include physical keyboard input events and screen touch/click events, but not soft keyboard input events.

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| timeout | long | 是 | The timeout(in seconds) of no interaction detection. |
| callback | Callback&lt;void> | 是 | Callback used to notify the window has no interaction for a long time. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## onOcclusionStateChanged

```TypeScript
onOcclusionStateChanged(callback: Callback<OcclusionState>): void
```

开启窗口可见性状态变化事件的监听。本接口返回的可见性与肉眼所见的可见性可能存在区别，如以下场景： - 非主窗口的阴影区域（可分别通过[setWindowShadowEnabled](arkts-window-window-i.md#setWindowShadowEnabled)和 [setWindowShadowRadius](arkts-window-window-i.md#setWindowShadowRadius)设置是否显示阴影以及对应的阴影半径）被挡住也算遮挡，此时肉眼所见虽是 完全可见，但实际返回的是部分可见。 - 上层窗口带有透明效果时（包括完全不透明之外的所有透明程度）不会遮挡下层窗口，此时下层窗口是可见的。 - 大多数处于动画效果下的窗口也不会遮挡住下层窗口，比如在手机设备上拖动悬浮窗时返回的下层窗口依然是可见的。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;OcclusionState> | 是 | 窗口可见性变化时的回调函数。详情见[可见性状态](arkts-window-occlusionstate-e.md#OcclusionState)  。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## onRectChangeInGlobalDisplay

```TypeScript
onRectChangeInGlobalDisplay(callback: Callback<RectChangeOptions>): void
```

开启[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)下窗口矩形（窗口位置及窗口大小）变化的监听事件。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;RectChangeOptions> | 是 | 回调函数。返回当前窗口矩形变化值及变化原因。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## onRotationChange

```TypeScript
onRotationChange(callback: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined>): void
```

Register the callback of rotation change

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | RotationChangeCallback&lt;RotationChangeInfo, RotationChangeResult \| undefined> | 是 | Register the callback function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## onScreenshot

```TypeScript
onScreenshot(callback: Callback<void>): void
```

开启截屏事件的监听。

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 | 回调函数。发生截屏事件时的回调。 |

## onScreenshotAppEvent

```TypeScript
onScreenshotAppEvent(callback: Callback<ScreenshotEventType>): void
```

开启屏幕截屏事件类型的监听。

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;ScreenshotEventType> | 是 | 回调函数。返回触发的截屏事件类型。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## onSubWindowClose

```TypeScript
onSubWindowClose(callback: Callback<void>): void
```

开启子窗口关闭事件的监听。此监听仅能通过系统提供的子窗口右上角关闭按键触发，其余关闭窗口的方式不触发回调。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 | 回调函数。当点击子窗口右上角关闭按钮事件发生时的回调。该回调函数不返回任何参数。回调函数内部逻辑的返回值决定当前子窗是否继续关闭，如果返回boolean类型的true表示不关闭子窗，返回false或者其他非boolean类型表示关闭子窗。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only subwindows are supported. |

## onSystemDensityChange

```TypeScript
onSystemDensityChange(callback: Callback<double>): void
```

开启本窗口所处屏幕的系统显示大小缩放系数变化事件的监听。比如，当调整窗口所处屏幕的显示大小缩放系数时，可以从此接口监听到这个行为。 在接口回调函数中，建议直接使用返回值进行vp和px的转换。例如，若返回值为density，计算px可使用vp * density = px。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;double> | 是 | 回调函数。当本窗口所处屏幕的系统显示大小缩放系数发生变化后的回调。回调函数返回number类型参数，表示当前窗口所处屏幕的系统显示大小缩放系数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |

## onTouchOutside

```TypeScript
onTouchOutside(callback: Callback<void>): void
```

Subscribes to the touch event outside this window.

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | 是 | Callback used to return the click event outside this window. |

## onUiExtensionSecureLimitChange

```TypeScript
onUiExtensionSecureLimitChange(callback: Callback<boolean>): void
```

UIExtension in window secure limit change callback on.

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 是 | Callback used to return the result whether the APP has uiextension secure limit. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function on('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## onWindowEvent

```TypeScript
onWindowEvent(callback: Callback<WindowEventType>): void
```

开启窗口生命周期变化的监听。

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;WindowEventType> | 是 | 回调函数。返回当前的窗口生命周期状态。 |

## onWindowHighlightChange

```TypeScript
onWindowHighlightChange(callback: Callback<boolean>): void
```

Register the callback of window highlight state change

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 是 | Callback used to return the highlight status of the window. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## onWindowRectChange

```TypeScript
onWindowRectChange(callback: Callback<RectChangeOptions>): void
```

开启窗口矩形（窗口位置及窗口大小）变化的监听。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;RectChangeOptions> | 是 | 回调函数。返回当前窗口矩形变化值及变化原因。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## onWindowSizeChange

```TypeScript
onWindowSizeChange(callback: Callback<Size>): void
```

开启窗口尺寸变化的监听。仅在主线程调用。

**起始版本：** 23

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Size> | 是 | 回调函数。返回当前的窗口尺寸。 |

## onWindowStatusChange

```TypeScript
onWindowStatusChange(callback: Callback<WindowStatusType>): void
```

开启窗口模式变化的监听，当窗口windowStatus发生变化时进行通知（此时窗口属性可能还没有更新，如果需要在收到windowStatus变化通知时能够立即获取到变化后的窗口大小、位置，建议使用 [on('windowStatusDidChange')](arkts-window-window-i.md#on) ）。 使用当前接口开启监听后，在调用maximize、recover方法时会收到多次回调，如需获取去重后的回调，可使用 [on('windowStatusDidChange')]window.Window.on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>) 。 > **说明：** > > 在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，应用的 > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#配置文件标签)设置小于14时，在窗口最大化状态（窗口铺满整个屏幕，2in1设备会有 > dock栏和状态栏，Tablet设备会有状态栏）时返回值对应为WindowStatusType::FULL_SCREEN。应用的 > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#配置文件标签)设置大于等于14时，在窗口最大化状态（窗口铺满整个屏幕，2in1设备会有 > dock栏和状态栏，Tablet设备会有状态栏）时返回值对应为WindowStatusType::MAXIMIZE。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;WindowStatusType> | 是 | 回调函数。返回当前的窗口模式。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

## onWindowStatusDidChange

```TypeScript
onWindowStatusDidChange(callback: Callback<WindowStatusType>): void
```

开启窗口模式变化的监听，当窗口windowStatus发生变化后进行通知（此时窗口[Rect](arkts-window-rect-i.md#Rect)属性已经完成更新）。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;WindowStatusType> | 是 | 回调函数。返回当前的窗口模式。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## onWindowTitleButtonRectChange

```TypeScript
onWindowTitleButtonRectChange(callback: Callback<TitleButtonRect>): void
```

Subscribes to the change event of the rectangle that holds the minimize, maximize, and close buttons on the title bar of the window.

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;TitleButtonRect> | 是 | Callback used to return the new rectangle. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |

## onWindowVisibilityChange

```TypeScript
onWindowVisibilityChange(callback: Callback<boolean>): void
```

开启本窗口可见状态变化事件的监听。本接口返回的可见性与肉眼所见的可见性可能存在区别，如以下场景： - 非主窗口的阴影区域（可分别通过[setWindowShadowEnabled](arkts-window-window-i.md#setWindowShadowEnabled)和 [setWindowShadowRadius](arkts-window-window-i.md#setWindowShadowRadius)设置是否显示阴影以及对应的阴影半径）被挡住也算遮挡，此时肉眼所见虽是 完全可见，但实际返回的是部分可见。 - 上层窗口带有透明效果时（包括完全不透明之外的所有透明程度）不会遮挡下层窗口，此时下层窗口是可见的。 - 大多数处于动画效果下的窗口也不会遮挡住下层窗口，比如在手机设备上拖动悬浮窗时返回的下层窗口依然是可见的。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 是 | 回调函数。当本窗口可见状态发生变化后的回调。回调函数返回boolean类型参数，当返回参数为true时表示窗口可见，否则表示窗口不可见。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## onWindowWillClose

```TypeScript
onWindowWillClose(callback: Callback<void, Promise<boolean>>): void
```

开启主窗口或子窗口关闭事件的监听。此监听仅能通过系统提供的窗口标题栏关闭按键触发，其余关闭窗口的方式不触发回调。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;void, Promise&lt;boolean>> | 是 | 回调函数。当点击子窗口右上角关闭按钮事件发生时的回调。该回调函数不返回任何参数。回调函数内部逻辑的返回值决定当前子窗是否继续关闭，如果返回boolean类型的true表示不关闭子窗，返回false或者其他非boolean类型表示关闭子窗。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

## opacity

```TypeScript
opacity(opacity: double): void
```

设置窗口不透明度。仅支持在[自定义系统窗口的显示与隐藏动画](docroot://windowmanager/system-window-stage-sys.md#自定义系统窗口的显示与隐藏动画)中使用。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| opacity | double | 是 | 不透明度。该参数为浮点数，取值范围为[0.0, 1.0]。0.0表示完全透明，1.0表示完全不透明。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

**示例：**

```TypeScript
try {
  windowClass.opacity(0.5);
} catch (exception) {
  console.error(`Failed to opacity. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## raiseAboveTarget

```TypeScript
raiseAboveTarget(windowId: int, callback: AsyncCallback<void>): void
```

将同一个主窗口下的子窗口抬升到目标子窗口之上。使用callback异步回调。 使用该接口需要确保要抬升的子窗口和目标子窗口都已创建完成，分别调用 [showWindow()](arkts-window-window-i.md#showWindow)并执行完毕。

**起始版本：** 10

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| windowId | int | 是 | 目标子窗口的id，通过[getWindowProperties](arkts-window-window-i.md#getWindowProperties)接  口获取到[properties](arkts-window-windowproperties-i.md#WindowProperties)后，再通过properties.id获取。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: Mandatory parameters are left unspecified. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |
| 1300009 | The parent window is invalid. |

**示例：**

```TypeScript
// EntryAbility.ets
import { window } from '@kit.ArkUI';
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  // ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    console.info('onWindowStageCreate');
    let windowClass: window.Window;
    // 创建子窗
    try {
      windowStage.createSubWindow("testSubWindow").then((data) => {
        if (data == null) {
          console.error("Failed to create the subWindow. Cause: The data is empty");
          return;
        }
        windowClass = data;
        windowClass.showWindow().then(() => {
          // windowClass的获取需放在targetWindow之上
          let targetWindow: window.Window = windowClass;
          let properties = targetWindow.getWindowProperties();
          let targetId = properties.id;
          windowClass.raiseAboveTarget(targetId, (err: BusinessError) => {
            if (err.code) {
              console.error(`Failed to raise the subWindow to target subWindow top. Cause code: ${err.code}, message: ${err.message}`);
              return;
            }
            console.info('Succeeded in raising the subWindow to target subWindow top.');
          });
        });
      });
    } catch (exception) {
      console.error(`Failed to create the subWindow. Cause code: ${exception.code}, message: ${exception.message}`);
    }
  }
}

```

## raiseAboveTarget

```TypeScript
raiseAboveTarget(windowId: int): Promise<void>
```

将同一个主窗下的子窗口提升到目标子窗口之上。使用Promise异步回调。 使用该接口需要确保要抬升的子窗口和目标子窗口都已创建完成，分别调用 [showWindow()](arkts-window-window-i.md#showWindow)并执行完毕。

**起始版本：** 10

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| windowId | int | 是 | 目标子窗口的id，通过[getWindowProperties](arkts-window-window-i.md#getWindowProperties)接  口获取到[properties](arkts-window-windowproperties-i.md#WindowProperties)后，再通过properties.id获取。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: Mandatory parameters are left unspecified. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |
| 1300009 | The parent window is invalid. |

**示例：**

```TypeScript
// EntryAbility.ets
import { window } from '@kit.ArkUI';
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  // ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    console.info('onWindowStageCreate');
    let windowClass: window.Window;
    // 创建子窗
    try {
      windowStage.createSubWindow("testSubWindow").then((data) => {
        if (data == null) {
          console.error("Failed to create the subWindow. Cause: The data is empty");
          return;
        }
        windowClass = data;
        windowClass.showWindow().then(() => {
          // windowClass的获取需放在targetWindow之上
          let targetWindow: window.Window = windowClass;
          let properties = targetWindow.getWindowProperties();
          let targetId = properties.id;
          windowClass.raiseAboveTarget(targetId).then(()=> {
            console.info('Succeeded in raising the subWindow to target subWindow top.');
          }).catch((err: BusinessError)=>{
            console.error(`Failed to raise the subWindow to target subWindow top. Cause code: ${err.code}, message: ${err.message}`);
          });
        });
      });
    } catch (exception) {
      console.error(`Failed to create the subWindow. Cause code: ${exception.code}, message: ${exception.message}`);
    }
  }
}

```

## raiseMainWindowAboveTarget

```TypeScript
raiseMainWindowAboveTarget(windowId: int): Promise<void>
```

将主窗口的层级调整至同应用下的另一个主窗口之上，子窗口的层级会跟随所属主窗口变动。使用Promise异步回调。 仅支持系统应用主窗口调用。 传入目标主窗口的id，调用窗口和目标窗口需满足：同应用进程、显示在同一物理屏、层级低于锁屏、非置顶主窗、非模态主窗且无模应用子窗。 - 应用主窗口或者它的子窗口如果是焦点窗口，此主窗口调用该接口降低层级后则自动失焦，由当前层级最高的应用窗口获焦。 - 应用主窗口调用该接口调整层级后超过当前焦点窗口，则被抬升主窗口及其子窗口中，层级最高的窗口自动获焦；应用主窗口调用该接口调整层级后未超过当前焦点窗口，则焦点不做转移。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| windowId | int | 是 | 目标主窗口的id，该参数为整数，通过  [getWindowProperties](arkts-window-window-i.md#getWindowProperties)接口获取到  [properties](arkts-window-windowproperties-i.md#WindowProperties)后，再通过properties.id获取。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |
| 1300016 | Parameter error. Possible cause:  1. Invalid parameter range. 2. Invalid parameter length. |

**示例：**

```TypeScript
// EntryAbility.ets
import { UIAbility, Want, StartOptions, AbilityConstant } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage): void {
    windowStage.loadContent('pages/Index', (err) => {
      if (err.code) {
        console.error(`Failed to load the content. Cause code: ${err.code}, message: ${err.message}.`);
        return;
      }
      console.info('Succeeded in loading the content.');
      try {
        let want: Want = {
          abilityName: "RaiseMainWindowAbility",
          bundleName: "com.example.myapplication"
        };
        let options: StartOptions = {
          windowMode: AbilityConstant.WindowMode.WINDOW_MODE_FLOATING
        };
        this.context.startAbility(want, options);
      } catch (err) {
        console.error(`Failed to start the ability. Cause code: ${err.code}, message: ${err.message}.`);
      }
      setTimeout(async () => {
        let mainWindow: window.Window | null | undefined = windowStage.getMainWindowSync();
        let targetId: number | null | undefined = AppStorage.get('higher_window_id');
        mainWindow.raiseMainWindowAboveTarget(targetId).then(() => {
          console.info('Succeeded in raising main window above target.');
        }).catch((err: BusinessError) => {
          console.error(`Failed to raise main window above target. Cause code: ${err.code}, message: ${err.message}.`)
        });
      }, 3000)
    });
  }
}


// 新建文件src/main/ets/raisemainwindowability/RaiseMainWindowAbility.ets
import { UIAbility } from '@kit.AbilityKit';

export default class RaiseMainWindowAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage): void {
    AppStorage.setOrCreate('higher_window_id', windowStage.getMainWindowSync().getWindowProperties().id);
    windowStage.loadContent('pages/Index', (err) => {
      if (err.code) {
        console.error(`Failed to load the content. Cause code: ${err.code}, message: ${err.message}.`);
        return;
      }
      console.info('Succeeded in loading the content.');
    });
  }
}


// module.json5
{
  "module": {
    "name": "entry",
    "type": "entry",
    "description": "$string:module_desc",
    "mainElement": "EntryAbility",
    "deviceTypes": [
      "phone",
      "tablet",
      "2in1"
    ],
    "deliveryWithInstall": true,
    "installationFree": false,
    "pages": "$profile:main_pages",
    "abilities": [
      {
        "name": "EntryAbility",
        "srcEntry": "./ets/entryability/EntryAbility.ets",
        "description": "$string:EntryAbility_desc",
        "icon": "$media:layered_image",
        "label": "$string:EntryAbility_label",
        "startWindowIcon": "$media:startIcon",
        "startWindowBackground": "$color:start_window_background",
        "exported": true,
        "skills": [
          {
            "entities": [
              "entity.system.home"
            ],
            "actions": [
              "action.system.home"
            ]
          }
        ]
      },
      {
        "name": "RaiseMainWindowAbility",
        "launchType": "multiton",
        "srcEntry": "./ets/entryability/EntryAbility.ets",
        "description": "$string:EntryAbility_desc",
        "icon": "$media:layered_image",
        "label": "$string:EntryAbility_label",
        "startWindowIcon": "$media:startIcon",
        "startWindowBackground": "$color:start_window_background",
        "exported": true,
        "skills": [
          {
            "entities": [
              "entity.system.home"
            ],
            "actions": [
              "action.system.home"
            ]
          }
        ]
      }
    ]
  }
}

```

## raiseToAppTop

```TypeScript
raiseToAppTop(callback: AsyncCallback<void>): void
```

提升应用子窗口到应用顶层。使用callback异步回调。 使用该接口需要先创建子窗口，并确保该子窗口调用[showWindow()](arkts-window-window-i.md#showWindow) 并执行完毕。

**起始版本：** 10

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |
| 1300009 | The parent window is invalid. |

**示例：**

```TypeScript
// EntryAbility.ets
import { window } from '@kit.ArkUI';
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  // ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    console.info('onWindowStageCreate');
    // 创建子窗
    windowStage.createSubWindow('testSubWindow').then((subWindow) => {
      if (subWindow == null) {
        console.error('Failed to create the subWindow. Cause: The data is empty');
        return;
      }
      subWindow.showWindow().then(() => {
        subWindow.raiseToAppTop((err: BusinessError) => {
          const errCode: number = err.code;
          if (errCode) {
            console.error(`Failed to raise the window to app top. Cause code: ${err.code}, message: ${err.message}`);
            return;
          }
          console.info('Succeeded in raising the window to app top.');
        });
      });
    });
  }
}

```

## raiseToAppTop

```TypeScript
raiseToAppTop(): Promise<void>
```

应用子窗口调用，提升应用子窗口到顶层，只在当前应用同一个父窗口下的相同类型子窗范围内生效，对于自定义了zLevel属性的子窗口，只在当前应用同一个父窗口下相同zLevel值的子窗范围内生效。使用Promise异步回调。 使用该接口需要先创建子窗口，并确保该子窗口调用[showWindow()]window.Window.showWindow(callback: AsyncCallback<void>)并执行完毕。

**起始版本：** 14

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |
| 1300009 | The parent window is invalid. |

## recover

```TypeScript
recover(): Promise<void>
```

将主窗口从全屏、最大化、分屏模式下还原为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING），并恢复到进入该模式之前的大小和位置，已经是自由悬浮窗口模式不可再还原。使用Promise 异步回调。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300001 | Repeated operation. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed;  2. Internal task error.  3. The window does not support floating mode. |

## recover

```TypeScript
recover(snapshotAnimationConfig: WindowSnapshotAnimationConfig): Promise<void>
```

Restores the main window from full-screen, maximized, or split-screen mode to a floating window, and resets its size and position to their previous values before full-screen, maximized, or split-screen mode was entered.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| snapshotAnimationConfig | WindowSnapshotAnimationConfig | 是 | 截图动画参数配置。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300001 | Repeated operation. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed;  2. Internal task error;  3. The window does not support floating mode. |
| 1300003 | This window manager service works abnormally. |
| 1300016 | Parameter error. Possible cause: Invalid parameter range. |

## requestFocus

```TypeScript
requestFocus(isFocused: boolean): Promise<void>
```

支持当前窗口主动请求获焦/失焦，使用Promise异步回调。调用成功即返回，该接口返回值不代表最终获焦/失焦生效结果。可使用 [on('windowEvent')](arkts-window-window-i.md#on) 监听窗口获焦/失焦状态。 获焦请求发送后，窗口获焦结果受到窗口可获焦属性及窗口可见状态的限制。获焦成功的窗口需满足以下约束：1.窗口支持获焦；2.窗口可见（窗口已显示，未销毁且未退至后台）。 失焦请求发送后，窗口无条件失焦。

**起始版本：** 13

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isFocused | boolean | 是 | 是否获取焦点，true表示请求获焦，false表示请求失焦。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed, non-system application uses system API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let isFocused: boolean = true;
let promise = windowClass.requestFocus(isFocused);
promise.then(() => {
  console.info('Succeeded in requesting focus.');
}).catch((err: BusinessError) => {
  console.error(`Failed to request focus. Cause code: ${err.code}, message: ${err.message}`);
});

```

## resetAspectRatio

```TypeScript
resetAspectRatio(callback: AsyncCallback<void>): void
```

取消设置窗口内容布局的比例，使用callback异步回调。 仅主窗可设置，调用后将清除持久化储存的比例信息。

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

## resetAspectRatio

```TypeScript
resetAspectRatio(): Promise<void>
```

取消设置窗口内容布局的比例，使用Promise异步回调。 仅主窗可设置，调用后将清除持久化储存的比例信息。

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

## resetSize

```TypeScript
resetSize(width: number, height: number): Promise<void>
```

基于窗口左上角顶点改变当前窗口大小，使用Promise异步回调。 应用主窗口与子窗口存在大小限制，默认宽度范围：[320, 1920]，默认高度范围：[240, 1920]，单位为vp。 应用主窗口与子窗口的最小宽度与最小高度可由产品端进行配置，配置后的最小宽度与最小高度以产品段配置值为准，具体尺寸限制范围可以通过 [getWindowLimits]window.Window.getWindowLimits接口进行查询。 系统窗口存在大小限制，宽度范围：(0, 1920]，高度范围：(0, 1920]，单位为vp。 设置的宽度与高度受到此限制约束，规则： 若所设置的窗口宽/高尺寸小于窗口最小宽/高限制值，则窗口最小宽/高限制值生效； 若所设置的窗口宽/高尺寸大于窗口最大宽/高限制值，则窗口最大宽/高限制值生效。 全屏模式窗口不支持该操作。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[resize()]window.Window.resize(width: int, height: int)替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.resize(width:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| width | number | 是 | 当前窗口的目标宽度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，负值为非法参数（抛出错误码  [401](docroot://reference/errorcode-universal.md#401-参数检查失败)）。 |
| height | number | 是 | 当前窗口的目标高度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，负值为非法参数（抛出错误码  [401](docroot://reference/errorcode-universal.md#401-参数检查失败)）。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## resetSize

```TypeScript
resetSize(width: number, height: number, callback: AsyncCallback<void>): void
```

基于窗口左上角顶点改变当前窗口大小，使用callback异步回调。 应用主窗口与子窗口存在大小限制，默认宽度范围：[320, 1920]，默认高度范围：[240, 1920]，单位为vp。 应用主窗口与子窗口的最小宽度与最小高度可由产品端进行配置，配置后的最小宽度与最小高度以产品段配置值为准，具体尺寸限制范围可以通过 [getWindowLimits]window.Window.getWindowLimits接口进行查询。 系统窗口存在大小限制，宽度范围：(0, 1920]，高度范围：(0, 1920]，单位为vp。 设置的宽度与高度受到此限制约束，规则： 若所设置的窗口宽/高尺寸小于窗口最小宽/高限制值，则窗口最小宽/高限制值生效； 若所设置的窗口宽/高尺寸大于窗口最大宽/高限制值，则窗口最大宽/高限制值生效。 全屏模式窗口不支持该操作。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [resize()]window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.resize(width:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| width | number | 是 | 当前窗口的目标宽度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，负值为非法参数（抛出错误码  [401](docroot://reference/errorcode-universal.md#401-参数检查失败)）。 |
| height | number | 是 | 当前窗口的目标高度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，负值为非法参数（抛出错误码  [401](docroot://reference/errorcode-universal.md#401-参数检查失败)）。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

## resize

```TypeScript
resize(width: int, height: int): Promise<void>
```

基于窗口左上角顶点改变当前窗口大小，使用Promise异步回调。 调用成功即返回，该接口返回后无法立即获取最终生效结果，如需立即获取，建议使用接口[resizeAsync()]window.Window.resizeAsync。 窗口存在大小限制[WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)，具体尺寸限制范围可以通过 [getWindowLimits]window.Window.getWindowLimits接口进行查询。 调用该接口设置的宽度与高度受到此限制约束，规则： 若所设置的窗口宽/高尺寸小于窗口最小宽/高限制值，则窗口最小宽/高限制值生效，系统窗口和全局悬浮窗设置最小值不受窗口最小宽/高限制值限制； 若所设置的窗口宽/高尺寸大于窗口最大宽/高限制值，则窗口最大宽/高限制值生效。 该接口仅在窗口为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，窗口模式可通过 [getWindowStatus()]window.Window.getWindowStatus获取）时调用生效，在其他窗口模式下调用返回1300002错误码。 > **说明：** > > - 主窗口处于自由悬浮窗口模式时，在非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下调用不报错不生效。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| width | int | 是 | 当前窗口的目标宽度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，  负值为非法参数（抛出错误码401）。 |
| height | int | 是 | 当前窗口的目标高度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，  负值为非法参数（抛出错误码401）。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed;  2. Internal task error;  3. Invalid window status type. Only supports windows in floating window mode. |
| 1300003 | This window manager service works abnormally. |

## resize

```TypeScript
resize(width: int, height: int, callback: AsyncCallback<void>): void
```

基于窗口左上角顶点改变当前窗口大小，使用callback异步回调。 调用成功即返回，该接口返回后无法立即获取最终生效结果，如需立即获取，建议使用接口[resizeAsync()]window.Window.resizeAsync。 窗口存在大小限制[WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)，具体尺寸限制范围可以通过 [getWindowLimits]window.Window.getWindowLimits接口进行查询。 调用该接口设置的宽度与高度受到此限制约束，规则： 若所设置的窗口宽/高尺寸小于窗口最小宽/高限制值，则窗口最小宽/高限制值生效，系统窗口和全局悬浮窗设置最小值不受窗口最小宽/高限制值限制； 若所设置的窗口宽/高尺寸大于窗口最大宽/高限制值，则窗口最大宽/高限制值生效。 该接口仅在窗口为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，窗口模式可通过 [getWindowStatus()]window.Window.getWindowStatus获取）时调用生效，在其他窗口模式下调用返回1300002错误码。 > **说明：** > > - 主窗口处于自由悬浮窗口模式时，在非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下调用不报错不生效。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| width | int | 是 | 当前窗口的目标宽度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，  负值为非法参数（抛出错误码401）。 |
| height | int | 是 | 当前窗口的目标高度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，  负值为非法参数（抛出错误码401）。 |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed;  2. Internal task error;  3. Invalid window status type. Only supports windows in floating window mode. |
| 1300003 | This window manager service works abnormally. |

## resizeAsync

```TypeScript
resizeAsync(width: int, height: int): Promise<void>
```

基于窗口左上角顶点改变当前窗口大小，使用Promise异步回调。 调用生效后返回，回调中可使用[getWindowProperties()]window.Window.getWindowProperties（见示例）立即获取最终生效结果。 窗口存在大小限制[WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)，具体尺寸限制范围可以通过 [getWindowLimits]window.Window.getWindowLimits接口进行查询。 调用该接口设置的宽度与高度受到此限制约束，规则： 若所设置的窗口宽/高尺寸小于窗口最小宽/高限制值，则窗口最小宽/高限制值生效，系统窗口和全局悬浮窗设置最小值不受窗口最小宽/高限制值限制； 若所设置的窗口宽/高尺寸大于窗口最大宽/高限制值，则窗口最大宽/高限制值生效。 该接口仅在窗口为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，窗口模式可通过 [getWindowStatus()]window.Window.getWindowStatus获取）时调用生效，否则抛出错误码1300010。 > **说明：** > > - 在非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，主窗口调用不生效。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| width | int | 是 | 当前窗口的目标宽度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，  负值为非法参数（抛出错误码401）。 |
| height | int | 是 | 当前窗口的目标高度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，  负值为非法参数（抛出错误码401）。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: Invalid parameter range. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed.  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300010 | The operation in the current window status is invalid.  Possible cause: The window status is not FLOATING. |

## restore

```TypeScript
restore(): Promise<void>
```

主窗口为最小化状态且UIAbility生命周期为onForeground时，将主窗口从最小化状态，恢复到前台显示，并恢复到进入最小化状态之前的大小和位置。主窗口为前台状态时，仅抬升主窗口层级。使用Promise异步回调。

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows are supported. |

## restoreMainWindow

```TypeScript
restoreMainWindow(wantParameters?: Record<string, Object>): Promise<void>
```

将当前窗口的主窗口恢复到前台显示，如果主窗口已处于前台，则会抬升主窗层级。此接口仅适用于类型为[TYPE_FLOAT](arkts-window-windowtype-e.md#WindowType)的窗口，并且需在窗口触发过 [DOWN]./@internal/component/ets/enums:TouchType事件后才能调用。使用Promise异步回调。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wantParameters | Record&lt;string, Object> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed.  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. Possible cause:  1. The window is not float window.  2. The window is not at foreground or has never been clicked.  3. The window cannot find main window. |
| 1300007 | Restore parent main window failed. Possible cause:  1. The main window is in PAUSED lifecycle state.  2. The main window is in background during recent. |

## rotate

```TypeScript
rotate(rotateOptions: RotateOptions): void
```

设置窗口旋转参数。仅支持在[自定义系统窗口的显示与隐藏动画](docroot://windowmanager/system-window-stage-sys.md#自定义系统窗口的显示与隐藏动画)中使用。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rotateOptions | RotateOptions | 是 | 旋转参数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

**示例：**

```TypeScript
let obj: window.RotateOptions = {
  x: 1.0,
  y: 1.0,
  z: 45.0,
  pivotX: 0.5,
  pivotY: 0.5
};
try {
  windowClass.rotate(obj);
} catch (exception) {
  console.error(`Failed to rotate. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## scale

```TypeScript
scale(scaleOptions: ScaleOptions): void
```

设置窗口缩放参数。仅支持在[自定义系统窗口的显示与隐藏动画](docroot://windowmanager/system-window-stage-sys.md#自定义系统窗口的显示与隐藏动画)中使用。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scaleOptions | ScaleOptions | 是 | 缩放参数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

**示例：**

```TypeScript
let obj: window.ScaleOptions = {
  x: 2.0,
  y: 1.0,
  pivotX: 0.5,
  pivotY: 0.5
};
try {
  windowClass.scale(obj);
} catch (exception) {
  console.error(`Failed to scale. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## setAspectRatio

```TypeScript
setAspectRatio(ratio: double, callback: AsyncCallback<void>): void
```

设置窗口内容布局（不含边框和标题栏等装饰）的比例，使用callback异步回调。 > **说明：** > > - 通过其他接口如[resize]window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)、 > [resizeAsync]window.Window.resizeAsync设置窗口大小时，不受ratio约束。 > > - 仅主窗可设置，且仅在自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING）下生效。此比例参数将持久化保存，关闭应用或重启设备后，切换到自由悬浮窗口模式时，设置的比例仍然生效。 > > - 当同一应用的某个主窗口调用此接口设置宽高比生效后，后续打开的主窗口均会沿用该宽高比。若需为单个主窗口单独设置宽高比，请使用 > [setContentAspectRatio]window.Window.setContentAspectRatio。

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ratio | double | 是 | 窗口内容布局（不含边框和标题栏等装饰）的宽高比。该参数为浮点数，受窗口最大最小尺寸限制，比例值下限为最小宽度/最大高度，上限为最大宽度/最小高度。窗口最大最小尺寸由  [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)和系统限制的交集决定，系统限制优先级高于  [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)。ratio的有效范围会随  [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)变化而变化。如果先设置了  [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)，后设置的ratio与其冲突，会返回错误码；如果先设置了ratio，后设置的  [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)与其冲突，窗口的宽高比可能会不跟随设置的宽高比（ratio）。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause:  Invalid parameter range. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows are supported. |

## setAspectRatio

```TypeScript
setAspectRatio(ratio: double): Promise<void>
```

设置窗口内容布局（不含边框和标题栏等装饰）的比例，使用Promise异步回调。 > **说明：** > > - 通过其他接口如[resize]window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)、 > [resizeAsync]window.Window.resizeAsync设置窗口大小时，不受ratio约束。 > > - 仅主窗可设置，且仅在自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING）下生效。此比例参数将持久化保存，关闭应用或重启设备后，切换到自由悬浮窗口模式时，设置的比例仍然生效。 > > - 当同一应用的某个主窗口调用此接口设置宽高比生效后，后续打开的主窗口均会沿用该宽高比。若需为单个主窗口单独设置宽高比，请使用 > [setContentAspectRatio]window.Window.setContentAspectRatio。

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ratio | double | 是 | 窗口内容布局（不含边框和标题栏等装饰）的宽高比。该参数为浮点数，受窗口最大最小尺寸限制，比例值下限为最小宽度/最大高度，上限为最大宽度/最小高度。窗口最大最小尺寸由  [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)和系统限制的交集决定，系统限制优先级高于  [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)。ratio的有效范围会随  [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)变化而变化。如果先设置了  [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)，后设置的ratio与其冲突，会返回错误码；如果先设置了ratio，后设置的  [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)与其冲突，窗口的宽高比可能会不跟随设置的宽高比（ratio）。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause:  Invalid parameter range. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows are supported. |

## setBackdropBlur

```TypeScript
setBackdropBlur(radius: double): void
```

设置窗口背景模糊。 窗口背景是指窗口覆盖的下层区域，与窗口大小相同。 需要通过[setWindowBackgroundColor](arkts-window-window-i.md#setWindowBackgroundColor)将窗口内容背景设置成透明，否则无法看到模糊效果。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| radius | double | 是 | 表示窗口背景模糊的半径值。该参数为浮点数，单位为px，取值范围为[0.0, +∞)，取值为0.0表示关闭窗口背景模糊。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

**示例：**

```TypeScript
try {
  windowClass.setWindowBackgroundColor('#00FFFFFF');
  windowClass.setBackdropBlur(4.0);
} catch (exception) {
  console.error(`Failed to set backdrop blur. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## setBackdropBlurStyle

```TypeScript
setBackdropBlurStyle(blurStyle: BlurStyle): void
```

设置窗口背景模糊类型。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blurStyle | BlurStyle | 是 | 表示窗口背景模糊类型。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |

**示例：**

```TypeScript
try {
  windowClass.setBackdropBlurStyle(window.BlurStyle.THIN);
} catch (exception) {
  console.error(`Failed to set backdrop blur style. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## setBackgroundColor

```TypeScript
setBackgroundColor(color: string): Promise<void>
```

设置窗口的背景色，使用Promise异步回调。Stage模型下，该接口需要在 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)调用生效后使用。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [setWindowBackgroundColor()]window.Window.setWindowBackgroundColor替代。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** window.Window.setWindowBackgroundColor

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | string | 是 | 需要设置的背景色，为十六进制RGB或ARGB颜色，不区分大小写，例如`'#00FF00'`或`'#FF00FF00'`。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## setBackgroundColor

```TypeScript
setBackgroundColor(color: string, callback: AsyncCallback<void>): void
```

设置窗口的背景色，使用callback异步回调。Stage模型下，该接口需要在 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)调用生效后使用。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [setWindowBackgroundColor()]window.Window.setWindowBackgroundColor替代。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** window.Window.setWindowBackgroundColor

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | string | 是 | 需要设置的背景色，为十六进制RGB或ARGB颜色，不区分大小写，例如`'#00FF00'`或`'#FF00FF00'`。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

## setBlur

```TypeScript
setBlur(radius: double): void
```

设置窗口模糊。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| radius | double | 是 | 表示窗口模糊的半径值。该参数为浮点数，单位为px，取值范围为[0, +∞)，取值为0.0时表示关闭窗口模糊。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

**示例：**

```TypeScript
try {
  windowClass.setBlur(4.0);
} catch (exception) {
  console.error(`Failed to set blur. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## setBrightness

```TypeScript
setBrightness(brightness: number): Promise<void>
```

允许应用窗口设置屏幕亮度值，使用Promise异步回调。 当前屏幕亮度规格：窗口设置屏幕亮度生效时，控制中心不可以调整系统屏幕亮度，窗口恢复默认系统亮度之后，控制中心可以调整系统屏幕亮度。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [setWindowBrightness()]window.Window.setWindowBrightness(brightness: double)替代。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** window.Window.setWindowBrightness(brightness:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| brightness | number | 是 | 屏幕亮度值。该参数为浮点数，取值范围为[0.0, 1.0]或-1.0。1.0表示最亮，-1.0表示恢复成设置窗口亮度前的系统控制中心亮度。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## setBrightness

```TypeScript
setBrightness(brightness: number, callback: AsyncCallback<void>): void
```

允许应用窗口设置屏幕亮度值，使用callback异步回调。 当前屏幕亮度规格：窗口设置屏幕亮度生效时，控制中心不可以调整系统屏幕亮度，窗口恢复默认系统亮度之后，控制中心可以调整系统屏幕亮度。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [setWindowBrightness()]window.Window.setWindowBrightness(brightness: double, callback: AsyncCallback<void>) > 替代。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** window.Window.setWindowBrightness(brightness:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| brightness | number | 是 | 屏幕亮度值。该参数为浮点数，取值范围为[0.0, 1.0]或-1.0。1.0表示最亮，-1.0表示恢复成设置窗口亮度前的系统控制中心亮度。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

## setColorSpace

```TypeScript
setColorSpace(colorSpace: ColorSpace): Promise<void>
```

设置当前窗口为广色域模式或默认色域模式，使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [setWindowColorSpace()]window.Window.setWindowColorSpace(colorSpace:ColorSpace)替代。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** window.Window.setWindowColorSpace(colorSpace:ColorSpace)

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| colorSpace | ColorSpace | 是 | 设置色域模式。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## setColorSpace

```TypeScript
setColorSpace(colorSpace: ColorSpace, callback: AsyncCallback<void>): void
```

设置当前窗口为广色域模式或默认色域模式，使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [setWindowColorSpace()]window.Window.setWindowColorSpace(colorSpace:ColorSpace, callback: AsyncCallback<void>) > 替代。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** window.Window.setWindowColorSpace(colorSpace:ColorSpace,

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| colorSpace | ColorSpace | 是 | 设置色域模式。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

## setContentAspectRatio

```TypeScript
setContentAspectRatio(ratio: double, isPersistent?: boolean, needUpdateRect?: boolean): Promise<void>
```

设置窗口内容布局（不含边框和标题栏等装饰）的比例，使用Promise异步回调。 > **说明：** > > - 根据相同的ratio参数调整窗口宽高时，窗口宽高会跟随窗口边框装饰尺寸或可见性变化而调整。 > > - 通过[setWindowDecorVisible]window.Window.setWindowDecorVisible将窗口标题栏设置为不可见时，窗口内容区域将占据原本标题栏的高度空间。 > > - 通过其他接口如[resize]window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)、 > [resizeAsync]window.Window.resizeAsync设置窗口大小时，不受ratio约束。 > > - 仅主窗可设置，且仅在自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING）下生效。

**起始版本：** 21

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ratio | double | 是 | 窗口内容布局（不含边框和标题栏等装饰）的宽高比。该参数为浮点数，受窗口最大最小尺寸限制，比例值下限为最小宽度/最大高度，上限为最大宽度/最小高度。窗口最大最小尺寸由  [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)和系统限制的交集决定，系统限制优先级高于  [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)。ratio的有效范围会随  [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)变化而变化。如果先设置了  [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)，后设置的ratio与其冲突，会返回错误码；如果先设置了ratio，后设置的  [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)与其冲突，窗口的宽高比可能会不跟随设置的宽高比（ratio）。 |
| isPersistent | boolean | 否 |  |
| needUpdateRect | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows are supported. |
| 1300016 | Parameter error. Possible cause:  1. Invalid parameter range.  2. Invalid parameter length. |

## setCornerRadius

```TypeScript
setCornerRadius(cornerRadius: double): void
```

设置窗口圆角半径。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cornerRadius | double | 是 | 表示窗口圆角的半径值。该参数为浮点数，单位为px，取值范围为[0.0, +∞)，取值为0.0时表示没有窗口圆角。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

**示例：**

```TypeScript
try {
  windowClass.setCornerRadius(4.0);
} catch (exception) {
  console.error(`Failed to set corner radius. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## setDecorButtonStyle

```TypeScript
setDecorButtonStyle(dectorStyle: DecorButtonStyle): void
```

设置装饰栏按钮样式，仅对主窗和子窗生效。如果使用Stage模型，该接口需要在 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)调用生效后使用。

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dectorStyle | DecorButtonStyle | 是 | 要设置的装饰栏按钮样式。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows and subwindows are supported. |

## setDefaultDensityEnabled

```TypeScript
setDefaultDensityEnabled(enabled: boolean): void
```

设置窗口是否使用所在屏幕的系统默认Density。Stage模型下，该接口需要在 [loadContent()](arkts-window-window-i.md#loadContent) 或[setUIContent()](arkts-window-window-i.md#setUIContent)调用生效 后使用。 不调用此接口进行设置，则表示不使用系统默认Density。 当存在同时使用该接口、 [setDefaultDensityEnabled(true)](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#setdefaultdensityenabled12) 和[setCustomDensity](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#setcustomdensity15)时，以最后调用的设置 效果为准。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | 设置是否使用系统默认Density。true表示使用系统默认Density，窗口不跟随系统显示大小变化重新布局；false表示不使用系统默认Density，窗口跟随系统  显示大小变化重新布局。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification  failed. A non-system application calls a system API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |

**示例：**

```TypeScript
try {
  windowClass.setDefaultDensityEnabled(true);
  console.info(`Succeeded in setting default density enabled`);
} catch (exception) {
  console.error(`Failed to set default density enabled. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## setDialogBackGestureEnabled

```TypeScript
setDialogBackGestureEnabled(enabled: boolean): Promise<void>
```

设置模态窗口是否响应手势返回事件，非模态窗口调用返回错误码。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | 是否响应手势返回事件。 true表示响应手势返回事件，触发onBackPress回调；false表示不响应手势返回事件，不触发onBackPress回调。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |

## setDimBehind

```TypeScript
setDimBehind(dimBehindValue: number, callback: AsyncCallback<void>): void
```

窗口叠加时，设备有子窗口的情况下设置靠后的窗口的暗度值，使用callback异步回调。

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dimBehindValue | number | 是 | 表示靠后的窗口的暗度值，取值范围为[0.0, 1.0]，取1.0时表示最暗。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

## setDimBehind

```TypeScript
setDimBehind(dimBehindValue: number): Promise<void>
```

窗口叠加时，设备有子窗口的情况下设置靠后的窗口的暗度值，使用Promise异步回调。

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dimBehindValue | number | 是 | 表示靠后的窗口的暗度值，取值范围为0-1，1表示最暗。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## setDragKeyFramePolicy

```TypeScript
setDragKeyFramePolicy(keyFramePolicy: KeyFramePolicy): Promise<KeyFramePolicy>
```

设置主窗口拖拽的关键帧策略，并使用Promise处理异步回调。 非主窗口调用时，返回1300004错误码。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyFramePolicy | KeyFramePolicy | 是 | 用于设置拖拽的关键帧策略。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;KeyFramePolicy> | Promise对象，返回实际生效的关键帧策略。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |
| 1300016 | Parameter error. Possible cause:  1. Invalid parameter range; 2. The parameter format is incorrect. |

## setExclusivelyHighlighted

```TypeScript
setExclusivelyHighlighted(exclusivelyHighlighted: boolean): Promise<void>
```

设置窗口独占激活态属性。独占激活态表示窗口获焦时，会导致当前父子窗口链中处于激活态的其他窗口失去激活态。使用Promise异步回调。 此接口对主窗、模态窗不生效。

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| exclusivelyHighlighted | boolean | 是 | Whether the window can become highlight exclusively when it gain focus.  The value  true means that the window can cause the window outside the current window link to  lose its highlight state, and false means the opposite. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |

## setFloatNavigationAvoidAreaEnabled

```TypeScript
setFloatNavigationAvoidAreaEnabled(enabled: boolean): Promise<void>
```

设置当前窗口是否支持获取三键导航类型的避让区域。未调用此接口设置前，系统默认不支持获取三键导航类型的避让区域。使用Promise异步回调。 调用该接口使能后才可以通过[getWindowAvoidArea()]window.Window.getWindowAvoidArea获取到 [TYPE_FLOAT_NAVIGATION](arkts-window-avoidareatype-e.md#AvoidAreaType)避让类型对应的避让区域或通过 [on('avoidAreaChange')]window.Window.on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>)监听 TYPE_FLOAT_NAVIGATION避让类型对应的避让区域的变化。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | 是否支持获取三键导航类型的避让区域。 true表示支持，false表示不支持。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Create js value failed. |
| 1300003 | This window manager service works abnormally. |

## setFocusable

```TypeScript
setFocusable(isFocusable: boolean): Promise<void>
```

设置使用点击或其他方式使该窗口获焦的场景时，该窗口是否支持窗口焦点从点击前的获焦窗口切换到该窗口，使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [setWindowFocusable()]window.Window.setWindowFocusable(isFocusable: boolean)替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.setWindowFocusable(isFocusable:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isFocusable | boolean | 是 | 点击时是否支持切换焦点窗口。true表示支持；false表示不支持。设置为false时，该窗口不支持绑定输入法和接收键盘事件，如需处理输入逻辑，建议参考  [不可获焦窗口中输入框与输入法交互指南](docroot://inputmethod/use-inputmethod-in-not-focusable-window.md)。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## setFocusable

```TypeScript
setFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void
```

设置使用点击或其他方式使该窗口获焦的场景时，该窗口是否支持窗口焦点从操作前的获焦窗口切换到该窗口，使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [setWindowFocusable()]window.Window.setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>) > 替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.setWindowFocusable(isFocusable:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isFocusable | boolean | 是 | 点击时是否支持切换焦点窗口。true表示支持；false表示不支持。设置为false时，该窗口不支持绑定输入法和接收键盘事件，如需处理输入逻辑，建议参考  [不可获焦窗口中输入框与输入法交互指南](docroot://inputmethod/use-inputmethod-in-not-focusable-window.md)。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

## setFollowParentMultiScreenPolicy

```TypeScript
setFollowParentMultiScreenPolicy(enabled: boolean): Promise<void>
```

设置子窗口在其父窗口处于拖拽移动或拖拽缩放过程时，该子窗口是否支持跨多个屏幕同时显示。使用Promise异步回调。 通过监听父窗口大小位置变化，对子窗口调用 [moveWindowTo()]window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)等接口实现子窗口跟随父窗口布局时 ，此时子窗口默认不支持跨多个屏幕同时显示。 对子窗口调用此接口后可以使能子窗口在跟随父窗口布局过程中跨多个屏幕同时显示。

**起始版本：** 17

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | 设置子窗口在其父窗口处于拖拽移动或拖拽缩放过程时，该子窗口是否支持跨多个屏幕同时显示。  true表示支持；false表示不支持。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported.Function setFollowParentMultiScreenPolicy can not work  correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |

## setFollowParentWindowLayoutEnabled

```TypeScript
setFollowParentWindowLayoutEnabled(enabled: boolean): Promise<void>
```

设置子窗或模态窗口（即WindowType为TYPE_DIALOG的窗口）的布局信息（position和size）是否跟随主窗，使用Promise异步回调。 1、只支持主窗的一级子窗或模态窗口使用该接口。 2、当子窗或模态窗口调用该接口后，立即使其布局信息与主窗完全一致并保持，除非传入false再次调用该接口，否则效果将持续。 3、当子窗或模态窗口调用该接口后，再调用moveTo、resize等修改布局信息的接口将不生效。 4、当子窗或模态窗口不再使用该功能后，不保证子窗或模态窗口的布局信息（position和size）为确定的值，需要应用重新进行设置。 该接口调用生效后， [setRelativePositionToParentWindowEnabled()]window.Window.setRelativePositionToParentWindowEnabled接口调用不生效 。

**起始版本：** 17

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | 设置是否启用跟随主窗布局。true表示启用，false表示不启用。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed.  2. Internal task error.  3. The subwindow level is more than one.  4. The subwindow is following its parent window's position. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only subwindows and dialog windows are supported. |

## setForbidSplitMove

```TypeScript
setForbidSplitMove(isForbidSplitMove: boolean, callback: AsyncCallback<void>): void
```

设置主窗口在分屏模式下是否被禁止移动，使用callback异步回调。

**起始版本：** 9

**废弃版本：** 26.0.0

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isForbidSplitMove | boolean | 是 | 窗口在分屏模式下是否被禁止移动。true表示禁止；false表示不禁止。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

**示例：**

```TypeScript
// EntryAbility.ets
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  // ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    console.info('onWindowStageCreate');
    let windowClass: window.Window | undefined = undefined;
    windowStage.getMainWindow((err: BusinessError, data) => {
      const errCode: number = err.code;
      if (errCode) {
        console.error(`Failed to obtain the main window. Cause code: ${err.code}, message: ${err.message}`);
        return;
      }
      windowClass = data;
      let isForbidSplitMove: boolean = true;
      try {
        windowClass.setForbidSplitMove(isForbidSplitMove, (err: BusinessError) => {
          const errCode: number = err.code;
          if (errCode) {
            console.error(`Failed to forbid window moving in split screen mode. Cause code: ${err.code}, message: ${err.message}`);
            return;
          }
          console.info('Succeeded in forbidding window moving in split screen mode.');
        });
      } catch (exception) {
        console.error(`Failed to forbid window moving in split screen mode. Cause code: ${exception.code}, message: ${exception.message}`);
      }
    });
  }
}

```

## setForbidSplitMove

```TypeScript
setForbidSplitMove(isForbidSplitMove: boolean): Promise<void>
```

设置主窗口在分屏模式下是否被禁止移动，使用Promise异步回调。

**起始版本：** 9

**废弃版本：** 26.0.0

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isForbidSplitMove | boolean | 是 | 窗口在分屏模式下是否被禁止移动。true表示禁止；false表示不禁止。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

**示例：**

```TypeScript
// EntryAbility.ets
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  // ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    console.info('onWindowStageCreate');
    let windowClass: window.Window | undefined = undefined;
    windowStage.getMainWindow((err: BusinessError, data) => {
      const errCode: number = err.code;
      if (errCode) {
        console.error(`Failed to obtain the main window. Cause code: ${err.code}, message: ${err.message}`);
        return;
      }
      windowClass = data;
      let isForbidSplitMove: boolean = true;
      try {
        let promise = windowClass.setForbidSplitMove(isForbidSplitMove);
        promise.then(() => {
          console.info('Succeeded in forbidding window moving in split screen mode.');
        }).catch((err: BusinessError) => {
          console.error(`Failed to forbid window moving in split screen mode. Cause code: ${err.code}, message: ${err.message}`);
        });
      } catch (exception) {
        console.error(`Failed to forbid window moving in split screen mode. Cause code: ${exception.code}, message: ${exception.message}`);
      }
    });
  }
}

```

## setFullScreen

```TypeScript
setFullScreen(isFullScreen: boolean, callback: AsyncCallback<void>): void
```

设置主窗口或子窗口的布局是否为全屏布局，使用callback异步回调。 全屏布局生效时，布局不避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件可能产生与其重叠的情况。 非全屏布局生效时，布局避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件不会与其重叠。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议联合使用 > [setWindowSystemBarEnable()]window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>) > 和[setWindowLayoutFullScreen()]window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)替代实现全 > 屏。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** window.Window.setWindowSystemBarEnable(names:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isFullScreen | boolean | 是 | 是否设为全屏布局（该全屏布局影响状态栏、三键导航栏显示）。true表示全屏；false表示非全屏。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

## setFullScreen

```TypeScript
setFullScreen(isFullScreen: boolean): Promise<void>
```

设置主窗口或子窗口的布局是否为全屏布局，使用Promise异步回调。 全屏布局生效时，布局不避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件可能产生与其重叠的情况。 非全屏布局生效时，布局避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件不会与其重叠。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议联合使用 > [setWindowSystemBarEnable()]window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>) > 和[setWindowLayoutFullScreen()]window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)替代实现全 > 屏。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** window.Window.setWindowSystemBarEnable(names:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isFullScreen | boolean | 是 | 是否设为全屏布局（该全屏布局影响状态栏、三键导航栏显示）。true表示全屏；false表示非全屏。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## setGestureBackEnabled

```TypeScript
setGestureBackEnabled(enabled: boolean): Promise<void>
```

设置当前窗口是否启用手势侧滑返回功能，仅主窗可以调用成功，其他类型的窗口调用返回1300004错误码。 开启此功能后，仅当窗口处于全屏模式且位于前台获焦状态下才会生效。 禁用此功能后，当前应用会禁用手势热区，侧滑返回功能失效；切换到其他应用或者回到桌面后，手势热区恢复，侧滑返回功能正常。

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | true时开启返回手势功能，false时禁用返回手势功能。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows are supported. |

## setHandwritingFlag

```TypeScript
setHandwritingFlag(enable: boolean): Promise<void>
```

为当前窗口添加或移除手写标志，添加该标志后窗口只响应手写笔事件，不响应触屏事件。使用Promise异步回调。

**起始版本：** 12

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 是否对窗口添加标志位。true表示添加，false表示移除。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let enable = true;
  let promise = windowClass.setHandwritingFlag(enable);
  promise.then(() => {
    console.info('Succeeded in setting handwriting flag of window.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to set handwriting flag of window. Cause code: ${err.code}, message: ${err.message}`);
  });
} catch (exception) {
  console.error(`Failed to set handwriting flag of window. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## setImmersiveModeEnabledState

```TypeScript
setImmersiveModeEnabledState(enabled: boolean): void
```

设置当前窗口是否开启沉浸式布局，该调用不会改变窗口模式和窗口大小。仅主窗口和子窗口可调用。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | 是否开启沉浸式布局。 true表示开启，false表示关闭。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally.  Possible cause: Internal IPC error. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows and subwindows are supported. |

## setKeepScreenOn

```TypeScript
setKeepScreenOn(isKeepScreenOn: boolean): Promise<void>
```

设置屏幕是否为常亮状态，使用Promise异步回调。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [setWindowKeepScreenOn()]window.Window.setWindowKeepScreenOn(isKeepScreenOn: boolean)替代。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** window.Window.setWindowKeepScreenOn(isKeepScreenOn:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isKeepScreenOn | boolean | 是 | 设置屏幕是否为常亮状态。true表示常亮；false表示不常亮。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## setKeepScreenOn

```TypeScript
setKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void
```

设置屏幕是否为常亮状态，使用callback异步回调。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [setWindowKeepScreenOn()]window.Window.setWindowKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>) > 替代。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** window.Window.setWindowKeepScreenOn(isKeepScreenOn:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isKeepScreenOn | boolean | 是 | 设置屏幕是否为常亮状态。true表示常亮；false表示不常亮。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

## setLayoutFullScreen

```TypeScript
setLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void
```

设置主窗口或子窗口的布局是否为沉浸式布局，使用callback异步回调。 沉浸式布局生效时，布局不避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件可能产生与其重叠的情况。 非沉浸式布局生效时，布局避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件不会与其重叠。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [setWindowLayoutFullScreen()]window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.setWindowLayoutFullScreen(isLayoutFullScreen:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isLayoutFullScreen | boolean | 是 | 窗口的布局是否为沉浸式布局（该沉浸式布局不影响状态栏、三键导航栏显示）。true表示沉浸式布局；  false表示非沉浸式布局。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

## setLayoutFullScreen

```TypeScript
setLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>
```

设置主窗口或子窗口的布局是否为沉浸式布局，使用Promise异步回调。 沉浸式布局生效时，布局不避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件可能产生与其重叠的情况。 非沉浸式布局生效时，布局避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件不会与其重叠。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [setWindowLayoutFullScreen()]window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.setWindowLayoutFullScreen(isLayoutFullScreen:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isLayoutFullScreen | boolean | 是 | 窗口的布局是否为沉浸式布局（该沉浸式布局不影响状态栏、三键导航栏显示）。true表示沉浸式布局；  false表示非沉浸式布局。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## setMainWindowRaiseByClickEnabled

```TypeScript
setMainWindowRaiseByClickEnabled(enable: boolean): Promise<void>
```

禁止/使能主窗口点击抬升功能。使用Promise异步回调。 点击主窗口时，默认会抬升主窗口及其子窗口。调用此接口禁止主窗口点击抬升后（即传入false），点击主窗口时不会将其及子窗口进行抬升，保持原有状态不变；点击子窗口时，主窗口会连同子窗口一起被抬升。

**起始版本：** 23

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 设置主窗口点击抬升功能是否使能，true表示使能，false表示禁止。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |

**示例：**

```TypeScript
// EntryAbility.ets
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    windowStage.getMainWindow().then((window: window.Window) => {
      // 加载主窗口对应的页面
      windowStage.loadContent('pages/Index', (err) => {
        if (err.code) {
          console.error(`Failed to load the content. Cause code: ${err.code}, message: ${err.message}`);
          return;
        }
        console.info('Succeeded in loading the content.');
        try {
          let raiseEnabled: boolean = false;
          let promise = window.setMainWindowRaiseByClickEnabled(raiseEnabled);
          promise.then(() => {
            console.info('Succeeded in disabling the raise-by-click function.');
          })
        } catch(err) {
          console.error(`Failed to disable the raise-by-click function. Cause code: ${err.code}, message: ${err.message}`);
        };
      });
    });
  }
}

```

## setOutsideTouchable

```TypeScript
setOutsideTouchable(touchable: boolean): Promise<void>
```

设置是否允许可点击子窗口之外的区域，使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。 > > 从API version 9开始，系统默认允许点击子窗口之外的区域，此接口不再支持使用，也不再提供替代接口。

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| touchable | boolean | 是 | 设置是否可点击。true表示可点击；false表示不可点击。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## setOutsideTouchable

```TypeScript
setOutsideTouchable(touchable: boolean, callback: AsyncCallback<void>): void
```

设置是否允许可点击子窗口之外的区域，使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。 > > 从API version 9开始，系统默认允许点击子窗口之外的区域，此接口不再支持使用，也不再提供替代接口。

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| touchable | boolean | 是 | 设置是否可点击。true表示可点击；false表示不可点击。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

## setParentWindow

```TypeScript
setParentWindow(windowId: int): Promise<void>
```

更改子窗口的父窗口，该父窗口仅支持同进程下的主窗口、子窗口或悬浮窗，使用Promise异步回调。 如果该子窗口处于获焦状态，且新的父窗口处于前台，则会抬升父窗口的层级。 如果该子窗口处于获焦状态，且新的父窗口的子窗口存在层级更高的模态子窗口，则焦点会转移给该模态子窗口。

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| windowId | int | 是 | 父窗口id，该参数应为整数。推荐使用[getWindowProperties()]window.Window.getWindowProperties方法获取父  窗口id属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. Possible cause:  Invalid window type. Only subwindows are supported. |
| 1300009 | The parent window is invalid. Possible cause:  The parent window does not exist or has been destroyed. |

## setPreferredOrientation

```TypeScript
setPreferredOrientation(orientation: Orientation): Promise<void>
```

设置主窗口的显示方向属性，使用Promise异步回调。非主窗口调用后不生效不报错。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| orientation | Orientation | 是 | 窗口显示方向的属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: Failed to convert parameter to Orientation. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed;  2. Internal task error. |

## setPreferredOrientation

```TypeScript
setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>): void
```

设置主窗口的显示方向属性，使用callback异步回调。相关横竖屏开发实践查询 [横竖屏切换](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-landscape-and-portrait-development)。非主窗口 调用后不生效不报错。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| orientation | Orientation | 是 | 窗口显示方向的属性。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。该回调函数返回调用结果是否成功，非应用旋转动效结束。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: Failed to convert parameter to Orientation. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed;  2. Internal task error. |

## setPreferredOrientationWithResult

```TypeScript
setPreferredOrientationWithResult(orientation: Orientation): Promise<OrientationResult>
```

设置主窗口的显示方向属性，通过Promise异步返回显示方向的执行结果。非主窗口调用后不生效，OrientationResult返回window. [OrientationExecutionResult](arkts-window-orientationexecutionresult-e.md#OrientationExecutionResult).ORIENTATION_IGNORED。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| orientation | Orientation | 是 | 窗口显示方向的属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;OrientationResult> | Promise对象。设置窗口显示方向的执行结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |

## setPrivacyMode

```TypeScript
setPrivacyMode(isPrivacyMode: boolean): Promise<void>
```

设置窗口是否为隐私模式，使用Promise异步回调。设置为隐私模式的窗口，窗口内容将无法被截屏或录屏。此接口可用于禁止截屏/录屏的场景。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [setWindowPrivacyMode()]window.Window.setWindowPrivacyMode(isPrivacyMode: boolean)替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.setWindowPrivacyMode(isPrivacyMode:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isPrivacyMode | boolean | 是 | 窗口是否为隐私模式。true表示模式开启；false表示模式关闭。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## setPrivacyMode

```TypeScript
setPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void
```

设置窗口是否为隐私模式，使用callback异步回调。设置为隐私模式的窗口，窗口内容将无法被截屏或录屏。此接口可用于禁止截屏/录屏的场景。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [setWindowPrivacyMode()]window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>) > 替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.setWindowPrivacyMode(isPrivacyMode:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isPrivacyMode | boolean | 是 | 窗口是否为隐私模式。true表示模式开启；false表示模式关闭。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

## setRaiseByClickEnabled

```TypeScript
setRaiseByClickEnabled(enable: boolean, callback: AsyncCallback<void>): void
```

禁止/使能子窗口点击抬升功能。使用callback异步回调。 通常来说，点击一个子窗口，会将该子窗口显示到最上方，如果设置为false，那么点击子窗口的时候，不会将该子窗口显示到最上方，而是保持不变。 使用该接口需要先创建子窗口，并确保该子窗口调用[showWindow()](arkts-window-window-i.md#showWindow) 并执行完毕。

**起始版本：** 10

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 设置子窗口点击抬升功能是否使能，true表示使能，false表示禁止。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |
| 1300009 | The parent window is invalid. |

**示例：**

```TypeScript
// EntryAbility.ets
import { window } from '@kit.ArkUI';
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  // ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    console.info('onWindowStageCreate');
    // 创建子窗
    windowStage.createSubWindow("testSubWindow").then((subWindow) => {
      if (subWindow == null) {
        console.error('Failed to create the subWindow. Cause: The data is empty');
        return;
      }
      subWindow.showWindow().then(() => {
        try {
          let enabled = false;
          subWindow.setRaiseByClickEnabled(enabled, (err) => {
          if (err.code) {
            console.error(`Failed to disable the raise-by-click function. Cause code: ${err.code}, message: ${err.message}`);
            return;
          }
          console.info('Succeeded in disabling the raise-by-click function.');
          });
        } catch (err) {
          console.error(`Failed to disable the raise-by-click function. Cause code: ${err.code}, message: ${err.message}`);
        }
      });
    });
  }
}

```

## setRaiseByClickEnabled

```TypeScript
setRaiseByClickEnabled(enable: boolean): Promise<void>
```

禁止/使能子窗点击抬升功能。使用Promise异步回调。 通常来说，点击一个子窗口，会将该子窗口显示抬升到应用内同一个父窗口下同类型子窗口的最上方，如果设置为false，那么点击子窗口的时候，不会将该子窗口进行抬升，而是保持不变。 使用该接口需要先创建子窗口，并确保该子窗口调用[showWindow()]window.Window.showWindow(callback: AsyncCallback<void>)并执行完毕。

**起始版本：** 14

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 设置子窗口点击抬升功能是否使能，true表示使能，false表示禁止。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |
| 1300009 | The parent window is invalid. |

## setReceiveDragEventEnabled

```TypeScript
setReceiveDragEventEnabled(enabled: boolean): Promise<void>
```

设置当前窗口是否能接收[拖拽事件]./@internal/component/ets/common:DragEvent，使用Promise异步回调。 默认场景下为true，能够接收拖拽事件。 当enable为false，当前窗口不能接收拖拽事件。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | 窗口是否能接收拖拽事件。true表示能够接收拖拽事件；false表示不能接收拖拽事件。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function can not work because the current device does  not support this ability. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally.  Possible cause: Internal IPC error |

## setRelativePositionToParentWindowEnabled

```TypeScript
setRelativePositionToParentWindowEnabled(enabled: boolean, anchor?: WindowAnchor,
        offsetX?: int, offsetY?: int): Promise<void>
```

用于设置一级子窗是否支持与主窗保持相对位置不变。使用Promise异步回调。 该相对位置通过一级子窗与主窗之间锚点的偏移量表示，子窗和主窗使用的窗口锚点相同。 1. 只支持一级子窗调用该接口，子窗需处于自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING）。 2. 当子窗调用该接口后，立即使其显示位置跟随主窗并保持相对位置不变，除非传入false再次调用该接口，否则效果将持续。 3. 当子窗调用该接口后，再调用[moveWindowTo()]window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)、[maximize()]window.Window.maximize(presentation?: MaximizePresentation)修改窗口位置或大小的接口将不生效。 该接口调用生效后，[setFollowParentWindowLayoutEnabled()]window.Window.setFollowParentWindowLayoutEnabled接口调用不生效。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | 一级子窗是否支持与主窗保持相对位置不变。true表示支持；false表示不支持。 |
| anchor | WindowAnchor | 否 |  |
| offsetX | int | 否 |  |
| offsetY | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function setRelativePositionToParentWindowEnabled can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only subwindows are supported. |

## setResizeByDragEnabled

```TypeScript
setResizeByDragEnabled(enable: boolean, callback: AsyncCallback<void>): void
```

禁止/使能通过拖拽方式缩放主窗口或启用装饰的子窗口的功能。使用callback异步回调。

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 设置窗口是否使能通过拖拽进行缩放，true表示使能，false表示禁止。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## setResizeByDragEnabled

```TypeScript
setResizeByDragEnabled(enable: boolean): Promise<void>
```

禁止/使能通过拖拽方式缩放主窗口或启用装饰的子窗口的功能。使用Promise异步回调。

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 设置窗口是否使能通过拖拽进行缩放，true表示使能，false表示禁止。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## setRotationLocked

```TypeScript
setRotationLocked(locked: boolean): Promise<void>
```

仅支持[系统窗口](docroot://windowmanager/window-terminology.md#系统窗口)设置旋转锁定，锁定后系统窗口显示方向不变，未锁定时系统窗口显示方向受主窗口显示方向、旋转锁定按钮、 sensor旋转影响。非系统窗口调用返回1300029错误码。使用Promise异步回调。 > **说明：** > > - 如果在锁定期间主窗口通过 > [setPreferredOrientation()](arkts-window-window-i.md#setPreferredOrientation) > 设置显示方向属性，则解除旋转锁定后该窗口在前台还原最后一次的方向请求。 > > - 如果在锁定期间系统窗口通过 > [setPreferredOrientation()](arkts-window-window-i.md#setPreferredOrientation) > 设置显示方向属性，则解除旋转锁定后该窗口在前台且层级最高时还原最后一次的方向请求。低层级窗口通过setRotationLocked设置旋转锁定不会影响高层级系统窗口调用 > [setPreferredOrientation()](arkts-window-window-i.md#setPreferredOrientation) > 设置显示方向。 > > - 如果在锁定期间sensor方向发生了变化，则解除旋转锁定后还原到最后一次的sensor方向。 > > - 如果在锁定期间应用调用 > [setOrientation()](arkts-screen-screen-i-sys.md#setOrientation) > 设置屏幕方向，忽略该次屏幕方向设置。 > > - 解除锁定时，根据主窗口的显示方向属性 > [setPreferredOrientation()](arkts-window-window-i.md#setPreferredOrientation) > 、sensor方向等决定应用显示方向，具体见[窗口旋转简介](docroot://windowmanager/window-rotation.md#窗口旋转简介)。 > > - 不影响应用[module.json5配置文件中的abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签) > orientation属性设置的启动方向。

**起始版本：** 22

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| locked | boolean | 是 | 设置是否锁定旋转，true表示锁定旋转，false表示解除锁定。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Function setRotationLocked can not work correctly due  to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300029 | This window type is invalid. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let locked: boolean = true;
let promise = windowClass.setRotationLocked(locked);
promise.then(() => {
  console.info('set rotation locked success.');
}).catch((err: BusinessError) => {
  console.error(`Failed to set rotation locked. Cause code: ${err.code}, message: ${err.message}`);
});

```

## setSeparationTouchEnabled

```TypeScript
setSeparationTouchEnabled(enabled: boolean): Promise<void>
```

设置当前窗口是否支持事件分离状态，使用Promise异步回调。默认场景下为true，支持事件分离状态。 当enable为true，支持事件分离状态下： - 所有手指点击产生的事件均会发送给其手指命中的窗口。 当enable为false，不支持事件分离状态下： - 当第一根手指点击持续命中该窗口未抬起时，后续其他手指无论是否点击命中该窗口，其产生的事件均会分发给该窗口。 - 当第一根手指点击未保持持续命中该窗口时，后续其他手指即使点击命中该窗口，其产生的事件也不会分发给该窗口，该事件会被系统丢弃。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | 窗口是否支持事件分离状态。true表示支持；false表示不支持。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function can not work because the current device does  not support this ability. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally.  Possible cause: Internal IPC error |

## setShadow

```TypeScript
setShadow(radius: double, color?: string, offsetX?: double, offsetY?: double): void
```

设置窗口边缘阴影。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| radius | double | 是 | 表示窗口边缘阴影的模糊半径。该参数为浮点数，单位为px，取值范围为[0.0, +∞)，取值为0.0时表示关闭窗口边缘阴影。 |
| color | string | 否 | 表示窗口边缘阴影的颜色，为十六进制RGB或ARGB颜色，不区分大小写，例如`#00FF00`或`#FF00FF00`，默认值为'#000000'。 |
| offsetX | double | 否 | 表示窗口边缘阴影的X轴的偏移量。该参数为浮点数，单位为px，默认值为0.0。 |
| offsetY | double | 否 | 表示窗口边缘阴影的Y轴的偏移量。该参数为浮点数，单位为px，默认值为0.0。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

**示例：**

```TypeScript
try {
  windowClass.setShadow(4.0, '#FF00FF00', 2, 3);
} catch (exception) {
  console.error(`Failed to set shadow. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## setSingleFrameComposerEnabled

```TypeScript
setSingleFrameComposerEnabled(enable: boolean): Promise<void>
```

禁止/使能单帧合成渲染节点的功能。使用Promise异步回调。 单帧合成渲染节点的功能主要用于跟手性要求较高的场景，使能该功能之后可以降低渲染节点的上屏延时。通过setSingleFrameComposerEnabled接口，如果enable设置为true，则使能单帧合成渲染节点的功能，否 则禁止单帧合成渲染节点的功能。

**起始版本：** 11

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 设置单帧合成渲染节点的功能是否使能，true表示使能，false表示禁止。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let enable = true;
try {
  let promise = windowClass.setSingleFrameComposerEnabled(enable);
  promise.then(()=> {
      console.info('Succeeded in enabling the single-frame-composer function.');
  }).catch((err: BusinessError)=>{
      console.error(`Failed to enable the single-frame-composer function. code:${err.code}, message:${err.message}.`);
  });
} catch (exception) {
  console.error(`Failed to enable the single-frame-composer function. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## setSnapshotSkip

```TypeScript
setSnapshotSkip(isSkip: boolean): void
```

截屏、录屏或投屏是否忽略当前窗口。此接口一般用于禁止截屏、录屏或投屏的场景。 若要实现窗口始终在前台忽略截屏、录屏或投屏，在窗口从后台回到前台时，需要通过 [on('windowEvent')](arkts-window-window-i.md#on) 监听窗口生命周期变化，在后台状态时设置为false，而在前台状态时设置为true。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isSkip | boolean | 是 | 截屏、录屏或投屏是否忽略当前窗口，默认为false。 true表示忽略当前窗口，false表示不忽略当前窗口。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal. |

**示例：**

```TypeScript
let isSkip: boolean = true;
try {
  windowClass.setSnapshotSkip(isSkip);
} catch (exception) {
  console.error(`Failed to Skip. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## setSpecificSystemBarEnabled

```TypeScript
setSpecificSystemBarEnabled(name: SpecificSystemBar, enable: boolean, enableAnimation?: boolean): Promise<void>
```

设置主窗口状态栏、<!--RP15-->三键导航栏<!--RP15End-->的显示或隐藏，使用Promise异步回调。 调用生效后返回并不表示状态栏、<!--RP15-->三键导航栏<!--RP15End-->的显示或隐藏已完成。子窗口调用后不生效。主窗口在非全屏/最大化模式（悬浮窗、分屏等场景）下配置不生效，进入全屏/最大化模式后配置生效。

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | SpecificSystemBar | 是 | the set of system bar |
| enable | boolean | 是 | Show specific system bar if true, or hide specific system bar if false. |
| enableAnimation | boolean | 否 | Whether using animation during this setting,  using animation if true or not using animation if false. [since 12] |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |

## setStatusBarColor

```TypeScript
setStatusBarColor(color: ColorMetrics): Promise<void>
```

设置主窗口状态栏的文字颜色，使用Promise异步回调。 子窗口不支持设置状态栏文字颜色，调用无效果。主窗口在非全屏/最大化模式（悬浮窗、分屏等场景）下配置不生效，进入全屏/最大化模式后配置生效。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | ColorMetrics | 是 | 要设置的状态栏颜色值。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported on this device. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally.  Possible cause: Internal task error. |

## setSubWindowModal

```TypeScript
setSubWindowModal(isModal: boolean): Promise<void>
```

设置子窗的模态属性是否启用，使用Promise异步回调。 子窗口调用该接口时，设置子窗口模态属性是否启用。启用子窗口模态属性后，其父级窗口不能响应用户操作，直到子窗口关闭或者子窗口的模态属性被禁用。 子窗口之外的窗口调用该接口时，会报错。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isModal | boolean | 是 | 设置子窗口模态属性是否启用，true为启用，false为不启用。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. [since 20] |
| 1300004 | Unauthorized operation. |

## setSubWindowModal

```TypeScript
setSubWindowModal(isModal: boolean, modalityType: ModalityType): Promise<void>
```

设置子窗的模态类型，使用Promise异步回调。 当子窗口模态类型为模窗口子窗时，其父级窗口不能响应用户操作，直到子窗口关闭或者子窗口的模态类型被禁用。 当子窗口模态类型为模应用子窗时，其父级窗口与该应用其他实例的窗口不能响应用户操作，直到子窗口关闭或者子窗口的模态类型被禁用。 此接口仅支持设置子窗口模态类型，当需要禁用子窗口模态属性时，建议使用 [setSubWindowModal<sup>12+</sup>]window.Window.setSubWindowModal(isModal: boolean)。 子窗口之外的窗口调用该接口时，会报错。

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isModal | boolean | 是 | 设置子窗口模态属性是否启用，true为启用，false为不启用。当前仅支持设置为true。 |
| modalityType | ModalityType | 是 | 子窗口模态类型。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. [since 20] |
| 1300004 | Unauthorized operation. |

## setSubWindowZLevel

```TypeScript
setSubWindowZLevel(zLevel: int): Promise<void>
```

设置当前子窗口层级级别，设置了模态属性的子窗不支持。使用Promise异步回调。 通过该接口改变子窗口的显示层级时，不会发生焦点切换。推荐使用[shiftAppWindowFocus()](arkts-window-shiftappwindowfocus-f.md#shiftAppWindowFocus-1)进行焦点切换。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| zLevel | int | 是 | 子窗口层级级别。默认值为0，取值范围为[-10000, 10000]，该参数仅支持整数输入，浮点数输入将向下取整。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause:  1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported.  Function setSubWindowZLevel can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. Possible cause:  Invalid window type. Only non-modal subwindows are supported. |
| 1300009 | The parent window is invalid. |

## setSystemAvoidAreaEnabled

```TypeScript
setSystemAvoidAreaEnabled(enabled: boolean): Promise<void>
```

创建全局悬浮窗、模态窗或WindowType窗口类型为系统窗口时，调用该接口使能后才可以通过[getWindowAvoidArea()]window.Window.getWindowAvoidArea获取窗口避 让区信息或通过 [on('avoidAreaChange')]window.Window.on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>)监听窗 口避让区变化。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | If true, the system window type can obtain avoid area. If false, the avoid area  obtained by the system window type will always be empty. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities.  Possible cause: The device does not support the API itself. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only global floating windows, dialog windows,  or Window Type as system windows are supported. |

## setSystemBarEnable

```TypeScript
setSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void
```

<!--RP14-->设置主窗口状态栏、三键导航栏的可见模式，状态栏通过status控制、三键导航栏通过navigation控制<!--RP14End-->，使用callback异步回调。 从API version 12开始，<!--RP5-->该接口在2in1设备上调用不生效。<!--RP5End--> 调用生效后返回并不表示状态栏、<!--RP15-->三键导航栏<!--RP15End-->的显示或隐藏已完成。子窗口调用后不生效。非全屏模式（悬浮窗、分屏等场景）下配置不生效。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [setWindowSystemBarEnable()]window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>) > 替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.setWindowSystemBarEnable(names:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| names | Array&lt;'status' \| 'navigation'> | 是 | 设置窗口全屏模式时状态栏和三键导航栏是否显示。 例如，需全部显示，该参  数设置为['status','navigation']；设置为[]，则不显示。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

## setSystemBarEnable

```TypeScript
setSystemBarEnable(names: Array<'status' | 'navigation'>): Promise<void>
```

<!--RP14-->设置主窗口状态栏、三键导航栏的可见模式，状态栏通过status控制、三键导航栏通过navigation控制<!--RP14End-->，使用Promise异步回调。 从API version 12开始，<!--RP5-->该接口在2in1设备上调用不生效。<!--RP5End--> 调用生效后返回并不表示状态栏、<!--RP15-->三键导航栏<!--RP15End-->的显示或隐藏已完成。子窗口调用后不生效。非全屏模式（悬浮窗、分屏等场景）下配置不生效。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [setWindowSystemBarEnable()]window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>) > 替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.setWindowSystemBarEnable(names:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| names | Array&lt;'status' \| 'navigation'> | 是 | 设置窗口全屏模式时状态栏和三键导航栏是否显示。 例如，需全部显示，该参  数设置为['status','navigation']；设置为[]，则不显示。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## setSystemBarProperties

```TypeScript
setSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void
```

设置主窗口<!--Del-->三键导航栏、<!--DelEnd-->状态栏的属性，使用callback异步回调，<!--RP5-->该接口在2in1设备上调用不生效。<!--RP5End--> 子窗口调用后不生效。非全屏模式（悬浮窗、分屏等场景）下配置不生效。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [setWindowSystemBarProperties()]window.Window.setWindowSystemBarProperties(systemBarProperties: SystemBarProperties) > 替代。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** window.Window.setWindowSystemBarProperties(systemBarProperties:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| systemBarProperties | SystemBarProperties | 是 | 三键导航栏、状态栏的属性。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

## setSystemBarProperties

```TypeScript
setSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>
```

设置主窗口<!--Del-->三键导航栏、<!--DelEnd-->状态栏的属性，使用Promise异步回调，<!--RP5-->该接口在2in1设备上调用不生效。<!--RP5End--> 子窗口调用后不生效。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [setWindowSystemBarProperties()]window.Window.setWindowSystemBarProperties(systemBarProperties: SystemBarProperties) > 替代。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** window.Window.setWindowSystemBarProperties(systemBarProperties:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| systemBarProperties | SystemBarProperties | 是 | 三键导航栏、状态栏的属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## setTitleAndDockHoverShown

```TypeScript
setTitleAndDockHoverShown(isTitleHoverShown?: boolean, isDockHoverShown?: boolean): Promise<void>
```

设置主窗口进入全屏模式时鼠标Hover到热区上是否显示窗口标题栏和dock栏，使用Promise异步回调。

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isTitleHoverShown | boolean | 否 | 是否显示窗口标题栏。 true表示显示窗口标题栏；false表示不显示窗口标题栏。默认值是true。 |
| isDockHoverShown | boolean | 否 | 是否显示dock栏。 true表示显示dock栏；false表示不显示dock栏。默认值是true。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300004 | Unauthorized operation. |

## setTitleButtonVisible

```TypeScript
setTitleButtonVisible(isMaximizeVisible: boolean, isMinimizeVisible: boolean, isSplitVisible: boolean): void
```

设置主窗标题栏上的最大化、最小化、分屏按钮是否可见。 仅对在当前场景下可见的标题栏按钮（最大化、最小化、分屏）生效。

**起始版本：** 12

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isMaximizeVisible | boolean | 是 | 设置最大化按钮是否可见，true为可见，false为隐藏。 |
| isMinimizeVisible | boolean | 是 | 设置最小化按钮是否可见，true为可见，false为隐藏。 |
| isSplitVisible | boolean | 是 | 设置分屏按钮是否可见，true为可见，false为隐藏。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

**示例：**

```TypeScript
// EntryAbility.ets
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage): void {
    // 加载主窗口对应的页面
    windowStage.loadContent('pages/Index', (err) => {
      if (err?.code) {
        console.error(`Failed to load content. Cause code: ${err.code}, message: ${err.message}`);
        return;
      }
      let mainWindow: window.Window | undefined = undefined;
      // 获取应用主窗口。
      windowStage.getMainWindow().then(
        data => {
          if (!data) {
            console.error('Failed to get main window.');
            return;
          }
          mainWindow = data;
          console.info('Succeeded in obtaining the main window. Data: ' + JSON.stringify(data));
          // 调用setTitleButtonVisible接口，隐藏主窗标题栏最大化、最小化、分屏按钮。
          mainWindow.setTitleButtonVisible(false, false, false);
        }
      ).catch((err: BusinessError) => {
          if(err.code){
            console.error(`Failed to obtain the main window. Cause code: ${err.code}, message: ${err.message}`);
          }
      });
    });
  }
}

```

## setTopmost

```TypeScript
setTopmost(isTopmost: boolean): Promise<void>
```

系统应用主窗口调用，实现将窗口置于所有应用窗口之上不被遮挡，使用Promise异步回调。

**起始版本：** 12

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isTopmost | boolean | 是 | 是否将系统应用主窗口置顶，true表示置顶，false表示取消置顶。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |

**示例：**

```TypeScript
// EntryAbility.ets
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  // ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    // ...
    windowStage.getMainWindow().then((mainWindow) => {
      let isTopmost: boolean = true;
      mainWindow.setTopmost(isTopmost).then(() => {
        console.info('Succeeded in setting the main window to be topmost.');
      }).catch((err: BusinessError) => {
        console.error(`Failed to set the main window to be topmost. Cause code: ${err.code}, message: ${err.message}`);
      });
    });
  }
}

```

## setTouchable

```TypeScript
setTouchable(isTouchable: boolean): Promise<void>
```

设置窗口是否为可触状态，使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [setWindowTouchable()]window.Window.setWindowTouchable(isTouchable: boolean)替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.setWindowTouchable(isTouchable:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isTouchable | boolean | 是 | 窗口是否为可触状态。true表示可触；false表示不可触。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## setTouchable

```TypeScript
setTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void
```

设置窗口是否为可触状态，使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [setWindowTouchable()]window.Window.setWindowTouchable(isTouchable: boolean, callback: AsyncCallback<void>) > 替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.setWindowTouchable(isTouchable:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isTouchable | boolean | 是 | 窗口是否为可触状态。true表示可触；false表示不可触。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

## setTouchableAreas

```TypeScript
setTouchableAreas(rects: Array<Rect>): Promise<void>
```

实现设置窗口可触摸区域；不设置时默认整个窗口区域可触摸；设置窗口可触摸区域后，区域外触摸事件将被透传；如果窗口区域发生变化需要重新设置。

**起始版本：** 12

**需要权限：** 

- API版本26.0.0+： ohos.permission.SET_WINDOW_TOUCH_AREAS

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rects | Array&lt;Rect> | 是 | 窗口可触摸区域。可触摸区域最大个数不能超过10个，且范围不能超出窗口区域。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. [since 26.0.0] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have  the permission required or a non-system application calls the API. [since 26.0.0] |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12 - 24] |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300016 | Parameter error. Possible cause: Invalid parameter range. |

## setUIContent

```TypeScript
setUIContent(path: string, callback: AsyncCallback<void>): void
```

根据当前工程中指定的某个页面路径为窗口加载具体页面内容，使用callback异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 要加载到窗口中的页面内容的路径，Stage模型下该路径需添加到工程的main_pages.json文件中，FA模型下该路径需添加到工程的config.json文件中。不支持相对路径写法，需与main_pages.json或config.json中的src取值保持一致。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. [since 9 - 9] |

## setUIContent

```TypeScript
setUIContent(path: string): Promise<void>
```

根据当前工程中指定的某个页面路径为窗口加载具体页面内容，使用Promise异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 要加载到窗口中的页面内容的路径，Stage模型下该路径需添加到工程的main_pages.json文件中，FA模型下该路径需添加到工程的config.json文件中。不支持相对路径写法，需与main_pages.json或config.json中的src取值保持一致。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. [since 9 - 9] |

## setWakeUpScreen

```TypeScript
setWakeUpScreen(wakeUp: boolean): void
```

唤醒屏幕。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wakeUp | boolean | 是 | 是否设置唤醒屏幕。true表示唤醒；false表示不唤醒。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

**示例：**

```TypeScript
let wakeUp: boolean = true;
try {
  windowClass.setWakeUpScreen(wakeUp);
} catch (exception) {
  console.error(`Failed to wake up the screen. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## setWaterMarkFlag

```TypeScript
setWaterMarkFlag(enable: boolean, callback: AsyncCallback<void>): void
```

为当前窗口添加或删除安全水印标志，使用callback异步回调。

**起始版本：** 10

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 是否对窗口添加标志位。true表示添加，false表示删除。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300008 | The display device is abnormal. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let enable: boolean = true;
  windowClass.setWaterMarkFlag(enable, (err: BusinessError) => {
    const errCode: number = err.code;
    if (errCode) {
      console.error(`Failed to set water mark flag of window. Cause code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in setting water mark flag of window.');
  });
} catch (exception) {
  console.error(`Failed to set water mark flag of window. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## setWaterMarkFlag

```TypeScript
setWaterMarkFlag(enable: boolean): Promise<void>
```

为当前窗口添加或删除安全水印标志，使用Promise异步回调。

**起始版本：** 10

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 是否对窗口添加标志位。true表示添加，false表示删除。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300008 | The display device is abnormal. |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let enable = true;
  let promise = windowClass.setWaterMarkFlag(enable);
  promise.then(() => {
    console.info('Succeeded in setting water mark flag of window.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to set water mark flag of window. Cause code: ${err.code}, message: ${err.message}`);
  });
} catch (exception) {
  console.error(`Failed to set water mark flag of window. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

## setWindowBackgroundColor

```TypeScript
setWindowBackgroundColor(color: string | ColorMetrics): void
```

设置窗口的背景色。 未调用该接口时，窗口在浅色模式默认背景色为`'#FFF0F0F0'`，在深色模式默认背景色为`'#FF1A1A1A'`。 Stage模型下，该接口需要在 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)调用生效后使用。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | string \| ColorMetrics | 是 | 需要设置的背景色，为十六进制RGB或ARGB颜色，不区分大小写，例如'#00FF00'或'#FF00FF00'。  从API version 18开始，此参数支持ColorMetrics类型。 [since 18] |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed; |

## setWindowBrightness

```TypeScript
setWindowBrightness(brightness: double): Promise<void>
```

主窗口设置窗口亮度。当窗口处于前台且获焦时，窗口亮度生效。使用Promise异步回调。 窗口亮度生效时只会影响当前设备屏幕亮度，无法修改虚拟屏（如投屏所在的屏幕）的屏幕亮度。 当接口入参为-1时，窗口亮度恢复为系统屏幕亮度（可以通过控制中心或快捷键调整）。 当窗口退至后台时，窗口亮度失效，可以通过控制中心或快捷键调整。不建议连续调用或窗口退至后台时调用此接口，否则可能产生时序问题。 设备行为差异： 针对TV设备：当前接口不生效也不报错。 针对非2in1设备（不包含TV设备）： 在OpenHarmony 6.1之前，当前窗口的窗口亮度生效时，控制中心调整系统屏幕亮度不生效。 从OpenHarmony 6.1开始，当前窗口的窗口亮度生效时，控制中心可以调整系统屏幕亮度，同时会将当前窗口恢复为系统屏幕亮度。 针对2in1设备： 在OpenHarmony 5.0.2之前，窗口设置屏幕亮度生效时，控制中心或快捷键调整系统屏幕亮度不生效。 从OpenHarmony 5.0.2开始，窗口亮度与系统屏幕亮度保持一致，可以通过本接口、控制中心或者快捷键设置系统屏幕亮度。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| brightness | double | 是 | 屏幕亮度值。该参数为浮点数，取值范围为[0.0, 1.0]或-1.0。1.0表示最亮，-1.0表示恢复成设置窗口亮度前的系统控制中心亮度。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |

## setWindowBrightness

```TypeScript
setWindowBrightness(brightness: double, callback: AsyncCallback<void>): void
```

主窗口设置窗口亮度。当窗口处于前台且获焦时，窗口亮度生效。使用Promise异步回调。 窗口亮度生效时只会影响当前设备屏幕亮度，无法修改虚拟屏（如投屏所在的屏幕）的屏幕亮度。 当接口入参为-1时，窗口亮度恢复为系统屏幕亮度（可以通过控制中心或快捷键调整）。 当窗口退至后台时，窗口亮度失效，可以通过控制中心或快捷键调整。不建议连续调用或窗口退至后台时调用此接口，否则可能产生时序问题。 设备行为差异： 针对TV设备：当前接口不生效也不报错。 针对非2in1设备（不包含TV设备）： 在OpenHarmony 6.1之前，当前窗口的窗口亮度生效时，控制中心调整系统屏幕亮度不生效。 从OpenHarmony 6.1开始，当前窗口的窗口亮度生效时，控制中心可以调整系统屏幕亮度，同时会将当前窗口恢复为系统屏幕亮度。 针对2in1设备： 在OpenHarmony 5.0.2之前，窗口设置屏幕亮度生效时，控制中心或快捷键调整系统屏幕亮度不生效。 从OpenHarmony 5.0.2开始，窗口亮度与系统屏幕亮度保持一致，可以通过本接口、控制中心或者快捷键设置系统屏幕亮度。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| brightness | double | 是 | 屏幕亮度值。该参数为浮点数，取值范围为[0.0, 1.0]或-1.0。1.0表示最亮，-1.0表示恢复成设置窗口亮度前的系统控制中心亮度。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |

## setWindowColorSpace

```TypeScript
setWindowColorSpace(colorSpace:ColorSpace): Promise<void>
```

设置当前窗口为广色域模式或默认色域模式，使用Promise异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| colorSpace | ColorSpace | 是 | 设置色域模式。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |

## setWindowColorSpace

```TypeScript
setWindowColorSpace(colorSpace:ColorSpace, callback: AsyncCallback<void>): void
```

设置当前窗口为广色域模式或默认色域模式，使用callback异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| colorSpace | ColorSpace | 是 | 设置色域模式。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |

## setWindowContainerColor

```TypeScript
setWindowContainerColor(activeColor: string, inactiveColor: string): void
```

设置主窗口容器在焦点态和非焦点态时的背景色。在Stage模型下，该接口需在调用 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)后使用。 窗口容器背景色覆盖整个窗口区域，包括标题栏和内容区域。内容区域背景色默认跟随系统深浅色，当同时使用该接口和 [setWindowBackgroundColor()]window.Window.setWindowBackgroundColor设置背景色时，内容区域显示窗口背景色，标题栏显示窗口容器背景色。

**起始版本：** 20

**需要权限：** 

 ohos.permission.SET_WINDOW_TRANSPARENT

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| activeColor | string | 是 | 窗口容器处于焦点态时的背景色，为十六进制RGB或ARGB颜色，不区分大小写，例如'#00FF00'或'#FF00FF00'。 |
| inactiveColor | string | 是 | 窗口容器处于非焦点态时的背景色，为十六进制RGB颜色或ARGB颜色（透明度固定为'FF'），不区分大小写，例如'#00FF00'或'#FF00FF00'。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300004 | Unauthorized operation. |

## setWindowContainerModalColor

```TypeScript
setWindowContainerModalColor(activeColor: string, inactiveColor: string): void
```

设置主窗口容器在焦点态和非焦点态时的背景色。该接口需在调用 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)后使用。 窗口容器背景色覆盖整个窗口区域，包括标题栏和内容区域。内容区域背景色默认跟随系统深浅色，当同时使用该接口和 [setWindowBackgroundColor()]window.Window.setWindowBackgroundColor设置背景色时，内容区域显示窗口背景色，标题栏显示窗口容器背景色。

**起始版本：** 20

**需要权限：** 

- API版本26.0.0+： ohos.permission.SET_WINDOW_ALPHA

**系统能力：** SystemCapability.Window.SessionManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| activeColor | string | 是 | 窗口容器处于焦点态时的背景色，为十六进制RGB或ARGB颜色，不区分大小写，例如'#00FF00'或'#FF00FF00'。 |
| inactiveColor | string | 是 | 窗口容器处于非焦点态时的背景色，为十六进制RGB颜色或ARGB颜色，不区分大小写，例如'#00FF00'或'#FF00FF00'。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have  the permission required or a non-system application calls the API. [since 26.0.0] |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 20 - 24] |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

## setWindowCornerRadius

```TypeScript
setWindowCornerRadius(cornerRadius: double): Promise<void>
```

设置子窗或悬浮窗的圆角半径值，使用Promise异步回调。 圆角半径值过大将会导致三键（最大化、最小化、关闭按钮）位置被裁切，且会导致热区不易识别，请根据窗口大小设置合适的圆角半径值。 在调用此接口之前调用[getWindowCornerRadius()]window.Window.getWindowCornerRadius接口可以获得窗口默认圆角半径值。

**起始版本：** 17

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| cornerRadius | double | 是 | 表示窗口圆角的半径值。该参数为浮点数，单位为vp，取值范围为[0.0, +∞)，取值为0.0时表示没有窗口圆角。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: The corner radius is less than zero. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |

## setWindowDecorHeight

```TypeScript
setWindowDecorHeight(height: int): void
```

设置窗口的标题栏高度，对存在标题栏和三键区的窗口形态生效。如果使用Stage模型，该接口需要在 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)调用生效后使用。 当主窗口进入全屏沉浸状态时，此时鼠标Hover到窗口标题栏热区时，会显示悬浮标题栏，悬浮标题栏高度固定为37vp。 由于系统像素转换可能存在精度误差，设置后调用[getWindowDecorHeight()]window.Window.getWindowDecorHeight获取的值可能与设置的值存在1vp的差异。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| height | int | 是 | 设置的窗口标题栏高度，仅支持具有窗口标题栏的窗口。该参数为整数，浮点数输入将向下取整，取值范围为[37,112]，范围外为非法参数，单位为vp。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: Invalid parameter range. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |

## setWindowDecorVisible

```TypeScript
setWindowDecorVisible(isVisible: boolean): void
```

设置窗口标题栏是否可见，对存在标题栏和三键区的窗口形态生效。Stage模型下，该接口需要在 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)调用生效后使用。 设置窗口标题栏不可见后，当主窗口进入全屏沉浸状态时，此时鼠标Hover到上方窗口标题栏热区上会显示悬浮标题栏。若想禁用悬浮标题栏显示，请使用 [setTitleAndDockHoverShown()]window.Window.setTitleAndDockHoverShown接口。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isVisible | boolean | 是 | 设置标题栏是否可见，true为可见，false为隐藏。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300004 | Unauthorized operation. [since 11 - 19] |

## setWindowDelayRaiseOnDrag

```TypeScript
setWindowDelayRaiseOnDrag(isEnabled: boolean): void
```

设置窗口是否使能延迟抬升，仅主窗和子窗可设置。 不调用此接口或传入false，主窗和子窗在鼠标左键按下时，默认立即抬升。 调用此接口使能延迟抬升后，在跨窗拖拽场景，可拖拽组件所在窗口在鼠标左键按下时不会立即抬升，直到鼠标左键抬起。

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isEnabled | boolean | 是 | 是否使能延迟抬升。 true表示使能窗口延迟抬升；false表示不使能窗口延迟抬升。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function setWindowDelayRaiseOnDrag can not work  correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  The window is not created or destroyed. |

## setWindowFocusable

```TypeScript
setWindowFocusable(isFocusable: boolean): Promise<void>
```

设置窗口是否具有获得焦点的能力，使用Promise异步回调。 从API version 22开始，调用[createVirtualScreen](arkts-display-createvirtualscreen-f.md#createVirtualScreen-1)接口创建虚拟屏，并设置 supportsFocus配置项为false时，位于该虚拟屏的窗口无法调用该接口修改窗口的可获焦能力，如果调用，会抛出1300002错误码。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isFocusable | boolean | 是 | can be focus if true, or can not be focus if false. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## setWindowFocusable

```TypeScript
setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void
```

设置窗口是否具有获得焦点的能力，使用callback异步回调。 从API version 22开始，调用[createVirtualScreen](arkts-display-createvirtualscreen-f.md#createVirtualScreen-1)接口创建虚拟屏，并设置 supportsFocus配置项为false时，位于该虚拟屏的窗口无法调用该接口修改窗口的可获焦能力，如果调用，会抛出1300002错误码。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isFocusable | boolean | 是 | can be focus if true, or can not be focus if false. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## setWindowGrayScale

```TypeScript
setWindowGrayScale(grayScale: double): Promise<void>
```

设置窗口灰阶，使用Promise异步回调。该接口需要在调用 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)使窗口加载页面内容后调用。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| grayScale | double | 是 | 窗口灰阶。该参数为浮点数，取值范围为[0.0, 1.0]。0.0表示窗口图像无变化，1.0表示窗口图像完全转为灰度图像，0.0至1.0之间时效果呈线性变化。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## setWindowKeepScreenOn

```TypeScript
setWindowKeepScreenOn(isKeepScreenOn: boolean): Promise<void>
```

设置当前窗口位于前台时当前设备的屏幕是否为常亮状态，异源虚拟屏下不生效。使用Promise异步回调。 仅在必要场景（导航、视频播放、绘画、游戏等场景）下，设置该属性为true；退出上述场景后，应当重置该属性为false；其他场景（无屏幕互动、音频播放等）下，不使用该接口；系统检测到非规范使用该接口时，可能会恢复自动灭屏功能。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isKeepScreenOn | boolean | 是 | 设置屏幕是否为常亮状态。true表示常亮；false表示不常亮。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## setWindowKeepScreenOn

```TypeScript
setWindowKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void
```

设置当前窗口位于前台时当前设备的屏幕是否为常亮状态，异源虚拟屏下不生效。使用callback异步回调。 仅在必要场景（导航、视频播放、绘画、游戏等场景）下，设置该属性为true；退出上述场景后，应当重置该属性为false；其他场景（无屏幕互动、音频播放等）下，不使用该接口；系统检测到非规范使用该接口时，可能会恢复自动灭屏功能。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isKeepScreenOn | boolean | 是 | 设置屏幕是否为常亮状态。true表示常亮；false表示不常亮。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## setWindowLayoutFullScreen

```TypeScript
setWindowLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void
```

设置主窗口或子窗口的布局是否为沉浸式布局，使用callback异步回调。系统窗口调用不生效。 沉浸式布局生效时，布局不避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件可能产生与其重叠的情况。 非沉浸式布局生效时，布局避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件不会与其重叠。 > **说明：** > > 从API version 9开始支持，从API version 12开始废弃，建议使用Promise方式的 > [setWindowLayoutFullScreen()]window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)替代。

**起始版本：** 9

**废弃版本：** 12

**替代接口：** window.Window.setWindowLayoutFullScreen(isLayoutFullScreen:

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isLayoutFullScreen | boolean | 是 | 窗口的布局是否为沉浸式布局（该沉浸式布局状态栏、三键导航栏仍然显示）。true表示沉浸式布局；  false表示非沉浸式布局。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |

## setWindowLayoutFullScreen

```TypeScript
setWindowLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>
```

设置应用主窗口或应用子窗口的布局是否为沉浸式布局，使用Promise异步回调。其余窗口调用不生效也不报错。 沉浸式布局生效时，布局不避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件可能产生与其重叠的情况。 非沉浸式布局生效时，布局避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件不会与其重叠。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isLayoutFullScreen | boolean | 是 | The window can layout in full screen |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300003 | This window manager service works abnormally. |

## setWindowLimits

```TypeScript
setWindowLimits(windowLimits: WindowLimits): Promise<WindowLimits>
```

设置当前窗口的尺寸限制，使用Promise异步回调。 默认存在一个系统尺寸限制，系统尺寸限制由产品配置决定，不可修改。 未调用setWindowLimits配置过WindowLimits时，使用[getWindowLimits]window.Window.getWindowLimits或 [getWindowLimitsVP]window.Window.getWindowLimitsVP可获取系统限制。 > **说明：** > > - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，处于自由悬浮窗口模式（即窗口模式为 > window.WindowStatusType.FLOATING）的窗口在尺寸变化时受[WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)约束。触发场景包括：应用主动 > 改变窗口大小（如调用[resize()]window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)）；系统调节窗 > 口大小（如分辨率变化、显示大小缩放系数变化）；用户拖拽缩放窗口。 > > - 非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，主窗口尺寸不受 > [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)约束，其他类型窗口仍受 > [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)约束。

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| windowLimits | WindowLimits | 是 | 目标窗口的尺寸限制，单位为px或vp。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;WindowLimits> | Promise对象。返回设置后的尺寸限制，为入参与系统尺寸限制的交集。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |

## setWindowLimits

```TypeScript
setWindowLimits(windowLimits: WindowLimits, isForcible: boolean): Promise<WindowLimits>
```

设置当前窗口的尺寸限制，使用Promise异步回调。 默认存在一个系统尺寸限制，系统尺寸限制由产品配置决定，不可修改。 未调用setWindowLimits配置过WindowLimits时，使用[getWindowLimits]window.Window.getWindowLimits或 [getWindowLimitsVP]window.Window.getWindowLimitsVP可获取系统限制。 > **说明：** > > - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，处于自由悬浮窗口模式（即窗口模式为 > window.WindowStatusType.FLOATING）的窗口在尺寸变化时受[WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)约束。触发场景包括：应用主动 > 改变窗口大小（如调用[resize()]window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)）；系统调节窗 > 口大小（如分辨率变化、显示大小缩放系数变化）；用户拖拽缩放窗口。 > > - 非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，主窗口尺寸不受 > [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)约束，其他类型窗口仍受 > [WindowLimits](arkts-window-windowlimits-i.md#WindowLimits)约束。

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| windowLimits | WindowLimits | 是 | 目标窗口的尺寸限制，单位为px或vp。 |
| isForcible | boolean | 是 | 是否强制设置窗口的尺寸限制。 入参[windowLimits](arkts-window-windowlimits-i.md#WindowLimits)的单位为vp时  ：无论设置true还是false，都按照false处理，窗口宽高的最小值和最大值都取决于系统限制。 入参[windowLimits](arkts-window-windowlimits-i.md#WindowLimits)  的单位为px时：设置为true，表示窗口宽高最小值以系统限制值和40vp两者中的低数值为准，窗口宽高的最大值仍取决于系统限制；设置为false，表示窗口宽高的最小值和最大值都取决于系统限制。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;WindowLimits> | Promise对象。返回设置后的窗口尺寸限制。  入参[windowLimits](arkts-window-windowlimits-i.md#WindowLimits)的单位为vp时，返回入参与系统默认窗口尺寸限制的交集。  入参[windowLimits](arkts-window-windowlimits-i.md#WindowLimits)的单位为px时，isForcible为false则返回入参与系统默认窗口尺寸限制的交集；isForcible为  true则返回入参与[系统限制的最小值与40vp两者中的低数值，系统限制的最大值]的交集。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |

## setWindowMask

```TypeScript
setWindowMask(windowMask: Array<Array<long>>): Promise<void>
```

设置异形窗口的掩码，使用Promise异步回调。异形窗口为非常规形状的窗口，掩码用于描述异形窗口的形状。此接口仅限子窗和全局悬浮窗可用。 当异形窗口大小发生变化时，实际的显示内容为掩码大小和窗口大小的交集部分。 该接口只在多个线程操作同一个窗口时可能返回错误码1300002。窗口被销毁场景下错误码返回401。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| windowMask | Array&lt;Array&lt;long>> | 是 | 异形窗口的掩码，该参数仅支持宽高为窗口宽高、取值为整数0和整数1的二维数组输入，整数0代表所在像素透明，整数1代表所在像素不透明，宽高不符合  的二维数组或二维数组取值不为整数0和整数1的二维数组为非法参数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only subwindows and float windows are supported. |

## setWindowMaskWithAlpha

```TypeScript
setWindowMaskWithAlpha(windowMask: Uint8Array, maskWidth: int, maskHeight: int): Promise<void>
```

设置异形窗口的掩码

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| windowMask | Uint8Array | 是 | windowMask仅包含每像素alpha透明度值。  有效范围：0（完全透明）到255（完全不透明），大小必须等于(maskWidthmask Heights) |
| maskWidth | int | 是 | 掩码宽度（以像素为单位）。必须等于目标窗口宽度  取值范围为全体整数。 |
| maskHeight | int | 是 | 以像素为单位的遮罩高度。必须等于目标窗口高度  取值范围为全体整数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 不会返回任何值的Promise。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only subwindows and float windows are supported. |
| 1300016 | Parameter error. Possible cause:  1. The maskWidth is not equal to the window width or the maskHeight is not equal to the window height.  2. The length of windowMask is not equal to maskWidth multiplied by maskHeight. |

## setWindowMode

```TypeScript
setWindowMode(mode: WindowMode): Promise<void>
```

设置主窗口模式，使用Promise异步回调。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | WindowMode | 是 | 窗口模式。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

**示例：**

```TypeScript
// EntryAbility.ets
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  // ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    console.info('onWindowStageCreate');
    let windowClass: window.Window | undefined = undefined;
    windowStage.getMainWindow((err: BusinessError, data) => {
      const errCode: number = err.code;
      if (errCode) {
        console.error(`Failed to obtain the main window. Cause code: ${err.code}, message: ${err.message}`);
        return;
      }
      windowClass = data;
      let mode = window.WindowMode.FULLSCREEN;
      try {
        let promise = windowClass.setWindowMode(mode);
        promise.then(() => {
          console.info('Succeeded in setting the window mode.');
        }).catch((err: BusinessError) => {
          console.error(`Failed to set the window mode. Cause code: ${err.code}, message: ${err.message}`);
        });
      } catch (exception) {
        console.error(`Failed to set the window mode. Cause code: ${exception.code}, message: ${exception.message}`);
      }
    });
  }
}

```

## setWindowMode

```TypeScript
setWindowMode(mode: WindowMode, callback: AsyncCallback<void>): void
```

设置主窗口模式，使用callback异步回调。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | WindowMode | 是 | 窗口模式。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

**示例：**

```TypeScript
// EntryAbility.ets
import { UIAbility } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  // ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    console.info('onWindowStageCreate');
    let windowClass: window.Window | undefined = undefined;
    windowStage.getMainWindow((err: BusinessError, data) => {
      const errCode: number = err.code;
      if (errCode) {
        console.error(`Failed to obtain the main window. Cause code: ${err.code}, message: ${err.message}`);
        return;
      }
      windowClass = data;
      let mode = window.WindowMode.FULLSCREEN;
      try {
        windowClass.setWindowMode(mode, (err: BusinessError) => {
          const errCode: number = err.code;
          if (errCode) {
            console.error(`Failed to set the window mode. Cause code: ${err.code}, message: ${err.message}`);
            return;
          }
          console.info('Succeeded in setting the window mode.');
        });
      } catch (exception) {
        console.error(`Failed to set the window mode. Cause code: ${exception.code}, message: ${exception.message}`);
      }
    });
  }
}

```

## setWindowPrivacyMode

```TypeScript
setWindowPrivacyMode(isPrivacyMode: boolean): Promise<void>
```

设置窗口是否为隐私模式，使用Promise异步回调。 设置为隐私模式的窗口，窗口内容将无法被截屏或录屏。 隐私模式窗口退后台后在多任务卡片中显示为白色蒙层或隐私蒙层。 未调用此接口时，窗口默认不开启隐私模式，可以被截屏或录屏。

**起始版本：** 9

**需要权限：** 

 ohos.permission.PRIVACY_WINDOW

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isPrivacyMode | boolean | 是 | 窗口是否为隐私模式。true表示为隐私模式，false表示为非隐私模式。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API.  Possible cause: Need ohos.permission.PRIVACY_WINDOW permission. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |

## setWindowPrivacyMode

```TypeScript
setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void
```

设置窗口是否为隐私模式，使用callback异步回调。 设置为隐私模式的窗口，窗口内容将无法被截屏或录屏。 隐私模式窗口退后台后在多任务卡片中显示为白色蒙层或隐私蒙层。 未调用此接口时，窗口默认不开启隐私模式，可以被截屏或录屏。

**起始版本：** 9

**需要权限：** 

 ohos.permission.PRIVACY_WINDOW

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isPrivacyMode | boolean | 是 | 窗口是否为隐私模式。true表示为隐私模式，false表示为非隐私模式。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API.  Possible cause: Need ohos.permission.PRIVACY_WINDOW permission. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |

## setWindowShadowEnabled

```TypeScript
setWindowShadowEnabled(enable: boolean): Promise<void>
```

设置主窗口是否显示阴影，使用Promise异步回调。未调用该接口时，主窗口默认显示阴影。

**起始版本：** 20

**需要权限：** 

 ohos.permission.SET_WINDOW_TRANSPARENT

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 设置主窗口是否显示阴影。true表示显示阴影，false表示不显示阴影。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |

## setWindowShadowRadius

```TypeScript
setWindowShadowRadius(radius: double): void
```

设置子窗或悬浮窗窗口边缘阴影的模糊半径。

**起始版本：** 17

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| radius | double | 是 | 表示窗口边缘阴影的模糊半径。该参数为浮点数，单位为px，取值范围为[0.0, +∞)，取值为0.0时表示关闭窗口边缘阴影。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: The shadow radius is less than zero. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed;  2. Internal task error. |
| 1300004 | Unauthorized operation. Possible cause:  Invalid window type. Only subwindows and float windows are supported. |

## setWindowSystemBarEnable

```TypeScript
setWindowSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void
```

<!--RP14-->设置主窗口状态栏、三键导航栏的可见模式，状态栏通过status控制、三键导航栏通过navigation控制<!--RP14End-->，使用callback异步回调。 从API version 12开始，<!--RP5-->该接口在2in1设备上调用不生效。<!--RP5End--> 调用生效后返回并不表示状态栏、<!--RP15-->三键导航栏<!--RP15End-->的显示或隐藏已完成。子窗口调用后不生效。非全屏模式（悬浮窗、分屏等场景）下配置不生效。 > **说明：** > > 从API version 9开始支持，从API version 12开始废弃，建议使用Promise方式的 > [setWindowSystemBarEnable()]window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>) > 替代。

**起始版本：** 9

**废弃版本：** 12

**替代接口：** window.Window.setWindowSystemBarEnable(names:

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| names | Array&lt;'status' \| 'navigation'> | 是 | 设置窗口全屏模式时状态栏和三键导航栏是否显示。 例如，需全部显示，该参  数设置为['status','navigation']；设置为[]，则不显示。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## setWindowSystemBarEnable

```TypeScript
setWindowSystemBarEnable(names: Array<'status'|'navigation'>): Promise<void>
```

<!--RP14-->设置主窗口状态栏、三键导航栏的可见模式，状态栏通过status控制、三键导航栏通过navigation控制<!--RP14End-->，使用Promise异步回调。 调用生效后返回并不表示状态栏、<!--RP15-->三键导航栏<!--RP15End-->的显示或隐藏已完成。主窗口在非全屏/最大化模式（悬浮窗、分屏等场景）下配置不生效，进入全屏/最大化模式后配置生效。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| names | Array&lt;'status'\|'navigation'> | 是 | The set of system bar |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |

## setWindowSystemBarProperties

```TypeScript
setWindowSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void
```

设置主窗口<!--Del-->三键导航栏、<!--DelEnd-->状态栏的属性，使用callback异步回调，<!--RP5-->该接口在2in1设备上调用不生效。<!--RP5End--> 子窗口调用后不生效。 > **说明：** > > 从API version 9开始支持，从API version 12开始废弃，建议使用Promise方式的 > [setWindowSystemBarProperties()]window.Window.setWindowSystemBarProperties(systemBarProperties: SystemBarProperties) > 替代。

**起始版本：** 9

**废弃版本：** 12

**替代接口：** window.Window.setWindowSystemBarProperties(systemBarProperties:

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| systemBarProperties | SystemBarProperties | 是 | 三键导航栏、状态栏的属性。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## setWindowSystemBarProperties

```TypeScript
setWindowSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>
```

设置主窗口<!--Del-->三键导航栏、<!--DelEnd-->状态栏的属性，使用Promise异步回调。 子窗口调用后不生效。主窗口在非全屏/最大化模式（悬浮窗、分屏等场景）下配置不生效，进入全屏/最大化模式后配置生效。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| systemBarProperties | SystemBarProperties | 是 | 三键导航栏、状态栏的属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |

## setWindowTitle

```TypeScript
setWindowTitle(titleName: string): Promise<void>
```

设置窗口标题，使用Promise异步回调。如果使用Stage模型，该接口需要在 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)调用生效后使用。

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| titleName | string | 是 | 窗口标题。标题显示区域最右端不超过系统三键区域最左端，超过部分以省略号表示。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |

## setWindowTitleButtonVisible

```TypeScript
setWindowTitleButtonVisible(isMaximizeButtonVisible: boolean, isMinimizeButtonVisible: boolean, isCloseButtonVisible?: boolean): void
```

设置主窗标题栏上的最大化、最小化、关闭按钮是否可见。

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isMaximizeButtonVisible | boolean | 是 | 设置最大化按钮是否可见，true为可见，false为隐藏。如果最大化按钮隐藏，那么在最大化场景下，也隐藏对应的还原按钮。 |
| isMinimizeButtonVisible | boolean | 是 | 设置最小化按钮是否可见，true为可见，false为隐藏。 |
| isCloseButtonVisible | boolean | 否 | 设置关闭按钮是否可见，true为可见，false为隐藏，默认值true。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows and SubWindowOptions.zLevelAboveParentLoosened is true are supported. |

## setWindowTitleMoveEnabled

```TypeScript
setWindowTitleMoveEnabled(enabled: boolean): void
```

禁止/使能主窗或子窗标题栏默认移动窗口和双击最大化的功能，当禁用标题栏默认移动窗口和双击最大化的功能时，可使用[startMoving()]window.Window.startMoving()在应用热区中发起 拖拽移动，使用[maximize()]window.Window.maximize(presentation?: MaximizePresentation)实现最大化功能。如果使用Stage模型，该接口需要在 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)调用生效后使用。

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | 是 | 是否使能标题栏默认移动窗口和双击最大化功能，true表示使能，false表示不使能。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only main windows and subwindows are supported. |

## setWindowTopmost

```TypeScript
setWindowTopmost(isWindowTopmost: boolean): Promise<void>
```

应用主窗口调用，用于实现将窗口置于其他应用窗口之上不被遮挡，使用Promise异步回调。 应用可通过自定义快捷键实现主窗口的置顶和取消置顶。

**起始版本：** 14

**需要权限：** 

 ohos.permission.WINDOW_TOPMOST

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isWindowTopmost | boolean | 是 | 设置主窗口置顶，true为置顶，false为取消置顶。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  The window is not created or destroyed. |
| 1300004 | Unauthorized operation. Possible cause:  Invalid window type. Only main windows are supported. |

## setWindowTouchable

```TypeScript
setWindowTouchable(isTouchable: boolean): Promise<void>
```

设置窗口是否为可点击状态，使用Promise异步回调。 当窗口处于可点击状态时，若用户点击命中该窗口，事件将发送给该窗口处理。当窗口处于不可点击状态时，透传点击事件，传递给下层窗口。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isTouchable | boolean | 是 | is touchable if true, or not if false. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |

## setWindowTouchable

```TypeScript
setWindowTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void
```

设置窗口是否为可点击状态，使用callback异步回调。 当窗口处于可点击状态时，若用户点击命中该窗口，事件将发送给该窗口处理。当窗口处于不可点击状态时，透传点击事件，传递给下层窗口。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isTouchable | boolean | 是 | is touchable if true, or not if false. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |

## setWindowTransitionAnimation

```TypeScript
setWindowTransitionAnimation(transitionType: WindowTransitionType, animation: TransitionAnimation): Promise<void>
```

给特定场景下的窗口增加转场动画。 当前只支持在应用主窗下使用。

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| transitionType | WindowTransitionType | 是 | 本次转场动画场景。当前只支持销毁场景。 |
| animation | TransitionAnimation | 是 | 本次转场动画配置。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |
| 1300016 | Parameter error. Possible cause:  1. Invalid parameter range;  2. Invalid parameter length. |

## setWindowType

```TypeScript
setWindowType(type: WindowType): Promise<void>
```

设置窗口类型，使用Promise异步回调。

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | WindowType | 是 | 窗口类型。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let type = window.WindowType.TYPE_SYSTEM_ALERT;
let promise = windowClass.setWindowType(type);
promise.then(() => {
  console.info('Succeeded in setting the window type.');
}).catch((err: BusinessError) => {
  console.error(`Failed to set the window type. Cause code: ${err.code}, message: ${err.message}`);
});

```

## setWindowType

```TypeScript
setWindowType(type: WindowType, callback: AsyncCallback<void>): void
```

设置窗口类型，使用callback异步回调。

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | WindowType | 是 | 窗口类型。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let type = window.WindowType.TYPE_SYSTEM_ALERT;
windowClass.setWindowType(type, (err: BusinessError) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to set the window type. Cause code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in setting the window type.');
});

```

## show

```TypeScript
show(callback: AsyncCallback<void>): void
```

显示当前窗口，使用callback异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用 > [showWindow()]window.Window.showWindow(callback: AsyncCallback<void>)替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.showWindow(callback:

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

## show

```TypeScript
show(): Promise<void>
```

显示当前窗口，使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[showWindow()]window.Window.showWindow()替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** window.Window.showWindow()

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

## showWindow

```TypeScript
showWindow(callback: AsyncCallback<void>): void
```

显示当前窗口，使用callback异步回调，支持系统窗口、应用子窗口、模态窗和全局悬浮窗，或将已显示的应用主窗口层级提升至顶部。 > **说明：** > > 调用该接口前，建议先通过[loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)方法或者 > [setUIContent](arkts-window-window-i.md#setUIContent)方法完成页面加载。如果应用主窗口没有完成页面加载，直接调用该接口，界面会 > 一直显示启动界面；如果系统窗口、应用子窗口、模态窗和全局悬浮窗没有完成页面加载，直接调用该接口，窗口会处于前台，但不可见。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal. |

## showWindow

```TypeScript
showWindow(): Promise<void>
```

显示当前窗口，使用Promise异步回调，支持系统窗口、应用子窗口、模态窗和全局悬浮窗，或将已显示的应用主窗口层级提升至顶部。 > **说明：** > > 调用该接口前，建议优先通过[loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)方法或者 > [setUIContent](arkts-window-window-i.md#setUIContent)方法完成页面加载。如果应用主窗口没有完成页面加载，直接调用该接口，界面会 > 一直显示启动界面；如果系统窗口、应用子窗口、模态窗和全局悬浮窗没有完成页面加载，直接调用该接口，窗口会处于前台，但不可见。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal. |

## showWindow

```TypeScript
showWindow(options: ShowWindowOptions): Promise<void>
```

显示当前窗口或将已显示的应用主窗口的层级提升至顶部，支持传入参数来控制窗口显示的行为，使用Promise异步回调。 仅支持除TYPE_DIALOG类型的窗口和模态子窗口（即使用setSubWindowModal启用了子窗的模态属性）之外的应用子窗口、应用主窗、全局悬浮窗以及系统窗口。 > **说明：** > > 调用该接口前，建议优先通过[loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)方法或者 > [setUIContent](arkts-window-window-i.md#setUIContent)方法完成页面加载。如果应用主窗口没有完成页面加载，直接调用该接口，界面会 > 一直显示启动界面；如果系统窗口、应用子窗口和全局悬浮窗没有完成页面加载，直接调用该接口，窗口会处于前台，但不可见。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | ShowWindowOptions | 是 | 显示子窗口或系统窗口时的参数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function showWindow can not work correctly due to  limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Modal subwindow and dialog window can not set focusOnShow. |
| 1300016 | Parameter validation error. Possible cause: 1. The value of the parameter is  out of the allowed range;  2. The length of the parameter exceeds the allowed length;  3. The parameter format is incorrect. |

## showWithAnimation

```TypeScript
showWithAnimation(callback: AsyncCallback<void>): void
```

显示当前窗口，过程中播放动画，使用callback异步回调，仅支持系统窗口。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only system windows are supported. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

windowClass.showWithAnimation((err: BusinessError) => {
  const errCode: number = err.code;
  if (errCode) {
    console.error(`Failed to show the window with animation. Cause code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in showing the window with animation.');
});

```

## showWithAnimation

```TypeScript
showWithAnimation(): Promise<void>
```

显示当前窗口，过程中播放动画，使用Promise异步回调，仅支持系统窗口。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation.  Possible cause: Invalid window type. Only system windows are supported. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let promise = windowClass.showWithAnimation();
promise.then(() => {
  console.info('Succeeded in showing the window with animation.');
}).catch((err: BusinessError) => {
  console.error(`Failed to show the window with animation. Cause code: ${err.code}, message: ${err.message}`);
});

```

## snapshot

```TypeScript
snapshot(callback: AsyncCallback<image.PixelMap>): void
```

获取窗口截图，使用callback异步回调。若当前窗口设置为隐私模式（可通过 [setWindowPrivacyMode]window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>) 接口设置），截图结果为白屏。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;image.PixelMap> | 是 | 回调函数。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Get pixelMap failed;  3. Internal task error. |

## snapshot

```TypeScript
snapshot(): Promise<image.PixelMap>
```

获取当前窗口截图。若当前窗口设置为隐私模式（可通过 [setWindowPrivacyMode]window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>) 接口设置），截图结果为白屏。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.PixelMap> | Promise used to return the window screenshot. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Get pixelMap failed;  3. Internal task error. |

## snapshotIgnorePrivacy

```TypeScript
snapshotIgnorePrivacy(): Promise<image.PixelMap>
```

获取当前窗口截图。即使当前窗口设置为隐私模式（可通过 [setWindowPrivacyMode]window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>) 接口设置），仍可调用本接口返回当前窗口截图。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.PixelMap> | Promise used to return the window screenshot. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.  Function snapshotIgnorePrivacy can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Create pixelMap failed;  3. Internal task error. |

## snapshotSync

```TypeScript
snapshotSync(): image.PixelMap
```

获取当前窗口截图，此接口为同步接口。若当前窗口设置为隐私模式（ [setWindowPrivacyMode]window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>) 接口设置），截图结果为白屏。 Stage模型下，该接口需要在 [loadContent()]window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>) 或[setUIContent()]window.Window.setUIContent(path: string, callback: AsyncCallback<void>)调用生效后使用。

**起始版本：** 20

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| image.PixelMap | Window screenshot. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Create pixelMap failed. |
| 1300018 | Timeout. |

## startMoving

```TypeScript
startMoving(): Promise<void>
```

开始移动窗口，使用Promise异步回调。 [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，对系统窗口、应用主窗口、应用子窗口、全局悬浮窗和模态窗口生效。非自由窗口状态下，仅对系统窗口、应用子窗 口、全局悬浮窗和模态窗口生效，应用主窗口调用该接口返回801或1300004错误码。 仅在[onTouch](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#touchevent对象说明)事件（其中，事件类型必须为 TouchType.Down）的回调方法中调用此接口才会有移动效果，成功调用此接口后，窗口将跟随鼠标或触摸点移动。 在点击拖拽场景下，若不期望在按下时触发拖拽事件，则可以在事件类型为[TouchType.Move]./@internal/component/ets/enums:TouchType（需要保证当前行为已经触发 TouchType.Down事件）时调用此接口，触发移动效果。

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300001 | Repeated operation. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed.  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. Possible cause:  Invalid window type, main windows are not supported in non-free window mode. |

## startMoving

```TypeScript
startMoving(offsetX: int, offsetY: int): Promise<void>
```

指定鼠标在窗口内的位置并移动窗口，使用Promise异步回调。 在同应用内窗口分合后，且鼠标保持按下状态直接移动新窗口，如果此时鼠标快速移动，窗口移动时鼠标可能会在窗口外。可以使用本接口指定窗口移动时鼠标在窗口内的位置，先移动窗口到鼠标位置，再开始移动窗口。 仅在[onTouch](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#touchevent对象说明)事件（其中，事件类型必须为 TouchType.Down）的回调方法中调用此接口才会有移动效果，成功调用此接口后，窗口将跟随鼠标移动。 在点击拖拽场景下，若不期望在按下时触发拖拽事件，则可以在事件类型为[TouchType.Move]./@internal/component/ets/enums:TouchType（需要保证当前行为已经触发 TouchType.Down事件）时调用此接口，触发移动效果。

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| offsetX | int | 是 | 窗口移动时预期鼠标位置相对窗口左上角的x轴偏移量，单位为px，该参数仅支持整数输入，浮点数向下取整。负值为非法参数，大于窗口宽度为非法参数，窗口宽度可以在窗口属性  [WindowProperties](arkts-window-windowproperties-i.md#WindowProperties)中获取。 |
| offsetY | int | 是 | 窗口移动时预期鼠标位置相对窗口左上角的y轴偏移量，单位为px，该参数仅支持整数输入，浮点数向下取整。负值为非法参数，大于窗口高度为非法参数，窗口高度可以在窗口属性  [WindowProperties](arkts-window-windowproperties-i.md#WindowProperties)中获取。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300001 | Repeated operation. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |

## stopMoving

```TypeScript
stopMoving(): Promise<void>
```

在窗口拖拽移动过程中，通过此接口来停止窗口移动，使用Promise异步回调。

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Window.SessionManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |

## translate

```TypeScript
translate(translateOptions: TranslateOptions): void
```

设置窗口平移参数。仅支持在[自定义系统窗口的显示与隐藏动画](docroot://windowmanager/system-window-stage-sys.md#自定义系统窗口的显示与隐藏动画)中使用。

**起始版本：** 9

**系统能力：** SystemCapability.WindowManager.WindowManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| translateOptions | TranslateOptions | 是 | 平移参数，单位为px。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 1300002 | This window state is abnormal. |
| 1300004 | Unauthorized operation. |

**示例：**

```TypeScript
let obj: window.TranslateOptions = {
  x: 100.0,
  y: 0.0,
  z: 0.0
};
try {
  windowClass.translate(obj);
} catch (exception) {
  console.error(`Failed to translate. Cause code: ${exception.code}, message: ${exception.message}`);
}

```

