# Map

A non-linear data structure.

> **NOTE**  
>  
> - This module can be imported only to ArkTS files (with the file name extension .ets).  
> This section uses the following to identify the use of generics:

- K: key.  
- V: value.The K and V types must be any of the [sendable data types](../../../../arkts-utils/arkts-sendable.md#sendable-data-types).**Decorator**: \@Sendable

**Since:** 12

**Decorator:** @Sendable

<!--Device-collections-class Map<K, V>--><!--Device-collections-class Map<K, V>-End-->

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { collections } from '@kit.ArkTS';
```

## [Symbol.iterator]

```TypeScript
[Symbol.iterator](): IterableIterator<[K, V]>
```

Returns an iterator, each item of which is a JavaScript object.NOTE:This API cannot be used in .ets files.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Map-[Symbol.iterator](): IterableIterator<[K, V]>--><!--Device-Map-[Symbol.iterator](): IterableIterator<[K, V]>-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [IterableIterator](../../apis-na/arkts-apis/arkts-na-lib-es2015-iterable-iterableiterator-i.md)<[K, V]> | Iterator object that yields key-value pairs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200011](../errorcode-utils.md#10200011-passed-thisobject-is-not-an-instance-of-the-containers-class) | The Symbol.iterator method cannot be bound. |

## clear

```TypeScript
clear(): void
```

Removes all elements from this ArkTS map.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Map-clear(): void--><!--Device-Map-clear(): void-End-->

**System capability:** SystemCapability.Utils.Lang

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200011](../errorcode-utils.md#10200011-passed-thisobject-is-not-an-instance-of-the-containers-class) | The clear method cannot be bound with non-sendable. |
| [10200201](../errorcode-utils.md#10200201-concurrent-modification-error) | Concurrent modification error. |

## constructor

```TypeScript
constructor(entries?: readonly (readonly [K, V])[] | null)
```

A constructor used to create an ArkTS map.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Map-constructor(entries?: readonly (readonly [K, V])[] | null)--><!--Device-Map-constructor(entries?: readonly (readonly [K, V])[] | null)-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| entries | readonly (readonly [K, V])[] \| null | No | Array containing key-value pairs, or iterator object.The default value is **null**, indicating that an empty map is created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200012](../errorcode-utils.md#10200012-constructor-calling-failure) | The ArkTS Map's constructor cannot be directly invoked. |

## constructor

```TypeScript
constructor(iterable: Iterable<readonly [K, V]>)
```

A constructor used to create an ArkTS map.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Map-constructor(iterable: Iterable<readonly [K, V]>)--><!--Device-Map-constructor(iterable: Iterable<readonly [K, V]>)-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| iterable | [Iterable](../../apis-na/arkts-apis/arkts-na-lib-es2015-iterable-iterable-i.md)<readonly [K, V]> | Yes | Object used to construct the ArkTS map. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200012](../errorcode-utils.md#10200012-constructor-calling-failure) | The ArkTS Map's constructor cannot be directly invoked. |

## delete

```TypeScript
delete(key: K): boolean
```

Deletes a specified key from this ArkTS map.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Map-delete(key: K): boolean--><!--Device-Map-delete(key: K): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | Key to delete. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Operation result. The value **true** is returned if the key exists and has been deleted;otherwise, **false** is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200011](../errorcode-utils.md#10200011-passed-thisobject-is-not-an-instance-of-the-containers-class) | The delete method cannot be bound with non-sendable. |
| [10200201](../errorcode-utils.md#10200201-concurrent-modification-error) | Concurrent modification error. |

## entries

```TypeScript
entries(): IterableIterator<[K, V]>
```

Returns a map iterator object that contains the key-value pair of each element in this ArkTS map.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Map-entries(): IterableIterator<[K, V]>--><!--Device-Map-entries(): IterableIterator<[K, V]>-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [IterableIterator](../../apis-na/arkts-apis/arkts-na-lib-es2015-iterable-iterableiterator-i.md)<[K, V]> | Map iterator object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200011](../errorcode-utils.md#10200011-passed-thisobject-is-not-an-instance-of-the-containers-class) | The entries method cannot be bound with non-sendable. |
| [10200201](../errorcode-utils.md#10200201-concurrent-modification-error) | Concurrent modification error. |

## forEach

```TypeScript
forEach(callbackFn: (value: V, key: K, map: Map<K, V>) => void): void
```

Calls a callback function for each key-value pair in this ArkTS map.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Map-forEach(callbackFn: (value: V, key: K, map: Map<K, V>) => void): void--><!--Device-Map-forEach(callbackFn: (value: V, key: K, map: Map<K, V>) => void): void-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | (value: V, key: K, map: Map<K, V>) => void | Yes | Callback function to run for each key-value pair. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200011](../errorcode-utils.md#10200011-passed-thisobject-is-not-an-instance-of-the-containers-class) | The forEach method cannot be bound with non-sendable. |
| [10200201](../errorcode-utils.md#10200201-concurrent-modification-error) | Concurrent modification error. |

## get

```TypeScript
get(key: K): V | undefined
```

Obtains the value of the specified key in this ArkTS map.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Map-get(key: K): V | undefined--><!--Device-Map-get(key: K): V | undefined-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | Target key. |

**Return value:**

| Type | Description |
| --- | --- |
| V | Value obtained. If the key is not found, **undefined** is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200011](../errorcode-utils.md#10200011-passed-thisobject-is-not-an-instance-of-the-containers-class) | The get method cannot be bound with non-sendable. |
| [10200201](../errorcode-utils.md#10200201-concurrent-modification-error) | Concurrent modification error. |

## has

```TypeScript
has(key: K): boolean
```

Checks whether a key exists in this ArkTS map.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Map-has(key: K): boolean--><!--Device-Map-has(key: K): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | Target key. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result. The value **true** is returned if the key exists; otherwise, **false** is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200011](../errorcode-utils.md#10200011-passed-thisobject-is-not-an-instance-of-the-containers-class) | The has method cannot be bound with non-sendable. |
| [10200201](../errorcode-utils.md#10200201-concurrent-modification-error) | Concurrent modification error. |

## keys

```TypeScript
keys(): IterableIterator<K>
```

Returns a map iterator object that contains the key of each element in this ArkTS map.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Map-keys(): IterableIterator<K>--><!--Device-Map-keys(): IterableIterator<K>-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [IterableIterator](../../apis-na/arkts-apis/arkts-na-lib-es2015-iterable-iterableiterator-i.md)<K> | Map iterator object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200011](../errorcode-utils.md#10200011-passed-thisobject-is-not-an-instance-of-the-containers-class) | The keys method cannot be bound with non-sendable. |
| [10200201](../errorcode-utils.md#10200201-concurrent-modification-error) | Concurrent modification error. |

## set

```TypeScript
set(key: K, value: V): Map<K, V>
```

Adds or updates a key-value pair to this ArkTS map.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Map-set(key: K, value: V): Map<K, V>--><!--Device-Map-set(key: K, value: V): Map<K, V>-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | Target key. |
| value | V | Yes | Target value. |

**Return value:**

| Type | Description |
| --- | --- |
| [Map](../../apis-na/arkts-apis/arkts-na-lib-es2015-collection-map-i.md)<K, V> | New map obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200011](../errorcode-utils.md#10200011-passed-thisobject-is-not-an-instance-of-the-containers-class) | The set method cannot be bound with non-sendable. |
| [10200201](../errorcode-utils.md#10200201-concurrent-modification-error) | Concurrent modification error. |

## values

```TypeScript
values(): IterableIterator<V>
```

Returns a map iterator object that contains the value of each element in this ArkTS map.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Map-values(): IterableIterator<V>--><!--Device-Map-values(): IterableIterator<V>-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| [IterableIterator](../../apis-na/arkts-apis/arkts-na-lib-es2015-iterable-iterableiterator-i.md)<V> | Map iterator object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [10200011](../errorcode-utils.md#10200011-passed-thisobject-is-not-an-instance-of-the-containers-class) | The values method cannot be bound with non-sendable. |
| [10200201](../errorcode-utils.md#10200201-concurrent-modification-error) | Concurrent modification error. |

## size

```TypeScript
readonly size: number
```

Number of elements in a map.

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Map-readonly size: number--><!--Device-Map-readonly size: number-End-->

**System capability:** SystemCapability.Utils.Lang

