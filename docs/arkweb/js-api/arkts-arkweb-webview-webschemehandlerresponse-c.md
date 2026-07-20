# WebSchemeHandlerResponse

Defines the Web resource response used for scheme handler.

**Since:** 12

<!--Device-webview-class WebSchemeHandlerResponse--><!--Device-webview-class WebSchemeHandlerResponse-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebSchemeHandlerResponse-constructor()--><!--Device-WebSchemeHandlerResponse-constructor()-End-->

**System capability:** SystemCapability.Web.Webview.Core

## getEncoding

```TypeScript
getEncoding(): string
```

Get the response encoding.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebSchemeHandlerResponse-getEncoding(): string--><!--Device-WebSchemeHandlerResponse-getEncoding(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return encoding of response. |

## getHeaderByName

```TypeScript
getHeaderByName(name: string): string
```

Get the header value by name from the response.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebSchemeHandlerResponse-getHeaderByName(name: string): string--><!--Device-WebSchemeHandlerResponse-getHeaderByName(name: string): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Header name. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Return header value by name. |

## getMimeType

```TypeScript
getMimeType(): string
```

Get mime type.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebSchemeHandlerResponse-getMimeType(): string--><!--Device-WebSchemeHandlerResponse-getMimeType(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return mime type of response. |

## getNetErrorCode

```TypeScript
getNetErrorCode(): WebNetErrorList
```

Get net error code.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebSchemeHandlerResponse-getNetErrorCode(): WebNetErrorList--><!--Device-WebSchemeHandlerResponse-getNetErrorCode(): WebNetErrorList-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [WebNetErrorList](arkts-arkweb-web-neterrorlist-webneterrorlist-e.md) | Return response error code. |

## getStatus

```TypeScript
getStatus(): number
```

Get http status code.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebSchemeHandlerResponse-getStatus(): number--><!--Device-WebSchemeHandlerResponse-getStatus(): number-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Return http status code. |

## getStatusText

```TypeScript
getStatusText(): string
```

Get status text.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebSchemeHandlerResponse-getStatusText(): string--><!--Device-WebSchemeHandlerResponse-getStatusText(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return http status text. |

## getUrl

```TypeScript
getUrl(): string
```

Get the resolved URL after redirects or changed as a result of HSTS.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebSchemeHandlerResponse-getUrl(): string--><!--Device-WebSchemeHandlerResponse-getUrl(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return response url for redirects. |

## setEncoding

```TypeScript
setEncoding(encoding: string): void
```

Set the response encoding.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebSchemeHandlerResponse-setEncoding(encoding: string): void--><!--Device-WebSchemeHandlerResponse-setEncoding(encoding: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encoding | string | Yes | Encoding. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. |

## setHeaderByName

```TypeScript
setHeaderByName(name: string, value: string, overwrite: boolean): void
```

Set response hander value by name.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebSchemeHandlerResponse-setHeaderByName(name: string, value: string, overwrite: boolean): void--><!--Device-WebSchemeHandlerResponse-setHeaderByName(name: string, value: string, overwrite: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Header name. |
| value | string | Yes | Header value. |
| overwrite | boolean | Yes | Whether to overwrite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |

## setMimeType

```TypeScript
setMimeType(type: string): void
```

Set mime type.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebSchemeHandlerResponse-setMimeType(type: string): void--><!--Device-WebSchemeHandlerResponse-setMimeType(type: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | Mime type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. |

## setNetErrorCode

```TypeScript
setNetErrorCode(code: WebNetErrorList): void
```

Set net error code.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebSchemeHandlerResponse-setNetErrorCode(code: WebNetErrorList): void--><!--Device-WebSchemeHandlerResponse-setNetErrorCode(code: WebNetErrorList): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | [WebNetErrorList](arkts-arkweb-web-neterrorlist-webneterrorlist-e.md) | Yes | Set net error code. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |

## setStatus

```TypeScript
setStatus(code: number): void
```

Set http status code.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebSchemeHandlerResponse-setStatus(code: number): void--><!--Device-WebSchemeHandlerResponse-setStatus(code: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | number | Yes | Http status code. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. |

## setStatusText

```TypeScript
setStatusText(text: string): void
```

Set status text.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebSchemeHandlerResponse-setStatusText(text: string): void--><!--Device-WebSchemeHandlerResponse-setStatusText(text: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Status text. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. |

## setUrl

```TypeScript
setUrl(url: string): void
```

Set the resolved URL after redirects or changed as a result of HSTS.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-WebSchemeHandlerResponse-setUrl(url: string): void--><!--Device-WebSchemeHandlerResponse-setUrl(url: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | Set response url for redirects. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. |

