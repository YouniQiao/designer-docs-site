# ArkWeb_ComponentAPI

```c
typedef struct ArkWeb_ComponentAPI {...} ArkWeb_ComponentAPI
```

## Overview

Defines the component API for native ArkWeb.

**Since**: 12

**Related module**: [Web](capi-web.md)

**Header file**: [arkweb_type.h](capi-arkweb-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| size_t size | The ArkWeb_ComponentAPI struct size. |


### Member functions

| Name | Description |
| -- | -- |
| [void (\*onControllerAttached)(const char* webTag, ArkWeb_OnComponentCallback callback, void* userData)](#oncontrollerattached) | Register the OnControllerAttached callback. |
| [void (\*onPageBegin)(const char* webTag, ArkWeb_OnComponentCallback callback, void* userData)](#onpagebegin) | Register the OnPageBegin callback. |
| [void (\*onPageEnd)(const char* webTag, ArkWeb_OnComponentCallback callback, void* userData)](#onpageend) | Register the OnPageEnd callback. |
| [void (\*onDestroy)(const char* webTag, ArkWeb_OnComponentCallback callback, void* userData)](#ondestroy) | Register the OnDestroy callback. |

## Member function description

### onControllerAttached()

```c
void (*onControllerAttached)(const char* webTag, ArkWeb_OnComponentCallback callback, void* userData)
```

**Description**

Register the OnControllerAttached callback.

### onPageBegin()

```c
void (*onPageBegin)(const char* webTag, ArkWeb_OnComponentCallback callback, void* userData)
```

**Description**

Register the OnPageBegin callback.

### onPageEnd()

```c
void (*onPageEnd)(const char* webTag, ArkWeb_OnComponentCallback callback, void* userData)
```

**Description**

Register the OnPageEnd callback.

### onDestroy()

```c
void (*onDestroy)(const char* webTag, ArkWeb_OnComponentCallback callback, void* userData)
```

**Description**

Register the OnDestroy callback.


