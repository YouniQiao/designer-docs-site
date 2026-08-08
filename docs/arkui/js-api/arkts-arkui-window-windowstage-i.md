# WindowStage

Implements a window manager, which manages each basic window unit, that is, [Window]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ instance.

Before calling any of the following APIs, you must use  
[onWindowStageCreate()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ to create a WindowStage instance.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

<!--Device-window-interface WindowStage--><!--Device-window-interface WindowStage-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## createSubWindow

```TypeScript
createSubWindow(name: string): Promise<Window>
```

Create sub window of the stage.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WindowStage-createSubWindow(name: string): Promise<Window>--><!--Device-WindowStage-createSubWindow(name: string): Promise<Window>-End-->

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
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The subWindow has been created and can not be created again. |

## createSubWindow

```TypeScript
createSubWindow(name: string, callback: AsyncCallback<Window>): void
```

Create sub window of the stage.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WindowStage-createSubWindow(name: string, callback: AsyncCallback<Window>): void--><!--Device-WindowStage-createSubWindow(name: string, callback: AsyncCallback<Window>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | window name of sub window |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;Window&gt; | Yes | Callback used to return the subwindow. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The subWindow has been created and can not be created again. |

## createSubWindowWithOptions

```TypeScript
createSubWindowWithOptions(name: string, options: SubWindowOptions): Promise<Window>
```

Create sub window of the stage.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WindowStage-createSubWindowWithOptions(name: string, options: SubWindowOptions): Promise<Window>--><!--Device-WindowStage-createSubWindowWithOptions(name: string, options: SubWindowOptions): Promise<Window>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | window name of sub window |
| options | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | options of sub window creation |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Window&gt; | Promise used to return the subwindow. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. The subWindow has been created and can not be created again. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## getMainWindow

```TypeScript
getMainWindow(): Promise<Window>
```

Get main window of the stage.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WindowStage-getMainWindow(): Promise<Window>--><!--Device-WindowStage-getMainWindow(): Promise<Window>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Window&gt; | Callback used to return the subwindow. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## getMainWindow

```TypeScript
getMainWindow(callback: AsyncCallback<Window>): void
```

Get main window of the stage.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WindowStage-getMainWindow(callback: AsyncCallback<Window>): void--><!--Device-WindowStage-getMainWindow(callback: AsyncCallback<Window>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;Window&gt; | Yes | Callback used to return the main window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## getMainWindowSync

```TypeScript
getMainWindowSync(): Window
```

Get main window of the stage.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WindowStage-getMainWindowSync(): Window--><!--Device-WindowStage-getMainWindowSync(): Window-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## getSubWindow

```TypeScript
getSubWindow(): Promise<Array<Window>>
```

Get sub window of the stage.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WindowStage-getSubWindow(): Promise<Array<Window>>--><!--Device-WindowStage-getSubWindow(): Promise<Array<Window>>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Window&gt;&gt; |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed.\_\_\_HTML\_TAG\_USD\_0\_\_\_**Applicable version:** 10 and later |

## getSubWindow

```TypeScript
getSubWindow(callback: AsyncCallback<Array<Window>>): void
```

Get sub window of the stage.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WindowStage-getSubWindow(callback: AsyncCallback<Array<Window>>): void--><!--Device-WindowStage-getSubWindow(callback: AsyncCallback<Array<Window>>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;Array&lt;Window&gt;&gt; | Yes | Callback used to return all the subwindows. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed.\_\_\_HTML\_TAG\_USD\_0\_\_\_**Applicable version:** 10 and later |

## isWindowRectAutoSave

```TypeScript
isWindowRectAutoSave(): Promise<boolean>
```

Whether the window supports the window rect auto-save.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-WindowStage-isWindowRectAutoSave(): Promise<boolean>--><!--Device-WindowStage-isWindowRectAutoSave(): Promise<boolean>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value true means that the window rect auto-save is supported, and false means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally.\_\_\_HTML\_TAG\_USD\_0\_\_\_**Applicable version:** 20 and later |

## loadContent

```TypeScript
loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void
```

Loads the content of a page, with its path in the current project specified, to the main window of this window stage, and transfers the state attribute to the page through a local storage.This API uses an asynchronous callback to return the result.You are advised to call this API during UIAbility startup.If called multiple times, this API will destroy the existing page content (UIContent)before loading the new content. Exercise caution when using it.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WindowStage-loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void--><!--Device-WindowStage-loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Path of the page to which the content will be loaded |
| storage | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | The data object shared within the content instance loaded by the window |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Invalid path parameter. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## loadContent

```TypeScript
loadContent(path: string, storage?: LocalStorage): Promise<void>
```

Loads the content of a page, with its path in the current project specified, to the main window of this window stage, and transfers the state attribute to the page through a local storage.This API uses a promise to return the result. You are advised to call this API during UIAbility startup.If called multiple times, this API will destroy the existing page content (UIContent)before loading the new content. Exercise caution when using it.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WindowStage-loadContent(path: string, storage?: LocalStorage): Promise<void>--><!--Device-WindowStage-loadContent(path: string, storage?: LocalStorage): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | of the page to which the content will be loaded |
| storage | \_\_\_MD\_LINK\_USD\_0\_\_\_ | No | The data object shared within the content instance loaded by the window |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Invalid path parameter. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## loadContent

```TypeScript
loadContent(path: string, callback: AsyncCallback<void>): void
```

Loads content from a page to this window stage. This API uses an asynchronous callback to return the result. You are advised to call this API during UIAbility startup.If called multiple times, this API will destroy the existing page content (UIContent)before loading the new content. Exercise caution when using it.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WindowStage-loadContent(path: string, callback: AsyncCallback<void>): void--><!--Device-WindowStage-loadContent(path: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | of the page to which the content will be loaded |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Invalid path parameter. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## loadContentByName

```TypeScript
loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void
```

Loads the content of a \_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ page to this window, and transfers the state attribute to the page through a local storage. This API uses an asynchronous callback to return the result.You are advised to call this API during UIAbility startup. If called repeatedly, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.The execution context of the current UI may be unclear. Therefore, you are advised not to perform UI-related operations within the callback of this API.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WindowStage-loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void--><!--Device-WindowStage-loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | name of the page to which the content will be loaded. |
| storage | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | The data object shared within the content instance loaded by the window. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## loadContentByName

```TypeScript
loadContentByName(name: string, callback: AsyncCallback<void>): void
```

Loads the content of a \_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ page to this window.This API uses an asynchronous callback to return the result.You are advised to call this API during UIAbility startup. If called repeatedly, this API will destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it.The execution context of the current UI may be unclear. Therefore, you are advised not to perform UI-related operations within the callback of this API.

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WindowStage-loadContentByName(name: string, callback: AsyncCallback<void>): void--><!--Device-WindowStage-loadContentByName(name: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | name of the page to which the content will be loaded. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## loadContentByName

```TypeScript
loadContentByName(name: string, storage?: LocalStorage): Promise<void>
```

Loads content by named router

**Since:** 11

**ArkTS mode:** ArkTS-Dyn since version 11; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WindowStage-loadContentByName(name: string, storage?: LocalStorage): Promise<void>--><!--Device-WindowStage-loadContentByName(name: string, storage?: LocalStorage): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | name of the page to which the content will be loaded. |
| storage | \_\_\_MD\_LINK\_USD\_0\_\_\_ | No | The data object shared within the content instance loaded by the window. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## off

```TypeScript
off(eventType: 'windowStageEvent', callback?: Callback<WindowStageEventType>): void
```

Unsubscribes from the window stage lifecycle change event.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn only, since version 9.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WindowStage-off(eventType: 'windowStageEvent', callback?: Callback<WindowStageEventType>): void--><!--Device-WindowStage-off(eventType: 'windowStageEvent', callback?: Callback<WindowStageEventType>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'windowStageEvent' | Yes | Event type. The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowStageEventType&gt; | No | Callback used to return the window stage lifecycle state. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Incorrect parameter types; 2. Parameter verification failed. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## off

```TypeScript
off(eventType: 'windowStageLifecycleEvent', callback?: Callback<WindowStageLifecycleEventType>): void
```

Unsubscribes from the window stage lifecycle change event.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn only, since version 20.

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowStage-off(eventType: 'windowStageLifecycleEvent', callback?: Callback<WindowStageLifecycleEventType>): void--><!--Device-WindowStage-off(eventType: 'windowStageLifecycleEvent', callback?: Callback<WindowStageLifecycleEventType>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'windowStageLifecycleEvent' | Yes | Event type. The value is fixed at 'windowStageLifecycleEvent', indicating the window stage lifecycle change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowStageLifecycleEventType&gt; | No | Callback used to return the window stage lifecycle state. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## off

```TypeScript
off(eventType: 'windowStageClose', callback?: Callback<void>): void
```

Window stage close callback off.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn only, since version 14.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-WindowStage-off(eventType: 'windowStageClose', callback?: Callback<void>): void--><!--Device-WindowStage-off(eventType: 'windowStageClose', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'windowStageClose' | Yes | The value is fixed at 'windowStageClose', indicating the window stage close event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | No | Callback function requires a boolean return value to determine whether to close the current main window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## offWindowStageClose

```TypeScript
offWindowStageClose(callback?: Callback<void, boolean>): void
```

Unsubscribes from the event indicating that the main window is closed.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowStage-offWindowStageClose(callback?: Callback<void, boolean>): void--><!--Device-WindowStage-offWindowStageClose(callback?: Callback<void, boolean>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void, boolean&gt; | No | Unregister the callback function. If not provided, all callbacks for the given event type will be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## offWindowStageEvent

```TypeScript
offWindowStageEvent(callback?: Callback<WindowStageEventType>): void
```

Unsubscribes from the window stage lifecycle change event.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowStage-offWindowStageEvent(callback?: Callback<WindowStageEventType>): void--><!--Device-WindowStage-offWindowStageEvent(callback?: Callback<WindowStageEventType>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowStageEventType&gt; | No | Unregister the callback function. If not provided, all callbacks for the given event type will be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## offWindowStageLifecycleEvent

```TypeScript
offWindowStageLifecycleEvent(callback?: Callback<WindowStageLifecycleEventType>): void
```

Unsubscribes from the window stage lifecycle change event.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowStage-offWindowStageLifecycleEvent(callback?: Callback<WindowStageLifecycleEventType>): void--><!--Device-WindowStage-offWindowStageLifecycleEvent(callback?: Callback<WindowStageLifecycleEventType>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowStageLifecycleEventType&gt; | No | Unregister the callback function. If not provided, all callbacks for the given event type will be removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## on

```TypeScript
on(eventType: 'windowStageEvent', callback: Callback<WindowStageEventType>): void
```

Subscribes to the window stage lifecycle change event.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn only, since version 9.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WindowStage-on(eventType: 'windowStageEvent', callback: Callback<WindowStageEventType>): void--><!--Device-WindowStage-on(eventType: 'windowStageEvent', callback: Callback<WindowStageEventType>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'windowStageEvent' | Yes | Event type. The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowStageEventType&gt; | Yes | Callback used to return the window stage lifecycle state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## on

```TypeScript
on(eventType: 'windowStageLifecycleEvent', callback: Callback<WindowStageLifecycleEventType>): void
```

Subscribes to the window stage lifecycle change event.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn only, since version 20.

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowStage-on(eventType: 'windowStageLifecycleEvent', callback: Callback<WindowStageLifecycleEventType>): void--><!--Device-WindowStage-on(eventType: 'windowStageLifecycleEvent', callback: Callback<WindowStageLifecycleEventType>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'windowStageLifecycleEvent' | Yes | Event type. The value is fixed at 'windowStageLifecycleEvent', indicating the window stage lifecycle change event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowStageLifecycleEventType&gt; | Yes | Callback used to return the window stage lifecycle state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## on

```TypeScript
on(eventType: 'windowStageClose', callback: Callback<void>): void
```

Window stage close callback on.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn only, since version 14.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-WindowStage-on(eventType: 'windowStageClose', callback: Callback<void>): void--><!--Device-WindowStage-on(eventType: 'windowStageClose', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | 'windowStageClose' | Yes | The value is fixed at 'windowStageClose', indicating the window stage close event. |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void&gt; | Yes | Callback function requires a boolean return value to determine whether to close the current main window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## onWindowStageClose

```TypeScript
onWindowStageClose(callback: Callback<void, boolean>): void
```

Subscribes to the click event on the close button in the three-button navigation bar of the main window.This event is triggered when the close button in the three-button navigation bar of the main window is clicked.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowStage-onWindowStageClose(callback: Callback<void, boolean>): void--><!--Device-WindowStage-onWindowStageClose(callback: Callback<void, boolean>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;void, boolean&gt; | Yes | Callback invoked when the close button in the upper right corner of the main window is clicked. The return value determines whether to continue to close the main window. The value true means not to close the main window, and false means to continue to close the main window. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## onWindowStageEvent

```TypeScript
onWindowStageEvent(callback: Callback<WindowStageEventType>): void
```

Subscribes to the window stage lifecycle change event.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowStage-onWindowStageEvent(callback: Callback<WindowStageEventType>): void--><!--Device-WindowStage-onWindowStageEvent(callback: Callback<WindowStageEventType>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowStageEventType&gt; | Yes | Callback used to return the window stage lifecycle state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## onWindowStageLifecycleEvent

```TypeScript
onWindowStageLifecycleEvent(callback: Callback<WindowStageLifecycleEventType>): void
```

Subscribes to the window stage lifecycle change event.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowStage-onWindowStageLifecycleEvent(callback: Callback<WindowStageLifecycleEventType>): void--><!--Device-WindowStage-onWindowStageLifecycleEvent(callback: Callback<WindowStageLifecycleEventType>): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;WindowStageLifecycleEventType&gt; | Yes | Callback used to return the window stage lifecycle state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## releaseUIContent

```TypeScript
releaseUIContent(): Promise<void>
```

Release the content of this window in the current project.This API uses a promise to return the result.

**Since:** 24

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 24.

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowStage-releaseUIContent(): Promise<void>--><!--Device-WindowStage-releaseUIContent(): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value, indicating successful completion. Throws exception if window state is abnormal. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |

## removeImageForRecent

```TypeScript
removeImageForRecent(): Promise<void>
```

Removes the image that the application has set to be displayed in the multitasking view and on dock hover. The change will be effective the next time you check the application widget in the multitasking view. This API uses a promise to return the result.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn since version 22; ArkTS-Sta since version 23.

**Required permissions:** 
- API version 26.0.0+: ohos.permission.MANAGE_RECENT_SNAPSHOT

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowStage-removeImageForRecent(): Promise<void>--><!--Device-WindowStage-removeImageForRecent(): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required or a non-system application calls the API.\_\_\_HTML\_TAG\_USD\_0\_\_\_**Applicable version:** 26.0.0 and later |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

export default class EntryAbility extends UIAbility {
  // ...

  onWindowStageCreate(windowStage: window.WindowStage) {
    try {
      let promise = windowStage.removeImageForRecent();
      promise.then(() => {
        console.info(`Succeeded in removing image for recent`);
      }).catch((err: BusinessError) => {
        console.error(`Failed to remove image for recent. Cause code: ${err.code}, message: ${err.message}`);
      });
    } catch (exception) {
      console.error(`Failed to remove image for recent.`);
    }
  }
};
```

## removeStartingWindow

```TypeScript
removeStartingWindow(): Promise<void>
```

Remove the starting window, it must be used with configuration "enable.remove.starting.window".

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-WindowStage-removeStartingWindow(): Promise<void>--><!--Device-WindowStage-removeStartingWindow(): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; |  The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window stage is not created or destroyed; 2. The main window is not created or destroyed; 3. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setCustomDensity

```TypeScript
setCustomDensity(density: number): void
```

Allows the main window of the application to customize its display size scale factor.

Existing child windows and system windows do not immediately re-layout to match the main window's new scale factor. They will re-layout to reflect this change only when their layout information (such as position,size, and system scale size) changes.

If both this API and [setDefaultDensityEnabled(true)]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ are called, the setting from the last called API will be applied.

**Since:** 15

**ArkTS mode:** ArkTS-Dyn only, since version 15.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-WindowStage-setCustomDensity(density: number): void--><!--Device-WindowStage-setCustomDensity(density: number): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| density | number | Yes | the specified custom density value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. |

## setCustomDensity

ArkTS-Dyn:
```TypeScript
setCustomDensity(density: number, applyToSubWindow?: boolean): void
```

ArkTS-Sta:
```TypeScript
setCustomDensity(density: double, applyToSubWindow?: boolean): void
```

Allows the main window of the application to customize its display size scale factor and control when child windows and system windows re-layout to match the main window.

If both this API and [setDefaultDensityEnabled(true)]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ are called,the setting from the last called API will be applied.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn since version 20; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowStage-setCustomDensity(density: double, applyToSubWindow?: boolean): void--><!--Device-WindowStage-setCustomDensity(density: double, applyToSubWindow?: boolean): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| density | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：double | Yes | the specified custom density value. |
| applyToSubWindow | boolean | No | whether to apply the custom density to already created subwindows. The default value is false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The main window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. Possible cause: The window stage is not created or destroyed. |

## setDefaultDensityEnabled

```TypeScript
setDefaultDensityEnabled(enabled: boolean): void
```

Sets whether the main window of the application uses the system's default density. Child windows and system windows will follow the main window's setting. Before calling this API, call [WindowStage.loadContent()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_to initialize the layout to ensure the correct call sequence.

If this API is not called, the default density is not used.

When the default density is not used, if [setCustomDensity()]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_ has been called, the window will be re-laid out according to the custom display size changes. Otherwise, it will be re-laid out according to the system display size changes.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WindowStage-setDefaultDensityEnabled(enabled: boolean): void--><!--Device-WindowStage-setDefaultDensityEnabled(enabled: boolean): void-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Use default density if true, or follow system density change if false |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The main window is not created or destroyed. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. Possible cause: The window stage is not created or destroyed. |

## setImageForRecent

ArkTS-Dyn:
```TypeScript
setImageForRecent(imageResource: number | image.PixelMap, value: ImageFit): Promise<void>
```

ArkTS-Sta:
```TypeScript
setImageForRecent(imageResource: long | image.PixelMap, value: ImageFit): Promise<void>
```

Sets the image displayed in the multitasking view and on dock hover. This API uses a promise to return the result.
    **NOTE**  
    
    Before calling this API, you are advised to complete page loading via  
    [loadContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ or  
    [setUIContent]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_. If this API is called before the application  
    completes page loading, the intended functionality does not take effect. As a result, only the application's  
    launch page is displayed in the multitasking view.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn since version 22; ArkTS-Sta since version 23.

**Required permissions:** 
- API version 26.0.0+: ohos.permission.MANAGE_RECENT_SNAPSHOT

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowStage-setImageForRecent(imageResource: long | image.PixelMap, value: ImageFit): Promise<void>--><!--Device-WindowStage-setImageForRecent(imageResource: long | image.PixelMap, value: ImageFit): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| imageResource | ArkTS-Dyn: number \| image.PixelMap  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：long \| image.PixelMap | Yes | imageResourceId or pixelMap for recent image. imageResourceId Value Range: [0x1000000, 0xffffffff]. |
| value | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Sets the zoom type of an image. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required or a non-system application calls the API.\_\_\_HTML\_TAG\_USD\_0\_\_\_**Applicable version:** 26.0.0 and later |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed. 2. The WindowStage is running in the background. 3. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause: 1. Invalid parameter range. 2. Invalid parameter length. |

**Example**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

export default class EntryAbility extends UIAbility {
  // ...

  onWindowStageCreate(windowStage: window.WindowStage) {
    windowStage.loadContent('pages/Index', (err) => {
      if (err.code) {
        console.error('Failed to load the content. Cause: %{public}s', JSON.stringify(err));
        return;
      }
      console.info('Succeeded in loading the content.');
      let color = new ArrayBuffer(512 * 512 * 4); // Create an ArrayBuffer object to store image pixels. The size of the object is (height * width * 4) bytes.
      let pixelMap: image.PixelMap;
      let bufferArr = new Uint8Array(color);
      for (let i = 0; i < bufferArr.length; i += 4) {
        bufferArr[i] = 255;
        bufferArr[i+1] = 0;
        bufferArr[i+2] = 122;
        bufferArr[i+3] = 255;
      }
      image.createPixelMap(color, {
        editable: true, pixelFormat: image.PixelMapFormat.RGBA_8888, size: { height: 512, width: 512 }
      }).then((data) => {
        pixelMap = data;
        console.info(`Succeeded in creating pixelMap`);
        try {
          let promise = windowStage.setImageForRecent(pixelMap, ImageFit.Fill);
          promise.then(() => {
            console.info(`Succeeded in setting image for recent`);
          }).catch((err: BusinessError) => {
            console.error(`Failed to set image for recent. Cause code: ${err.code}, message: ${err.message}`);
          });
        } catch (exception) {
          console.error(`Failed to set image for recent.`);
        }
      })
    });
  }
};
```

## setSupportedWindowModes

```TypeScript
setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>): Promise<void>
```

Sets the supported window modes.

**Since:** 15

**ArkTS mode:** ArkTS-Dyn since version 15; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-WindowStage-setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>): Promise<void>--><!--Device-WindowStage-setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>): Promise<void>-End-->

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
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed. 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setSupportedWindowModes

```TypeScript
setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>, grayOutMaximizeButton: boolean): Promise<void>
```

Sets the supported window modes of the main window.

**Since:** 20

**ArkTS mode:** ArkTS-Dyn since version 20; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowStage-setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>, grayOutMaximizeButton: boolean): Promise<void>--><!--Device-WindowStage-setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>, grayOutMaximizeButton: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| supportedWindowModes | Array&lt;bundleManager.SupportWindowMode&gt; | Yes | The supported modes of window. |
| grayOutMaximizeButton | boolean | Yes | Whether to gray out the window maximize button. The value true means to gray out the button, and false means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function setSupportedWindowModes can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed. 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300016](../errorcode-window.md#1300016-parameter-verification-error) | Parameter error. Possible cause: 1. Invalid parameter range. 2. Invalid parameter length. 3. Incorrect parameter format. |

## setWindowModal

```TypeScript
setWindowModal(isModal: boolean): Promise<void>
```

Set the application modality of the windowStage.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-WindowStage-setWindowModal(isModal: boolean): Promise<void>--><!--Device-WindowStage-setWindowModal(isModal: boolean): Promise<void>-End-->

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
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: The window is not created or destroyed. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |
| [1300005](../errorcode-window.md#1300005-abnormal-windowstage) | This window stage is abnormal. Possible cause: The window is not created or destroyed.\_\_\_HTML\_TAG\_USD\_0\_\_\_**Applicable version:** 20 and later |

## setWindowRectAutoSave

```TypeScript
setWindowRectAutoSave(enabled: boolean): Promise<void>
```

Set to automatically save the window rect.

**Since:** 14

**ArkTS mode:** ArkTS-Dyn since version 14; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-WindowStage-setWindowRectAutoSave(enabled: boolean): Promise<void>--><!--Device-WindowStage-setWindowRectAutoSave(enabled: boolean): Promise<void>-End-->

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
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

## setWindowRectAutoSave

```TypeScript
setWindowRectAutoSave(enabled: boolean, isSaveBySpecifiedFlag: boolean): Promise<void>
```

Set to automatically save the window rect and whether to enable specifiedFlag.Through the specifiedFlag flag, the window is marked and its rect is saved.

**Since:** 17

**ArkTS mode:** ArkTS-Dyn since version 17; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 17.

<!--Device-WindowStage-setWindowRectAutoSave(enabled: boolean, isSaveBySpecifiedFlag: boolean): Promise<void>--><!--Device-WindowStage-setWindowRectAutoSave(enabled: boolean, isSaveBySpecifiedFlag: boolean): Promise<void>-End-->

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
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Function setWindowRectAutoSave can not work correctly due to limited device capabilities. |
| [1300002](../errorcode-window.md#1300002-abnormal-window-state) | This window state is abnormal. Possible cause: 1. The window is not created or destroyed; 2. Internal task error. |
| [1300003](../errorcode-window.md#1300003-abnormal-window-manager-service) | This window manager service works abnormally. |

