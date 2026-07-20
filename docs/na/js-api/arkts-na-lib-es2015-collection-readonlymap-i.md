# ReadonlyMap

<!--Device-unnamed-interface ReadonlyMap<K, V>--><!--Device-unnamed-interface ReadonlyMap<K, V>-End-->

## forEach

```TypeScript
forEach(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void, thisArg?: any): void
```

<!--Device-ReadonlyMap-forEach(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void, thisArg?: any): void--><!--Device-ReadonlyMap-forEach(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void, thisArg?: any): void-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (value: V, key: K, map: ReadonlyMap<K, V>) => void | Yes |  |
| thisArg | any | No |  |

## get

```TypeScript
get(key: K): V | undefined
```

<!--Device-ReadonlyMap-get(key: K): V | undefined--><!--Device-ReadonlyMap-get(key: K): V | undefined-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| V |  |

## has

```TypeScript
has(key: K): boolean
```

<!--Device-ReadonlyMap-has(key: K): boolean--><!--Device-ReadonlyMap-has(key: K): boolean-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean |  |

## size

```TypeScript
readonly size: number
```

**Type:** number

<!--Device-ReadonlyMap-readonly size: number--><!--Device-ReadonlyMap-readonly size: number-End-->

