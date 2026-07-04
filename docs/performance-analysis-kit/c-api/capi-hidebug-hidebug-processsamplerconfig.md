# HiDebug_ProcessSamplerConfig

```c
typedef struct HiDebug_ProcessSamplerConfig {...} HiDebug_ProcessSamplerConfig
```

## Overview

Defines a struct for the process sampler configuration.

**Since**: 22

**Related module**: [HiDebug](capi-hidebug.md)

**Header file**: [hidebug_type.h](capi-hidebug-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| uint32_t* tids | The threads id |
| uint32_t size | The threads num |
| uint32_t frequency | The frequency of the sampling |
| uint32_t duration | The duration of the sampling |
| uint32_t reserved | The reserved of the sampling |


