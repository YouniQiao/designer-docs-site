# StringDecoder

提供将二进制流解码为字符串的能力。支持以下编码类型：utf-8、iso-8859-2、koi8-r、macintosh、windows-1250、 windows-1251、gbk、gb18030、big5、utf-16be 和 UTF-16le。

**Since:** 12

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor(encoding?: string)
```

用于创建 **StringDecoder** 实例的构造函数。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encoding | string | No |  |

**Example**

```TypeScript
let decoder = new util.StringDecoder();

```

## end

```TypeScript
end(chunk?: string | Uint8Array): string
```

结束解码过程，并将内部缓存中存储的任何剩余输入作为字符串返回。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| chunk | string \| Uint8Array | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | 解码后的字符串。 |

**Example**

```TypeScript
let decoder = new util.StringDecoder('utf-8');
let input = new Uint8Array([0xE4, 0xBD, 0xA0, 0xE5, 0xA5, 0xBD]);
const writeString = decoder.write(input.slice(0, 5));
const endString = decoder.end(input.slice(5));
console.info("writeString:", writeString);
// Output: writeString: Hello
console.info("endString:", endString);
// Output: endString: World

```

## write

```TypeScript
write(chunk: string | Uint8Array): string
```

解码字符串。Uint8Array 末尾的任何不完整多字节字符都会从返回的字符串中过滤掉，并存储在内部缓存中以供下次调用使用。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| chunk | string \| Uint8Array | Yes | 要解码的字符串。基于输入的编码类型进行解码。如果输入为 Uint8Array 类型，  则正常解码。如果输入为字符串类型，则直接返回该参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 解码后的字符串。 |

**Example**

```TypeScript
let decoder = new util.StringDecoder('utf-8');
let input =  new Uint8Array([0xE4, 0xBD, 0xA0, 0xE5, 0xA5, 0xBD]);
const decoded = decoder.write(input);
console.info("decoded:", decoded);
// Output: decoded: Hello, World

```

