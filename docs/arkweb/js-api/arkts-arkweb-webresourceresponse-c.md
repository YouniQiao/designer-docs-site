# WebResourceResponse

Defines the Web resource response.

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

## getReasonMessage

```TypeScript
getReasonMessage(): string
```

Gets the reason message.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the reason message. |

## getResponseCode

```TypeScript
getResponseCode(): number
```

Gets the response code.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Return the response code. |

## getResponseData

```TypeScript
getResponseData(): string
```

Gets the response data.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the response data. |

## getResponseDataEx

```TypeScript
getResponseDataEx(): string | number | ArrayBuffer | Resource | undefined
```

Gets the response data.

**Since:** 13

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the response data.string type indicate string in HTML format.number type indicate file handle.Resource type indicate $rawfile resource.ArrayBuffer type indicate binary data. |

## getResponseEncoding

```TypeScript
getResponseEncoding(): string
```

Gets the response encoding.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the response encoding. |

## getResponseHeader

```TypeScript
getResponseHeader(): Array<Header>
```

Gets the response headers.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Header&gt; | Return the response headers. |

## getResponseIsReady

```TypeScript
getResponseIsReady(): boolean
```

Gets whether the response is ready.

**Since:** 13

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True indicates the response data is ready and false is not ready. |

## getResponseMimeType

```TypeScript
getResponseMimeType(): string
```

Gets the response MIME type.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the response MIME type. |

## setReasonMessage

```TypeScript
setReasonMessage(reason: string): void
```

Sets the reason message.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reason | string | Yes | the reason message. |

## setResponseCode

```TypeScript
setResponseCode(code: number): void
```

Sets the response code.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | number | Yes | the response code. |

## setResponseData

```TypeScript
setResponseData(data: string | number | Resource | ArrayBuffer): void
```

Sets the response data.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | string \| number \| Resource \| ArrayBuffer | Yes | the response data.string type indicate strings in HTML format.number type indicate file handle.Resource type indicate $rawfile resource.ArrayBuffer type indicate binary data.<br>**Since:** 11 |

## setResponseEncoding

```TypeScript
setResponseEncoding(encoding: string): void
```

Sets the response encoding.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encoding | string | Yes | the response encoding. |

## setResponseHeader

```TypeScript
setResponseHeader(header: Array<Header>): void
```

Sets the response headers.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| header | Array&lt;Header&gt; | Yes | the response headers. |

## setResponseIsReady

```TypeScript
setResponseIsReady(IsReady: boolean): void
```

Sets the response is ready or not.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| IsReady | boolean | Yes | whether the response is ready. |

## setResponseMimeType

```TypeScript
setResponseMimeType(mimeType: string): void
```

Sets the response MIME type.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mimeType | string | Yes | the response MIME type. |

