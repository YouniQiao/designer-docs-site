# NewableFunction

**继承实现关系：** NewableFunction继承自：Function。

## apply

```TypeScript
apply<T>(this: new () => T, thisArg: T): void
```

Calls the function with the specified object as the this value and the elements of specified array as the arguments.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | new () => T | 是 |  |
| thisArg | T | 是 |  |

## apply

```TypeScript
apply<T, A extends any[]>(this: new (...args: A) => T, thisArg: T, args: A): void
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | new (...args: A) => T | 是 |  |
| thisArg | T | 是 |  |
| args | A | 是 |  |

## bind

```TypeScript
bind<T>(this: T, thisArg: any): T
```

For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | T | 是 |  |
| thisArg | any | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## bind

```TypeScript
bind<A0, A extends any[], R>(this: new (arg0: A0, ...args: A) => R, thisArg: any, arg0: A0): new (...args: A) => R
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | new (arg0: A0, ...args: A) => R | 是 |  |
| thisArg | any | 是 |  |
| arg0 | A0 | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| new (...args: A) => R |  |

## bind

```TypeScript
bind<A0, A1, A extends any[], R>(this: new (arg0: A0, arg1: A1, ...args: A) => R, thisArg: any, arg0: A0, arg1: A1): new (...args: A) => R
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | new (arg0: A0, arg1: A1, ...args: A) => R | 是 |  |
| thisArg | any | 是 |  |
| arg0 | A0 | 是 |  |
| arg1 | A1 | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| new (...args: A) => R |  |

## bind

```TypeScript
bind<A0, A1, A2, A extends any[], R>(this: new (arg0: A0, arg1: A1, arg2: A2, ...args: A) => R, thisArg: any, arg0: A0, arg1: A1, arg2: A2): new (...args: A) => R
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | new (arg0: A0, arg1: A1, arg2: A2, ...args: A) => R | 是 |  |
| thisArg | any | 是 |  |
| arg0 | A0 | 是 |  |
| arg1 | A1 | 是 |  |
| arg2 | A2 | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| new (...args: A) => R |  |

## bind

```TypeScript
bind<A0, A1, A2, A3, A extends any[], R>(this: new (arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R, thisArg: any, arg0: A0, arg1: A1, arg2: A2, arg3: A3): new (...args: A) => R
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | new (arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R | 是 |  |
| thisArg | any | 是 |  |
| arg0 | A0 | 是 |  |
| arg1 | A1 | 是 |  |
| arg2 | A2 | 是 |  |
| arg3 | A3 | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| new (...args: A) => R |  |

## bind

```TypeScript
bind<AX, R>(this: new (...args: AX[]) => R, thisArg: any, ...args: AX[]): new (...args: AX[]) => R
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | new (...args: AX[]) => R | 是 |  |
| thisArg | any | 是 |  |
| args | AX[] | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| new (...args: AX[]) => R |  |

## call

```TypeScript
call<T, A extends any[]>(this: new (...args: A) => T, thisArg: T, ...args: A): void
```

Calls the function with the specified object as the this value and the specified rest arguments as the arguments.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | new (...args: A) => T | 是 |  |
| thisArg | T | 是 |  |
| args | A | 是 |  |

