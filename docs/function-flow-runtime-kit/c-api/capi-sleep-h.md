# sleep.h

## Overview

Declares the sleep and yield interfaces in C.

**Library**: libffrt.z.so

**System capability**: SystemCapability.Resourceschedule.Ffrt.Core

**Since**: 10

**Related module**: [FFRT](capi-ffrt.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [FFRT_C_API int ffrt_usleep(uint64_t usec)](#ffrt_usleep) | Suspends the calling thread for a given duration. |
| [FFRT_C_API void ffrt_yield(void)](#ffrt_yield) | Passes control to other tasks so that they can be executed. |

## Function description

### ffrt_usleep()

```c
FFRT_C_API int ffrt_usleep(uint64_t usec)
```

**Description**

Suspends the calling thread for a given duration.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| uint64_t usec | Indicates the duration that the calling thread is suspended, in microseconds. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the thread is suspended;<br>         <b>ffrt_error</b> otherwise. |

### ffrt_yield()

```c
FFRT_C_API void ffrt_yield(void)
```

**Description**

Passes control to other tasks so that they can be executed.

**Since**: 10


