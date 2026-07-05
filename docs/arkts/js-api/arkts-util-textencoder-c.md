# TextEncoder

提供将字符串编码为字节数组的 API。支持多种编码格式。 使用 **TextEncoder** 进行编码时，每个字符所占用的字节数因编码格式而异。必须显式指定编码格式以获取所需的编码结果。

**Since:** 7

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor()
```

用于创建 **TextEncoder** 对象的构造函数。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
let textEncoder = new util.TextEncoder();

```

## constructor

```TypeScript
constructor(encoding?: string)
```

用于创建 **TextEncoder** 对象的构造函数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encoding | string | No |  |

**Example**

```TypeScript
let textEncoder = new util.TextEncoder("utf-8");

```

## create

```TypeScript
static create(encoding?: string): TextEncoder
```

创建一个 **TextEncoder** 对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encoding | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| TextEncoder | TextEncoder 对象。 |

**Example**

```TypeScript
let textEncoder = util.TextEncoder.create("utf-8");

```

## encode

```TypeScript
encode(input?: string): Uint8Array
```

将输入内容编码为 Uint8Array 对象。

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.util.encodeInto

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| input | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | 获取到的 Uint8Array 对象。 |

**Example**

```TypeScript
let textEncoder = new util.TextEncoder();
let result = textEncoder.encode("\uD800¥¥");
console.info("result = " + result);
// Output: result = 237,160,128,194,165,194,165

```

## encodeInto

```TypeScript
encodeInto(input?: string): Uint8Array
```

将输入内容编码为 Uint8Array 对象。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| input | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | 获取到的 Uint8Array 对象。 |

**Example**

```TypeScript
let textEncoder = new util.TextEncoder();
let result = textEncoder.encodeInto("\uD800¥¥");
console.info("result = " + result);
// Output: result = 237,160,128,194,165,194,165

```

## encodeInto

```TypeScript
encodeInto(input: string, dest: Uint8Array): { read: number; written: number }
```

将生成的 UTF-8 编码文本写入到数组中。

**Since:** 7

**Deprecated since:** 9

**Substitute:** util.TextEncoder.encodeIntoUint8Array

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| input | string | Yes | 要编码的字符串。 |
| dest | Uint8Array | Yes | 用于存储 UTF-8 编码文本的 Uint8Array 对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| { read: number; written: number } | 获取到的对象。read 表示已编码的字符数，written 表示已编码字符所占用的字节数。 |

**Example**

```TypeScript
let textEncoder = new util.TextEncoder();
let buffer = new ArrayBuffer(4);
let uint8 = new Uint8Array(buffer);
let result = textEncoder.encodeInto('abcd', uint8);
console.info("uint8 = " + uint8);
// Output: uint8 = 97,98,99,100

```

## encodeIntoUint8Array

```TypeScript
encodeIntoUint8Array(input: string, dest: Uint8Array): EncodeIntoUint8ArrayInfo
```

对输入内容进行编码，并将结果存储到 Uint8Array 对象中。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| input | string | Yes | 要编码的字符串。 |
| dest | Uint8Array | Yes | 用于存储 UTF-8 编码文本的 Uint8Array 对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| EncodeIntoUint8ArrayInfo | 返回该对象，其中 read 表示已编码的字符数，written 表示已编码字符所占用的字节数。[since 9 - 10]  @returns { EncodeIntoUint8ArrayInfo } 获取到的对象。read 表示已编码的字符数，written 表示已编码字符所占用的  字节数。[since 11] |

**Example**

```TypeScript
let textEncoder = new util.TextEncoder();
let buffer = new ArrayBuffer(4);
let uint8 = new Uint8Array(buffer);
let result = textEncoder.encodeIntoUint8Array('abcd', uint8);
console.info("uint8 = " + uint8);
// Output: uint8 = 97,98,99,100
console.info("result.read = " + result.read);
// Output: result.read = 4
console.info("result.written = " + result.written);
// Output: result.written = 4

```

## encoding

```TypeScript
readonly encoding = 'utf-8'
```

编码格式。<br>支持的格式包括：utf-8、gb2312、gb18030、ibm866、iso-8859-1、iso-8859-2、iso-8859-3、iso-8859-4、 iso-8859-5、iso-8859-6、iso-8859-7、iso-8859-8、iso-8859-8-i、iso-8859-10、iso-8859-13、iso-8859-14、 iso-8859-15、koi8-r、koi8-u、macintosh、windows-874、windows-1250、windows-1251、windows-1252、windows-1253、 windows-1254、windows-1255、windows-1256、windows-1257、windows-1258、gbk、big5、euc-jp、iso-2022-jp、shift_jis、 euc-kr、x-mac-cyrillic、utf-16be 和 utf-16le。<br>默认值为 **'utf-8'**。

**Type:** 'utf-8'

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

