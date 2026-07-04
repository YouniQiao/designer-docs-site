# task.h

## Overview

Declares the task interfaces in C.

**Library**: libffrt.z.so

**System capability**: SystemCapability.Resourceschedule.Ffrt.Core

**Since**: 10

**Related module**: [FFRT](capi-ffrt.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [FFRT_C_API int ffrt_task_attr_init(ffrt_task_attr_t* attr)](#ffrt_task_attr_init) | Initializes a task attribute. |
| [FFRT_C_API void ffrt_task_attr_set_name(ffrt_task_attr_t* attr, const char* name)](#ffrt_task_attr_set_name) | Sets the name of a task attribute. |
| [FFRT_C_API const char* ffrt_task_attr_get_name(const ffrt_task_attr_t* attr)](#ffrt_task_attr_get_name) | Gets the name of a task attribute. |
| [FFRT_C_API void ffrt_task_attr_destroy(ffrt_task_attr_t* attr)](#ffrt_task_attr_destroy) | Destroys a task attribute, the user needs to invoke this interface. |
| [FFRT_C_API void ffrt_task_attr_set_qos(ffrt_task_attr_t* attr, ffrt_qos_t qos)](#ffrt_task_attr_set_qos) | Sets the QoS of a task attribute. |
| [FFRT_C_API ffrt_qos_t ffrt_task_attr_get_qos(const ffrt_task_attr_t* attr)](#ffrt_task_attr_get_qos) | Gets the QoS of a task attribute. |
| [FFRT_C_API void ffrt_task_attr_set_delay(ffrt_task_attr_t* attr, uint64_t delay_us)](#ffrt_task_attr_set_delay) | Sets the delay time of a task attribute. |
| [FFRT_C_API uint64_t ffrt_task_attr_get_delay(const ffrt_task_attr_t* attr)](#ffrt_task_attr_get_delay) | Gets the delay time of a task attribute. |
| [FFRT_C_API void ffrt_task_attr_set_queue_priority(ffrt_task_attr_t* attr, ffrt_queue_priority_t priority)](#ffrt_task_attr_set_queue_priority) | Sets the priority of a task attribute. |
| [FFRT_C_API ffrt_queue_priority_t ffrt_task_attr_get_queue_priority(const ffrt_task_attr_t* attr)](#ffrt_task_attr_get_queue_priority) | Gets the priority of a task attribute. |
| [FFRT_C_API void ffrt_task_attr_set_stack_size(ffrt_task_attr_t* attr, uint64_t size)](#ffrt_task_attr_set_stack_size) | Sets the stack size of a task attribute. |
| [FFRT_C_API uint64_t ffrt_task_attr_get_stack_size(const ffrt_task_attr_t* attr)](#ffrt_task_attr_get_stack_size) | Gets the stack size of a task attribute. |
| [FFRT_C_API int ffrt_this_task_update_qos(ffrt_qos_t qos)](#ffrt_this_task_update_qos) | Updates the QoS of this task. |
| [FFRT_C_API ffrt_qos_t ffrt_this_task_get_qos(void)](#ffrt_this_task_get_qos) | Gets the QoS of this task. |
| [FFRT_C_API uint64_t ffrt_this_task_get_id(void)](#ffrt_this_task_get_id) | Gets the ID of this task. |
| [FFRT_C_API void *ffrt_alloc_auto_managed_function_storage_base(ffrt_function_kind_t kind)](#ffrt_alloc_auto_managed_function_storage_base) | Applies memory for the function execution structure. |
| [FFRT_C_API void ffrt_submit_base(ffrt_function_header_t* f, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr)](#ffrt_submit_base) | Submits a task. |
| [FFRT_C_API ffrt_task_handle_t ffrt_submit_h_base(ffrt_function_header_t* f, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr)](#ffrt_submit_h_base) | Submits a task, and obtains a task handle. |
| [FFRT_C_API void ffrt_submit_f(ffrt_function_t func, void* arg, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr)](#ffrt_submit_f) | Submits a task, simplified from the ffrt_submit_base interface.This interface wraps the provided task function and its argument into a task wrapperdesignated as a general task (ffrt_function_kind_general). During wrapper creation, thetask destroy callback (after_func), which is intended to handle any post-execution cleanup,is simplified to NULL. The resulting task wrapper is then submitted using the underlyingffrt_submit_base interface. |
| [FFRT_C_API ffrt_task_handle_t ffrt_submit_h_f(ffrt_function_t func, void* arg, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr)](#ffrt_submit_h_f) | Submits a task, and obtains a task handle, simplified from the ffrt_submit_h_base interface.This interface wraps the provided task function and its argument into a task wrapperdesignated as a general task (ffrt_function_kind_general). During wrapper creation, thetask destroy callback (after_func), which is intended to handle any post-execution cleanup,is simplified to NULL. The resulting task wrapper is then submitted using the underlyingffrt_submit_h_base interface. |
| [FFRT_C_API uint32_t ffrt_task_handle_inc_ref(ffrt_task_handle_t handle)](#ffrt_task_handle_inc_ref) | Increases reference count of a task. |
| [FFRT_C_API uint32_t ffrt_task_handle_dec_ref(ffrt_task_handle_t handle)](#ffrt_task_handle_dec_ref) | Decreases reference count of a task. |
| [FFRT_C_API void ffrt_task_handle_destroy(ffrt_task_handle_t handle)](#ffrt_task_handle_destroy) | Destroys a task handle, the user needs to invoke this interface. |
| [FFRT_C_API void ffrt_wait_deps(const ffrt_deps_t* deps)](#ffrt_wait_deps) | Waits until the dependent tasks are complete. |
| [FFRT_C_API void ffrt_wait(void)](#ffrt_wait) | Waits until all submitted tasks are complete. |

## Function description

### ffrt_task_attr_init()

```c
FFRT_C_API int ffrt_task_attr_init(ffrt_task_attr_t* attr)
```

**Description**

Initializes a task attribute.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>0</b> if the task attribute is initialized;<br>         <b>-1</b> otherwise. |

### ffrt_task_attr_set_name()

```c
FFRT_C_API void ffrt_task_attr_set_name(ffrt_task_attr_t* attr, const char* name)
```

**Description**

Sets the name of a task attribute.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |
| const char* name | Indicates a pointer to the task name. |

### ffrt_task_attr_get_name()

```c
FFRT_C_API const char* ffrt_task_attr_get_name(const ffrt_task_attr_t* attr)
```

**Description**

Gets the name of a task attribute.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API const char* | A non-null pointer to the task name if the name is obtained;<br>         a null pointer otherwise. |

### ffrt_task_attr_destroy()

```c
FFRT_C_API void ffrt_task_attr_destroy(ffrt_task_attr_t* attr)
```

**Description**

Destroys a task attribute, the user needs to invoke this interface.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |

### ffrt_task_attr_set_qos()

```c
FFRT_C_API void ffrt_task_attr_set_qos(ffrt_task_attr_t* attr, ffrt_qos_t qos)
```

**Description**

Sets the QoS of a task attribute.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |
| ffrt_qos_t qos | Indicates the QoS. |

### ffrt_task_attr_get_qos()

```c
FFRT_C_API ffrt_qos_t ffrt_task_attr_get_qos(const ffrt_task_attr_t* attr)
```

**Description**

Gets the QoS of a task attribute.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API ffrt_qos_t | The QoS, which is ffrt_qos_default by default. |

### ffrt_task_attr_set_delay()

```c
FFRT_C_API void ffrt_task_attr_set_delay(ffrt_task_attr_t* attr, uint64_t delay_us)
```

**Description**

Sets the delay time of a task attribute.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |
| uint64_t delay_us | Indicates the delay time, in microseconds. |

### ffrt_task_attr_get_delay()

```c
FFRT_C_API uint64_t ffrt_task_attr_get_delay(const ffrt_task_attr_t* attr)
```

**Description**

Gets the delay time of a task attribute.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API uint64_t | The delay time. |

### ffrt_task_attr_set_queue_priority()

```c
FFRT_C_API void ffrt_task_attr_set_queue_priority(ffrt_task_attr_t* attr, ffrt_queue_priority_t priority)
```

**Description**

Sets the priority of a task attribute.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |
| [ffrt_queue_priority_t](capi-type-def-h.md#ffrt_queue_priority_t) priority | Indicates the execute priority of concurrent queue task. |

### ffrt_task_attr_get_queue_priority()

```c
FFRT_C_API ffrt_queue_priority_t ffrt_task_attr_get_queue_priority(const ffrt_task_attr_t* attr)
```

**Description**

Gets the priority of a task attribute.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API ffrt_queue_priority_t | The priority of concurrent queue task. |

### ffrt_task_attr_set_stack_size()

```c
FFRT_C_API void ffrt_task_attr_set_stack_size(ffrt_task_attr_t* attr, uint64_t size)
```

**Description**

Sets the stack size of a task attribute.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |
| uint64_t size | Indicates the task stack size, unit is byte. |

### ffrt_task_attr_get_stack_size()

```c
FFRT_C_API uint64_t ffrt_task_attr_get_stack_size(const ffrt_task_attr_t* attr)
```

**Description**

Gets the stack size of a task attribute.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API uint64_t | The task stack size, unit is byte. |

### ffrt_this_task_update_qos()

```c
FFRT_C_API int ffrt_this_task_update_qos(ffrt_qos_t qos)
```

**Description**

Updates the QoS of this task.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_qos_t qos | Indicates the new QoS. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>0</b> if the QoS is updated;<br>         <b>-1</b> otherwise. |

### ffrt_this_task_get_qos()

```c
FFRT_C_API ffrt_qos_t ffrt_this_task_get_qos(void)
```

**Description**

Gets the QoS of this task.

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API ffrt_qos_t | The task QoS. |

### ffrt_this_task_get_id()

```c
FFRT_C_API uint64_t ffrt_this_task_get_id(void)
```

**Description**

Gets the ID of this task.

**Since**: 10

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API uint64_t | The task ID. |

### ffrt_alloc_auto_managed_function_storage_base()

```c
FFRT_C_API void *ffrt_alloc_auto_managed_function_storage_base(ffrt_function_kind_t kind)
```

**Description**

Applies memory for the function execution structure.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_function_kind_t](capi-type-def-h.md#ffrt_function_kind_t) kind | Indicates the type of the function execution structure, which can be common or queue. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API void * | A non-null pointer if the memory is allocated;<br>         a null pointer otherwise. |

### ffrt_submit_base()

```c
FFRT_C_API void ffrt_submit_base(ffrt_function_header_t* f, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr)
```

**Description**

Submits a task.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_function_header_t](capi-ffrt-ffrt-function-header-t.md)* f | Indicates a pointer to the task executor. |
| [const ffrt_deps_t](capi-ffrt-ffrt-deps-t.md)* in_deps | Indicates a pointer to the input dependencies. |
| [const ffrt_deps_t](capi-ffrt-ffrt-deps-t.md)* out_deps | Indicates a pointer to the output dependencies. |
| [const ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |

### ffrt_submit_h_base()

```c
FFRT_C_API ffrt_task_handle_t ffrt_submit_h_base(ffrt_function_header_t* f, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr)
```

**Description**

Submits a task, and obtains a task handle.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_function_header_t](capi-ffrt-ffrt-function-header-t.md)* f | Indicates a pointer to the task executor. |
| [const ffrt_deps_t](capi-ffrt-ffrt-deps-t.md)* in_deps | Indicates a pointer to the input dependencies. |
| [const ffrt_deps_t](capi-ffrt-ffrt-deps-t.md)* out_deps | Indicates a pointer to the output dependencies. |
| [const ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API ffrt_task_handle_t | A non-null task handle if the task is submitted;<br>         a null pointer otherwise. |

### ffrt_submit_f()

```c
FFRT_C_API void ffrt_submit_f(ffrt_function_t func, void* arg, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr)
```

**Description**

Submits a task, simplified from the ffrt_submit_base interface.This interface wraps the provided task function and its argument into a task wrapperdesignated as a general task (ffrt_function_kind_general). During wrapper creation, thetask destroy callback (after_func), which is intended to handle any post-execution cleanup,is simplified to NULL. The resulting task wrapper is then submitted using the underlyingffrt_submit_base interface.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_function_t](capi-type-def-h.md#ffrt_function_t) func | Indicates a task function to be executed. |
| void* arg | Indicates a pointer to the argument or closure data that will be passed to the task function. |
| [const ffrt_deps_t](capi-ffrt-ffrt-deps-t.md)* in_deps | Indicates a pointer to the input dependencies. |
| [const ffrt_deps_t](capi-ffrt-ffrt-deps-t.md)* out_deps | Indicates a pointer to the output dependencies. |
| [const ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |

**Reference**:

[ffrt_submit_base](capi-task-h.md#ffrt_submit_base)


### ffrt_submit_h_f()

```c
FFRT_C_API ffrt_task_handle_t ffrt_submit_h_f(ffrt_function_t func, void* arg, const ffrt_deps_t* in_deps, const ffrt_deps_t* out_deps, const ffrt_task_attr_t* attr)
```

**Description**

Submits a task, and obtains a task handle, simplified from the ffrt_submit_h_base interface.This interface wraps the provided task function and its argument into a task wrapperdesignated as a general task (ffrt_function_kind_general). During wrapper creation, thetask destroy callback (after_func), which is intended to handle any post-execution cleanup,is simplified to NULL. The resulting task wrapper is then submitted using the underlyingffrt_submit_h_base interface.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_function_t](capi-type-def-h.md#ffrt_function_t) func | Indicates a task function to be executed. |
| void* arg | Indicates a pointer to the argument or closure data that will be passed to the task function. |
| [const ffrt_deps_t](capi-ffrt-ffrt-deps-t.md)* in_deps | Indicates a pointer to the input dependencies. |
| [const ffrt_deps_t](capi-ffrt-ffrt-deps-t.md)* out_deps | Indicates a pointer to the output dependencies. |
| [const ffrt_task_attr_t](capi-ffrt-ffrt-task-attr-t.md)* attr | Indicates a pointer to the task attribute. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API ffrt_task_handle_t | A non-null task handle if the task is submitted;<br>         a null pointer otherwise. |

**Reference**:

[ffrt_submit_h_base](capi-task-h.md#ffrt_submit_h_base)


### ffrt_task_handle_inc_ref()

```c
FFRT_C_API uint32_t ffrt_task_handle_inc_ref(ffrt_task_handle_t handle)
```

**Description**

Increases reference count of a task.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_task_handle_t handle | Indicates a task handle. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API uint32_t | The task handle original reference count. |

### ffrt_task_handle_dec_ref()

```c
FFRT_C_API uint32_t ffrt_task_handle_dec_ref(ffrt_task_handle_t handle)
```

**Description**

Decreases reference count of a task.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_task_handle_t handle | Indicates a task handle. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API uint32_t | The task handle original reference count. |

### ffrt_task_handle_destroy()

```c
FFRT_C_API void ffrt_task_handle_destroy(ffrt_task_handle_t handle)
```

**Description**

Destroys a task handle, the user needs to invoke this interface.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| ffrt_task_handle_t handle | Indicates a task handle. |

### ffrt_wait_deps()

```c
FFRT_C_API void ffrt_wait_deps(const ffrt_deps_t* deps)
```

**Description**

Waits until the dependent tasks are complete.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ffrt_deps_t](capi-ffrt-ffrt-deps-t.md)* deps | Indicates a pointer to the dependent tasks. |

### ffrt_wait()

```c
FFRT_C_API void ffrt_wait(void)
```

**Description**

Waits until all submitted tasks are complete.

**Since**: 10


