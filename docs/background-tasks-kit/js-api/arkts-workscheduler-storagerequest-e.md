# StorageRequest

```TypeScript
export enum StorageRequest
```

触发延迟任务回调的存储状态。

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## STORAGE_LEVEL_LOW

```TypeScript
STORAGE_LEVEL_LOW = 0
```

表示这个触发条件是存储空间不足。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## STORAGE_LEVEL_OKAY

```TypeScript
STORAGE_LEVEL_OKAY = 1
```

表示这个触发条件是从存储空间不足恢复到正常。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## STORAGE_LEVEL_LOW_OR_OKAY

```TypeScript
STORAGE_LEVEL_LOW_OR_OKAY = 2
```

表示这个触发条件是存储空间不足或者从存储空间不足恢复到正常。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

