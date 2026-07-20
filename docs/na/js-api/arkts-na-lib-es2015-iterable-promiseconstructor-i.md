# PromiseConstructor

<!--Device-unnamed-interface PromiseConstructor--><!--Device-unnamed-interface PromiseConstructor-End-->

## all

```TypeScript
all<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>
```

Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.

<!--Device-PromiseConstructor-all<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>--><!--Device-PromiseConstructor-all<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| values | [Iterable](arkts-na-lib-es2015-iterable-iterable-i.md)<T \| PromiseLike<T>> | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](arkts-na-lib-es5-promise-i.md)<Awaited<T>[]> |  |

## race

```TypeScript
race<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>>
```

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.

<!--Device-PromiseConstructor-race<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>>--><!--Device-PromiseConstructor-race<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>>-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| values | [Iterable](arkts-na-lib-es2015-iterable-iterable-i.md)<T \| PromiseLike<T>> | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](arkts-na-lib-es5-promise-i.md)<Awaited<T>> |  |

