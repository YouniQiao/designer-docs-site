# deleteProperty

## deleteProperty

```TypeScript
function deleteProperty(target: object, propertyKey: PropertyKey): boolean
```

Removes a property from an object, equivalent to `delete target[propertyKey]`, except it won't throw if `target[propertyKey]` is non-configurable.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | object | 是 |  |
| propertyKey | PropertyKey | 是 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean |  |

