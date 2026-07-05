# NativeChildProcess_Args

```c
typedef struct NativeChildProcess_Args {...} NativeChildProcess_Args
```

## Overview

The arguments passed to the child process.

**Since**: 13

**Related module**: [ChildProcess](capi-childprocess.md)

**Header file**: [native_child_process.h](capi-native-child-process-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| char* entryParams | the entry parameter. |
| struct [NativeChildProcess_FdList](capi-childprocess-nativechildprocess-fdlist.md) fdList | the list of the info of the file descriptors passed to child process.For details, see [NativeChildProcess_FdList](capi-childprocess-nativechildprocess-fdlist.md). |


