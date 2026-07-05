# LoopObserver

定义异常监听，可以作为 [ErrorManager.on]./../@ohos.app.ability.errorManager:errorManager.on(type: 'loopObserver', timeout: number, observer: LoopObserver) 的入参监听当前应用主线程事件处理事件。

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onLoopTimeOut

```TypeScript
onLoopTimeOut?(timeout: int): void
```

将在js运行时应用主线程处理事件超时的回调。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeout | int | Yes | 返回应用主线程消息实际执行时间。  阈值必须大于0。 单位为毫秒（ms）。 |

