# Buffer

Buffer对象是处理二进制数据的缓存区。

**Since:** 9

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { buffer } from '@kit.ArkTS';
```

## compare

```TypeScript
compare(
      target: Buffer | Uint8Array,
      targetStart?: number,
      targetEnd?: number,
      sourceStart?: number,
      sourceEnd?: number
    ): -1 | 0 | 1
```

比较当前Buffer对象与目标Buffer对象，并返回Buffer在排序中的结果。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | Buffer \| Uint8Array | Yes | 要比较的实例对象。 |
| targetStart | number | No |  |
| targetEnd | number | No |  |
| sourceStart | number | No |  |
| sourceEnd | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| -1 | 比较结果。如果两个Buffer对象相同，则返回0；如果当前对象在排序时位于目标对象之后，则返回1；  如果当前对象在排序时位于目标对象之前，则返回-1。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of "[targetStart/targetEnd/sourceStart/sourceEnd]" is out of  range.  It must be >= 0 and &lt;= [right range]. Received value is: [targetStart/targetEnd/sourceStart/sourceEnd] |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf1 = buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
let buf2 = buffer.from([5, 6, 7, 8, 9, 1, 2, 3, 4]);

console.info(buf1.compare(buf2, 5, 9, 0, 4).toString());
// Output: 0
console.info(buf1.compare(buf2, 0, 6, 4).toString());
// Output: -1
console.info(buf1.compare(buf2, 5, 6, 5).toString());
// Output: 1

```

## compare

```TypeScript
compare(
      target: Buffer | Uint8Array,
      targetStart?: int,
      targetEnd?: int,
      sourceStart?: int,
      sourceEnd?: int
    ): int
```

将buf与target进行比较，返回一个数字，指示buf在排序中位于target之前、之后还是相同位置。 比较基于每个Buffer中实际的字节序列。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | Buffer \| Uint8Array | Yes | 用于与此Buffer进行比较的Buffer对象。 |
| targetStart | int | No |  |
| targetEnd | int | No |  |
| sourceStart | int | No |  |
| sourceEnd | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int | 如果buf与target相同，则返回0；如果buf在排序中位于target之前或之后，则返回相应数字。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of "[targetStart/targetEnd/sourceStart/sourceEnd]" is out of  range.  It must be >= 0 and &lt;= [right range]. Received value is: [targetStart/targetEnd/sourceStart/sourceEnd] |

## copy

```TypeScript
copy(target: Buffer | Uint8Array, targetStart?: int, sourceStart?: int, sourceEnd?: int): int
```

将this实例中指定位置的数据复制到target的指定位置上，并返回复制的字节总长度。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | Buffer \| Uint8Array | Yes | 要复制到的Buffer或Uint8Array实例。 |
| targetStart | int | No |  |
| sourceStart | int | No |  |
| sourceEnd | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int | 复制的字节总长度。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of "[targetStart/sourceStart/sourceEnd]" is out of range. It must  be >= 0.  Received value is: [targetStart/sourceStart/sourceEnd] |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf1 = buffer.allocUninitializedFromPool(26);
let buf2 = buffer.allocUninitializedFromPool(26).fill('!');

for (let i = 0; i < 26; i++) {
  buf1.writeInt8(i + 97, i);
}

buf1.copy(buf2, 8, 16, 20);
console.info(buf2.toString('ascii', 0, 25));
// Output: !!!!!!!!qrst!!!!!!!!!!!!!

```

## entries

```TypeScript
entries(): IterableIterator<[int, long]>
```

返回一个包含key和value的迭代器。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[int, long]> | 包含key和value的迭代器，同时两者皆为number类型。[since 9 - 10]  @returns { IterableIterator } [since 11] |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from('buffer');
let pair = buf.entries();
let next: IteratorResult<Object[]> = pair.next();
while (!next.done) {
  console.info("buffer: " + next.value);
  /*
  Output: buffer: 0,98
           buffer: 1,117
           buffer: 2,102
           buffer: 3,102
           buffer: 4,101
           buffer: 5,114
   */
  next = pair.next();
}

```

## equals

```TypeScript
equals(otherBuffer: Uint8Array | Buffer): boolean
```

