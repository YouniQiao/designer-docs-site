# Iterator

## next

```TypeScript
next(...args: [] | [TNext]): IteratorResult<T, TReturn>
```

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| args | [] \| [TNext] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| IteratorResult&lt;T, TReturn&gt; |  |

## return

```TypeScript
return?(value?: TReturn): IteratorResult<T, TReturn>
```

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | TReturn | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| IteratorResult&lt;T, TReturn&gt; |  |

## throw

```TypeScript
throw?(e?: any): IteratorResult<T, TReturn>
```

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| e | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| IteratorResult&lt;T, TReturn&gt; |  |

