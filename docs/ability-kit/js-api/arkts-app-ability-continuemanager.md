# @ohos.app.ability.continueManager

The continueManager module provides capabilities for managing cross-device application migration. For example, it allows you to obtain the result of quickly launching the target application during the cross-device migration process.

**Since:** 18

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

## Modules to Import

```TypeScript
import { continueManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [off](arkts-ability-off-f.md#off-1) | Unregisters the callback used to obtain the quick start result when an application is launched quickly. This API uses an asynchronous callback to return the result. |
| [on](arkts-ability-on-f.md#on-1) | Registers a callback to obtain the quick start result when an application is launched quickly. This API uses an asynchronous callback to return the result. |

### Interfaces

| Name | Description |
| --- | --- |
| [ContinueResultInfo](arkts-ability-continueresultinfo-i.md) | Describes the quick start result returned by the callback. |

### Enums

| Name | Description |
| --- | --- |
| [ContinueStateCode](arkts-ability-continuestatecode-e.md) | Enumerates the status codes of the quick start result. |

