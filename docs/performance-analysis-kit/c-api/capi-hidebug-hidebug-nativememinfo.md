# HiDebug_NativeMemInfo

```c
typedef struct HiDebug_NativeMemInfo {...} HiDebug_NativeMemInfo
```

## Overview

Defines application process native memory information structure type.

**Since**: 12

**Related module**: [HiDebug](capi-hidebug.md)

**Header file**: [hidebug_type.h](capi-hidebug-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| uint32_t pss | Process proportional set size memory, in kibibytes |
| uint32_t vss | Virtual set size memory, in kibibytes |
| uint32_t rss | Resident set size, in kibibytes |
| uint32_t sharedDirty | The size of the shared dirty memory, in kibibytes |
| uint32_t privateDirty | The size of the private dirty memory, in kibibytes |
| uint32_t sharedClean | The size of the shared clean memory, in kibibytes |
| uint32_t privateClean | The size of the private clean memory, in kibibytes |


