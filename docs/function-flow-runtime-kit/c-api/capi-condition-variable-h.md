# condition_variable.h

## Overview

Declares the condition variable interfaces in C.

**Library**: libffrt.z.so

**System capability**: SystemCapability.Resourceschedule.Ffrt.Core

**Since**: 10

**Related module**: [FFRT](capi-ffrt.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [FFRT_C_API int ffrt_cond_init(ffrt_cond_t* cond, const ffrt_condattr_t* attr)](#ffrt_cond_init) | Initializes a condition variable. |
| [FFRT_C_API int ffrt_cond_signal(ffrt_cond_t* cond)](#ffrt_cond_signal) | Unblocks at least one of the threads that are blocked on a condition variable. |
| [FFRT_C_API int ffrt_cond_broadcast(ffrt_cond_t* cond)](#ffrt_cond_broadcast) | Unblocks all threads currently blocked on a condition variable. |
| [FFRT_C_API int ffrt_cond_wait(ffrt_cond_t* cond, ffrt_mutex_t* mutex)](#ffrt_cond_wait) | Blocks the calling thread. |
| [FFRT_C_API int ffrt_cond_timedwait(ffrt_cond_t* cond, ffrt_mutex_t* mutex, const struct timespec* time_point)](#ffrt_cond_timedwait) | Blocks the calling thread for a given duration.If <b>ffrt_cond_signal</b> or <b>ffrt_cond_broadcast</b> is not called to unblock the threadwhen the maximum duration reaches, the thread is automatically unblocked. |
| [FFRT_C_API int ffrt_cond_destroy(ffrt_cond_t* cond)](#ffrt_cond_destroy) | Destroys a condition variable, the user needs to invoke this interface. |

## Function description

### ffrt_cond_init()

```c
FFRT_C_API int ffrt_cond_init(ffrt_cond_t* cond, const ffrt_condattr_t* attr)
```

**Description**

Initializes a condition variable.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_cond_t](capi-ffrt-ffrt-cond-t.md)* cond | Indicates a pointer to the condition variable. |
| [const ffrt_condattr_t](capi-ffrt-ffrt-condattr-t.md)* attr | Indicates a pointer to the condition variable attribute. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the condition variable is initialized;<br>         <b>ffrt_error_inval</b> otherwise. |

### ffrt_cond_signal()

```c
FFRT_C_API int ffrt_cond_signal(ffrt_cond_t* cond)
```

**Description**

Unblocks at least one of the threads that are blocked on a condition variable.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_cond_t](capi-ffrt-ffrt-cond-t.md)* cond | Indicates a pointer to the condition variable. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the thread is unblocked;<br>         <b>ffrt_error_inval</b> otherwise. |

### ffrt_cond_broadcast()

```c
FFRT_C_API int ffrt_cond_broadcast(ffrt_cond_t* cond)
```

**Description**

Unblocks all threads currently blocked on a condition variable.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_cond_t](capi-ffrt-ffrt-cond-t.md)* cond | Indicates a pointer to the condition variable. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the threads are unblocked;<br>         <b>ffrt_error_inval</b> otherwise. |

### ffrt_cond_wait()

```c
FFRT_C_API int ffrt_cond_wait(ffrt_cond_t* cond, ffrt_mutex_t* mutex)
```

**Description**

Blocks the calling thread.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_cond_t](capi-ffrt-ffrt-cond-t.md)* cond | Indicates a pointer to the condition variable. |
| [ffrt_mutex_t](capi-ffrt-ffrt-mutex-t.md)* mutex | Indicates a pointer to the mutex. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the thread is unblocked after being blocked;<br>         <b>ffrt_error_inval</b> otherwise. |

### ffrt_cond_timedwait()

```c
FFRT_C_API int ffrt_cond_timedwait(ffrt_cond_t* cond, ffrt_mutex_t* mutex, const struct timespec* time_point)
```

**Description**

Blocks the calling thread for a given duration.If <b>ffrt_cond_signal</b> or <b>ffrt_cond_broadcast</b> is not called to unblock the threadwhen the maximum duration reaches, the thread is automatically unblocked.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_cond_t](capi-ffrt-ffrt-cond-t.md)* cond | Indicates a pointer to the condition variable. |
| [ffrt_mutex_t](capi-ffrt-ffrt-mutex-t.md)* mutex | Indicates a pointer to the mutex. |
| const struct timespec* time_point | Indicates the maximum duration that the thread is blocked. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the thread is unblocked after being blocked;<br>         <b>ffrt_error_timedout</b> if the maximum duration reaches;<br>         <b>ffrt_error_inval</b> if the blocking fails. |

### ffrt_cond_destroy()

```c
FFRT_C_API int ffrt_cond_destroy(ffrt_cond_t* cond)
```

**Description**

Destroys a condition variable, the user needs to invoke this interface.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_cond_t](capi-ffrt-ffrt-cond-t.md)* cond | Indicates a pointer to the condition variable. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the condition variable is destroyed;<br>         <b>ffrt_error_inval</b> otherwise. |


