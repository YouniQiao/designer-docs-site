# Base64

将包含 Base64 数据的字符串或 Uint8Array 解码为重新分配的 Uint8Array。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.Base64Helper

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor()
```

用于创建 **Base64** 对象的构造函数。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.Base64Helper.constructor

**System capability:** SystemCapability.Utils.Lang

## decode

```TypeScript
decode(src: Uint8Array | string): Promise<Uint8Array>
```

将输入内容解码为 Uint8Array 对象。该接口使用 promise 返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.Base64Helper.decode

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array \| string | Yes | 要解码的 Uint8Array 对象或字符串。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array> | 用于返回获取到的 Uint8Array 对象的 promise。 |

## decodeSync

```TypeScript
decodeSync(src: Uint8Array | string): Uint8Array
```

将输入内容解码为 Uint8Array 对象。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.Base64Helper.decodeSync

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array \| string | Yes | 要解码的 Uint8Array 对象或字符串。 |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | 获取到的 Uint8Array 对象。 |

## encode

```TypeScript
encode(src: Uint8Array): Promise<Uint8Array>
```

将输入内容编码为 Uint8Array 对象。该接口使用 promise 返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.Base64Helper.encode

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array | Yes | 要编码的 Uint8Array 对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array> | 用于返回获取到的 Uint8Array 对象的 promise。 |

## encodeSync

```TypeScript
encodeSync(src: Uint8Array): Uint8Array
```

对输入的 Uint8Array 字节数组进行 Base64 编码，并返回编码后的 Uint8Array。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.Base64Helper.encodeSync

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array | Yes | 要编码的 Uint8Array 对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | 获取到的 Uint8Array 对象。 |

## encodeToString

```TypeScript
encodeToString(src: Uint8Array): Promise<string>
```

将输入内容编码为字符串。该接口使用 promise 返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.Base64Helper.encodeToString

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array | Yes | 要编码的 Uint8Array 对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | 用于返回获取到的字符串的 promise。 |

## encodeToStringSync

```TypeScript
encodeToStringSync(src: Uint8Array): string
```

对输入的 Uint8Array 字节数组进行 Base64 编码，并返回编码后的字符串。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.Base64Helper.encodeToStringSync

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Uint8Array | Yes | 要编码的 Uint8Array 对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 获取到的字符串。 |

