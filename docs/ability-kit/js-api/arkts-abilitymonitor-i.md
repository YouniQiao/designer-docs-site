# AbilityMonitor

本模块提供监听指定[UIAbility]@ohos.app.ability.UIAbility生命周期状态变化的能力。开发者可以将AbilityMonitor作为 [abilityDelegator.addAbilityMonitor]./application/AbilityDelegator:AbilityDelegator.addAbilityMonitor(monitor: AbilityMonitor, callback: AsyncCallback<void>) 的入参来注册监听。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onAbilityCreate

```TypeScript
onAbilityCreate?: (ability: UIAbility) => void
```

UIAbility对象被创建时，触发该回调函数。

**Type:** (ability: UIAbility) => void

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## abilityName

```TypeScript
abilityName: string
```

被监听的UIAbility对象名称。

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onWindowStageRestore

```TypeScript
onWindowStageRestore?: (ability: UIAbility) => void
```

当UIAbility跨端迁移时，目标端UIAbility恢复页面栈时，触发该回调函数。

**Type:** (ability: UIAbility) => void

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onAbilityForeground

```TypeScript
onAbilityForeground?: (ability: UIAbility) => void
```

UIAbility对象状态变成前台时，触发该回调函数。

**Type:** (ability: UIAbility) => void

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## moduleName

```TypeScript
moduleName?: string
```

被监听的UIAbility对象所属模块名称。

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onWindowStageDestroy

```TypeScript
onWindowStageDestroy?: (ability: UIAbility) => void
```

当WindowStage被销毁前，触发该回调函数。

**Type:** (ability: UIAbility) => void

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onWindowStageCreate

```TypeScript
onWindowStageCreate?: (ability: UIAbility) => void
```

当WindowStage实例被创建时，触发该回调函数。

**Type:** (ability: UIAbility) => void

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onAbilityDestroy

```TypeScript
onAbilityDestroy?: (ability: UIAbility) => void
```

UIAbility对象被销毁前，触发该回调函数。

**Type:** (ability: UIAbility) => void

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onAbilityBackground

```TypeScript
onAbilityBackground?: (ability: UIAbility) => void
```

UIAbility对象状态变成后台时，触发该回调函数。

**Type:** (ability: UIAbility) => void

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

