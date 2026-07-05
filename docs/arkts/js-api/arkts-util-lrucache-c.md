# LRUCache

提供在缓存已满时丢弃最近最少使用的数据以腾出空间给新元素的 API。此类使用最近最少使用（LRU）算法，该算法认为最近 使用的数据可能在不久的将来再次被访问，而最少访问的数据是最不具价值的数据，应从缓存中移除。

**Since:** 9

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

## [Symbol.iterator]

```TypeScript
[Symbol.iterator](): IterableIterator<[K, V]>
```

指定对象的默认迭代器。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[K, V]> | 返回以键值对形式的二维数组。 |

**Example**

```TypeScript
let pro = new util.LRUCache<number, number>();
pro.put(2, 10);
pro.put(3, 15);

for (let value of pro) {
  console.info(value[0]+ ', '+ value[1]);
}
// Output:
// 2, 10
// 3, 15

```

## afterRemoval

```TypeScript
afterRemoval(isEvict: boolean, key: K, value: V, newValue: V): void
```

在移除值后执行后续操作。后续操作必须由开发者实现。该 API 在删除操作期间会被调用，例如 [get<sup>9+</sup>]util.LRUCache.get、[put<sup>9+</sup>]util.LRUCache.put、 [remove<sup>9+</sup>]util.LRUCache.remove、[clear<sup>9+</sup>]util.LRUCache.clear 和 [updateCapacity<sup>9+</sup>]util.LRUCache.updateCapacity。 > **NOTE** > > 如果在调用 [clear<sup>9+</sup>]util.LRUCache.clear 和 > [updateCapacity<sup>9+</sup>]util.LRUCache.updateCapacity 后执行回调方法，并且输入的 **key** 和 > **value** 参数为 MapIterator 类型，请参考示例 2 执行后续操作。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEvict | boolean | Yes | 容量是否不足。如果值为 true，则由于容量不足而调用此 API。 |
| key | K | Yes | 被移除的 key。 |
| value | V | Yes | 被移除的值。 |
| newValue | V | Yes | 如果调用了 put() 方法并且要添加的 key 已存在时该 key 的新值。其他情况下此参数为空。 |

## clear

```TypeScript
clear(): void
```

清除此缓存中的键值对。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
let pro = new util.LRUCache<number, number>();
pro.put(2, 10);
let result = pro.length;
pro.clear();
let res = pro.length;
console.info('result = ' + result);
console.info('res = ' + res);
// Output: result = 1
// Output: res = 0

```

## constructor

```TypeScript
constructor(capacity?: number)
```

用于创建 **LRUCache** 实例的构造函数。缓存的默认容量为 64。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capacity | number | No |  |

**Example**

```TypeScript
let pro = new util.LRUCache<number, number>();

```

## contains

```TypeScript
contains(key: K): boolean
```

判断此缓存是否包含指定的 key。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 要检查的 key。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 检查结果。如果缓存包含指定的 key，则返回 true；否则返回 false。 |

**Example**

```TypeScript
let pro = new util.LRUCache<number, number>();
pro.put(2, 10);
let result = pro.contains(2);
console.info('result = ' + result);
// Output: result = true

```

## createDefault

```TypeScript
createDefault(key: K): V
```

在缓存中无匹配的 key 时执行后续操作，并返回与该 key 关联的值（默认为 **undefined**）。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | key。 |

**Return value:**

| Type | Description |
| --- | --- |
| V | key 对应的值。 |

**Example**

```TypeScript
let pro = new util.LRUCache<number, number>();
let result = pro.createDefault(50);
console.info('result = ' + result);
// Output: result = undefined

```

## entries

```TypeScript
entries(): IterableIterator<[K, V]>
```

返回一个迭代器对象，该对象按插入顺序遍历此对象中的所有键值对（[key, value]）。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[K, V]> | 可迭代的数组。 |

**Example**

```TypeScript
let pro = new util.LRUCache<number, number>();
pro.put(2, 10);
pro.put(3, 15);
let pair = pro.entries();
for (let value of pair) {
  console.info(value[0]+ ', '+ value[1]);
}
// Output:
// 2, 10
// 3, 15

```

## get

```TypeScript
get(key: K): V | undefined
```

获取 key 对应的值。如果该 key 不在缓存中，则调用 [createDefault<sup>9+</sup>]util.LRUCache.createDefault 创建该 key。如果 **createDefault** 中指定的值 不为 **undefined**，则调用 [afterRemoval<sup>9+</sup>]util.LRUCache.afterRemoval 返回 **createDefault** 中指定的值。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 要查询值的 key。 |

**Return value:**

| Type | Description |
| --- | --- |
| V | key 对应的值。如果未找到匹配项，则返回 createDefault 中指定的值。 |

**Example**

```TypeScript
let pro = new util.LRUCache<number, number>();
pro.put(2, 10);
let result  = pro.get(2);
console.info('result = ' + result);
// Output: result = 10

```

## getCapacity

```TypeScript
getCapacity(): number
```

获取此缓存的容量。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 缓存的容量。 |

**Example**

```TypeScript
let pro = new util.LRUCache<number, number>();
let result = pro.getCapacity();
console.info('result = ' + result);
// Output: result = 64

```

## getCreateCount

```TypeScript
getCreateCount(): number
```

获取创建对象的次数。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 创建对象的次数。 |

**Example**

```TypeScript
// Create the ChildLRUCache class that inherits LRUCache, and override createDefault() to return a non-undefined value.
class ChildLRUCache extends util.LRUCache<number, number> {
  constructor() {
    super();
  }

  createDefault(key: number): number {
    return key;
  }
}
let lru = new ChildLRUCache();
lru.put(2, 10);
lru.get(3);
lru.get(5);
let res = lru.getCreateCount();
console.info('res = ' + res);
// Output: res = 2

