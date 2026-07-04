# HiDebug_MemoryLimit

```c
typedef struct HiDebug_MemoryLimit {...} HiDebug_MemoryLimit
```

## Overview

Defines application process memory limit structure type.

**Since**: 12

**Related module**: [HiDebug](capi-hidebug.md)

**Header file**: [hidebug_type.h](capi-hidebug-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| uint64_t rssLimit | The limit of the application process's resident set, in kibibytes |
| uint64_t vssLimit | The limit of the application process's virtual memory, in kibibytes |


