# Uint8Array

A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised.

<!--Device-unnamed-interface Uint8Array--><!--Device-unnamed-interface Uint8Array-End-->

<a id="copywithin"></a>
## copyWithin

```TypeScript
copyWithin(target: number, start: number, end?: number): this
```

Returns the this object after copying a section of the array identified by start and end to the same array starting at position target

<!--Device-Uint8Array-copyWithin(target: number, start: number, end?: number): this--><!--Device-Uint8Array-copyWithin(target: number, start: number, end?: number): this-End-->

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
every(predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): boolean
```

Determines whether all the members of an array satisfy the specified test.

<!--Device-Uint8Array-every(predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): boolean--><!--Device-Uint8Array-every(predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): boolean-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: number, index: number, array: Uint8Array) =&gt; unknown | Yes |  |
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

<!--Device-Uint8Array-fill(value: number, start?: number, end?: number): this--><!--Device-Uint8Array-fill(value: number, start?: number, end?: number): this-End-->

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
filter(predicate: (value: number, index: number, array: Uint8Array) => any, thisArg?: any): Uint8Array
```

Returns the elements of an array that meet the condition specified in a callback function.

<!--Device-Uint8Array-filter(predicate: (value: number, index: number, array: Uint8Array) => any, thisArg?: any): Uint8Array--><!--Device-Uint8Array-filter(predicate: (value: number, index: number, array: Uint8Array) => any, thisArg?: any): Uint8Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: number, index: number, array: Uint8Array) =&gt; any | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array |  |

<a id="find"></a>
## find

```TypeScript
find(predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any): number | undefined
```

Returns the value of the first element in the array where predicate is true, and undefined otherwise.

<!--Device-Uint8Array-find(predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any): number | undefined--><!--Device-Uint8Array-find(predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any): number | undefined-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: number, index: number, obj: Uint8Array) =&gt; boolean | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="findindex"></a>
## findIndex

```TypeScript
findIndex(predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any): number
```

Returns the index of the first element in the array where predicate is true, and -1otherwise.

<!--Device-Uint8Array-findIndex(predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any): number--><!--Device-Uint8Array-findIndex(predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: number, index: number, obj: Uint8Array) =&gt; boolean | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="foreach"></a>
## forEach

```TypeScript
forEach(callbackfn: (value: number, index: number, array: Uint8Array) => void, thisArg?: any): void
```

Performs the specified action for each element in an array.

<!--Device-Uint8Array-forEach(callbackfn: (value: number, index: number, array: Uint8Array) => void, thisArg?: any): void--><!--Device-Uint8Array-forEach(callbackfn: (value: number, index: number, array: Uint8Array) => void, thisArg?: any): void-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (value: number, index: number, array: Uint8Array) =&gt; void | Yes |  |
| thisArg | any | No |  |

<a id="indexof"></a>
## indexOf

```TypeScript
indexOf(searchElement: number, fromIndex?: number): number
```

Returns the index of the first occurrence of a value in an array.

<!--Device-Uint8Array-indexOf(searchElement: number, fromIndex?: number): number--><!--Device-Uint8Array-indexOf(searchElement: number, fromIndex?: number): number-End-->

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

<!--Device-Uint8Array-join(separator?: string): string--><!--Device-Uint8Array-join(separator?: string): string-End-->

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

