# Vector

Vector是基于数组实现的线性数据结构。当Vector的内存用完时，会自动分配一块更大的连续内存区域，并将所有元素复制到新内存区域，回收当前内存区域。Vector可用于高效访问元素。 Vector和[ArrayList]@ohos.util.ArrayList都是基于数组实现，但Vector提供了更多的数组操作接口。两者都可以动态调整容量，Vector每次扩容为原来的两倍，ArrayList每次扩容为原来的1.5倍。 **推荐使用场景：** 当数据量较大时，推荐使用Vector。 文档中使用了泛型，涉及以下泛型标记符： - T：Type，类 > **说明** > > - 此模块提供的接口从API version 9开始废弃。建议使用 > [@ohos.util.ArrayList]@ohos.util.ArrayList。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.util.ArrayList

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { Vector } from '@kit.ArkTS';
```

## [Symbol.iterator]

```TypeScript
[Symbol.iterator](): IterableIterator<T>
```

返回一个ES6迭代器，迭代器的每一项都是一个JavaScript对象。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;T> |  |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
// Method 1:
let nums: Array<number> =  vector.convertToArray()
for (let item of nums) {
  console.info("value:" + item);
}

// Method 2:
let iter = vector[Symbol.iterator]();
let temp: IteratorResult<number> = iter.next().value;
while(temp != undefined) {
  console.info("value:" + temp);
  temp = iter.next().value;
}

```

## add

```TypeScript
add(element: T): boolean
```

在Vector尾部添加元素。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | T | Yes | 添加的成员数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 成功添加元素返回true，否则返回false。 |

**Example**

```TypeScript
class C1 {
  name: string = ""
  age: string = ""
}
let vector : Vector<string | number | C1 | Array<number>> = new Vector();
let result = vector.add("a");
let result1 = vector.add(1);
let b = [1, 2, 3];
let result2 = vector.add(b);
let c: C1 = {name : "Jack", age : "13"};
let result3 = vector.add(c);

```

## clear

```TypeScript
clear(): void
```

清除Vector中的所有元素，并将length置为0。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
vector.clear();

```

## clone

```TypeScript
clone(): Vector<T>
```

克隆一个实例，并返回克隆后的实例。修改克隆后的实例并不会影响原实例。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| Vector&lt;T> | 返回新的Vector实例。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
let result = vector.clone();

```

## constructor

```TypeScript
constructor()
```

Vector的构造函数。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
let vector : Vector<string | number | Array<number>> = new Vector();

```

## convertToArray

```TypeScript
convertToArray(): Array<T>
```

将Vector实例转换为数组。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;T> | 返回数组。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
let result = vector.convertToArray();

```

## copyToArray

```TypeScript
copyToArray(array: Array<T>): void
```

将Vector中的元素复制到指定数组中，覆盖数组中相同下标的元素。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| array | Array&lt;T> | Yes | 接收Vector中复制元素的数组。 |

## forEach

```TypeScript
forEach(callbackFn: (value: T, index?: number, vector?: Vector<T>) => void, thisArg?: Object): void
```

通过回调函数来遍历Vector实例对象上的元素以及元素对应的下标。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | (value: T, index?: number, vector?: Vector&lt;T>) => void | Yes | 回调函数。 |
| thisArg | Object | No | callbackFn被调用时用作this值，默认值为当前实例对象。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
vector.forEach((value : number, index ?: number) : void => {
  console.info("value:" + value, "index:" + index);
});

```

## get

```TypeScript
get(index: number): T
```

获取指定下标对应的元素。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 查找的下标位置。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回指定下标对应的元素。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
let result = vector.get(2);

```

## getCapacity

```TypeScript
getCapacity(): number
```

获取Vector实例的容量大小。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回Vector的容量。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
let result = vector.getCapacity();

```

## getFirstElement

```TypeScript
getFirstElement(): T
```

获取Vector实例中的第一个元素。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回Vector实例中的第一个元素。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
let result = vector.getFirstElement();

```

## getIndexFrom

```TypeScript
getIndexFrom(element: T, index: number): number
```

从指定下标位置向前查找指定元素，并返回该元素的位置下标。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | T | Yes | 指定元素。 |
| index | number | Yes | 开始查找的下标位置。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回指定元素的下标值，查找失败返回-1。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
let result = vector.getIndexFrom(4, 3);

```

## getIndexOf

```TypeScript
getIndexOf(element: T): number
```

获取指定元素第一次出现的下标值，如果未找到则返回-1。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | T | Yes | 指定元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回指定元素第一次出现时的下标值，查找失败返回-1。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(2);
vector.add(1);
vector.add(2);
vector.add(4);
let result = vector.getIndexOf(2);

```

## getLastElement

```TypeScript
getLastElement(): T
```

获取Vector实例中的最后一个元素。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回Vector实例中的最后一个元素。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
let result = vector.getLastElement();

```

## getLastIndexFrom

```TypeScript
getLastIndexFrom(element: T, index: number): number
```

从指定下标位置向后查找指定元素，并返回该元素的位置下标。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | T | Yes | 指定元素。 |
| index | number | Yes | 开始查找的下标位置。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回指定元素的下标值，查找失败返回-1。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
let result = vector.getLastIndexFrom(4,3);

```

