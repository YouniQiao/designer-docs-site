# Uint8ClampedArrayConstructor

<!--Device-unnamed-interface Uint8ClampedArrayConstructor--><!--Device-unnamed-interface Uint8ClampedArrayConstructor-End-->

<a id="constructor"></a>
## constructor

```TypeScript
new(length: number): Uint8ClampedArray
```

<!--Device-Uint8ClampedArrayConstructor-new(length: number): Uint8ClampedArray--><!--Device-Uint8ClampedArrayConstructor-new(length: number): Uint8ClampedArray-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| length | number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Uint8ClampedArray](arkts-na-lib-es2015-iterable-uint8clampedarray-i.md) |  |

<a id="constructor-1"></a>
## constructor

```TypeScript
new(array: ArrayLike<number> | ArrayBufferLike): Uint8ClampedArray
```

<!--Device-Uint8ClampedArrayConstructor-new(array: ArrayLike<number> | ArrayBufferLike): Uint8ClampedArray--><!--Device-Uint8ClampedArrayConstructor-new(array: ArrayLike<number> | ArrayBufferLike): Uint8ClampedArray-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| array | [ArrayLike](arkts-na-lib-es5-arraylike-i.md)&lt;number&gt; \| ArrayBufferLike | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Uint8ClampedArray](arkts-na-lib-es2015-iterable-uint8clampedarray-i.md) |  |

<a id="constructor-2"></a>
## constructor

```TypeScript
new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint8ClampedArray
```

<!--Device-Uint8ClampedArrayConstructor-new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint8ClampedArray--><!--Device-Uint8ClampedArrayConstructor-new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint8ClampedArray-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | [ArrayBufferLike](arkts-na-arraybufferlike-t.md) | Yes |  |
| byteOffset | number | No |  |
| length | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Uint8ClampedArray](arkts-na-lib-es2015-iterable-uint8clampedarray-i.md) |  |

<a id="from"></a>
## from

```TypeScript
from(arrayLike: ArrayLike<number>): Uint8ClampedArray
```

Creates an array from an array-like or iterable object.

<!--Device-Uint8ClampedArrayConstructor-from(arrayLike: ArrayLike<number>): Uint8ClampedArray--><!--Device-Uint8ClampedArrayConstructor-from(arrayLike: ArrayLike<number>): Uint8ClampedArray-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arrayLike | [ArrayLike](arkts-na-lib-es5-arraylike-i.md)&lt;number&gt; | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Uint8ClampedArray](arkts-na-lib-es2015-iterable-uint8clampedarray-i.md) |  |

<a id="from-1"></a>
## from

```TypeScript
from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint8ClampedArray
```

Creates an array from an array-like or iterable object.

<!--Device-Uint8ClampedArrayConstructor-from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint8ClampedArray--><!--Device-Uint8ClampedArrayConstructor-from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint8ClampedArray-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arrayLike | [ArrayLike](arkts-na-lib-es5-arraylike-i.md)&lt;T&gt; | Yes |  |
| mapfn | (v: T, k: number) =&gt; number | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Uint8ClampedArray](arkts-na-lib-es2015-iterable-uint8clampedarray-i.md) |  |

<a id="of"></a>
## of

```TypeScript
of(...items: number[]): Uint8ClampedArray
```

Returns a new array from a set of elements.

<!--Device-Uint8ClampedArrayConstructor-of(...items: number[]): Uint8ClampedArray--><!--Device-Uint8ClampedArrayConstructor-of(...items: number[]): Uint8ClampedArray-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | number[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Uint8ClampedArray](arkts-na-lib-es2015-iterable-uint8clampedarray-i.md) |  |

## BYTES_PER_ELEMENT

```TypeScript
readonly BYTES_PER_ELEMENT: number
```

The size in bytes of each element in the array.

**Type:** number

<!--Device-Uint8ClampedArrayConstructor-readonly BYTES_PER_ELEMENT: number--><!--Device-Uint8ClampedArrayConstructor-readonly BYTES_PER_ELEMENT: number-End-->

## prototype

```TypeScript
readonly prototype: Uint8ClampedArray
```

**Type:** Uint8ClampedArray

<!--Device-Uint8ClampedArrayConstructor-readonly prototype: Uint8ClampedArray--><!--Device-Uint8ClampedArrayConstructor-readonly prototype: Uint8ClampedArray-End-->

