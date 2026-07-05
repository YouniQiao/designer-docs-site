# FloatViewController

标准悬浮窗控制器实例。用于启动、停止标准悬浮窗以及注册回调等操作。 下列API示例中都需先使用[floatView.create()]floatView.create方法获取到标准悬浮窗控制器实例（即floatViewController），再通过此实例调用对应方法。

**Since:** 26.0.0

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { floatView } from '@kit.ArkUI';
```

## getWindowProperties

```TypeScript
getWindowProperties(): FloatViewProperties
```

获取标准悬浮窗窗口的属性。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| FloatViewProperties | 返回标准悬浮窗窗口的属性。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. Possible cause:  The float view controller object is null. |
| 1300031 | This operation is not supported on the float view in the current state.  Possible cause: The float view window has not started, has stopped, or is in an error state. |

**Example**

```TypeScript
try {
  // Obtain the properties of the float view.
  let properties: floatView.FloatViewProperties | undefined = this.floatViewController?.getWindowProperties();
  console.info('Float view properties: ' + JSON.stringify(properties));
} catch (e) {
  console.error(`Failed to get window properties. Cause:${e.code}, message:${e.message}`);
}

```

## offLimitsChange

```TypeScript
offLimitsChange(callback?: Callback<FloatViewLimits>): void
```

取消标准悬浮窗限制变化的监听事件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;FloatViewLimits> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. Possible cause:  The float view controller object is null. |

**Example**

```TypeScript
// Define the callback function for limit changes.
let onLimitsChange = (limits: floatView.FloatViewLimits) => {
  console.info('Float view limitsChange: ' + JSON.stringify(limits));
};
try {
  // Unregister the callback for listening to limit changes of the float view.
  this.floatViewController?.offLimitsChange(onLimitsChange);
} catch (e) {
  console.error(`Failed to off limitsChange float view. Cause:${e.code}, message:${e.message}`);
}

```

## offRectChange

```TypeScript
offRectChange(callback?: Callback<FloatViewRectChangeInfo>): void
```

取消标准悬浮窗矩形区域变化的监听事件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;FloatViewRectChangeInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. Possible cause:  The float view controller object is null. |

**Example**

```TypeScript
// Define the callback function for rectangular area changes.
let onRectChange = (info: floatView.FloatViewRectChangeInfo) => {
  console.info('Float view rectChange: ' + JSON.stringify(info));
};
try {
  // Unregister the callback for listening to changes in the rectangle area of the float view.
  this.floatViewController?.offRectChange(onRectChange);
} catch (e) {
  console.error(`Failed to off rectChange float view. Cause:${e.code}, message:${e.message}`);
}

```

## offStateChange

```TypeScript
offStateChange(callback?: Callback<FloatViewStateChangeInfo>): void
```

取消标准悬浮窗状态变化的监听事件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;FloatViewStateChangeInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. Possible cause:  The float view controller object is null. |

**Example**

```TypeScript
// Define the callback function for status changes.
let onStateChange = (info: floatView.FloatViewStateChangeInfo) => {
  console.info('Float view stateChange: ' + JSON.stringify(info));
};
try {
  // Unregister the callback for listening to float view state changes.
  this.floatViewController?.offStateChange(onStateChange);
} catch (e) {
  console.error(`Failed to off stateChange float view. Cause:${e.code}, message:${e.message}`);
}

```

## onLimitsChange

```TypeScript
onLimitsChange(callback: Callback<FloatViewLimits>): void
```

注册标准悬浮窗限制变化的监听事件，当限制规格变化时触发回调，例如设备折叠或者展开。不再使用时，取消监听以避免内存泄漏。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;FloatViewLimits> | Yes | 回调函数。返回当前的标准悬浮窗限制变化信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. Possible cause:  The float view controller object is null. |
| 1300030 | Repeated operations on the float view. Possible cause:  The callback has already registered. |

**Example**

```TypeScript
// Define the callback function for limit changes.
let onLimitsChange = (limits: floatView.FloatViewLimits) => {
  console.info('Float view limitsChange: ' + JSON.stringify(limits));
};
try {
  // Register the callback for listening to limit changes of the float view.
  this.floatViewController?.onLimitsChange(onLimitsChange);
} catch (e) {
  console.error(`Failed to on limitsChange float view. Cause:${e.code}, message:${e.message}`);
}

