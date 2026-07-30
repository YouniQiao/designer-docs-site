# JsMessageExt

The message for indicating the of result of JavaScript code execution.

**Since:** 10

<!--Device-webview-class JsMessageExt--><!--Device-webview-class JsMessageExt-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## getArray

```TypeScript
getArray(): Array<string | number | boolean>
```

Get the array value of the the JavaScript code execution result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-JsMessageExt-getArray(): Array<string | number | boolean>--><!--Device-JsMessageExt-getArray(): Array<string | number | boolean>-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string \| number \| boolean&gt; | - Returns data of Array type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100014](../errorcode-webview.md#17100014-type-and-value-mismatch) | The type and value of the message do not match. |

## getArrayBuffer

```TypeScript
getArrayBuffer(): ArrayBuffer
```

Get the array buffer value of the JavaScript code execution result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-JsMessageExt-getArrayBuffer(): ArrayBuffer--><!--Device-JsMessageExt-getArrayBuffer(): ArrayBuffer-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| ArrayBuffer | - Returns data of ArrayBuffer |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100014](../errorcode-webview.md#17100014-type-and-value-mismatch) | The type and value of the message do not match. |

## getBoolean

```TypeScript
getBoolean(): boolean
```

Get the boolean value of the JavaScript code execution result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-JsMessageExt-getBoolean(): boolean--><!--Device-JsMessageExt-getBoolean(): boolean-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - Returns data of Boolean type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100014](../errorcode-webview.md#17100014-type-and-value-mismatch) | The type and value of the message do not match. |

## getErrorDescription

```TypeScript
getErrorDescription(): string | null
```

Get the object or exception of the the JavaScript code execution result and serialize it into a string.

**Since:** 22

<!--Device-JsMessageExt-getErrorDescription(): string | null--><!--Device-JsMessageExt-getErrorDescription(): string | null-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - If an exception occurs, or the returned type is object, return the serialized string in the format of "Not support type: &lt;{exception\|object}&gt;", Parts exceeding a length of2048 will be truncated; otherwise, return null. |

## getNumber

```TypeScript
getNumber(): number
```

Get the number value of the JavaScript code execution result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-JsMessageExt-getNumber(): number--><!--Device-JsMessageExt-getNumber(): number-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | - Returns data of number type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100014](../errorcode-webview.md#17100014-type-and-value-mismatch) | The type and value of the message do not match. |

## getString

```TypeScript
getString(): string
```

Get the string value of the JavaScript code execution result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-JsMessageExt-getString(): string--><!--Device-JsMessageExt-getString(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - Returns data of string type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17100014](../errorcode-webview.md#17100014-type-and-value-mismatch) | The type and value of the message do not match. |

## getType

```TypeScript
getType(): JsMessageType
```

Get the type of the JavaScript code execution result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-JsMessageExt-getType(): JsMessageType--><!--Device-JsMessageExt-getType(): JsMessageType-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [JsMessageType](arkts-arkweb-webview-jsmessagetype-e.md) | - Returns data of JsMessageType type |

