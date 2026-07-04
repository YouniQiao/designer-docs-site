# @ohos.ability.featureAbility

A Feature Ability represents an ability with a UI and is designed to interact with users.

**Since:** 6

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## Modules to Import

```TypeScript
import { featureAbility } from '@ohos.ability.featureAbility';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [acquireDataAbilityHelper](arkts-ability-acquiredataabilityhelper-f.md#acquiredataabilityhelper-1) | Obtains the dataAbilityHelper. |
| [connectAbility](arkts-ability-connectability-f.md#connectability-1) | Connects the current ability to an ability using the AbilityInfo.AbilityType.SERVICE template. |
| [disconnectAbility](arkts-ability-disconnectability-f.md#disconnectability-1) | Disconnects ability to a Service ability. |
| [disconnectAbility](arkts-ability-disconnectability-f.md#disconnectability-2) | Disconnects ability to a Service ability. |
| [getContext](arkts-ability-getcontext-f.md#getcontext-1) | Obtains the application context. |
| [getWant](arkts-ability-getwant-f.md#getwant-1) | Obtain the want sent from the source ability. |
| [getWant](arkts-ability-getwant-f.md#getwant-2) | Obtain the want sent from the source ability. |
| [getWindow](arkts-ability-getwindow-f.md#getwindow-1) | Obtains the window corresponding to the current ability. |
| [getWindow](arkts-ability-getwindow-f.md#getwindow-2) | Obtains the window corresponding to the current ability. |
| [hasWindowFocus](arkts-ability-haswindowfocus-f.md#haswindowfocus-1) | Checks whether the main window of this ability has window focus. |
| [hasWindowFocus](arkts-ability-haswindowfocus-f.md#haswindowfocus-2) | Checks whether the main window of this ability has window focus. |
| [startAbility](arkts-ability-startability-f.md#startability-1) | Starts a new ability. |
| [startAbility](arkts-ability-startability-f.md#startability-2) | Starts a new ability. |
| [startAbilityForResult](arkts-ability-startabilityforresult-f.md#startabilityforresult-1) | Starts an ability and returns the execution result when the ability is destroyed. |
| [startAbilityForResult](arkts-ability-startabilityforresult-f.md#startabilityforresult-2) | Starts an ability and returns the execution result when the ability is destroyed. |
| [terminateSelf](arkts-ability-terminateself-f.md#terminateself-1) | Destroys this Page ability. |
| [terminateSelf](arkts-ability-terminateself-f.md#terminateself-2) | Destroys this Page ability. |
| [terminateSelfWithResult](arkts-ability-terminateselfwithresult-f.md#terminateselfwithresult-1) | Destroys the Page ability while returning the specified result code and data to the caller. |
| [terminateSelfWithResult](arkts-ability-terminateselfwithresult-f.md#terminateselfwithresult-2) | Destroys the Page ability while returning the specified result code and data to the caller. |

### Enums

| Name | Description |
| --- | --- |
| [AbilityStartSetting](arkts-ability-abilitystartsetting-e.md) | Enum for the special start setting used in starting ability. |
| [AbilityWindowConfiguration](arkts-ability-abilitywindowconfiguration-e.md) | Enum for the window configuration. |
| [DataAbilityOperationType](arkts-ability-dataabilityoperationtype-e.md) | Enum for the operation type of data. |
| [ErrorCode](arkts-ability-errorcode-e.md) | Enum for the error code. |

### Types

| Name | Description |
| --- | --- |
| [AppVersionInfo](arkts-ability-appversioninfo-t.md) | Defines an AppVersionInfo object. |
| [Context](arkts-ability-context-t.md) | The context of an ability or an application. It allows access to application-specific resources, request and verification permissions. Can only be obtained through the ability. |
| [ProcessInfo](arkts-ability-processinfo-t.md) | This process information about an application. |

