# ObjectConstructor

## constructor

```TypeScript
new(value?: any): Object
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Object |  |

## constructor

```TypeScript
(): any
```

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any |  |

## constructor

```TypeScript
(value: any): any
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | any | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any |  |

## create

```TypeScript
create(o: object | null): any
```

Creates an object that has the specified prototype or that has null prototype.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| o | object \| null | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any |  |

## create

```TypeScript
create(o: object | null, properties: PropertyDescriptorMap & ThisType<any>): any
```

Creates an object that has the specified prototype, and that optionally contains specified properties.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| o | object \| null | 是 |  |
| properties | PropertyDescriptorMap & ThisType&lt;any> | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any |  |

## defineProperties

```TypeScript
defineProperties<T>(o: T, properties: PropertyDescriptorMap & ThisType<any>): T
```

Adds one or more properties to an object, and/or modifies attributes of existing properties.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| o | T | 是 |  |
| properties | PropertyDescriptorMap & ThisType&lt;any> | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## defineProperty

```TypeScript
defineProperty<T>(o: T, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): T
```

Adds a property to an object, or modifies attributes of an existing property.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| o | T | 是 |  |
| p | PropertyKey | 是 |  |
| attributes | PropertyDescriptor & ThisType&lt;any> | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## freeze

```TypeScript
freeze<T extends Function>(f: T): T
```

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| f | T | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## freeze

```TypeScript
freeze<T extends {[idx: string]: U | null | undefined | object}, U extends string | bigint | number | boolean | symbol>(o: T): Readonly<T>
```

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| o | T | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Readonly&lt;T> |  |

## freeze

```TypeScript
freeze<T>(o: T): Readonly<T>
```

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| o | T | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Readonly&lt;T> |  |

## getOwnPropertyDescriptor

```TypeScript
getOwnPropertyDescriptor(o: any, p: PropertyKey): PropertyDescriptor | undefined
```

Gets the own property descriptor of the specified object. An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| o | any | 是 |  |
| p | PropertyKey | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PropertyDescriptor |  |

## getOwnPropertyNames

```TypeScript
getOwnPropertyNames(o: any): string[]
```

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| o | any | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string[] |  |

## getPrototypeOf

```TypeScript
getPrototypeOf(o: any): any
```

Returns the prototype of an object.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| o | any | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any |  |

## isExtensible

```TypeScript
isExtensible(o: any): boolean
```

Returns a value that indicates whether new properties can be added to an object.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| o | any | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean |  |

## isFrozen

```TypeScript
isFrozen(o: any): boolean
```

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| o | any | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean |  |

## isSealed

```TypeScript
isSealed(o: any): boolean
```

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| o | any | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean |  |

## keys

```TypeScript
keys(o: object): string[]
```

Returns the names of the enumerable string properties and methods of an object.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| o | object | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string[] |  |

## preventExtensions

```TypeScript
preventExtensions<T>(o: T): T
```

Prevents the addition of new properties to an object.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| o | T | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## seal

```TypeScript
seal<T>(o: T): T
```

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| o | T | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## prototype

```TypeScript
readonly prototype: Object
```

A reference to the prototype for a class of objects.

**类型：** Object

