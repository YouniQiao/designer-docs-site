# WebResourceResponse

Web组件资源响应对象。

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

## getReasonMessage

```TypeScript
getReasonMessage(): string
```

获取资源响应的状态码描述。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回资源响应的状态码描述。 |

## getResponseCode

```TypeScript
getResponseCode(): number
```

获取资源响应的状态码。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回资源响应的状态码。 |

## getResponseData

```TypeScript
getResponseData(): string
```

获取资源响应数据。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回资源响应数据。 |

## getResponseDataEx

```TypeScript
getResponseDataEx(): string | number | ArrayBuffer | Resource | undefined
```

获取资源响应数据，支持多种数据类型。

**Since:** 13

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the response data.  string type indicate string in HTML format.  number type indicate file handle.  Resource type indicate $rawfile resource.  ArrayBuffer type indicate binary data. |

## getResponseEncoding

```TypeScript
getResponseEncoding(): string
```

获取资源响应的编码。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回资源响应的编码。 |

## getResponseHeader

```TypeScript
getResponseHeader(): Array<Header>
```

获取资源响应头。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Header> | 返回资源响应头。 |

## getResponseIsReady

```TypeScript
getResponseIsReady(): boolean
```

获取响应数据是否已准备就绪。

**Since:** 13

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | `true`表示响应数据已准备好，`false`表示未准备好。 |

## getResponseMimeType

```TypeScript
getResponseMimeType(): string
```

获取资源响应的媒体（MIME）类型。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回资源响应的媒体（MIME）类型。 |

## setReasonMessage

```TypeScript
setReasonMessage(reason: string): void
```

设置资源响应的状态码描述。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reason | string | Yes | 要设置的资源响应的状态码描述。 |

## setResponseCode

```TypeScript
setResponseCode(code: number): void
```

设置资源响应的状态码。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | number | Yes | 要设置的资源响应的状态码。 |

## setResponseData

```TypeScript
setResponseData(data: string | number | Resource | ArrayBuffer): void
```

设置资源响应数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | string \| number \| Resource \| ArrayBuffer | Yes | 要设置的资源响应数据。  string表示HTML格式的字符串。  number表示文件句柄，此句柄由系统的Web组件负责关闭。  Resource表示应用rawfile目录下文件资源. [since 9 - 10] |

## setResponseEncoding

```TypeScript
setResponseEncoding(encoding: string): void
```

设置资源响应的编码。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encoding | string | Yes | 要设置的资源响应的编码。 |

## setResponseHeader

```TypeScript
setResponseHeader(header: Array<Header>): void
```

设置资源响应头。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| header | Array&lt;Header> | Yes | 要设置的资源响应头。 |

## setResponseIsReady

```TypeScript
setResponseIsReady(IsReady: boolean): void
```

设置资源响应数据是否已经就绪。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| IsReady | boolean | Yes | 资源响应数据是否已经就绪。 |

## setResponseMimeType

```TypeScript
setResponseMimeType(mimeType: string): void
```

设置资源响应的媒体（MIME）类型。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mimeType | string | Yes | 要设置的资源响应的媒体（MIME）类型。 |

