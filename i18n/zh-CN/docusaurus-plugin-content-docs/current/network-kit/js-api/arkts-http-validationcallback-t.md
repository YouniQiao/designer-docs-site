# ValidationCallback

```TypeScript
export type ValidationCallback = (context: ValidationContext) => boolean | Promise<boolean>
```

Self defined remote validation. This API uses a promise to return the result.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

| 类型 | 说明 |
| --- | --- |
| (context: ValidationContext) => boolean |  |
| Promise&lt;boolean> |  |

