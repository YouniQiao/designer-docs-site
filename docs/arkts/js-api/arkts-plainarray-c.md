# PlainArray

PlainArray可用于存储具有关联关系的key-value键值对集合，其中key值唯一且类型为number，每个key对应一个value。 PlainArray依据泛型定义，采用轻量级结构。

**Since:** 8

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { PlainArray } from '@kit.ArkTS';
```

## $_iterator

```TypeScript
$_iterator(): IterableIterator<[int, T]>
```

返回一个迭代器，每一项都是一个ArkTS对象。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[int, T]> |  |

## [Symbol.iterator]

```TypeScript
[Symbol.iterator](): IterableIterator<[number, T]>
```

返回一个包含key-value键值对的迭代器对象，其中key是number类型。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[number, T]> |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The Symbol.iterator method cannot be bound. |

**Example**

```TypeScript
let plainArray = new PlainArray<string>();
plainArray.add(1, "squirrel");
plainArray.add(2, "sparrow");

for (let item of plainArray) {
  console.info("value:" + item[1], "index:" + item[0]);
}
// value:squirrel index:1
// value:sparrow index:2


// You are not advised to use the add, remove, or removeAt APIs in Symbol.iterator because they may cause unpredictable risks such as infinite loops. You can use the for loop when inserting or deleting data.
let plainArray = new PlainArray<string>();
for(let i = 0; i < 10; i++) {
  plainArray.add(i,"123");
}

for(let i = 0; i < 10; i++) {
  plainArray.remove(i);
}

```

## add

```TypeScript
add(key: int, value: T): void
```

向容器中添加一组数据。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | int | Yes | 添加成员数据的键名。需要小于等于int32_max即2147483647。 |
| value | T | Yes | 添加成员数据的值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The add method cannot be bound. |

**Example**

```TypeScript
let plainArray = new PlainArray<string>();
plainArray.add(1, "squirrel");
console.info("result:", plainArray.get(1));  // result: squirrel

```

## clear

```TypeScript
clear(): void
```

清除容器中的所有元素，并将length置为0。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The clear method cannot be bound. |

**Example**

```TypeScript
let plainArray = new PlainArray<string>();
plainArray.add(1, "squirrel");
plainArray.add(2, "sparrow");
plainArray.clear();
let result = plainArray.isEmpty();
console.info("result:", result);  // result: true

```

## clone

```TypeScript
clone(): PlainArray<T>
```

克隆一个实例，并返回克隆后的实例。修改克隆后的实例并不会影响原实例。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| PlainArray&lt;T> | 返回新的对象实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The clone method cannot be bound. |

**Example**

```TypeScript
let plainArray = new PlainArray<string>();
plainArray.add(1, "squirrel");
plainArray.add(2, "sparrow");
let newPlainArray = plainArray.clone();
console.info("result:", newPlainArray.get(1));  // result: squirrel

```

## constructor

```TypeScript
constructor()
```

PlainArray的构造函数。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200012 | The PlainArray's constructor cannot be directly invoked. |

**Example**

```TypeScript
let plainArray = new PlainArray<string>();

```

## forEach

```TypeScript
forEach(callbackFn: (value: T, index?: number, PlainArray?: PlainArray<T>) => void, thisArg?: Object): void
```

在遍历PlainArray实例对象中每一个元素的过程中，对每个元素执行回调函数。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | (value: T, index?: number, PlainArray?: PlainArray&lt;T>) => void | Yes | 回调函数。 |
| thisArg | Object | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The forEach method cannot be bound. |

**Example**

```TypeScript
let plainArray = new PlainArray<string>();
plainArray.add(1, "squirrel");
plainArray.add(2, "sparrow");
plainArray.forEach((value: string, index: number) => {
  console.info("value:" + value, "index:" + index);
});
// value:squirrel index:1
// value:sparrow index:2


