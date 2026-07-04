# AbilityRunningInfo

AbilityRunningInfo is a struct that records the running information and state of an ability. It is obtained through [getAbilityRunningInfos](arkts-ability-getabilityrunninginfos-f.md#getabilityrunninginfos-1).

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## ability

```TypeScript
ability: ElementName
```

Element name of the ability.

**Type:** ElementName

**Default:** the ohos.bundleManager.ElementName object of the ability.

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## abilityState

```TypeScript
abilityState: abilityManager.AbilityState
```

Ability state.

**Type:** abilityManager.AbilityState

**Default:** Enumerates state of the ability state info

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## pid

```TypeScript
pid: number
```

Process ID.

**Type:** number

**Default:** process id

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## processName

```TypeScript
processName: string
```

Process name.

**Type:** string

**Default:** the name of the process

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## startTime

```TypeScript
startTime: number
```

Ability start time.

**Type:** number

**Default:** ability start time

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## uid

```TypeScript
uid: number
```

UID of the application.

**Type:** number

**Default:** user id

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

