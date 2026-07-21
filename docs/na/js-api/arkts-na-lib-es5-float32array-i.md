# Float32Array

A typed array of 32-bit float values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised.

<!--Device-unnamed-interface Float32Array--><!--Device-unnamed-interface Float32Array-End-->

<a id="copywithin"></a>
## copyWithin

```TypeScript
copyWithin(target: number, start: number, end?: number): this
```

Returns the this object after copying a section of the array identified by start and end to the same array starting at position target

<!--Device-Float32Array-copyWithin(target: number, start: number, end?: number): this--><!--Device-Float32Array-copyWithin(target: number, start: number, end?: number): this-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | number | Yes |  |
| start | number | Yes |  |
| end | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| this |  |

<a id="every"></a>
## every

```TypeScript
every(predicate: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean
```

Determines whether all the members of an array satisfy the specified test.

<!--Device-Float32Array-every(predicate: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean--><!--Device-Float32Array-every(predicate: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: number, index: number, array: Float32Array) =&gt; unknown | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean |  |

<a id="fill"></a>
## fill

```TypeScript
fill(value: number, start?: number, end?: number): this
```

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

<!--Device-Float32Array-fill(value: number, start?: number, end?: number): this--><!--Device-Float32Array-fill(value: number, start?: number, end?: number): this-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes |  |
| start | number | No |  |
| end | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| this |  |

<a id="filter"></a>
## filter

```TypeScript
filter(predicate: (value: number, index: number, array: Float32Array) => any, thisArg?: any): Float32Array
```

Returns the elements of an array that meet the condition specified in a callback function.

<!--Device-Float32Array-filter(predicate: (value: number, index: number, array: Float32Array) => any, thisArg?: any): Float32Array--><!--Device-Float32Array-filter(predicate: (value: number, index: number, array: Float32Array) => any, thisArg?: any): Float32Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: number, index: number, array: Float32Array) =&gt; any | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Float32Array |  |

<a id="find"></a>
## find

```TypeScript
find(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number | undefined
```

Returns the value of the first element in the array where predicate is true, and undefined otherwise.

<!--Device-Float32Array-find(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number | undefined--><!--Device-Float32Array-find(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number | undefined-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: number, index: number, obj: Float32Array) =&gt; boolean | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="findindex"></a>
## findIndex

```TypeScript
findIndex(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number
```

Returns the index of the first element in the array where predicate is true, and -1otherwise.

<!--Device-Float32Array-findIndex(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number--><!--Device-Float32Array-findIndex(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: number, index: number, obj: Float32Array) =&gt; boolean | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="foreach"></a>
## forEach

```TypeScript
forEach(callbackfn: (value: number, index: number, array: Float32Array) => void, thisArg?: any): void
```

Performs the specified action for each element in an array.

<!--Device-Float32Array-forEach(callbackfn: (value: number, index: number, array: Float32Array) => void, thisArg?: any): void--><!--Device-Float32Array-forEach(callbackfn: (value: number, index: number, array: Float32Array) => void, thisArg?: any): void-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (value: number, index: number, array: Float32Array) =&gt; void | Yes |  |
| thisArg | any | No |  |

<a id="indexof"></a>
## indexOf

```TypeScript
indexOf(searchElement: number, fromIndex?: number): number
```

Returns the index of the first occurrence of a value in an array.

<!--Device-Float32Array-indexOf(searchElement: number, fromIndex?: number): number--><!--Device-Float32Array-indexOf(searchElement: number, fromIndex?: number): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| searchElement | number | Yes |  |
| fromIndex | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="join"></a>
## join

```TypeScript
join(separator?: string): string
```

Adds all the elements of an array separated by the specified separator string.

<!--Device-Float32Array-join(separator?: string): string--><!--Device-Float32Array-join(separator?: string): string-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| separator | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

<a id="lastindexof"></a>
## lastIndexOf

```TypeScript
lastIndexOf(searchElement: number, fromIndex?: number): number
```

Returns the index of the last occurrence of a value in an array.

<!--Device-Float32Array-lastIndexOf(searchElement: number, fromIndex?: number): number--><!--Device-Float32Array-lastIndexOf(searchElement: number, fromIndex?: number): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| searchElement | number | Yes |  |
| fromIndex | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="map"></a>
## map

```TypeScript
map(callbackfn: (value: number, index: number, array: Float32Array) => number, thisArg?: any): Float32Array
```

Calls a defined callback function on each element of an array, and returns an array that contains the results.

<!--Device-Float32Array-map(callbackfn: (value: number, index: number, array: Float32Array) => number, thisArg?: any): Float32Array--><!--Device-Float32Array-map(callbackfn: (value: number, index: number, array: Float32Array) => number, thisArg?: any): Float32Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (value: number, index: number, array: Float32Array) =&gt; number | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Float32Array |  |

<a id="reduce"></a>
## reduce

```TypeScript
reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number
```

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

<!--Device-Float32Array-reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number--><!--Device-Float32Array-reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) =&gt; number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="reduce-1"></a>
## reduce

```TypeScript
reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number
```

<!--Device-Float32Array-reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number--><!--Device-Float32Array-reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) =&gt; number | Yes |  |
| initialValue | number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="reduce-2"></a>
## reduce

```TypeScript
reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U
```

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

