# ArrayBuffer

Underlying data structure of the ArkTS TypedArray ([Int8Array](arkts-collections.md#collections), [Uint8Array](arkts-collections.md#collections), [Int16Array](arkts-collections.md#collections), [Uint16Array](arkts-collections.md#collections), [Int32Array](arkts-collections.md#collections), [Uint32Array](arkts-collections.md#collections), [Uint8ClampedArray](arkts-collections.md#collections), and [Float32Array](arkts-collections.md#collections)). > **NOTE** > > - This module can be imported only to ArkTS files (with the file name extension .ets). > **Decorator**: \@Sendable

**Since:** 12

**Decorator:** @Sendable

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { collections } from '@arkts.collections';
```

## constructor

```TypeScript
constructor(byteLength: number)
```

A constructor used to create an ArkTS ArrayBuffer of a given length.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteLength | number | Yes | Number of bytes occupied by the buffer. The maximum value is **2147483647**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200012](../errorcode-utils.md#10200012-constructor-calling-failure) | The ArrayBuffer's constructor cannot be directly invoked. |

## slice

```TypeScript
slice(begin: number, end?: number): ArrayBuffer
```

Selects a range of elements in this ArkTS ArrayBuffer to create an ArkTS ArrayBuffer.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| begin | number | Yes | Start index of the range. If a negative number is passed in, it refers to the index of`begin + arrayBuffer.byteLength`. |
| end | number | No | End index of the range (exclusive). If a negative number is passed in, it refers to theindex of `end + arrayBuffer.byteLength`. The default value is the length of the original ArkTS ArrayBuffer. |

**Return value:**

| Type | Description |
| --- | --- |
| ArrayBuffer | New ArrayBuffer generated. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200011](../errorcode-utils.md#10200011-passed-thisobject-is-not-an-instance-of-the-containers-class) | The slice method cannot be bound. |
| [10200201](../errorcode-utils.md#10200201-concurrent-modification-error) | Concurrent modification error. |

## byteLength

```TypeScript
readonly byteLength: number
```

Number of bytes occupied by the buffer.

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Utils.Lang