```

## onRectChange

```TypeScript
onRectChange(callback: Callback<FloatViewRectChangeInfo>): void
```

注册标准悬浮窗矩形区域（位置和大小）变化的监听事件。不再使用时，取消监听以避免内存泄漏。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;FloatViewRectChangeInfo> | Yes | 回调函数。返回当前的标准悬浮窗矩形区域变化信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. Possible cause:  The float view controller object is null. |
| 1300030 | Repeated operations on the float view. Possible cause:  The callback has already registered. |

**Example**

```TypeScript
// Define the callback function for rectangular area changes.
let onRectChange = (info: floatView.FloatViewRectChangeInfo) => {
  console.info('Float view rectChange: ' + JSON.stringify(info));
};
try {
  // Register the callback for listening to changes in the rectangle area of the float view.
  this.floatViewController?.onRectChange(onRectChange);
} catch (e) {
  console.error(`Failed to on rectChange float view. Cause:${e.code}, message:${e.message}`);
}

```

## onStateChange

```TypeScript
onStateChange(callback: Callback<FloatViewStateChangeInfo>): void
```

注册标准悬浮窗状态变化的监听事件。不再使用时，取消监听以避免内存泄漏。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;FloatViewStateChangeInfo> | Yes | 回调函数。返回当前的标准悬浮窗状态变化信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. Possible cause:  The float view controller object is null. |
| 1300030 | Repeated operations on the float view. Possible cause:  The callback has already registered. |

**Example**

```TypeScript
// Define the callback function for status changes.
let onStateChange = (info: floatView.FloatViewStateChangeInfo) => {
  console.info('Float view stateChange: ' + JSON.stringify(info));
};
try {
  // Register the callback for listening to float view state changes.
  this.floatViewController?.onStateChange(onStateChange);
} catch (e) {
  console.error(`Failed to on stateChange float view. Cause:${e.code}, message:${e.message}`);
}

```

## restoreMainWindow

```TypeScript
restoreMainWindow(wantParameters?: Record<string, Object>): Promise<void>
```

恢复标准悬浮窗的主窗口到前台显示。如果主窗口已处于前台时调用，将抬升主窗口层级。此接口只能在标准悬浮窗窗口被点击后使用。当主窗口处于PAUSED生命周期或处于多任务状态时，调用接口将抛出错误码1300032。使用Promise 异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wantParameters | Record&lt;string, Object> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. Possible cause:  The float view controller object is null. |
| 1300003 | This window manager service works abnormally. Possible cause:  Internal IPC error. |
| 1300031 | This operation is not supported on the float view in the current state.  Possible cause: The float view window is not started when restoring. |
| 1300032 | Failed to restore the main window. Possible cause:  1. User has never clicked the float view window before restore.  2. The float view window is not in the foreground.  3. The main window is in PAUSED lifecycle state.  4. The main window is in background during recent. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { floatView } from '@kit.ArkUI';

// Define the parameter for restoring the main window.
let param: Record<string, Object> = {
  'info': 'helloworld',
};
// The float view must be in the STARTED state.
try {
  // Restore the main window of the float view to display in the foreground.
  this.floatViewController?.restoreMainWindow(param).then(() => {
    console.info('Succeeded in restoring main window.');
  }).catch((err: BusinessError): void => {
    console.error(`Failed to restore main window. Cause:${err.code}, message:${err.message}`);
  });
} catch (e) {
  console.error(`Failed to restore main window. Cause:${e.code}, message:${e.message}`);
}

```

## setFloatViewVisibilityInApp

```TypeScript
setFloatViewVisibilityInApp(isVisible: boolean): Promise<void>
```

设置应用在前台时标准悬浮窗窗口是否可见。使用Promise异步回调。 创建标准悬浮窗后未调用此接口前，默认其在应用处于前台时为可见状态。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isVisible | boolean | Yes | 应用在前台时标准悬浮窗是否可见，true表示可见，false表示不可见。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. Possible cause:  The float view controller object is null. |
| 1300003 | This window manager service works abnormally. Possible cause:  Internal IPC error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { floatView } from '@kit.ArkUI';

try {
  // Set whether the float view is visible when the application is running in the foreground.
  this.floatViewController?.setFloatViewVisibilityInApp(true).then(() => {
    console.info('Succeeded in setting float view visibility in app.');
  }).catch((err: BusinessError): void => {
    console.error(`Failed to set float view visibility in app. Cause:${err.code}, message:${err.message}`);
  });
} catch (e) {
  console.error(`Failed to set float view visibility in app. Cause:${e.code}, message:${e.message}`);
}

