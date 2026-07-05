# PromiseLike

## then

```TypeScript
then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): PromiseLike<TResult1 | TResult2>
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
| PromiseLike&lt;TResult1 \| TResult2> |  |

