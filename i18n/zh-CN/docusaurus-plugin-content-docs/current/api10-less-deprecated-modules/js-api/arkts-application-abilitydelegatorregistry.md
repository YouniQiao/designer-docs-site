# @ohos.application.abilityDelegatorRegistry

AbilityDelegatorRegistry模块提供用于存储已注册的[AbilityDelegator]{@link ./application/AbilityDelegator:AbilityDelegator}和 [AbilityDelegatorArgs]{@link ./application/abilityDelegatorArgs:AbilityDelegatorArgs}对象的全局寄存器的能力，包括获取应用程序的 AbilityDelegator对象、获取单元测试参数AbilityDelegatorArgs对象。该模块中的接口只能用于测试框架中。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getAbilityDelegator](arkts-abilitydelegatorregistry-getabilitydelegator-f.md#getAbilityDelegator-1) | 获取应用程序的AbilityDelegator对象。 |
| [getArguments](arkts-abilitydelegatorregistry-getarguments-f.md#getArguments-1) | 获取单元测试参数AbilityDelegatorArgs对象。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [AbilityLifecycleState](arkts-abilitydelegatorregistry-abilitylifecyclestate-e.md) | Ability生命周期状态。 |

