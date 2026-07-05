# WebMessageExt

The message received or sent from web message port.

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

获取数据对象的数组类型数据。

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

获取数据对象的原始二进制数据。

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

获取数据对象的布尔类型数据。

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

## getError

```TypeScript
getError(): Error
```

获取数据对象的错误类型数据。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Error | - 返回错误对象类型的数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17100014 | The type and value of the message do not match. |

## getNumber

```TypeScript
getNumber(): number
```

获取数据对象的数值类型数据。

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

获取数据对象的字符串类型数据。

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
getType(): WebMessageType
```

获取数据对象的类型。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| WebMessageType | - 返回类型为 WebMessageType 的数据。 |

## setArray

```TypeScript
setArray(message: Array<string | number | boolean>): void
```

设置数据对象的数组类型数据。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | Array&lt;string \| number \| boolean> | Yes | 数组类型数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100014 | The type and value of the message do not match. |

## setArrayBuffer

```TypeScript
setArrayBuffer(message: ArrayBuffer): void
```

设置数据对象的原始二进制数据。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | ArrayBuffer | Yes | 原始二进制类型数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100014 | The type and value of the message do not match. |

## setBoolean

```TypeScript
setBoolean(message: boolean): void
```

设置数据对象的布尔类型数据。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | boolean | Yes | 布尔类型数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100014 | The type and value of the message do not match. |

## setError

```TypeScript
setError(message: Error): void
```

设置数据对象的错误对象类型数据。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | Error | Yes | 错误对象类型数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100014 | The type and value of the message do not match. |

## setNumber

```TypeScript
setNumber(message: number): void
```

设置数据对象的数值类型数据。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | number | Yes | 数值类型数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100014 | The type and value of the message do not match. |

## setString

```TypeScript
setString(message: string): void
```

设置数据对象的字符串类型数据。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | string | Yes | 字符串类型数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100014 | The type and value of the message do not match. |

## setType

```TypeScript
setType(type: WebMessageType): void
```

设置数据对象的类型。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | WebMessageType | Yes | 设置 WebMessageType 类型数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 17100014 | The type and value of the message do not match. |