// You are not advised to use the add, remove, or removeAt APIs in forEach because they may cause unpredictable risks such as infinite loops. You can use the for loop when inserting or deleting data.
let plainArray = new PlainArray<string>();
for(let i = 0; i < 10; i++) {
  plainArray.add(i,"123");
}

for(let i = 0; i < 10; i++) {
  plainArray.remove(i);
}

```

## forEach

```TypeScript
forEach(callbackFn: PlainArrayForEachCb<T>): void
```

在遍历PlainArray实例对象中每一个元素的过程中，对每个元素执行回调函数。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | PlainArrayForEachCb&lt;T> | Yes | 回调函数。 |

## get

```TypeScript
get(key: number): T
```

获取指定key所对应的value。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | number | Yes | 查找的指定key。需要小于等于int32_max即2147483647。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回key映射的value值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The get method cannot be bound. |

**Example**

```TypeScript
let plainArray = new PlainArray<string>();
plainArray.add(1, "squirrel");
plainArray.add(2, "sparrow");
let result = plainArray.get(1);
console.info("result:", result);  // result: squirrel

```

## get

```TypeScript
get(key: int): T | undefined
```

查询与指定key关联的value。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | int | Yes | 查找的目标key。  该值为整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 键值对中的value。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of index is out of range. |

## getIndexOfKey

```TypeScript
getIndexOfKey(key: int): int
```

查找指定key对应的下标值，如果未找到则返回-1。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | int | Yes | 指定key。需要小于等于int32_max即2147483647。 |

**Return value:**

| Type | Description |
| --- | --- |
| int | 返回指定key对应的下标值，查找失败返回-1。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getIndexOfKey method cannot be bound. |

**Example**

```TypeScript
let plainArray = new PlainArray<string>();
plainArray.add(1, "squirrel");
plainArray.add(2, "sparrow");
let result = plainArray.getIndexOfKey(2);
console.info("result = ", result); // result = 1

```

## getIndexOfValue

```TypeScript
getIndexOfValue(value: T): int
```

查找指定value元素第一次出现的下标值，如果未找到则返回-1。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | 指定value元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| int | 返回指定value元素第一次出现时的下标值，查找失败返回-1。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getIndexOfValue method cannot be bound. |

**Example**

```TypeScript
let plainArray = new PlainArray<string>();
plainArray.add(1, "squirrel");
plainArray.add(2, "sparrow");
let result = plainArray.getIndexOfValue("squirrel");
console.info("result:", result);  // result: 0

```

## getKeyAt

```TypeScript
getKeyAt(index: int): int
```

查找指定下标元素键值对中的key值。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | int | Yes | 指定下标。需要小于等于int32_max即2147483647。 |

**Return value:**

| Type | Description |
| --- | --- |
| int | 返回该下标元素键值对中的key值，失败返回-1。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getKeyAt method cannot be bound. |

**Example**

```TypeScript
let plainArray = new PlainArray<string>();
plainArray.add(1, "squirrel");
plainArray.add(2, "sparrow");
let result = plainArray.getKeyAt(1);
console.info("result = ", result); // result = 2

```

## getValueAt

```TypeScript
getValueAt(index: int): T
```

查找指定下标元素键值对中的Value值，失败则返回undefined。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | int | Yes | 指定下标。需要小于等于int32_max即2147483647。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回该下标元素键值对中的value值，失败返回undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getValueAt method cannot be bound. |
| 10200001 | The value of index is out of range. |

**Example**

```TypeScript
let plainArray = new PlainArray<string>();
plainArray.add(1, "squirrel");
plainArray.add(2, "sparrow");
let result = plainArray.getValueAt(1);
console.info("result:", result);  // result: sparrow

```

## has

```TypeScript
has(key: int): boolean
```

判断容器中是否包含指定key。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | int | Yes | 指定key。需要小于等于int32_max即2147483647。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 包含指定key返回true，否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The has method cannot be bound. |

**Example**

```TypeScript
let plainArray = new PlainArray<string>();
plainArray.add(1, "squirrel");
let result = plainArray.has(1);
console.info("result = ", result); // result = true

