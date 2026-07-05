# Function

Creates a new function.

## apply

```TypeScript
apply(this: Function, thisArg: any, argArray?: any): any
```

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| this | Function | Yes |  |
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

For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| this | Function | Yes |  |
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

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| this | Function | Yes |  |
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

**Return value:**

| Type | Description |
| --- | --- |
| string |  |

## arguments

```TypeScript
arguments: any
```

**Type:** any

## caller

```TypeScript
caller: Function
```

**Type:** Function

## length

```TypeScript
readonly length: number
```

**Type:** number

## prototype

```TypeScript
prototype: any
```

**Type:** any