比较this实例和otherBuffer实例是否相等。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| otherBuffer | Uint8Array \| Buffer | Yes | 比较的目标对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 相等则返回true，否则返回false。 |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf1 = buffer.from('ABC');
let buf2 = buffer.from('414243', 'hex');
let buf3 = buffer.from('ABCD');

console.info(buf1.equals(buf2).toString());
// Output: true
console.info(buf1.equals(buf3).toString());
// Output: false

```

## fill

```TypeScript
fill(
      value: string | Buffer | Uint8Array | int | double | long,
      offset?: int,
      end?: int,
      encoding?: BufferEncoding
    ): Buffer
```

使用value填充当前对象指定位置的数据，默认为循环填充，并返回填充后的Buffer对象。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| Buffer \| Uint8Array \| int \| double \| long | Yes | 用于填充的值。[since 11] |
| offset | int | No |  |
| end | int | No |  |
| encoding | BufferEncoding | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Buffer | 返回填充后的Buffer对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of "[offset/end]" is out of range. It must be >= 0 and &lt;=  [right range]. Received value is: [offset/end] |

## includes

```TypeScript
includes(value: string | int | double | long | Buffer | Uint8Array, byteOffset?: int, encoding?: BufferEncoding): boolean
```

检查Buffer对象是否包含value值。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| int \| double \| long \| Buffer \| Uint8Array | Yes | 要搜索的内容。[since 11] |
| byteOffset | int | No |  |
| encoding | BufferEncoding | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 存在返回true，否则返回false。 |

## indexOf

```TypeScript
indexOf(value: string | int | double | long | Buffer | Uint8Array, byteOffset?: int, encoding?: BufferEncoding): int
```

返回当前对象中首次出现value的索引，如果不包含value，则返回-1。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| int \| double \| long \| Buffer \| Uint8Array | Yes | 要查找的内容。[since 11] |
| byteOffset | int | No |  |
| encoding | BufferEncoding | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int | 第一次出现位置。 |

## keys

```TypeScript
keys(): IterableIterator<int>
```

返回包含key值的迭代器。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;int> | 返回一个包含key值的迭代器。 |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from('buffer');
let keys = buf.keys();
for (const key of keys) {
  console.info(key.toString());
}
/*
Output: 0
        1
        2
        3
        4
        5
 */

```

## lastIndexOf

```TypeScript
lastIndexOf(value: string | int | double | long | Buffer | Uint8Array, byteOffset?: int, encoding?: BufferEncoding): int
```

返回this实例中最后一次出现value的索引，如果对象不包含value，则返回-1。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| int \| double \| long \| Buffer \| Uint8Array | Yes | 要搜索的内容。[since 11] |
| byteOffset | int | No |  |
| encoding | BufferEncoding | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int | 最后一次出现value值的索引。 |

## readBigInt64BE

```TypeScript
readBigInt64BE(offset?: int): bigint
```

从指定的offset处读取有符号的大端序64位整数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| bigint |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x70,
  0x71, 0x72, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78]);
console.info(buf.readBigInt64BE(0).toString());
// Output: 7161960797921896816

let buf1 = buffer.allocUninitializedFromPool(8);
let result = buf1.writeBigInt64BE(BigInt(0x0102030405060708), 0);
console.info("result = " + result);
// Output: result = 8

```

## readBigInt64LE

```TypeScript
readBigInt64LE(offset?: int): bigint
```

从指定的offset处读取有符号的小端序64位整数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| bigint |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x70,
  0x71, 0x72, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78]);
console.info(buf.readBigUInt64LE(0).toString());
// Output: 8100120198111388771

let buf1 = buffer.allocUninitializedFromPool(8);
let result = buf1.writeBigUInt64BE(BigInt(0xdecafafecacefade), 0);
console.info("result = " + result);
// Output: result = 8

```

## readBigUInt64BE

```TypeScript
readBigUInt64BE(offset?: int): bigint
```

从指定的offset处读取无符号的大端序64位整数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| bigint |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x70,
  0x71, 0x72, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78]);