```

## isEmpty

```TypeScript
isEmpty(): boolean
```

判断容器是否为空。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 为空返回true，不为空返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The isEmpty method cannot be bound. |

**Example**

```TypeScript
const plainArray = new PlainArray<string>();
let result = plainArray.isEmpty();
console.info("result = ", result); // result =  true

```

## remove

```TypeScript
remove(key: number): T
```

删除指定key对应的键值对。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | number | Yes | 指定key。需要小于等于int32_max即2147483647。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回所删除的键值对中的Value值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The remove method cannot be bound. |

**Example**

```TypeScript
let plainArray = new PlainArray<string>();
plainArray.add(1, "squirrel");
plainArray.add(2, "sparrow");
let result = plainArray.remove(2);
console.info("result:", result);  // result: sparrow

```

## remove

```TypeScript
remove(key: int): T | undefined
```

如果存在指定key对应的键值对，则删除并返回该值。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | int | Yes | 待删除的目标key。  该值为整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 如果key存在则返回映射的值，否则返回undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of index is out of range. |

## removeAt

```TypeScript
removeAt(index: number): T
```

删除指定下标对应的元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 指定元素下标。需要小于等于int32_max即2147483647。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回删除的元素。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The removeAt method cannot be bound. |

**Example**

```TypeScript
let plainArray = new PlainArray<string>();
plainArray.add(1, "squirrel");
plainArray.add(2, "sparrow");
let result = plainArray.removeAt(1);
console.info("result:", result);  // result: sparrow

```

## removeAt

```TypeScript
removeAt(index: int): T | undefined
```

如果存在指定下标的键值对，则删除并返回该值。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | int | Yes | 查找的目标下标。  该值为整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | T类型的值，容器为空时返回undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of index is out of range. |

## removeRangeFrom

```TypeScript
removeRangeFrom(index: int, size: int): int
```

删除指定范围内的元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | int | Yes | 删除元素的起始下标。需要小于等于int32_max即2147483647。 |
| size | int | Yes | 期望删除元素个数。需要小于等于int32_max即2147483647。 |

**Return value:**

| Type | Description |
| --- | --- |
| int | 实际删除元素个数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The removeRangeFrom method cannot be bound. |
| 10200001 | The value of index is out of range. |

**Example**

```TypeScript
let plainArray = new PlainArray<string>();
plainArray.add(1, "squirrel");
plainArray.add(2, "sparrow");
let result = plainArray.removeRangeFrom(1, 3);
console.info("result:", result);  // result: 1

```

## setValueAt

```TypeScript
setValueAt(index: int, value: T): void
```

替换容器中指定下标对应键值对中的键值。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | int | Yes | 指定替换数据下标。需要小于等于int32_max即2147483647。 |
| value | T | Yes | 替换键值对中的值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The setValueAt method cannot be bound. |
| 10200001 | The value of index is out of range. |

**Example**

```TypeScript
let plainArray = new PlainArray<string | number>();
plainArray.add(1, "squirrel");
plainArray.add(2, "sparrow");
plainArray.setValueAt(1, 3546);
let result = plainArray.getValueAt(1);
console.info("result:", result);  // result: 3546

```

## toString

```TypeScript
toString(): String
```

获取包含容器中所有键和值的字符串。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| String | 返回对应字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The toString method cannot be bound. |

**Example**

```TypeScript
let plainArray = new PlainArray<string>();
plainArray.add(1, "squirrel");
plainArray.add(2, "sparrow");
let result = plainArray.toString();
console.info("result:", result);  // result: 1:squirrel,2:sparrow

```

## length

```TypeScript
length: number
```

PlainArray的元素个数。

**Type:** number

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get length(): int
```

获取PlainArray的元素个数。

**Type:** int

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

