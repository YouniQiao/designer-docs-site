# set

## set

```TypeScript
function set<T extends object, P extends PropertyKey>(
        target: T,
        propertyKey: P,
        value: P extends keyof T ? T[P] : any,
        receiver?: any,
    ): boolean
```

Sets the property of target, equivalent to `target[propertyKey] = value` when `receiver === target`.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | T | 是 |  |
| propertyKey | P | 是 |  |
| value | P extends keyof T ? T[P] : any | 是 |  |
| receiver | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean |  |

## set

```TypeScript
function set(target: object, propertyKey: PropertyKey, value: any, receiver?: any): boolean
```

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | object | 是 |  |
| propertyKey | PropertyKey | 是 |  |
| value | any | 是 |  |
| receiver | any | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean |  |

