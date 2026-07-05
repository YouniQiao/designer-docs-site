# ErrorObserver

定义异常监听，可以作为 [errorManager.on('error')]./../@ohos.app.ability.errorManager:errorManager.on(type: 'error', observer: ErrorObserver) 的入参监听当前应用发生的异常。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onException

```TypeScript
onException?(errObject: Error): void
```

应用产生异常，上报js层时的回调。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| errObject | Error | Yes | 有关异常事件名字、消息和错误堆栈信息的对象。 |

## onUnhandledException

```TypeScript
onUnhandledException(errMsg: string): void
```

应用产生未捕获的异常时的回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| errMsg | string | Yes | 有关异常的消息和错误堆栈跟踪。 |

