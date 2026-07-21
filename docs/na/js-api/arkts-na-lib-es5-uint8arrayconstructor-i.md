# Uint8ArrayConstructor

<!--Device-unnamed-interface Uint8ArrayConstructor--><!--Device-unnamed-interface Uint8ArrayConstructor-End-->

<a id="constructor"></a>
## constructor

```TypeScript
new(length: number): Uint8Array
```

<!--Device-Uint8ArrayConstructor-new(length: number): Uint8Array--><!--Device-Uint8ArrayConstructor-new(length: number): Uint8Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| length | number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array |  |

<a id="constructor-1"></a>
## constructor

```TypeScript
new(array: ArrayLike<number> | ArrayBufferLike): Uint8Array
```

<!--Device-Uint8ArrayConstructor-new(array: ArrayLike<number> | ArrayBufferLike): Uint8Array--><!--Device-Uint8ArrayConstructor-new(array: ArrayLike<number> | ArrayBufferLike): Uint8Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| array | [ArrayLike](arkts-na-lib-es5-arraylike-i.md)&lt;number&gt; \| ArrayBufferLike | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array |  |

<a id="constructor-2"></a>
## constructor

```TypeScript
new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint8Array
```

<!--Device-Uint8ArrayConstructor-new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint8Array--><!--Device-Uint8ArrayConstructor-new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint8Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | [ArrayBufferLike](arkts-na-arraybufferlike-t.md) | Yes |  |
| byteOffset | number | No |  |
| length | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array |  |

<a id="from"></a>
## from

```TypeScript
from(arrayLike: ArrayLike<number>): Uint8Array
```

Creates an array from an array-like or iterable object.

<!--Device-Uint8ArrayConstructor-from(arrayLike: ArrayLike<number>): Uint8Array--><!--Device-Uint8ArrayConstructor-from(arrayLike: ArrayLike<number>): Uint8Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arrayLike | [ArrayLike](arkts-na-lib-es5-arraylike-i.md)&lt;number&gt; | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array |  |

<a id="from-1"></a>
## from

```TypeScript
from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint8Array
```

Creates an array from an array-like or iterable object.

<!--Device-Uint8ArrayConstructor-from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint8Array--><!--Device-Uint8ArrayConstructor-from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint8Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arrayLike | [ArrayLike](arkts-na-lib-es5-arraylike-i.md)&lt;T&gt; | Yes |  |
| mapfn | (v: T, k: number) =&gt; number | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array |  |

<a id="of"></a>
## of

```TypeScript
of(...items: number[]): Uint8Array
```

Returns a new array from a set of elements.

<!--Device-Uint8ArrayConstructor-of(...items: number[]): Uint8Array--><!--Device-Uint8ArrayConstructor-of(...items: number[]): Uint8Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | number[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array |  |

## BYTES_PER_ELEMENT

```TypeScript
readonly BYTES_PER_ELEMENT: number
```

The size in bytes of each element in the array.

**Type:** number

<!--Device-Uint8ArrayConstructor-readonly BYTES_PER_ELEMENT: number--><!--Device-Uint8ArrayConstructor-readonly BYTES_PER_ELEMENT: number-End-->

## prototype

```TypeScript
readonly prototype: Uint8Array
```

**Type:** Uint8Array

<!--Device-Uint8ArrayConstructor-readonly prototype: Uint8Array--><!--Device-Uint8ArrayConstructor-readonly prototype: Uint8Array-End-->

