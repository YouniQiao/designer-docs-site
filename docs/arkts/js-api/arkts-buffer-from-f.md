# from

## from

```TypeScript
function from(array: double[]): Buffer
```

根据指定数组创建新的Buffer对象。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| array | double[] | Yes | 指定数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| Buffer | 新的Buffer对象。 |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.info(buf.toString('hex'));
// Output: 627566666572

```

## from

```TypeScript
function from(arrayBuffer: ArrayBuffer | SharedArrayBuffer, byteOffset?: number, length?: number): Buffer
```

创建与arrayBuffer共享内存的指定长度的Buffer对象。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arrayBuffer | ArrayBuffer \| SharedArrayBuffer | Yes | 实例对象，用于共享内存。 |
| byteOffset | number | No |  |
| length | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Buffer | 返回一个Buffer对象，该对象与入参对象arrayBuffer共享相同的内存区域。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of "[byteOffset/length]" is out of range.  It must be >= [left range] and &lt;= [right range]. Received value is: [byteOffset/length] |

**Example**

```TypeScript
import { buffer, JSON } from '@kit.ArkTS';

let ab = new ArrayBuffer(10);
let buf = buffer.from(ab, 0, 2);
console.info(JSON.stringify(buf)); // {"type":"Buffer","data":[0,0]}

```

## from

```TypeScript
function from(buffer: Buffer | Uint8Array): Buffer
```

当入参为Buffer对象时，创建新的Buffer对象并复制入参Buffer对象的数据，然后返回新对象。 当入参为Uint8Array对象时，基于Uint8Array对象的内存创建新的Buffer对象并返回，保持数据的内存关联。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | Buffer \| Uint8Array | Yes | 对象数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| Buffer | 新的Buffer对象。 |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

// Create a Buffer object of the Buffer type.
let buf1 = buffer.from('buffer');
let buf2 = buffer.from(buf1);

// Create a Buffer object of the Uint8Array type to ensure memory sharing between objects.
let uint8Array = new Uint8Array(10);
let buf3 = buffer.from(uint8Array);
buf3.fill(1);
console.info("uint8Array:", uint8Array);
// Output: 1,1,1,1,1,1,1,1,1,1

```

## from

```TypeScript
function from(object: Object, offsetOrEncoding: int | string, length: int): Buffer
```

根据指定的object类型数据，创建新的Buffer对象。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| object | Object | Yes | 支持Symbol.toPrimitive或valueOf()的对象。 |
| offsetOrEncoding | int \| string | Yes | 字节偏移量或编码格式。 |
| length | int | Yes | 字节长度（此入参仅在object的valueOf()返回值为ArrayBuffer时生效，  取值范围：0 &lt;= length &lt;= ArrayBuffer.byteLength，超出范围时报错: 10200001）。  其他情况下可填任意number类型值，该参数不会对结果产生影响。 |

**Return value:**

| Type | Description |
| --- | --- |
| Buffer | 新的Buffer对象。 |

**Example**

```TypeScript
import { buffer, JSON } from '@kit.ArkTS';

let buf = buffer.from(new String('this is a test'), 'utf8', 14);
console.info(JSON.stringify(buf)); // {"type":"Buffer","data":[116,104,105,115,32,105,115,32,97,32,116,101,115,116]}

```

## from

```TypeScript
function from(string: String, encoding?: BufferEncoding): Buffer
```

根据指定编码格式的字符串，创建新的Buffer对象。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| string | String | Yes | 字符串。 |
| encoding | BufferEncoding | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Buffer | 新的Buffer对象。 |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf1 = buffer.from('this is a test');
let buf2 = buffer.from('7468697320697320612074c3a97374', 'hex');

console.info(buf1.toString());
// Output: this is a test
console.info(buf2.toString());
// Output: this is a tést

```

