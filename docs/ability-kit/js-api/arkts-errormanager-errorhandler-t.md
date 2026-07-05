# ErrorHandler

```TypeScript
export type ErrorHandler = (errObject: Error) => void
```

当ArkTS运行时抛出用户未捕获异常时，将调用ErrorHandler。

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| errObject | Error | Yes | 有关异常事件名字、消息、错误堆栈信息的对象。 |

