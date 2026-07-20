# PromiseLike

<!--Device-unnamed-interface PromiseLike<T>--><!--Device-unnamed-interface PromiseLike<T>-End-->

## then

```TypeScript
then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): PromiseLike<TResult1 | TResult2>
```

Attaches callbacks for the resolution and/or rejection of the Promise.

<!--Device-PromiseLike-then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): PromiseLike<TResult1 | TResult2>--><!--Device-PromiseLike-then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): PromiseLike<TResult1 | TResult2>-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| onfulfilled | ((value: T) => TResult1 \| PromiseLike<TResult1>) \| undefined \| null | No |  |
| onrejected | ((reason: any) => TResult2 \| PromiseLike<TResult2>) \| undefined \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [PromiseLike](arkts-na-lib-es5-promiselike-i.md)<TResult1 \| TResult2> |  |

