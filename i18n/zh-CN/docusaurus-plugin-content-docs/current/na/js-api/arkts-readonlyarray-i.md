# ReadonlyArray

## concat

```TypeScript
concat(...items: ConcatArray<T>[]): T[]
```

Combines two or more arrays.

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

Combines two or more arrays.

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
every<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): this is readonly S[]
```

Determines whether all the members of an array satisfy the specified test.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: readonly T[]) => value is S | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| this is readonly S[] |  |

## every

```TypeScript
every(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean
```

Determines whether all the members of an array satisfy the specified test.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: readonly T[]) => unknown | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean |  |

## filter

```TypeScript
filter<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[]
```

Returns the elements of an array that meet the condition specified in a callback function.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: readonly T[]) => value is S | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| S[] |  |

## filter

```TypeScript
filter(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[]
```

Returns the elements of an array that meet the condition specified in a callback function.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: readonly T[]) => unknown | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T[] |  |

## forEach

```TypeScript
forEach(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void
```

Performs the specified action for each element in an array.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (value: T, index: number, array: readonly T[]) => void | 是 |  |
| thisArg | any | 否 |  |

## indexOf

```TypeScript
indexOf(searchElement: T, fromIndex?: number): number
```

Returns the index of the first occurrence of a value in an array.

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
lastIndexOf(searchElement: T, fromIndex?: number): number
```

Returns the index of the last occurrence of a specified value in an array.

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
map<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any): U[]
```

Calls a defined callback function on each element of an array, and returns an array that contains the results.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (value: T, index: number, array: readonly T[]) => U | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| U[] |  |

## reduce

```TypeScript
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T
```

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## reduce

```TypeScript
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T | 是 |  |
| initialValue | T | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## reduce

```TypeScript
reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U
```

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U | 是 |  |
| initialValue | U | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| U |  |

## reduceRight

```TypeScript
reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T
```

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## reduceRight

```TypeScript
reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T | 是 |  |
| initialValue | T | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## reduceRight

```TypeScript
reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U
```

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackfn | (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U | 是 |  |
| initialValue | U | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| U |  |

## slice

```TypeScript
slice(start?: number, end?: number): T[]
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
| T[] |  |

## some

```TypeScript
some(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean
```

Determines whether the specified callback function returns true for any element of an array.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: readonly T[]) => unknown | 是 |  |
| thisArg | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean |  |

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

## length

```TypeScript
readonly length: number
```

Gets the length of the array. This is a number one higher than the highest element defined in an array.

**类型：** number

## n

```TypeScript
readonly [n: number]: T
```

**类型：** T

