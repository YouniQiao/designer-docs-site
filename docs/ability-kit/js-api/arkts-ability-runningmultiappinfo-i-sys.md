# RunningMultiAppInfo (System API)

The RunningMultiAppInfo module defines the information of an application in multi-app mode in the running state.

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## bundleName

```TypeScript
bundleName: string
```

Bundle name of the application.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## mode

```TypeScript
mode: MultiAppMode
```

Multi-app mode.

**Type:** MultiAppMode

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## runningAppClones

```TypeScript
runningAppClones?: Array<RunningAppClone>
```

Information about application clones with the specific bundle name in the running state.

**Type:** Array<RunningAppClone>

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## runningMultiInstances

```TypeScript
runningMultiInstances?: Array<RunningMultiInstanceInfo>
```

Information about a multi-instance application with the specific bundle name in the running state.

**Type:** Array<RunningMultiInstanceInfo>

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

