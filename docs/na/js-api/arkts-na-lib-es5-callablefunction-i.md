# CallableFunction

**Inheritance/Implementation:** CallableFunction extends [Function](arkts-na-lib-es5-function-i.md)

<!--Device-unnamed-interface CallableFunction extends Function--><!--Device-unnamed-interface CallableFunction extends Function-End-->

## apply

```TypeScript
apply<T, R>(this: (this: T) => R, thisArg: T): R
```

Calls the function with the specified object as the this value and the elements of specified array as the arguments.

<!--Device-CallableFunction-apply<T, R>(this: (this: T) => R, thisArg: T): R--><!--Device-CallableFunction-apply<T, R>(this: (this: T) => R, thisArg: T): R-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| this | (this: T) => R | Yes |  |
| thisArg | T | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| R |  |

## apply

```TypeScript
apply<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, args: A): R
```

<!--Device-CallableFunction-apply<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, args: A): R--><!--Device-CallableFunction-apply<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, args: A): R-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| this | (this: T, ...args: A) => R | Yes |  |
| thisArg | T | Yes |  |
| args | A | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| R |  |

## bind

```TypeScript
bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>
```

For a given function, creates a bound function that has the same body as the original function.The this object of the bound function is associated with the specified object, and has the specified initial parameters.

<!--Device-CallableFunction-bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>--><!--Device-CallableFunction-bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| this | T | Yes |  |
| thisArg | [ThisParameterType](arkts-na-thisparametertype-t.md)<T> | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [OmitThisParameter](arkts-na-omitthisparameter-t.md)<T> |  |

## bind

```TypeScript
bind<T, A0, A extends any[], R>(this: (this: T, arg0: A0, ...args: A) => R, thisArg: T, arg0: A0): (...args: A) => R
```

<!--Device-CallableFunction-bind<T, A0, A extends any[], R>(this: (this: T, arg0: A0, ...args: A) => R, thisArg: T, arg0: A0): (...args: A) => R--><!--Device-CallableFunction-bind<T, A0, A extends any[], R>(this: (this: T, arg0: A0, ...args: A) => R, thisArg: T, arg0: A0): (...args: A) => R-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| this | (this: T, arg0: A0, ...args: A) => R | Yes |  |
| thisArg | T | Yes |  |
| arg0 | A0 | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| (...args: A) => R |  |

## bind

```TypeScript
bind<T, A0, A1, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1): (...args: A) => R
```

<!--Device-CallableFunction-bind<T, A0, A1, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1): (...args: A) => R--><!--Device-CallableFunction-bind<T, A0, A1, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1): (...args: A) => R-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| this | (this: T, arg0: A0, arg1: A1, ...args: A) => R | Yes |  |
| thisArg | T | Yes |  |
| arg0 | A0 | Yes |  |
| arg1 | A1 | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| (...args: A) => R |  |

## bind

```TypeScript
bind<T, A0, A1, A2, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2): (...args: A) => R
```

<!--Device-CallableFunction-bind<T, A0, A1, A2, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2): (...args: A) => R--><!--Device-CallableFunction-bind<T, A0, A1, A2, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2): (...args: A) => R-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| this | (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R | Yes |  |
| thisArg | T | Yes |  |
| arg0 | A0 | Yes |  |
| arg1 | A1 | Yes |  |
| arg2 | A2 | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| (...args: A) => R |  |

## bind

```TypeScript
bind<T, A0, A1, A2, A3, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3): (...args: A) => R
```

<!--Device-CallableFunction-bind<T, A0, A1, A2, A3, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3): (...args: A) => R--><!--Device-CallableFunction-bind<T, A0, A1, A2, A3, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3): (...args: A) => R-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| this | (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R | Yes |  |
| thisArg | T | Yes |  |
| arg0 | A0 | Yes |  |
| arg1 | A1 | Yes |  |
| arg2 | A2 | Yes |  |
| arg3 | A3 | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| (...args: A) => R |  |

## bind

```TypeScript
bind<T, AX, R>(this: (this: T, ...args: AX[]) => R, thisArg: T, ...args: AX[]): (...args: AX[]) => R
```

<!--Device-CallableFunction-bind<T, AX, R>(this: (this: T, ...args: AX[]) => R, thisArg: T, ...args: AX[]): (...args: AX[]) => R--><!--Device-CallableFunction-bind<T, AX, R>(this: (this: T, ...args: AX[]) => R, thisArg: T, ...args: AX[]): (...args: AX[]) => R-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| this | (this: T, ...args: AX[]) => R | Yes |  |
| thisArg | T | Yes |  |
| args | AX[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| (...args: AX[]) => R |  |

## call

```TypeScript
call<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A): R
```

Calls the function with the specified object as the this value and the specified rest arguments as the arguments.

<!--Device-CallableFunction-call<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A): R--><!--Device-CallableFunction-call<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A): R-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| this | (this: T, ...args: A) => R | Yes |  |
| thisArg | T | Yes |  |
| args | A | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| R |  |

