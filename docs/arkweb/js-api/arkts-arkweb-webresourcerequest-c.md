# WebResourceRequest

Defines the Web resource request.

**Since:** 8

**System capability:** SystemCapability.Web.Webview.Core

## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## getRequestHeader

```TypeScript
getRequestHeader(): Array<Header>
```

Gets request headers.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Header&gt; | Return the request headers |

## getRequestMethod

```TypeScript
getRequestMethod(): string
```

Get request method.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the request method. |

## getRequestUrl

```TypeScript
getRequestUrl(): string
```

Gets the request URL.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the request URL. |

## isMainFrame

```TypeScript
isMainFrame(): boolean
```

Check whether the request is for getting the main frame.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Return {@code true} if the request is associated with gesture for getting the main frame;return {@code false} otherwise. |

## isRedirect

```TypeScript
isRedirect(): boolean
```

Check whether the request redirects.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Return {@code true} if the request redirects; return {@code false} otherwise. |

## isRequestGesture

```TypeScript
isRequestGesture(): boolean
```

Check whether the request is associated with gesture.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Return {@code true} if the request is associated with gesture;return {@code false} otherwise. |

