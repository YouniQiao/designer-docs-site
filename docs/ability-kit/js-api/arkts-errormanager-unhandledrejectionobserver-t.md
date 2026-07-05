# UnhandledRejectionObserver

```TypeScript
export type UnhandledRejectionObserver = (reason: Error | Any, promise: Promise<Any>) => void
```

当发生未处理的拒绝时，系统将调用此观测器。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

| Type | Description |
| --- | --- |
| (reason: Error |  |
| Any, promise: Promise&lt;Any>) => void |  |

