# BufferHandle

```c
typedef struct BufferHandle {...} BufferHandle
```

## Overview

Buffer handle used to transfer and obtain information about the buffer.

**Since**: 8

**Related module**: [NativeWindow](capi-nativewindow.md)

**Header file**: [buffer_handle.h](capi-buffer-handle-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| int32_t width | < buffer fd, -1 if not supported |
| int32_t stride | < the width of memory |
| int32_t height | < the stride of memory |
| int32_t size | < the height of memory |
| int32_t format | < size of memory |
| uint64_t usage | < the format of memory |
| void *virAddr | < the usage of memory |
| int32_t key | < Virtual address of memory |
| uint64_t phyAddr | < Shared memory key |
| uint32_t reserveFds | < Physical address |
| uint32_t reserveInts | < the number of reserved fd value |
| int32_t reserve[0] | < the number of reserved integer value |
|  | < the data |


