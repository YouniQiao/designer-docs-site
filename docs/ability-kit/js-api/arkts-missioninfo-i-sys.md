# MissionInfo

表示任务的详细信息，可以通过 [getMissionInfo]./../@ohos.app.ability.missionManager:missionManager.getMissionInfo(deviceId: string, missionId: int, callback: AsyncCallback<MissionInfo>) 获取。

**Since:** 8

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

## continuable

```TypeScript
continuable: boolean
```

表示任务是否可以迁移。返回true表示可以迁移，返回false表示不可迁移。

**Type:** boolean

**Since:** 8

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

## missionId

```TypeScript
missionId: int
```

表示任务ID。

**Type:** int

**Since:** 8

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

## unclearable

```TypeScript
unclearable: boolean
```

表示任务是否可以被用户手动删除。返回true表示可以被用户手动删除，返回false表示不可被用户手动删除。

**Type:** boolean

**Since:** 10

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

## want

```TypeScript
want: Want
```

表示任务的Want信息。

**Type:** Want

**Since:** 8

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

## runningState

```TypeScript
runningState: int
```

表示运行状态。

**Type:** int

**Since:** 8

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

## label

```TypeScript
label: string
```

表示任务的标签。

**Type:** string

**Since:** 8

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

## iconPath

```TypeScript
iconPath: string
```

表示任务的图标路径。

**Type:** string

**Since:** 8

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

## abilityState

```TypeScript
abilityState: int
```

表示此任务的能力状态。

**Type:** int

**Since:** 10

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

## lockedState

```TypeScript
lockedState: boolean
```

表示锁定状态。返回true表示锁定状态，返回false表示未锁定状态。

**Type:** boolean

**Since:** 8

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

## timestamp

```TypeScript
timestamp: string
```

表示任务的最近创建或更新时间。

**Type:** string

**Since:** 8

**System capability:** SystemCapability.Ability.AbilityRuntime.Mission

**System API:** This is a system API.

