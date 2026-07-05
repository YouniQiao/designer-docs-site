# Iterator

## next

```TypeScript
next(...args: [] | [TNext]): IteratorResult<T, TReturn>
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| args | [] \| [TNext] | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| IteratorResult&lt;T, TReturn> |  |

## return

```TypeScript
return?(value?: TReturn): IteratorResult<T, TReturn>
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | TReturn | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| IteratorResult&lt;T, TReturn> |  |

## throw

```TypeScript
throw?(e?: any): IteratorResult<T, TReturn>
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| e | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| IteratorResult&lt;T, TReturn> |  |

