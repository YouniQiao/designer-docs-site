# Base64Helper

提供 Base64 和 Base64URL 的编解码。Base64 编码表包含 64 个字符，分别为大写字母（A-Z）、小写字母（a-z）、数字（0-9） 以及特殊字符加号（+）和斜杠（/）。编码时，原始数据按三个字节一组进行划分，每组包含一个 6 位的数字。然后使用 Base64 编码表中对应的字符来表示这些数字。如果最后一组只包含一个或两个字节，则使用等号（=）进行填充。Base64URL 编码表包含 64 个字符，分别为大写字母（A-Z）、小写字母（a-z）、数字（0-9）以及特殊字符加号（+）和斜杠（/）。Base64URL 编码结果 不包含等号（=）。

**Since:** 9

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor()
```

用于创建 **Base64Helper** 实例的构造函数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## decode

```TypeScript
decode(src: Uint8Array | string, options?: Type): Promise<Uint8Array>
```

将输入内容解码为 Uint8Array 对象。该接口使用 promise 返回结果。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array \| string | Yes | 要解码的 Uint8Array 对象或字符串。 |
| options | Type | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array> | 用于返回获取到的 Uint8Array 对象的 promise。 |

## decodeSync

```TypeScript
decodeSync(src: Uint8Array | string, options?: Type): Uint8Array
```

将字符串解码为 Uint8Array 对象。该接口同步返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array \| string | Yes | 要解码的 Uint8Array 对象或字符串。 |
| options | Type | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | 获取到的 Uint8Array 对象。 |

## encode

```TypeScript
encode(src: Uint8Array, options?: Type): Promise<Uint8Array>
```

将输入内容编码为 Uint8Array 对象。该接口使用 promise 返回结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array | Yes | 要编码的 Uint8Array 对象。 |
| options | Type | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array> | 用于返回获取到的 Uint8Array 对象的 promise。 |

## encodeSync

```TypeScript
encodeSync(src: Uint8Array, options?: Type): Uint8Array
```

将输入内容编码为 Uint8Array 对象。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array | Yes | 要编码的 Uint8Array 对象。 |
| options | Type | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | 获取到的 Uint8Array 对象。 |

## encodeToString

```TypeScript
encodeToString(src: Uint8Array, options?: Type): Promise<string>
```

将输入内容编码为字符串。该接口使用 promise 返回结果。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array | Yes | 要编码的 Uint8Array 对象。 |
| options | Type | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | 用于返回获取到的字符串的 promise。 |

## encodeToStringSync

```TypeScript
encodeToStringSync(src: Uint8Array, options?: Type): string
```

对输入的 Uint8Array 字节数组进行 Base64 编码，并返回字符串。该方法支持多种编码格式，包括标准 Base64 编码、符合 MIME 规范的 Base64 编码（带换行）以及 URL 安全的 Base64 编码。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array | Yes | 要编码的 Uint8Array 对象。 |
| options | Type | No | 编码格式。 可取值如下： - util.Type.BASIC（默认）：Base64 编码。返回值不包含  回车符或换行符。 - util.Type.MIME：Base64 编码。如果返回值超过 76 个字符，则每 76 个字符插入一个换行，  每行以 '\r\n' 结尾。如果返回值少于 76 个字符，则抛出异常。 - util.Type.BASIC_URL_SAFE：Base64URL 编码。  返回值不包含回车符或换行符。 - util.Type.MIME_URL_SAFE：Base64URL 编码。返回值每行最多 76 个字符且以  '\r\n' 结尾。[since 12] |

**Return value:**

| Type | Description |
| --- | --- |
| string | 获取到的字符串。 |

