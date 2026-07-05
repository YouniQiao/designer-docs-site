# NativeChildProcess_Fd

```c
typedef struct NativeChildProcess_Fd {...} NativeChildProcess_Fd
```

## Overview

The info of the file descriptors passed to child process.

**Since**: 13

**Related module**: [ChildProcess](capi-childprocess.md)

**Header file**: [native_child_process.h](capi-native-child-process-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| char* fdName | the key of the file descriptor. |
| int32_t fd | the value of the file descriptor. |
| struct [NativeChildProcess_Fd*](capi-childprocess-nativechildprocess-fd.md) next | the next pointer of the linked list. |


