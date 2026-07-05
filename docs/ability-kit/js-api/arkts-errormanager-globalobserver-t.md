# GlobalObserver

```TypeScript
export type GlobalObserver = (reason: GlobalError) => void
```

定义异常监听，可以作为 [errorManager.on('globalErrorOccurred')]errorManager.on(type: 'globalErrorOccurred', observer: GlobalObserver) 和 [errorManager.on('globalUnhandledRejectionDetected')]errorManager.on(type: 'globalUnhandledRejectionDetected', observer: GlobalObserver) 的入参监听当前应用主线程事件处理事件。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reason | GlobalError | Yes | 有关异常事件名字、消息、错误堆栈信息、异常线程名称和类型的对象。 |