```

## setUIContext

```TypeScript
setUIContext(path: string, storage?: LocalStorage): Promise<void>
```

根据当前工程中指定的页面路径为标准悬浮窗加载具体页面内容，通过LocalStorage传递状态属性至加载页面。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 要加载到窗口中的页面内容的路径，该路径需添加到工程的main_pages.json文件中。不支持相对路径写法，需与main_pages.json中的src取值保持一致。 |
| storage | LocalStorage | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. Possible cause:  The float view controller object is null. |
| 1300016 | Parameter error. Possible causes: Invalid path. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { floatView } from '@kit.ArkUI';

try {
  // Obtain floatViewController using floatView.create(). For details, see the floatView.create() sample.
  // Set the page content path of the float view.
  this.floatViewController?.setUIContext('pages/Index').then(() => {
    console.info('Succeeded in setting UI context.');
  }).catch((err: BusinessError): void => {
    console.error(`Failed to set UI context. Cause:${err.code}, message:${err.message}`);
  });
} catch (e) {
  console.error(`Failed to set UI context. Cause:${e.code}, message:${e.message}`);
}

```

## setUIContextByName

```TypeScript
setUIContextByName(name: string, storage?: LocalStorage): Promise<void>
```

根据指定路由页面名称为当前窗口加载[命名路由](docroot://ui/arkts-routing.md#命名路由)页面，通过LocalStorage传递状态属性至加载页面，使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 命名路由页面的名称。 |
| storage | LocalStorage | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. Possible cause:  The float view controller object is null. |
| 1300016 | Parameter error. Possible causes: Invalid name. |

**Example**

```TypeScript
// Index.ets
import { BusinessError } from '@kit.BasicServicesKit';
import { entryName } from './Hello'; // Import the named route page.
import { floatView } from '@kit.ArkUI';

@Entry
@Component
struct Index {
  private floatViewController: floatView.FloatViewController | undefined = undefined;
  // Create a controller.
  // ...
  public setUIContextByName(): void {
    try {
      // Set the page content of the float view based on the named route page.
      this.floatViewController?.setUIContextByName(entryName).then(() => {
        console.info('Succeeded in loading the content.');
      }).catch((err: BusinessError): void => {
        console.error(`Failed to load the content. Cause code: ${err.code}, message: ${err.message}`);
      });
    } catch (e) {
      console.error(`Failed to load the content. Cause code: ${e.code}, message: ${e.message}`);
    }
  }
}


// Hello.ets
export const entryName : string = 'Hello';
@Entry({routeName: entryName, useSharedStorage: true})
@Component
export struct Hello {
  @State message: string = 'Hello World'
  build() {
    Row() {
      Column() {
        Text(this.message)
      }
      .width('100%')
    }
    .height('100%')
  }
}

```

## setWindowSize

```TypeScript
setWindowSize(size: window.Size): Promise<void>
```

设置标准悬浮窗窗口大小。建议先调用[getFloatViewLimits]floatView.getFloatViewLimits接口获取推荐的宽高范围和宽高比范围，再根据推荐值调用本接口。窗口实际大小变化可通 过[onRectChange]floatView.FloatViewController.onRectChange(callback: Callback<FloatViewRectChangeInfo>)接口监 听。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | window.Size | Yes | 表示窗口的大小。建议大小满足[getFloatViewLimits]floatView.getFloatViewLimits接口返回的限制。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. Possible cause:  The float view controller object is null. |
| 1300003 | This window manager service works abnormally. Possible cause:  Internal IPC error. |
| 1300016 | Parameter error.  Possible cause: The value of the size is less than or equal to 0. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { floatView, window } from '@kit.ArkUI';

// Set the window size.
let size: window.Size = {
  width: 400,
  height: 600
};
try {
  // Set the size of the float view.
  this.floatViewController?.setWindowSize(size).then(() => {
    console.info('Succeeded in setting window size.');
  }).catch((err: BusinessError): void => {
    console.error(`Failed to set window size. Cause:${err.code}, message:${err.message}`);
  });
} catch (e) {
  console.error(`Failed to set window size. Cause:${e.code}, message:${e.message}`);
}

```

## start

```TypeScript
start(): Promise<void>
```

启动标准悬浮窗窗口。接口返回不表示start流程结束，需要通过 [onStateChange]floatView.FloatViewController.onStateChange(callback: Callback<FloatViewStateChangeInfo>)接 口监听到STARTED回调时判断启动成功。建议在调用[setUIContext()]floatView.FloatViewController.setUIContext或 [setUIContextByName()]floatView.FloatViewController.setUIContextByName后调用start()。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.FLOAT_VIEW

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. Possible cause:  The application does not have the permission required to call the API. |
| 1300002 | This window state is abnormal. Possible cause:  The float view controller object is null. |
| 1300003 | This window manager service works abnormally. Possible cause:  Internal IPC error. |
| 1300030 | Repeated operations on the float view. Possible cause:  The float view is starting or has already started. |
| 1300031 | The float view state does not support this operation. Possible cause:  The float view is stopping. |
| 1300033 | Failed to start float view. Possible causes:  1. Start multiple float views.  2. The main window of context is not foreground. |
| 1300034 | This operation conflicts with other floating windows. Possible cause:  App has already started floating ball or pip window. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { floatView } from '@kit.ArkUI';

try {
  // Start the float view.
  this.floatViewController?.start().then(() => {
    console.info('Succeeded in starting float view.');
  }).catch((err: BusinessError): void => {
    console.error(`Failed to start float view. Cause:${err.code}, message:${err.message}`);
  });
} catch (e) {
  console.error(`Failed to start float view. Cause:${e.code}, message:${e.message}`);
}

```

## stop

```TypeScript
stop(): Promise<void>
```

停止标准悬浮窗窗口。接口返回不表示stop流程结束，需要通过 [onStateChange]floatView.FloatViewController.onStateChange(callback: Callback<FloatViewStateChangeInfo>)接 口监听到STOPPED回调时判断停止成功。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. Possible cause:  The float view controller object is null. |
| 1300003 | This window manager service works abnormally. Possible cause:  Internal IPC error. |
| 1300030 | Repeated operations on the float view. Possible cause:  The float view is stopping or has already stopped. |
| 1300031 | This operation is not supported on the float view in the current state.  Possible cause: The float view window is not started. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { floatView } from '@kit.ArkUI';

try {
  // Stop the float view.
  this.floatViewController?.stop().then(() => {
    console.info('Succeeded in stopping float view.');
  }).catch((err: BusinessError): void => {
    console.error(`Failed to stop float view. Cause:${err.code}, message:${err.message}`);
  });
} catch (e) {
  console.error(`Failed to stop float view. Cause:${e.code}, message:${e.message}`);
}

```

## switchTemplate

```TypeScript
switchTemplate(templateProperty: TemplateProperty): Promise<void>
```

切换标准悬浮窗的模板并改变其窗口尺寸。建议先调用[getFloatViewLimits]floatView.getFloatViewLimits接口获取目标模板类型推荐的宽高范围和宽高比范围，再根据推荐值调用本 接口。窗口实际大小变化可通过 [onRectChange]floatView.FloatViewController.onRectChange(callback: Callback<FloatViewRectChangeInfo>)接口监听 。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| templateProperty | TemplateProperty | Yes | 表示需要切换的窗口模板类型及大小。建议大小满足  [getFloatViewLimits]floatView.getFloatViewLimits接口返回的限制。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. Possible cause:  The float view controller object is null. |
| 1300003 | This window manager service works abnormally. Possible cause:  Internal IPC error. |
| 1300016 | Parameter error. Possible cause:  1. Invalid template type.  2. The value of the size is less than or equal to 0. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { floatView, window } from '@kit.ArkUI';

// Set the size of the new window.
let newSize: window.Size = {
  width: 800,
  height: 100
};
// Set the template property.
let templateProperty: floatView.TemplateProperty = {
  templateType: floatView.FloatViewTemplateType.HORIZONTAL_BAR,
  size: newSize
}
try {
  // Switch the template of the float view and change the window size.
  this.floatViewController?.switchTemplate(templateProperty).then(() => {
    console.info('Succeeded in switching window type and size.');
  }).catch((err: BusinessError): void => {
    console.error(`Failed to switch window type and size. Cause:${err.code}, message:${err.message}`);
  });
} catch (e) {
  console.error(`Failed to switch window type and size. Cause:${e.code}, message:${e.message}`);
}

```

