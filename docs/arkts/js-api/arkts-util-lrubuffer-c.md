# LruBuffer

LruBuffer 算法在缓存空间不足时使用新数据替换最不常使用的数据。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache

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

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.util.LRUCache.[Symbol.iterator]

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[K, V]> | 返回以键值对形式的二维数组。 |

**Example**

```TypeScript
let pro : util.LruBuffer<number,number> = new util.LruBuffer();
pro.put(2,10);
let result = pro[Symbol.iterator]();

```

## afterRemoval

```TypeScript
afterRemoval(isEvict: boolean, key: K, value: V, newValue: V): void
```

在移除值后执行后续操作。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.afterRemoval

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEvict | boolean | Yes | 容量是否不足。如果值为 true，则由于容量不足而调用此 API。 |
| key | K | Yes | 被移除的 key。 |
| value | V | Yes | 被移除的值。 |
| newValue | V | Yes | 如果调用了 put() 方法并且要添加的 key 已存在时该 key 的新值。其他情况下此参数为空。 |

**Example**

```TypeScript
class ChildLruBuffer<K, V> extends util.LruBuffer<K, V> {
  constructor(capacity?: number) {
    super(capacity);
  }

  afterRemoval(isEvict: boolean, key: K, value: V, newValue: V): void {
    if (isEvict === true) {
      console.info('key: ' + key);
      // Output: key: 11
      console.info('value: ' + value);
      // Output: value: 1
      console.info('newValue: ' + newValue);
      // Output: newValue: null
    }
  }
}
let lru: ChildLruBuffer<number, number> = new ChildLruBuffer(2);
lru.put(11, 1);
lru.put(22, 2);
lru.put(33, 3);

```

## clear

```TypeScript
clear(): void
```

从此缓存中清除键值对。将调用 **afterRemoval()** API 执行后续操作。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.clear

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
let pro : util.LruBuffer<number,number> = new util.LruBuffer();
pro.put(2,10);
let result = pro.length;
pro.clear();

```

## constructor

```TypeScript
constructor(capacity?: number)
```

用于创建 **LruBuffer** 实例的构造函数。缓存的默认容量为 64。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.util.LRUCache.constructor

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| capacity | number | No | 要创建的缓存的容量。默认值为 64。 |

**Example**

```TypeScript
let pro : util.LruBuffer<number,number> = new util.LruBuffer();

```

## contains

```TypeScript
contains(key: K): boolean
```

判断此缓存是否包含指定的 key。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.contains

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
let pro : util.LruBuffer<number,number> = new util.LruBuffer();
pro.put(2,10);
let result = pro.contains(20);
console.info('result = ' + result);
// Output: result = false

```

## createDefault

```TypeScript
createDefault(key: K): V
```

当指定 key 的值不可用时，创建一个值。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.createDefault

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 缺少值的 key。 |

**Return value:**

| Type | Description |
| --- | --- |
| V | key 对应的值。 |

**Example**

```TypeScript
let pro : util.LruBuffer<number,number> = new util.LruBuffer();
let result = pro.createDefault(50);

```

## entries

```TypeScript
entries(): IterableIterator<[K, V]>
```

获取一个新的迭代器对象，该对象包含此对象中的所有键值对。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.entries

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[K, V]> | 可迭代的数组。 |

**Example**

```TypeScript
let pro : util.LruBuffer<number,number> = new util.LruBuffer();
pro.put(2,10);
let result = pro.entries();

```

## get

```TypeScript
get(key: K): V | undefined
```

获取指定 key 对应的值。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.get

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 要查询值的 key。 |

**Return value:**

| Type | Description |
| --- | --- |
| V | key 对应的值。如果未找到匹配项，则返回 undefined。 |

**Example**

```TypeScript
let pro : util.LruBuffer<number,number> = new util.LruBuffer();
pro.put(2,10);
let result  = pro.get(2);
console.info("result = " + result);
// Output: result = 10

```

## getCapacity

```TypeScript
getCapacity(): number
```

获取此缓存的容量。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.getCapacity

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 缓存的容量。 |

**Example**

```TypeScript
let pro : util.LruBuffer<number,number> = new util.LruBuffer();
let result = pro.getCapacity();
console.info("result = " + result);
// Output: result = 64

```

## getCreateCount

```TypeScript
getCreateCount(): number
```

获取 **createDefault()** 的返回值数量。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.getCreateCount

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | createDefault() 的返回值数量。 |

**Example**

```TypeScript
let pro : util.LruBuffer<number,number> = new util.LruBuffer();
pro.put(1,8);
let result = pro.getCreateCount();
console.info("result = " + result);
// Output: result = 0

```

## getMatchCount

```TypeScript
getMatchCount(): number
```

获取查询值匹配的次数。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.getMatchCount

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 查询值匹配的次数。 |

**Example**

```TypeScript
let pro : util.LruBuffer<number,number> = new util.LruBuffer();
pro.put(2,10);
pro.get(2);
let result = pro.getMatchCount();
console.info("result = " + result);
// Output: result = 1

```