## getLastIndexOf

```TypeScript
getLastIndexOf(element: T): number
```

获取指定元素最后一次出现的下标值，如果未找到则返回-1。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | T | Yes | 指定元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回指定元素最后一次出现时的下标值，查找失败返回-1。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(2);
vector.add(1);
vector.add(2);
vector.add(4);
let result = vector.getLastIndexOf(2);

```

## has

```TypeScript
has(element: T): boolean
```

判断此Vector中是否包含指定元素。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | T | Yes | 指定的元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果包含指定元素返回true，否则返回false。 |

**Example**

```TypeScript
let vector : Vector<string> = new Vector();
let result = vector.has("squirrel");
vector.add("squirrel");
let result1 = vector.has("squirrel");

```

## increaseCapacityTo

```TypeScript
increaseCapacityTo(newCapacity: number): void
```

扩容Vector实例。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| newCapacity | number | Yes | 新容量。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
vector.increaseCapacityTo(2);
vector.increaseCapacityTo(12);

```

## insert

```TypeScript
insert(element: T, index: number): void
```

在长度范围内插入元素，后续元素向后移动。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | T | Yes | 插入的成员数据。 |
| index | number | Yes | 插入数据的位置下标。 |

**Example**

```TypeScript
let vector : Vector<string | number | Object | Array<number>> = new Vector();
vector.insert("A", 0);
vector.insert(0, 1);
vector.insert(true, 2);

```

## isEmpty

```TypeScript
isEmpty(): boolean
```

判断Vector是否为空。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 为空返回true，不为空返回false。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
let result = vector.isEmpty();

```

## remove

```TypeScript
remove(element: T): boolean
```

删除指定元素第一次出现的元素。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | T | Yes | 待删除的元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 成功删除元素返回true，否则返回false。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
let result = vector.remove(2);

```

## removeByIndex

```TypeScript
removeByIndex(index: number): T
```

根据下标删除元素，返回被删除的元素，后续元素前移。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 待删除元素的下标。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回删除的元素。如果Vector为空，返回undefined。如果下标越界，抛出异常。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(2);
vector.add(4);
let result = vector.removeByIndex(2);

```

## removeByRange

```TypeScript
removeByRange(fromIndex: number, toIndex: number): void
```

删除Vector实例中指定范围内的元素，包括起始位置但不包括结束位置的元素。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fromIndex | number | Yes | 起始位置的下标。 |
| toIndex | number | Yes | 结束位置的下标。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
vector.removeByRange(2,4);

```

## replaceAllElements

```TypeScript
replaceAllElements(callbackFn: (value: T, index?: number, vector?: Vector<T>) => T, thisArg?: Object): void
```

对Vector中的所有元素进行替换，并返回替换后的元素。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | (value: T, index?: number, vector?: Vector&lt;T>) => T | Yes | 回调函数。 |
| thisArg | Object | No | callbackFn被调用时用作this值，默认值为当前实例对象。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
vector.replaceAllElements((value : number) : number => {
  // Add the user operation logic based on the actual scenario.
  return value;
});

```

## set

```TypeScript
set(index: number, element: T): T
```

替换Vector实例中指定下标位置的元素。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 替换元素的下标位置。 |
| element | T | Yes | 替换的元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回替换后的新元素。 |

## setLength

```TypeScript
setLength(newSize: number): void
```

为Vector设置新的长度。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| newSize | number | Yes | 设置的新长度。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
vector.setLength(8);
vector.setLength(2);

```

## sort

```TypeScript
sort(comparator?: (firstValue: T, secondValue: T) => number): void
```

对Vector中的元素进行排序。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| comparator | (firstValue: T, secondValue: T) => number | No | 排序的回调函数。默认值为当前实例对象。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
vector.sort((a: number, b: number) => a - b);
vector.sort((a: number, b: number) => b - a);
vector.sort();

```

## subVector

```TypeScript
subVector(fromIndex: number, toIndex: number): Vector<T>
```

获取Vector实例中指定范围内的元素，包括起始位置但不包括结束位置的元素，作为一个新的Vector实例返回。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fromIndex | number | Yes | 起始位置的下标。 |
| toIndex | number | Yes | 结束位置的下标。 |

**Return value:**

| Type | Description |
| --- | --- |
| Vector&lt;T> | 返回新的Vector实例。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
vector.add(6);
vector.add(8);
let result = vector.subVector(0,4);
let result1 = vector.subVector(2,4);


```

## toString

```TypeScript
toString(): string
```

用逗号（,）将Vector实例中的元素拼接成字符串。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回对应字符串。 |

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
let result = vector.toString();

```

## trimToCurrentLength

```TypeScript
trimToCurrentLength(): void
```

把Vector实例的容量调整为当前的元素个数。

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
let vector : Vector<number> = new Vector();
vector.add(2);
vector.add(4);
vector.add(5);
vector.add(4);
vector.trimToCurrentLength();

```

## length

```TypeScript
length: number
```

Vector的元素个数。

**Type:** number

**Since:** 8

**Deprecated since:** 9

**System capability:** SystemCapability.Utils.Lang

