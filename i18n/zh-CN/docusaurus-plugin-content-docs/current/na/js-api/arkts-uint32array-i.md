# Uint32Array

A typed array of 32-bit unsigned integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised.

## copyWithin

```TypeScript
copyWithin(target: number, start: number, end?: number): this
```

Returns the this object after copying a section of the array identified by start and end to the same array starting at position target

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | number | 是 |  |
| start | number | 是 |  |
| end | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| this |  |

## every

```TypeScript
every(predicate: (value: number, index: number, array: Uint32Array) => unknown, thisArg?: any): boolean
```

Determines whether all the members of an array satisfy the specified test.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicate | (value: number, index: number, array: Uint32Array) => unknown | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean |  |

## fill

```TypeScript
fill(value: number, start?: number, end?: number): this
```

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 |  |
| start | number | 否 |  |
| end | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| this |  |

## filter

```TypeScript
filter(predicate: (value: number, index: number, array: Uint32Array) => any, thisArg?: any): Uint32Array
```

Returns the elements of an array that meet the condition specified in a callback function.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicate | (value: number, index: number, array: Uint32Array) => any | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Uint32Array |  |

## find

```TypeScript
find(predicate: (value: number, index: number, obj: Uint32Array) => boolean, thisArg?: any): number | undefined
```

Returns the value of the first element in the array where predicate is true, and undefined otherwise.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicate | (value: number, index: number, obj: Uint32Array) => boolean | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## findIndex

```TypeScript
findIndex(predicate: (value: number, index: number, obj: Uint32Array) => boolean, thisArg?: any): number
```

Returns the index of the first element in the array where predicate is true, and -1 otherwise.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicate | (value: number, index: number, obj: Uint32Array) => boolean | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## forEach

```TypeScript
forEach(callbackfn: (value: number, index: number, array: Uint32Array) => void, thisArg?: any): void
```

Performs the specified action for each element in an array.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (value: number, index: number, array: Uint32Array) => void | 是 |  |
| thisArg | any | 否 |  |

## indexOf

```TypeScript
indexOf(searchElement: number, fromIndex?: number): number
```

Returns the index of the first occurrence of a value in an array.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| searchElement | number | 是 |  |
| fromIndex | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## join

```TypeScript
join(separator?: string): string
```

Adds all the elements of an array separated by the specified separator string.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| separator | string | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string |  |

## lastIndexOf

```TypeScript
lastIndexOf(searchElement: number, fromIndex?: number): number
```

Returns the index of the last occurrence of a value in an array.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| searchElement | number | 是 |  |
| fromIndex | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## map

```TypeScript
map(callbackfn: (value: number, index: number, array: Uint32Array) => number, thisArg?: any): Uint32Array
```

Calls a defined callback function on each element of an array, and returns an array that contains the results.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (value: number, index: number, array: Uint32Array) => number | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Uint32Array |  |

## reduce

```TypeScript
reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number): number
```

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## reduce

```TypeScript
reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number, initialValue: number): number
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number | 是 |  |
| initialValue | number | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## reduce

```TypeScript
reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint32Array) => U, initialValue: U): U
```

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (previousValue: U, currentValue: number, currentIndex: number, array: Uint32Array) => U | 是 |  |
| initialValue | U | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| U |  |

## reduceRight

```TypeScript
reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number): number
```

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## reduceRight

```TypeScript
reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number, initialValue: number): number
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number | 是 |  |
| initialValue | number | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## reduceRight

```TypeScript
reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint32Array) => U, initialValue: U): U
```

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (previousValue: U, currentValue: number, currentIndex: number, array: Uint32Array) => U | 是 |  |
| initialValue | U | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| U |  |

## reverse

```TypeScript
reverse(): Uint32Array
```

Reverses the elements in an Array.

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Uint32Array |  |

## set

```TypeScript
set(array: ArrayLike<number>, offset?: number): void
```

Sets a value or an array of values.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| array | ArrayLike&lt;number> | 是 |  |
| offset | number | 否 |  |

## slice

```TypeScript
slice(start?: number, end?: number): Uint32Array
```

Returns a section of an array.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| start | number | 否 |  |
| end | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Uint32Array |  |

## some

```TypeScript
some(predicate: (value: number, index: number, array: Uint32Array) => unknown, thisArg?: any): boolean
```

Determines whether the specified callback function returns true for any element of an array.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicate | (value: number, index: number, array: Uint32Array) => unknown | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean |  |

## sort

```TypeScript
sort(compareFn?: (a: number, b: number) => number): this
```

Sorts an array.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| compareFn | (a: number, b: number) => number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| this |  |

## subarray

```TypeScript
subarray(begin?: number, end?: number): Uint32Array
```

Gets a new Uint32Array view of the ArrayBuffer store for this array, referencing the elements at begin, inclusive, up to end, exclusive.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| begin | number | 否 |  |
| end | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Uint32Array |  |

## toLocaleString

```TypeScript
toLocaleString(): string
```

Converts a number to a string by using the current locale.

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string |  |

## toString

```TypeScript
toString(): string
```

Returns a string representation of an array.

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string |  |

## valueOf

```TypeScript
valueOf(): Uint32Array
```

Returns the primitive value of the specified object.

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Uint32Array |  |

## byteOffset

```TypeScript
readonly byteOffset: number
```

The offset in bytes of the array.

**类型：** number

## length

```TypeScript
readonly length: number
```

The length of the array.

**类型：** number

## byteLength

```TypeScript
readonly byteLength: number
```

The length in bytes of the array.

**类型：** number

## index

```TypeScript
[index: number]: number
```

**类型：** number

## BYTES_PER_ELEMENT

```TypeScript
readonly BYTES_PER_ELEMENT: number
```

The size in bytes of each element in the array.

**类型：** number

## buffer

```TypeScript
readonly buffer: ArrayBufferLike
```

The ArrayBuffer instance referenced by the array.

**类型：** ArrayBufferLike

