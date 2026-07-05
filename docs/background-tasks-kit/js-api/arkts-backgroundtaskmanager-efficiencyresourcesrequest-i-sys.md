# EfficiencyResourcesRequest

能效资源申请参数。

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
```

## isApply

```TypeScript
isApply: boolean
```

申请或释放资源。 - true表示申请资源。 - false表示释放部分资源。

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## reason

```TypeScript
reason: string
```

申请资源原因。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## resourceTypes

```TypeScript
resourceTypes: int
```

申请的资源类型。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## isProcess

```TypeScript
isProcess?: boolean
```

进程或应用申请，默认为false。 - true表示进程申请。 - false表示应用申请。

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## isPersist

```TypeScript
isPersist?: boolean
```

是否永久持有资源，默认为false。 - true表示永久持有 - false表示有限时间内持有。

**Type:** boolean

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## cpuLevel

```TypeScript
cpuLevel?: EfficiencyResourcesCpuLevel
```

指定CPU级别，能效资源类型resourceTypes为CPU时该参数用于指定CPU资源大小，系统会在负载空闲时间（例如灭屏场景）分配指定的CPU资源给应用。

**Type:** EfficiencyResourcesCpuLevel

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## timeOut

```TypeScript
timeOut: int
```

资源使用时间，单位：ms。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

