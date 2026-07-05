# Blob

将数据处理为blob类型。

**Since:** 9

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { buffer } from '@kit.ArkTS';
```

## arrayBuffer

```TypeScript
arrayBuffer(): Promise<ArrayBuffer>
```

将Blob数据放入ArrayBuffer中返回，使用Promise进行异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ArrayBuffer> | Promise对象，返回包含Blob数据的ArrayBuffer。 |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let blob: buffer.Blob = new buffer.Blob(['a', 'b', 'c']);
let pro = blob.arrayBuffer();
pro.then((val: ArrayBuffer) => {
  let uint8Array: Uint8Array = new Uint8Array(val);
  console.info(uint8Array.toString());
  // Output: 97,98,99
});

```

## constructor

```TypeScript
constructor(sources: string[] | ArrayBuffer[] | TypedArray[] | DataView[] | Blob[], options?: Object)
```

Blob的构造函数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sources | string[] \| ArrayBuffer[] \| TypedArray[] \| DataView[] \| Blob[] | Yes | Blob实例的数据源。 |
| options | Object | No |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let blob: buffer.Blob  = new buffer.Blob(['a', 'b', 'c']);

class option {
  endings: string = "";
  type: string = "";
}
let o1: option = {endings:'native', type: 'MIME'}
let blob1: buffer.Blob = new buffer.Blob(['a', 'b', 'c'], o1);

```

## constructor

```TypeScript
constructor(sources: ArrayUnionType, options?: BlobOptions)
```

创建一个新的Blob对象，包含给定sources的拼接结果。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sources | ArrayUnionType | Yes | 存储在Blob中的数据源。 |
| options | BlobOptions | No |  |

## slice

```TypeScript
slice(start?: int, end?: int, type?: string): Blob
```

创建并返回一个包含原Blob对象中指定长度数据的新Blob对象。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | int | No |  |
| end | int | No |  |
| type | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Blob | 新的Blob实例对象。 |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let blob: buffer.Blob = new buffer.Blob(['a', 'b', 'c']);
let blob2 = blob.slice(0, 2);
let blob3 = blob.slice(0, 2, "MIME");
console.info("type:", blob3.type); // type: MIME

```

## text

```TypeScript
text(): Promise<string>
```

使用utf8解码并返回字符串。使用Promise进行异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回以utf8解码后的字符串。 |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let blob: buffer.Blob = new buffer.Blob(['a', 'b', 'c']);
let pro = blob.text();
pro.then((val: string) => {
  console.info(val);
  // Output: abc
});

```

## size

```TypeScript
get size(): int
```

Blob实例的总字节大小。

**Type:** int

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## type

```TypeScript
get type(): string
```

Blob实例的内容类型。

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

