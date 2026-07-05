# ArkUI_ContextCallback

```c
typedef struct ArkUI_ContextCallback {...} ArkUI_ContextCallback
```

## Overview

Defines the event callback type.

**Since**: 12

**Related module**: [ArkUI_NativeModule](capi-arkui-nativemodule.md)

**Header file**: [native_type.h](capi-native-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| void* userData | Custom type, data of a user-defined type that is passed as a parameter during callbacks. |


### Member functions

| Name | Description |
| -- | -- |
| [void (\*callback)(void* userData)](#callback) | Event callback. |

## Member function description

### callback()

```c
void (*callback)(void* userData)
```

**Description**

Event callback.


