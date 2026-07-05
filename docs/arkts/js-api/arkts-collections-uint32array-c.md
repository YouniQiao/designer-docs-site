# Uint32Array

一种线性数据结构，底层基于[ArkTS ArrayBuffer]./arkts/@arkts.collections:collections实现。 > **说明** > > - 此模块仅支持在ArkTS文件（文件后缀为.ets）中导入使用。 > **装饰器**：\@Sendable

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

返回一个迭代器，迭代器的每一项都是一个数字。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;number> | 产出数字的迭代器对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The Symbol.iterator method cannot be bound. |

## at

```TypeScript
at(index: number): number | undefined
```

返回指定下标的元素，如果不存在，则返回**undefined**。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 所需代码单元的从零开始的索引。 如果传入负数，则从最后一个元素开始反向计数。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 指定下标的元素；如果不存在，则返回undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The at method cannot be bound. |
| 10200201 | Concurrent modification error. |

## constructor

```TypeScript
constructor()
```

构造函数，用于创建一个空的ArkTS Uint32Array对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200012 | The Uint32Array's constructor cannot be directly invoked. |

## constructor

```TypeScript
constructor(length: number)
```

构造函数，用于创建一个指定长度的ArkTS Uint32Array对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| length | number | Yes | 用于指定ArkTS Uint32Array的长度。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200012 | The Uint32Array's constructor cannot be directly invoked. |

## constructor

```TypeScript
constructor(elements: Iterable<number>)
```

构造函数，以Iterable创建一个ArkTS Uint32Array对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elements | Iterable&lt;number> | Yes | 可迭代数字集合，用于构造ArkTS Uint32Array对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200012 | The Uint32Array's constructor cannot be directly invoked. |

## constructor

```TypeScript
constructor(array: ArrayLike<number> | ArrayBuffer)
```

构造函数，以ArrayLike或ArkTS ArrayBuffer创建一个ArkTS Uint32Array对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| array | ArrayLike&lt;number> \| ArrayBuffer | Yes | 用于构造ArkTS Uint32Array的对象。当参数类型是ArrayBuffer时，  buffer所占的字节数须是4的整数倍。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200012 | The Uint32Array's constructor cannot be directly invoked. |

## constructor

```TypeScript
constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number)
```

构造函数，以ArrayBuffer创建一个ArkTS Uint32Array对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | 用于构造ArkTS Uint32Array的ArrayBuffer对象。buffer所占的字节数须是4的整数倍。 |
| byteOffset | number | No |  |
| length | number | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200012 | The Uint32Array's constructor cannot be directly invoked. |

## copyWithin

```TypeScript
copyWithin(target: number, start: number, end?: number): Uint32Array
```

从ArkTS Uint32Array指定范围内的元素依次拷贝到目标位置。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | number | Yes | 目标起始位置的下标。如果传入负数，则指代`target + array.length`位置的下标。 |
| start | number | Yes | 源起始位置的下标。如果传入负数，则指代`start + Uint32Array.length`位置的下标。 |
| end | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint32Array | 修改后的ArkTS Uint32Array对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The copyWithin method cannot be bound. |
| 10200201 | Concurrent modification error. |

## entries

```TypeScript
entries(): IterableIterator<[number, number]>
```

返回一个新的迭代器对象，该对象包含ArkTS Uint32Array中每个元素的键值对。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[number, number]> | 迭代器对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The entries method cannot be bound. |
| 10200201 | Concurrent modification error. |

## every

```TypeScript
every(predicate: TypedArrayPredicateFn<number, Uint32Array>): boolean
```

测试ArkTS Uint32Array中的所有元素是否满足指定条件。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | TypedArrayPredicateFn&lt;number, Uint32Array> | Yes | 用于测试的断言函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 检查结果。如果所有元素都满足指定条件则返回true；否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The every method cannot be bound. |
| 10200201 | Concurrent modification error. |

## fill

```TypeScript
fill(value: number, start?: number, end?: number): Uint32Array
```

使用特定值填充ArkTS Uint32Array指定范围的全部元素。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 待填充的值。 |
| start | number | No |  |
| end | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint32Array | 填充后的ArkTS Uint32Array对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The fill method cannot be bound. |
| 10200201 | Concurrent modification error. |

## filter

```TypeScript
filter(predicate: TypedArrayPredicateFn<number, Uint32Array>): Uint32Array
```

返回一个新的ArkTS Uint32Array对象，其包含满足指定条件的所有元素。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | TypedArrayPredicateFn&lt;number, Uint32Array> | Yes | 用于元素过滤的断言函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Uint32Array | 过滤后的ArkTS Uint32Array对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The filter method cannot be bound. |
| 10200201 | Concurrent modification error. |

## find

```TypeScript
find(predicate: TypedArrayPredicateFn<number, Uint32Array>): number | undefined
```

返回ArkTS Uint32Array中第一个满足指定条件的元素的值，如果所有元素都不满足，则返回**undefined**。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | TypedArrayPredicateFn&lt;number, Uint32Array> | Yes | 用于元素查找的断言函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 第一个满足条件的元素的值；如果所有元素都不满足条件，则返回undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The find method cannot be bound. |
| 10200201 | Concurrent modification error. |

## findIndex

```TypeScript
findIndex(predicate: TypedArrayPredicateFn<number, Uint32Array>): number
```

返回ArkTS Uint32Array中第一个满足指定条件的元素索引，如果所有元素都不满足，则返回**-1**。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | TypedArrayPredicateFn&lt;number, Uint32Array> | Yes | 用于元素查找的断言函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 第一个满足条件的元素索引；如果所有元素都不满足条件，则返回-1。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The findIndex method cannot be bound. |
| 10200201 | Concurrent modification error. |

## forEach

```TypeScript
forEach(callbackFn: TypedArrayForEachCallback<number, Uint32Array>): void
```

对ArkTS Uint32Array中的每个元素执行提供的回调函数。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | TypedArrayForEachCallback&lt;number, Uint32Array> | Yes | 用于对每个元素执行的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The forEach method cannot be bound. |
| 10200201 | Concurrent modification error. |

## from

```TypeScript
static from(arrayLike: ArrayLike<number>): Uint32Array
```

从一个ArrayLike或者可迭代对象中创建一个ArkTS Uint32Array对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arrayLike | ArrayLike&lt;number> | Yes | 用于构造ArkTS Uint32Array的ArrayLike对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Uint32Array | 新创建的ArkTS Uint32Array对象。 |

## from

```TypeScript
static from<T>(arrayLike: ArrayLike<T>, mapFn: TypedArrayFromMapFn<T, number>): Uint32Array
```

从一个ArrayLike中创建一个ArkTS Uint32Array对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arrayLike | ArrayLike&lt;T> | Yes | 用于构造ArrayLike对象。 |
| mapFn | TypedArrayFromMapFn&lt;T, number> | Yes | 映射函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Uint32Array | 新创建的ArkTS Uint32Array对象。 |

## from

```TypeScript
static from(arrayLike: Iterable<number>, mapFn?: TypedArrayFromMapFn<number, number>): Uint32Array
```

从一个可迭代对象中创建一个ArkTS Uint32Array对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arrayLike | Iterable&lt;number> | Yes | 用于构造的可迭代对象。 |
| mapFn | TypedArrayFromMapFn&lt;number, number> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint32Array | 新创建的ArkTS Uint32Array对象。 |

## includes

```TypeScript
includes(searchElement: number, fromIndex?: number): boolean
```

判断ArkTS Uint32Array是否包含特定元素。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| searchElement | number | Yes | 待搜索的元素。 |
| fromIndex | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 检查结果。如果ArkTS Uint32Array包含指定的元素，则返回true；否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The includes method cannot be bound. |
| 10200201 | Concurrent modification error. |

## indexOf

```TypeScript
indexOf(searchElement: number, fromIndex?: number): number
```

返回在ArkTS Uint32Array中给定元素的第一个索引，如果不存在，则返回**-1**。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| searchElement | number | Yes | 待索引的值。 |
| fromIndex | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 数组中给定元素的第一个索引；如果不存在，则返回-1。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The indexOf method cannot be bound. |
| 10200201 | Concurrent modification error. |

## join

```TypeScript
join(separator?: string): string
```

将ArkTS Uint32Array的所有元素拼接成一个字符串，元素之间使用指定的分隔符分隔。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| separator | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | 拼接后的字符串。如果ArkTS Uint32Array为空，则返回空字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The join method cannot be bound. |
| 10200201 | Concurrent modification error. |

## keys

```TypeScript
keys(): IterableIterator<number>
```

返回一个新的迭代器对象，该对象包含ArkTS Uint32Array中每个元素的键（下标）。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;number> | 迭代器对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The keys method cannot be bound. |
| 10200201 | Concurrent modification error. |

## lastIndexOf

```TypeScript
lastIndexOf(searchElement: number, fromIndex?: number): number
```

