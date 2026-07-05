# setDefaultFreezeObserver

## Modules to Import

```TypeScript
import { errorManager } from '@ohos.app.ability.errorManager';
```

## setDefaultFreezeObserver

```TypeScript
function setDefaultFreezeObserver(defaultObserver?: FreezeObserver) : FreezeObserver
```

Set the default freeze observer, This function will be executed right after the callback function registered through errorManager.on is executed. You can use it to implement chain calls instead of errorManager.on. If an empty observer is set for a certain module, it will cause the call chain to be interrupted. This API must be called in the main thread.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| defaultObserver | FreezeObserver | No | The default freeze observer. |

**Return value:**

| Type | Description |
| --- | --- |
| FreezeObserver | - Returns the original default freeze observer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16000205](../errorcode-ability.md#16000205-api-not-called-in-main-thread) | The API is not called on the main thread. |

