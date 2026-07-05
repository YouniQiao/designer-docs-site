# BitVector

一种线性数据结构，底层基于数组实现。BitVector 中存储的元素为 bit 值，能够存储和处理 bit 级别的操作。 > **NOTE** > > - 此模块仅支持在 ArkTS 文件（文件后缀为 .ets）中导入使用。 > **装饰器**：\@Sendable

**Since:** 12

**Decorator:** @Sendable

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { collections } from '@kit.ArkTS';
```

## [Symbol.iterator]

```TypeScript
[Symbol.iterator](): IterableIterator<number>
```

返回一个迭代器，用于迭代 BitVector 中的元素。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;number> | 一个新的可迭代迭代器对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The Symbol.iterator method cannot be bound. |

## constructor

```TypeScript
constructor(length: number)
```

BitVector 的构造函数。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| length | number | Yes | 初始化 BitVector 的长度。 |

## flipBitByIndex

```TypeScript
flipBitByIndex(index: number): void
```

翻转 BitVector 指定索引处的 bit 值，0 翻转为 1，1 翻转为 0。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 指定索引。如果 index 小于 0 或者大于等于 length，则会抛出  错误。可能的原因：  1.必填参数未指定。  2.参数类型不正确。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of index is out of range. |
| 10200011 | The flipBitByIndex method cannot be bound. |
| 10200201 | Concurrent modification error. |

## flipBitsByRange

```TypeScript
flipBitsByRange(fromIndex: number, toIndex: number): void
```

翻转 BitVector 指定范围内的 bit 值，0 翻转为 1，1 翻转为 0。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fromIndex | number | Yes | 范围起始索引，包含本索引值。如果 fromIndex 小于 0 或者  大于等于 toIndex，则会抛出错误。 |
| toIndex | number | Yes | 范围终止索引，不包含本索引值。如果 toIndex 小于 0 或者大于  等于 length，则会抛出错误。可能的原因：  1.必填参数未指定。  2.参数类型不正确。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of fromIndex or toIndex is out of range. |
| 10200011 | The flipBitsByRange method cannot be bound. |
| 10200201 | Concurrent modification error. |

## getBitCountByRange

```TypeScript
getBitCountByRange(element: number, fromIndex: number, toIndex: number): number
```

统计指定范围内获取指定 bit 值的数量。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | number | Yes | bit 值。0 表示 bit 值 0，其余值表示 bit 值 1。 |
| fromIndex | number | Yes | 范围起始索引，包含本索引值。如果 fromIndex 小于 0 或者  大于等于 toIndex，则会抛出错误。 |
| toIndex | number | Yes | 范围终止索引，不包含本索引值。如果 toIndex 小于 0 或者大于  等于 length，则会抛出错误。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 统计指定范围内获取指定 bit 值的数量。可能的原因：  1.必填参数未指定。  2.参数类型不正确。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of fromIndex or toIndex is out of range. |
| 10200011 | The getBitCountByRange method cannot be bound. |
| 10200201 | Concurrent modification error. |

## getBitsByRange

```TypeScript
getBitsByRange(fromIndex: number, toIndex: number): BitVector
```

获取指定范围内的 bit 值。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fromIndex | number | Yes | 范围起始索引，包含本索引值。如果 fromIndex 小于 0 或者  大于等于 toIndex，则会抛出错误。 |
| toIndex | number | Yes | 范围终止索引，不包含本索引值。如果 toIndex 小于 0 或者大于  等于 length，则会抛出错误。 |

**Return value:**

| Type | Description |
| --- | --- |
| BitVector | 包含所获取 bit 值的 BitVector。可能的原因：  1.必填参数未指定。  2.参数类型不正确。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of fromIndex or toIndex is out of range. |
| 10200011 | The getBitsByRange method cannot be bound. |
| 10200201 | Concurrent modification error. |

## getIndexOf

```TypeScript
getIndexOf(element: number, fromIndex: number, toIndex: number): number
```

返回指定 bit 值首次出现时的索引值，查找失败返回 **-1**。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | number | Yes | bit 值。0 表示 bit 值 0，其余值表示 bit 值 1。 |
| fromIndex | number | Yes | 范围起始索引，包含本索引值。如果 fromIndex 小于 0 或者  大于等于 toIndex，则会抛出错误。 |
| toIndex | number | Yes | 范围终止索引，不包含本索引值。如果 toIndex 小于 0 或者大于  等于 length，则会抛出错误。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回指定 bit 值首次出现时的索引值，查找失败返回 -1。可能的原因：  1.必填参数未指定。  2.参数类型不正确。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of fromIndex or toIndex is out of range. |
| 10200011 | The getIndexOf method cannot be bound. |
| 10200201 | Concurrent modification error. |

## getLastIndexOf

```TypeScript
getLastIndexOf(element: number, fromIndex: number, toIndex: number): number
```

返回指定 bit 值最后一次出现时的索引值，查找失败返回 **-1**。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | number | Yes | bit 值。0 表示 bit 值 0，其余值表示 bit 值 1。 |
| fromIndex | number | Yes | 范围起始索引，包含本索引值。如果 fromIndex 小于 0 或者  大于等于 toIndex，则会抛出错误。 |
| toIndex | number | Yes | 范围终止索引，不包含本索引值。如果 toIndex 小于 0 或者大于  等于 length，则会抛出错误。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回指定 bit 值最后一次出现时的索引值，查找失败返回 -1。可能的原因：  1.必填参数未指定。  2.参数类型不正确。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of fromIndex or toIndex is out of range. |
| 10200011 | The getLastIndexOf method cannot be bound. |
| 10200201 | Concurrent modification error. |

## has

```TypeScript
has(element: number, fromIndex: number, toIndex: number): boolean
```

判断范围内是否包含特定 bit 值。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | number | Yes | bit 值。0 表示 bit 值 0，其余值表示 bit 值 1。 |
| fromIndex | number | Yes | 范围起始索引，包含本索引值。如果 fromIndex 小于 0 或者  大于等于 toIndex，则会抛出错误。 |
| toIndex | number | Yes | 范围终止索引，包含本索引值。如果 toIndex 小于 0 或者大于  length，则会抛出错误。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 检查结果。包含特定 bit 值返回 true，否则返回 false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of fromIndex or toIndex is out of range. |
| 10200011 | The has method cannot be bound. |
| 10200201 | Concurrent modification error. |

## pop

```TypeScript
pop(): number
```

弹出 BitVector 尾部的元素。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 弹出 BitVector 尾部的元素，其值为对应 bit 值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The pop method cannot be bound. |
| 10200201 | Concurrent modification error. |

## push

```TypeScript
push(element: number): boolean
```

在 BitVector 尾部插入元素。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | number | Yes | 待插入的元素，0 表示 bit 值 0，其余值表示 bit 值 1。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 操作结果。插入成功返回 true，失败返回 false。可能的原因：  1.必填参数未指定。  2.参数类型不正确。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The push method cannot be bound. |
| 10200201 | Concurrent modification error. |

## resize

```TypeScript
resize(size: number): void
```

改变 BitVector 的长度。 如果 **size** 大于原 BitVector 的长度，则扩充原 BitVector 的长度，多出部分的元素设置为 0。 如果 **size** 小于等于原 BitVector 的长度，则将原 BitVector 按 size 长度大小裁剪。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | 需要改变的长度。可能的原因：  1.必填参数未指定。  2.参数类型不正确。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The resize method cannot be bound. |
| 10200201 | Concurrent modification error. |

## setAllBits

```TypeScript
setAllBits(element: number): void
```

将 BitVector 中所有元素均设为特定 bit 值。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | number | Yes | 待设置的 bit 值。0 表示 bit 值 0，其余值表示 bit 值 1。可能的原因：  1.必填参数未指定。  2.参数类型不正确。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The setAllBits method cannot be bound. |
| 10200201 | Concurrent modification error. |

## setBitsByRange

```TypeScript
setBitsByRange(element: number, fromIndex: number, toIndex: number): void
```

将 BitVector 中指定范围的元素均设为特定 bit 值。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | number | Yes | 待设置的 bit 值。0 表示 bit 值 0，其余值表示 bit 值 1。 |
| fromIndex | number | Yes | 范围起始索引，包含本索引值。如果 fromIndex 小于 0 或者  大于等于 toIndex，则会抛出错误。 |
| toIndex | number | Yes | 范围终止索引，不包含本索引值。如果 toIndex 小于 0 或者大于  等于 length，则会抛出错误。可能的原因：  1.必填参数未指定。  2.参数类型不正确。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of fromIndex or toIndex is out of range. |
| 10200011 | The setBitsByRange method cannot be bound. |
| 10200201 | Concurrent modification error. |

## values

```TypeScript
values(): IterableIterator<number>
```

返回一个新的迭代器对象，该对象包含 BitVector 中每个元素的值。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;number> | BitVector 迭代器对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The values method cannot be bound. |
| 10200201 | Concurrent modification error. |

## length

```TypeScript
readonly length: number
```

BitVector 的元素个数。

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## index

```TypeScript
[index: number]: number
```

返回指定索引位置的元素。

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

