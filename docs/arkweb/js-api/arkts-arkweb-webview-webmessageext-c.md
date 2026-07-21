# WebMessageExt

The message received or sent from web message port.

**Since:** 10

<!--Device-webview-class WebMessageExt--><!--Device-webview-class WebMessageExt-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

<a id="getarray"></a>
## getArray

```TypeScript
getArray(): Array<string | number | boolean>
```

Get the array value of the web message.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebMessageExt-getArray(): Array<string | number | boolean>--><!--Device-WebMessageExt-getArray(): Array<string | number | boolean>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string \| number \| boolean&gt; | - Returns data of Array type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100014](../errorcode-webview.md#17100014-type-and-value-mismatch) | The type and value of the message do not match. |

<a id="getarraybuffer"></a>
## getArrayBuffer

```TypeScript
getArrayBuffer(): ArrayBuffer
```

Get the array buffer value of the web message.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebMessageExt-getArrayBuffer(): ArrayBuffer--><!--Device-WebMessageExt-getArrayBuffer(): ArrayBuffer-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| ArrayBuffer | - Returns data of ArrayBuffer type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100014](../errorcode-webview.md#17100014-type-and-value-mismatch) | The type and value of the message do not match. |

<a id="getboolean"></a>
## getBoolean

```TypeScript
getBoolean(): boolean
```

Get the boolean value of the web message.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebMessageExt-getBoolean(): boolean--><!--Device-WebMessageExt-getBoolean(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - Returns data of Boolean type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100014](../errorcode-webview.md#17100014-type-and-value-mismatch) | The type and value of the message do not match. |

<a id="geterror"></a>
## getError

```TypeScript
getError(): Error
```

Get the error value of the web message.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebMessageExt-getError(): Error--><!--Device-WebMessageExt-getError(): Error-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Error | - Returns data of Error type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100014](../errorcode-webview.md#17100014-type-and-value-mismatch) | The type and value of the message do not match. |

<a id="getnumber"></a>
## getNumber

```TypeScript
getNumber(): number
```

Get the number value of the web message.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebMessageExt-getNumber(): number--><!--Device-WebMessageExt-getNumber(): number-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | - Returns data of number type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100014](../errorcode-webview.md#17100014-type-and-value-mismatch) | The type and value of the message do not match. |

<a id="getstring"></a>
## getString

```TypeScript
getString(): string
```

Get the string value of the web message.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebMessageExt-getString(): string--><!--Device-WebMessageExt-getString(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns data of string type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100014](../errorcode-webview.md#17100014-type-and-value-mismatch) | The type and value of the message do not match. |

<a id="gettype"></a>
## getType

```TypeScript
getType(): WebMessageType
```

Get the type of the web message.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebMessageExt-getType(): WebMessageType--><!--Device-WebMessageExt-getType(): WebMessageType-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [WebMessageType](arkts-arkweb-webview-webmessagetype-e.md) | - Returns data of WebMessageType type |

<a id="setarray"></a>
## setArray

```TypeScript
setArray(message: Array<string | number | boolean>): void
```

Set the array value of the web message.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebMessageExt-setArray(message: Array<string | number | boolean>): void--><!--Device-WebMessageExt-setArray(message: Array<string | number | boolean>): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | Array&lt;string \| number \| boolean&gt; | Yes | set Array type data |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100014](../errorcode-webview.md#17100014-type-and-value-mismatch) | The type and value of the message do not match. |

<a id="setarraybuffer"></a>
## setArrayBuffer

```TypeScript
setArrayBuffer(message: ArrayBuffer): void
```

Set the array buffer value of the web message.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebMessageExt-setArrayBuffer(message: ArrayBuffer): void--><!--Device-WebMessageExt-setArrayBuffer(message: ArrayBuffer): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | ArrayBuffer | Yes | set ArrayBuffer type data |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100014](../errorcode-webview.md#17100014-type-and-value-mismatch) | The type and value of the message do not match. |

<a id="setboolean"></a>
## setBoolean

```TypeScript
setBoolean(message: boolean): void
```

Set the boolean value of the web message.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebMessageExt-setBoolean(message: boolean): void--><!--Device-WebMessageExt-setBoolean(message: boolean): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | boolean | Yes | set boolean type data |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100014](../errorcode-webview.md#17100014-type-and-value-mismatch) | The type and value of the message do not match. |

<a id="seterror"></a>
## setError

```TypeScript
setError(message: Error): void
```

Set the error value of the web message.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebMessageExt-setError(message: Error): void--><!--Device-WebMessageExt-setError(message: Error): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | Error | Yes | set Error type data |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100014](../errorcode-webview.md#17100014-type-and-value-mismatch) | The type and value of the message do not match. |

<a id="setnumber"></a>
## setNumber

```TypeScript
setNumber(message: number): void
```

Set the number value of the web message.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebMessageExt-setNumber(message: number): void--><!--Device-WebMessageExt-setNumber(message: number): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | number | Yes | set number type data |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100014](../errorcode-webview.md#17100014-type-and-value-mismatch) | The type and value of the message do not match. |

<a id="setstring"></a>
## setString

```TypeScript
setString(message: string): void
```

Set the string value of the web message.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebMessageExt-setString(message: string): void--><!--Device-WebMessageExt-setString(message: string): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | string | Yes | set string type data |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100014](../errorcode-webview.md#17100014-type-and-value-mismatch) | The type and value of the message do not match. |

<a id="settype"></a>
## setType

```TypeScript
setType(type: WebMessageType): void
```

Set the type of the web message.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-WebMessageExt-setType(type: WebMessageType): void--><!--Device-WebMessageExt-setType(type: WebMessageType): void-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [WebMessageType](arkts-arkweb-webview-webmessagetype-e.md) | Yes | set WebMessageType type data |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [17100014](../errorcode-webview.md#17100014-type-and-value-mismatch) | The type and value of the message do not match. |