返回ArkTS Uint32Array实例中最后一次出现给定元素的索引，如果不存在，则返回**-1**。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| searchElement | number | Yes | 待索引的值。 |
| fromIndex | number | No | 搜索的起始下标。默认值为0。如果下标大于等于ArkTS Uint32Array的长度，  则返回-1。如果传入负数，则从ArkTS Uint32Array的末尾开始向前搜索。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 数组中给定元素的最后一个索引；如果不存在，则返回-1。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The lastIndexOf method cannot be bound. |
| 10200201 | Concurrent modification error. |

## map

```TypeScript
map(callbackFn: TypedArrayMapCallback<number, Uint32Array>): Uint32Array
```

对ArkTS Uint32Array中的每个元素应用指定的回调函数，并使用结果创建一个新的ArkTS Uint32Array对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | TypedArrayMapCallback&lt;number, Uint32Array> | Yes | 一个最多接受三个参数的函数。  map方法对数组中的每个元素调用一次callbackfn函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Uint32Array | 新的ArkTS Uint32Array对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The map method cannot be bound. |
| 10200201 | Concurrent modification error. |

## of

```TypeScript
static of(...items: number[]): Uint32Array
```

通过可变数量的参数创建一个新的ArkTS Uint32Array对象。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | number[] | Yes | 用于创建数组的元素，参数个数可以是0个、1个或者多个。 |

**Return value:**

| Type | Description |
| --- | --- |
| Uint32Array | 新的ArkTS Uint32Array实例。可能的原因：1.必填参数未指定；  2.参数类型不正确；3.参数校验失败。 |

## reduce

```TypeScript
reduce(callbackFn: TypedArrayReduceCallback<number, number, Uint32Array>): number
```

对ArkTS Uint32Array中的每个元素执行归约函数，并返回最终的归约结果。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | TypedArrayReduceCallback&lt;number, number, Uint32Array> | Yes | 一个最多接受四个参数的函数。  reduce方法对数组中的每个元素调用一次callbackfn函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 由归约函数最后一次调用返回的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The reduce method cannot be bound. |
| 10200201 | Concurrent modification error. |

## reduce

```TypeScript
reduce(callbackFn: TypedArrayReduceCallback<number, number, Uint32Array>, initialValue: number): number
```

对ArkTS Uint32Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数， 并返回最终的归约结果。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | TypedArrayReduceCallback&lt;number, number, Uint32Array> | Yes | 一个最多接受四个参数的函数。  reduce方法对数组中的每个元素调用一次callbackfn函数。 |
| initialValue | number | Yes | 如果指定了initialValue，则将其作为开始累加的初始值。  首次调用callbackfn函数时将提供此值作为参数，而不是数组元素值。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 由归约函数最后一次调用返回的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The reduce method cannot be bound. |
| 10200201 | Concurrent modification error. |

## reduce

```TypeScript
reduce<U>(callbackFn: TypedArrayReduceCallback<U, number, Uint32Array>, initialValue: U): U
```

对ArkTS Uint32Array中的每个元素执行归约函数，且接收一个初始值作为归约函数首次调用的参数， 并返回最终的归约结果。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | TypedArrayReduceCallback&lt;U, number, Uint32Array> | Yes | 归约函数。 |
| initialValue | U | Yes | 初始值。 |

**Return value:**

| Type | Description |
| --- | --- |
| U | 由归约函数最后一次调用返回的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The reduce method cannot be bound. |
| 10200201 | Concurrent modification error. |

## reduceRight

```TypeScript
reduceRight<U = number>(callbackFn: TypedArrayReduceCallback<U, number, Uint32Array>, initialValue: U): U
```

反向遍历ArkTS Uint32Array，对ArkTS Uint32Array中的每个元素执行归约函数，且接收一个初始值作为归约函数 首次调用的参数，并返回最终的归约结果。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | TypedArrayReduceCallback&lt;U, number, Uint32Array> | Yes | 对Uint32Array中的每个元素调用的函数。 |
| initialValue | U | Yes | 作为回调函数首次调用时第一个参数使用的值。  若未提供初始值，则使用Uint32Array的最后一个元素作为初始值，  且回调函数将从倒数第二个元素开始调用。 |

**Return value:**

| Type | Description |
| --- | --- |
| U | 由归约函数最后一次调用返回的结果。可能的原因：  1.必填参数未指定。  2.参数类型不正确。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The reduceRight method cannot be bound. |
| 10200201 | Concurrent modification error. |

