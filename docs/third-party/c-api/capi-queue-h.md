# queue.h

## Overview

Declares the queue interfaces in C.

**Library**: libffrt.z.so

**System capability**: SystemCapability.Resourceschedule.Ffrt.Core

**Since**: 10

**Related module**: [FFRT](capi-ffrt.md)

## Summary

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ffrt_queue_type_t](#ffrt_queue_type_t) | ffrt_queue_type_t | Enumerates the queue types. |

### Function

| Name | Description |
| -- | -- |
| [FFRT_C_API int ffrt_queue_attr_init(ffrt_queue_attr_t* attr)](#ffrt_queue_attr_init) | Initializes a queue attribute. |
| [FFRT_C_API void ffrt_queue_attr_destroy(ffrt_queue_attr_t* attr)](#ffrt_queue_attr_destroy) | Destroys a queue attribute, the user needs to invoke this interface. |
| [FFRT_C_API void ffrt_queue_attr_set_qos(ffrt_queue_attr_t* attr, ffrt_qos_t qos)](#ffrt_queue_attr_set_qos) | Sets the QoS for a queue attribute. |
| [FFRT_C_API ffrt_qos_t ffrt_queue_attr_get_qos(const ffrt_queue_attr_t* attr)](#ffrt_queue_attr_get_qos) | Gets the QoS of a queue attribute. |
| [FFRT_C_API void ffrt_queue_attr_set_timeout(ffrt_queue_attr_t* attr, uint64_t timeout_us)](#ffrt_queue_attr_set_timeout) | Sets the execution timeout of a serial queue attribute.The lower limit of timeout value is 1 ms, if the value is less than 1 ms, it will be set to 1 ms. |
| [FFRT_C_API uint64_t ffrt_queue_attr_get_timeout(const ffrt_queue_attr_t* attr)](#ffrt_queue_attr_get_timeout) | Gets the execution timeout of a serial queue attribute. |
| [FFRT_C_API void ffrt_queue_attr_set_callback(ffrt_queue_attr_t* attr, ffrt_function_header_t* f)](#ffrt_queue_attr_set_callback) | Sets the timeout callback function of a serial queue attribute. |
| [FFRT_C_API ffrt_function_header_t* ffrt_queue_attr_get_callback(const ffrt_queue_attr_t* attr)](#ffrt_queue_attr_get_callback) | Gets the timeout callback function of a serial queue attribute. |
| [FFRT_C_API void ffrt_queue_attr_set_max_concurrency(ffrt_queue_attr_t* attr, const int max_concurrency)](#ffrt_queue_attr_set_max_concurrency) | Sets the queue max concurrency of a queue attribute. |
| [FFRT_C_API int ffrt_queue_attr_get_max_concurrency(const ffrt_queue_attr_t* attr)](#ffrt_queue_attr_get_max_concurrency) | Gets the queue max concurrency of a queue attribute. |
| [FFRT_C_API void ffrt_queue_attr_set_thread_mode(ffrt_queue_attr_t* attr, bool mode)](#ffrt_queue_attr_set_thread_mode) | Sets the execution mode of a queue attribute.This interface specifies whether tasks in the queue are executed in coroutine mode or thread mode.By default, tasks are executed in coroutine mode.Set mode to <b>true</b> to enable thread-based execution. |
| [FFRT_C_API bool ffrt_queue_attr_get_thread_mode(const ffrt_queue_attr_t* attr)](#ffrt_queue_attr_get_thread_mode) | Gets the execution mode of a queue attribute.This interface returns whether tasks in the queue are configured to run in thread-based execution mode (thread mode). |
| [FFRT_C_API ffrt_queue_t ffrt_queue_create(ffrt_queue_type_t type, const char* name, const ffrt_queue_attr_t* attr)](#ffrt_queue_create) | Creates a queue. |
| [FFRT_C_API void ffrt_queue_destroy(ffrt_queue_t queue)](#ffrt_queue_destroy) | Destroys a queue, the user needs to invoke this interface. |
| [FFRT_C_API void ffrt_queue_submit(ffrt_queue_t queue, ffrt_function_header_t* f, const ffrt_task_attr_t* attr)](#ffrt_queue_submit) | Submits a task to a queue. |
| [FFRT_C_API ffrt_task_handle_t ffrt_queue_submit_h(ffrt_queue_t queue, ffrt_function_header_t* f, const ffrt_task_attr_t* attr)](#ffrt_queue_submit_h) | Submits a task to the queue, and obtains a task handle. |
| [FFRT_C_API void ffrt_queue_submit_f(ffrt_queue_t queue, ffrt_function_t func, void* arg, const ffrt_task_attr_t* attr)](#ffrt_queue_submit_f) | Submits a task to a queue, simplified from the ffrt_queue_submit interface.This interface wraps the provided task function and its argument into a task wrapper designedfor queue submission (ffrt_function_kind_queue). The task destroy callback (after_func), whichwould normally handle any post-execution cleanup, is automatically set to NULL in this wrapper,thus omitting any additional cleanup actions. The resulting task wrapper is then submitted tothe specified queue via the ffrt_queue_submit interface. |
| [FFRT_C_API ffrt_task_handle_t ffrt_queue_submit_h_f(ffrt_queue_t queue, ffrt_function_t func, void* arg, const ffrt_task_attr_t* attr)](#ffrt_queue_submit_h_f) | Submits a task to a queue, and obtains a task handle, simplified from the ffrt_queue_submit_h interface.This interface wraps the provided task function and its argument into a task wrapper designedfor queue submission (ffrt_function_kind_queue). The task destroy callback (after_func), whichwould normally handle any post-execution cleanup, is automatically set to NULL in this wrapper,thus omitting any additional cleanup actions. The resulting task wrapper is then submitted tothe specified queue via the ffrt_queue_submit_h interface. |
| [FFRT_C_API void ffrt_queue_wait(ffrt_task_handle_t handle)](#ffrt_queue_wait) | Waits until a task in the queue is complete. |
| [FFRT_C_API int ffrt_queue_cancel(ffrt_task_handle_t handle)](#ffrt_queue_cancel) | Cancels a task in the queue. |
| [FFRT_C_API ffrt_queue_t ffrt_get_main_queue(void)](#ffrt_get_main_queue) | Gets the application main thread queue. |
| [FFRT_C_API ffrt_queue_t ffrt_get_current_queue(void)](#ffrt_get_current_queue) | Gets the application worker (ArkTS) thread queue.(Deprecated in API18) |

## Enum type description

### ffrt_queue_type_t

```c
enum ffrt_queue_type_t
```

**Description**

Enumerates the queue types.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ffrt_queue_serial | Serial queue. |
| ffrt_queue_concurrent | Concurrent queue. |
| ffrt_queue_max | Invalid queue. |


## Function description

### ffrt_queue_attr_init()

```c
FFRT_C_API int ffrt_queue_attr_init(ffrt_queue_attr_t* attr)
```

**Description**

Initializes a queue attribute.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_queue_attr_t](capi-ffrt-ffrt-queue-attr-t.md)* attr | Indicates a pointer to the queue attribute. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>0</b> if the queue attribute is initialized;<br>         <b>-1</b> otherwise. |

### ffrt_queue_attr_destroy()

```c
FFRT_C_API void ffrt_queue_attr_destroy(ffrt_queue_attr_t* attr)
```

**Description**

Destroys a queue attribute, the user needs to invoke this interface.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_queue_attr_t](capi-ffrt-ffrt-queue-attr-t.md)* attr | Indicates a pointer to the queue attribute. |

### ffrt_queue_attr_set_qos()

```c
FFRT_C_API void ffrt_queue_attr_set_qos(ffrt_queue_attr_t* attr, ffrt_qos_t qos)
```

**Description**

Sets the QoS for a queue attribute.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_queue_attr_t](capi-ffrt-ffrt-queue-attr-t.md)* attr | Indicates a pointer to the queue attribute. |
| ffrt_qos_t qos | Indicates the QoS. |

### ffrt_queue_attr_get_qos()

```c
FFRT_C_API ffrt_qos_t ffrt_queue_attr_get_qos(const ffrt_queue_attr_t* attr)
```

**Description**

Gets the QoS of a queue attribute.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ffrt_queue_attr_t](capi-ffrt-ffrt-queue-attr-t.md)* attr | Indicates a pointer to the queue attribute. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API ffrt_qos_t | The QoS. |

### ffrt_queue_attr_set_timeout()

```c
FFRT_C_API void ffrt_queue_attr_set_timeout(ffrt_queue_attr_t* attr, uint64_t timeout_us)
```

**Description**

Sets the execution timeout of a serial queue attribute.The lower limit of timeout value is 1 ms, if the value is less than 1 ms, it will be set to 1 ms.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_queue_attr_t](capi-ffrt-ffrt-queue-attr-t.md)* attr | Serial queue attribute pointer. |
| uint64_t timeout_us | Serial queue task execution timeout. |

### ffrt_queue_attr_get_timeout()

```c
FFRT_C_API uint64_t ffrt_queue_attr_get_timeout(const ffrt_queue_attr_t* attr)
```

**Description**

Gets the execution timeout of a serial queue attribute.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ffrt_queue_attr_t](capi-ffrt-ffrt-queue-attr-t.md)* attr | Serial queue attribute pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API uint64_t | The serial queue task execution timeout. |

### ffrt_queue_attr_set_callback()

```c
FFRT_C_API void ffrt_queue_attr_set_callback(ffrt_queue_attr_t* attr, ffrt_function_header_t* f)
```

**Description**

Sets the timeout callback function of a serial queue attribute.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_queue_attr_t](capi-ffrt-ffrt-queue-attr-t.md)* attr | Serial queue attribute pointer. |
| [ffrt_function_header_t](capi-ffrt-ffrt-function-header-t.md)* f | Serial queue timeout callback function. |

### ffrt_queue_attr_get_callback()

```c
FFRT_C_API ffrt_function_header_t* ffrt_queue_attr_get_callback(const ffrt_queue_attr_t* attr)
```

**Description**

Gets the timeout callback function of a serial queue attribute.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ffrt_queue_attr_t](capi-ffrt-ffrt-queue-attr-t.md)* attr | Serial queue attribute pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API ffrt_function_header_t* | The serial queue task timeout callback function. |

### ffrt_queue_attr_set_max_concurrency()

```c
FFRT_C_API void ffrt_queue_attr_set_max_concurrency(ffrt_queue_attr_t* attr, const int max_concurrency)
```

**Description**

Sets the queue max concurrency of a queue attribute.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_queue_attr_t](capi-ffrt-ffrt-queue-attr-t.md)* attr | Queue attribute pointer. |
| const int max_concurrency | Indicates the maximum concurrency of the queue. |

### ffrt_queue_attr_get_max_concurrency()

```c
FFRT_C_API int ffrt_queue_attr_get_max_concurrency(const ffrt_queue_attr_t* attr)
```

**Description**

Gets the queue max concurrency of a queue attribute.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ffrt_queue_attr_t](capi-ffrt-ffrt-queue-attr-t.md)* attr | Queue attribute pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | The queue max concurrency. |

### ffrt_queue_attr_set_thread_mode()

```c
FFRT_C_API void ffrt_queue_attr_set_thread_mode(ffrt_queue_attr_t* attr, bool mode)
```

**Description**

Sets the execution mode of a queue attribute.This interface specifies whether tasks in the queue are executed in coroutine mode or thread mode.By default, tasks are executed in coroutine mode.Set mode to <b>true</b> to enable thread-based execution.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_queue_attr_t](capi-ffrt-ffrt-queue-attr-t.md)* attr | Queue attribute pointer. |
| bool mode | Indicates whether to enable thread-based execution mode.- <b>true</b>: Tasks are executed as native threads (thread mode).- <b>false</b>: Tasks are executed as coroutines (default). |

### ffrt_queue_attr_get_thread_mode()

```c
FFRT_C_API bool ffrt_queue_attr_get_thread_mode(const ffrt_queue_attr_t* attr)
```

**Description**

Gets the execution mode of a queue attribute.This interface returns whether tasks in the queue are configured to run in thread-based execution mode (thread mode).

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ffrt_queue_attr_t](capi-ffrt-ffrt-queue-attr-t.md)* attr | Queue attribute pointer. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API bool | <b>true</b> if tasks are executed as native threads (thread mode);<br>         <b>false</b> if tasks are executed as coroutines (default). |

### ffrt_queue_create()

```c
FFRT_C_API ffrt_queue_t ffrt_queue_create(ffrt_queue_type_t type, const char* name, const ffrt_queue_attr_t* attr)
```

**Description**

Creates a queue.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_queue_type_t](capi-queue-h.md#ffrt_queue_type_t) type | Indicates the queue type. |
| const char* name | Indicates a pointer to the queue name. |
| [const ffrt_queue_attr_t](capi-ffrt-ffrt-queue-attr-t.md)* attr | Indicates a pointer to the queue attribute. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API ffrt_queue_t | A non-null queue handle if the queue is created;<br>         a null pointer otherwise. |

### ffrt_queue_destroy()

```c
FFRT_C_API void ffrt_queue_destroy(ffrt_queue_t queue)
```

**Description**

Destroys a queue, the user needs to invoke this interface.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_queue_t queue | Indicates a queue handle. |

### ffrt_queue_submit()

```c
FFRT_C_API void ffrt_queue_submit(ffrt_queue_t queue, ffrt_function_header_t* f, const ffrt_task_attr_t* attr)
```

**Description**

Submits a task to a queue.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_queue_t queue | Indicates a queue handle. |
| [ffrt_function_header_t](capi-ffrt-ffrt-function-header-t.md)* f | Indicates a pointer to the task executor. |
| [const ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |

### ffrt_queue_submit_h()

```c
FFRT_C_API ffrt_task_handle_t ffrt_queue_submit_h(ffrt_queue_t queue, ffrt_function_header_t* f, const ffrt_task_attr_t* attr)
```

**Description**

Submits a task to the queue, and obtains a task handle.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_queue_t queue | Indicates a queue handle. |
| [ffrt_function_header_t](capi-ffrt-ffrt-function-header-t.md)* f | Indicates a pointer to the task executor. |
| [const ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API ffrt_task_handle_t | A non-null task handle if the task is submitted;<br>         a null pointer otherwise. |

### ffrt_queue_submit_f()

```c
FFRT_C_API void ffrt_queue_submit_f(ffrt_queue_t queue, ffrt_function_t func, void* arg, const ffrt_task_attr_t* attr)
```

**Description**

Submits a task to a queue, simplified from the ffrt_queue_submit interface.This interface wraps the provided task function and its argument into a task wrapper designedfor queue submission (ffrt_function_kind_queue). The task destroy callback (after_func), whichwould normally handle any post-execution cleanup, is automatically set to NULL in this wrapper,thus omitting any additional cleanup actions. The resulting task wrapper is then submitted tothe specified queue via the ffrt_queue_submit interface.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_queue_t queue | Indicates a queue handle. |
| [ffrt_function_t](capi-type-def-h.md#ffrt_function_t) func | Indicates a task function to be executed. |
| void* arg | Indicates a pointer to the argument or closure data that will be passed to the task function. |
| [const ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |

**Reference**:

[ffrt_queue_submit](capi-queue-h.md#ffrt_queue_submit)


### ffrt_queue_submit_h_f()

```c
FFRT_C_API ffrt_task_handle_t ffrt_queue_submit_h_f(ffrt_queue_t queue, ffrt_function_t func, void* arg, const ffrt_task_attr_t* attr)
```

**Description**

Submits a task to a queue, and obtains a task handle, simplified from the ffrt_queue_submit_h interface.This interface wraps the provided task function and its argument into a task wrapper designedfor queue submission (ffrt_function_kind_queue). The task destroy callback (after_func), whichwould normally handle any post-execution cleanup, is automatically set to NULL in this wrapper,thus omitting any additional cleanup actions. The resulting task wrapper is then submitted tothe specified queue via the ffrt_queue_submit_h interface.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_queue_t queue | Indicates a queue handle. |
| [ffrt_function_t](capi-type-def-h.md#ffrt_function_t) func | Indicates a task function to be executed. |
| void* arg | Indicates a pointer to the argument or closure data that will be passed to the task function. |
| [const ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API ffrt_task_handle_t | A non-null task handle if the task is submitted;<br>         a null pointer otherwise. |

**Reference**:

[ffrt_queue_submit_h](capi-queue-h.md#ffrt_queue_submit_h)


### ffrt_queue_wait()

```c
FFRT_C_API void ffrt_queue_wait(ffrt_task_handle_t handle)
```

**Description**

Waits until a task in the queue is complete.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_task_handle_t handle | Indicates a task handle. |

### ffrt_queue_cancel()

```c
FFRT_C_API int ffrt_queue_cancel(ffrt_task_handle_t handle)
```

**Description**

Cancels a task in the queue.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_task_handle_t handle | Indicates a task handle. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>0</b> if the task is canceled;<br>         <b>-1</b> otherwise. |

### ffrt_get_main_queue()

```c
FFRT_C_API ffrt_queue_t ffrt_get_main_queue(void)
```

**Description**

Gets the application main thread queue.

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API ffrt_queue_t | The application main thread queue. |

### ffrt_get_current_queue()

```c
FFRT_C_API ffrt_queue_t ffrt_get_current_queue(void)
```

**Description**

Gets the application worker (ArkTS) thread queue.

**Since**: 12

**Deprecated**: 18

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API ffrt_queue_t | The application worker (ArkTS) thread queue. |


