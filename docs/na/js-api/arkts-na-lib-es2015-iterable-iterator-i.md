# Iterator

<!--Device-unnamed-interface Iterator<T, TReturn = any, TNext = undefined>--><!--Device-unnamed-interface Iterator<T, TReturn = any, TNext = undefined>-End-->

## next

```TypeScript
next(...args: [] | [TNext]): IteratorResult<T, TReturn>
```

<!--Device-Iterator-next(...args: [] | [TNext]): IteratorResult<T, TReturn>--><!--Device-Iterator-next(...args: [] | [TNext]): IteratorResult<T, TReturn>-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| args | [] \| [TNext] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [IteratorResult](arkts-na-iteratorresult-t.md)<T, TReturn> |  |

## return

```TypeScript
return?(value?: TReturn): IteratorResult<T, TReturn>
```

<!--Device-Iterator-return?(value?: TReturn): IteratorResult<T, TReturn>--><!--Device-Iterator-return?(value?: TReturn): IteratorResult<T, TReturn>-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | TReturn | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [IteratorResult](arkts-na-iteratorresult-t.md)<T, TReturn> |  |

## throw

```TypeScript
throw?(e?: any): IteratorResult<T, TReturn>
```

<!--Device-Iterator-throw?(e?: any): IteratorResult<T, TReturn>--><!--Device-Iterator-throw?(e?: any): IteratorResult<T, TReturn>-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| e | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [IteratorResult](arkts-na-iteratorresult-t.md)<T, TReturn> |  |

