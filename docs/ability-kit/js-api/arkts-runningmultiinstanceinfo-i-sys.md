# RunningMultiInstanceInfo

定义多实例应用在运行态的结构信息，通过appManager的 [getRunningMultiAppInfo]./../@ohos.app.ability.appManager:appManager.getRunningMultiAppInfo来获取。

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## uid

```TypeScript
uid: int
```

表示应用程序的UID。

**Type:** int

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## pids

```TypeScript
pids: Array<int>
```

应用的进程ID集合。

**Type:** Array<int>

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## instanceKey

```TypeScript
instanceKey: string
```

多实例应用的唯一实例标识。

**Type:** string

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

