# Int32ArrayConstructor

<!--Device-unnamed-interface Int32ArrayConstructor--><!--Device-unnamed-interface Int32ArrayConstructor-End-->

<a id="constructor"></a>
## constructor

```TypeScript
new(length: number): Int32Array
```

<!--Device-Int32ArrayConstructor-new(length: number): Int32Array--><!--Device-Int32ArrayConstructor-new(length: number): Int32Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| length | number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Int32Array |  |

<a id="constructor-1"></a>
## constructor

```TypeScript
new(array: ArrayLike<number> | ArrayBufferLike): Int32Array
```

<!--Device-Int32ArrayConstructor-new(array: ArrayLike<number> | ArrayBufferLike): Int32Array--><!--Device-Int32ArrayConstructor-new(array: ArrayLike<number> | ArrayBufferLike): Int32Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| array | [ArrayLike](arkts-na-lib-es5-arraylike-i.md)&lt;number&gt; \| ArrayBufferLike | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Int32Array |  |

<a id="constructor-2"></a>
## constructor

```TypeScript
new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Int32Array
```

<!--Device-Int32ArrayConstructor-new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Int32Array--><!--Device-Int32ArrayConstructor-new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Int32Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | [ArrayBufferLike](arkts-na-arraybufferlike-t.md) | Yes |  |
| byteOffset | number | No |  |
| length | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Int32Array |  |

<a id="from"></a>
## from

```TypeScript
from(arrayLike: ArrayLike<number>): Int32Array
```

Creates an array from an array-like or iterable object.

<!--Device-Int32ArrayConstructor-from(arrayLike: ArrayLike<number>): Int32Array--><!--Device-Int32ArrayConstructor-from(arrayLike: ArrayLike<number>): Int32Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arrayLike | [ArrayLike](arkts-na-lib-es5-arraylike-i.md)&lt;number&gt; | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Int32Array |  |

<a id="from-1"></a>
## from

```TypeScript
from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Int32Array
```

Creates an array from an array-like or iterable object.

<!--Device-Int32ArrayConstructor-from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Int32Array--><!--Device-Int32ArrayConstructor-from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Int32Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arrayLike | [ArrayLike](arkts-na-lib-es5-arraylike-i.md)&lt;T&gt; | Yes |  |
| mapfn | (v: T, k: number) =&gt; number | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Int32Array |  |

<a id="of"></a>
## of

```TypeScript
of(...items: number[]): Int32Array
```

Returns a new array from a set of elements.

<!--Device-Int32ArrayConstructor-of(...items: number[]): Int32Array--><!--Device-Int32ArrayConstructor-of(...items: number[]): Int32Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | number[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Int32Array |  |

## BYTES_PER_ELEMENT

```TypeScript
readonly BYTES_PER_ELEMENT: number
```

The size in bytes of each element in the array.

**Type:** number

<!--Device-Int32ArrayConstructor-readonly BYTES_PER_ELEMENT: number--><!--Device-Int32ArrayConstructor-readonly BYTES_PER_ELEMENT: number-End-->

## prototype

```TypeScript
readonly prototype: Int32Array
```

**Type:** Int32Array

<!--Device-Int32ArrayConstructor-readonly prototype: Int32Array--><!--Device-Int32ArrayConstructor-readonly prototype: Int32Array-End-->

