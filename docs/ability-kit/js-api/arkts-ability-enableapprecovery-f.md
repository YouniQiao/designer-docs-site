# enableAppRecovery

## Modules to Import

```TypeScript
import { appRecovery } from '@kit.AbilityKit';
```

## enableAppRecovery

```TypeScript
function enableAppRecovery(restart?: RestartFlag, saveOccasion?: SaveOccasionFlag, saveMode?: SaveModeFlag) : void
```

Enables application recovery. After this API is called, the first ability that is displayed when the application is started from the initiator can be restored.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| restart | RestartFlag | No | Whether the application is restarted upon a fault. By default, the applicationis restarted. |
| saveOccasion | SaveOccasionFlag | No | Scenario for saving the application state. By default, the state issaved when a fault occurs. |
| saveMode | SaveModeFlag | No | Application state saving mode. By default, the application state is written tothe local file cache. |

