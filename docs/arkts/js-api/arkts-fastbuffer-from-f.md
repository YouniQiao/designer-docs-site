# from

## from

```TypeScript
function from(array: number[]): FastBuffer
```

根据指定数组创建新的FastBuffer对象。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| array | number[] | Yes | 指定数组，数组内各元素的取值范围为[0, 255]。 |

**Return value:**

| Type | Description |
| --- | --- |
| FastBuffer | 新的FastBuffer对象。 |

**Example**

```TypeScript
import { fastbuffer } from '@kit.ArkTS';

let buf = fastbuffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.info(buf.toString('hex'));
// Output: 627566666572

```

## from

```TypeScript
function from(arrayBuffer: ArrayBuffer | SharedArrayBuffer, byteOffset?: number, length?: number): FastBuffer
```

创建与`arrayBuffer`共享内存的指定长度的FastBuffer对象。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arrayBuffer | ArrayBuffer \| SharedArrayBuffer | Yes | 实例对象。 |
| byteOffset | number | No |  |
| length | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| FastBuffer | 返回一个FastBuffer对象，该对象与入参对象`arrayBuffer`共享相同的内存区域。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | Range error. Possible causes:  The value of the parameter is not within the specified range. |
| 10200068 | The underlying ArrayBuffer is null or detach. |

**Example**

```TypeScript
import { fastbuffer } from '@kit.ArkTS';

let ab = new ArrayBuffer(10);
let buf = fastbuffer.from(ab, 0, 2);
console.info(buf.length.toString());
// Output: 2

```

## from

```TypeScript
function from(buffer: FastBuffer | Uint8Array): FastBuffer
```

当入参为FastBuffer对象时，创建新的FastBuffer对象并复制入参FastBuffer对象的数据，然后返回新对象。 当入参为Uint8Array对象时，基于Uint8Array对象的内存创建新的FastBuffer对象并返回，保持数据的内存关联。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | FastBuffer \| Uint8Array | Yes | 对象数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| FastBuffer | 返回新的FastBuffer对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200068 | The underlying ArrayBuffer is null or detach. |

**Example**

```TypeScript
import { fastbuffer } from '@kit.ArkTS';

// Create a FastBuffer object of the FastBuffer type.
let buf1 = fastbuffer.from('buffer');
let buf2 = fastbuffer.from(buf1);
console.info(buf2.toString());
// Output: buffer

// Create a FastBuffer object of the Uint8Array type to ensure memory sharing between objects.
let uint8Array = new Uint8Array(10);
let buf3 = fastbuffer.from(uint8Array);
buf3.fill(1)
console.info("uint8Array:", uint8Array)
// Output: 1,1,1,1,1,1,1,1,1,1

```

## from

```TypeScript
function from(value: string, encoding?: BufferEncoding): FastBuffer
```

根据指定编码格式的字符串，创建新的FastBuffer对象。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | 字符串。 |
| encoding | BufferEncoding | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| FastBuffer | 返回新的FastBuffer对象。 |

**Example**

```TypeScript
import { fastbuffer } from '@kit.ArkTS';

let buf1 = fastbuffer.from('this is a test');
let buf2 = fastbuffer.from('7468697320697320612074c3a97374', 'hex');

console.info(buf1.toString());
// Output: this is a test
console.info(buf2.toString());
// Output: this is a tést

```

