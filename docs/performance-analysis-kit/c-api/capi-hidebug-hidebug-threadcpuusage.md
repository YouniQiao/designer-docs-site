# HiDebug_ThreadCpuUsage

```c
typedef struct HiDebug_ThreadCpuUsage {...} HiDebug_ThreadCpuUsage
```

## Overview

Defines application cpu usage of all threads structure type.

**Since**: 12

**Related module**: [HiDebug](capi-hidebug.md)

**Header file**: [hidebug_type.h](capi-hidebug-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| uint32_t threadId | Thread id |
| double cpuUsage | Cpu usage of thread |
| struct [HiDebug_ThreadCpuUsage](capi-hidebug-hidebug-threadcpuusage.md) *next | Next thread cpu usage |