console.info(buf.readBigUInt64BE(0).toString());
// Output: 7161960797921896816
let buf1 = buffer.allocUninitializedFromPool(8);
let result = buf1.writeBigUInt64BE(BigInt(0xdecafafecacefade), 0);
console.info("result = " + result);
// Output: result = 8

```

## readBigUInt64LE

```TypeScript
readBigUInt64LE(offset?: int): bigint
```

从指定的offset处读取无符号的小端序64位整数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| bigint |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x70,
  0x71, 0x72, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78]);
console.info(buf.readBigUInt64LE(0).toString());
// Output: 8100120198111388771

let buf1 = buffer.allocUninitializedFromPool(8);
let result = buf1.writeBigUInt64BE(BigInt(0xdecafafecacefade), 0);
console.info("result = " + result);
// Output: result = 8

```

## readDoubleBE

```TypeScript
readDoubleBE(offset?: int): double
```

从指定的offset处读取64位大端序双精度值。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| double |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([1, 2, 3, 4, 5, 6, 7, 8]);
console.info(buf.readDoubleBE(0).toString());
// Output: 8.20788039913184e-304
let buf1 = buffer.allocUninitializedFromPool(8);
let result = buf1.writeDoubleBE(123.456, 0);
console.info("result = " + result);
// Output: result = 8

```

## readDoubleLE

```TypeScript
readDoubleLE(offset?: int): double
```

从指定的offset处读取64位小端序双精度值。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| double |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([1, 2, 3, 4, 5, 6, 7, 8]);
console.info(buf.readDoubleLE(0).toString());
// Output: 5.447603722011605e-270
let buf1 = buffer.allocUninitializedFromPool(8);
let result = buf1.writeDoubleLE(123.456, 0);
console.info("result = " + result);
// Output: result = 8

```

## readFloatBE

```TypeScript
readFloatBE(offset?: int): double
```

从指定的offset处读取32位大端序浮点数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| double |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([1, 2, 3, 4, 5, 6, 7, 8]);
console.info(buf.readFloatBE(0).toString());
// Output: 2.387939260590663e-38
let buf1 = buffer.allocUninitializedFromPool(4);
let result = buf1.writeFloatBE(0xcabcbcbc, 0);
console.info("result = " + result);
// Output: result = 4

```

## readFloatLE

```TypeScript
readFloatLE(offset?: int): double
```

从指定的offset处读取32位小端序浮点数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| double |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([1, 2, 3, 4, 5, 6, 7, 8]);
console.info(buf.readFloatLE(0).toString());
// Output: 1.539989614439558e-36
let buf1 = buffer.allocUninitializedFromPool(4);
let result = buf1.writeFloatLE(0xcabcbcbc, 0);
console.info("result = " + result);
// Output: result = 4

```

## readInt16BE

```TypeScript
readInt16BE(offset?: int): long
```

从指定的offset处读取有符号的大端序16位整数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| long |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([0, 5]);
console.info(buf.readInt16BE(0).toString());
// Output: 5
let buf1 = buffer.alloc(2);
let result = buf1.writeInt16BE(0x1234, 0);
console.info("result = " + result);
// Output: result = 2

```

## readInt16LE

```TypeScript
readInt16LE(offset?: int): long
```

从指定的offset处读取有符号的小端序16位整数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| long |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([0, 5]);
console.info(buf.readInt16LE(0).toString());
// Output: 1280
let buf1 = buffer.alloc(2);
let result = buf1.writeInt16BE(0x1234, 0);
console.info("result = " + result);
// Output: result = 2

```

## readInt32BE

```TypeScript
readInt32BE(offset?: int): long
```

从指定的offset处读取有符号的大端序32位整数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| long |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([0, 0, 0, 5]);
console.info(buf.readInt32BE(0).toString());
// Output: 5
let buf1 = buffer.alloc(4);
let result = buf1.writeInt32BE(0x12345678, 0);
console.info("result = " + result);
// Output: result = 4

```

## readInt32LE

```TypeScript
readInt32LE(offset?: int): long
```

从指定的offset处读取有符号的小端序32位整数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| long |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([0, 0, 0, 5]);
console.info(buf.readInt32LE(0).toString());
// Output: 83886080
let buf1 = buffer.alloc(4);
let result = buf1.writeInt32BE(0x12345678, 0);
console.info("result = " + result);
// Output: result = 4

```

