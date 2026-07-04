# RunningMultiAppInfo (System API)

The class of running multi app information.

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## bundleName

```TypeScript
bundleName: string
```

The name of the bundle.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## mode

```TypeScript
mode: MultiAppMode
```

The app multi mode.

**Type:** MultiAppMode

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## runningAppClones

```TypeScript
runningAppClones?: Array<RunningAppClone>
```

All running app info for bundle if mode is {@link APP_CLONE}.

**Type:** Array<RunningAppClone>

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## runningMultiInstances

```TypeScript
runningMultiInstances?: Array<RunningMultiInstanceInfo>
```

All running instance info for bundle if mode is {@link MULTI_INSTANCE}.

**Type:** Array<RunningMultiInstanceInfo>

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

