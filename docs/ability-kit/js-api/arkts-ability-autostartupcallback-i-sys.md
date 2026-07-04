# AutoStartupCallback (System API)

The module defines the callback to be invoked when auto-startup is set or canceled for an application component.

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## onAutoStartupOff

```TypeScript
onAutoStartupOff(info: AutoStartupInfo): void
```

Called when the auto-startup setting of an application component is canceled.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | AutoStartupInfo | Yes | Information about the target application component. |

## onAutoStartupOn

```TypeScript
onAutoStartupOn(info: AutoStartupInfo): void
```

Called when auto-startup is set for an application component.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | AutoStartupInfo | Yes | Information about the target application component. |

