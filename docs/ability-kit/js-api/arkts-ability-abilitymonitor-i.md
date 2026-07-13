# AbilityMonitor

The module provides the capability of listening for lifecycle state changes of a specified
[UIAbility](arkts-app-ability-uiability.md). You can use AbilityMonitor as an input parameter of
[abilityDelegator.addAbilityMonitor](arkts-ability-abilitydelegator-i.md#addabilitymonitor-1)
to register a listener.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## abilityName

```TypeScript
abilityName: string
```

Name of the UIAbility object to be listened.

**Type:** string

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## moduleName

```TypeScript
moduleName?: string
```

Module name of the UIAbility object.

**Type:** string

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onAbilityBackground

```TypeScript
onAbilityBackground?: (ability: UIAbility) => void
```

Callback invoked when the UIAbility object transitions to the background.

**Type:** (ability: UIAbility) => void

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onAbilityCreate

```TypeScript
onAbilityCreate?: (ability: UIAbility) => void
```

Callback invoked when the UIAbility object is created.

**Type:** (ability: UIAbility) => void

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onAbilityDestroy

```TypeScript
onAbilityDestroy?: (ability: UIAbility) => void
```

Callback invoked when the UIAbility object is destroyed.

**Type:** (ability: UIAbility) => void

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onAbilityForeground

```TypeScript
onAbilityForeground?: (ability: UIAbility) => void
```

Callback invoked when the UIAbility object transitions to the foreground.

**Type:** (ability: UIAbility) => void

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onWindowStageCreate

```TypeScript
onWindowStageCreate?: (ability: UIAbility) => void
```

Callback invoked when a WindowStage instance is created.

**Type:** (ability: UIAbility) => void

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onWindowStageDestroy

```TypeScript
onWindowStageDestroy?: (ability: UIAbility) => void
```

Callback invoked when the WindowStage instance is destroyed.

**Type:** (ability: UIAbility) => void

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onWindowStageRestore

```TypeScript
onWindowStageRestore?: (ability: UIAbility) => void
```

Callback invoked when the page stack is restored for the target UIAbility during cross-device migration.

**Type:** (ability: UIAbility) => void

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

