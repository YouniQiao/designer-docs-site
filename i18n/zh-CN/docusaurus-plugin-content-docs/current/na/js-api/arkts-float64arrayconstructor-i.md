# Float64ArrayConstructor

## constructor

```TypeScript
new(length: number): Float64Array
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| length | number | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Float64Array |  |

## constructor

```TypeScript
new(array: ArrayLike<number> | ArrayBufferLike): Float64Array
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| array | ArrayLike&lt;number> \| ArrayBufferLike | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Float64Array |  |

## constructor

```TypeScript
new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Float64Array
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffer | ArrayBufferLike | 是 |  |
| byteOffset | number | 否 |  |
| length | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Float64Array |  |

## from

```TypeScript
from(arrayLike: ArrayLike<number>): Float64Array
```

Creates an array from an array-like or iterable object.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| arrayLike | ArrayLike&lt;number> | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Float64Array |  |

## from

```TypeScript
from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Float64Array
```

Creates an array from an array-like or iterable object.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| arrayLike | ArrayLike&lt;T> | 是 |  |
| mapfn | (v: T, k: number) => number | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Float64Array |  |

## of

```TypeScript
of(...items: number[]): Float64Array
```

Returns a new array from a set of elements.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| items | number[] | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Float64Array |  |

## BYTES_PER_ELEMENT

```TypeScript
readonly BYTES_PER_ELEMENT: number
```

The size in bytes of each element in the array.

**类型：** number

## prototype

```TypeScript
readonly prototype: Float64Array
```

**类型：** Float64Array

