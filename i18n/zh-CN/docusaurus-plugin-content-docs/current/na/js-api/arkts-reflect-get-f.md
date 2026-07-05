# get

## get

```TypeScript
function get<T extends object, P extends PropertyKey>(
        target: T,
        propertyKey: P,
        receiver?: unknown,
    ): P extends keyof T ? T[P] : any
```

Gets the property of target, equivalent to `target[propertyKey]` when `receiver === target`.

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | T | 是 |  |
| propertyKey | P | 是 |  |
| receiver | unknown | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| P extends keyof T ? T[P] : any |  |

