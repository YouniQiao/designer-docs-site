# Array

## concat

```TypeScript
concat(...items: ConcatArray<T>[]): T[]
```

Combines two or more arrays. This method returns a new array without modifying any existing arrays.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| items | ConcatArray&lt;T>[] | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T[] |  |

## concat

```TypeScript
concat(...items: (T | ConcatArray<T>)[]): T[]
```

Combines two or more arrays. This method returns a new array without modifying any existing arrays.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| items | (T \| ConcatArray&lt;T>)[] | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T[] |  |

## every

```TypeScript
every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[]
```

Determines whether all the members of an array satisfy the specified test.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: T[]) => value is S | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| this is S[] |  |

## every

```TypeScript
every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean
```

Determines whether all the members of an array satisfy the specified test.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: T[]) => unknown | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean |  |

## filter

```TypeScript
filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[]
```

Returns the elements of an array that meet the condition specified in a callback function.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: T[]) => value is S | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| S[] |  |

## filter

```TypeScript
filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[]
```

Returns the elements of an array that meet the condition specified in a callback function.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: T[]) => unknown | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T[] |  |

## forEach

```TypeScript
forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void
```

Performs the specified action for each element in an array.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (value: T, index: number, array: T[]) => void | 是 |  |
| thisArg | any | 否 |  |

## indexOf

```TypeScript
indexOf(searchElement: T, fromIndex?: number): number
```

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| searchElement | T | 是 |  |
| fromIndex | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## join

```TypeScript
join(separator?: string): string
```

Adds all the elements of an array into a string, separated by the specified separator string.

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
lastIndexOf(searchElement: T, fromIndex?: number): number
```

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| searchElement | T | 是 |  |
| fromIndex | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## map

```TypeScript
map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[]
```

Calls a defined callback function on each element of an array, and returns an array that contains the results.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (value: T, index: number, array: T[]) => U | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| U[] |  |

## pop

```TypeScript
pop(): T | undefined
```

Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## push

```TypeScript
push(...items: T[]): number
```

Appends new elements to the end of an array, and returns the new length of the array.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| items | T[] | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## reduce

```TypeScript
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T
```

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## reduce

```TypeScript
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T | 是 |  |
| initialValue | T | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## reduce

```TypeScript
reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U
```

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U | 是 |  |
| initialValue | U | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| U |  |

## reduceRight

```TypeScript
reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T
```

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## reduceRight

```TypeScript
reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T | 是 |  |
| initialValue | T | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## reduceRight

```TypeScript
reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U
```

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U | 是 |  |
| initialValue | U | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| U |  |

## reverse

```TypeScript
reverse(): T[]
```

Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T[] |  |

## shift

```TypeScript
shift(): T | undefined
```

Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## slice

```TypeScript
slice(start?: number, end?: number): T[]
```

Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| start | number | 否 |  |
| end | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T[] |  |

## some

```TypeScript
some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean
```

Determines whether the specified callback function returns true for any element of an array.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: T[]) => unknown | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean |  |

## sort

```TypeScript
sort(compareFn?: (a: T, b: T) => number): this
```

Sorts an array in place. This method mutates the array and returns a reference to the same array.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| compareFn | (a: T, b: T) => number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| this |  |

## splice

```TypeScript
splice(start: number, deleteCount?: number): T[]
```

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| start | number | 是 |  |
| deleteCount | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T[] |  |

## splice

```TypeScript
splice(start: number, deleteCount: number, ...items: T[]): T[]
```

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| start | number | 是 |  |
| deleteCount | number | 是 |  |
| items | T[] | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T[] |  |

## toLocaleString

```TypeScript
toLocaleString(): string
```

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

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

## unshift

```TypeScript
unshift(...items: T[]): number
```

Inserts new elements at the start of an array, and returns the new length of the array.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| items | T[] | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number |  |

## length

```TypeScript
length: number
```

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

**类型：** number

## n

```TypeScript
[n: number]: T
```

**类型：** T

