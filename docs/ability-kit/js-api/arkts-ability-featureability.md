# @ohos.ability.featureAbility

The FeatureAbility module provides APIs that enable user interaction. You can use the APIs to start or terminate an ability, obtain a dataAbilityHelper object, obtain the window corresponding to the current ability, and connect to or disconnect from a ServiceAbility.

**Since:** 6

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## Modules to Import

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [acquireDataAbilityHelper](arkts-ability-acquiredataabilityhelper-f.md#acquiredataabilityhelper-1) | Obtains a dataAbilityHelper object. &gt; **NOTE** &gt; &gt; For details about the startup rules for the components in the FA model, see &gt; [Component Startup Rules (FA Model)](../../../../application-models/component-startup-rules-fa.md). &gt; &gt; To access a DataAbility of another application, the target application must be configured with associated startup &gt; (**AssociateWakeUp** set to **true**). |
| [connectAbility](arkts-ability-connectability-f.md#connectability-1) | Connects this ability to a ServiceAbility. &gt; **NOTE** &gt; &gt; For details about the startup rules for the components in the FA model, see &gt; [Component Startup Rules (FA Model)](../../../../application-models/component-startup-rules-fa.md). &gt; &gt; To connect to a ServiceAbility of another application, the target application must be configured with &gt; associated startup (**AssociateWakeUp** set to **true**). |
| [disconnectAbility](arkts-ability-disconnectability-f.md#disconnectability-1) | Disconnects this ability from a specific ServiceAbility. This API uses an asynchronous callback to return the result. |
| [disconnectAbility](arkts-ability-disconnectability-f.md#disconnectability-2) | Disconnects this ability from a specific ServiceAbility. This API uses a promise to return the result. |
| [getContext](arkts-ability-getcontext-f.md#getcontext-1) | Obtains the application context. |
| [getWant](arkts-ability-getwant-f.md#getwant-1) | Obtains the Want corresponding to the ability to start. This API uses an asynchronous callback to return the result. |
| [getWant](arkts-ability-getwant-f.md#getwant-2) | Obtains the Want corresponding to the ability to start. This API uses a promise to return the result. |
| [getWindow](arkts-ability-getwindow-f.md#getwindow-1) | Obtains the window corresponding to this ability. This API uses an asynchronous callback to return the result. |
| [getWindow](arkts-ability-getwindow-f.md#getwindow-2) | Obtains the window corresponding to this ability. This API uses a promise to return the result. |
| [hasWindowFocus](arkts-ability-haswindowfocus-f.md#haswindowfocus-1) | Checks whether the main window of this ability has the focus. This API uses an asynchronous callback to return the result. |
| [hasWindowFocus](arkts-ability-haswindowfocus-f.md#haswindowfocus-2) | Checks whether the main window of this ability has the focus. This API uses a promise to return the result. |
| [startAbility](arkts-ability-startability-f.md#startability-1) | Starts an ability. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; For details about the startup rules for the components in the FA model, see &gt; [Component Startup Rules (FA Model)](../../../../application-models/component-startup-rules-fa.md). |
| [startAbility](arkts-ability-startability-f.md#startability-2) | Starts an ability. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; For details about the startup rules for the components in the FA model, see &gt; [Component Startup Rules (FA Model)](../../../../application-models/component-startup-rules-fa.md). |
| [startAbilityForResult](arkts-ability-startabilityforresult-f.md#startabilityforresult-1) | Starts an ability. This API uses an asynchronous callback to return the result. The following situations may be possible for a started ability: - Normally, you can call [terminateSelfWithResult](arkts-ability-terminateselfwithresult-f.md#terminateselfwithresult-1) to terminate the ability. The result is returned to the caller. - If an exception occurs, for example, the ability is killed, an exception message, in which **resultCode** is **-1**, is returned to the caller. - If different applications call this API to start an ability that uses the singleton mode and then call [terminateSelfWithResult](arkts-ability-terminateselfwithresult-f.md#terminateselfwithresult-1) to terminate the ability, the normal result is returned to the last caller, and an exception message, in which **resultCode** is **-1**, is returned to others. &gt; **NOTE** &gt; &gt; For details about the startup rules for the components in the FA model, see &gt; [Component Startup Rules (FA Model)](../../../../application-models/component-startup-rules-fa.md). |
| [startAbilityForResult](arkts-ability-startabilityforresult-f.md#startabilityforresult-2) | Starts an ability. This API uses a promise to return the result. The following situations may be possible for a started ability: - Normally, you can call [terminateSelfWithResult](arkts-ability-terminateselfwithresult-f.md#terminateselfwithresult-1) to terminate the ability. The result is returned to the caller. - If an exception occurs, for example, the ability is killed, an exception message, in which **resultCode** is **-1**, is returned to the caller. - If different applications call this API to start an ability that uses the singleton mode and then call [terminateSelfWithResult](arkts-ability-terminateselfwithresult-f.md#terminateselfwithresult-1) to terminate the ability, the normal result is returned to the last caller, and an exception message, in which **resultCode** is **-1**, is returned to others. &gt; **NOTE** &gt; &gt; For details about the startup rules for the components in the FA model, see &gt; [Component Startup Rules (FA Model)](../../../../application-models/component-startup-rules-fa.md). |
| [terminateSelf](arkts-ability-terminateself-f.md#terminateself-1) | Terminates this ability. This API uses an asynchronous callback to return the result. |
| [terminateSelf](arkts-ability-terminateself-f.md#terminateself-2) | Terminates this ability. This API uses a promise to return the result. |
| [terminateSelfWithResult](arkts-ability-terminateselfwithresult-f.md#terminateselfwithresult-1) | Terminates this ability. This API uses an asynchronous callback to return the result. If the ability is started by calling [startAbilityForResult](arkts-ability-startabilityforresult-f.md#startabilityforresult-1) , the result is returned to the caller when **terminateSelfWithResult** is called. Otherwise, no result is returned to the caller when **terminateSelfWithResult** is called. |
| [terminateSelfWithResult](arkts-ability-terminateselfwithresult-f.md#terminateselfwithresult-2) | Terminates this ability. This API uses a promise to return the result. If the ability is started by calling [startAbilityForResult](arkts-ability-startabilityforresult-f.md#startabilityforresult-1) , the result is returned to the caller when **terminateSelfWithResult** is called. Otherwise, no result is returned to the caller when **terminateSelfWithResult** is called. |

### Enums

| Name | Description |
| --- | --- |
| [AbilityStartSetting](arkts-ability-abilitystartsetting-e.md) | Defines the window property corresponding to this ability. The **abilityStartSetting** property is an object defined in the format of [**key: string]: any**, where **key** is an enumerated value of ** AbilityStartSetting** and **value** is an enumerated value of **AbilityWindowConfiguration**. The value is obtained through **featureAbility.AbilityStartSetting**. |
| [AbilityWindowConfiguration](arkts-ability-abilitywindowconfiguration-e.md) | Defines the window configuration corresponding to this ability. The configuration is obtained through **featureAbility.AbilityWindowConfiguration**. |
| [DataAbilityOperationType](arkts-ability-dataabilityoperationtype-e.md) | Enumerates the operation types of a DataAbility. The DataAbility can use an enumerated value to specify the operation type when operating data in batches. |
| [ErrorCode](arkts-ability-errorcode-e.md) | Enumerates the error codes that may be returned when an ability is started. |

### Types

| Name | Description |
| --- | --- |
| [AppVersionInfo](arkts-ability-appversioninfo-t.md) | Defines an AppVersionInfo object. |
| [Context](arkts-ability-context-t.md) | Defines the Context module. |
| [ProcessInfo](arkts-ability-processinfo-t.md) | Defines a ProcessInfo object. |

