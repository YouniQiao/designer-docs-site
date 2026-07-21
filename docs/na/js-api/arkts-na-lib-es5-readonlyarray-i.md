# ReadonlyArray

<!--Device-unnamed-interface ReadonlyArray<T>--><!--Device-unnamed-interface ReadonlyArray<T>-End-->

<a id="concat"></a>
## concat

```TypeScript
concat(...items: ConcatArray<T>[]): T[]
```

Combines two or more arrays.

<!--Device-ReadonlyArray-concat(...items: ConcatArray<T>[]): T[]--><!--Device-ReadonlyArray-concat(...items: ConcatArray<T>[]): T[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | [ConcatArray](arkts-na-lib-es5-concatarray-i.md)&lt;T&gt;[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T[] |  |

<a id="concat-1"></a>
## concat

```TypeScript
concat(...items: (T | ConcatArray<T>)[]): T[]
```

Combines two or more arrays.

<!--Device-ReadonlyArray-concat(...items: (T | ConcatArray<T>)[]): T[]--><!--Device-ReadonlyArray-concat(...items: (T | ConcatArray<T>)[]): T[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | (T \| ConcatArray&lt;T&gt;)[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T[] |  |

<a id="every"></a>
## every

```TypeScript
every<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): this is readonly S[]
```

Determines whether all the members of an array satisfy the specified test.

<!--Device-ReadonlyArray-every<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): this is readonly S[]--><!--Device-ReadonlyArray-every<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): this is readonly S[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: readonly T[]) =&gt; value is S | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| this is readonly S[] |  |

<a id="every-1"></a>
## every

```TypeScript
every(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean
```

Determines whether all the members of an array satisfy the specified test.

<!--Device-ReadonlyArray-every(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean--><!--Device-ReadonlyArray-every(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: readonly T[]) =&gt; unknown | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean |  |

<a id="filter"></a>
## filter

```TypeScript
filter<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[]
```

Returns the elements of an array that meet the condition specified in a callback function.

<!--Device-ReadonlyArray-filter<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[]--><!--Device-ReadonlyArray-filter<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: readonly T[]) =&gt; value is S | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| S[] |  |

<a id="filter-1"></a>
## filter

```TypeScript
filter(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[]
```

Returns the elements of an array that meet the condition specified in a callback function.

<!--Device-ReadonlyArray-filter(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[]--><!--Device-ReadonlyArray-filter(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: readonly T[]) =&gt; unknown | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| T[] |  |

<a id="foreach"></a>
## forEach

```TypeScript
forEach(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void
```

Performs the specified action for each element in an array.

<!--Device-ReadonlyArray-forEach(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void--><!--Device-ReadonlyArray-forEach(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (value: T, index: number, array: readonly T[]) =&gt; void | Yes |  |
| thisArg | any | No |  |

<a id="indexof"></a>
## indexOf

```TypeScript
indexOf(searchElement: T, fromIndex?: number): number
```

Returns the index of the first occurrence of a value in an array.

<!--Device-ReadonlyArray-indexOf(searchElement: T, fromIndex?: number): number--><!--Device-ReadonlyArray-indexOf(searchElement: T, fromIndex?: number): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| searchElement | T | Yes |  |
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

<!--Device-ReadonlyArray-join(separator?: string): string--><!--Device-ReadonlyArray-join(separator?: string): string-End-->

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
lastIndexOf(searchElement: T, fromIndex?: number): number
```

Returns the index of the last occurrence of a specified value in an array.

<!--Device-ReadonlyArray-lastIndexOf(searchElement: T, fromIndex?: number): number--><!--Device-ReadonlyArray-lastIndexOf(searchElement: T, fromIndex?: number): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| searchElement | T | Yes |  |
| fromIndex | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

<a id="map"></a>
## map

```TypeScript
map<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any): U[]
```

Calls a defined callback function on each element of an array, and returns an array that contains the results.

<!--Device-ReadonlyArray-map<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any): U[]--><!--Device-ReadonlyArray-map<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any): U[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (value: T, index: number, array: readonly T[]) =&gt; U | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| U[] |  |

<a id="reduce"></a>
## reduce

```TypeScript
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T
```

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

<!--Device-ReadonlyArray-reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T--><!--Device-ReadonlyArray-reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) =&gt; T | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

<a id="reduce-1"></a>
## reduce

```TypeScript
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T
```

<!--Device-ReadonlyArray-reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T--><!--Device-ReadonlyArray-reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) =&gt; T | Yes |  |
| initialValue | T | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

<a id="reduce-2"></a>
## reduce

```TypeScript
reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U
```

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

<!--Device-ReadonlyArray-reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U--><!--Device-ReadonlyArray-reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) =&gt; U | Yes |  |
| initialValue | U | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| U |  |

<a id="reduceright"></a>
## reduceRight

```TypeScript
reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T
```

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

<!--Device-ReadonlyArray-reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T--><!--Device-ReadonlyArray-reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) =&gt; T | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

<a id="reduceright-1"></a>
## reduceRight

```TypeScript
reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T
```

<!--Device-ReadonlyArray-reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T--><!--Device-ReadonlyArray-reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) =&gt; T | Yes |  |
| initialValue | T | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

<a id="reduceright-2"></a>
## reduceRight

```TypeScript
reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U
```

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

<!--Device-ReadonlyArray-reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U--><!--Device-ReadonlyArray-reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackfn | (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) =&gt; U | Yes |  |
| initialValue | U | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| U |  |

<a id="slice"></a>
## slice

```TypeScript
slice(start?: number, end?: number): T[]
```

Returns a section of an array.

<!--Device-ReadonlyArray-slice(start?: number, end?: number): T[]--><!--Device-ReadonlyArray-slice(start?: number, end?: number): T[]-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | No |  |
| end | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| T[] |  |

<a id="some"></a>
## some

```TypeScript
some(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean
```

Determines whether the specified callback function returns true for any element of an array.

<!--Device-ReadonlyArray-some(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean--><!--Device-ReadonlyArray-some(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, array: readonly T[]) =&gt; unknown | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean |  |

<a id="tolocalestring"></a>
## toLocaleString

```TypeScript
toLocaleString(): string
```

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

<!--Device-ReadonlyArray-toLocaleString(): string--><!--Device-ReadonlyArray-toLocaleString(): string-End-->

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

<!--Device-ReadonlyArray-toString(): string--><!--Device-ReadonlyArray-toString(): string-End-->

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

## length

```TypeScript
readonly length: number
```

Gets the length of the array. This is a number one higher than the highest element defined in an array.

**Type:** number

<!--Device-ReadonlyArray-readonly length: number--><!--Device-ReadonlyArray-readonly length: number-End-->

## n

```TypeScript
readonly [n: number]: T
```

**Type:** T

<!--Device-ReadonlyArray-readonly [n: number]: T--><!--Device-ReadonlyArray-readonly [n: number]: T-End-->

