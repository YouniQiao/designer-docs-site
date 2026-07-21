# AutoStartupCallback (System API)

The module defines the callback to be invoked when auto-startup is set or canceled for an application component.

**Since:** 11

<!--Device-unnamed-export interface AutoStartupCallback--><!--Device-unnamed-export interface AutoStartupCallback-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

<a id="onautostartupoff"></a>
## onAutoStartupOff

```TypeScript
onAutoStartupOff(info: AutoStartupInfo): void
```

Called when the auto-startup setting of an application component is canceled.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-AutoStartupCallback-onAutoStartupOff(info: AutoStartupInfo): void--><!--Device-AutoStartupCallback-onAutoStartupOff(info: AutoStartupInfo): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | [AutoStartupInfo](arkts-ability-common-autostartupinfo-t-sys.md) | Yes | Information about the target application component. |

<a id="onautostartupon"></a>
## onAutoStartupOn

```TypeScript
onAutoStartupOn(info: AutoStartupInfo): void
```

Called when auto-startup is set for an application component.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-AutoStartupCallback-onAutoStartupOn(info: AutoStartupInfo): void--><!--Device-AutoStartupCallback-onAutoStartupOn(info: AutoStartupInfo): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | [AutoStartupInfo](arkts-ability-common-autostartupinfo-t-sys.md) | Yes | Information about the target application component. |

