# HashSet

HashSet基于HashMap实现。在HashSet中，仅处理value对象。

**Since:** 8

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { HashSet } from '@kit.ArkTS';
```

## $_iterator

```TypeScript
$_iterator(): IterableIterator<T>
```

返回一个迭代器，每一项都是一个JavaScript对象。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;T> | HashSet的迭代器。 |

## [Symbol.iterator]

```TypeScript
[Symbol.iterator](): IterableIterator<T>
```

返回一个迭代器，迭代器的每一项都是一个JavaScript对象。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;T> |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The Symbol.iterator method cannot be bound. |

**Example**

```TypeScript
let hashSet = new HashSet<string>();
hashSet.add("squirrel");
hashSet.add("sparrow");

// Method 1:
for (let item of hashSet) {
  console.info("value: " + item);
}
// value: squirrel
// value: sparrow

// Method 2:
let iter = hashSet[Symbol.iterator]();
let temp: IteratorResult<string> = iter.next();
while(!temp.done) {
  console.info("value: " + temp.value);
  temp = iter.next();
}
// value: squirrel
// value: sparrow


// You are not advised to use the set or remove APIs in Symbol.iterator because they may cause unpredictable risks such as infinite loops. You can use the for loop when inserting or deleting data.
let hashSet = new HashSet<string>();
for(let i = 0;i < 10;i++) {
  hashSet.add("sparrow" + i);
}
for(let i = 0;i < 10;i++) {
  hashSet.remove("sparrow" + i);
}

```

## add

```TypeScript
add(value: T): boolean
```

向HashSet添加元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | 添加成员数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 成功添加元素返回true，否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The add method cannot be bound. |

**Example**

```TypeScript
let hashSet = new HashSet<string>();
let result = hashSet.add("squirrel");
console.info("result:", result);  // result: true

```

## clear

```TypeScript
clear(): void
```

清除HashSet中的所有元素，并将length置为0。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The clear method cannot be bound. |

**Example**

```TypeScript
let hashSet = new HashSet<string>();
hashSet.add("squirrel");
hashSet.add("sparrow");
hashSet.clear();
let result = hashSet.isEmpty();
console.info("result:", result);  // result: true

```

## constructor

```TypeScript
constructor()
```

HashSet的构造函数。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200012 | The HashSet's constructor cannot be directly invoked. |

**Example**

```TypeScript
let hashSet = new HashSet<number>();

```

## entries

```TypeScript
entries(): IterableIterator<[T, T]>
```

返回包含此映射中所有键值对的新迭代器对象。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[T, T]> | 返回一个迭代器。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The entries method cannot be bound. |

**Example**

```TypeScript
let hashSet = new HashSet<string>();
hashSet.add("squirrel");
hashSet.add("sparrow");
let iter = hashSet.entries();
let temp: IteratorResult<[string, string]> = iter.next();
while(!temp.done) {
  console.info("key:" + temp.value[0]);
  console.info("value:" + temp.value[1]);
  temp = iter.next();
}
// key:squirrel
// value:squirrel
// key:sparrow
// value:sparrow


// You are not advised to use the set or remove APIs in entries because they may cause unpredictable risks such as infinite loops. You can use the for loop when inserting or deleting data.
let hashSet = new HashSet<string>();
for(let i = 0; i < 10; i++) {
  hashSet.add("sparrow" + i);
}
for(let i = 0; i < 10; i++) {
  hashSet.remove("sparrow" + i);
}

```

## forEach

```TypeScript
forEach(callbackFn: (value?: T, key?: T, set?: HashSet<T>) => void, thisArg?: Object): void
```

在遍历过程中对每个元素调用一次回调函数。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | (value?: T, key?: T, set?: HashSet&lt;T>) => void | Yes | 回调函数。 |
| thisArg | Object | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The forEach method cannot be bound. |

**Example**

```TypeScript
let hashSet = new HashSet<string>();
hashSet.add("sparrow");
hashSet.add("squirrel");
hashSet.forEach((value: string, key: string): void => {
  console.info("value:" + value, "key:" + key);
});
// value:squirrel key:squirrel
// value:sparrow key:sparrow


// You are not advised to use the add and remove APIs in forEach because they may cause unpredictable risks such as infinite loops. You can use the for loop when inserting or deleting data.
let hashSet = new HashSet<string>();
for(let i = 0; i < 10; i++) {
  hashSet.add("sparrow" + i);
}
for(let i = 0; i < 10; i++) {
  hashSet.remove("sparrow" + i);
}

```

## forEach

```TypeScript
forEach(callbackFn: HashSetCbFn<T>): void
```

遍历HashSet中的所有元素，并对每个元素执行回调函数。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | HashSetCbFn&lt;T> | Yes | 对每个元素执行的回调函数。 |

## has

```TypeScript
has(value: T): boolean
```

判断HashSet是否包含指定元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | 指定元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 包含指定元素返回true，否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The has method cannot be bound. |

**Example**

```TypeScript
let hashSet = new HashSet<string>();
hashSet.add("squirrel");
let result = hashSet.has("squirrel");
console.info("result:", result);  // result: true

```

## isEmpty

```TypeScript
isEmpty(): boolean
```

判断HashSet是否为空。

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
const hashSet = new HashSet<number>();
let result = hashSet.isEmpty();
console.info("result:", result);  // result: true

```

## remove

```TypeScript
remove(value: T): boolean
```

从HashSet中删除指定的元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | 指定删除的元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 成功删除指定元素返回true，否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The remove method cannot be bound. |

**Example**

```TypeScript
let hashSet = new HashSet<string>();
hashSet.add("squirrel");
hashSet.add("sparrow");
let result = hashSet.remove("sparrow");
console.info("result:", result);  // result: true

```

## values

```TypeScript
values(): IterableIterator<T>
```

返回包含此映射中所有键值的新迭代器对象。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;T> | 返回一个迭代器。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The values method cannot be bound. |

**Example**

```TypeScript
let hashSet = new HashSet<string>();
hashSet.add("squirrel");
hashSet.add("sparrow");
let values = hashSet.values();
for (let value of values) {
  console.info("value:", value);
}
// value: squirrel
// value: sparrow

```

## length

```TypeScript
length: number
```

HashSet的元素个数。

**Type:** number

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get length(): int
```

获取HashSet的元素个数。

**Type:** int

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

