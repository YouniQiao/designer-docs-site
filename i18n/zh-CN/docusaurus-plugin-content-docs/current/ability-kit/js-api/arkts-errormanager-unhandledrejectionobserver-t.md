# UnhandledRejectionObserver

```TypeScript
export type UnhandledRejectionObserver = (reason: Error | Any, promise: Promise<Any>) => void
```

当发生未处理的拒绝时，系统将调用此观测器。

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

| 类型 | 说明 |
| --- | --- |
| (reason: Error |  |
| Any, promise: Promise&lt;Any>) => void |  |

