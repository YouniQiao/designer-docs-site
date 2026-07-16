# @ohos.app.ability.AbilityConstant

AbilityConstant provides enums related to abilities, including the window mode.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { AbilityConstant } from '@kit.AbilityKit';
```

## Summary

### Interfaces

| Name | Description |
| --- | --- |
| [LastExitDetailInfo](arkts-ability-lastexitdetailinfo-i.md) | Describes the key runtime information of the process where the ability last exited. |
| [LaunchParam](arkts-ability-launchparam-i.md) | Describes the launch parameters, which mainly include the ability launch reasons and reasons for the last exit. The parameter values are automatically passed in by the system when the ability is launched. You do not need to change the values. |

### Enums

| Name | Description |
| --- | --- |
| [CollaborateResult](arkts-ability-collaborateresult-e.md) | Enumerates the collaboration request results. You can use it in multi-device collaboration scenarios to specifywhether the target application accepts the collaboration request from the caller application. You can use it in[onCollaborate()](arkts-ability-uiability-c.md#oncollaborate-1) ofthe UIAbility. |
| [ContinueState](arkts-ability-continuestate-e.md) | Enumerates the mission continuation states of the application. It is used in the[setMissionContinueState](arkts-ability-uiabilitycontext-c.md#setmissioncontinuestate-1) API of [UIAbilityContext](arkts-ability-uiabilitycontext-c.md). |
| [LastExitReason](arkts-ability-lastexitreason-e.md) | Enumerates the reasons for the last exit of the ability. You can use it together with the value of**launchParam.lastExitReason** in [onCreate()](arkts-ability-uiability-c.md#oncreate-1) of theUIAbility to complete different operations. |
| [LaunchReason](arkts-ability-launchreason-e.md) | Enumerates the ability launch reasons. You can use it together with the value of **launchParam.launchReason** in[onCreate(want, launchParam)](arkts-ability-uiability-c.md#oncreate-1) of the UIAbility to completedifferent operations. |
| [MemoryLevel](arkts-ability-memorylevel-e.md) | Enumerates the memory levels of the entire device. You can use it in[onMemoryLevel()](arkts-ability-ability-c.md#onmemorylevel-1) of the UIAbility to complete differentoperations.&gt; **NOTE**&gt;&gt; - The trigger conditions may differ across various devices. For example, on a standard device with 12 GB of&gt; memory:&gt; - When the available memory of the entire device drops to 1700 MB to 1800 MB, the **onMemoryLevel** callback&gt; with a value of **0** is triggered, indicating that the available memory is moderate.&gt; - When the available memory of the entire device drops to 1600 MB to 1700 MB, the **onMemoryLevel** callback&gt; with a value of **1** is triggered, indicating that the available memory is low.&gt; - When the available memory of the entire device drops below 1600 MB, the **onMemoryLevel** callback with a&gt; value of **2** is triggered, indicating that the available memory is critically low. |
| [OnContinueResult](arkts-ability-oncontinueresult-e.md) | Enumerates the ability continuation results. You can use it in[onContinue()](arkts-ability-uiability-c.md#oncontinue-1) of the UIAbility to complete differentoperations. |
| [OnSaveResult](arkts-ability-onsaveresult-e.md) | Enumerates the result types for the operation of saving application data. You can use it in[onSaveState()](arkts-ability-uiability-c.md#onsavestate-1) of the UIAbility to complete[UIAbility backup and restore](../../../../application-models/ability-recover-guideline.md). |
| [PrepareTermination](arkts-ability-preparetermination-e.md) | Enumerates the actions triggered when an application is closed by the user. You can use it in[onPrepareTermination](arkts-ability-abilitystage-c.md#onpreparetermination-1) or[onPrepareTerminationAsync](arkts-ability-abilitystage-c.md#onprepareterminationasync-1) of[AbilityStage](arkts-ability-abilitystage-c.md). |
| [StateType](arkts-ability-statetype-e.md) | Enumerates the scenarios for saving application data. You can use it in[onSaveState()](arkts-ability-uiability-c.md#onsavestate-1) of the UIAbility to complete[UIAbility backup and restore](../../../../application-models/ability-recover-guideline.md). |
| [WindowMode](arkts-ability-windowmode-e.md) | Enumerates the window modes in which a UIAbility can be displayed at startup. It can be used in[startAbility](arkts-ability-uiabilitycontext-c.md#startability-3). |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [WindowMode](arkts-ability-windowmode-e-sys.md) | Enumerates the window modes in which a UIAbility can be displayed at startup. It can be used in[startAbility](arkts-ability-uiabilitycontext-c.md#startability-3). |
<!--DelEnd-->

### Constants

| Name | Description |
| --- | --- |
| [REASON_MESSAGE_DESKTOP_SHORTCUT](arkts-ability-abilityconstant-con.md#reason_message_desktop_shortcut) | The UIAbility is launched via a home screen shortcut. If this string is obtained from the **launchReasonMessage**property in [LaunchParam](arkts-ability-launchparam-i.md), the UIAbility is initiated by touching a shortcut onthe home screen. |

