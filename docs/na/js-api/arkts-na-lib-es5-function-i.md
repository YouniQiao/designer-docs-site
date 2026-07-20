# Function

Creates a new function.

<!--Device-unnamed-interface Function--><!--Device-unnamed-interface Function-End-->

## apply

```TypeScript
apply(this: Function, thisArg: any, argArray?: any): any
```

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

<!--Device-Function-apply(this: Function, thisArg: any, argArray?: any): any--><!--Device-Function-apply(this: Function, thisArg: any, argArray?: any): any-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| this | [Function](arkts-na-lib-es2015-core-function-i.md) | Yes |  |
| thisArg | any | Yes |  |
| argArray | any | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| any |  |

## bind

```TypeScript
bind(this: Function, thisArg: any, ...argArray: any[]): any
```

For a given function, creates a bound function that has the same body as the original function.The this object of the bound function is associated with the specified object, and has the specified initial parameters.

<!--Device-Function-bind(this: Function, thisArg: any, ...argArray: any[]): any--><!--Device-Function-bind(this: Function, thisArg: any, ...argArray: any[]): any-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| this | [Function](arkts-na-lib-es2015-core-function-i.md) | Yes |  |
| thisArg | any | Yes |  |
| argArray | any[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| any |  |

## call

```TypeScript
call(this: Function, thisArg: any, ...argArray: any[]): any
```

Calls a method of an object, substituting another object for the current object.

<!--Device-Function-call(this: Function, thisArg: any, ...argArray: any[]): any--><!--Device-Function-call(this: Function, thisArg: any, ...argArray: any[]): any-End-->

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| this | [Function](arkts-na-lib-es2015-core-function-i.md) | Yes |  |
| thisArg | any | Yes |  |
| argArray | any[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| any |  |

## toString

```TypeScript
toString(): string
```

Returns a string representation of a function.

<!--Device-Function-toString(): string--><!--Device-Function-toString(): string-End-->

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

## arguments

```TypeScript
arguments: any
```

**Type:** any

<!--Device-Function-arguments: any--><!--Device-Function-arguments: any-End-->

## caller

```TypeScript
caller: Function
```

**Type:** Function

<!--Device-Function-caller: Function--><!--Device-Function-caller: Function-End-->

## length

```TypeScript
readonly length: number
```

**Type:** number

<!--Device-Function-readonly length: number--><!--Device-Function-readonly length: number-End-->

## prototype

```TypeScript
prototype: any
```

**Type:** any

<!--Device-Function-prototype: any--><!--Device-Function-prototype: any-End-->