## readInt8

```TypeScript
readInt8(offset?: int): long
```

从指定的offset处读取有符号的8位整数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| long |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([-1, 5]);
console.info(buf.readInt8(0).toString());
// Output: 0
console.info(buf.readInt8(1).toString());
// Output: 5
let buf1 = buffer.allocUninitializedFromPool(2);
let result = buf1.writeInt8(0x12);
console.info("result = " + result);
// Output: result = 1

```

## readIntBE

```TypeScript
readIntBE(offset: int, byteLength: int): long
```

从指定的offset处读取byteLength个字节，并将结果解释为支持最高48位精度的大端序、二进制补码有符号值。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | Yes | 偏移量。默认值：0。取值范围：0 = [left range] and &lt;=  [right range]. Received value is: [param] |
| byteLength | int | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| long |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from("ab");
let num = buf.readIntBE(0, 1);
console.info(num.toString());
// Output: 97
let buf1 = buffer.allocUninitializedFromPool(6);
let result = buf1.writeIntBE(0x123456789011, 0, 6);
console.info("result = " + result);
// Output: result = 6

```

## readIntLE

```TypeScript
readIntLE(offset: int, byteLength: int): long
```

从指定的offset处读取byteLength个字节，并将结果解释为支持最高48位精度的小端序、二进制补码有符号值。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | Yes | 偏移量。默认值：0。取值范围：0 = [left range] and &lt;=  [right range]. Received value is: [param] |
| byteLength | int | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| long |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);
console.info(buf.readIntLE(0, 6).toString(16));
// Output: -546f87a9cbee
let buf1 = buffer.allocUninitializedFromPool(6);
let result = buf1.writeIntLE(0x123456789011, 0, 6);
console.info("result = " + result);
// Output: result = 6

```

## readUInt16BE

```TypeScript
readUInt16BE(offset?: int): long
```

从指定的offset处读取无符号的大端序16位整数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| long |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([0x12, 0x34, 0x56]);
console.info(buf.readUInt16BE(0).toString(16));
// Output: 1234
console.info(buf.readUInt16BE(1).toString(16));
// Output: 3456
let buf1 = buffer.allocUninitializedFromPool(4);
let result = buf1.writeUInt16BE(0x1234, 0);
console.info("result = " + result);
// Output: result = 2

```

## readUInt16LE

```TypeScript
readUInt16LE(offset?: int): long
```

从指定的offset处的buf读取无符号的小端序16位整数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| long |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([0x12, 0x34, 0x56]);
console.info(buf.readUInt16LE(0).toString(16));
// Output: 3412
console.info(buf.readUInt16LE(1).toString(16));
// Output: 5634
let buf1 = buffer.allocUninitializedFromPool(4);
let result = buf1.writeUInt16LE(0x1234, 0);
console.info("result = " + result);
// Output: result = 2

```

## readUInt32BE

```TypeScript
readUInt32BE(offset?: int): long
```

从指定的offset处的buf读取无符号的大端序32位整数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| long |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([0x12, 0x34, 0x56, 0x78]);
console.info(buf.readUInt32BE(0).toString(16));
// Output: 12345678
let buf1 = buffer.allocUninitializedFromPool(4);
let result = buf1.writeUInt32BE(0x12345678, 0);
console.info("result = " + result);
// Output: result = 4

```

## readUInt32LE

```TypeScript
readUInt32LE(offset?: int): long
```

从指定的offset处的buf读取无符号的小端序32位整数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| long |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([0x12, 0x34, 0x56, 0x78]);
console.info(buf.readUInt32LE(0).toString(16));
// Output: 78563412
let buf1 = buffer.allocUninitializedFromPool(4);
let result = buf1.writeUInt32LE(0x12345678, 0);
console.info("result = " + result);
// Output: result = 4

```

## readUInt8

```TypeScript
readUInt8(offset?: int): long
```

从offset处读取8位无符号整型数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| long |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([1, -2]);
console.info(buf.readUInt8(0).toString());
// Output: 1
console.info(buf.readUInt8(1).toString());
// Output: 0
let buf1 = buffer.allocUninitializedFromPool(4);
let result = buf1.writeUInt8(0x42);
console.info("result = " + result);
// Output: result = 1

```

