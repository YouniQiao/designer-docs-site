# loop.h

## Overview

Declares the loop interfaces in C.

**Library**: libffrt.z.so

**System capability**: SystemCapability.Resourceschedule.Ffrt.Core

**Since**: 12

**Related module**: [FFRT](capi-ffrt.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [FFRT_C_API ffrt_loop_t ffrt_loop_create(ffrt_queue_t queue)](#ffrt_loop_create) | Creates a loop. |
| [FFRT_C_API int ffrt_loop_destroy(ffrt_loop_t loop)](#ffrt_loop_destroy) | Destroys a loop, the user needs to invoke this interface. |
| [FFRT_C_API int ffrt_loop_run(ffrt_loop_t loop)](#ffrt_loop_run) | Starts a loop run. |
| [FFRT_C_API void ffrt_loop_stop(ffrt_loop_t loop)](#ffrt_loop_stop) | Stops a loop run. |
| [FFRT_C_API int ffrt_loop_epoll_ctl(ffrt_loop_t loop, int op, int fd, uint32_t events, void *data, ffrt_poller_cb cb)](#ffrt_loop_epoll_ctl) | Controls an epoll file descriptor on ffrt loop. |
| [FFRT_C_API ffrt_timer_t ffrt_loop_timer_start(ffrt_loop_t loop, uint64_t timeout, void* data, ffrt_timer_cb cb, bool repeat)](#ffrt_loop_timer_start) | Starts a timer on ffrt loop. |
| [FFRT_C_API int ffrt_loop_timer_stop(ffrt_loop_t loop, ffrt_timer_t handle)](#ffrt_loop_timer_stop) | Stops a timer on ffrt loop. |

## Function description

### ffrt_loop_create()

```c
FFRT_C_API ffrt_loop_t ffrt_loop_create(ffrt_queue_t queue)
```

**Description**

Creates a loop.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_queue_t queue | Indicates a queue. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API ffrt_loop_t | A non-null loop handle if the loop is created;<br>         a null pointer otherwise. |

### ffrt_loop_destroy()

```c
FFRT_C_API int ffrt_loop_destroy(ffrt_loop_t loop)
```

**Description**

Destroys a loop, the user needs to invoke this interface.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_loop_t loop | Indicates a loop handle. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>0</b> if the loop is destroyed;<br>         <b>-1</b> otherwise. |

### ffrt_loop_run()

```c
FFRT_C_API int ffrt_loop_run(ffrt_loop_t loop)
```

**Description**

Starts a loop run.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_loop_t loop | Indicates a loop handle. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>-1</b> if the loop run fails;<br>         <b>0</b> otherwise. |

### ffrt_loop_stop()

```c
FFRT_C_API void ffrt_loop_stop(ffrt_loop_t loop)
```

**Description**

Stops a loop run.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_loop_t loop | Indicates a loop handle. |

### ffrt_loop_epoll_ctl()

```c
FFRT_C_API int ffrt_loop_epoll_ctl(ffrt_loop_t loop, int op, int fd, uint32_t events, void *data, ffrt_poller_cb cb)
```

**Description**

Controls an epoll file descriptor on ffrt loop.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_loop_t loop | Indicates a loop handle. |
| int op | Indicates operation on the target file descriptor. |
| int fd | Indicates the target file descriptor on which to perform the operation. |
| uint32_t events | Indicates the event type associated with the target file descriptor. |
| void *data | Indicates user data used in cb. |
| [ffrt_poller_cb](capi-type-def-h.md#ffrt_poller_cb) cb | Indicates user cb which will be executed when the target fd is polled. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>0</b> if the operation succeeds;<br>         <b>-1</b> otherwise. |

### ffrt_loop_timer_start()

```c
FFRT_C_API ffrt_timer_t ffrt_loop_timer_start(ffrt_loop_t loop, uint64_t timeout, void* data, ffrt_timer_cb cb, bool repeat)
```

**Description**

Starts a timer on ffrt loop.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_loop_t loop | Indicates a loop handle. |
| uint64_t timeout | Indicates the number of milliseconds that specifies timeout. |
| void* data | Indicates user data used in cb. |
| [ffrt_timer_cb](capi-type-def-h.md#ffrt_timer_cb) cb | Indicates user cb which will be executed when timeout. |
| bool repeat | Indicates whether to repeat this timer. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API ffrt_timer_t | The timer handle. |

### ffrt_loop_timer_stop()

```c
FFRT_C_API int ffrt_loop_timer_stop(ffrt_loop_t loop, ffrt_timer_t handle)
```

**Description**

Stops a timer on ffrt loop.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_loop_t loop | Indicates a loop handle. |
| ffrt_timer_t handle | Indicates the target timer handle. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>0</b> if the operation succeeds;<br>         <b>-1</b> otherwise. |