<!--Device-Uint8Array-lastIndexOf(searchElement: number, fromIndex?: number): number--><!--Device-Uint8Array-lastIndexOf(searchElement: number, fromIndex?: number): number-End-->

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
map(callbackfn: (value: number, index: number, array: Uint8Array) => number, thisArg?: any): Uint8Array
```

Calls a defined callback function on each element of an array, and returns an array that contains the results.

<!--Device-Uint8Array-map(callbackfn: (value: number, index: number, array: Uint8Array) => number, thisArg?: any): Uint8Array--><!--Device-Uint8Array-map(callbackfn: (value: number, index: number, array: Uint8Array) => number, thisArg?: any): Uint8Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (value: number, index: number, array: Uint8Array) =&gt; number | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array |  |

<a id="reduce"></a>
## reduce

```TypeScript
reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number
```

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

<!--Device-Uint8Array-reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number--><!--Device-Uint8Array-reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) =&gt; number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="reduce-1"></a>
## reduce

```TypeScript
reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number
```

<!--Device-Uint8Array-reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number--><!--Device-Uint8Array-reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) =&gt; number | Yes |  |
| initialValue | number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="reduce-2"></a>
## reduce

```TypeScript
reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U
```

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

<!--Device-Uint8Array-reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U--><!--Device-Uint8Array-reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) =&gt; U | Yes |  |
| initialValue | U | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| U |  |

<a id="reduceright"></a>
## reduceRight

```TypeScript
reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number
```

Calls the specified callback function for all the elements in an array, in descending order.The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

<!--Device-Uint8Array-reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number--><!--Device-Uint8Array-reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) =&gt; number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="reduceright-1"></a>
## reduceRight

```TypeScript
reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number
```

<!--Device-Uint8Array-reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number--><!--Device-Uint8Array-reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) =&gt; number | Yes |  |
| initialValue | number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="reduceright-2"></a>
## reduceRight

```TypeScript
reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U
```

Calls the specified callback function for all the elements in an array, in descending order.The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

<!--Device-Uint8Array-reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U--><!--Device-Uint8Array-reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) =&gt; U | Yes |  |
| initialValue | U | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| U |  |

<a id="reverse"></a>
## reverse

```TypeScript
reverse(): Uint8Array
```

Reverses the elements in an Array.

<!--Device-Uint8Array-reverse(): Uint8Array--><!--Device-Uint8Array-reverse(): Uint8Array-End-->

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array |  |

<a id="set"></a>
## set

```TypeScript
set(array: ArrayLike<number>, offset?: number): void
```

Sets a value or an array of values.

<!--Device-Uint8Array-set(array: ArrayLike<number>, offset?: number): void--><!--Device-Uint8Array-set(array: ArrayLike<number>, offset?: number): void-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| array | [ArrayLike](arkts-na-lib-es5-arraylike-i.md)&lt;number&gt; | Yes |  |
| offset | number | No |  |

<a id="slice"></a>
## slice

```TypeScript
slice(start?: number, end?: number): Uint8Array
```

Returns a section of an array.

<!--Device-Uint8Array-slice(start?: number, end?: number): Uint8Array--><!--Device-Uint8Array-slice(start?: number, end?: number): Uint8Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | No |  |
| end | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array |  |

<a id="some"></a>
## some

```TypeScript
some(predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): boolean
```

Determines whether the specified callback function returns true for any element of an array.

<!--Device-Uint8Array-some(predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): boolean--><!--Device-Uint8Array-some(predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): boolean-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: number, index: number, array: Uint8Array) =&gt; unknown | Yes |  |
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

<!--Device-Uint8Array-sort(compareFn?: (a: number, b: number) => number): this--><!--Device-Uint8Array-sort(compareFn?: (a: number, b: number) => number): this-End-->

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
subarray(begin?: number, end?: number): Uint8Array
```

Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements at begin, inclusive, up to end, exclusive.

<!--Device-Uint8Array-subarray(begin?: number, end?: number): Uint8Array--><!--Device-Uint8Array-subarray(begin?: number, end?: number): Uint8Array-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| begin | number | No |  |
| end | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array |  |

<a id="tolocalestring"></a>
## toLocaleString

```TypeScript
toLocaleString(): string
```

Converts a number to a string by using the current locale.

<!--Device-Uint8Array-toLocaleString(): string--><!--Device-Uint8Array-toLocaleString(): string-End-->

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

<!--Device-Uint8Array-toString(): string--><!--Device-Uint8Array-toString(): string-End-->

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

<a id="valueof"></a>
## valueOf

```TypeScript
valueOf(): Uint8Array
```

Returns the primitive value of the specified object.

<!--Device-Uint8Array-valueOf(): Uint8Array--><!--Device-Uint8Array-valueOf(): Uint8Array-End-->

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

<!--Device-Uint8Array-readonly BYTES_PER_ELEMENT: number--><!--Device-Uint8Array-readonly BYTES_PER_ELEMENT: number-End-->

## buffer

```TypeScript
readonly buffer: ArrayBufferLike
```

The ArrayBuffer instance referenced by the array.

**Type:** ArrayBufferLike

<!--Device-Uint8Array-readonly buffer: ArrayBufferLike--><!--Device-Uint8Array-readonly buffer: ArrayBufferLike-End-->

## byteLength

```TypeScript
readonly byteLength: number
```

The length in bytes of the array.

**Type:** number

<!--Device-Uint8Array-readonly byteLength: number--><!--Device-Uint8Array-readonly byteLength: number-End-->

## byteOffset

```TypeScript
readonly byteOffset: number
```

The offset in bytes of the array.

**Type:** number

<!--Device-Uint8Array-readonly byteOffset: number--><!--Device-Uint8Array-readonly byteOffset: number-End-->

## index

```TypeScript
[index: number]: number
```

**Type:** number

<!--Device-Uint8Array-[index: number]: number--><!--Device-Uint8Array-[index: number]: number-End-->

## length

```TypeScript
readonly length: number
```

The length of the array.

**Type:** number

<!--Device-Uint8Array-readonly length: number--><!--Device-Uint8Array-readonly length: number-End-->