## readUIntBE

```TypeScript
readUIntBE(offset: int, byteLength: int): long
```

从指定的offset处的buf读取byteLength个字节，并将结果解释为支持最高48位精度的无符号大端序整数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | Yes | 偏移量。默认值：0。取值范围：0 = [left range] and &lt;=  [right range]. Received value is: [param] |
| byteLength | int | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| long |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);
console.info(buf.readUIntBE(0, 6).toString(16));
// Output: 1234567890ab
let buf1 = buffer.allocUninitializedFromPool(4);
let result = buf1.writeUIntBE(0x13141516, 0, 4);
console.info("result = " + result);
// Output: result = 4

```

## readUIntLE

```TypeScript
readUIntLE(offset: int, byteLength: int): long
```

从指定的offset处的buf读取byteLength个字节，并将结果解释为支持最高48位精度的无符号小端序整数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | Yes | 偏移量。默认值：0。取值范围：0 = [left range] and &lt;=  [right range]. Received value is: [param] |
| byteLength | int | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| long |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);
console.info(buf.readUIntLE(0, 6).toString(16));
// Output: ab9078563412
let buf1 = buffer.allocUninitializedFromPool(4);
let result = buf1.writeUIntLE(0x13141516, 0, 4);
console.info("result = " + result);
// Output: result = 4

```

## subarray

```TypeScript
subarray(start?: int, end?: int): Buffer
```

截取当前对象指定位置的数据并返回。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | int | No |  |
| end | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Buffer | 返回新的Buffer对象。当start &lt; 0或end &lt; 0时返回空Buffer。 |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf1 = buffer.allocUninitializedFromPool(26);

for (let i = 0; i < 26; i++) {
  buf1.writeInt8(i + 97, i);
}
const buf2 = buf1.subarray(0, 3);
console.info(buf2.toString('ascii', 0, buf2.length));
// Output: abc

```

## swap16

```TypeScript
swap16(): Buffer
```

将当前对象转换为无符号的16位整数数组，并交换字节顺序。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| Buffer | 交换之后的Buffer对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200009 | The buffer size must be a multiple of 16-bits |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf1 = buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);
console.info(buf1.toString('hex'));
// Output: 0102030405060708
buf1.swap16();
console.info(buf1.toString('hex'));
// Output: 0201040306050807

```

## swap32

```TypeScript
swap32(): Buffer
```

将当前对象转换为无符号的32位整数数组，并交换字节顺序。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| Buffer | 交换之后的Buffer对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200009 | The buffer size must be a multiple of 32-bits |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf1 = buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);
console.info(buf1.toString('hex'));
// Output: 0102030405060708
buf1.swap32();
console.info(buf1.toString('hex'));
// Output: 0403020108070605

```

## swap64

```TypeScript
swap64(): Buffer
```

将当前对象转换为无符号的64位整数数组，并交换字节顺序。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| Buffer | 交换之后的Buffer对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200009 | The buffer size must be a multiple of 64-bits |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf1 = buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);
console.info(buf1.toString('hex'));
// Output: 0102030405060708
buf1.swap64();
console.info(buf1.toString('hex'));
// Output: 0807060504030201

```

## toJSON

```TypeScript
toJSON(): Object
```

将Buffer转为JSON并返回。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| Object | JSON对象。 |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf1 = buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
let obj = buf1.toJSON();
console.info(JSON.stringify(obj));
// Output: {"type":"Buffer","data":[1,2,3,4,5]}

```

## toJSON

```TypeScript
toJSON(): jsonx.JsonElement
```

将此Buffer实例转换为JsonElement。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| jsonx.JsonElement | 新的JsonElement对象，包含此Buffer的内容。 |

## toString

```TypeScript
toString(encoding?: string, start?: number, end?: number): string
```

将当前对象中指定位置的数据转成指定编码格式的字符串并返回。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encoding | string | No |  |
| start | number | No |  |
| end | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | 字符串。当start >= Buffer.length或start > end时返回空字符串。 |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf1 = buffer.allocUninitializedFromPool(26);
for (let i = 0; i < 26; i++) {
  buf1.writeInt8(i + 97, i);
}
console.info(buf1.toString('utf-8'));
// Output: abcdefghijklmnopqrstuvwxyz

```

