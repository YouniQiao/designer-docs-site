# CompletionHandlerForAtomicService

CompletionHandlerForAtomicService provides two callback functions,
[onAtomicServiceRequestSuccess](arkts-ability-completionhandlerforatomicservice-c.md#onatomicservicerequestsuccess-1)
and
[onAtomicServiceRequestFailure](arkts-ability-completionhandlerforatomicservice-c.md#onatomicservicerequestfailure-1)
, to handle the results of successful and failed atomic service launch requests, respectively.

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

Called when the atomic service fails to be launched.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | appId of the target atomic service. |
| failureCode | FailureCode | Yes | Error code of the failure cause. |
| failureMessage | string | Yes | Description of the failure cause. |

**Example**

For details, see [CompletionHandlerForAtomicService Usage Example](#completionhandlerforatomicservice-usage-example).

## onAtomicServiceRequestSuccess

```TypeScript
onAtomicServiceRequestSuccess(appId: string): void
```

Called when the atomic service is successfully launched.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | appId of the target atomic service. |

**Example**

For details, see [CompletionHandlerForAtomicService Usage Example](#completionhandlerforatomicservice-usage-example).

