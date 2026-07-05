# Blob

将数据处理为blob类型。

**起始版本：** 9

**系统能力：** SystemCapability.Utils.Lang

## 导入模块

```TypeScript
import { buffer } from '@kit.ArkTS';
```

## arrayBuffer

```TypeScript
arrayBuffer(): Promise<ArrayBuffer>
```

将Blob数据放入ArrayBuffer中返回，使用Promise进行异步回调。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ArrayBuffer> | Promise对象，返回包含Blob数据的ArrayBuffer。 |

**示例：**

```TypeScript
import { buffer } from '@kit.ArkTS';

let blob: buffer.Blob = new buffer.Blob(['a', 'b', 'c']);
let pro = blob.arrayBuffer();
pro.then((val: ArrayBuffer) => {
  let uint8Array: Uint8Array = new Uint8Array(val);
  console.info(uint8Array.toString());
  // 输出结果：97,98,99
});

```

## constructor

```TypeScript
constructor(sources: string[] | ArrayBuffer[] | TypedArray[] | DataView[] | Blob[], options?: Object)
```

Blob的构造函数。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sources | string[] \| ArrayBuffer[] \| TypedArray[] \| DataView[] \| Blob[] | 是 | Blob实例的数据源。 |
| options | Object | 否 |  |

**示例：**

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

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sources | ArrayUnionType | 是 | 存储在Blob中的数据源。 |
| options | BlobOptions | 否 |  |

## slice

```TypeScript
slice(start?: int, end?: int, type?: string): Blob
```

创建并返回一个包含原Blob对象中指定长度数据的新Blob对象。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| start | int | 否 |  |
| end | int | 否 |  |
| type | string | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Blob | 新的Blob实例对象。 |

**示例：**

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

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise对象，返回以utf8解码后的字符串。 |

**示例：**

```TypeScript
import { buffer } from '@kit.ArkTS';

let blob: buffer.Blob = new buffer.Blob(['a', 'b', 'c']);
let pro = blob.text();
pro.then((val: string) => {
  console.info(val);
  // 输出结果：abc
});

```

## size

```TypeScript
get size(): int
```

Blob实例的总字节大小。

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

## type

```TypeScript
get type(): string
```

Blob实例的内容类型。

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

