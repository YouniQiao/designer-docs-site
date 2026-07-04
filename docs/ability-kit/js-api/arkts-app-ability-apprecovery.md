# @ohos.app.ability.appRecovery

The appRecovery module provides APIs for recovering faulty applications.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { appRecovery } from '@ohos.app.ability.appRecovery';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [enableAppRecovery](arkts-ability-enableapprecovery-f.md#enableapprecovery-1) | Enables application recovery. After this API is called, the first ability that is displayed when the application is started from the initiator can be restored. |
| [restartApp](arkts-ability-restartapp-f.md#restartapp-1) | Restarts the current process and starts the first ability that is displayed when the application is started. If the state of this ability is saved, the saved state data is passed into the **wantParam** property in the **want** parameter of the **onCreate** lifecycle callback of the ability. In API version 10, the ability specified by [setRestartWant](arkts-ability-setrestartwant-f.md#setrestartwant-1) is started. If no ability is specified, the following rules are used: If the ability of the current application running in the foreground supports recovery, that ability is started. If multiple abilities that support recovery is running in the foreground, only the last ability is started. If no ability is running in the foreground, none of them is started. This API can be used together with the APIs of [errorManager](arkts-app-ability-errormanager.md#errormanager). The interval between two restarts must be greater than one minute. If this API is called repeatedly within one minute, the application exits but does not restart. The behavior of automatic restart is the same as that of proactive restart. |
| [saveAppState](arkts-ability-saveappstate-f.md#saveappstate-1) | Saves the application state. This API can be used together with the APIs of [errorManager](arkts-app-ability-errormanager.md#errormanager). |
| [saveAppState](arkts-ability-saveappstate-f.md#saveappstate-2) | Saves the ability state, which will be used for recovery. This API can be used together with the APIs of [errorManager](arkts-app-ability-errormanager.md#errormanager). |
| [setRestartWant](arkts-ability-setrestartwant-f.md#setrestartwant-1) | Sets an ability that will be recovered. The ability must be a UIAbility in the current bundle. |

### Enums

| Name | Description |
| --- | --- |
| [RestartFlag](arkts-ability-restartflag-e.md) | Enumerates the application restart flags. This enum is used as an input parameter of [enableAppRecovery](arkts-ability-enableapprecovery-f.md#enableapprecovery-1). |
| [SaveModeFlag](arkts-ability-savemodeflag-e.md) | Enumerates the application state saving modes. This enum is used as an input parameter of [enableAppRecovery](arkts-ability-enableapprecovery-f.md#enableapprecovery-1). |
| [SaveOccasionFlag](arkts-ability-saveoccasionflag-e.md) | Enumerates the scenarios for saving the application state. This enum is used as an input parameter of [enableAppRecovery](arkts-ability-enableapprecovery-f.md#enableapprecovery-1). |

