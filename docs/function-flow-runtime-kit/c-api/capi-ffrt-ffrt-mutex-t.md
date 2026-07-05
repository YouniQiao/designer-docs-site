# ffrt_mutex_t

```c
typedef struct ffrt_mutex_t {...} ffrt_mutex_t
```

## Overview

Defines the mutex structure.

**Since**: 10

**Related module**: [FFRT](capi-ffrt.md)

**Header file**: [type_def.h](capi-type-def-h.md)

## Summary

### Member functions

| Name | Description |
| -- | -- |
| [uint32_t storage[(ffrt_mutex_storage_size + sizeof(uint32_t) - 1) / sizeof(uint32_t)]](#sizeof) | An array of uint32_t used to store the mutex. |

## Member function description

### sizeof()

```c
uint32_t storage[(ffrt_mutex_storage_size + sizeof(uint32_t) - 1) / sizeof(uint32_t)]
```

**Description**

An array of uint32_t used to store the mutex.


