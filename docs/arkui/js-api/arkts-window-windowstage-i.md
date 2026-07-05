# WindowStage

窗口管理器。管理各个基本窗口单元，即[Window]@ohos.window实例。 下列API示例中都需在[onWindowStageCreate()](../../apis-ability-kit/arkts-apis/arkts-uiability-c.md#onWindowStageCreate)函数中使用WindowStage 的实例调用对应方法。

**Since:** 9

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## createSubWindow

```TypeScript
createSubWindow(name: string): Promise<Window>
```

创建该WindowStage实例下的子窗口，使用Promise异步回调。 子窗口创建后默认是[沉浸式布局](../../windowmanager/window-terminology.md#沉浸式布局)。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 子窗口的名字。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Window> | Promise对象。返回当前WindowStage下的子窗口对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: The subWindow has been created and can not be created again. |
| 1300005 | This window stage is abnormal. [since 9 - 9] |

## createSubWindow

```TypeScript
createSubWindow(name: string, callback: AsyncCallback<Window>): void
```

创建该WindowStage实例下的子窗口，使用callback异步回调。 子窗口创建后默认是[沉浸式布局](../../windowmanager/window-terminology.md#沉浸式布局)。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 子窗口的名字。 |
| callback | AsyncCallback&lt;Window> | Yes | 回调函数。返回当前WindowStage下的子窗口对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: The subWindow has been created and can not be created again. |
| 1300005 | This window stage is abnormal. [since 9 - 9] |

## createSubWindowWithOptions

```TypeScript
createSubWindowWithOptions(name: string, options: SubWindowOptions): Promise<Window>
```

创建该WindowStage实例下的子窗口，使用Promise异步回调。 非[自由窗口](../../windowmanager/window-terminology.md#自由窗口)状态下，子窗口创建后默认是[沉浸式布局](../../windowmanager/window-terminology.md#沉浸式布局)。 自由窗口状态下，子窗口参数[decorEnabled](arkts-apis-window-i.md#subwindowoptions11)为false时，子窗口创建后为沉浸式布局；子窗口参数decorEnabled为true，子窗口创建后为非沉浸式布局。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 子窗口的名字。 |
| options | SubWindowOptions | Yes | 子窗口参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Window> | Promise used to return the subwindow. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. The subWindow has been created and can not be created again. |
| 1300005 | This window stage is abnormal. |

## disableWindowDecor

```TypeScript
disableWindowDecor(): void
```

禁止窗口装饰。 禁止窗口装饰后，当主窗口进入全屏沉浸状态时，此时鼠标Hover到上方窗口标题栏热区上会显示悬浮标题栏。若想禁用悬浮标题栏显示，请使用 [setTitleAndDockHoverShown()](arkts-window-window-i.md#setTitleAndDockHoverShown)接口。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 1300002 | This window state is abnormal. |
| 1300005 | This window stage is abnormal. |

**Example**

```TypeScript
// EntryAbility.ets
import { UIAbility, Want } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  // ...

  onWindowStageCreate(windowStage: window.WindowStage) {
    console.info('disableWindowDecor');
    windowStage.disableWindowDecor();
  }
};

```

## getMainWindow

```TypeScript
getMainWindow(): Promise<Window>
```

获取该WindowStage实例下的主窗口，使用Promise异步回调。 调用该接口前，建议先通过[loadContent](../apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)方法或者[setUIContent](arkts-apis-window-Window.md#setuicontent9-1)方法完成页面加载。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Window> | Promise对象。返回当前WindowStage下的主窗口对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300005 | This window stage is abnormal. |

## getMainWindow

```TypeScript
getMainWindow(callback: AsyncCallback<Window>): void
```

获取该WindowStage实例下的主窗口，使用callback异步回调。 调用该接口前，建议先通过[loadContent](../apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)方法或者[setUIContent](arkts-apis-window-Window.md#setuicontent9-1)方法完成页面加载。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Window> | Yes | 回调函数。返回当前WindowStage下的主窗口对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300005 | This window stage is abnormal. |

## getMainWindowSync

```TypeScript
getMainWindowSync(): Window
```

获取该WindowStage实例下的主窗口，该接口为同步调用。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Window | 返回当前WindowStage下的主窗口对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300005 | This window stage is abnormal. |

## getSubWindow

```TypeScript
getSubWindow(): Promise<Array<Window>>
```

获取该WindowStage实例下的所有子窗口，使用Promise异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Window>> | Promise对象。返回当前WindowStage下的所有子窗口对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300005 | This window stage is abnormal. [since 9 - 9] |

## getSubWindow

```TypeScript
getSubWindow(callback: AsyncCallback<Array<Window>>): void
```

获取该WindowStage实例下的所有子窗口，使用callback异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;Window>> | Yes | 回调函数。返回当前WindowStage下的所有子窗口对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. [since 10] |
| 1300005 | This window stage is abnormal. [since 9 - 9] |

## isWindowRectAutoSave

```TypeScript
isWindowRectAutoSave(): Promise<boolean>
```

判断当前主窗口是否已经启用尺寸记忆，使用Promise异步回调。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示当前窗口启用尺寸记忆，返回false表示当前窗口禁用尺寸记忆。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. [since 20] |

## loadContent

```TypeScript
loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void
```

根据当前工程中指定的页面路径为窗口加载具体页面内容，通过LocalStorage传递状态属性给加载的页面，使用callback异步回调。 建议在UIAbility启动过程中使用该接口，重复调用将先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 要加载到窗口中的页面内容的路径，该路径需添加到工程的main_pages.json文件中。不支持相对路径写法，需与main_pages.json中的src取值保持一致。 |
| storage | LocalStorage | Yes | 页面级UI状态存储单元，这里用于为加载到窗口的页面内容传递状态属性。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Invalid path parameter. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300005 | This window stage is abnormal. [since 9 - 9] |

## loadContent

```TypeScript
loadContent(path: string, storage?: LocalStorage): Promise<void>
```

根据当前工程中指定的页面路径为WindowStage的主窗口加载具体页面内容，通过LocalStorage传递状态属性给加载的页面，使用Promise异步回调。 建议在UIAbility启动过程中调用该接口，重复调用将首先销毁旧的页面内容（即UIContent）再加载新页面内容，请谨慎使用。当前UI的执行上下文可能不明确，所以不建议在回调函数中做UI相关的操作。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 要加载到窗口中的页面内容的路径，该路径需添加到工程的main_pages.json文件中。不支持相对路径写法，需与main_pages.json中的src取值保持一致。 |
| storage | LocalStorage | No | 页面级UI状态存储单元，为加载到窗口的页面内容传递状态属性，默认值为空。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300005 | This window stage is abnormal. [since 9 - 9] |

## loadContent

```TypeScript
loadContent(path: string, callback: AsyncCallback<void>): void
```

为当前窗口加载具体页面内容，使用callback异步回调。 建议在UIAbility启动过程中使用该接口，多次调用该接口会先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 要加载到窗口中的页面内容的路径，Stage模型下该路径需添加到工程的main_pages.json文件中，FA模型下该路径需添加到工程的config.json文件中。不支持相对路径写法，需与main_pages.json或config.json中的src取值保持一致。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Invalid path parameter. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |
| 1300005 | This window stage is abnormal. [since 9 - 9] |

## loadContentByName

```TypeScript
loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void
```

Loads content by named router

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | name of the page to which the content will be loaded. |
| storage | LocalStorage | Yes | The data object shared within the content instance loaded by the window. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |

## loadContentByName

```TypeScript
loadContentByName(name: string, callback: AsyncCallback<void>): void
```

根据指定路由页面名称为当前窗口加载[命名路由](../../ui/arkts-routing.md#命名路由)页面，使用callback异步回调。 建议在UIAbility启动过程中使用该接口，重复调用该接口将先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | name of the page to which the content will be loaded. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |

## loadContentByName

```TypeScript
loadContentByName(name: string, storage?: LocalStorage): Promise<void>
```

Loads content by named router

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | name of the page to which the content will be loaded. |
| storage | LocalStorage | No | The data object shared within the content instance loaded by the window. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |

## off

```TypeScript
off(eventType: 'windowStageEvent', callback?: Callback<WindowStageEventType>): void
```

关闭WindowStage生命周期变化的监听。 用于关闭[on('windowStageEvent')](#onwindowstageevent9)接口对WindowStage生命周期变化的监听。 如果没有调用[on('windowStageEvent')](#onwindowstageevent9)接口开启监听就关闭，程序正常执行不会抛出异常。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'windowStageEvent' | Yes | 监听事件，固定为'windowStageEvent'，即WindowStage生命周期变化事件。 |
| callback | Callback&lt;WindowStageEventType> | No | 回调函数。返回当前的WindowStage生命周期状态。若传入参数，则关闭该监听。若未传入参数，则关闭所有WindowStage生命周期变化的监听。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Incorrect parameter types;  2. Parameter verification failed. |
| 1300002 | This window state is abnormal. |
| 1300005 | This window stage is abnormal. |

## off

```TypeScript
off(eventType: 'windowStageLifecycleEvent', callback?: Callback<WindowStageLifecycleEventType>): void
```

关闭WindowStage生命周期变化的监听。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'windowStageLifecycleEvent' | Yes | 监听事件，固定为'windowStageLifecycleEvent'，即WindowStage生命周期变化事件。 |
| callback | Callback&lt;WindowStageLifecycleEventType> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300005 | This window stage is abnormal. |

## off

```TypeScript
off(eventType: 'windowStageClose', callback?: Callback<void>): void
```

关闭主窗口关闭事件的监听。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'windowStageClose' | Yes | 监听事件，固定为'windowStageClose'，即关闭主窗口关闭事件的监听。 |
| callback | Callback&lt;void> | No | 回调函数。当点击主窗口右上角关闭按钮事件发生时的回调。该回调函数不返回任何参数。  回调函数内部逻辑需要有boolean类型的返回值，该返回值决定当前主窗是否继续关闭，true表示不关闭，false表示关闭。如果传入  参数，则关闭该监听。如果未传入参数，则关闭所有主窗口关闭的监听。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |

## offWindowStageClose

```TypeScript
offWindowStageClose(callback?: Callback<void, boolean>): void
```

关闭主窗口关闭事件的监听。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void, boolean> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## offWindowStageEvent

```TypeScript
offWindowStageEvent(callback?: Callback<WindowStageEventType>): void
```

关闭主窗口关闭事件的监听。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;WindowStageEventType> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. |
| 1300005 | This window stage is abnormal. |

## offWindowStageLifecycleEvent

```TypeScript
offWindowStageLifecycleEvent(callback?: Callback<WindowStageLifecycleEventType>): void
```

关闭WindowStage生命周期变化的监听。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;WindowStageLifecycleEventType> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300005 | This window stage is abnormal. |

## on

```TypeScript
on(eventType: 'windowStageEvent', callback: Callback<WindowStageEventType>): void
```

开启WindowStage生命周期变化的监听。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'windowStageEvent' | Yes | 监听事件，固定为'windowStageEvent'，即WindowStage生命周期变化事件。 |
| callback | Callback&lt;WindowStageEventType> | Yes | 回调函数。返回当前的WindowStage生命周期状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 1300002 | This window state is abnormal. |
| 1300005 | This window stage is abnormal. |

## on

```TypeScript
on(eventType: 'windowStageLifecycleEvent', callback: Callback<WindowStageLifecycleEventType>): void
```

开启WindowStage生命周期变化的监听。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'windowStageLifecycleEvent' | Yes | 监听事件，固定为'windowStageLifecycleEvent'，即WindowStage生命周期变化事件。 |
| callback | Callback&lt;WindowStageLifecycleEventType> | Yes | 回调函数。返回当前的WindowStage生命周期状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300005 | This window stage is abnormal. |

## on

```TypeScript
on(eventType: 'windowStageClose', callback: Callback<void>): void
```

开启点击主窗三键区的关闭按钮监听事件。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'windowStageClose' | Yes | The value is fixed at 'windowStageClose', indicating the window stage  close event. |
| callback | Callback&lt;void> | Yes | Callback function requires a boolean return value to determine whether to  close the current main window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |

## onWindowStageClose

```TypeScript
onWindowStageClose(callback: Callback<void, boolean>): void
```

开启点击主窗三键区的关闭按钮监听事件。点击主窗口的三键区域的关闭键时触发该回调函数，将不执行注册的[UIAbility.onPrepareToTerminate](../apis-ability-kit/js-apis-app-ability-uiAbility.md#onpreparetoterminate10)生命周期回调函数。 当重复注册窗口关闭事件的监听时，最后一次注册成功的监听事件生效。 触发的回调函数是同步执行，主窗口的异步关闭事件监听参考[on('windowWillClose')](arkts-apis-window-Window.md#onwindowwillclose15)方法。 如果存在[on('windowWillClose')](arkts-apis-window-Window.md#onwindowwillclose15)监听事件，只响应[on('windowWillClose')](arkts-apis-window-Window.md#onwindowwillclose15)接口。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void, boolean> | Yes | 监听事件，固定为'windowStageClose'，即开启主窗三键区的关闭按钮监听。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |

## onWindowStageEvent

```TypeScript
onWindowStageEvent(callback: Callback<WindowStageEventType>): void
```

开启WindowStage生命周期变化的监听。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;WindowStageEventType> | Yes | 监听事件，固定为'windowStageEvent'，即WindowStage生命周期变化事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. |
| 1300005 | This window stage is abnormal. |

## onWindowStageLifecycleEvent

```TypeScript
onWindowStageLifecycleEvent(callback: Callback<WindowStageLifecycleEventType>): void
```

关闭WindowStage生命周期变化的监听。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;WindowStageLifecycleEventType> | Yes | 回调函数。返回当前的WindowStage生命周期状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300005 | This window stage is abnormal. |

## releaseUIContent

```TypeScript
releaseUIContent(): Promise<void>
```

释放

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value, indicating successful completion.  Throws exception if window state is abnormal. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal.  Possible cause: The window is not created or destroyed. |

## removeImageForRecent

```TypeScript
removeImageForRecent(): Promise<void>
```

移除应用设置的在多任务中和Dock栏悬停时显示的图片，下次进多任务查看应用卡片时生效，使用Promise异步回调。

**Since:** 22

**Required permissions:** 

- API version26.0.0 and later: ohos.permission.MANAGE_RECENT_SNAPSHOT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have  the permission required or a non-system application calls the API. [since 26.0.0] |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 22 - 24] |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |

## removeStartingWindow

```TypeScript
removeStartingWindow(): Promise<void>
```

支持应用控制启动页消失时机。 此接口只对应用主窗口生效，且需要在module.json5配置文件abilities标签中的metadata标签下配置"enable.remove.starting.window"为"true"才会生效。 在标签配置为"true"的情况下，系统提供了启动页超时保护机制，若5s内未调用此接口，系统将自动移除启动页。 若标签配置为"false"或未配置标签，则此接口不生效，启动页将会在应用首帧渲染完成后自动移除。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window stage is not created or destroyed;  2. The main window is not created or destroyed;  3. Internal task error. |
| 1300003 | This window manager service works abnormally. |

## setCustomDensity

```TypeScript
setCustomDensity(density: number): void
```

支持应用主窗口自定义其显示大小缩放系数。 已创建的子窗和系统窗口不会立即跟随主窗的customDensity变化重新布局，而是在子窗或系统窗口下一次位置、大小、系统缩放大小等 窗口布局信息变化时跟随主窗的customDensity变化重新布局。 当存在同时使用该接口和setDefaultDensityEnabled(true)的情况时，以最后调用的设置效果为准。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| density | number | Yes | 自定义显示大小缩放系数。该参数为浮点数，取值范围为[0.5, 4.0]或-1.0。4.0表示窗口可显示的  最大显示大小缩放系数，-1.0表示窗口使用系统显示大小缩放系数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300005 | This window stage is abnormal. |

## setCustomDensity

```TypeScript
setCustomDensity(density: double, applyToSubWindow?: boolean): void
```

支持应用主窗口自定义其显示大小缩放系数。 已创建的子窗和系统窗口不会立即跟随主窗的customDensity变化重新布局，而是在子窗或系统窗口下一次位置、大小、系统缩放大小等 窗口布局信息变化时跟随主窗的customDensity变化重新布局。 当存在同时使用该接口和setDefaultDensityEnabled(true)的情况时，以最后调用的设置效果为准。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| density | double | Yes | 自定义显示大小缩放系数。该参数为浮点数，取值范围为[0.5, 4.0]或-1.0。4.0表示窗口可显示的  最大显示大小缩放系数，-1.0表示窗口使用系统显示大小缩放系数。 |
| applyToSubWindow | boolean | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The main window is not created or destroyed. |
| 1300005 | This window stage is abnormal.  Possible cause: The window stage is not created or destroyed. |

## setDefaultDensityEnabled

```TypeScript
setDefaultDensityEnabled(enabled: boolean): void
```

设置应用主窗口是否使用系统默认Density，子窗和系统窗口会跟随主窗生效。调用此接口前，需先调用WindowStage.loadContent()初始化布局，确保接口调用时序正确。 不调用此接口进行设置，则表示不使用系统默认Density。 不使用系统默认Density时，若调用过setCustomDensity()，则窗口会跟随用户自定义的显示大小变化重新布局，否则跟随系统显示大小变化重新布局。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | 是否设置应用使用系统默认Density。true表示使用系统默认Density，窗口不跟随系统显示大小变化重新布局；false表示不使用系统默认Density，窗口跟随系统显示大小变化重新布局。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: The main window is not created or destroyed. |
| 1300005 | This window stage is abnormal.  Possible cause: The window stage is not created or destroyed. |

## setImageForRecent

```TypeScript
setImageForRecent(imageResource: long | image.PixelMap, value: ImageFit): Promise<void>
```

设置应用在多任务中和Dock栏悬停时显示的图片，使用Promise异步回调。 > **说明：** > > 调用该接口前，建议先通过[loadContent](#loadcontent9)方法或者[setUIContent](arkts-apis-window-Window.md#setuicontent9-1) > 方法完成页面加载。如果应用窗口未完成页面加载就直接调用该接口，功能将不会生效。此时多任务中只显示应用启动页。

**Since:** 22

**Required permissions:** 

- API version26.0.0 and later: ohos.permission.MANAGE_RECENT_SNAPSHOT

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| imageResource | long \| image.PixelMap | Yes | 应用自定义的图片资源，可传入资源id或PixelMap位图。传入资源id时，  图片资源需放在resources/base/media目录下，通过$r资源访问方式获取对应图片的资源id，这里以获取startIcon图片的资源id  为例给出示意：$r("app.media.startIcon").id。 |
| value | ImageFit | Yes | 应用自定义图片的填充方式。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have  the permission required or a non-system application calls the API. [since 26.0.0] |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 22 - 24] |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed.  2. The WindowStage is running in the background.  3. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300016 | Parameter error. Possible cause:  1. Invalid parameter range. 2. Invalid parameter length. |

## setImageForRecent

```TypeScript
setImageForRecent(imgResourceId: number, value: ImageFit): Promise<void>
```

设置应用在多任务中和Dock栏悬停时显示的图片，使用Promise异步回调。 > **说明：** > > 调用该接口前，建议先通过[loadContent](#loadcontent9)方法或者[setUIContent](arkts-apis-window-Window.md#setuicontent9-1) > 方法完成页面加载。如果应用窗口未完成页面加载就直接调用该接口，功能将不会生效。此时多任务中只显示应用启动页。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| imgResourceId | number | Yes | 应用自定义图片的资源id，图片资源需放在resources/base/media目录下，通过`$r`资源访问方式获取对应图片的资源id，这里以获取  startIcon图片的资源id为例给出示意：`$r("app.media.startIcon").id`。 |
| value | ImageFit | Yes | 应用自定义图片的填充方式。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300016 | Parameter error. Possible cause:  1. Invalid parameter range. 2. Invalid parameter length. 3. Incorrect parameter format. |

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  // ...

  onWindowStageCreate(windowStage: window.WindowStage) {
    let imgResourceId = $r("app.media.startIcon").id
    try {
      let promise = windowStage.setImageForRecent(imgResourceId, ImageFit.Fill);
      promise.then(() => {
        console.info(`Succeeded in setting image for recent`);
      }).catch((err: BusinessError) => {
        console.error(`Failed to set image for recent. Cause code: ${err.code}, message: ${err.message}`);
      });
    } catch (exception) {
      console.error(`Failed to set image for recent.`);
    }
  }
};

```

## setShowOnLockScreen

```TypeScript
setShowOnLockScreen(showOnLockScreen: boolean): void
```

设置应用显示在锁屏之上。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| showOnLockScreen | boolean | Yes | 是否设置应用显示在锁屏之上。true表示显示在锁屏之上；false表示不显示在锁屏之上。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 1300002 | This window state is abnormal. |
| 1300005 | This window stage is abnormal. |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |

**Example**

```TypeScript
// EntryAbility.ets
import { UIAbility } from '@kit.AbilityKit';

export default class EntryAbility extends UIAbility {
  // ...

  onWindowStageCreate(windowStage: window.WindowStage) {
    console.info('onWindowStageCreate');
    try {
      windowStage.setShowOnLockScreen(true);
    } catch (exception) {
      console.error(`Failed to show on lockscreen. Cause code: ${exception.code}, message: ${exception.message}`);
    }
  }
};

```

## setSupportedWindowModes

```TypeScript
setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>): Promise<void>
```

设置主窗的窗口支持模式，使用Promise异步回调。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| supportedWindowModes | Array&lt;bundleManager.SupportWindowMode> | Yes | 设置主窗的窗口支持模式。  - FULL_SCREEN：支持全屏模式。 - FLOATING：支持自由悬浮窗口模式。  - SPLIT：支持分屏模式。需要配合FULL_SCREEN或FLOATING一起使用，不支持仅配置SPLIT。  注：数组中SupportWindowMode字段取值不应该与该UIAbility对应的  [module.json5配置文件][module.json5 file](docroot://quick-start/module-configuration-file.md)中  [abilities标签](docroot://quick-start/module-configuration-file.md#abilities)的supportWindowMode字段取值或者  [StartOptions](../../apis-ability-kit/arkts-apis/arkts-startoptions-c.md#StartOptions)的  supportWindowModes属性取值冲突。当取值冲突时，最终以该参数设置的窗口支持模式为准。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed.  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |

## setSupportedWindowModes

```TypeScript
setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>, grayOutMaximizeButton: boolean): Promise<void>
```

设置主窗的窗口支持模式，并提供最大化按钮置灰功能，使用Promise异步回调。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| supportedWindowModes | Array&lt;bundleManager.SupportWindowMode> | Yes | 设置主窗的窗口支持模式。  - FULL_SCREEN：支持全屏模式。 - FLOATING：支持自由悬浮窗口模式。  - SPLIT：支持分屏模式。需要配合FULL_SCREEN或FLOATING一起使用，不支持仅配置SPLIT。  注：数组中SupportWindowMode字段取值不应该与该UIAbility对应的  [module.json5配置文件][module.json5 file](docroot://quick-start/module-configuration-file.md)中  [abilities标签](docroot://quick-start/module-configuration-file.md#abilities)的supportWindowMode字段取值或者  [StartOptions](../../apis-ability-kit/arkts-apis/arkts-startoptions-c.md#StartOptions)的  supportWindowModes属性取值冲突。当取值冲突时，最终以该参数设置的窗口支持模式为准。 |
| grayOutMaximizeButton | boolean | Yes | 是否显示并将主窗口的最大化按钮置灰  true表示显示并将主窗口的最大化按钮置灰，此时最大化按钮不可用；false表示不显示主窗口的最大化按钮。  此参数配置仅在supportedWindowModes不支持FULL_SCREEN时生效。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.  Function setSupportedWindowModes can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal. Possible cause:  1. The window is not created or destroyed.  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |
| 1300016 | Parameter error. Possible cause:  1. Invalid parameter range.  2. Invalid parameter length.  3. Incorrect parameter format. |

## setWindowModal

```TypeScript
setWindowModal(isModal: boolean): Promise<void>
```

Set the application modality of the windowStage.

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isModal | boolean | Yes | Enable the window modal if true, otherwise means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300005 | This window stage is abnormal. Possible cause:  The window is not created or destroyed. [since 20] |

## setWindowRectAutoSave

```TypeScript
setWindowRectAutoSave(enabled: boolean): Promise<void>
```

设置是否启用最后关闭的主窗尺寸的记忆功能，使用Promise异步回调。 启用记忆功能后，在同一个UIAbility下，记忆最后关闭的主窗口的尺寸；此主窗口再次启动时，以记忆的尺寸按照规则进行打开。 层叠规则：1、当前实例是自由窗口时，打开下一实例窗口层叠时，大小要跟随。2、当前实例是最大化或全屏窗口时，打开下一个实例窗 口层叠时，保持最大化。 记忆规则： |上一次窗口状态|记忆规则| |-------------|-------| |自由窗口|保留自由窗口的大小/位置，超出工作区回弹| |二分屏窗口|保留二分屏之前自由窗口的大小/位置| |最大化窗口|保留最大化| |沉浸式窗口|保留沉浸式之前自由窗口的大小/位置| |最小化窗口|保留最小化之前自由窗口的大小/位置|

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | 设置是否启用主窗尺寸的记忆功能，true为启用，false为不启用。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |

## setWindowRectAutoSave

```TypeScript
setWindowRectAutoSave(enabled: boolean, isSaveBySpecifiedFlag: boolean): Promise<void>
```

设置是否启用主窗的尺寸记忆功能，使用Promise异步回调。 在同一个UIAbility下，可记忆最后关闭的主窗口尺寸，也可针对每个主窗口尺寸单独进行记忆。只有在UIAbility启动模式为 specified，且isSaveBySpecifiedFlag设置为true时，才能针对每个主窗口尺寸进行单独记忆。 启用记忆功能后，记忆主窗口关闭时的尺寸；对应主窗口再次启动时，以记忆的尺寸按照规则进行打开。 记忆规则： |上一次窗口状态|记忆规则| |-------------|-------| |自由窗口|保留自由窗口的大小/位置，超出工作区回弹。| |二分屏窗口|保留二分屏之前自由窗口的大小/位置。| |最大化窗口|保留最大化。| |沉浸式窗口|保留沉浸式之前自由窗口的大小/位置。| |最小化窗口|保留最小化之前自由窗口的大小/位置。|

**Since:** 17

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Enable the window rect auto-save if true, otherwise means the opposite. |
| isSaveBySpecifiedFlag | boolean | Yes | Enable the specifiedFlag if true, otherwise means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported.  Function setWindowRectAutoSave can not work correctly due to limited device capabilities. |
| 1300002 | This window state is abnormal.  Possible cause: 1. The window is not created or destroyed;  2. Internal task error. |
| 1300003 | This window manager service works abnormally. |

