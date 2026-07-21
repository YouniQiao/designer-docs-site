# Router

Provides APIs to access pages through URLs. You can use the APIs to navigate to a specified page in an application,replace the current page with another one in the same application, and return to the previous page or a specified page.

> **NOTE**

> In the following API examples, you must first use  
> [getRouter()](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getrouter) in **UIContext** to  
> obtain a **Router** instance, and then call the APIs using the obtained instance.

**Since:** 10

<!--Device-unnamed-export class Router--><!--Device-unnamed-export class Router-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@kit.ArkUI';
```

<a id="back"></a>
## back

```TypeScript
back(options?: router.RouterOptions): void
```

Returns to the previous page or a specified page.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-back(options?: router.RouterOptions): void--><!--Device-Router-back(options?: router.RouterOptions): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | router.RouterOptions | No | Description of the target page. The **url** parameter specifies the URL of the page to return to. If the page with the specified URL does not exist in the navigation stack, no action is performed. If the navigation stack contains the corresponding URL, the application returns to the page with.the largest index.<br>If no URL is set, the application returns to the previous page, and the page is not rebuilt. The page in the page stack is not reclaimed. It will be reclaimed after being popped up. |

<a id="back-1"></a>
## back

```TypeScript
back(index: number, params?: Object): void
```

Returns to the specified page.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Router-back(index: number, params?: Object): void--><!--Device-Router-back(index: number, params?: Object): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the target page to navigate to.<br>Value range: [0, +∞). |
| params | Object | No | Parameters carried when returning to the page. |

<a id="clear"></a>
## clear

```TypeScript
clear(): void
```

Clears all historical pages in the stack and retains only the current page at the top of the stack.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-clear(): void--><!--Device-Router-clear(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="getlength"></a>
## getLength

```TypeScript
getLength(): string
```

Obtains the number of pages in the current stack.

> **NOTE**

**Since:** 10

**Deprecated since:** 23

**Substitutes:** getStackSize

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-getLength(): string--><!--Device-Router-getLength(): string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | Number of pages in the stack. The maximum value is **32**. |

<a id="getparams"></a>
## getParams

```TypeScript
getParams(): Object
```

Obtains the parameters passed from the page that initiates redirection to the current page.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-getParams(): Object--><!--Device-Router-getParams(): Object-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Object | Parameters passed from the page that initiates redirection to the current page. |

<a id="getstacksize"></a>
## getStackSize

```TypeScript
getStackSize(): number
```

Obtains the number of pages in the current stack.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-Router-getStackSize(): number--><!--Device-Router-getStackSize(): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Number of pages in the stack. The maximum value is **32**. |

<a id="getstate"></a>
## getState

```TypeScript
getState(): router.RouterState
```

Obtains state information about the current page.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-getState(): router.RouterState--><!--Device-Router-getState(): router.RouterState-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| router.RouterState | Page routing state. |

<a id="getstatebyindex"></a>
## getStateByIndex

```TypeScript
getStateByIndex(index: number): router.RouterState | undefined
```

Obtains the status information about a page by its index.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Router-getStateByIndex(index: number): router.RouterState | undefined--><!--Device-Router-getStateByIndex(index: number): router.RouterState | undefined-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the target page.<br>Value range: [1, +∞). |

**Return value:**

| Type | Description |
| --- | --- |
| router.RouterState | State information about the target page. **undefined** if the specified index does not exist. |

<a id="getstatebyurl"></a>
## getStateByUrl

```TypeScript
getStateByUrl(url: string): Array<router.RouterState>
```

Obtains the status information about a page by its URL.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Router-getStateByUrl(url: string): Array<router.RouterState>--><!--Device-Router-getStateByUrl(url: string): Array<router.RouterState>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | URL of the target page. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;router.RouterState&gt; | Page routing state. |

<a id="hidealertbeforebackpage"></a>
## hideAlertBeforeBackPage

```TypeScript
hideAlertBeforeBackPage(): void
```

Disables the display of a confirm dialog box before returning to the previous page.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-hideAlertBeforeBackPage(): void--><!--Device-Router-hideAlertBeforeBackPage(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="pushnamedroute"></a>
## pushNamedRoute

```TypeScript
pushNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>): void
```

Navigates to a page using the named route. This API uses an asynchronous callback to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-pushNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>): void--><!--Device-Router-pushNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | router.NamedRouterOptions | Yes | Page routing parameters. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | - Callback for the router navigation result.<br>If the navigation succeeds,**error** is **undefined**. If the navigation fails, **error** is the error object returned by the system. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Internal error. |
| [100003](../errorcode-router.md#100003-too-many-pages-are-pushed-into-the-page-stack) | Page stack error. Too many pages are pushed. |
| [100004](../errorcode-router.md#100004-incorrect-route-name) | Named route error. The named route does not exist. |

<a id="pushnamedroute-1"></a>
## pushNamedRoute

```TypeScript
pushNamedRoute(options: router.NamedRouterOptions): Promise<void>
```

Navigates to a page using the named route. This API uses a promise to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-pushNamedRoute(options: router.NamedRouterOptions): Promise<void>--><!--Device-Router-pushNamedRoute(options: router.NamedRouterOptions): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | router.NamedRouterOptions | Yes | Page routing parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Internal error. |
| [100003](../errorcode-router.md#100003-too-many-pages-are-pushed-into-the-page-stack) | Page stack error. Too many pages are pushed. |
| [100004](../errorcode-router.md#100004-incorrect-route-name) | Named route error. The named route does not exist. |

<a id="pushnamedroute-2"></a>
## pushNamedRoute

```TypeScript
pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void
```

Navigates to a page using the named route. This API uses an asynchronous callback to return the result. Compared with [pushNamedRoute](arkts-arkui-arkui-uicontext-router-c.md#pushnamedroute-1),this API supports the **mode** parameter, which enables you to set the routing mode.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void--><!--Device-Router-pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | router.NamedRouterOptions | Yes | Page routing parameters. |
| mode | router.RouterMode | Yes | Routing mode. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | - Callback for the router navigation result.<br>If the navigation succeeds,**error** is **undefined**. If the navigation fails, **error** is the error object returned by the system. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Internal error. |
| [100003](../errorcode-router.md#100003-too-many-pages-are-pushed-into-the-page-stack) | Page stack error. Too many pages are pushed. |
| [100004](../errorcode-router.md#100004-incorrect-route-name) | Named route error. The named route does not exist. |

<a id="pushnamedroute-3"></a>
## pushNamedRoute

```TypeScript
pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode): Promise<void>
```

Navigates to a page using the named route. This API uses a promise to return the result. Compared with [pushNamedRoute](arkts-arkui-arkui-uicontext-router-c.md#pushnamedroute-1), this API supports the **mode** parameter, which enables you to set the routing mode.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode): Promise<void>--><!--Device-Router-pushNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | router.NamedRouterOptions | Yes | Page routing parameters. |
| mode | router.RouterMode | Yes | Routing mode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Internal error. |
| [100003](../errorcode-router.md#100003-too-many-pages-are-pushed-into-the-page-stack) | Page stack error. Too many pages are pushed. |
| [100004](../errorcode-router.md#100004-incorrect-route-name) | Named route error. The named route does not exist. |

<a id="pushurl"></a>
## pushUrl

```TypeScript
pushUrl(options: router.RouterOptions, callback: AsyncCallback<void>): void
```

Navigates to a specified page in the application. This API uses an asynchronous callback to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-pushUrl(options: router.RouterOptions, callback: AsyncCallback<void>): void--><!--Device-Router-pushUrl(options: router.RouterOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | router.RouterOptions | Yes | Page routing parameters. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | - Callback for the router navigation result.<br>If the navigation succeeds,**error** is **undefined**. If the navigation fails, **error** is the error object returned by the system. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Internal error. |
| [100002](../errorcode-router.md#100002-incorrect-uri-during-page-redirection) | Uri error. The URI of the page to redirect is incorrect or does not exist |
| [100003](../errorcode-router.md#100003-too-many-pages-are-pushed-into-the-page-stack) | Page stack error. Too many pages are pushed. |

<a id="pushurl-1"></a>
## pushUrl

```TypeScript
pushUrl(options: router.RouterOptions): Promise<void>
```

Navigates to a specified page in the application. This API uses a promise to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-pushUrl(options: router.RouterOptions): Promise<void>--><!--Device-Router-pushUrl(options: router.RouterOptions): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | router.RouterOptions | Yes | Page routing parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Internal error. |
| [100002](../errorcode-router.md#100002-incorrect-uri-during-page-redirection) | Uri error. The URI of the page to redirect is incorrect or does not exist |
| [100003](../errorcode-router.md#100003-too-many-pages-are-pushed-into-the-page-stack) | Page stack error. Too many pages are pushed. |

<a id="pushurl-2"></a>
## pushUrl

```TypeScript
pushUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void
```

Navigates to a specified page in the application. This API uses an asynchronous callback to return the result.Compared with [pushUrl](arkts-arkui-arkui-uicontext-router-c.md#pushurl-1), this API supports the **mode** parameter, which enables you to set the routing mode.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-pushUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void--><!--Device-Router-pushUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | router.RouterOptions | Yes | Page routing parameters. |
| mode | router.RouterMode | Yes | Routing mode. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | - Callback for the router navigation result.<br>If the navigation succeeds,**error** is **undefined**. If the navigation fails, **error** is the error object returned by the system. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Internal error. |
| [100002](../errorcode-router.md#100002-incorrect-uri-during-page-redirection) | Uri error. The URI of the page to redirect is incorrect or does not exist |
| [100003](../errorcode-router.md#100003-too-many-pages-are-pushed-into-the-page-stack) | Page stack error. Too many pages are pushed. |

<a id="pushurl-3"></a>
## pushUrl

```TypeScript
pushUrl(options: router.RouterOptions, mode: router.RouterMode): Promise<void>
```

Navigates to a specified page in the application. This API uses a promise to return the result. Compared with [pushUrl](arkts-arkui-arkui-uicontext-router-c.md#pushurl-1), this API supports the **mode** parameter, which enables you to set the routing mode.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-pushUrl(options: router.RouterOptions, mode: router.RouterMode): Promise<void>--><!--Device-Router-pushUrl(options: router.RouterOptions, mode: router.RouterMode): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | router.RouterOptions | Yes | Page routing parameters. |
| mode | router.RouterMode | Yes | Routing mode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Internal error. |
| [100002](../errorcode-router.md#100002-incorrect-uri-during-page-redirection) | Uri error. The URI of the page to redirect is incorrect or does not exist |
| [100003](../errorcode-router.md#100003-too-many-pages-are-pushed-into-the-page-stack) | Page stack error. Too many pages are pushed. |

<a id="replacenamedroute"></a>
## replaceNamedRoute

```TypeScript
replaceNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>): void
```

Replaces the current page with another one using the named route and destroys the current page. This API uses an asynchronous callback to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-replaceNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>): void--><!--Device-Router-replaceNamedRoute(options: router.NamedRouterOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | router.NamedRouterOptions | Yes | Description of the new page. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | - Callback for the router navigation result.<br>If the navigation succeeds,**error** is **undefined**. If the navigation fails, **error** is the error object returned by the system. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | The UI execution context is not found. This error code is thrown only in the standard system. |
| [100004](../errorcode-router.md#100004-incorrect-route-name) | Named route error. The named route does not exist. |

<a id="replacenamedroute-1"></a>
## replaceNamedRoute

```TypeScript
replaceNamedRoute(options: router.NamedRouterOptions): Promise<void>
```

Replaces the current page with another one using the named route and destroys the current page. This API uses a promise to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-replaceNamedRoute(options: router.NamedRouterOptions): Promise<void>--><!--Device-Router-replaceNamedRoute(options: router.NamedRouterOptions): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | router.NamedRouterOptions | Yes | Description of the new page. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | if the number of parameters is less than 1 or the type of the url parameter is not string. |
| [100001](../errorcode-internal.md#100001-internal-error) | The UI execution context is not found. This error code is thrown only in the standard system. |
| [100004](../errorcode-router.md#100004-incorrect-route-name) | Named route error. The named route does not exist. |

<a id="replacenamedroute-2"></a>
## replaceNamedRoute

```TypeScript
replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void
```

Replaces the current page with another one using the named route and destroys the current page. This API uses an asynchronous callback to return the result. Compared with [replaceNamedRoute](arkts-arkui-arkui-uicontext-router-c.md#replacenamedroute-1),this API supports the **mode** parameter, which enables you to set the routing mode.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void--><!--Device-Router-replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | router.NamedRouterOptions | Yes | Description of the new page. |
| mode | router.RouterMode | Yes | Routing mode. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | - Callback for the router navigation result.<br>If the navigation succeeds,**error** is **undefined**. If the navigation fails, **error** is the error object returned by the system. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | if the number of parameters is less than 1 or the type of the url parameter is not string. |
| [100001](../errorcode-internal.md#100001-internal-error) | The UI execution context is not found. This error code is thrown only in the standard system. |
| [100004](../errorcode-router.md#100004-incorrect-route-name) | Named route error. The named route does not exist. |

<a id="replacenamedroute-3"></a>
## replaceNamedRoute

```TypeScript
replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode): Promise<void>
```

Replaces the current page with another one using the named route and destroys the current page. This API uses a promise to return the result. Compared with [replaceNamedRoute](arkts-arkui-arkui-uicontext-router-c.md#replacenamedroute-1), this API supports the **mode** parameter, which enables you to set the routing mode.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode): Promise<void>--><!--Device-Router-replaceNamedRoute(options: router.NamedRouterOptions, mode: router.RouterMode): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | router.NamedRouterOptions | Yes | Description of the new page. |
| mode | router.RouterMode | Yes | Routing mode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Failed to get the delegate. This error code is thrown only in the standard system. |
| [100004](../errorcode-router.md#100004-incorrect-route-name) | Named route error. The named route does not exist. |

<a id="replaceurl"></a>
## replaceUrl

```TypeScript
replaceUrl(options: router.RouterOptions, callback: AsyncCallback<void>): void
```

Replaces the current page with another one in the application and destroys the current page. This API uses an asynchronous callback to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-replaceUrl(options: router.RouterOptions, callback: AsyncCallback<void>): void--><!--Device-Router-replaceUrl(options: router.RouterOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | router.RouterOptions | Yes | Description of the new page. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | - Callback for the router navigation result.<br>If the navigation succeeds,**error** is **undefined**. If the navigation fails, **error** is the error object returned by the system. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | The UI execution context is not found. This error code is thrown only in the standard system. |
| [200002](../errorcode-router.md#200002-incorrect-uri-during-page-replacement) | Uri error. The URI of the page to be used for replacement is incorrect or does not exist. |

<a id="replaceurl-1"></a>
## replaceUrl

```TypeScript
replaceUrl(options: router.RouterOptions): Promise<void>
```

Replaces the current page with another one in the application and destroys the current page. This API uses a promise to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-replaceUrl(options: router.RouterOptions): Promise<void>--><!--Device-Router-replaceUrl(options: router.RouterOptions): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | router.RouterOptions | Yes | Description of the new page. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | The UI execution context is not found. This error code is thrown only in the standard system. |
| [200002](../errorcode-router.md#200002-incorrect-uri-during-page-replacement) | Uri error. The URI of the page to be used for replacement is incorrect or does not exist. |

<a id="replaceurl-2"></a>
## replaceUrl

```TypeScript
replaceUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void
```

Replaces the current page with another one in the application and destroys the current page. This API uses an asynchronous callback to return the result. Compared with [replaceUrl](arkts-arkui-arkui-uicontext-router-c.md#replaceurl-1), this API supports the **mode** parameter, which enables you to set the routing mode.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-replaceUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void--><!--Device-Router-replaceUrl(options: router.RouterOptions, mode: router.RouterMode, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | router.RouterOptions | Yes | Description of the new page. |
| mode | router.RouterMode | Yes | Routing mode. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | - Callback for the router navigation result.<br>If the navigation succeeds,**error** is **undefined**. If the navigation fails, **error** is the error object returned by the system. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | The UI execution context is not found. This error code is thrown only in the standard system. |
| [200002](../errorcode-router.md#200002-incorrect-uri-during-page-replacement) | Uri error. The URI of the page to be used for replacement is incorrect or does not exist. |

<a id="replaceurl-3"></a>
## replaceUrl

```TypeScript
replaceUrl(options: router.RouterOptions, mode: router.RouterMode): Promise<void>
```

Replaces the current page with another one in the application and destroys the current page. This API uses a promise to return the result. Compared with [replaceUrl](arkts-arkui-arkui-uicontext-router-c.md#replaceurl-1),this API supports the **mode** parameter, which enables you to set the routing mode.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-replaceUrl(options: router.RouterOptions, mode: router.RouterMode): Promise<void>--><!--Device-Router-replaceUrl(options: router.RouterOptions, mode: router.RouterMode): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | router.RouterOptions | Yes | Description of the new page. |
| mode | router.RouterMode | Yes | Routing mode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Failed to get the delegate. This error code is thrown only in the standard system. |
| [200002](../errorcode-router.md#200002-incorrect-uri-during-page-replacement) | Uri error. The URI of the page to be used for replacement is incorrect or does not exist. |

<a id="showalertbeforebackpage"></a>
## showAlertBeforeBackPage

```TypeScript
showAlertBeforeBackPage(options: router.EnableAlertOptions): void
```

Enables the display of a confirm dialog box before returning to the previous page.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Router-showAlertBeforeBackPage(options: router.EnableAlertOptions): void--><!--Device-Router-showAlertBeforeBackPage(options: router.EnableAlertOptions): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | router.EnableAlertOptions | Yes | Description of the dialog box. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100001](../errorcode-internal.md#100001-internal-error) | Internal error. |

