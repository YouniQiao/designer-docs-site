# Array

<!--Device-unnamed-interface Array<T>--><!--Device-unnamed-interface Array<T>-End-->

## copyWithin

```TypeScript
copyWithin(target: number, start: number, end?: number): this
```

Returns the this object after copying a section of the array identified by start and end to the same array starting at position target

<!--Device-Array-copyWithin(target: number, start: number, end?: number): this--><!--Device-Array-copyWithin(target: number, start: number, end?: number): this-End-->

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

## fill

```TypeScript
fill(value: T, start?: number, end?: number): this
```

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

<!--Device-Array-fill(value: T, start?: number, end?: number): this--><!--Device-Array-fill(value: T, start?: number, end?: number): this-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes |  |
| start | number | No |  |
| end | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| this |  |

## find

```TypeScript
find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined
```

Returns the value of the first element in the array where predicate is true, and undefined otherwise.

<!--Device-Array-find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined--><!--Device-Array-find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (this: void, value: T, index: number, obj: T[]) => value is S | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| S |  |

## find

```TypeScript
find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined
```

<!--Device-Array-find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined--><!--Device-Array-find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, obj: T[]) => unknown | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## findIndex

```TypeScript
findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number
```

Returns the index of the first element in the array where predicate is true, and -1otherwise.

<!--Device-Array-findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number--><!--Device-Array-findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, obj: T[]) => unknown | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

