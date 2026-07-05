# apply

## apply

```TypeScript
function apply<T, A extends readonly any[], R>(
        target: (this: T, ...args: A) => R,
        thisArgument: T,
        argumentsList: Readonly<A>,
    ): R
```

Calls the function with the specified object as the this value and the elements of specified array as the arguments.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | (this: T, ...args: A) => R | 是 |  |
| thisArgument | T | 是 |  |
| argumentsList | Readonly&lt;A> | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| R |  |

## apply

```TypeScript
function apply(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | Function | 是 |  |
| thisArgument | any | 是 |  |
| argumentsList | ArrayLike&lt;any> | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any |  |

