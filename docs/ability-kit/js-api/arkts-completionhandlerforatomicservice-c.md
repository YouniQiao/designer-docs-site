# CompletionHandlerForAtomicService

CompletionHandlerForAtomicService提供了 [onAtomicServiceRequestSuccess](arkts-completionhandlerforatomicservice-c.md#onAtomicServiceRequestSuccess) 和 [onAtomicServiceRequestFailure](arkts-completionhandlerforatomicservice-c.md#onAtomicServiceRequestFailure) 两个回调函数，分别在打开原子化服务成功和失败时回调。

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { FailureCode } from '@kit.AbilityKit';
```

## onAtomicServiceRequestFailure

```TypeScript
onAtomicServiceRequestFailure(appId: string, failureCode: FailureCode, failureMessage: string): void
```

打开原子化服务失败时的回调函数。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | 被拉起原子化服务的appId。 |
| failureCode | FailureCode | Yes | 失败原因的错误码。 |
| failureMessage | string | Yes | 失败原因的描述。 |

## onAtomicServiceRequestSuccess

```TypeScript
onAtomicServiceRequestSuccess(appId: string): void
```

打开原子化服务成功时的回调函数。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | 被拉起原子化服务的appId。 |

