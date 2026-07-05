# WebController

Defines the Web controller.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.webview.webview.WebviewController

**System capability:** SystemCapability.Web.Webview.Core

## accessBackward

```TypeScript
accessBackward(): boolean
```

Checks whether the web page can go back.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.webview.webview.WebviewController#accessBackward

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

**Substitute:** ohos.web.webview.webview.WebviewController#accessForward

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean |  |

## accessStep

```TypeScript
accessStep(step: number): boolean
```

Checks whether the web page can go back or forward the given number of steps.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.webview.webview.WebviewController#accessStep

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| step | number | Yes | The number of steps. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean |  |

## backward

```TypeScript
backward()
```

Goes back in the history of the web page.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.webview.webview.WebviewController#backward

**System capability:** SystemCapability.Web.Webview.Core

## clearHistory

```TypeScript
clearHistory(): void
```

Clears the history in the Web.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.webview.webview.WebviewController#clearHistory

**System capability:** SystemCapability.Web.Webview.Core

## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.webview.webview.WebviewController#constructor

**System capability:** SystemCapability.Web.Webview.Core

## deleteJavaScriptRegister

```TypeScript
deleteJavaScriptRegister(name: string)
```

Deletes a registered JavaScript object with given name.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.webview.webview.WebviewController#deleteJavaScriptRegister

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

**Substitute:** ohos.web.webview.webview.WebviewController#forward

**System capability:** SystemCapability.Web.Webview.Core

## getCookieManager

```TypeScript
getCookieManager(): WebCookie
```

Gets network cookie manager

**Since:** 9

**Deprecated since:** 9

**Substitute:** ohos.web.webview.WebCookieManager

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| WebCookie |  |

## getHitTest

```TypeScript
getHitTest(): HitTestType
```

获取点击测试类型。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.webview.webview.WebviewController#getHitTest

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| HitTestType | 点击测试类型。 |

## loadData

```TypeScript
loadData(options: { data: string, mimeType: string, encoding: string, baseUrl?: string, historyUrl?: string })
```

Loads the data or URL.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.webview.webview.WebviewController#loadData

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

**Substitute:** ohos.web.webview.webview.WebviewController#loadUrl

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | { url: string \| Resource, headers?: Array&lt;Header> } | Yes | The options with the URL and other information. |

## onActive

```TypeScript
onActive(): void
```

Let the Web active. It is no longer maintained since API version 9, and it is recommended to use {@link onActive} instead.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.webview.webview.WebviewController#onActive

**System capability:** SystemCapability.Web.Webview.Core

## onInactive

```TypeScript
onInactive(): void
```

Let the Web inactive. It is no longer maintained since API version 9, and it is recommended to use {@link onInactive} instead.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.webview.webview.WebviewController#onInactive

**System capability:** SystemCapability.Web.Webview.Core

## refresh

```TypeScript
refresh()
```

refreshes the current URL.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.webview.webview.WebviewController#refresh

**System capability:** SystemCapability.Web.Webview.Core

## registerJavaScriptProxy

```TypeScript
registerJavaScriptProxy(options: { object: object, name: string, methodList: Array<string> })
```

Registers the JavaScript object and method list.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.webview.webview.WebviewController#registerJavaScriptProxy

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | { object: object, name: string, methodList: Array&lt;string> } | Yes | The option with the JavaScript object and method list. |

## requestFocus

```TypeScript
requestFocus()
```

Gets the request focus.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.webview.webview.WebviewController#requestFocus

**System capability:** SystemCapability.Web.Webview.Core

## runJavaScript

```TypeScript
runJavaScript(options: { script: string, callback?: (result: string) => void })
```

Asynchronously execute JavaScript in the context of the currently displayed page. The result of the script execution will be returned through an asynchronous callback. This method must be used on the UI thread, and the callback will also be invoked on the UI thread. <p><strong>API Note</strong>:<br> The state of JavaScript is no longer persisted across navigations like loadUrl. For example, global variables and functions defined before calling loadUrl will not exist in the loaded page. It is recommended that applications use registerJavaScriptProxy to ensure that the JavaScript state can be persisted across page navigations. <p>

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.webview.webview.WebviewController#runJavaScript

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | { script: string, callback?: (result: string) => void } | Yes | The options with a piece of code and a callback. |

## stop

```TypeScript
stop()
```

Stops the current load.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.webview.webview.WebviewController#stop

**System capability:** SystemCapability.Web.Webview.Core

## zoom

```TypeScript
zoom(factor: number): void
```

对网页进行缩放。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.webview.webview.WebviewController#zoom

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| factor | number | Yes | 缩放系数。 |

