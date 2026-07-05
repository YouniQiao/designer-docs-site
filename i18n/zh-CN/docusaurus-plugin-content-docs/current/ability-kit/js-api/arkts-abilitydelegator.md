# AbilityDelegator

## 汇总

### 接口

| 名称 | 描述 |
| --- | --- |
| [AbilityDelegator](arkts-abilitydelegator-i.md) | AbilityDelegator模块可以通过[AbilityMonitor]{@link ./application/AbilityMonitor:AbilityMonitor}实例来监听和管理 [UIAbility]{@link ./../@ohos.app.ability.UIAbility}生命周期的变化。例如获取UIAbility当前状态（如是否已创建/是否在前台等）、查询当前获焦的UIAbility、等待UIAbility进入 某个生命周期节点（如等待UIAbility进入onForeground）、启动指定UIAbility、设置超时机制等功能。 AbilityDelegator可以通过 [getAbilityDelegator]{@link ./../@ohos.app.ability.abilityDelegatorRegistry:abilityDelegatorRegistry.getAbilityDelegator}方 法获取。 > **说明：** > > 本模块接口仅可在[单元测试框架](docroot://application-test/unittest-guidelines.md)中使用。 |

