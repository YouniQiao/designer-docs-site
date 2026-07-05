# VkSurfaceCreateInfoOHOS

```c
typedef struct VkSurfaceCreateInfoOHOS {...} VkSurfaceCreateInfoOHOS
```

## Overview

Defines the parameters required for creating a Vulkan surface.

**Since**: 10

**Related module**: [Vulkan](capi-vulkan.md)

**Header file**: [vulkan_ohos.h](capi-vulkan-ohos-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| [](capi-vulkan-oh-nativebuffer.md)V[](capi-vulkan-oh-nativebuffer.md)k[](capi-vulkan-oh-nativebuffer.md)S[](capi-vulkan-oh-nativebuffer.md)t[](capi-vulkan-oh-nativebuffer.md)r[](capi-vulkan-oh-nativebuffer.md)u[](capi-vulkan-oh-nativebuffer.md)c[](capi-vulkan-oh-nativebuffer.md)t[](capi-vulkan-oh-nativebuffer.md)u[](capi-vulkan-oh-nativebuffer.md)r[](capi-vulkan-oh-nativebuffer.md)e[](capi-vulkan-oh-nativebuffer.md)T[](capi-vulkan-oh-nativebuffer.md)y[](capi-vulkan-oh-nativebuffer.md)p[](capi-vulkan-oh-nativebuffer.md)e[](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md)s[](capi-vulkan-oh-nativebuffer.md)T[](capi-vulkan-oh-nativebuffer.md)y[](capi-vulkan-oh-nativebuffer.md)p[](capi-vulkan-oh-nativebuffer.md)e[](capi-vulkan-oh-nativebuffer.md) | Struct sType is a VkStructureType value identifying this structure.it must be VK_STRUCTURE_TYPE_SURFACE_CREATE_INFO_OHOS. |
| const void*                 pNext | pNext is NULL or a pointer to a structure extending this structure. pNext must be NULL. |
| [](capi-vulkan-oh-nativebuffer.md)V[](capi-vulkan-oh-nativebuffer.md)k[](capi-vulkan-oh-nativebuffer.md)S[](capi-vulkan-oh-nativebuffer.md)u[](capi-vulkan-oh-nativebuffer.md)r[](capi-vulkan-oh-nativebuffer.md)f[](capi-vulkan-oh-nativebuffer.md)a[](capi-vulkan-oh-nativebuffer.md)c[](capi-vulkan-oh-nativebuffer.md)e[](capi-vulkan-oh-nativebuffer.md)C[](capi-vulkan-oh-nativebuffer.md)r[](capi-vulkan-oh-nativebuffer.md)e[](capi-vulkan-oh-nativebuffer.md)a[](capi-vulkan-oh-nativebuffer.md)t[](capi-vulkan-oh-nativebuffer.md)e[](capi-vulkan-oh-nativebuffer.md)F[](capi-vulkan-oh-nativebuffer.md)l[](capi-vulkan-oh-nativebuffer.md)a[](capi-vulkan-oh-nativebuffer.md)g[](capi-vulkan-oh-nativebuffer.md)s[](capi-vulkan-oh-nativebuffer.md)O[](capi-vulkan-oh-nativebuffer.md)H[](capi-vulkan-oh-nativebuffer.md)O[](capi-vulkan-oh-nativebuffer.md)S[](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md)f[](capi-vulkan-oh-nativebuffer.md)l[](capi-vulkan-oh-nativebuffer.md)a[](capi-vulkan-oh-nativebuffer.md)g[](capi-vulkan-oh-nativebuffer.md)s[](capi-vulkan-oh-nativebuffer.md) | flags is reserved for future use. flags must be 0. |
| [](capi-vulkan-oh-nativebuffer.md)O[](capi-vulkan-oh-nativebuffer.md)H[](capi-vulkan-oh-nativebuffer.md)N[](capi-vulkan-oh-nativebuffer.md)a[](capi-vulkan-oh-nativebuffer.md)t[](capi-vulkan-oh-nativebuffer.md)i[](capi-vulkan-oh-nativebuffer.md)v[](capi-vulkan-oh-nativebuffer.md)e[](capi-vulkan-oh-nativebuffer.md)W[](capi-vulkan-oh-nativebuffer.md)i[](capi-vulkan-oh-nativebuffer.md)n[](capi-vulkan-oh-nativebuffer.md)d[](capi-vulkan-oh-nativebuffer.md)o[](capi-vulkan-oh-nativebuffer.md)w[](capi-vulkan-oh-nativebuffer.md)*[](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md) [](capi-vulkan-oh-nativebuffer.md)w[](capi-vulkan-oh-nativebuffer.md)i[](capi-vulkan-oh-nativebuffer.md)n[](capi-vulkan-oh-nativebuffer.md)d[](capi-vulkan-oh-nativebuffer.md)o[](capi-vulkan-oh-nativebuffer.md)w[](capi-vulkan-oh-nativebuffer.md) | window: is a pointer to a OHNativeWindow to associate the surface with. |


