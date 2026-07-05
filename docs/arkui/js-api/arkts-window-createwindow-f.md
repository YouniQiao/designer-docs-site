# createWindow

## createWindow

```TypeScript
function createWindow(config: Configuration, callback: AsyncCallback<Window>): void
```

创建子窗口或者系统窗口，使用callback异步回调。 非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，子窗口创建后默认是 [沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)。 自由窗口状态下，子窗口参数[decorEnabled](arkts-window-configuration-i.md#Configuration)为false时，子窗口创建后为沉浸式布局；子窗口参数decorEnabled为true，子窗口 创建后为非沉浸式布局。

**Since:** 9

**Required permissions:** 

- API version12 and later: ohos.permission.SYSTEM_FLOAT_WINDOW

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | Configuration | Yes | 创建窗口时的参数。 |
| callback | AsyncCallback&lt;Window> | Yes | 回调函数。返回当前创建的窗口对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported.createWindow can not work correctly due to limited device  capabilities. [since 12] |
| 1300001 | Repeated operation.  Possible cause: The window has been created and can not be created again. |
| 1300002 | This window state is abnormal.  Possible cause: Invalid parent window type, parent window cannot be a subWindow. [since 12] |
| 1300004 | Unauthorized operation. Possible cause: The window type in the configuration is  invalid. [since 12] |
| 1300006 | This window context is abnormal. |
| 1300008 | The display device is abnormal. [since 9 - 16] |
| 1300009 | The parent window is invalid. |

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage): void {
    let windowClass: window.Window | undefined = undefined;
    let config: window.Configuration = {
      name: "test",
      windowType: window.WindowType.TYPE_DIALOG,
      ctx: this.context
    };
    try {
      window.createWindow(config, (err: BusinessError, data) => {
        const errCode: number = err.code;
        if (errCode) {
          console.error(`Failed to create the window. Cause code: ${err.code}, message: ${err.message}`);
          return;
        }
        windowClass = data;
        console.info('Succeeded in creating the window. Data: ' + JSON.stringify(data));
        windowClass.resize(500, 1000);
      });
    } catch (exception) {
      console.error(`Failed to create the window. Cause code: ${exception.code}, message: ${exception.message}`);
    }
  }
}

```

## createWindow

```TypeScript
function createWindow(config: Configuration): Promise<Window>
```

创建子窗口或者系统窗口，使用Promise异步回调。 非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，子窗口创建后默认是 [沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)。 自由窗口状态下，子窗口参数[decorEnabled](arkts-window-configuration-i.md#Configuration)为false时，子窗口创建后为沉浸式布局；子窗口参数decorEnabled为true，子窗口 创建后为非沉浸式布局。

**Since:** 9

**Required permissions:** 

- API version12 and later: ohos.permission.SYSTEM_FLOAT_WINDOW

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | Configuration | Yes | 创建窗口时的参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Window> | Promise对象。返回当前创建的窗口对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported.createWindow can not work correctly due to limited device  capabilities. [since 12] |
| 1300001 | Repeated operation.  Possible cause: The window has been created and can not be created again. |
| 1300002 | This window state is abnormal.  Possible cause: Invalid parent window type, parent window cannot be a subWindow. [since 12] |
| 1300004 | Unauthorized operation. Possible cause: The window type in the configuration is  invalid. [since 12] |
| 1300006 | This window context is abnormal. |
| 1300008 | The display device is abnormal. [since 9 - 16] |
| 1300009 | The parent window is invalid. |

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage): void {
    let windowClass: window.Window | undefined = undefined;
    let config: window.Configuration = {
      name: "test",
      windowType: window.WindowType.TYPE_DIALOG,
      ctx: this.context
    };
    try {
      window.createWindow(config).then((value:window.Window) => {
        console.info('Succeeded in creating the window. Data: ' + JSON.stringify(value));
        windowClass = value;
        windowClass.resize(500, 1000);
      }).catch((err:BusinessError)=> {
        console.error(`Failed to create the window. Cause code: ${err.code}, message: ${err.message}`);
      });
    } catch (exception) {
      console.error(`Failed to create the window. Cause code: ${exception.code}, message: ${exception.message}`);
    }
  }
}

```

