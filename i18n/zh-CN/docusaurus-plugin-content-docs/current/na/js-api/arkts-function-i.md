# Function

Creates a new function.

## apply

```TypeScript
apply(this: Function, thisArg: any, argArray?: any): any
```

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | Function | 是 |  |
| thisArg | any | 是 |  |
| argArray | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any |  |

## bind

```TypeScript
bind(this: Function, thisArg: any, ...argArray: any[]): any
```

For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | Function | 是 |  |
| thisArg | any | 是 |  |
| argArray | any[] | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any |  |

## call

```TypeScript
call(this: Function, thisArg: any, ...argArray: any[]): any
```

Calls a method of an object, substituting another object for the current object.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| this | Function | 是 |  |
| thisArg | any | 是 |  |
| argArray | any[] | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any |  |

## toString

```TypeScript
toString(): string
```

Returns a string representation of a function.

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string |  |

## caller

```TypeScript
caller: Function
```

**类型：** Function

## length

```TypeScript
readonly length: number
```

**类型：** number

## arguments

```TypeScript
arguments: any
```

**类型：** any

## prototype

```TypeScript
prototype: any
```

**类型：** any

