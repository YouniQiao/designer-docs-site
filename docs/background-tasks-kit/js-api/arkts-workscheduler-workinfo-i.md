# WorkInfo

延迟任务的具体信息, 用于设置延迟任务的触发条件等。

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## Modules to Import

```TypeScript
import { workScheduler } from '@kit.BackgroundTasksKit';
```

## isDeepIdle

```TypeScript
isDeepIdle?: boolean
```

是否要求设备进入空闲状态，默认为false。 - true表示需要。 - false表示不需要。

**Type:** boolean

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## repeatCycleTime

```TypeScript
repeatCycleTime?: int
```

循环间隔，单位：ms。

**Type:** int

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## isCharging

```TypeScript
isCharging?: boolean
```

是否充电，默认为false。 - true表示充电触发延迟任务回调。 - false表示不充电触发延迟任务回调。

**Type:** boolean

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## isPersisted

```TypeScript
isPersisted?: boolean
```

注册的延迟任务是否可保存在系统中，默认为false。 - true表示可保存，即系统重启后，任务可恢复。 - false表示不可保存。

**Type:** boolean

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## storageRequest

```TypeScript
storageRequest?: StorageRequest
```

存储状态。

**Type:** StorageRequest

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## workId

```TypeScript
workId: int
```

延迟任务ID。

**Type:** int

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## earliestStartTime

```TypeScript
earliestStartTime?: int
```

任务首次执行时间距离任务申请时间的间隔，单位：ms，默认为0，范围大于等于0。 取值范围为全体整数。

**Type:** int

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## batteryStatus

```TypeScript
batteryStatus?: BatteryStatus
```

电池状态。

**Type:** BatteryStatus

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## abilityName

```TypeScript
abilityName: string
```

包内ability名称。

**Type:** string

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## bundleName

```TypeScript
bundleName: string
```

延迟任务所在应用的包名。

**Type:** string

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## isRepeat

```TypeScript
isRepeat?: boolean
```

是否循环任务，默认为false。 - true表示循环任务。 - false表示非循环任务。

**Type:** boolean

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## chargerType

```TypeScript
chargerType?: ChargingType
```

充电类型。

**Type:** ChargingType

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## networkType

```TypeScript
networkType?: NetworkType
```

网络类型。

**Type:** NetworkType

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## parameters

```TypeScript
parameters?: Record<string, int | double | string | boolean>
```

携带参数信息。

**Type:** Record<string, int | double | string | boolean>

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## idleWaitTime

```TypeScript
idleWaitTime?: int
```

空闲等待时间，单位：ms。

**Type:** int

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## repeatCount

```TypeScript
repeatCount?: int
```

循环次数。

**Type:** int

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## batteryLevel

```TypeScript
batteryLevel?: int
```

电量。 取值范围：[0, 100]

**Type:** int

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

