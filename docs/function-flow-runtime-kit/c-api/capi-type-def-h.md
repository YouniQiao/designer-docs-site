# type_def.h

## Overview

Declares common types.

**Library**: libffrt.z.so

**System capability**: SystemCapability.Resourceschedule.Ffrt.Core

**Since**: 10

**Related module**: [FFRT](capi-ffrt.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ffrt_function_header_t](capi-ffrt-ffrt-function-header-t.md) | ffrt_function_header_t | Defines a task executor. |
| [ffrt_dependence_t](capi-ffrt-ffrt-dependence-t.md) | ffrt_dependence_t | Defines the dependency data structure. |
| [ffrt_deps_t](capi-ffrt-ffrt-deps-t.md) | ffrt_deps_t | Defines the dependency structure. |
| [ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md) | ffrt_task_attr_t | Defines the task attribute structure. |
| [ffrt_queue_attr_t](capi-ffrt-ffrt-queue-attr-t.md) | ffrt_queue_attr_t | Defines the queue attribute structure. |
| [ffrt_condattr_t](capi-ffrt-ffrt-condattr-t.md) | ffrt_condattr_t | Defines the condition variable attribute structure. |
| [ffrt_mutexattr_t](capi-ffrt-ffrt-mutexattr-t.md) | ffrt_mutexattr_t | Defines the mutex attribute structure. |
| [ffrt_rwlockattr_t](capi-ffrt-ffrt-rwlockattr-t.md) | ffrt_rwlockattr_t | Defines the rwlock attribute structure. |
| [ffrt_mutex_t](capi-ffrt-ffrt-mutex-t.md) | ffrt_mutex_t | Defines the mutex structure. |
| [ffrt_rwlock_t](capi-ffrt-ffrt-rwlock-t.md) | ffrt_rwlock_t | Defines the rwlock structure. |
| [ffrt_cond_t](capi-ffrt-ffrt-cond-t.md) | ffrt_cond_t | Defines the condition variable structure. |
| [ffrt_fiber_t](capi-ffrt-ffrt-fiber-t.md) | ffrt_fiber_t | Defines the fiber structure. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ffrt_queue_priority_t](#ffrt_queue_priority_t) | ffrt_queue_priority_t | Enumerates the task priority types. |
| [ffrt_qos_default_t](#ffrt_qos_default_t) | ffrt_qos_default_t | Enumerates the task QoS types. |
| [ffrt_storage_size_t](#ffrt_storage_size_t) | ffrt_storage_size_t | Defines the storage size of multiple types of structs. |
| [ffrt_function_kind_t](#ffrt_function_kind_t) | ffrt_function_kind_t | Enumerates the task types. |
| [ffrt_dependence_type_t](#ffrt_dependence_type_t) | ffrt_dependence_type_t | Enumerates the dependency types. |
| [ffrt_error_t](#ffrt_error_t) | ffrt_error_t | Enumerates the ffrt error codes. |
| [ffrt_mutex_type](#ffrt_mutex_type) | ffrt_mutex_type | Enumerates the mutex types.Describes the mutex type, ffrt_mutex_normal is normal mutex;ffrt_mutex_recursive is recursive mutex, ffrt_mutex_default is normal mutex. |
| [qos_default](#qos_default) | - | Enumerates the task QoS types. |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [typedef void(\*ffrt_function_t)(void*)](#ffrt_function_t) | ffrt_function_t | Defines the task function pointer type. |
| [typedef void (\*ffrt_poller_cb)(void* data, uint32_t event)](#ffrt_poller_cb) | ffrt_poller_cb | Defines the poller callback function type. |
| [typedef void (\*ffrt_timer_cb)(void* data)](#ffrt_timer_cb) | ffrt_timer_cb | Defines the timer callback function type. |

### Variable

| Name | Description |
| -- | -- |
| [ffrt_storage_size_t](capi-type-def-h.md#ffrt_storage_size_t)  | Defines the storage size of multiple types of structs.<br>**Since**: 20 |
| using qos = int | Defines the QoS type.<br>**Since**: 10 |

## Enum type description

### ffrt_queue_priority_t

```c
enum ffrt_queue_priority_t
```

**Description**

Enumerates the task priority types.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ffrt_queue_priority_immediate = 0 | Should be distributed at once if possible, handle time equals send time, prior to high level. |
| ffrt_queue_priority_high | High priority, sorted by handle time, prior to low level. |
| ffrt_queue_priority_low | Low priority, sorted by handle time, prior to idle level. |
| ffrt_queue_priority_idle | Lowest priority, sorted by handle time, only distribute when there is no other level inside the queue. |

### ffrt_qos_default_t

```c
enum ffrt_qos_default_t
```

**Description**

Enumerates the task QoS types.

**Since**: 10

| Enum item | Description |
| -- | -- |
| ffrt_qos_inherit = -1 | Inheritance. |
| ffrt_qos_background | Background task. |
| ffrt_qos_utility | Real-time utility. |
| ffrt_qos_default | Default type. |
| ffrt_qos_user_initiated | User initiated. |
| ffrt_qos_deadline_request |  |
| ffrt_qos_user_interactive |  |
| ffrt_qos_max = ffrt_qos_user_interactive |  |

### ffrt_storage_size_t

```c
enum ffrt_storage_size_t
```

**Description**

Defines the storage size of multiple types of structs.

**Since**: 10

| Enum item | Description |
| -- | -- |
| ffrt_task_attr_storage_size = 128 | Task attribute storage size. |
| ffrt_auto_managed_function_storage_size = 64 + sizeof(ffrt_function_header_t) | Task executor storage size. |
| ffrt_mutex_storage_size = 64 | Mutex storage size. |
| ffrt_cond_storage_size = 64 | Condition variable storage size. |
| ffrt_queue_attr_storage_size = 128 | Queue storage size. |
| ffrt_rwlock_storage_size = 64 |  |
| #if defined(__aarch64__) |  |

### ffrt_function_kind_t

```c
enum ffrt_function_kind_t
```

**Description**

Enumerates the task types.

**Since**: 10

| Enum item | Description |
| -- | -- |
| ffrt_function_kind_general | General task. |
| ffrt_function_kind_queue | Queue task. |

### ffrt_dependence_type_t

```c
enum ffrt_dependence_type_t
```

**Description**

Enumerates the dependency types.

**Since**: 10

| Enum item | Description |
| -- | -- |
| ffrt_dependence_data | Data dependency type. |
| ffrt_dependence_task | Task dependency type. |

### ffrt_error_t

```c
enum ffrt_error_t
```

**Description**

Enumerates the ffrt error codes.

**Since**: 10

| Enum item | Description |
| -- | -- |
| ffrt_error = -1 | A generic error. |
| ffrt_success = 0 | Success. |
| ffrt_error_nomem = ENOMEM | An out of memory error. |
| ffrt_error_timedout = ETIMEDOUT | A timeout error. |
| ffrt_error_busy = EBUSY | A busy error. |
| ffrt_error_inval = EINVAL | An invalid value error. |

### ffrt_mutex_type

```c
enum ffrt_mutex_type
```

**Description**

Enumerates the mutex types.Describes the mutex type, ffrt_mutex_normal is normal mutex;ffrt_mutex_recursive is recursive mutex, ffrt_mutex_default is normal mutex.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ffrt_mutex_normal = 0 | Normal mutex type. |
| ffrt_mutex_recursive = 2 | Recursive mutex type. |
| ffrt_mutex_default = ffrt_mutex_normal | Default mutex type. |

### qos_default

```c
enum qos_default
```

**Description**

Enumerates the task QoS types.

**Since**: 10

| Enum item | Description |
| -- | -- |
| qos_inherit = ffrt_qos_inherit | Inheritance. |
| qos_background = ffrt_qos_background | Background task. |
| qos_utility = ffrt_qos_utility | Real-time utility. |
| qos_default = ffrt_qos_default | Default type. |
| qos_user_initiated = ffrt_qos_user_initiated | User initiated. |
| qos_deadline_request = ffrt_qos_deadline_request |  |
| qos_user_interactive = ffrt_qos_user_interactive |  |
| qos_max = ffrt_qos_user_interactive |  |


## Function description

### ffrt_function_t()

```c
typedef void(*ffrt_function_t)(void*)
```

**Description**

Defines the task function pointer type.

**Since**: 10

### ffrt_poller_cb()

```c
typedef void (*ffrt_poller_cb)(void* data, uint32_t event)
```

**Description**

Defines the poller callback function type.

**Since**: 12

### ffrt_timer_cb()

```c
typedef void (*ffrt_timer_cb)(void* data)
```

**Description**

Defines the timer callback function type.

**Since**: 12


