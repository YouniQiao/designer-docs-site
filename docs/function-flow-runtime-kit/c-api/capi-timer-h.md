# timer.h

## Overview

Declares the timer interfaces in C.

**Library**: libffrt.z.so

**System capability**: SystemCapability.Resourceschedule.Ffrt.Core

**Since**: 12

**Related module**: [FFRT](capi-ffrt.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [FFRT_C_API ffrt_timer_t ffrt_timer_start(ffrt_qos_t qos, uint64_t timeout, void* data, ffrt_timer_cb cb, bool repeat)](#ffrt_timer_start) | Starts a timer on an ffrt worker. |
| [FFRT_C_API int ffrt_timer_stop(ffrt_qos_t qos, ffrt_timer_t handle)](#ffrt_timer_stop) | Stops a timer on ffrt worker. |

## Function description

### ffrt_timer_start()

```c
FFRT_C_API ffrt_timer_t ffrt_timer_start(ffrt_qos_t qos, uint64_t timeout, void* data, ffrt_timer_cb cb, bool repeat)
```

**Description**

Starts a timer on an ffrt worker.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_qos_t qos | Indicates the QoS of the worker that runs timer. |
| uint64_t timeout | Indicates the number of milliseconds that specifies timeout. |
| void* data | Indicates user data used in cb. |
| [ffrt_timer_cb](capi-type-def-h.md#ffrt_timer_cb) cb | Indicates user cb which will be executed when timeout. |
| bool repeat | Indicates whether to repeat this timer. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API ffrt_timer_t | A timer handle. |

### ffrt_timer_stop()

```c
FFRT_C_API int ffrt_timer_stop(ffrt_qos_t qos, ffrt_timer_t handle)
```

**Description**

Stops a timer on ffrt worker.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_qos_t qos | Indicates the QoS of the worker that runs timer. |
| ffrt_timer_t handle | Indicates the target timer handle. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>0</b> if success;<br>         <b>-1</b> otherwise. |


