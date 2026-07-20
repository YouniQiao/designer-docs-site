# construct

## construct

```TypeScript
function construct<A extends readonly any[], R>(
        target: new (...args: A) => R,
        argumentsList: Readonly<A>,
        newTarget?: new (...args: any) => any,
    ): R
```

Constructs the target with the elements of specified array as the arguments and the specified constructor as the `new.target` value.

<!--Device-Reflect-function construct<A extends readonly any[], R>(
        target: new (...args: A) => R,
        argumentsList: Readonly<A>,
        newTarget?: new (...args: any) => any,
    ): R--><!--Device-Reflect-function construct<A extends readonly any[], R>(
        target: new (...args: A) => R,
        argumentsList: Readonly<A>,
        newTarget?: new (...args: any) => any,
    ): R-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | new (...args: A) => R | Yes |  |
| argumentsList | [Readonly](arkts-na-readonly-t.md)<A> | Yes |  |
| newTarget | new (...args: any) => any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| R |  |


## construct

```TypeScript
function construct(target: Function, argumentsList: ArrayLike<any>, newTarget?: Function): any
```

<!--Device-Reflect-function construct(target: Function, argumentsList: ArrayLike<any>, newTarget?: Function): any--><!--Device-Reflect-function construct(target: Function, argumentsList: ArrayLike<any>, newTarget?: Function): any-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | [Function](arkts-na-lib-es2015-core-function-i.md) | Yes |  |
| argumentsList | [ArrayLike](arkts-na-lib-es5-arraylike-i.md)<any> | Yes |  |
| newTarget | [Function](arkts-na-lib-es2015-core-function-i.md) | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| any |  |

