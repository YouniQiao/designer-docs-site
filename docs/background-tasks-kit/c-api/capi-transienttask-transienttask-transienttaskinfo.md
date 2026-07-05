# TransientTask_TransientTaskInfo

```c
typedef struct TransientTask_TransientTaskInfo {...} TransientTask_TransientTaskInfo
```

## Overview

A struct that describes all transient task information. The struct returns all transient task information,including the remaining quota of the current day.

**Since**: 20

**Related module**: [TransientTask](capi-transienttask.md)

**Header file**: [transient_task_type.h](capi-transient-task-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| int32_t remainingQuota |  |
| [TransientTask_DelaySuspendInfo](capi-transienttask-transienttask-delaysuspendinfo.md) transientTasks[TRANSIENT_TASK_MAX_NUM] |  |


