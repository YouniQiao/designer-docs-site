# Promise

Represents the completion of an asynchronous operation

<!--Device-unnamed-interface Promise<T>--><!--Device-unnamed-interface Promise<T>-End-->

## catch

```TypeScript
catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>
```

Attaches a callback for only the rejection of the Promise.

<!--Device-Promise-catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>--><!--Device-Promise-catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| onrejected | ((reason: any) => TResult \| PromiseLike<TResult>) \| undefined \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](arkts-na-lib-es5-promise-i.md)<T \| TResult> |  |

## then

```TypeScript
then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>
```

Attaches callbacks for the resolution and/or rejection of the Promise.

<!--Device-Promise-then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>--><!--Device-Promise-then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| onfulfilled | ((value: T) => TResult1 \| PromiseLike<TResult1>) \| undefined \| null | No |  |
| onrejected | ((reason: any) => TResult2 \| PromiseLike<TResult2>) \| undefined \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](arkts-na-lib-es5-promise-i.md)<TResult1 \| TResult2> |  |