## getMissCount

```TypeScript
getMissCount(): number
```

获取查询值未匹配的次数。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.getMissCount

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 查询值未匹配的次数。 |

**Example**

```TypeScript
let pro : util.LruBuffer<number,number> = new util.LruBuffer();
pro.put(2,10);
pro.get(2);
let result = pro.getMissCount();
console.info("result = " + result);
// Output: result = 0

```

## getPutCount

```TypeScript
getPutCount(): number
```

获取向此缓存添加的次数。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.getPutCount

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 向缓存添加的次数。 |

**Example**

```TypeScript
let pro : util.LruBuffer<number,number> = new util.LruBuffer();
pro.put(2,10);
let result = pro.getPutCount();
console.info("result = " + result);
// Output: result = 1

```

## getRemovalCount

```TypeScript
getRemovalCount(): number
```

获取从此缓存中移除的次数。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.getRemovalCount

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| number | 从缓存中移除的次数。 |

**Example**

```TypeScript
let pro : util.LruBuffer<number,number> = new util.LruBuffer();
pro.put(2,10);
pro.updateCapacity(2);
pro.put(50,22);
let result = pro.getRemovalCount();
console.info("result = " + result);
// Output: result = 0

```

## isEmpty

```TypeScript
isEmpty(): boolean
```

判断此缓存是否为空。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.isEmpty

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果缓存不包含任何值，则返回 true。 |

**Example**

```TypeScript
let pro : util.LruBuffer<number,number> = new util.LruBuffer();
pro.put(2,10);
let result = pro.isEmpty();
console.info("result = " + result);
// Output: result = false

```

## keys

```TypeScript
keys(): K[]
```

获取此缓存中的所有 key，按从最近最多访问到最近最少访问的顺序排列。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.keys

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| K[] | 此缓存中的所有 key，按从最近最多访问到最近最少访问的顺序排列。 |

**Example**

```TypeScript
let pro : util.LruBuffer<number,number> = new util.LruBuffer();
pro.put(2,10);
let result = pro.keys();
console.info("result = " + result);
// Output: result = 2

```

## put

```TypeScript
put(key: K, value: V): V
```

向此缓存添加键值对。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.put

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 要添加的键值对的 key。 |
| value | V | Yes | 要添加的键值对的 value。 |

**Return value:**

| Type | Description |
| --- | --- |
| V | 添加的值。如果 key 已存在，则返回已存在的值；如果 key 或 value 传入 null，则抛出错误。 |

**Example**

```TypeScript
let pro : util.LruBuffer<number,number> = new util.LruBuffer();
let result = pro.put(2,10);
console.info("result = " + result);
// Output: result = 10

```

## remove

```TypeScript
remove(key: K): V | undefined
```

从此缓存中移除指定的 key 及其对应的值。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.remove

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 要移除的 key。 |

**Return value:**

| Type | Description |
| --- | --- |
| V | 包含被移除键值对的 Optional 对象。如果 key 不存在，则返回空的 Optional  对象；如果 key 传入 null，则抛出错误。 |

**Example**

```TypeScript
let pro : util.LruBuffer<number,number> = new util.LruBuffer();
pro.put(2,10);
let result = pro.remove(20);
console.info("result = " + result);
// Output: result = undefined

```

## toString

```TypeScript
toString(): string
```

获取此缓存的字符串表示形式。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.toString

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| string | 此缓存的字符串表示形式。 |

**Example**

```TypeScript
let pro : util.LruBuffer<number,number> = new util.LruBuffer();
pro.put(2,10);
pro.get(2);
pro.remove(20);
let result = pro.toString();
console.info("result = " + result);
// Output: result = Lrubuffer[ maxSize = 64, hits = 1, misses = 0, hitRate = 100% ]

```

## updateCapacity

```TypeScript
updateCapacity(newCapacity: number): void
```

改变缓存容量。如果新容量小于等于 **0**，则抛出异常。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.updateCapacity

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| newCapacity | number | Yes | 缓存的新容量。 |

**Example**

```TypeScript
let pro : util.LruBuffer<number,number> = new util.LruBuffer();
pro.updateCapacity(100);

```

## values

```TypeScript
values(): V[]
```

获取此缓存中的所有值，按从最近最多访问到最近最少访问的顺序排列。

**Since:** 8

**Deprecated since:** 9

**Substitute:** util.LRUCache.values

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| V[] | 此缓存中的所有值，按从最近最多访问到最近最少访问的顺序排列。 |

**Example**

```TypeScript
let pro : util.LruBuffer<number|string,number|string> = new util.LruBuffer();
pro.put(2,10);
pro.put(2,"anhu");
pro.put("afaf","grfb");
let result = pro.values();
console.info("result = " + result);
// Output: result = anhu,grfb

```

## length

```TypeScript
length: number
```

此缓存中值的总数。

**Type:** number

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.util.LRUCache.length

**System capability:** SystemCapability.Utils.Lang