## toString

```TypeScript
toString(): string
```

按照encoding指定的字符编码将buf解码为字符串。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | 解码后的字符串。 |

## toString

```TypeScript
toString(encoding?: BufferEncoding, start?: int, end?: int): string
```

按照encoding指定的字符编码将buf解码为字符串。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encoding | BufferEncoding | No |  |
| start | int | No |  |
| end | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | 解码后的字符串。 |

## values

```TypeScript
values(): IterableIterator<long>
```

返回一个包含value的迭代器。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;long> | 迭代器。 |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf1 = buffer.from('buffer');
let pair = buf1.values();
let next:IteratorResult<number> = pair.next();
while (!next.done) {
  console.info(next.value.toString());
  /*
  Output: 98
           117
           102
           102
           101
           114
   */
  next = pair.next();
}

```

## write

```TypeScript
write(str: string, offset?: int, length?: int, encoding?: string): int
```

在Buffer对象的offset偏移处写入指定编码的字符串，写入的字节长度为length。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| str | string | Yes | 要写入Buffer的字符串。 |
| offset | int | No |  |
| length | int | No |  |
| encoding | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int | 写入的字节数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of "[offset/length]" is out of range. It must be >= 0 and &lt;=  buf.length. Received value is: [offset/length] |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.alloc(256);
let len = buf.write('\u00bd + \u00bc = \u00be', 0);
console.info(`${len} bytes: ${buf.toString('utf-8', 0, len)}`);
// Output: 12 bytes: ½ + ¼ = ¾

let buffer1 = buffer.alloc(10);
let length = buffer1.write('abcd', 8);
console.info("length = " + length);
// Output: length = 2

```

## writeBigInt64BE

```TypeScript
writeBigInt64BE(value: bigint, offset?: int): int
```

在Buffer对象的offset偏移处写入有符号的大端序64位BigInt型数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | bigint | Yes | 写入Buffer的数据。 |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(8);
let result = buf.writeBigInt64BE(BigInt(0x0102030405060708), 0);
console.info("result = " + result);
// Output: result = 8

```

## writeBigInt64LE

```TypeScript
writeBigInt64LE(value: bigint, offset?: int): int
```

在Buffer对象的offset偏移处写入有符号的小端序64位BigInt型数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | bigint | Yes | 写入Buffer的数据。 |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(8);
let result = buf.writeBigInt64LE(BigInt(0x0102030405060708), 0);
console.info("result = " + result);
// Output: result = 8

```

## writeBigUInt64BE

```TypeScript
writeBigUInt64BE(value: bigint, offset?: int): int
```

在Buffer对象的offset偏移处写入无符号的大端序64位BigUInt型数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | bigint | Yes | 写入Buffer的数据。 |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(8);
let result = buf.writeBigUInt64BE(BigInt(0xdecafafecacefade), 0);
console.info("result = " + result);
// Output: result = 8

```

## writeBigUInt64LE

```TypeScript
writeBigUInt64LE(value: bigint, offset?: int): int
```

在Buffer对象的offset偏移处写入无符号的小端序64位BigUInt型数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | bigint | Yes | 写入Buffer的数据。 |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(8);
let result = buf.writeBigUInt64LE(BigInt(0xdecafafecacefade), 0);
console.info("result = " + result);
// Output: result = 8

```

## writeDoubleBE

```TypeScript
writeDoubleBE(value: double, offset?: int): int
```

在Buffer对象的offset偏移处写入大端序的64位双浮点型数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | double | Yes | 写入Buffer的数据。 |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(8);
let result = buf.writeDoubleBE(123.456, 0);
console.info("result = " + result);
// Output: result = 8

```

## writeDoubleLE

```TypeScript
writeDoubleLE(value: double, offset?: int): int
```

在Buffer对象的offset偏移处写入小端序的64位双浮点型数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | double | Yes | 写入Buffer的数据。 |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(8);
let result = buf.writeDoubleLE(123.456, 0);
console.info("result = " + result);
// Output: result = 8

```

