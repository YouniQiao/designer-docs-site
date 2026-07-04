# @ohos.app.ability.contextConstant

The ContextConstant module defines context-related enums, including the file encryption partition level and process mode of the UIAbility after it is started.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { contextConstant } from '@ohos.app.ability.contextConstant';
```

## Summary

### Enums

| Name | Description |
| --- | --- |
| [AreaMode](arkts-ability-areamode-e.md) | Enumerates the file encryption levels, which are used to ensure data security for applications across different scenarios. You can select the appropriate encryption level based on the application requirements to protect user data. |
| [ContextType](arkts-ability-contexttype-e.md) | Context type |
| [ProcessMode](arkts-ability-processmode-e.md) | Enumerates the process modes of the UIAbility after it is started. As a property of [StartOptions](arkts-ability-startoptions-c.md#startoptions), **ProcessMode** takes effect only in [UIAbilityContext.startAbility](arkts-ability-uiabilitycontext-c.md#startability-2) and is used to specify the process mode of the target UIAbility. This value takes effect only on 2-in-1 devices and tablets. If it is used on other devices, error code 801 is returned. |
| [Scenarios](arkts-ability-scenarios-e.md) | Enumerates the scenarios where the [onNewWant](arkts-ability-uiability-c.md#onnewwant-1) lifecycle callback is not triggered. It is used in the [setOnNewWantSkipScenarios](arkts-ability-uiabilitycontext-c.md#setonnewwantskipscenarios-1) API. |
| [StartupVisibility](arkts-ability-startupvisibility-e.md) | Enumerates the visibility statuses of the UIAbility after it is started. If the target UIAbility is set to invisible, the window of the target UIAbility is not displayed in the foreground, there is no icon in the dock, and the **onForeground** lifecycle of the target UIAbility is not triggered. As a property of [StartOptions](arkts-ability-startoptions-c.md#startoptions), **StartupVisibility** takes effect only in [UIAbilityContext.startAbility](arkts-ability-uiabilitycontext-c.md#startability-2) and specifies the visibility of the target UIAbility after it is started. This value takes effect only on 2-in-1 devices and tablets. If it is used on other devices, error code 801 is returned. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ContextType](arkts-ability-contexttype-e-sys.md) | Context type |
<!--DelEnd-->

