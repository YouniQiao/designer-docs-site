# Set

<!--Device-unnamed-interface Set<T>--><!--Device-unnamed-interface Set<T>-End-->

<a id="add"></a>
## add

```TypeScript
add(value: T): this
```

Appends a new element with a specified value to the end of the Set.

<!--Device-Set-add(value: T): this--><!--Device-Set-add(value: T): this-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| this |  |

<a id="clear"></a>
## clear

```TypeScript
clear(): void
```

<!--Device-Set-clear(): void--><!--Device-Set-clear(): void-End-->

<a id="delete"></a>
## delete

```TypeScript
delete(value: T): boolean
```

Removes a specified value from the Set.

<!--Device-Set-delete(value: T): boolean--><!--Device-Set-delete(value: T): boolean-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean |  |

<a id="foreach"></a>
## forEach

```TypeScript
forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void
```

Executes a provided function once per each value in the Set object, in insertion order.

<!--Device-Set-forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void--><!--Device-Set-forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (value: T, value2: T, set: Set&lt;T&gt;) =&gt; void | Yes |  |
| thisArg | any | No |  |

<a id="has"></a>
## has

```TypeScript
has(value: T): boolean
```

<!--Device-Set-has(value: T): boolean--><!--Device-Set-has(value: T): boolean-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean |  |

## size

```TypeScript
readonly size: number
```

**Type:** number

<!--Device-Set-readonly size: number--><!--Device-Set-readonly size: number-End-->

