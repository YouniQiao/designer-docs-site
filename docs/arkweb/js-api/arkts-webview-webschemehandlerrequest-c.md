# WebSchemeHandlerRequest

通过WebSchemeHandler拦截到的请求。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## getFrameUrl

```TypeScript
getFrameUrl(): string
```

获取触发此请求的Frame的URL。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回触发此请求的Frame的URL。 |

## getHeader

```TypeScript
getHeader(): Array<WebHeader>
```

获取资源请求头信息。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;WebHeader> | 返回资源请求头信息。 |

## getHttpBodyStream

```TypeScript
getHttpBodyStream(): WebHttpBodyStream | null
```

获取资源请求中的WebHttpBodyStream。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| WebHttpBodyStream | Return http body stream. If request has no http body stream, return null. |

## getReferrer

```TypeScript
getReferrer(): string
```

获取referrer。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | 获取到的referrer。 |

## getRequestMethod

```TypeScript
getRequestMethod(): string
```

获取请求方法。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回请求方法。 |

## getRequestResourceType

```TypeScript
getRequestResourceType(): WebResourceType
```

获取资源请求的资源类型。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| WebResourceType | 返回资源请求的资源类型。 |

## getRequestUrl

```TypeScript
getRequestUrl(): string
```

获取资源请求的URL信息。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回资源请求的URL信息。 |

## hasGesture

```TypeScript
hasGesture(): boolean
```

获取资源请求是否与手势（如点击）相关联。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回资源请求是否与手势（如点击）相关联，如果返回资源请求与手势相关联则返回true，否则返回false。 |

## isMainFrame

```TypeScript
isMainFrame(): boolean
```

判断资源请求是否为主frame。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 判断资源请求是否为主frame，如果资源请求是主frame则返回true，否则返回false。 |

