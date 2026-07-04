# fiber.h

## Overview

Declares the fiber interfaces in C.

**Library**: libffrt.z.so

**System capability**: SystemCapability.Resourceschedule.Ffrt.Core

**Since**: 20

**Related module**: [FFRT](capi-ffrt.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [FFRT_C_API int ffrt_fiber_init(ffrt_fiber_t* fiber, void(\*func)(void*), void* arg, void* stack, size_t stack_size)](#ffrt_fiber_init) | Initializes a fiber.This function initializes a fiber structure, preparing it for execution. |
| [FFRT_C_API void ffrt_fiber_switch(ffrt_fiber_t* from, ffrt_fiber_t* to)](#ffrt_fiber_switch) | Switch execution context between two fibers.Switches the execution context by saving the current context into the fiber specifiedby @c from and restoring the context from the fiber specified by @c to. |

## Function description

### ffrt_fiber_init()

```c
FFRT_C_API int ffrt_fiber_init(ffrt_fiber_t* fiber, void(*func)(void*), void* arg, void* stack, size_t stack_size)
```

**Description**

Initializes a fiber.This function initializes a fiber structure, preparing it for execution.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_fiber_t](capi-ffrt-ffrt-fiber-t.md)\* fiber | Indicates the pointer to the fiber structure to be initialized. |
| void(\*func)(void\*) | Indicates the entry point function that the fiber will execute. |
| void\* arg | Indicates the argument to be passed to the entry point function. |
| void\* stack | Indicates the pointer to the memory region to be used as the fiber's stack. |
| size_t stack_size | Indicates the size of the stack in bytes. |

**Returns**:

| Type | Description |
| -- | -- |
| FFRT_C_API int | <b>ffrt_success</b> if the fiber is initialized;<br>         <b>ffrt_error</b> otherwise. |

### ffrt_fiber_switch()

```c
FFRT_C_API void ffrt_fiber_switch(ffrt_fiber_t* from, ffrt_fiber_t* to)
```

**Description**

Switch execution context between two fibers.Switches the execution context by saving the current context into the fiber specifiedby @c from and restoring the context from the fiber specified by @c to.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ffrt_fiber_t](capi-ffrt-ffrt-fiber-t.md)* from | Indicates the pointer to the fiber into which the current context will be saved. |
| [ffrt_fiber_t](capi-ffrt-ffrt-fiber-t.md)* to | Indicates the pointer to the fiber from which the context will be restored. |


