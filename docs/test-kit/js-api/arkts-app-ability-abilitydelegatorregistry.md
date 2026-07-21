# @ohos.app.ability.abilityDelegatorRegistry

**AbilityDelegatorRegistry**, a module of the automatic test framework, is used to obtain [AbilityDelegator](application/AbilityDelegator:AbilityDelegator) and [AbilityDelegatorArgs](application/abilityDelegatorArgs:AbilityDelegatorArgs) objects. **AbilityDelegator** provides APIs for creating [AbilityMonitor](application/AbilityMonitor:AbilityMonitor) objects, which can be used to listen for ability lifecycle changes. **AbilityDelegatorArgs** provides APIs for obtaining test parameters.

> **NOTE**  
>  
> The APIs of this module can be used only in [JsUnit](docroot://application-test/unittest-guidelines.md).

**Since:** 9

<!--Device-unnamed-declare namespace abilityDelegatorRegistry--><!--Device-unnamed-declare namespace abilityDelegatorRegistry-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { abilityDelegatorRegistry } from '@kit.TestKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAbilityDelegator](arkts-test-abilitydelegatorregistry-getabilitydelegator-f.md#getabilitydelegator) | Obtains an [AbilityDelegator](application/AbilityDelegator:AbilityDelegator) object. |
| [getArguments](arkts-test-abilitydelegatorregistry-getarguments-f.md#getarguments) | Obtains an [AbilityDelegatorArgs](application/abilityDelegatorArgs:AbilityDelegatorArgs) object. |

### Enums

| Name | Description |
| --- | --- |
| [AbilityLifecycleState](arkts-test-abilitydelegatorregistry-abilitylifecyclestate-e.md) | Enumerates the ability lifecycle states. It can be used in [getAbilityState(ability)](application/AbilityDelegator:AbilityDelegator.getAbilityState) of [AbilityDelegator](application/AbilityDelegator:AbilityDelegator) to return different ability lifecycle states. |

### Types

| Name | Description |
| --- | --- |
| [AbilityDelegator](arkts-test-abilitydelegatorregistry-abilitydelegator-t.md) | Represents the **AbilityDelegator** module. |
| [AbilityDelegatorArgs](arkts-test-abilitydelegatorregistry-abilitydelegatorargs-t.md) | Represents the **AbilityDelegatorArgs** module. |
| [AbilityMonitor](arkts-test-abilitydelegatorregistry-abilitymonitor-t.md) | Represents the **AbilityMonitor** module. |
| [AbilityStageMonitor](arkts-test-abilitydelegatorregistry-abilitystagemonitor-t.md) | Represents the **AbilityStageMonitor** module. |
| [InteropAbilityMonitor](arkts-test-abilitydelegatorregistry-interopabilitymonitor-t.md) | Provide methods for matching monitored Ability objects that meet specified conditions.The most recently matched Ability objects will be saved in the InteropAbilityMonitor object. |
| [ShellCmdResult](arkts-test-abilitydelegatorregistry-shellcmdresult-t.md) | Represents the **ShellCmdResult** module. |

