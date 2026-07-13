# WebController

Defines the Web controller.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** WebviewController

**System capability:** SystemCapability.Web.Webview.Core

## accessBackward

```TypeScript
accessBackward(): boolean
```

Checks whether the web page can go back.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** accessBackward

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the web page can go back. |

## accessForward

```TypeScript
accessForward(): boolean
```

Checks whether the web page can go forward.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** accessForward

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | @syscap SystemCapability.Web.Webview.Core |

## accessStep

```TypeScript
accessStep(step: number): boolean
```

Checks whether the web page can go back or forward the given number of steps.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** accessStep

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| step | number | Yes | The number of steps. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | @syscap SystemCapability.Web.Webview.Core |

## backward

```TypeScript
backward()
```

Goes back in the history of the web page.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** backward

**System capability:** SystemCapability.Web.Webview.Core

## clearHistory

```TypeScript
clearHistory(): void
```

Clears the history in the Web.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** clearHistory

**System capability:** SystemCapability.Web.Webview.Core

## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** constructor

**System capability:** SystemCapability.Web.Webview.Core

## deleteJavaScriptRegister

```TypeScript
deleteJavaScriptRegister(name: string)
```

Deletes a registered JavaScript object with given name.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** deleteJavaScriptRegister

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | The name of a registered JavaScript object to be deleted. |

## forward

```TypeScript
forward()
```

Goes forward in the history of the web page.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** forward

**System capability:** SystemCapability.Web.Webview.Core

## getCookieManager

```TypeScript
getCookieManager(): WebCookie
```

Gets network cookie manager

**Since:** 9

**Deprecated since:** 9

**Substitutes:** WebCookieManager

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| WebCookie | @syscap SystemCapability.Web.Webview.Core |

## getHitTest

```TypeScript
getHitTest(): HitTestType
```

Gets the type of HitTest.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getHitTest](../arkts-apis/arkts-arkweb-webviewcontroller-c.md#gethittest-1)

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| HitTestType | The type of HitTest. |

## loadData

```TypeScript
loadData(options: { data: string, mimeType: string, encoding: string, baseUrl?: string, historyUrl?: string })
```

Loads the data or URL.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** loadData

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | { data: string, mimeType: string, encoding: string, baseUrl?: string, historyUrl?: string } | Yes | The options with the data or URL and other information. |

## loadUrl

```TypeScript
loadUrl(options: { url: string | Resource, headers?: Array<Header> })
```

Loads the given URL.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** loadUrl

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | { url: string \| Resource, headers?: Array&lt;Header&gt; } | Yes | The options with the URL and other information. |

## onActive

```TypeScript
onActive(): void
```

Called when the **Web** component enters the active state.
This API is supported since API version 8 and deprecated since API version 9. You are advised to use
[onActive<sup>9+</sup>](../arkts-apis/arkts-arkweb-webviewcontroller-c.md#onactive-1) instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** onActive

**System capability:** SystemCapability.Web.Webview.Core

## onInactive

```TypeScript
onInactive(): void
```

Called when the **Web** component enters the inactive state.
This API is supported since API version 8 and deprecated since API version 9. You are advised to use
[onInactive<sup>9+</sup>](../arkts-apis/arkts-arkweb-webviewcontroller-c.md#oninactive-1) instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** onInactive

**System capability:** SystemCapability.Web.Webview.Core

## refresh

```TypeScript
refresh()
```

refreshes the current URL.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** refresh

**System capability:** SystemCapability.Web.Webview.Core

## registerJavaScriptProxy

```TypeScript
registerJavaScriptProxy(options: { object: object, name: string, methodList: Array<string> })
```

Registers the JavaScript object and method list.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** registerJavaScriptProxy

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | { object: object, name: string, methodList: Array&lt;string&gt; } | Yes | The option with the JavaScript object and method list. |

## requestFocus

```TypeScript
requestFocus()
```

Gets the request focus.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** requestFocus

**System capability:** SystemCapability.Web.Webview.Core

## runJavaScript

```TypeScript
runJavaScript(options: { script: string, callback?: (result: string) => void })
```

Asynchronously execute JavaScript in the context of the currently displayed page.
The result of the script execution will be returned through an asynchronous callback.
This method must be used on the UI thread, and the callback will also be invoked on the UI thread.
<p><strong>API Note</strong>:<br>
The state of JavaScript is no longer persisted across navigations like loadUrl.
For example, global variables and functions defined before calling loadUrl will not exist in the loaded page.
It is recommended that applications use registerJavaScriptProxy to ensure that the JavaScript state can be persisted across page navigations.
<p>

**Since:** 8

**Deprecated since:** 9

**Substitutes:** runJavaScript

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | { script: string, callback?: (result: string) =&gt; void } | Yes | The options with a piece of code and a callback. |

## stop

```TypeScript
stop()
```

Stops the current load.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** stop

**System capability:** SystemCapability.Web.Webview.Core

## zoom

```TypeScript
zoom(factor: number): void
```

Let the Web zoom by.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [zoom](../arkts-apis/arkts-arkweb-webviewcontroller-c.md#zoom-1)

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| factor | number | Yes | The zoom factor. |

