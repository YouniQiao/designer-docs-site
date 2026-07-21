# ReadonlyArray

<!--Device-unnamed-interface ReadonlyArray<T>--><!--Device-unnamed-interface ReadonlyArray<T>-End-->

<a id="find"></a>
## find

```TypeScript
find<S extends T>(predicate: (this: void, value: T, index: number, obj: readonly T[]) => value is S, thisArg?: any): S | undefined
```

Returns the value of the first element in the array where predicate is true, and undefined otherwise.

<!--Device-ReadonlyArray-find<S extends T>(predicate: (this: void, value: T, index: number, obj: readonly T[]) => value is S, thisArg?: any): S | undefined--><!--Device-ReadonlyArray-find<S extends T>(predicate: (this: void, value: T, index: number, obj: readonly T[]) => value is S, thisArg?: any): S | undefined-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (this: void, value: T, index: number, obj: readonly T[]) =&gt; value is S | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| S |  |

<a id="find-1"></a>
## find

```TypeScript
find(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): T | undefined
```

<!--Device-ReadonlyArray-find(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): T | undefined--><!--Device-ReadonlyArray-find(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): T | undefined-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, obj: readonly T[]) =&gt; unknown | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

<a id="findindex"></a>
## findIndex

```TypeScript
findIndex(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): number
```

Returns the index of the first element in the array where predicate is true, and -1otherwise.

<!--Device-ReadonlyArray-findIndex(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): number--><!--Device-ReadonlyArray-findIndex(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): number-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| predicate | (value: T, index: number, obj: readonly T[]) =&gt; unknown | Yes |  |
| thisArg | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number |  |

