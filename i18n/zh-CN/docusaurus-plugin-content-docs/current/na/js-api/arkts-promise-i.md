# Promise

Represents the completion of an asynchronous operation

## catch

```TypeScript
catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>
```

Attaches a callback for only the rejection of the Promise.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| onrejected | ((reason: any) => TResult \| PromiseLike&lt;TResult>) \| undefined \| null | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;T \| TResult> |  |

## then

```TypeScript
then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>
```

Attaches callbacks for the resolution and/or rejection of the Promise.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| onfulfilled | ((value: T) => TResult1 \| PromiseLike&lt;TResult1>) \| undefined \| null | 否 |  |
| onrejected | ((reason: any) => TResult2 \| PromiseLike&lt;TResult2>) \| undefined \| null | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;TResult1 \| TResult2> |  |

