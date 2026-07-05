# CallableFunction

**继承实现关系：** CallableFunction继承自：Function。

## apply

```TypeScript
apply<T, R>(this: (this: T) => R, thisArg: T): R
```

Calls the function with the specified object as the this value and the elements of specified array as the arguments.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | (this: T) => R | 是 |  |
| thisArg | T | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| R |  |

## apply

```TypeScript
apply<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, args: A): R
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | (this: T, ...args: A) => R | 是 |  |
| thisArg | T | 是 |  |
| args | A | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| R |  |

## bind

```TypeScript
bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>
```

For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | T | 是 |  |
| thisArg | ThisParameterType&lt;T> | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| OmitThisParameter&lt;T> |  |

## bind

```TypeScript
bind<T, A0, A extends any[], R>(this: (this: T, arg0: A0, ...args: A) => R, thisArg: T, arg0: A0): (...args: A) => R
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | (this: T, arg0: A0, ...args: A) => R | 是 |  |
| thisArg | T | 是 |  |
| arg0 | A0 | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| (...args: A) => R |  |

## bind

```TypeScript
bind<T, A0, A1, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1): (...args: A) => R
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | (this: T, arg0: A0, arg1: A1, ...args: A) => R | 是 |  |
| thisArg | T | 是 |  |
| arg0 | A0 | 是 |  |
| arg1 | A1 | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| (...args: A) => R |  |

## bind

```TypeScript
bind<T, A0, A1, A2, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2): (...args: A) => R
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R | 是 |  |
| thisArg | T | 是 |  |
| arg0 | A0 | 是 |  |
| arg1 | A1 | 是 |  |
| arg2 | A2 | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| (...args: A) => R |  |

## bind

```TypeScript
bind<T, A0, A1, A2, A3, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3): (...args: A) => R
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R | 是 |  |
| thisArg | T | 是 |  |
| arg0 | A0 | 是 |  |
| arg1 | A1 | 是 |  |
| arg2 | A2 | 是 |  |
| arg3 | A3 | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| (...args: A) => R |  |

## bind

```TypeScript
bind<T, AX, R>(this: (this: T, ...args: AX[]) => R, thisArg: T, ...args: AX[]): (...args: AX[]) => R
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | (this: T, ...args: AX[]) => R | 是 |  |
| thisArg | T | 是 |  |
| args | AX[] | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| (...args: AX[]) => R |  |

## call

```TypeScript
call<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A): R
```

Calls the function with the specified object as the this value and the specified rest arguments as the arguments.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | (this: T, ...args: A) => R | 是 |  |
| thisArg | T | 是 |  |
| args | A | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| R |  |