## reduceRight

```TypeScript
reduceRight(callbackFn: TypedArrayReduceCallback<number, number, Uint32Array>): number
```

反向遍历ArkTS Uint32Array，对ArkTS Uint32Array中的每个元素执行归约函数，并返回最终的归约结果。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | TypedArrayReduceCallback&lt;number, number, Uint32Array> | Yes | 对Uint32Array中的每个元素调用的函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 由归约函数最后一次调用返回的结果。可能的原因：  1.必填参数未指定。  2.参数类型不正确。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The reduceRight method cannot be bound. |
| 10200201 | Concurrent modification error. |

## reverse

```TypeScript
reverse(): Uint32Array
```

反转ArkTS Uint32Array。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| Uint32Array | 反转后的ArkTS Uint32Array对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The reverse method cannot be bound. |
| 10200201 | Concurrent modification error. |

## set

```TypeScript
set(array: ArrayLike<number>, offset?: number): void
```

将传入的ArrayLike元素依次写入到指定的起始位置。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| array | ArrayLike&lt;number> | Yes | 用于设置的ArrayLike对象。 |
| offset | number | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The set method cannot be bound. |
| 10200201 | Concurrent modification error. |

## slice

```TypeScript
slice(start?: number, end?: number): Uint32Array
```

返回一个新的ArkTS Uint32Array对象，其包含原ArkTS Uint32Array指定范围的内容。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | No |  |
| end | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint32Array | 新的ArkTS Uint32Array对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The slice method cannot be bound. |
| 10200201 | Concurrent modification error. |

## some

```TypeScript
some(predicate: TypedArrayPredicateFn<number, Uint32Array>): boolean
```

测试ArkTS Uint32Array中是否存在元素满足指定条件。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | TypedArrayPredicateFn&lt;number, Uint32Array> | Yes | 用于测试的断言函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 检查结果。如果存在元素满足指定条件则返回true；否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The some method cannot be bound. |
| 10200201 | Concurrent modification error. |

## sort

```TypeScript
sort(compareFn?: TypedArrayCompareFn<number>): Uint32Array
```

对ArkTS Uint32Array进行排序，并返回排序后的ArkTS Uint32Array对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| compareFn | TypedArrayCompareFn&lt;number> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint32Array | 排序后的ArkTS Uint32Array对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The sort method cannot be bound. |
| 10200201 | Concurrent modification error. |

## subarray

```TypeScript
subarray(begin?: number, end?: number): Uint32Array
```

从指定的位置截取数组，返回一个新的、基于相同ArkTS ArrayBuffer的ArkTS Uint32Array对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| begin | number | No |  |
| end | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint32Array | 新的ArkTS Uint32Array对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The subarray method cannot be bound. |
| 10200201 | Concurrent modification error. |

## toLocaleString

```TypeScript
toLocaleString(): string
```

根据当前应用的系统地区获取符合当前文化习惯的数字表示形式，让每个元素调用自己的**toLocaleString**方法把数字 转换为字符串，然后使用逗号（,）将每个元素的结果字符串按照顺序拼接成字符串。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | 一个包含数组所有元素的字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The toLocaleString method cannot be bound. |
| 10200201 | Concurrent modification error. |

## toString

```TypeScript
toString(): string
```

ArkTS Uint32Array转换为字符串。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | 一个包含数组所有元素的字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The toString method cannot be bound. |
| 10200201 | Concurrent modification error. |

## values

```TypeScript
values(): IterableIterator<number>
```

返回一个新的迭代器对象，该对象包含ArkTS Uint32Array中每个元素的值。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;number> | 迭代器对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The values method cannot be bound. |
| 10200201 | Concurrent modification error. |

## byteOffset

```TypeScript
readonly byteOffset: number
```

ArkTS Uint32Array距离其ArrayBuffer起始位置的偏移。

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## length

```TypeScript
readonly length: number
```

ArkTS Uint32Array元素个数。

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## byteLength

```TypeScript
readonly byteLength: number
```

ArkTS Uint32Array所占的字节数。

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## index

```TypeScript
[index: number]: number
```

返回Uint32Array指定索引位置的元素。

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## BYTES_PER_ELEMENT

```TypeScript
static readonly BYTES_PER_ELEMENT: number
```

ArkTS Uint32Array中每个元素所占用的字节数。

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## buffer

```TypeScript
readonly buffer: ArrayBuffer
```

ArkTS Uint32Array底层使用的buffer。

**Type:** ArrayBuffer

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

