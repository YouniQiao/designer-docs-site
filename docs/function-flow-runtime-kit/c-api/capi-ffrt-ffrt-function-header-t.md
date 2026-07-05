# ffrt_function_header_t

```c
typedef struct ffrt_function_header_t {...} ffrt_function_header_t
```

## Overview

Defines a task executor.

**Since**: 10

**Related module**: [FFRT](capi-ffrt.md)

**Header file**: [type_def.h](capi-type-def-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| [ffrt_function_t](capi-type-def-h.md#ffrt_function_t) exec | Function used to execute a task. |
| [ffrt_function_t](capi-type-def-h.md#ffrt_function_t) destroy | Function used to destroy a task. |
| uint64_t reserve[2] | Need to be set to 0. |


