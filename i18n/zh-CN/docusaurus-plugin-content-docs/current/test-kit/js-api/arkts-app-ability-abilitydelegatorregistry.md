# @ohos.app.ability.abilityDelegatorRegistry

AbilityDelegatorRegistry是自动化测试框架使用指南模块，该模块用于获取[AbilityDelegator]{@link application/AbilityDelegator:AbilityDelegator} 和[AbilityDelegatorArgs]{@link application/abilityDelegatorArgs:AbilityDelegatorArgs}对象，其中 [AbilityDelegator]{@link application/AbilityDelegator:AbilityDelegator}对象提供添加用于监视指定ability的生命周期状态更改的 [AbilityMonitor]{@link application/AbilityMonitor:AbilityMonitor}对象的能力， [AbilityDelegatorArgs]{@link application/abilityDelegatorArgs:AbilityDelegatorArgs}对象提供获取当前测试参数的能力。 > **说明：** > > 本模块接口仅可在[单元测试框架](docroot://application-test/unittest-guidelines.md)中使用。

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## 导入模块

```TypeScript
import { abilityDelegatorRegistry } from '@kit.TestKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getAbilityDelegator](arkts-abilitydelegatorregistry-getabilitydelegator-f.md#getAbilityDelegator-1) | 获取应用程序的[AbilityDelegator]{@link application/AbilityDelegator:AbilityDelegator}对象，该对象能够使用调度测试框架的相关功能。 |
| [getArguments](arkts-abilitydelegatorregistry-getarguments-f.md#getArguments-1) | 获取单元测试参数[AbilityDelegatorArgs]{@link application/abilityDelegatorArgs:AbilityDelegatorArgs}对象。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [AbilityDelegator](arkts-abilitydelegatorregistry-abilitydelegator-t.md) | AbilityDelegator模块。 |
| [AbilityDelegatorArgs](arkts-abilitydelegatorregistry-abilitydelegatorargs-t.md) | AbilityDelegatorArgs模块。 |
| [AbilityMonitor](arkts-abilitydelegatorregistry-abilitymonitor-t.md) | AbilityMonitor模块。 |
| [AbilityStageMonitor](arkts-abilitydelegatorregistry-abilitystagemonitor-t.md) | AbilityStageMonitor模块。 |
| [InteropAbilityMonitor](arkts-abilitydelegatorregistry-interopabilitymonitor-t.md) | 提供匹配满足指定条件的监控对象的方法。 最近匹配的Ability对象将保存在InteropAbilityMonitor对象中。 |
| [ShellCmdResult](arkts-abilitydelegatorregistry-shellcmdresult-t.md) | ShellCmdResult模块。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [AbilityLifecycleState](arkts-abilitydelegatorregistry-abilitylifecyclestate-e.md) | Ability生命周期状态，该类型为枚举，可配合[AbilityDelegator]{@link application/AbilityDelegator:AbilityDelegator}的 [getAbilityState(ability)]{@link application/AbilityDelegator:AbilityDelegator.getAbilityState}方法返回不同ability生命周期。 |

