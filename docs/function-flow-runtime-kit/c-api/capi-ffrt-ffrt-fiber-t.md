# ffrt_fiber_t

```c
typedef struct ffrt_fiber_t {...} ffrt_fiber_t
```

## Overview

Defines the fiber structure.

**Since**: 20

**Related module**: [FFRT](capi-ffrt.md)

**Header file**: [type_def.h](capi-type-def-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| uintptr_t storage[ffrt_fiber_storage_size] | An array of uint32_t used to store the fiber. |


