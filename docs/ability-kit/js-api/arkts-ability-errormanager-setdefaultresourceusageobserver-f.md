# setDefaultResourceUsageObserver

## Modules to Import

```TypeScript
import { errorManager } from '@kit.AbilityKit';
```

<a id="setdefaultresourceusageobserver"></a>
## setDefaultResourceUsageObserver

```TypeScript
function setDefaultResourceUsageObserver(defaultObserver?: ResourceUsageObserver): ResourceUsageObserver
```

Set the default resource usage observer. You can use it to implement chain calls.If an empty observer is set for a certain module, it will cause the call chain to be interrupted.This API must be called on the main thread.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-errorManager-function setDefaultResourceUsageObserver(defaultObserver?: ResourceUsageObserver): ResourceUsageObserver--><!--Device-errorManager-function setDefaultResourceUsageObserver(defaultObserver?: ResourceUsageObserver): ResourceUsageObserver-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| defaultObserver | [ResourceUsageObserver](arkts-ability-errormanager-resourceusageobserver-t.md) | No | The default resource usage observer. |

**Return value:**

| Type | Description |
| --- | --- |
| [ResourceUsageObserver](arkts-ability-errormanager-resourceusageobserver-t.md) | Returns the original default resource usage observer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000205](../errorcode-ability.md#16000205-api-not-called-in-main-thread) | The API is not called on the main thread. |

