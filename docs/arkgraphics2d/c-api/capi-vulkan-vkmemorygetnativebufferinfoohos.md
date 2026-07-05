# VkMemoryGetNativeBufferInfoOHOS

```c
typedef struct VkMemoryGetNativeBufferInfoOHOS {...} VkMemoryGetNativeBufferInfoOHOS
```

## Overview

Defines a struct used to obtain an <b>OH_NativeBuffer</b> from the Vulkan memory.

**Since**: 10

**Related module**: [Vulkan](capi-vulkan.md)

**Header file**: [vulkan_ohos.h](capi-vulkan-ohos-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| [](capi-vulkan-oh-nativebuffer.md)V[](capi-vulkan-oh-nativebuffer.md)k[](capi-vulkan-oh-nativebuffer.md)S[](capi-vulkan-oh-nativebuffer.md)t[](capi-vulkan-oh-nativebuffer.md)r[](capi-vulkan-oh-nativebuffer.md)u[](capi-vulkan-oh-nativebuffer.md)c[](capi-vulkan-oh-nativebuffer.md)t[](capi-vulkan-oh-nativebuffer.md)u[](capi-vulkan-oh-nativebuffer.md)r[](capi-vulkan-oh-nativebuffer.md)e[](capi-vulkan-oh-nativebuffer.md)T[](capi-vulkan-oh-nativebuffer.md)y[](capi-vulkan-oh-nativebuffer.md)p[](capi-vulkan-oh-nativebuffer.md)e[](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md)s[](capi-vulkan-oh-nativebuffer.md)T[](capi-vulkan-oh-nativebuffer.md)y[](capi-vulkan-oh-nativebuffer.md)p[](capi-vulkan-oh-nativebuffer.md)e[](capi-vulkan-oh-nativebuffer.md) | sType is a VkStructureType value identifying this structure.sType must be VK_STRUCTURE_TYPE_MEMORY_GET_NATIVE_BUFFER_INFO_OHOS. |
| const void*        pNext | pNext is NULL or a pointer to a structure extending this structure. pNext must be NULL |
| [](capi-vulkan-oh-nativebuffer.md)V[](capi-vulkan-oh-nativebuffer.md)k[](capi-vulkan-oh-nativebuffer.md)D[](capi-vulkan-oh-nativebuffer.md)e[](capi-vulkan-oh-nativebuffer.md)v[](capi-vulkan-oh-nativebuffer.md)i[](capi-vulkan-oh-nativebuffer.md)c[](capi-vulkan-oh-nativebuffer.md)e[](capi-vulkan-oh-nativebuffer.md)M[](capi-vulkan-oh-nativebuffer.md)e[](capi-vulkan-oh-nativebuffer.md)m[](capi-vulkan-oh-nativebuffer.md)o[](capi-vulkan-oh-nativebuffer.md)r[](capi-vulkan-oh-nativebuffer.md)y[](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md)m[](capi-vulkan-oh-nativebuffer.md)e[](capi-vulkan-oh-nativebuffer.md)m[](capi-vulkan-oh-nativebuffer.md)o[](capi-vulkan-oh-nativebuffer.md)r[](capi-vulkan-oh-nativebuffer.md)y[](capi-vulkan-oh-nativebuffer.md) | memory is a valid VkDeviceMemory object from which the Open Harmony OS native buffer will be exported.memory must be a valid VkDeviceMemory handle |