```

## getMatchCount

```TypeScript
getMatchCount(): number
```

获取查询值匹配的次数。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 查询值匹配的次数。 |

**Example**

```TypeScript
let pro = new util.LRUCache<number, number>();
pro.put(2, 10);
pro.get(2);
let result = pro.getMatchCount();
console.info('result = ' + result);
// Output: result = 1

```

## getMissCount

```TypeScript
getMissCount(): number
```

获取查询值未匹配的次数。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 查询值未匹配的次数。 |

**Example**

```TypeScript
let pro = new util.LRUCache<number, number>();
pro.put(2, 10);
pro.get(2);
let result = pro.getMissCount();
console.info('result = ' + result);
// Output: result = 0

```

## getPutCount

```TypeScript
getPutCount(): number
```

获取向此缓存添加的次数。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 向缓存添加的次数。 |

**Example**

```TypeScript
let pro = new util.LRUCache<number, number>();
pro.put(2, 10);
let result = pro.getPutCount();
console.info('result = ' + result);
// Output: result = 1

```

## getRemovalCount

```TypeScript
getRemovalCount(): number
```

获取此缓存中键值对被回收的次数。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 此缓存中键值对被回收的次数。 |

**Example**

```TypeScript
let pro = new util.LRUCache<number, number>();
pro.put(2, 10);
pro.updateCapacity(2);
pro.put(50, 22);
let result = pro.getRemovalCount();
console.info('result = ' + result);
// Output: result = 0

```

## isEmpty

```TypeScript
isEmpty(): boolean
```

判断此缓存是否为空。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果缓存不包含任何值，则返回 true。 |

**Example**

```TypeScript
let pro = new util.LRUCache<number, number>();
pro.put(2, 10);
let result = pro.isEmpty();
console.info('result = ' + result);
// Output: result = false

```

## keys

```TypeScript
keys(): K[]
```

获取此缓存中的所有 key，按从最近最少访问到最近最多访问的顺序排列。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| K[] | 此缓存中所有 key 的列表，按从最近最少访问到最近最多访问的顺序排列。 |

**Example**

```TypeScript
let pro = new util.LRUCache<number, string>();
pro.put(1, 'A');
pro.put(2, "B");
pro.put(3, 'C');
pro.put(4, 'D')
pro.put(5, 'E')
pro.put(6, 'F')
let result = pro.keys();
console.info('result = ' + result);
// Output: result = 1,2,3,4,5,6
pro.get(5);
pro.get(3);
result = pro.keys();
console.info('result = ' + result);
// Output: result = 1,2,4,6,5,3

```

## put

```TypeScript
put(key: K, value: V): V
```

向此缓存添加键值对，并返回与该 key 关联的值。如果缓存中的值总数大于指定容量，则执行删除操作。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 要添加的键值对的 key。 |
| value | V | Yes | 要添加的键值对的 value。 |

**Return value:**

| Type | Description |
| --- | --- |
| V | 添加的键值对的值。如果 key 或 value 为空，则抛出异常。 |

**Example**

```TypeScript
let pro = new util.LRUCache<number, number>();
let result = pro.put(2, 10);
console.info('result = ' + result);
// Output: result = 10

```

## remove

```TypeScript
remove(key: K): V | undefined
```

从此缓存中移除 key 及其关联的值，并返回与该 key 关联的值。如果 key 不存在，则返回 **undefined**。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 要移除的 key。 |

**Return value:**

| Type | Description |
| --- | --- |
| V | 如果 key 存在于缓存中，则返回包含被移除键值对的 Optional 对象；如果 key 不存在  则返回 undefined；如果 key 传入 null，则抛出错误。 |

**Example**

```TypeScript
let pro = new util.LRUCache<number, number>();
pro.put(2, 10);
let result = pro.remove(20);
console.info('result = ' + result);
// Output: result = undefined

```

## toString

```TypeScript
toString(): string
```

获取此缓存的字符串表示形式。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | 此缓存的字符串表示形式。 |

**Example**

```TypeScript
let pro = new util.LRUCache<number, number>();
pro.put(2, 10);
pro.get(2);
pro.get(3);
console.info(pro.toString());
// Output: LRUCache[ maxSize = 64, hits = 1, misses = 1, hitRate = 50% ]
// maxSize: maximum size of the cache. hits: number of matched queries. misses: number of mismatched queries. hitRate: matching rate.

```

## updateCapacity

```TypeScript
updateCapacity(newCapacity: number): void
```

改变缓存容量。如果新容量小于等于 **0**，则抛出异常。如果缓存中的值总数大于指定容量，则执行删除操作。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| newCapacity | number | Yes | 缓存的新容量。最大值为 2147483647。 |

**Example**

```TypeScript
let pro = new util.LRUCache<number, number>();
pro.updateCapacity(100);

```

## values

```TypeScript
values(): V[]
```

获取此缓存中的所有值，按从最近最少访问到最近最多访问的顺序排列。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| V[] | 此缓存中所有值的列表，按从最近最少访问到最近最多访问的顺序排列。 |

**Example**

```TypeScript
let pro = new util.LRUCache<number, string>();
pro.put(1, 'A');
pro.put(2, "B");
pro.put(3, 'C');
pro.put(4, 'D')
pro.put(5, 'E')
pro.put(6, 'F')
let result = pro.values();
console.info('result = ' + result);
// Output: result = A,B,C,D,E,F
pro.get(1);
pro.get(2);
result = pro.values();
console.info('result = ' + result);
// Output: result = C,D,E,F,A,B

```

## length

```TypeScript
length: number
```

此缓存中值的总数。

**Type:** number

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

