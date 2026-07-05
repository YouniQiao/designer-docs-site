# EfficiencyResourcesCpuLevel

```TypeScript
export enum EfficiencyResourcesCpuLevel
```

能效资源CPU级别。

**Since:** 23

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## SMALL_CPU

```TypeScript
SMALL_CPU = 0
```

表示运行在小核，用于处理轻量级后台任务，CPU频点较低。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## MEDIUM_CPU

```TypeScript
MEDIUM_CPU = 1
```

表示最高可以运行在中核，系统基于负载决策运行在小核或中核。平衡性能与能效，用于需要处理复杂任务的场景，CPU频点高。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

## LARGE_CPU

```TypeScript
LARGE_CPU = 2
```

表示最高可以运行在大核，系统基于负载决策运行在小核、中核或大核。 极致性能，用于应对重载任务的场景，CPU频点最高。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.EfficiencyResourcesApply

**System API:** This is a system API.

