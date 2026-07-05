# FilterAbilityStateType

```TypeScript
export enum FilterAbilityStateType
```

表示要监听的Ability状态，该类型为枚举。可配合[AppStateFilter]appManager.AppStateFilter过滤想要监听的Ability状态。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## CREATE

```TypeScript
CREATE = 1 << 0
```

Ability正在创建中，对应 [Ability状态](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#ability状态)中的 ABILITY_STATE_CREATE。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## FOREGROUND

```TypeScript
FOREGROUND = 1 << 1
```

Ability处于前台，对应 [Ability状态](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#ability状态)中的 ABILITY_STATE_FOREGROUND。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## BACKGROUND

```TypeScript
BACKGROUND = 1 << 2
```

Ability处于后台，对应 [Ability状态](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#ability状态)中的 ABILITY_STATE_BACKGROUND。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## DESTROY

```TypeScript
DESTROY = 1 << 3
```

Ability已经销毁，对应 [Ability状态](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#ability状态)中的 ABILITY_STATE_TERMINATED。

**Since:** 21

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

