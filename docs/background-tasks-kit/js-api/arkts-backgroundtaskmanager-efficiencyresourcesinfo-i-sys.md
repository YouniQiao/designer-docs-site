# EfficiencyResourcesInfo

能效资源信息。

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
```

## uid

```TypeScript
uid: int
```

应用的UID。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## reason

```TypeScript
reason: string
```

申请资源原因。

**Type:** string

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## resourceTypes

```TypeScript
resourceTypes: int
```

能效资源类型。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## isForProcess

```TypeScript
isForProcess: boolean
```

进程或应用申请，取值为true表示进程申请。取值为false表示应用申请。

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## isPersistent

```TypeScript
isPersistent: boolean
```

是否永久持有资源，默认为false。取值为true表示永久持有。取值为false表示有限时间内持有。

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## pid

```TypeScript
pid: int
```

应用进程的PID。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## timeout

```TypeScript
timeout: int
```

超时时间，单位：ms。

**Type:** int

**Since:** 20

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

