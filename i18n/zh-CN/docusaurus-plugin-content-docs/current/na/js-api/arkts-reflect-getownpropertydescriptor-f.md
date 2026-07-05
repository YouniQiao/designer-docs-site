# getOwnPropertyDescriptor

## getOwnPropertyDescriptor

```TypeScript
function getOwnPropertyDescriptor<T extends object, P extends PropertyKey>(
        target: T,
        propertyKey: P,
    ): TypedPropertyDescriptor<P extends keyof T ? T[P] : any> | undefined
```

Gets the own property descriptor of the specified object. An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | T | 是 |  |
| propertyKey | P | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TypedPropertyDescriptor&lt;P extends keyof T ? T[P] : any> |  |

