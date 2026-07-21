# Float32ArrayConstructor

<!--Device-unnamed-interface Float32ArrayConstructor--><!--Device-unnamed-interface Float32ArrayConstructor-End-->

<a id="constructor"></a>
## constructor

```TypeScript
new(length: number): Float32Array
```

<!--Device-Float32ArrayConstructor-new(length: number): Float32Array--><!--Device-Float32ArrayConstructor-new(length: number): Float32Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| length | number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Float32Array |  |

<a id="constructor-1"></a>
## constructor

```TypeScript
new(array: ArrayLike<number> | ArrayBufferLike): Float32Array
```

<!--Device-Float32ArrayConstructor-new(array: ArrayLike<number> | ArrayBufferLike): Float32Array--><!--Device-Float32ArrayConstructor-new(array: ArrayLike<number> | ArrayBufferLike): Float32Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| array | [ArrayLike](arkts-na-lib-es5-arraylike-i.md)&lt;number&gt; \| ArrayBufferLike | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Float32Array |  |

<a id="constructor-2"></a>
## constructor

```TypeScript
new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Float32Array
```

<!--Device-Float32ArrayConstructor-new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Float32Array--><!--Device-Float32ArrayConstructor-new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Float32Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | [ArrayBufferLike](arkts-na-arraybufferlike-t.md) | Yes |  |
| byteOffset | number | No |  |
| length | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Float32Array |  |

<a id="from"></a>
## from

```TypeScript
from(arrayLike: ArrayLike<number>): Float32Array
```

Creates an array from an array-like or iterable object.

<!--Device-Float32ArrayConstructor-from(arrayLike: ArrayLike<number>): Float32Array--><!--Device-Float32ArrayConstructor-from(arrayLike: ArrayLike<number>): Float32Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arrayLike | [ArrayLike](arkts-na-lib-es5-arraylike-i.md)&lt;number&gt; | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Float32Array |  |

<a id="from-1"></a>
## from

```TypeScript
from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Float32Array
```

Creates an array from an array-like or iterable object.

<!--Device-Float32ArrayConstructor-from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Float32Array--><!--Device-Float32ArrayConstructor-from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Float32Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arrayLike | [ArrayLike](arkts-na-lib-es5-arraylike-i.md)&lt;T&gt; | Yes |  |
| mapfn | (v: T, k: number) =&gt; number | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Float32Array |  |

<a id="of"></a>
## of

```TypeScript
of(...items: number[]): Float32Array
```

Returns a new array from a set of elements.

<!--Device-Float32ArrayConstructor-of(...items: number[]): Float32Array--><!--Device-Float32ArrayConstructor-of(...items: number[]): Float32Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | number[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Float32Array |  |

## BYTES_PER_ELEMENT

```TypeScript
readonly BYTES_PER_ELEMENT: number
```

The size in bytes of each element in the array.

**Type:** number

<!--Device-Float32ArrayConstructor-readonly BYTES_PER_ELEMENT: number--><!--Device-Float32ArrayConstructor-readonly BYTES_PER_ELEMENT: number-End-->

## prototype

```TypeScript
readonly prototype: Float32Array
```

**Type:** Float32Array

<!--Device-Float32ArrayConstructor-readonly prototype: Float32Array--><!--Device-Float32ArrayConstructor-readonly prototype: Float32Array-End-->

