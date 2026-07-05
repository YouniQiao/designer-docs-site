# AbilityLifecycleState

```TypeScript
export enum AbilityLifecycleState
```

Ability生命周期状态，该类型为枚举，可配合[AbilityDelegator]application/AbilityDelegator:AbilityDelegator的 [getAbilityState(ability)]application/AbilityDelegator:AbilityDelegator.getAbilityState方法返回不同ability生命周期。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## UNINITIALIZED

```TypeScript
UNINITIALIZED = 0
```

表示Ability处于无效状态。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## CREATE

```TypeScript
CREATE = 1
```

表示Ability处于已创建状态。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## FOREGROUND

```TypeScript
FOREGROUND = 2
```

表示Ability处于前台状态。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## BACKGROUND

```TypeScript
BACKGROUND = 3
```

表示Ability处于后台状态。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## DESTROY

```TypeScript
DESTROY = 4
```

表示Ability处于已销毁状态。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

