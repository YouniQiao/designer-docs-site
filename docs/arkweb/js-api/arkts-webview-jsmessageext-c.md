# JsMessageExt

该消息用于指示JavaScript代码执行结果的状态。

**Since:** 10

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## getArray

```TypeScript
getArray(): Array<string | number | boolean>
```

获取JavaScript代码执行结果的数组类型数据。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string \| number \| boolean> | - Returns data of Array type |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17100014 | The type and value of the message do not match. |

## getArrayBuffer

```TypeScript
getArrayBuffer(): ArrayBuffer
```

获取JavaScript代码执行结果的原始二进制数据。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| ArrayBuffer | - 返回原始二进制数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17100014 | The type and value of the message do not match. |

## getBoolean

```TypeScript
getBoolean(): boolean
```

获取JavaScript代码执行结果的布尔类型数据。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - 返回布尔类型的数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17100014 | The type and value of the message do not match. |

## getErrorDescription

```TypeScript
getErrorDescription(): string | null
```

获取JS执行的异常信息，并将其序列化为字符串。

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - If an exception occurs, or the returned type is object, return the  serialized string in the format of "Not support type: ", Parts exceeding a length of  2048 will be truncated; otherwise, return null. |

## getNumber

```TypeScript
getNumber(): number
```

获取JavaScript代码执行结果的数值类型数据。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | - 返回数值类型的数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17100014 | The type and value of the message do not match. |

## getString

```TypeScript
getString(): string
```

获取JavaScript代码执行结果的字符串类型数据。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | - 返回字符串类型的数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17100014 | The type and value of the message do not match. |

## getType

```TypeScript
getType(): JsMessageType
```

获取数据对象的类型。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| JsMessageType | - runJavaScriptExt接口脚本执行后返回的结果的类型。 |