<!--Device-Float32Array-reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U--><!--Device-Float32Array-reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) =&gt; U | Yes |  |
| initialValue | U | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| U |  |

<a id="reduceright"></a>
## reduceRight

```TypeScript
reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number
```

Calls the specified callback function for all the elements in an array, in descending order.The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

<!--Device-Float32Array-reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number--><!--Device-Float32Array-reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) =&gt; number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="reduceright-1"></a>
## reduceRight

```TypeScript
reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number
```

<!--Device-Float32Array-reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number--><!--Device-Float32Array-reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) =&gt; number | Yes |  |
| initialValue | number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="reduceright-2"></a>
## reduceRight

```TypeScript
reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U
```

Calls the specified callback function for all the elements in an array, in descending order.The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

<!--Device-Float32Array-reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U--><!--Device-Float32Array-reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) =&gt; U | Yes |  |
| initialValue | U | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| U |  |

<a id="reverse"></a>
## reverse

```TypeScript
reverse(): Float32Array
```

Reverses the elements in an Array.

<!--Device-Float32Array-reverse(): Float32Array--><!--Device-Float32Array-reverse(): Float32Array-End-->

**Return value:**

| Type | Description |
| --- | --- |
| Float32Array |  |

<a id="set"></a>
## set

```TypeScript
set(array: ArrayLike<number>, offset?: number): void
```

Sets a value or an array of values.

<!--Device-Float32Array-set(array: ArrayLike<number>, offset?: number): void--><!--Device-Float32Array-set(array: ArrayLike<number>, offset?: number): void-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| array | [ArrayLike](arkts-na-lib-es5-arraylike-i.md)&lt;number&gt; | Yes |  |
| offset | number | No |  |

<a id="slice"></a>
## slice

```TypeScript
slice(start?: number, end?: number): Float32Array
```

Returns a section of an array.

<!--Device-Float32Array-slice(start?: number, end?: number): Float32Array--><!--Device-Float32Array-slice(start?: number, end?: number): Float32Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | No |  |
| end | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Float32Array |  |

<a id="some"></a>
## some

```TypeScript
some(predicate: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean
```

Determines whether the specified callback function returns true for any element of an array.

<!--Device-Float32Array-some(predicate: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean--><!--Device-Float32Array-some(predicate: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: number, index: number, array: Float32Array) =&gt; unknown | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean |  |

<a id="sort"></a>
## sort

```TypeScript
sort(compareFn?: (a: number, b: number) => number): this
```

Sorts an array.

<!--Device-Float32Array-sort(compareFn?: (a: number, b: number) => number): this--><!--Device-Float32Array-sort(compareFn?: (a: number, b: number) => number): this-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| compareFn | (a: number, b: number) =&gt; number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| this |  |

<a id="subarray"></a>
## subarray

```TypeScript
subarray(begin?: number, end?: number): Float32Array
```

Gets a new Float32Array view of the ArrayBuffer store for this array, referencing the elements at begin, inclusive, up to end, exclusive.

<!--Device-Float32Array-subarray(begin?: number, end?: number): Float32Array--><!--Device-Float32Array-subarray(begin?: number, end?: number): Float32Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| begin | number | No |  |
| end | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Float32Array |  |

<a id="tolocalestring"></a>
## toLocaleString

```TypeScript
toLocaleString(): string
```

Converts a number to a string by using the current locale.

<!--Device-Float32Array-toLocaleString(): string--><!--Device-Float32Array-toLocaleString(): string-End-->

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

<a id="tostring"></a>
## toString

```TypeScript
toString(): string
```

Returns a string representation of an array.

<!--Device-Float32Array-toString(): string--><!--Device-Float32Array-toString(): string-End-->

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

<a id="valueof"></a>
## valueOf

```TypeScript
valueOf(): Float32Array
```

Returns the primitive value of the specified object.

<!--Device-Float32Array-valueOf(): Float32Array--><!--Device-Float32Array-valueOf(): Float32Array-End-->

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

<!--Device-Float32Array-readonly BYTES_PER_ELEMENT: number--><!--Device-Float32Array-readonly BYTES_PER_ELEMENT: number-End-->

## buffer

```TypeScript
readonly buffer: ArrayBufferLike
```

The ArrayBuffer instance referenced by the array.

**Type:** ArrayBufferLike

<!--Device-Float32Array-readonly buffer: ArrayBufferLike--><!--Device-Float32Array-readonly buffer: ArrayBufferLike-End-->

## byteLength

```TypeScript
readonly byteLength: number
```

The length in bytes of the array.

**Type:** number

<!--Device-Float32Array-readonly byteLength: number--><!--Device-Float32Array-readonly byteLength: number-End-->

## byteOffset

```TypeScript
readonly byteOffset: number
```

The offset in bytes of the array.

**Type:** number

<!--Device-Float32Array-readonly byteOffset: number--><!--Device-Float32Array-readonly byteOffset: number-End-->

## index

```TypeScript
[index: number]: number
```

**Type:** number

<!--Device-Float32Array-[index: number]: number--><!--Device-Float32Array-[index: number]: number-End-->

## length

```TypeScript
readonly length: number
```

The length of the array.

**Type:** number

<!--Device-Float32Array-readonly length: number--><!--Device-Float32Array-readonly length: number-End-->

