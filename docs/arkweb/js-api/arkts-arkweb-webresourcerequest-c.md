# WebResourceRequest

Defines the Web resource request.

**Since:** 8

<!--Device-unnamed-declare class WebResourceRequest--><!--Device-unnamed-declare class WebResourceRequest-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceRequest-constructor()--><!--Device-WebResourceRequest-constructor()-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="getrequestheader"></a>
## getRequestHeader

```TypeScript
getRequestHeader(): Array<Header>
```

Gets request headers.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceRequest-getRequestHeader(): Array<Header>--><!--Device-WebResourceRequest-getRequestHeader(): Array<Header>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Header&gt; | Return the request headers |

<a id="getrequestmethod"></a>
## getRequestMethod

```TypeScript
getRequestMethod(): string
```

Get request method.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceRequest-getRequestMethod(): string--><!--Device-WebResourceRequest-getRequestMethod(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the request method. |

<a id="getrequesturl"></a>
## getRequestUrl

```TypeScript
getRequestUrl(): string
```

Gets the request URL.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceRequest-getRequestUrl(): string--><!--Device-WebResourceRequest-getRequestUrl(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the request URL. |

<a id="ismainframe"></a>
## isMainFrame

```TypeScript
isMainFrame(): boolean
```

Check whether the request is for getting the main frame.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceRequest-isMainFrame(): boolean--><!--Device-WebResourceRequest-isMainFrame(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Return {@code true} if the request is associated with gesture for getting the main frame;return {@code false} otherwise. |

<a id="isredirect"></a>
## isRedirect

```TypeScript
isRedirect(): boolean
```

Check whether the request redirects.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceRequest-isRedirect(): boolean--><!--Device-WebResourceRequest-isRedirect(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Return {@code true} if the request redirects; return {@code false} otherwise. |

<a id="isrequestgesture"></a>
## isRequestGesture

```TypeScript
isRequestGesture(): boolean
```

Check whether the request is associated with gesture.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceRequest-isRequestGesture(): boolean--><!--Device-WebResourceRequest-isRequestGesture(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Return {@code true} if the request is associated with gesture;return {@code false} otherwise. |

