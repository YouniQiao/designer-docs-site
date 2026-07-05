# PromiseConstructor

## all

```TypeScript
all<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>
```

Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| values | Iterable&lt;T \| PromiseLike&lt;T>> | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Awaited&lt;T>[]> |  |

## race

```TypeScript
race<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>>
```

Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| values | Iterable&lt;T \| PromiseLike&lt;T>> | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Awaited&lt;T>> |  |

