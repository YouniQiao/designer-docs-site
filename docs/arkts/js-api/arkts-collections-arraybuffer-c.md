# ArrayBuffer

ArkTS TypedArray（[Int8Array]./arkts/@arkts.collections:collections、 [Uint8Array]./arkts/@arkts.collections:collections、 [Int16Array]./arkts/@arkts.collections:collections、 [Uint16Array]./arkts/@arkts.collections:collections、 [Int32Array]./arkts/@arkts.collections:collections、 [Uint32Array]./arkts/@arkts.collections:collections、 [Uint8ClampedArray]./arkts/@arkts.collections:collections、 [Float32Array]./arkts/@arkts.collections:collections）的底层数据结构。 > **说明** > > - 此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。 > **装饰器类型**：\@Sendable

**Since:** 12

**Decorator:** @Sendable

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { collections } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor(byteLength: number)
```

构造函数，用于创建一个指定长度的ArkTS ArrayBuffer对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteLength | number | Yes | buffer所占的字节数，取值范围是[0, 2147483647]，否则会抛出异常。0代表构造的ArrayBuffer的长度为0，2147483647表示构造的ArrayBuffer的长度为2147483647。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200012 | The ArrayBuffer's constructor cannot be directly invoked. |

## slice

```TypeScript
slice(begin: number, end?: number): ArrayBuffer
```

返回一个新的ArkTS ArrayBuffer对象，其包含原ArkTS ArrayBuffer指定范围的内容。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| begin | number | Yes | 开始索引，如果`begin &lt; 0`，则会从`begin +  arrayBuffer.byteLength`位置开始。 |
| end | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ArrayBuffer | 新生成的ArkTS ArrayBuffer对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The slice method cannot be bound. |
| 10200201 | Concurrent modification error. |

## byteLength

```TypeScript
readonly byteLength: number
```

buffer所占的字节数。

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

