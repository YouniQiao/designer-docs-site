# WebResourceResponse

Defines the Web resource response.

**Since:** 8

<!--Device-unnamed-declare class WebResourceResponse--><!--Device-unnamed-declare class WebResourceResponse-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceResponse-constructor()--><!--Device-WebResourceResponse-constructor()-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="getreasonmessage"></a>
## getReasonMessage

```TypeScript
getReasonMessage(): string
```

Gets the reason message.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceResponse-getReasonMessage(): string--><!--Device-WebResourceResponse-getReasonMessage(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the reason message. |

<a id="getresponsecode"></a>
## getResponseCode

```TypeScript
getResponseCode(): number
```

Gets the response code.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceResponse-getResponseCode(): number--><!--Device-WebResourceResponse-getResponseCode(): number-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Return the response code. |

<a id="getresponsedata"></a>
## getResponseData

```TypeScript
getResponseData(): string
```

Gets the response data.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceResponse-getResponseData(): string--><!--Device-WebResourceResponse-getResponseData(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the response data. |

<a id="getresponsedataex"></a>
## getResponseDataEx

```TypeScript
getResponseDataEx(): string | number | ArrayBuffer | Resource | undefined
```

Gets the response data.

**Since:** 13

<!--Device-WebResourceResponse-getResponseDataEx(): string | number | ArrayBuffer | Resource | undefined--><!--Device-WebResourceResponse-getResponseDataEx(): string | number | ArrayBuffer | Resource | undefined-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the response data.string type indicate string in HTML format.number type indicate file handle.Resource type indicate $rawfile resource.ArrayBuffer type indicate binary data. |

<a id="getresponseencoding"></a>
## getResponseEncoding

```TypeScript
getResponseEncoding(): string
```

Gets the response encoding.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceResponse-getResponseEncoding(): string--><!--Device-WebResourceResponse-getResponseEncoding(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the response encoding. |

<a id="getresponseheader"></a>
## getResponseHeader

```TypeScript
getResponseHeader(): Array<Header>
```

Gets the response headers.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceResponse-getResponseHeader(): Array<Header>--><!--Device-WebResourceResponse-getResponseHeader(): Array<Header>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Header&gt; | Return the response headers. |

<a id="getresponseisready"></a>
## getResponseIsReady

```TypeScript
getResponseIsReady(): boolean
```

Gets whether the response is ready.

**Since:** 13

<!--Device-WebResourceResponse-getResponseIsReady(): boolean--><!--Device-WebResourceResponse-getResponseIsReady(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True indicates the response data is ready and false is not ready. |

<a id="getresponsemimetype"></a>
## getResponseMimeType

```TypeScript
getResponseMimeType(): string
```

Gets the response MIME type.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceResponse-getResponseMimeType(): string--><!--Device-WebResourceResponse-getResponseMimeType(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the response MIME type. |

<a id="setreasonmessage"></a>
## setReasonMessage

```TypeScript
setReasonMessage(reason: string): void
```

Sets the reason message.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceResponse-setReasonMessage(reason: string): void--><!--Device-WebResourceResponse-setReasonMessage(reason: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reason | string | Yes | the reason message. |

<a id="setresponsecode"></a>
## setResponseCode

```TypeScript
setResponseCode(code: number): void
```

Sets the response code.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceResponse-setResponseCode(code: number): void--><!--Device-WebResourceResponse-setResponseCode(code: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | number | Yes | the response code. |

<a id="setresponsedata"></a>
## setResponseData

```TypeScript
setResponseData(data: string | number | Resource | ArrayBuffer): void
```

Sets the response data.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceResponse-setResponseData(data: string | number | Resource | ArrayBuffer): void--><!--Device-WebResourceResponse-setResponseData(data: string | number | Resource | ArrayBuffer): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | string \| number \| Resource \| ArrayBuffer | Yes | the response data.string type indicate strings in HTML format.number type indicate file handle.Resource type indicate $rawfile resource.ArrayBuffer type indicate binary data.<br>**Since:** 11 |

<a id="setresponseencoding"></a>
## setResponseEncoding

```TypeScript
setResponseEncoding(encoding: string): void
```

Sets the response encoding.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceResponse-setResponseEncoding(encoding: string): void--><!--Device-WebResourceResponse-setResponseEncoding(encoding: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encoding | string | Yes | the response encoding. |

<a id="setresponseheader"></a>
## setResponseHeader

```TypeScript
setResponseHeader(header: Array<Header>): void
```

Sets the response headers.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceResponse-setResponseHeader(header: Array<Header>): void--><!--Device-WebResourceResponse-setResponseHeader(header: Array<Header>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| header | Array&lt;Header&gt; | Yes | the response headers. |

<a id="setresponseisready"></a>
## setResponseIsReady

```TypeScript
setResponseIsReady(IsReady: boolean): void
```

Sets the response is ready or not.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceResponse-setResponseIsReady(IsReady: boolean): void--><!--Device-WebResourceResponse-setResponseIsReady(IsReady: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| IsReady | boolean | Yes | whether the response is ready. |

<a id="setresponsemimetype"></a>
## setResponseMimeType

```TypeScript
setResponseMimeType(mimeType: string): void
```

Sets the response MIME type.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebResourceResponse-setResponseMimeType(mimeType: string): void--><!--Device-WebResourceResponse-setResponseMimeType(mimeType: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mimeType | string | Yes | the response MIME type. |

