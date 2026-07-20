# Float64ArrayConstructor

<!--Device-unnamed-interface Float64ArrayConstructor--><!--Device-unnamed-interface Float64ArrayConstructor-End-->

## constructor

```TypeScript
new(length: number): Float64Array
```

<!--Device-Float64ArrayConstructor-new(length: number): Float64Array--><!--Device-Float64ArrayConstructor-new(length: number): Float64Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| length | number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Float64Array](arkts-na-lib-es2015-iterable-float64array-i.md) |  |

## constructor

```TypeScript
new(array: ArrayLike<number> | ArrayBufferLike): Float64Array
```

<!--Device-Float64ArrayConstructor-new(array: ArrayLike<number> | ArrayBufferLike): Float64Array--><!--Device-Float64ArrayConstructor-new(array: ArrayLike<number> | ArrayBufferLike): Float64Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| array | [ArrayLike](arkts-na-lib-es5-arraylike-i.md)<number> \| ArrayBufferLike | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Float64Array](arkts-na-lib-es2015-iterable-float64array-i.md) |  |

## constructor

```TypeScript
new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Float64Array
```

<!--Device-Float64ArrayConstructor-new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Float64Array--><!--Device-Float64ArrayConstructor-new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Float64Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | [ArrayBufferLike](arkts-na-arraybufferlike-t.md) | Yes |  |
| byteOffset | number | No |  |
| length | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Float64Array](arkts-na-lib-es2015-iterable-float64array-i.md) |  |

## from

```TypeScript
from(arrayLike: ArrayLike<number>): Float64Array
```

Creates an array from an array-like or iterable object.

<!--Device-Float64ArrayConstructor-from(arrayLike: ArrayLike<number>): Float64Array--><!--Device-Float64ArrayConstructor-from(arrayLike: ArrayLike<number>): Float64Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arrayLike | [ArrayLike](arkts-na-lib-es5-arraylike-i.md)<number> | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Float64Array](arkts-na-lib-es2015-iterable-float64array-i.md) |  |

## from

```TypeScript
from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Float64Array
```

Creates an array from an array-like or iterable object.

<!--Device-Float64ArrayConstructor-from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Float64Array--><!--Device-Float64ArrayConstructor-from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Float64Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arrayLike | [ArrayLike](arkts-na-lib-es5-arraylike-i.md)<T> | Yes |  |
| mapfn | (v: T, k: number) => number | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Float64Array](arkts-na-lib-es2015-iterable-float64array-i.md) |  |

## of

```TypeScript
of(...items: number[]): Float64Array
```

Returns a new array from a set of elements.

<!--Device-Float64ArrayConstructor-of(...items: number[]): Float64Array--><!--Device-Float64ArrayConstructor-of(...items: number[]): Float64Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | number[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Float64Array](arkts-na-lib-es2015-iterable-float64array-i.md) |  |

## BYTES_PER_ELEMENT

```TypeScript
readonly BYTES_PER_ELEMENT: number
```

The size in bytes of each element in the array.

**Type:** number

<!--Device-Float64ArrayConstructor-readonly BYTES_PER_ELEMENT: number--><!--Device-Float64ArrayConstructor-readonly BYTES_PER_ELEMENT: number-End-->

## prototype

```TypeScript
readonly prototype: Float64Array
```

**Type:** Float64Array

<!--Device-Float64ArrayConstructor-readonly prototype: Float64Array--><!--Device-Float64ArrayConstructor-readonly prototype: Float64Array-End-->