## writeFloatBE

```TypeScript
writeFloatBE(value: double, offset?: int): int
```

在Buffer对象的offset偏移处写入大端序的32位浮点型数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | double | Yes | 写入Buffer的数据。 |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(8);
let result = buf.writeFloatBE(0xcafebabe, 0);
console.info("result = " + result);
// Output: result = 4

```

## writeFloatLE

```TypeScript
writeFloatLE(value: double, offset?: int): int
```

在Buffer对象的offset偏移处写入小端序的32位浮点型数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | double | Yes | 写入Buffer的数据。 |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(8);
let result = buf.writeFloatLE(0xcafebabe, 0);
console.info("result = " + result);
// Output: result = 4

```

## writeInt16BE

```TypeScript
writeInt16BE(value: long, offset?: int): int
```

在Buffer对象的offset偏移处写入大端序的16位有符号整型数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | long | Yes | 写入Buffer的数据。 |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(2);
let result = buf.writeInt16BE(0x0102, 0);
console.info("result = " + result);
// Output: result = 2

```

## writeInt16LE

```TypeScript
writeInt16LE(value: long, offset?: int): int
```

在Buffer对象的offset偏移处写入小端序的16位有符号整型数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | long | Yes | 写入Buffer的数据。 |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(2);
let result = buf.writeInt16LE(0x0304, 0);
console.info("result = " + result);
// Output: result = 2

```

## writeInt32BE

```TypeScript
writeInt32BE(value: long, offset?: int): int
```

在Buffer对象的offset偏移处写入大端序的32位有符号整型数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | long | Yes | 写入Buffer的数据。 |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(4);
let result = buf.writeInt32BE(0x01020304, 0);
console.info("result = " + result);
// Output: result = 4

```

## writeInt32LE

```TypeScript
writeInt32LE(value: long, offset?: int): int
```

在Buffer对象的offset偏移处写入小端序的32位有符号整型数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | long | Yes | 写入Buffer的数据。 |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(4);
let result = buf.writeInt32LE(0x05060708, 0);
console.info("result = " + result);
// Output: result = 4

```

## writeInt8

```TypeScript
writeInt8(value: long, offset?: int): int
```

在Buffer对象的offset偏移处写入8位有符号整型数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | long | Yes | 写入Buffer的数据。 |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(2);
let result = buf.writeInt8(2, 0);
console.info("result = " + result);
// Output: result = 1
let result1 = buf.writeInt8(-2, 1);
console.info("result1 = " + result1);
// Output: result1 = 2

```

## writeIntBE

```TypeScript
writeIntBE(value: long, offset: int, byteLength: int): int
```

在Buffer对象的offset偏移处写入大端序的有符号数据，字节长度为byteLength。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | long | Yes | 写入Buffer的数据。 |
| offset | int | Yes | 偏移量。默认值：0。取值范围：0 = [left range] and &lt;=  [right range]. Received value is: [param] |
| byteLength | int | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(6);
let result = buf.writeIntBE(0x1234567890ab, 0, 6);
console.info("result = " + result);
// Output: result = 6

```

## writeIntLE

```TypeScript
writeIntLE(value: long, offset: int, byteLength: int): int
```

在Buffer对象的offset偏移处写入小端序的有符号数据，字节长度为byteLength。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | long | Yes | 写入Buffer的数据。 |
| offset | int | Yes | 偏移量。默认值：0。取值范围：0 = [left range] and &lt;=  [right range]. Received value is: [param] |
| byteLength | int | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(6);
let result = buf.writeIntLE(0x1234567890ab, 0, 6);
console.info("result = " + result);
// Output: result = 6

```

## writeUInt16BE

```TypeScript
writeUInt16BE(value: long, offset?: int): int
```

在Buffer对象的offset偏移处写入大端序的16位无符号整型数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | long | Yes | 写入Buffer的数据。 |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(4);
let result = buf.writeUInt16BE(0xdead, 0);
console.info("result = " + result);
// Output: result = 2
let result1 = buf.writeUInt16BE(0xbeef, 2);
console.info("result1 = " + result1);
// Output: result1 = 4

```

## writeUInt16LE

```TypeScript
writeUInt16LE(value: long, offset?: int): int
```

