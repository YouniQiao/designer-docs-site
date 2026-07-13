# WindowStage

Implements a window manager, which manages each basic window unit, that is, [Window](arkts-window.md) instance.

Before calling any of the following APIs, you must use
[onWindowStageCreate()](../../apis-ability-kit/arkts-apis/arkts-ability-uiability-c.md#onwindowstagecreate-1) to create a WindowStage
instance.

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

Create sub window of the stage.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | window name of sub window |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Window&gt; | Promise used to return the subwindow. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: The subWindow has been created and can not be created again. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal.<br>**Applicable version:** 9 and later |

## createSubWindow

```TypeScript
createSubWindow(name: string, callback: AsyncCallback<Window>): void
```

Create sub window of the stage.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | window name of sub window |
| callback | AsyncCallback&lt;Window&gt; | Yes | Callback used to return the subwindow. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: The subWindow has been created and can not be created again. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal.<br>**Applicable version:** 9 and later |

## createSubWindowWithOptions

```TypeScript
createSubWindowWithOptions(name: string, options: SubWindowOptions): Promise<Window>
```

Create sub window of the stage.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | window name of sub window |
| options | SubWindowOptions | Yes | options of sub window creation |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Window&gt; | Promise used to return the subwindow. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited devicecapabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: 1. The window is not created or destroyed;2. The subWindow has been created and can not be created again. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## getMainWindow

```TypeScript
getMainWindow(): Promise<Window>
```

Get main window of the stage.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Window&gt; | Callback used to return the subwindow. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: The window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## getMainWindow

```TypeScript
getMainWindow(callback: AsyncCallback<Window>): void
```

Get main window of the stage.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Window&gt; | Yes | Callback used to return the main window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: The window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## getMainWindowSync

```TypeScript
getMainWindowSync(): Window
```

Get main window of the stage.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Window | @throws { BusinessError } 1300002 - This window state is abnormal.Possible cause: The window is not created or destroyed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: The window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## getSubWindow

```TypeScript
getSubWindow(): Promise<Array<Window>>
```

Get sub window of the stage.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Window&gt;&gt; | @throws { BusinessError } 1300002 - This window state is abnormal. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.<br>**Applicable version:** 10 and later |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal.<br>**Applicable version:** 9 and later |

## getSubWindow

```TypeScript
getSubWindow(callback: AsyncCallback<Array<Window>>): void
```

Get sub window of the stage.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;Window&gt;&gt; | Yes | Callback used to return all the subwindows. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.<br>**Applicable version:** 10 and later |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal.<br>**Applicable version:** 9 and later |

## isWindowRectAutoSave

```TypeScript
isWindowRectAutoSave(): Promise<boolean>
```

Whether the window supports the window rect auto-save.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result.The value true means that the window rect auto-save is supported, and false means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: 1. The window is not created or destroyed;2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally.<br>**Applicable version:** 20 and later |

## loadContent

```TypeScript
loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void
```

Loads the content of a page, with its path in the current project specified, to the main window
of this window stage, and transfers the state attribute to the page through a local storage.
This API uses an asynchronous callback to return the result.
You are advised to call this API during UIAbility startup.
If called multiple times, this API will destroy the existing page content (UIContent)
before loading the new content. Exercise caution when using it.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Path of the page to which the content will be loaded |
| storage | LocalStorage | Yes | The data object shared within the content instance loaded by the window |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Invalid path parameter. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: The window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal.<br>**Applicable version:** 9 and later |

## loadContent

```TypeScript
loadContent(path: string, storage?: LocalStorage): Promise<void>
```

Loads the content of a page, with its path in the current project specified, to the main window
of this window stage, and transfers the state attribute to the page through a local storage.
This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
If called multiple times, this API will destroy the existing page content (UIContent)
before loading the new content. Exercise caution when using it.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | of the page to which the content will be loaded |
| storage | LocalStorage | No | The data object shared within the content instance loaded by the window |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | @throws { BusinessError } 401 - Parameter error. Possible cause:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Invalid path parameter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Invalid path parameter. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: The window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal.<br>**Applicable version:** 9 and later |

## loadContent

```TypeScript
loadContent(path: string, callback: AsyncCallback<void>): void
```

Loads content from a page to this window stage. This API uses an asynchronous callback to
return the result. You are advised to call this API during UIAbility startup.
If called multiple times, this API will destroy the existing page content (UIContent)
before loading the new content. Exercise caution when using it.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | of the page to which the content will be loaded |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Invalid path parameter. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: The window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal.<br>**Applicable version:** 9 and later |

## loadContentByName

```TypeScript
loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void
```

Loads the content of a [named route](../../ui/arkts-routing.md#named-route) page to this window, and transfers
the state attribute to the page through a local storage. This API uses an asynchronous callback to return
the result.
You are advised to call this API during UIAbility startup. If called repeatedly, this API will destroy the
existing page content (UIContent) before loading the new content. Exercise caution when using it.
The execution context of the current UI may be unclear. Therefore, you are advised not to perform UI-related
operations within the callback of this API.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | name of the page to which the content will be loaded. |
| storage | LocalStorage | Yes | The data object shared within the content instance loaded by the window. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: The window is not created or destroyed. |

## loadContentByName

```TypeScript
loadContentByName(name: string, callback: AsyncCallback<void>): void
```

Loads the content of a [named route](../../ui/arkts-routing.md#named-route) page to this window.
This API uses an asynchronous callback to return the result.
You are advised to call this API during UIAbility startup. If called repeatedly, this API will destroy
the existing page content (UIContent) before loading the new content. Exercise caution when using it.
The execution context of the current UI may be unclear. Therefore, you are advised not to perform
UI-related operations within the callback of this API.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | name of the page to which the content will be loaded. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: The window is not created or destroyed. |

## loadContentByName

```TypeScript
loadContentByName(name: string, storage?: LocalStorage): Promise<void>
```

Loads content by named router

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | name of the page to which the content will be loaded. |
| storage | LocalStorage | No | The data object shared within the content instance loaded by the window. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: The window is not created or destroyed. |

## off

```TypeScript
off(eventType: 'windowStageEvent', callback?: Callback<WindowStageEventType>): void
```

Unsubscribes from the window stage lifecycle change event.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'windowStageEvent' | Yes | Event type. |
| callback | Callback&lt;WindowStageEventType&gt; | No | Callback used to return the window stage lifecycle state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types;2. Parameter verification failed. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## off

```TypeScript
off(eventType: 'windowStageLifecycleEvent', callback?: Callback<WindowStageLifecycleEventType>): void
```

Unsubscribes from the window stage lifecycle change event.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'windowStageLifecycleEvent' | Yes | Event type. |
| callback | Callback&lt;WindowStageLifecycleEventType&gt; | No | Callback used to |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## off

```TypeScript
off(eventType: 'windowStageClose', callback?: Callback<void>): void
```

Window stage close callback off.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'windowStageClose' | Yes | The value is fixed at 'windowStageClose', indicating the window stage |
| callback | Callback&lt;void&gt; | No | Callback function requires a boolean return value to determine whether to |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited devicecapabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## on

```TypeScript
on(eventType: 'windowStageEvent', callback: Callback<WindowStageEventType>): void
```

Subscribes to the window stage lifecycle change event.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'windowStageEvent' | Yes | Event type. |
| callback | Callback&lt;WindowStageEventType&gt; | Yes | Callback used to return the window stage lifecycle state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## on

```TypeScript
on(eventType: 'windowStageLifecycleEvent', callback: Callback<WindowStageLifecycleEventType>): void
```

Subscribes to the window stage lifecycle change event.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'windowStageLifecycleEvent' | Yes | Event type. |
| callback | Callback&lt;WindowStageLifecycleEventType&gt; | Yes | Callback used to |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## on

```TypeScript
on(eventType: 'windowStageClose', callback: Callback<void>): void
```

Window stage close callback on.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'windowStageClose' | Yes | The value is fixed at 'windowStageClose', indicating the window stage |
| callback | Callback&lt;void&gt; | Yes | Callback function requires a boolean return value to determine whether to |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited devicecapabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |

## releaseUIContent

```TypeScript
releaseUIContent(): Promise<void>
```

Release the content of this window in the current project.
This API uses a promise to return the result.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value, indicating successful completion.Throws exception if window state is abnormal. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: The window is not created or destroyed. |

## removeStartingWindow

```TypeScript
removeStartingWindow(): Promise<void>
```

Remove the starting window, it must be used with configuration "enable.remove.starting.window".

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: 1. The window stage is not created or destroyed;2. The main window is not created or destroyed;3. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setCustomDensity

```TypeScript
setCustomDensity(density: number): void
```

Allows the main window of the application to customize its display size scale factor.

Existing child windows and system windows do not immediately re-layout to match the main window's new scale
factor. They will re-layout to reflect this change only when their layout information (such as position,
size, and system scale size) changes.

If both this API and [setDefaultDensityEnabled(true)](arkts-arkui-windowstage-i.md#setdefaultdensityenabled-1) are called, the setting from the last called API will be applied.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| density | number | Yes | the specified custom density value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## setCustomDensity

```TypeScript
setCustomDensity(density: number, applyToSubWindow?: boolean): void
```

Allows the main window of the application to customize its display size scale factor and control when child
windows and system windows re-layout to match the main window.

If both this API and [setDefaultDensityEnabled(true)](arkts-arkui-windowstage-i.md#setdefaultdensityenabled-1) are called,
the setting from the last called API will be applied.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| density | number | Yes | the specified custom density value. |
| applyToSubWindow | boolean | No | whether to apply the custom density to already created subwindows.The default value is false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: The main window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal.Possible cause: The window stage is not created or destroyed. |

## setDefaultDensityEnabled

```TypeScript
setDefaultDensityEnabled(enabled: boolean): void
```

Sets whether the main window of the application uses the system's default density. Child windows and system
windows will follow the main window's setting. Before calling this API, call [WindowStage.loadContent()](arkts-arkui-windowstage-i.md#loadcontent-1)
to initialize the layout to ensure the correct call sequence.

If this API is not called, the default density is not used.

When the default density is not used, if [setCustomDensity()](arkts-arkui-windowstage-i.md#setcustomdensity-1) has been called, the window will be re-laid out according to the custom display size changes. Otherwise, it will be re-laid out according to the system display size changes.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Use default density if true, or follow system density change if false |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited devicecapabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: The main window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal.Possible cause: The window stage is not created or destroyed. |

## setSupportedWindowModes

```TypeScript
setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>): Promise<void>
```

Sets the supported window modes.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| supportedWindowModes | Array&lt;bundleManager.SupportWindowMode&gt; | Yes | The supported modes of window. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause:1. The window is not created or destroyed.2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setSupportedWindowModes

```TypeScript
setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>, grayOutMaximizeButton: boolean): Promise<void>
```

Sets the supported window modes of the main window.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| supportedWindowModes | Array&lt;bundleManager.SupportWindowMode&gt; | Yes | The supported modes of window. |
| grayOutMaximizeButton | boolean | Yes | Whether to gray out the window maximize button.The value true means to gray out the button, and false means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Function setSupportedWindowModes can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause:1. The window is not created or destroyed.2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause:1. Invalid parameter range.2. Invalid parameter length.3. Incorrect parameter format. |

## setWindowModal

```TypeScript
setWindowModal(isModal: boolean): Promise<void>
```

Set the application modality of the windowStage.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isModal | boolean | Yes | Enable the window modal if true, otherwise means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited devicecapabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. Possible cause:The window is not created or destroyed.<br>**Applicable version:** 20 and later |

## setWindowRectAutoSave

```TypeScript
setWindowRectAutoSave(enabled: boolean): Promise<void>
```

Set to automatically save the window rect.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Enable the window rect auto-save if true, otherwise means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: 1. The window is not created or destroyed;2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setWindowRectAutoSave

```TypeScript
setWindowRectAutoSave(enabled: boolean, isSaveBySpecifiedFlag: boolean): Promise<void>
```

Set to automatically save the window rect and whether to enable specifiedFlag.
Through the specifiedFlag flag, the window is marked and its rect is saved.

**Since:** 17

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 17.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Enable the window rect auto-save if true, otherwise means the opposite. |
| isSaveBySpecifiedFlag | boolean | Yes | Enable the specifiedFlag if true, otherwise means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Function setWindowRectAutoSave can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal.Possible cause: 1. The window is not created or destroyed;2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

