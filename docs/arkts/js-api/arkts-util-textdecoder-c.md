# TextDecoder

提供将字节数组解码为字符串的 API。支持多种格式，包括 UTF-8、UTF-16LE、UTF-16BE、ISO-8859 和 Windows-1251。

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

用于创建 **TextDecoder** 对象的构造函数。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
let textDecoder = new util.TextDecoder();
let retStr = textDecoder.encoding;
console.info('retStr = ' + retStr);
// Output: retStr = utf-8

```

## constructor

```TypeScript
constructor(encoding?: string, options?: { fatal?: boolean; ignoreBOM?: boolean })
```

用于创建 **TextDecoder** 对象的构造函数。

**Since:** 7

**Deprecated since:** 9

**Substitute:** util.TextDecoder.create

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encoding | string | No | 编码格式。默认格式为 'utf-8'。 |
| options | { fatal?: boolean; ignoreBOM?: boolean } | No | 解码相关的选项，包含 fatal 和 ignoreBOM。 |

**Example**

```TypeScript
let textDecoder = new util.TextDecoder("utf-8",{ignoreBOM: true});

```

## create

```TypeScript
static create(encoding?: string, options?: TextDecoderOptions): TextDecoder
```

创建一个 **TextDecoder** 对象。提供与已弃用的带参构造函数相同的功能。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encoding | string | No | 编码格式。默认格式为 'utf-8'。[since 9 - 10] |
| options | TextDecoderOptions | No | 解码相关的选项，包含 fatal 和 ignoreBOM。[since 9 - 10] |

**Return value:**

| Type | Description |
| --- | --- |
| TextDecoder | 创建的 TextDecoder 对象。 |

**Example**

```TypeScript
let textDecoderOptions: util.TextDecoderOptions = {
  fatal: false,
  ignoreBOM : true
}
let textDecoder = util.TextDecoder.create('utf-8', textDecoderOptions);
let retStr = textDecoder.encoding;
console.info('retStr = ' + retStr);
// Output: retStr = utf-8

```

## decode

```TypeScript
decode(input: Uint8Array, options?: { stream?: false }): string
```

将输入内容解码为字符串。

**Since:** 7

**Deprecated since:** 9

**Substitute:** util.TextDecoder.decodeToString

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| input | Uint8Array | Yes | 要解码的 Uint8Array 对象。 |
| options | { stream?: false } | No | 解码相关的选项。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 获取到的字符串。 |

**Example**

```TypeScript
let textDecoder = new util.TextDecoder("utf-8",{ignoreBOM: true});
let uint8 = new Uint8Array(6);
uint8[0] = 0xEF;
uint8[1] = 0xBB;
uint8[2] = 0xBF;
uint8[3] = 0x61;
uint8[4] = 0x62;
uint8[5] = 0x63;
console.info("input num:");
let retStr = textDecoder.decode(uint8, {stream: false});
console.info("retStr = " + retStr);
// Output: retStr = abc

```

## decodeToString

```TypeScript
decodeToString(input: Uint8Array, options?: DecodeToStringOptions): string
```

将输入内容解码为字符串。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| input | Uint8Array | Yes | 要解码的 Uint8Array 对象。 |
| options | DecodeToStringOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | 获取到的字符串。 |

**Example**

```TypeScript
let textDecoderOptions: util.TextDecoderOptions = {
  fatal: false,
  ignoreBOM : true
}
let decodeToStringOptions: util.DecodeToStringOptions = {
  stream: false
}
let textDecoder = util.TextDecoder.create('utf-8', textDecoderOptions);
let uint8 = new Uint8Array([0xEF, 0xBB, 0xBF, 0x61, 0x62, 0x63]);
let retStr = textDecoder.decodeToString(uint8, decodeToStringOptions);
console.info("retStr = " + retStr);
// Output: retStr = abc

```

## decodeWithStream

```TypeScript
decodeWithStream(input: Uint8Array, options?: DecodeWithStreamOptions): string
```

将输入内容解码为字符串。如果 **input** 是空数组，则返回 **undefined**。

**Since:** 9

**Deprecated since:** 12

**Substitute:** util.TextDecoder.decodeToString

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| input | Uint8Array | Yes | 要解码的 Uint8Array 对象。 |
| options | DecodeWithStreamOptions | No | 解码相关的选项。[since 9 - 10] |

**Return value:**

| Type | Description |
| --- | --- |
| string | 获取到的字符串。 |

**Example**

```TypeScript
let textDecoderOptions: util.TextDecoderOptions = {
  fatal: false,
  ignoreBOM : true
}
let decodeWithStreamOptions: util.DecodeWithStreamOptions = {
  stream: false
}
let textDecoder = util.TextDecoder.create('utf-8', textDecoderOptions);
let uint8 = new Uint8Array(6);
uint8[0] = 0xEF;
uint8[1] = 0xBB;
uint8[2] = 0xBF;
uint8[3] = 0x61;
uint8[4] = 0x62;
uint8[5] = 0x63;
console.info("input num:");
let retStr = textDecoder.decodeWithStream(uint8, decodeWithStreamOptions);
console.info("retStr = " + retStr);
// Output: retStr = abc

```

## ignoreBOM

```TypeScript
readonly ignoreBOM = false
```

是否忽略字节顺序标记（BOM）。默认值为 **false**，表示结果中包含 BOM。

**Type:** false

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## encoding

```TypeScript
readonly encoding: string
```

编码格式。<br>支持的格式包括：utf-8、ibm866、iso-8859-2、iso-8859-3、iso-8859-4、iso-8859-5、iso-8859-6、 iso-8859-7、iso-8859-8、iso-8859-8-i、iso-8859-10、iso-8859-13、iso-8859-14、iso-8859-15、koi8-r、koi8-u、 macintosh、windows-874、windows-1250、windows-1251、windows-1252、windows-1253、windows-1254、windows-1255、 windows-1256、windows-1257、windows-1258、x-mac-cyrillic、gbk、gb18030、big5、euc-jp、iso-2022-jp、shift_jis、 euc-kr、utf-16be、utf-16le、gb2312 和 iso-8859-1。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## fatal

```TypeScript
readonly fatal: boolean
```

是否显示致命错误。值为 **true** 表示显示致命错误，值为 **false** 表示相反的情况。

**Type:** boolean

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