在Buffer对象的offset偏移处写入小端序的16位无符号整型数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | long | Yes | 写入Buffer的数据。 |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(4);
let result = buf.writeUInt16LE(0xdead, 0);
console.info("result = " + result);
// Output: result = 2
let result1 = buf.writeUInt16LE(0xbeef, 2);
console.info("result1 = " + result1);
// Output: result1 = 4

```

## writeUInt32BE

```TypeScript
writeUInt32BE(value: long, offset?: int): int
```

在Buffer对象的offset偏移处写入大端序的32位无符号整型数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | long | Yes | 写入Buffer的数据。 |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(4);
let result = buf.writeUInt32BE(0xfeedface, 0);
console.info("result = " + result);
// Output: result = 4

```

## writeUInt32LE

```TypeScript
writeUInt32LE(value: long, offset?: int): int
```

在Buffer对象的offset偏移处写入小端序的32位无符号整型数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | long | Yes | 写入Buffer的数据。 |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(4);
let result = buf.writeUInt32LE(0xfeedface, 0);
console.info("result = " + result);
// Output: result = 4

```

## writeUInt8

```TypeScript
writeUInt8(value: long, offset?: int): int
```

在Buffer对象的offset偏移处写入8位无符号整型数据。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | long | Yes | 写入Buffer的数据。 |
| offset | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(4);
let result = buf.writeUInt8(0x3, 0);
console.info("result = " + result);
// Output: result = 1
let result1 = buf.writeUInt8(0x4, 1);
console.info("result1 = " + result1);
// Output: result1 = 2
let result2 = buf.writeUInt8(0x23, 2);
console.info("result2 = " + result2);
// Output: result2 = 3
let result3 = buf.writeUInt8(0x42, 3);
console.info("result3 = " + result3);
// Output: result3 = 4

```

## writeUIntBE

```TypeScript
writeUIntBE(value: long, offset: int, byteLength: int): int
```

在Buffer对象的offset偏移处写入大端序的无符号数据，字节长度为byteLength。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | long | Yes | 写入Buffer的数据。 |
| offset | int | Yes | 偏移量。默认值：0。取值范围：0 = [left range] and &lt;=  [right range]. Received value is: [param] |
| byteLength | int | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(6);
let result = buf.writeUIntBE(0x1234567890ab, 0, 6);
console.info("result = " + result);
// Output: result = 6

```

## writeUIntLE

```TypeScript
writeUIntLE(value: long, offset: int, byteLength: int): int
```

在Buffer对象的offset偏移处写入小端序的无符号数据，字节长度为byteLength。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | long | Yes | 写入Buffer的数据。 |
| offset | int | Yes | 偏移量。默认值：0。取值范围：0 = [left range] and &lt;=  [right range]. Received value is: [param] |
| byteLength | int | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| int |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 |  |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf = buffer.allocUninitializedFromPool(6);
let result = buf.writeUIntLE(0x1234567890ab, 0, 6);
console.info("result = " + result);
// Output: result = 6

```

## byteOffset

```TypeScript
byteOffset: number
```

当前Buffer所在内存池的偏移量。 当Buffer通过内存池创建时（如使用[allocUninitializedFromPool]buffer.allocUninitializedFromPool创建Buffer， 或使用buffer.from()传入字符串，且字符串长度加当前内存池偏移量小于4kb），返回相对于内存池的偏移量。 当Buffer直接分配内存时（如使用[alloc]buffer.alloc），返回值为0。

**Type:** number

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get byteOffset(): int
```

Buffer对象底层ArrayBuffer对象的字节偏移量。

**Type:** int

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## length

```TypeScript
length: number
```

Buffer对象的字节长度。

**Type:** number

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get length(): int
```

获取Buffer对象的元素个数。

**Type:** int

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## index

```TypeScript
[index: int]: long
```

返回指定索引处的元素。

**Type:** long

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## buffer

```TypeScript
buffer: ArrayBuffer
```

ArrayBuffer对象。

**Type:** ArrayBuffer

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get buffer(): ArrayBuffer
```

创建此Buffer对象所基于的底层ArrayBuffer对象。

**Type:** ArrayBuffer

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

