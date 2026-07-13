# AbilityLifecycleState

Enumerates the ability lifecycle states. It can be used in
[getAbilityState(ability)](application/AbilityDelegator:AbilityDelegator.getAbilityState) of
[AbilityDelegator](application/AbilityDelegator:AbilityDelegator) to return different ability lifecycle
states.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## UNINITIALIZED

```TypeScript
UNINITIALIZED = 0
```

The ability is in an invalid state.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## CREATE

```TypeScript
CREATE = 1
```

The ability is created.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## FOREGROUND

```TypeScript
FOREGROUND = 2
```

The ability is running in the foreground.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## BACKGROUND

```TypeScript
BACKGROUND = 3
```

The ability is running in the background.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## DESTROY

```TypeScript
DESTROY = 4
```

The ability is destroyed.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

