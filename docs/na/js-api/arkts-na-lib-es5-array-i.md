# Array

<!--Device-unnamed-interface Array<T>--><!--Device-unnamed-interface Array<T>-End-->

## concat

```TypeScript
concat(...items: ConcatArray<T>[]): T[]
```

Combines two or more arrays.This method returns a new array without modifying any existing arrays.

<!--Device-Array-concat(...items: ConcatArray<T>[]): T[]--><!--Device-Array-concat(...items: ConcatArray<T>[]): T[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | [ConcatArray](arkts-na-lib-es5-concatarray-i.md)<T>[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T[] |  |

## concat

```TypeScript
concat(...items: (T | ConcatArray<T>)[]): T[]
```

Combines two or more arrays.This method returns a new array without modifying any existing arrays.

<!--Device-Array-concat(...items: (T | ConcatArray<T>)[]): T[]--><!--Device-Array-concat(...items: (T | ConcatArray<T>)[]): T[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | (T \| ConcatArray<T>)[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T[] |  |

## every

```TypeScript
every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[]
```

Determines whether all the members of an array satisfy the specified test.

<!--Device-Array-every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[]--><!--Device-Array-every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: T[]) => value is S | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| this is S[] |  |

## every

```TypeScript
every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean
```

Determines whether all the members of an array satisfy the specified test.

<!--Device-Array-every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean--><!--Device-Array-every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: T[]) => unknown | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean |  |

## filter

```TypeScript
filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[]
```

Returns the elements of an array that meet the condition specified in a callback function.

<!--Device-Array-filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[]--><!--Device-Array-filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: T[]) => value is S | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| S[] |  |

## filter

```TypeScript
filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[]
```

Returns the elements of an array that meet the condition specified in a callback function.

<!--Device-Array-filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[]--><!--Device-Array-filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: T[]) => unknown | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| T[] |  |

## forEach

```TypeScript
forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void
```

Performs the specified action for each element in an array.

<!--Device-Array-forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void--><!--Device-Array-forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (value: T, index: number, array: T[]) => void | Yes |  |
| thisArg | any | No |  |

## indexOf

```TypeScript
indexOf(searchElement: T, fromIndex?: number): number
```

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

<!--Device-Array-indexOf(searchElement: T, fromIndex?: number): number--><!--Device-Array-indexOf(searchElement: T, fromIndex?: number): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| searchElement | T | Yes |  |
| fromIndex | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

## join

```TypeScript
join(separator?: string): string
```

Adds all the elements of an array into a string, separated by the specified separator string.

<!--Device-Array-join(separator?: string): string--><!--Device-Array-join(separator?: string): string-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| separator | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

## lastIndexOf

```TypeScript
lastIndexOf(searchElement: T, fromIndex?: number): number
```

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

<!--Device-Array-lastIndexOf(searchElement: T, fromIndex?: number): number--><!--Device-Array-lastIndexOf(searchElement: T, fromIndex?: number): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| searchElement | T | Yes |  |
| fromIndex | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

## map

```TypeScript
map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[]
```

Calls a defined callback function on each element of an array, and returns an array that contains the results.

<!--Device-Array-map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[]--><!--Device-Array-map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (value: T, index: number, array: T[]) => U | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| U[] |  |

## pop

```TypeScript
pop(): T | undefined
```

Removes the last element from an array and returns it.If the array is empty, undefined is returned and the array is not modified.

<!--Device-Array-pop(): T | undefined--><!--Device-Array-pop(): T | undefined-End-->

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## push

```TypeScript
push(...items: T[]): number
```

Appends new elements to the end of an array, and returns the new length of the array.

<!--Device-Array-push(...items: T[]): number--><!--Device-Array-push(...items: T[]): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | T[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

## reduce

```TypeScript
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T
```

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

<!--Device-Array-reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T--><!--Device-Array-reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## reduce

```TypeScript
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T
```

<!--Device-Array-reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T--><!--Device-Array-reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T | Yes |  |
| initialValue | T | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## reduce

```TypeScript
reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U
```

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

<!--Device-Array-reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U--><!--Device-Array-reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U | Yes |  |
| initialValue | U | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| U |  |

## reduceRight

```TypeScript
reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T
```

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

<!--Device-Array-reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T--><!--Device-Array-reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## reduceRight

```TypeScript
reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T
```

<!--Device-Array-reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T--><!--Device-Array-reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T | Yes |  |
| initialValue | T | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## reduceRight

```TypeScript
reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U
```

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

<!--Device-Array-reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U--><!--Device-Array-reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U | Yes |  |
| initialValue | U | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| U |  |

## reverse

```TypeScript
reverse(): T[]
```

Reverses the elements in an array in place.This method mutates the array and returns a reference to the same array.

<!--Device-Array-reverse(): T[]--><!--Device-Array-reverse(): T[]-End-->

**Return value:**

| Type | Description |
| --- | --- |
| T[] |  |

## shift

```TypeScript
shift(): T | undefined
```

Removes the first element from an array and returns it.If the array is empty, undefined is returned and the array is not modified.

<!--Device-Array-shift(): T | undefined--><!--Device-Array-shift(): T | undefined-End-->

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## slice

```TypeScript
slice(start?: number, end?: number): T[]
```

Returns a copy of a section of an array.For both start and end, a negative index can be used to indicate an offset from the end of the array.For example, -2 refers to the second to last element of the array.

<!--Device-Array-slice(start?: number, end?: number): T[]--><!--Device-Array-slice(start?: number, end?: number): T[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | No |  |
| end | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| T[] |  |

## some

```TypeScript
some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean
```

Determines whether the specified callback function returns true for any element of an array.

<!--Device-Array-some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean--><!--Device-Array-some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: T[]) => unknown | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean |  |

## sort

```TypeScript
sort(compareFn?: (a: T, b: T) => number): this
```

Sorts an array in place.This method mutates the array and returns a reference to the same array.

<!--Device-Array-sort(compareFn?: (a: T, b: T) => number): this--><!--Device-Array-sort(compareFn?: (a: T, b: T) => number): this-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| compareFn | (a: T, b: T) => number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| this |  |

## splice

```TypeScript
splice(start: number, deleteCount?: number): T[]
```

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

<!--Device-Array-splice(start: number, deleteCount?: number): T[]--><!--Device-Array-splice(start: number, deleteCount?: number): T[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | Yes |  |
| deleteCount | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| T[] |  |

## splice

```TypeScript
splice(start: number, deleteCount: number, ...items: T[]): T[]
```

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

<!--Device-Array-splice(start: number, deleteCount: number, ...items: T[]): T[]--><!--Device-Array-splice(start: number, deleteCount: number, ...items: T[]): T[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | Yes |  |
| deleteCount | number | Yes |  |
| items | T[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T[] |  |

## toLocaleString

```TypeScript
toLocaleString(): string
```

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

<!--Device-Array-toLocaleString(): string--><!--Device-Array-toLocaleString(): string-End-->

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

## toString

```TypeScript
toString(): string
```

Returns a string representation of an array.

<!--Device-Array-toString(): string--><!--Device-Array-toString(): string-End-->

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

## unshift

```TypeScript
unshift(...items: T[]): number
```

Inserts new elements at the start of an array, and returns the new length of the array.

<!--Device-Array-unshift(...items: T[]): number--><!--Device-Array-unshift(...items: T[]): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | T[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

## length

```TypeScript
length: number
```

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

**Type:** number

<!--Device-Array-length: number--><!--Device-Array-length: number-End-->

## n

```TypeScript
[n: number]: T
```

**Type:** T

<!--Device-Array-[n: number]: T--><!--Device-Array-[n: number]: T-End-->

