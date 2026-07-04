# Int8ArrayConstructor

## constructor

```TypeScript
new(length: number): Int8Array
```

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| length | number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Int8Array |  |

## constructor

```TypeScript
new(array: ArrayLike<number> | ArrayBufferLike): Int8Array
```

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| array | ArrayLike&lt;number&gt; \| ArrayBufferLike | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Int8Array |  |

## constructor

```TypeScript
new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Int8Array
```

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBufferLike | Yes |  |
| byteOffset | number | No |  |
| length | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Int8Array |  |

## from

```TypeScript
from(arrayLike: ArrayLike<number>): Int8Array
```

Creates an array from an array-like or iterable object.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arrayLike | ArrayLike&lt;number&gt; | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Int8Array |  |

## from

```TypeScript
from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Int8Array
```

Creates an array from an array-like or iterable object.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arrayLike | ArrayLike&lt;T&gt; | Yes |  |
| mapfn | (v: T, k: number) =&gt; number | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Int8Array |  |

## of

```TypeScript
of(...items: number[]): Int8Array
```

Returns a new array from a set of elements.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | number[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Int8Array |  |

## BYTES_PER_ELEMENT

```TypeScript
readonly BYTES_PER_ELEMENT: number
```

The size in bytes of each element in the array.

**Type:** number

## prototype

```TypeScript
readonly prototype: Int8Array
```

**Type:** Int8Array

