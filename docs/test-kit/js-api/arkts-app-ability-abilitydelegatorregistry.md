# @ohos.app.ability.abilityDelegatorRegistry

**AbilityDelegatorRegistry**, a module of the automatic test framework, is used to obtain
[AbilityDelegator](application/AbilityDelegator:AbilityDelegator) and
[AbilityDelegatorArgs](application/abilityDelegatorArgs:AbilityDelegatorArgs) objects. **AbilityDelegator**
provides APIs for creating [AbilityMonitor](application/AbilityMonitor:AbilityMonitor) objects, which can be
used to listen for ability lifecycle changes. **AbilityDelegatorArgs** provides APIs for obtaining test parameters.

> **NOTE**
>
> The APIs of this module can be used only in [JsUnit](../../../../application-test/unittest-guidelines.md).

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { abilityDelegatorRegistry } from '@kit.TestKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAbilityDelegator](arkts-test-getabilitydelegator-f.md#getabilitydelegator-1) | Obtains an [AbilityDelegator](application/AbilityDelegator:AbilityDelegator) object. |
| [getArguments](arkts-test-getarguments-f.md#getarguments-1) | Obtains an [AbilityDelegatorArgs](application/abilityDelegatorArgs:AbilityDelegatorArgs) object. |

### Enums

| Name | Description |
| --- | --- |
| [AbilityLifecycleState](arkts-test-abilitylifecyclestate-e.md) | Enumerates the ability lifecycle states. It can be used in[getAbilityState(ability)](application/AbilityDelegator:AbilityDelegator.getAbilityState) of[AbilityDelegator](application/AbilityDelegator:AbilityDelegator) to return different ability lifecyclestates. |

### Types

| Name | Description |
| --- | --- |
| [AbilityDelegator](arkts-test-abilitydelegator-t.md) | Represents the **AbilityDelegator** module. |
| [AbilityDelegatorArgs](arkts-test-abilitydelegatorargs-t.md) | Represents the **AbilityDelegatorArgs** module. |
| [AbilityMonitor](arkts-test-abilitymonitor-t.md) | Represents the **AbilityMonitor** module. |
| [AbilityStageMonitor](arkts-test-abilitystagemonitor-t.md) | Represents the **AbilityStageMonitor** module. |
| [InteropAbilityMonitor](arkts-test-interopabilitymonitor-t.md) | Provide methods for matching monitored Ability objects that meet specified conditions.The most recently matched Ability objects will be saved in the InteropAbilityMonitor object. |
| [ShellCmdResult](arkts-test-shellcmdresult-t.md) | Represents the **ShellCmdResult** module. |

