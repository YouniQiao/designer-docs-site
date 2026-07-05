# WebResourceRequest

Encompassed message information as parameters to {@link onConsole} method.

**Since:** 8

**System capability:** SystemCapability.Web.Webview.Core

## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## getRequestHeader

```TypeScript
getRequestHeader(): Array<Header>
```

获取资源请求头信息。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Header> | 返回资源请求头信息。 |

## getRequestMethod

```TypeScript
getRequestMethod(): string
```

获取请求方法。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回请求方法。 |

## getRequestUrl

```TypeScript
getRequestUrl(): string
```

获取资源请求的URL信息。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回资源请求的URL信息。 |

## isMainFrame

```TypeScript
isMainFrame(): boolean
```

判断资源请求是否为主frame。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回 {@code true} 表示请求为主frame; 返回 {@code false} 表示请求不为主frame。 |

## isRedirect

```TypeScript
isRedirect(): boolean
```

判断资源请求是否被服务端重定向。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回 {@code true} 表示请求被服务端重定向; 返回 {@code false} 表示请求未被服务端重定向。 |

## isRequestGesture

```TypeScript
isRequestGesture(): boolean
```

获取资源请求是否与手势（如点击）相关联。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回 {@code true} 表示请求与手势（如点击）相关联;返回 {@code false} 则相反. |

