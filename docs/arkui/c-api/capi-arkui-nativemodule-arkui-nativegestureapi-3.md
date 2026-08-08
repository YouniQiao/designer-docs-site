# ArkUI_NativeGestureAPI_3

```c
typedef struct ArkUI_NativeGestureAPI_3 {...} ArkUI_NativeGestureAPI_3
```

## Overview

Defines the gesture module API set.

**Since**: 26.0.0

**Related module**: [ArkUI_NativeModule](capi-arkui-nativemodule.md)

**Header file**: [native_gesture.h](capi-native-gesture-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| [ArkUI_NativeGestureAPI_2*](capi-arkui-nativemodule-arkui-nativegestureapi-2.md) gestureApi2 | Pointer to the [ArkUI_NativeGestureAPI_2](capi-arkui-nativemodule-arkui-nativegestureapi-2.md) struct.<br>**Since**: 26.0.0 |


### Member functions

| Name | Description |
| -- | -- |
| [ArkUI_ErrorCode (\*setGestureParallelTo)(ArkUI_NodeHandle node, void* userData, ArkUI_GestureRecognizer* (\*parallelGesture)(ArkUI_ParallelGestureEvent* event))](#setgestureparallelto) | Sets the callback for parallel gesture events. |

## Member function description

### setGestureParallelTo()

```c
ArkUI_ErrorCode (*setGestureParallelTo)(ArkUI_NodeHandle node, void* userData, ArkUI_GestureRecognizer* (*parallelGesture)(ArkUI_ParallelGestureEvent* event))
```

**Description**

Sets the callback for parallel gesture events.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| node | ArkUI node pointer for which the parallel gesture event callback needs to be set. |
| userData | Custom data. |
| parallelGesture | Parallel gesture event. event returns the data of the parallel gesture event. <br> ParallelGesture returns the pointer to the gesture recognizer that needs parallel recognition. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ErrorCode](capi-error-code-h.md#arkui_errorcode) | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if successful. <br>             Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |


