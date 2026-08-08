# native_gesture.h

## Overview

Provides type definitions for <b>NativeGesture</b> APIs.

**Library**: libace_ndk.z.so

**System capability**: SystemCapability.ArkUI.ArkUI.Full

**Since**: 12

**Related module**: [ArkUI_NativeModule](capi-arkui-nativemodule.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ArkUI_NativeGestureAPI_1](capi-arkui-nativemodule-arkui-nativegestureapi-1.md) | ArkUI_NativeGestureAPI_1 | Defines the gesture APIs. |
| [ArkUI_NativeGestureAPI_2](capi-arkui-nativemodule-arkui-nativegestureapi-2.md) | ArkUI_NativeGestureAPI_2 | Defines the gesture APIs. |
| [ArkUI_NativeGestureAPI_3](capi-arkui-nativemodule-arkui-nativegestureapi-3.md) | ArkUI_NativeGestureAPI_3 | Defines the gesture module API set. |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md) | ArkUI_GestureRecognizer | Defines a gesture recognizer. |
| [ArkUI_GestureInterruptInfo](capi-arkui-nativemodule-arkui-gestureinterruptinfo.md) | ArkUI_GestureInterruptInfo | Defines the gesture interruption information. |
| [ArkUI_GestureEvent](capi-arkui-nativemodule-arkui-gestureevent.md) | ArkUI_GestureEvent | Defines the gesture event. |
| [ArkUI_GestureEventTargetInfo](capi-arkui-nativemodule-arkui-gestureeventtargetinfo.md) | ArkUI_GestureEventTargetInfo | Defines a <b>GestureEventTargetInfo</b> object that provides information about a gesture event target. |
| [ArkUI_ParallelInnerGestureEvent](capi-arkui-nativemodule-arkui-parallelinnergestureevent.md) | ArkUI_ParallelInnerGestureEvent | Defines a parallel internal gesture event. |
| [ArkUI_ParallelGestureEvent](capi-arkui-nativemodule-arkui-parallelgestureevent.md) | ArkUI_ParallelGestureEvent | Defines the parallel gesture event. <br> used for the callback {@link setGestureParallelTo} of the parallel gesture event. |
| [ArkUI_TouchRecognizer](capi-arkui-nativemodule-arkui-touchrecognizer.md) | ArkUI_TouchRecognizer | Defines a touch recognizer. |
| [ArkUI_GestureRecognizer*](capi-arkui-nativemodule-arkui-gesturerecognizer8h.md) | ArkUI_GestureRecognizerHandle | Defines the gesture recognizer handle. |
| [ArkUI_TouchRecognizer*](capi-arkui-nativemodule-arkui-touchrecognizer8h.md) | ArkUI_TouchRecognizerHandle | Defines a touch recognizer handle. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ArkUI_GestureEventActionType](#arkui_gestureeventactiontype) | ArkUI_GestureEventActionType | Enumerates gesture event types. |
| [ArkUI_GesturePriority](#arkui_gesturepriority) | ArkUI_GesturePriority | Enumerates gesture event modes. |
| [ArkUI_GroupGestureMode](#arkui_groupgesturemode) | ArkUI_GroupGestureMode | Enumerates gesture group modes. |
| [ArkUI_GestureDirection](#arkui_gesturedirection) | ArkUI_GestureDirection | Enumerates gesture directions. |
| [ArkUI_GestureMask](#arkui_gesturemask) | ArkUI_GestureMask | Enumerates gesture masking modes. |
| [ArkUI_GestureRecognizerType](#arkui_gesturerecognizertype) | ArkUI_GestureRecognizerType | Enumerates gesture types. |
| [OH_ArkUI_GestureCollectIntervention](#oh_arkui_gesturecollectintervention) | OH_ArkUI_GestureCollectIntervention | Defines the intervention types for gesture and event collection. |
| [ArkUI_GestureInterruptResult](#arkui_gestureinterruptresult) | ArkUI_GestureInterruptResult | Enumerates gesture interruption results. |
| [ArkUI_GestureRecognizerState](#arkui_gesturerecognizerstate) | ArkUI_GestureRecognizerState | Enumerates the gesture recognizer states. |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [typedef void (\*ArkUI_GestureRecognizerDisposeNotifyCallback)(ArkUI_GestureRecognizer* recognizer, void* userData)](#arkui_gesturerecognizerdisposenotifycallback) | ArkUI_GestureRecognizerDisposeNotifyCallback | Defines a callback function for notifying gesture recognizer destruction. |
| [bool OH_ArkUI_GestureInterruptInfo_GetSystemFlag(const ArkUI_GestureInterruptInfo* event)](#oh_arkui_gestureinterruptinfo_getsystemflag) | - | Checks whether a gesture is a built-in gesture of the component. |
| [ArkUI_GestureRecognizer* OH_ArkUI_GestureInterruptInfo_GetRecognizer(const ArkUI_GestureInterruptInfo* event)](#oh_arkui_gestureinterruptinfo_getrecognizer) | - | Obtains the pointer to interrupted gesture recognizer. |
| [ArkUI_GestureEvent* OH_ArkUI_GestureInterruptInfo_GetGestureEvent(const ArkUI_GestureInterruptInfo* event)](#oh_arkui_gestureinterruptinfo_getgestureevent) | - | Obtains the pointer to the interrupted gesture event. |
| [int32_t OH_ArkUI_GestureInterruptInfo_GetSystemRecognizerType(const ArkUI_GestureInterruptInfo* event)](#oh_arkui_gestureinterruptinfo_getsystemrecognizertype) | - | Obtains the type of the system gesture to trigger. |
| [int32_t OH_ArkUI_GestureInterruptInfo_GetTouchRecognizers(const ArkUI_GestureInterruptInfo* info, ArkUI_TouchRecognizerHandleArray* recognizers, int32_t* size)](#oh_arkui_gestureinterruptinfo_gettouchrecognizers) | - | Get the touch recognizer handles from the gesture interrupt info. |
| [ArkUI_NodeHandle OH_ArkUI_TouchRecognizer_GetNodeHandle(const ArkUI_TouchRecognizerHandle recognizer)](#oh_arkui_touchrecognizer_getnodehandle) | - | Get component object of the specific touch recognizer. |
| [int32_t OH_ArkUI_TouchRecognizer_CancelTouch(ArkUI_TouchRecognizerHandle recognizer, ArkUI_GestureInterruptInfo* info)](#oh_arkui_touchrecognizer_canceltouch) | - | Send touch-cancel event to the touch recognizer in a gesture interruption callback. |
| [ArkUI_GestureEventActionType OH_ArkUI_GestureEvent_GetActionType(const ArkUI_GestureEvent* event)](#oh_arkui_gestureevent_getactiontype) | - | Obtains the gesture event type. |
| [const ArkUI_UIInputEvent* OH_ArkUI_GestureEvent_GetRawInputEvent(const ArkUI_GestureEvent* event)](#oh_arkui_gestureevent_getrawinputevent) | - | Obtains gesture input. |
| [int32_t OH_ArkUI_LongPress_GetRepeatCount(const ArkUI_GestureEvent* event)](#oh_arkui_longpress_getrepeatcount) | - | Obtains the number of times that a long press gesture is triggered periodically. |
| [float OH_ArkUI_PanGesture_GetVelocity(const ArkUI_GestureEvent* event)](#oh_arkui_pangesture_getvelocity) | - | Obtains the velocity of a pan gesture along the main axis. |
| [float OH_ArkUI_PanGesture_GetVelocityX(const ArkUI_GestureEvent* event)](#oh_arkui_pangesture_getvelocityx) | - | Obtains the velocity of a pan gesture along the x-axis. |
| [float OH_ArkUI_PanGesture_GetVelocityY(const ArkUI_GestureEvent* event)](#oh_arkui_pangesture_getvelocityy) | - | Obtains the velocity of a pan gesture along the y-axis. |
| [float OH_ArkUI_PanGesture_GetOffsetX(const ArkUI_GestureEvent* event)](#oh_arkui_pangesture_getoffsetx) | - | Obtains the relative offset of a pan gesture along the x-axis. |
| [float OH_ArkUI_PanGesture_GetOffsetY(const ArkUI_GestureEvent* event)](#oh_arkui_pangesture_getoffsety) | - | Obtains the relative offset of a pan gesture along the y-axis. |
| [float OH_ArkUI_SwipeGesture_GetAngle(const ArkUI_GestureEvent* event)](#oh_arkui_swipegesture_getangle) | - | Obtains the angle information of the swipe gesture.After a swipe gesture is recognized, a line connecting the two fingers is identified as the initial line.As the fingers swipe, the line between the fingers rotates. <br> Based on the coordinates of the initial line's and current line's end points, the arc tangent function is used tocalculate the respective included angle of the points relative to the horizontal direction <br> by using the following formula: Rotation angle = arctan2(cy2-cy1,cx2-cx1) - arctan2(y2-y1,x2-x1). <br> The initial line is used as the coordinate system. Values from 0 to 180 degrees represent clockwise rotation,while values from –180 to 0 degrees represent counterclockwise rotation. <br> |
| [float OH_ArkUI_SwipeGesture_GetVelocity(const ArkUI_GestureEvent* event)](#oh_arkui_swipegesture_getvelocity) | - | Obtains the average velocity of all fingers used in the swipe gesture. |
| [float OH_ArkUI_RotationGesture_GetAngle(const ArkUI_GestureEvent* event)](#oh_arkui_rotationgesture_getangle) | - | Obtains the angle information of a rotation gesture. |
| [float OH_ArkUI_PinchGesture_GetScale(const ArkUI_GestureEvent* event)](#oh_arkui_pinchgesture_getscale) | - | Obtains the scale ratio of a pinch gesture. |
| [float OH_ArkUI_PinchGesture_GetCenterX(const ArkUI_GestureEvent* event)](#oh_arkui_pinchgesture_getcenterx) | - | Obtains the X coordinate of the center of the pinch gesture, in vp,relative to the upper left corner of the current component. |
| [float OH_ArkUI_PinchGesture_GetCenterY(const ArkUI_GestureEvent* event)](#oh_arkui_pinchgesture_getcentery) | - | Obtains the Y coordinate of the center of the pinch gesture, in vp,relative to the upper left corner of the current component. |
| [ArkUI_NodeHandle OH_ArkUI_GestureEvent_GetNode(const ArkUI_GestureEvent* event)](#oh_arkui_gestureevent_getnode) | - | Get the ARKUI component bound to the gesture. |
| [int32_t OH_ArkUI_GetResponseRecognizersFromInterruptInfo(const ArkUI_GestureInterruptInfo* event, ArkUI_GestureRecognizerHandleArray* responseChain, int32_t* count)](#oh_arkui_getresponserecognizersfrominterruptinfo) | - | Obtains information about a gesture response chain. |
| [int32_t OH_ArkUI_SetGestureRecognizerEnabled(ArkUI_GestureRecognizer* recognizer, bool enabled)](#oh_arkui_setgesturerecognizerenabled) | - | Sets the enabled state of a gesture recognizer. |
| [int32_t OH_ArkUI_SetGestureRecognizerLimitFingerCount(ArkUI_GestureRecognizer* recognizer, bool limitFingerCount)](#oh_arkui_setgesturerecognizerlimitfingercount) | - | Sets whether to enable strict finger count checking. If this feature is enabled and the actual number of touchfingers does not match the set number, the gesture recognition fails. |
| [bool OH_ArkUI_GetGestureRecognizerEnabled(ArkUI_GestureRecognizer* recognizer)](#oh_arkui_getgesturerecognizerenabled) | - | Obtains the enabled state of a gesture recognizer. |
| [int32_t OH_ArkUI_GetGestureRecognizerState(ArkUI_GestureRecognizer* recognizer, ArkUI_GestureRecognizerState* state)](#oh_arkui_getgesturerecognizerstate) | - | Obtains the state of a gesture recognizer. |
| [int32_t OH_ArkUI_GetGestureEventTargetInfo(ArkUI_GestureRecognizer* recognizer, ArkUI_GestureEventTargetInfo** info)](#oh_arkui_getgestureeventtargetinfo) | - | Obtains the information about a gesture event target. |
| [int32_t OH_ArkUI_GestureEventTargetInfo_IsScrollBegin(ArkUI_GestureEventTargetInfo* info, bool* ret)](#oh_arkui_gestureeventtargetinfo_isscrollbegin) | - | Obtains whether this scroll container is scrolled to the top. |
| [int32_t OH_ArkUI_GestureEventTargetInfo_IsScrollEnd(ArkUI_GestureEventTargetInfo* info, bool* ret)](#oh_arkui_gestureeventtargetinfo_isscrollend) | - | Obtains whether this scroll container is scrolled to the bottom. |
| [int32_t OH_ArkUI_GetPanGestureDirectionMask(ArkUI_GestureRecognizer* recognizer, ArkUI_GestureDirectionMask* directionMask)](#oh_arkui_getpangesturedirectionmask) | - | Obtains the direction of a pan gesture. |
| [bool OH_ArkUI_IsBuiltInGesture(ArkUI_GestureRecognizer* recognizer)](#oh_arkui_isbuiltingesture) | - | Obtains whether a gesture is a built-in gesture. |
| [int32_t OH_ArkUI_GetGestureTag(ArkUI_GestureRecognizer* recognizer, char* buffer, int32_t bufferSize, int32_t* result)](#oh_arkui_getgesturetag) | - | Obtains the tag of a gesture recognizer. |
| [int32_t OH_ArkUI_GetGestureBindNodeId(ArkUI_GestureRecognizer* recognizer, char* nodeId, int32_t size, int32_t* result)](#oh_arkui_getgesturebindnodeid) | - | Obtains the ID of the component linked to a gesture recognizer. |
| [bool OH_ArkUI_IsGestureRecognizerValid(ArkUI_GestureRecognizer* recognizer)](#oh_arkui_isgesturerecognizervalid) | - | Obtains whether a gesture recognizer is valid. |
| [void* OH_ArkUI_ParallelInnerGestureEvent_GetUserData(ArkUI_ParallelInnerGestureEvent* event)](#oh_arkui_parallelinnergestureevent_getuserdata) | - | Obtains custom data in the parallel internal gesture event. |
| [ArkUI_GestureRecognizer* OH_ArkUI_ParallelInnerGestureEvent_GetCurrentRecognizer(ArkUI_ParallelInnerGestureEvent* event)](#oh_arkui_parallelinnergestureevent_getcurrentrecognizer) | - | Obtains the current gesture recognizer in a parallel internal gesture event. |
| [int32_t OH_ArkUI_ParallelInnerGestureEvent_GetConflictRecognizers(ArkUI_ParallelInnerGestureEvent* event, ArkUI_GestureRecognizerHandleArray* array, int32_t* size)](#oh_arkui_parallelinnergestureevent_getconflictrecognizers) | - | Obtains the conflicting gesture recognizers in a parallel internal gesture event. |
| [int32_t OH_ArkUI_SetArkUIGestureRecognizerDisposeNotify(ArkUI_GestureRecognizer* recognizer, ArkUI_GestureRecognizerDisposeNotifyCallback callback, void* userData)](#oh_arkui_setarkuigesturerecognizerdisposenotify) | - | Sets a callback function for notifying gesture recognizer destruction. |
| [int32_t OH_ArkUI_GetGestureParam_DirectMask(ArkUI_GestureRecognizer* recognizer, ArkUI_GestureDirectionMask* directMask)](#oh_arkui_getgestureparam_directmask) | - | Obtains the swipe direction of a gesture recognizer. |
| [int32_t OH_ArkUI_GetGestureParam_FingerCount(ArkUI_GestureRecognizer* recognizer, int* finger)](#oh_arkui_getgestureparam_fingercount) | - | Obtains the number of fingers used by a gesture recognizer. |
| [int32_t OH_ArkUI_GetGestureParam_limitFingerCount(ArkUI_GestureRecognizer* recognizer, bool* isLimited)](#oh_arkui_getgestureparam_limitfingercount) | - | Checks whether a gesture recognizer has a finger count limit. |
| [int32_t OH_ArkUI_GetGestureParam_repeat(ArkUI_GestureRecognizer* recognizer, bool* isRepeat)](#oh_arkui_getgestureparam_repeat) | - | Checks whether a gesture recognizer supports repeated event callbacks. |
| [int32_t OH_ArkUI_GetGestureParam_distance(ArkUI_GestureRecognizer* recognizer, double* distance)](#oh_arkui_getgestureparam_distance) | - | Obtains the allowed movement distance range for a gesture recognizer. |
| [int32_t OH_ArkUI_GetGestureParam_speed(ArkUI_GestureRecognizer* recognizer, double* speed)](#oh_arkui_getgestureparam_speed) | - | Obtains the minimum swipe speed recognized by a gesture recognizer. |
| [int32_t OH_ArkUI_GetGestureParam_duration(ArkUI_GestureRecognizer* recognizer, int* duration)](#oh_arkui_getgestureparam_duration) | - | Obtains the minimum duration required to trigger a long press by a gesture recognizer. |
| [int32_t OH_ArkUI_GetGestureParam_angle(ArkUI_GestureRecognizer* recognizer, double* angle)](#oh_arkui_getgestureparam_angle) | - | Obtains the minimum angle change required for a rotation gesture to be recognized by a gesture recognizer. |
| [int32_t OH_ArkUI_GetGestureParam_distanceThreshold(ArkUI_GestureRecognizer* recognizer, double* distanceThreshold)](#oh_arkui_getgestureparam_distancethreshold) | - | Obtains the movement threshold for gestures to be recognized by a gesture recognizer. |
| [ArkUI_ErrorCode OH_ArkUI_LongPressGesture_SetAllowableMovement(ArkUI_GestureRecognizer* recognizer, double allowableMovement)](#oh_arkui_longpressgesture_setallowablemovement) | - | Sets the maximum moving distance for gestures to be recognized by a long press gesture recognizer. |
| [ArkUI_ErrorCode OH_ArkUI_LongPressGesture_GetAllowableMovement(ArkUI_GestureRecognizer* recognizer, double* allowableMovement)](#oh_arkui_longpressgesture_getallowablemovement) | - | Obtains the maximum moving distance for gestures to be recognized by a long press gesture recognizer. |
| [ArkUI_ErrorCode OH_ArkUI_PanGesture_SetDistanceMap(ArkUI_GestureRecognizer* recognizer, int size, int* toolTypeArray, double* distanceArray)](#oh_arkui_pangesture_setdistancemap) | - | Sets the minimum movement distance thresholds for gestures to be recognized by a gesture recognizer. |
| [ArkUI_ErrorCode OH_ArkUI_PanGesture_GetDistanceByToolType(ArkUI_GestureRecognizer* recognizer, int toolType, double* distance)](#oh_arkui_pangesture_getdistancebytooltype) | - | Obtains the movement threshold for gestures to be recognized by a gesture recognizer for a specific tool type. |
| [ArkUI_ErrorCode OH_ArkUI_SetTouchTestDoneCallback(ArkUI_NodeHandle node, void* userData, void (\*touchTestDone)(ArkUI_GestureEvent* event, ArkUI_GestureRecognizerHandleArray recognizers, int32_t count, void* userData)
)](#oh_arkui_settouchtestdonecallback) | - | Registers a callback that is executed after all gesture recognizers are collected.When the user begins touching the screen, the system performs hit testing and collects gesture recognizersbased on the touch location. Subsequently, before processing any move events, the component can use this APIto determine the gesture recognizers that will participate in and compete for recognition. |
| [void* OH_ArkUI_GestureInterrupter_GetUserData(ArkUI_GestureInterruptInfo* event)](#oh_arkui_gestureinterrupter_getuserdata) | - | Obtains the custom data from a gesture interruption event. |
| [ArkUI_ErrorCode OH_ArkUI_PreventGestureRecognizerBegin(ArkUI_GestureRecognizer* recognizer)](#oh_arkui_preventgesturerecognizerbegin) | - | Prevents a gesture recognizer from participating in the current gesture recognition before all fingers arelifted.If the system has already determined the result of the gesture recognizer (regardless of success or failure),calling this API will be ineffective. |
| [ArkUI_ErrorCode OH_ArkUI_GestureCollectInterceptInfo_GetResponseRecognizers(const ArkUI_GestureCollectInterceptInfo* info, ArkUI_GestureRecognizerHandleArray* array, int32_t* size)](#oh_arkui_gesturecollectinterceptinfo_getresponserecognizers) | - | Obtains the gesture recognizer from the gesture collection interception information. |
| [ArkUI_ErrorCode OH_ArkUI_GestureCollectInterceptInfo_GetTouchRecognizers(const ArkUI_GestureCollectInterceptInfo* info, ArkUI_TouchRecognizerHandleArray* recognizers, int32_t* size)](#oh_arkui_gesturecollectinterceptinfo_gettouchrecognizers) | - | Obtains the handle to touch recognizer from the gesture collection interception information. |
| [ArkUI_ErrorCode OH_ArkUI_GestureCollectInterceptInfo_SetGestureCollectIntervention(ArkUI_GestureCollectInterceptInfo* info, OH_ArkUI_GestureCollectIntervention intervention)](#oh_arkui_gesturecollectinterceptinfo_setgesturecollectintervention) | - | Sets the gesture collection intervention mode. |
| [ArkUI_ErrorCode OH_ArkUI_GetGestureBindNodeUniqueId(const ArkUI_GestureRecognizer* recognizer, int32_t* uniqueId)](#oh_arkui_getgesturebindnodeuniqueid) | - | Obtains the unique ID of the component linked to a gesture recognizer. |
| [bool OH_ArkUI_TouchRecognizer_IsHostBelongsTo(const ArkUI_TouchRecognizerHandle recognizer, int32_t uniqueId)](#oh_arkui_touchrecognizer_ishostbelongsto) | - | Checks whether the node linked to the gesture is a child node of the passed component. |
| [bool OH_ArkUI_GestureRecognizer_IsHostBelongsTo(const ArkUI_GestureRecognizer* recognizer, int32_t uniqueId)](#oh_arkui_gesturerecognizer_ishostbelongsto) | - | Checks whether the node linked to the gesture is a child node of the passed component. |

## Enum type description

### ArkUI_GestureEventActionType

```c
enum ArkUI_GestureEventActionType
```

**Description**

Enumerates gesture event types.

**Since**: 12

| Enum item | Description |
| -- | -- |
| GESTURE_EVENT_ACTION_ACCEPT = 0x01 | Triggered. |
| GESTURE_EVENT_ACTION_UPDATE = 0x02 | Updated. |
| GESTURE_EVENT_ACTION_END = 0x04 | Ended. |
| GESTURE_EVENT_ACTION_CANCEL = 0x08 | Canceled. |

### ArkUI_GesturePriority

```c
enum ArkUI_GesturePriority
```

**Description**

Enumerates gesture event modes.

**Since**: 12

| Enum item | Description |
| -- | -- |
| NORMAL = 0 | Normal. |
| PRIORITY = 1 | High-priority. |
| PARALLEL = 2 | Parallel. |

### ArkUI_GroupGestureMode

```c
enum ArkUI_GroupGestureMode
```

**Description**

Enumerates gesture group modes.

**Since**: 12

| Enum item | Description |
| -- | -- |
| SEQUENTIAL_GROUP = 0 | Sequential recognition. Gestures are recognized in the registration sequence until all gestures are recognizedsuccessfully. Once one gesture fails to be recognized, all subsequent gestures fail to be recognized. |
| PARALLEL_GROUP = 1 | Parallel recognition. Registered gestures are recognized concurrently until all gestures are recognized. |
| EXCLUSIVE_GROUP = 2 | Exclusive recognition. Registered gestures are identified concurrently. |

### ArkUI_GestureDirection

```c
enum ArkUI_GestureDirection
```

**Description**

Enumerates gesture directions.

**Since**: 12

| Enum item | Description |
| -- | -- |
| GESTURE_DIRECTION_ALL = 0b1111 | All directions. |
| GESTURE_DIRECTION_HORIZONTAL = 0b0011 | Horizontal direction. |
| GESTURE_DIRECTION_VERTICAL = 0b1100 | Vertical direction. |
| GESTURE_DIRECTION_LEFT = 0b0001 | Leftward. |
| GESTURE_DIRECTION_RIGHT = 0b0010 | Rightward. |
| GESTURE_DIRECTION_UP = 0b0100 | Upward. |
| GESTURE_DIRECTION_DOWN = 0b1000 | Downward. |
| GESTURE_DIRECTION_NONE = 0 | None. |

### ArkUI_GestureMask

```c
enum ArkUI_GestureMask
```

**Description**

Enumerates gesture masking modes.

**Since**: 12

| Enum item | Description |
| -- | -- |
| NORMAL_GESTURE_MASK = 0 | The gestures of child components are enabled and recognized based on the default gesture recognition sequence. |
| IGNORE_INTERNAL_GESTURE_MASK | The gestures of child components are disabled, including the built-in gestures. |

### ArkUI_GestureRecognizerType

```c
enum ArkUI_GestureRecognizerType
```

**Description**

Enumerates gesture types.

**Since**: 12

| Enum item | Description |
| -- | -- |
| TAP_GESTURE = 0 | Tap. |
| LONG_PRESS_GESTURE | Long press. |
| PAN_GESTURE | Pan. |
| PINCH_GESTURE | Pinch. |
| ROTATION_GESTURE | Rotate. |
| SWIPE_GESTURE | Swipe. |
| GROUP_GESTURE | A group of gestures. |
| CLICK_GESTURE |  |
| DRAG_DROP |  |

### OH_ArkUI_GestureCollectIntervention

```c
enum OH_ArkUI_GestureCollectIntervention
```

**Description**

Defines the intervention types for gesture and event collection.

**Since**: 26.0.0

| Enum item | Description |
| -- | -- |
| OH_ARKUI_GESTURE_COLLECT_INTERVENTION_CONTINUE = 0 | Continues the normal gesture and event collection process. No intervention is performed.<br>**Since**: 26.0.0 |
| OH_ARKUI_GESTURE_COLLECT_INTERVENTION_DISCARD_LOWER = 1 | Discards all pending low-priority gestures and events. <br> The gestures of the left sibling component and ancestor nodes (parent nodes and above) are discarded. <br> Only the gestures already collected on the current node and higher-priority nodes are retained.<br>**Since**: 26.0.0 |
| OH_ARKUI_GESTURE_COLLECT_INTERVENTION_DISCARD_HIGHER = 2 | Discards all collected high-priority gestures and events. <br> The gestures of the right sibling component and the current node are discarded. <br> Continues processing the collection flow for lower-priority gestures (left sibling and ancestor nodes).<br>**Since**: 26.0.0 |
| OH_ARKUI_GESTURE_COLLECT_INTERVENTION_DISCARD_SELF = 3 | Discards the gestures and events of the current node. <br> The gestures and events of the current node are excluded from the gesture tree. <br> The gestures of the sibling components (left and right) and the ancestor node are still collected.<br>**Since**: 26.0.0 |
| OH_ARKUI_GESTURE_COLLECT_INTERVENTION_DISCARD_LOWER_PRIORITY_SIBLINGS = 4 | Discards the gestures and events to be collected from the left sibling component. <br> The gestures and events of the current node and the right sibling component are retained. <br> Continues the collection flow for the parent and ancestor nodes.<br>**Since**: 26.0.0 |

### ArkUI_GestureInterruptResult

```c
enum ArkUI_GestureInterruptResult
```

**Description**

Enumerates gesture interruption results.

**Since**: 12

| Enum item | Description |
| -- | -- |
| GESTURE_INTERRUPT_RESULT_CONTINUE = 0 | The gesture recognition process continues. |
| GESTURE_INTERRUPT_RESULT_REJECT | The gesture recognition process is paused. |

### ArkUI_GestureRecognizerState

```c
enum ArkUI_GestureRecognizerState
```

**Description**

Enumerates the gesture recognizer states.

**Since**: 12

| Enum item | Description |
| -- | -- |
| ARKUI_GESTURE_RECOGNIZER_STATE_READY = 0 | Ready. |
| ARKUI_GESTURE_RECOGNIZER_STATE_DETECTING = 1 | Detecting. |
| ARKUI_GESTURE_RECOGNIZER_STATE_PENDING = 2 | Pending. |
| ARKUI_GESTURE_RECOGNIZER_STATE_BLOCKED = 3 | Blocked. |
| ARKUI_GESTURE_RECOGNIZER_STATE_SUCCESSFUL = 4 | Successful. |
| ARKUI_GESTURE_RECOGNIZER_STATE_FAILED = 5 | Failed. |


## Function description

### ArkUI_GestureRecognizerDisposeNotifyCallback()

```c
typedef void (*ArkUI_GestureRecognizerDisposeNotifyCallback)(ArkUI_GestureRecognizer* recognizer, void* userData)
```

**Description**

Defines a callback function for notifying gesture recognizer destruction.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (ArkUI_GestureRecognizer\* recognizer | Indicates the pointer to a gesture recognizer. |
| void\* userData | Indicates the custom data. |

### OH_ArkUI_GestureInterruptInfo_GetSystemFlag()

```c
bool OH_ArkUI_GestureInterruptInfo_GetSystemFlag(const ArkUI_GestureInterruptInfo* event)
```

**Description**

Checks whether a gesture is a built-in gesture of the component.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureInterruptInfo](capi-arkui-nativemodule-arkui-gestureinterruptinfo.md)* event | Indicates the pointer to the gesture interruption information. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | Returns <b>true</b> if the gesture is a built-in gesture; returns <b>false</b> otherwise. |

### OH_ArkUI_GestureInterruptInfo_GetRecognizer()

```c
ArkUI_GestureRecognizer* OH_ArkUI_GestureInterruptInfo_GetRecognizer(const ArkUI_GestureInterruptInfo* event)
```

**Description**

Obtains the pointer to interrupted gesture recognizer.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureInterruptInfo](capi-arkui-nativemodule-arkui-gestureinterruptinfo.md)* event | Indicates the pointer to the gesture interruption information. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_GestureRecognizer*](capi-arkui-nativemodule-arkui-gesturerecognizer.md) | Returns the pointer to interrupted gesture recognizer. |

### OH_ArkUI_GestureInterruptInfo_GetGestureEvent()

```c
ArkUI_GestureEvent* OH_ArkUI_GestureInterruptInfo_GetGestureEvent(const ArkUI_GestureInterruptInfo* event)
```

**Description**

Obtains the pointer to the interrupted gesture event.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureInterruptInfo](capi-arkui-nativemodule-arkui-gestureinterruptinfo.md)* event | Indicates the pointer to the gesture interruption information. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_GestureEvent*](capi-arkui-nativemodule-arkui-gestureevent.md) | Returns the pointer to the interrupted gesture event. |

### OH_ArkUI_GestureInterruptInfo_GetSystemRecognizerType()

```c
int32_t OH_ArkUI_GestureInterruptInfo_GetSystemRecognizerType(const ArkUI_GestureInterruptInfo* event)
```

**Description**

Obtains the type of the system gesture to trigger.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureInterruptInfo](capi-arkui-nativemodule-arkui-gestureinterruptinfo.md)* event | Indicates the pointer to the gesture interruption information. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the type of the system gesture to trigger. If the gesture to trigger is not a system gesture,<br>        <b>-1</b> is returned. |

### OH_ArkUI_GestureInterruptInfo_GetTouchRecognizers()

```c
int32_t OH_ArkUI_GestureInterruptInfo_GetTouchRecognizers(const ArkUI_GestureInterruptInfo* info, ArkUI_TouchRecognizerHandleArray* recognizers, int32_t* size)
```

**Description**

Get the touch recognizer handles from the gesture interrupt info.

**Since**: 15

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureInterruptInfo](capi-arkui-nativemodule-arkui-gestureinterruptinfo.md)* info | Indicates the pointer to a gesture interrupt info. |
| ArkUI_TouchRecognizerHandleArray* recognizers | Indicates the pointer to an array of touch recognizer handles. |
| int32_t* size | Indicates the size of recognizers. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if success.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_TouchRecognizer_GetNodeHandle()

```c
ArkUI_NodeHandle OH_ArkUI_TouchRecognizer_GetNodeHandle(const ArkUI_TouchRecognizerHandle recognizer)
```

**Description**

Get component object of the specific touch recognizer.

**Since**: 15

**Parameters**:

| Parameter | Description |
| -- | -- |
| const ArkUI_TouchRecognizerHandle recognizer | Indicates the pointer to the TouchRecognizer. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) | Get component object of the specific touch recognizer. |

### OH_ArkUI_TouchRecognizer_CancelTouch()

```c
int32_t OH_ArkUI_TouchRecognizer_CancelTouch(ArkUI_TouchRecognizerHandle recognizer, ArkUI_GestureInterruptInfo* info)
```

**Description**

Send touch-cancel event to the touch recognizer in a gesture interruption callback.

**Since**: 15

**Parameters**:

| Parameter | Description |
| -- | -- |
| ArkUI_TouchRecognizerHandle recognizer | Indicates the touch recognizer handle. |
| [ArkUI_GestureInterruptInfo](capi-arkui-nativemodule-arkui-gestureinterruptinfo.md)* info | Indicates the pointer to a gesture interrupt info. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if success.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_GestureEvent_GetActionType()

```c
ArkUI_GestureEventActionType OH_ArkUI_GestureEvent_GetActionType(const ArkUI_GestureEvent* event)
```

**Description**

Obtains the gesture event type.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureEvent](capi-arkui-nativemodule-arkui-gestureevent.md)* event | Indicates the pointer to the gesture event. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_GestureEventActionType](capi-native-gesture-h.md#arkui_gestureeventactiontype) | Returns the gesture event type. |

### OH_ArkUI_GestureEvent_GetRawInputEvent()

```c
const ArkUI_UIInputEvent* OH_ArkUI_GestureEvent_GetRawInputEvent(const ArkUI_GestureEvent* event)
```

**Description**

Obtains gesture input.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureEvent](capi-arkui-nativemodule-arkui-gestureevent.md)* event | Indicates the pointer to the gesture event. |

**Returns**:

| Type | Description |
| -- | -- |
| const ArkUI_UIInputEvent* | Returns the pointer to the input event of the gesture event. |

### OH_ArkUI_LongPress_GetRepeatCount()

```c
int32_t OH_ArkUI_LongPress_GetRepeatCount(const ArkUI_GestureEvent* event)
```

**Description**

Obtains the number of times that a long press gesture is triggered periodically.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureEvent](capi-arkui-nativemodule-arkui-gestureevent.md)* event | Indicates the pointer to the gesture event. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the number of times that the long press gesture is triggered periodically. |

### OH_ArkUI_PanGesture_GetVelocity()

```c
float OH_ArkUI_PanGesture_GetVelocity(const ArkUI_GestureEvent* event)
```

**Description**

Obtains the velocity of a pan gesture along the main axis.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureEvent](capi-arkui-nativemodule-arkui-gestureevent.md)* event | Indicates the pointer to the gesture event. |

**Returns**:

| Type | Description |
| -- | -- |
| float | Returns the velocity of the pan gesture along the main axis, in px/s.<br>        The value is the square root of the sum of the squares of the velocity on the x-axis and y-axis. |

### OH_ArkUI_PanGesture_GetVelocityX()

```c
float OH_ArkUI_PanGesture_GetVelocityX(const ArkUI_GestureEvent* event)
```

**Description**

Obtains the velocity of a pan gesture along the x-axis.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureEvent](capi-arkui-nativemodule-arkui-gestureevent.md)* event | Indicates the pointer to the gesture event. |

**Returns**:

| Type | Description |
| -- | -- |
| float | Returns the velocity of the pan gesture along the x-axis, in px/s. |

### OH_ArkUI_PanGesture_GetVelocityY()

```c
float OH_ArkUI_PanGesture_GetVelocityY(const ArkUI_GestureEvent* event)
```

**Description**

Obtains the velocity of a pan gesture along the y-axis.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureEvent](capi-arkui-nativemodule-arkui-gestureevent.md)* event | Indicates the pointer to the gesture event. |

**Returns**:

| Type | Description |
| -- | -- |
| float | Returns the velocity of the pan gesture along the y-axis, in px/s. |

### OH_ArkUI_PanGesture_GetOffsetX()

```c
float OH_ArkUI_PanGesture_GetOffsetX(const ArkUI_GestureEvent* event)
```

**Description**

Obtains the relative offset of a pan gesture along the x-axis.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureEvent](capi-arkui-nativemodule-arkui-gestureevent.md)* event | Indicates the pointer to the gesture event. |

**Returns**:

| Type | Description |
| -- | -- |
| float | Returns the relative offset of the gesture along the x-axis, in px. |

### OH_ArkUI_PanGesture_GetOffsetY()

```c
float OH_ArkUI_PanGesture_GetOffsetY(const ArkUI_GestureEvent* event)
```

**Description**

Obtains the relative offset of a pan gesture along the y-axis.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureEvent](capi-arkui-nativemodule-arkui-gestureevent.md)* event | Indicates the pointer to the gesture event. |

**Returns**:

| Type | Description |
| -- | -- |
| float | Returns the relative offset of the gesture along the y-axis, in px. |

### OH_ArkUI_SwipeGesture_GetAngle()

```c
float OH_ArkUI_SwipeGesture_GetAngle(const ArkUI_GestureEvent* event)
```

**Description**

Obtains the angle information of the swipe gesture.After a swipe gesture is recognized, a line connecting the two fingers is identified as the initial line.As the fingers swipe, the line between the fingers rotates. <br> Based on the coordinates of the initial line's and current line's end points, the arc tangent function is used tocalculate the respective included angle of the points relative to the horizontal direction <br> by using the following formula: Rotation angle = arctan2(cy2-cy1,cx2-cx1) - arctan2(y2-y1,x2-x1). <br> The initial line is used as the coordinate system. Values from 0 to 180 degrees represent clockwise rotation,while values from –180 to 0 degrees represent counterclockwise rotation. <br>

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureEvent](capi-arkui-nativemodule-arkui-gestureevent.md)* event | Indicates the pointer to the gesture event. |

**Returns**:

| Type | Description |
| -- | -- |
| float | Returns the angle of the swipe gesture, which is the result obtained based on the aforementioned formula. |

### OH_ArkUI_SwipeGesture_GetVelocity()

```c
float OH_ArkUI_SwipeGesture_GetVelocity(const ArkUI_GestureEvent* event)
```

**Description**

Obtains the average velocity of all fingers used in the swipe gesture.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureEvent](capi-arkui-nativemodule-arkui-gestureevent.md)* event | Indicates the pointer to the gesture event. |

**Returns**:

| Type | Description |
| -- | -- |
| float | Returns the average velocity of all fingers used in the swipe gesture, in px/s. |

### OH_ArkUI_RotationGesture_GetAngle()

```c
float OH_ArkUI_RotationGesture_GetAngle(const ArkUI_GestureEvent* event)
```

**Description**

Obtains the angle information of a rotation gesture.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureEvent](capi-arkui-nativemodule-arkui-gestureevent.md)* event | Indicates the pointer to the gesture event. |

**Returns**:

| Type | Description |
| -- | -- |
| float | Returns the rotation angle. |

### OH_ArkUI_PinchGesture_GetScale()

```c
float OH_ArkUI_PinchGesture_GetScale(const ArkUI_GestureEvent* event)
```

**Description**

Obtains the scale ratio of a pinch gesture.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureEvent](capi-arkui-nativemodule-arkui-gestureevent.md)* event | Indicates the pointer to the gesture event. |

**Returns**:

| Type | Description |
| -- | -- |
| float | Returns the scale ratio. |

### OH_ArkUI_PinchGesture_GetCenterX()

```c
float OH_ArkUI_PinchGesture_GetCenterX(const ArkUI_GestureEvent* event)
```

**Description**

Obtains the X coordinate of the center of the pinch gesture, in vp,relative to the upper left corner of the current component.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureEvent](capi-arkui-nativemodule-arkui-gestureevent.md)* event | Indicates the pointer to the gesture event. |

**Returns**:

| Type | Description |
| -- | -- |
| float | Returns the X coordinate of the center of the pinch gesture, in vp,<br>relative to the upper left corner of the current component. |

### OH_ArkUI_PinchGesture_GetCenterY()

```c
float OH_ArkUI_PinchGesture_GetCenterY(const ArkUI_GestureEvent* event)
```

**Description**

Obtains the Y coordinate of the center of the pinch gesture, in vp,relative to the upper left corner of the current component.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureEvent](capi-arkui-nativemodule-arkui-gestureevent.md)* event | Indicates the pointer to the gesture event. |

**Returns**:

| Type | Description |
| -- | -- |
| float | Returns the Y coordinate of the center of the pinch gesture, in vp,<br>relative to the upper left corner of the current component. |

### OH_ArkUI_GestureEvent_GetNode()

```c
ArkUI_NodeHandle OH_ArkUI_GestureEvent_GetNode(const ArkUI_GestureEvent* event)
```

**Description**

Get the ARKUI component bound to the gesture.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureEvent](capi-arkui-nativemodule-arkui-gestureevent.md)* event | gesture event. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) | ARKUI component bound to the gesture.If Null is returned, it means event is an invalid value. |

### OH_ArkUI_GetResponseRecognizersFromInterruptInfo()

```c
int32_t OH_ArkUI_GetResponseRecognizersFromInterruptInfo(const ArkUI_GestureInterruptInfo* event, ArkUI_GestureRecognizerHandleArray* responseChain, int32_t* count)
```

**Description**

Obtains information about a gesture response chain.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureInterruptInfo](capi-arkui-nativemodule-arkui-gestureinterruptinfo.md)* event | Indicates the pointer to the gesture interruption information. |
| ArkUI_GestureRecognizerHandleArray* responseChain | Indicates the pointer to an array of gesture recognizers on the response chain. |
| int32_t* count | Indicates the pointer to the number of gesture recognizers on the response chain. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if success.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_SetGestureRecognizerEnabled()

```c
int32_t OH_ArkUI_SetGestureRecognizerEnabled(ArkUI_GestureRecognizer* recognizer, bool enabled)
```

**Description**

Sets the enabled state of a gesture recognizer.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Indicates the pointer to a gesture recognizer. |
| bool enabled | Indicates the enabled state. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if success.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_SetGestureRecognizerLimitFingerCount()

```c
int32_t OH_ArkUI_SetGestureRecognizerLimitFingerCount(ArkUI_GestureRecognizer* recognizer, bool limitFingerCount)
```

**Description**

Sets whether to enable strict finger count checking. If this feature is enabled and the actual number of touchfingers does not match the set number, the gesture recognition fails.

**Since**: 15

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Indicates the pointer to a gesture recognizer. |
| bool limitFingerCount | Indicates whether to enable strict finger count checking. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if success.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_GetGestureRecognizerEnabled()

```c
bool OH_ArkUI_GetGestureRecognizerEnabled(ArkUI_GestureRecognizer* recognizer)
```

**Description**

Obtains the enabled state of a gesture recognizer.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Indicates the pointer to a gesture recognizer. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | Returns <b>true</b> if the gesture recognizer is enabled.<br>        Returns <b>false</b> if the gesture recognizer is disabled. |

### OH_ArkUI_GetGestureRecognizerState()

```c
int32_t OH_ArkUI_GetGestureRecognizerState(ArkUI_GestureRecognizer* recognizer, ArkUI_GestureRecognizerState* state)
```

**Description**

Obtains the state of a gesture recognizer.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Indicates the pointer to a gesture recognizer. |
| [ArkUI_GestureRecognizerState](capi-native-gesture-h.md#arkui_gesturerecognizerstate)* state | Indicates the pointer to the state of the gesture recognizer. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if success.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_GetGestureEventTargetInfo()

```c
int32_t OH_ArkUI_GetGestureEventTargetInfo(ArkUI_GestureRecognizer* recognizer, ArkUI_GestureEventTargetInfo** info)
```

**Description**

Obtains the information about a gesture event target.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Indicates the pointer to a gesture recognizer. |
| [ArkUI_GestureEventTargetInfo](capi-arkui-nativemodule-arkui-gestureeventtargetinfo.md)** info | Indicates the information about a gesture event target. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if success.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_GestureEventTargetInfo_IsScrollBegin()

```c
int32_t OH_ArkUI_GestureEventTargetInfo_IsScrollBegin(ArkUI_GestureEventTargetInfo* info, bool* ret)
```

**Description**

Obtains whether this scroll container is scrolled to the top.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureEventTargetInfo](capi-arkui-nativemodule-arkui-gestureeventtargetinfo.md)* info | Indicates the information about a gesture event target. |
| bool* ret | Indicates whether the scroll container is scrolled to the top. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if success.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs.<br>        Returns [ARKUI_ERROR_CODE_NON_SCROLLABLE_CONTAINER](capi-error-code-h.md#arkui_errorcode) if the component is not a scroll container. |

### OH_ArkUI_GestureEventTargetInfo_IsScrollEnd()

```c
int32_t OH_ArkUI_GestureEventTargetInfo_IsScrollEnd(ArkUI_GestureEventTargetInfo* info, bool* ret)
```

**Description**

Obtains whether this scroll container is scrolled to the bottom.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureEventTargetInfo](capi-arkui-nativemodule-arkui-gestureeventtargetinfo.md)* info | Indicates the information about a gesture event target. |
| bool* ret | Indicates whether the scroll container is scrolled to the bottom. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if success.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs.<br>        Returns [ARKUI_ERROR_CODE_NON_SCROLLABLE_CONTAINER](capi-error-code-h.md#arkui_errorcode) if the component is not a scroll container. |

### OH_ArkUI_GetPanGestureDirectionMask()

```c
int32_t OH_ArkUI_GetPanGestureDirectionMask(ArkUI_GestureRecognizer* recognizer, ArkUI_GestureDirectionMask* directionMask)
```

**Description**

Obtains the direction of a pan gesture.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Indicates the pointer to a gesture recognizer. |
| ArkUI_GestureDirectionMask* directionMask | Indicates the pan direction. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if success.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_IsBuiltInGesture()

```c
bool OH_ArkUI_IsBuiltInGesture(ArkUI_GestureRecognizer* recognizer)
```

**Description**

Obtains whether a gesture is a built-in gesture.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Indicates the pointer to a gesture recognizer. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | Returns <b>true</b> if the gesture is a built-in gesture; returns <b>false</b> otherwise. |

### OH_ArkUI_GetGestureTag()

```c
int32_t OH_ArkUI_GetGestureTag(ArkUI_GestureRecognizer* recognizer, char* buffer, int32_t bufferSize, int32_t* result)
```

**Description**

Obtains the tag of a gesture recognizer.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Indicates the pointer to a gesture recognizer. |
| char* buffer | Indicates the buffer. |
| int32_t bufferSize | Indicates the buffer size. |
| int32_t* result | Indicates the length of the string to be written to the buffer. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if success.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs.<br>        Returns [ARKUI_ERROR_CODE_BUFFER_SIZE_NOT_ENOUGH](capi-error-code-h.md#arkui_errorcode) if the buffer is not large enough. |

### OH_ArkUI_GetGestureBindNodeId()

```c
int32_t OH_ArkUI_GetGestureBindNodeId(ArkUI_GestureRecognizer* recognizer, char* nodeId, int32_t size, int32_t* result)
```

**Description**

Obtains the ID of the component linked to a gesture recognizer.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Indicates the pointer to a gesture recognizer. |
| char* nodeId | Indicates the component ID. |
| int32_t size | Indicates the buffer size. |
| int32_t* result | Indicates the length of the string to be written to the buffer. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if success.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs.<br>        Returns [ARKUI_ERROR_CODE_BUFFER_SIZE_NOT_ENOUGH](capi-error-code-h.md#arkui_errorcode) if the buffer is not large enough. |

### OH_ArkUI_IsGestureRecognizerValid()

```c
bool OH_ArkUI_IsGestureRecognizerValid(ArkUI_GestureRecognizer* recognizer)
```

**Description**

Obtains whether a gesture recognizer is valid.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Indicates the pointer to a gesture recognizer. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | Returns <b>true</b> if the gesture recognizer is valid.<br>        Returns <b>false</b> if the gesture recognizer is invalid. |

### OH_ArkUI_ParallelInnerGestureEvent_GetUserData()

```c
void* OH_ArkUI_ParallelInnerGestureEvent_GetUserData(ArkUI_ParallelInnerGestureEvent* event)
```

**Description**

Obtains custom data in the parallel internal gesture event.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ParallelInnerGestureEvent](capi-arkui-nativemodule-arkui-parallelinnergestureevent.md)* event | Indicates the pointer to a parallel internal gesture event. |

**Returns**:

| Type | Description |
| -- | -- |
| void* | Returns the pointer to custom data. |

### OH_ArkUI_ParallelInnerGestureEvent_GetCurrentRecognizer()

```c
ArkUI_GestureRecognizer* OH_ArkUI_ParallelInnerGestureEvent_GetCurrentRecognizer(ArkUI_ParallelInnerGestureEvent* event)
```

**Description**

Obtains the current gesture recognizer in a parallel internal gesture event.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ParallelInnerGestureEvent](capi-arkui-nativemodule-arkui-parallelinnergestureevent.md)* event | Indicates the pointer to a parallel internal gesture event. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_GestureRecognizer*](capi-arkui-nativemodule-arkui-gesturerecognizer.md) | Returns the pointer to the current gesture recognizer. |

### OH_ArkUI_ParallelInnerGestureEvent_GetConflictRecognizers()

```c
int32_t OH_ArkUI_ParallelInnerGestureEvent_GetConflictRecognizers(ArkUI_ParallelInnerGestureEvent* event, ArkUI_GestureRecognizerHandleArray* array, int32_t* size)
```

**Description**

Obtains the conflicting gesture recognizers in a parallel internal gesture event.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_ParallelInnerGestureEvent](capi-arkui-nativemodule-arkui-parallelinnergestureevent.md)* event | Indicates the pointer to a parallel internal gesture event. |
| ArkUI_GestureRecognizerHandleArray* array | Indicates the pointer to the array of conflicting gesture recognizers. |
| int32_t* size | Indicates the size of the array of conflicting gesture recognizers. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if success.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_SetArkUIGestureRecognizerDisposeNotify()

```c
int32_t OH_ArkUI_SetArkUIGestureRecognizerDisposeNotify(ArkUI_GestureRecognizer* recognizer, ArkUI_GestureRecognizerDisposeNotifyCallback callback, void* userData)
```

**Description**

Sets a callback function for notifying gesture recognizer destruction.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Indicates the pointer to a gesture recognizer. |
| [ArkUI_GestureRecognizerDisposeNotifyCallback](capi-native-gesture-h.md#arkui_gesturerecognizerdisposenotifycallback) callback | Indicates the callback function for notifying gesture recognizer destruction. |
| void* userData | Indicates the custom data. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if success.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### OH_ArkUI_GetGestureParam_DirectMask()

```c
int32_t OH_ArkUI_GetGestureParam_DirectMask(ArkUI_GestureRecognizer* recognizer, ArkUI_GestureDirectionMask* directMask)
```

**Description**

Obtains the swipe direction of a gesture recognizer.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Pointer to a gesture recognizer. |
| ArkUI_GestureDirectionMask* directMask | Swipe direction of the gesture recognizer. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the result code.<br>        Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_GetGestureParam_FingerCount()

```c
int32_t OH_ArkUI_GetGestureParam_FingerCount(ArkUI_GestureRecognizer* recognizer, int* finger)
```

**Description**

Obtains the number of fingers used by a gesture recognizer.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Pointer to a gesture recognizer. |
| int* finger | Number of fingers used by the gesture recognizer. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the result code.<br>        Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_GetGestureParam_limitFingerCount()

```c
int32_t OH_ArkUI_GetGestureParam_limitFingerCount(ArkUI_GestureRecognizer* recognizer, bool* isLimited)
```

**Description**

Checks whether a gesture recognizer has a finger count limit.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Pointer to a gesture recognizer. |
| bool* isLimited | Whether the gesture recognizer has a finger count limit. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the result code.<br>        Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_GetGestureParam_repeat()

```c
int32_t OH_ArkUI_GetGestureParam_repeat(ArkUI_GestureRecognizer* recognizer, bool* isRepeat)
```

**Description**

Checks whether a gesture recognizer supports repeated event callbacks.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Pointer to a gesture recognizer. |
| bool* isRepeat | Whether the gesture recognizer supports repeated event callbacks. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the result code.<br>        Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>        Returns [ARKUI_ERROR_CODE_RECOGNIZER_TYPE_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the gesture recognizer type is not<br>supported. |

### OH_ArkUI_GetGestureParam_distance()

```c
int32_t OH_ArkUI_GetGestureParam_distance(ArkUI_GestureRecognizer* recognizer, double* distance)
```

**Description**

Obtains the allowed movement distance range for a gesture recognizer.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Pointer to a gesture recognizer. |
| double* distance | Allowed movement distance range of the gesture recognizer. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the result code.<br>        Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>        Returns [ARKUI_ERROR_CODE_RECOGNIZER_TYPE_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the gesture recognizer type is not<br>supported. |

### OH_ArkUI_GetGestureParam_speed()

```c
int32_t OH_ArkUI_GetGestureParam_speed(ArkUI_GestureRecognizer* recognizer, double* speed)
```

**Description**

Obtains the minimum swipe speed recognized by a gesture recognizer.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Pointer to a gesture recognizer. |
| double* speed | Minimum swipe speed recognized by a gesture recognizer. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the result code.<br>        Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>        Returns [ARKUI_ERROR_CODE_RECOGNIZER_TYPE_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the gesture recognizer type is not<br>supported. |

### OH_ArkUI_GetGestureParam_duration()

```c
int32_t OH_ArkUI_GetGestureParam_duration(ArkUI_GestureRecognizer* recognizer, int* duration)
```

**Description**

Obtains the minimum duration required to trigger a long press by a gesture recognizer.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Pointer to a gesture recognizer. |
| int* duration | Minimum duration for a long press. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the result code.<br>        Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>        Returns [ARKUI_ERROR_CODE_RECOGNIZER_TYPE_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the gesture recognizer type is not<br>supported. |

### OH_ArkUI_GetGestureParam_angle()

```c
int32_t OH_ArkUI_GetGestureParam_angle(ArkUI_GestureRecognizer* recognizer, double* angle)
```

**Description**

Obtains the minimum angle change required for a rotation gesture to be recognized by a gesture recognizer.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Pointer to a gesture recognizer. |
| double* angle | Minimum angle change. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the result code.<br>        Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>        Returns [ARKUI_ERROR_CODE_RECOGNIZER_TYPE_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the gesture recognizer type is not<br>supported. |

### OH_ArkUI_GetGestureParam_distanceThreshold()

```c
int32_t OH_ArkUI_GetGestureParam_distanceThreshold(ArkUI_GestureRecognizer* recognizer, double* distanceThreshold)
```

**Description**

Obtains the movement threshold for gestures to be recognized by a gesture recognizer.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Pointer to a gesture recognizer. |
| distanceThresHold | Movement threshold. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns the result code.<br>        Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>        Returns [ARKUI_ERROR_CODE_RECOGNIZER_TYPE_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the gesture recognizer type is not<br>supported. |

### OH_ArkUI_LongPressGesture_SetAllowableMovement()

```c
ArkUI_ErrorCode OH_ArkUI_LongPressGesture_SetAllowableMovement(ArkUI_GestureRecognizer* recognizer, double allowableMovement)
```

**Description**

Sets the maximum moving distance for gestures to be recognized by a long press gesture recognizer.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Indicates the pointer to a gesture recognizer. |
| double allowableMovement | Indicates maximum moving distance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ErrorCode](capi-error-code-h.md#arkui_errorcode) | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs.<br>         Returns [ARKUI_ERROR_CODE_RECOGNIZER_TYPE_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the gesture recognizer type is<br>                 not supported. |

### OH_ArkUI_LongPressGesture_GetAllowableMovement()

```c
ArkUI_ErrorCode OH_ArkUI_LongPressGesture_GetAllowableMovement(ArkUI_GestureRecognizer* recognizer, double* allowableMovement)
```

**Description**

Obtains the maximum moving distance for gestures to be recognized by a long press gesture recognizer.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Pointer to a gesture recognizer. |
| double* allowableMovement | Indicates maximum moving distance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ErrorCode](capi-error-code-h.md#arkui_errorcode) | Returns the result code.<br>         Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs.<br>         Returns [ARKUI_ERROR_CODE_RECOGNIZER_TYPE_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the gesture recognizer type is not<br> supported. |

### OH_ArkUI_PanGesture_SetDistanceMap()

```c
ArkUI_ErrorCode OH_ArkUI_PanGesture_SetDistanceMap(ArkUI_GestureRecognizer* recognizer, int size, int* toolTypeArray, double* distanceArray)
```

**Description**

Sets the minimum movement distance thresholds for gestures to be recognized by a gesture recognizer.

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Indicates the pointer to a gesture recognizer. |
| int size | Size of the array of minimum movement distance thresholds. |
| int* toolTypeArray | Pointer to the array of tool types for which thresholds are set. |
| double* distanceArray | Pointer to the array of minimum movement distances, in px. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ErrorCode](capi-error-code-h.md#arkui_errorcode) | Returns the result code.<br>        Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs.<br>        Returns [ARKUI_ERROR_CODE_RECOGNIZER_TYPE_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the gesture recognizer type is<br>                not supported. |

### OH_ArkUI_PanGesture_GetDistanceByToolType()

```c
ArkUI_ErrorCode OH_ArkUI_PanGesture_GetDistanceByToolType(ArkUI_GestureRecognizer* recognizer, int toolType, double* distance)
```

**Description**

Obtains the movement threshold for gestures to be recognized by a gesture recognizer for a specific tool type.

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Indicates the pointer to a gesture recognizer. |
| int toolType | Tool type for which you want to obtain the threshold. |
| double* distance | Gesture movement threshold of the gesture recognizer, in px. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ErrorCode](capi-error-code-h.md#arkui_errorcode) | Returns the result code.<br>        Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>        Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs.<br>        Returns [ARKUI_ERROR_CODE_RECOGNIZER_TYPE_NOT_SUPPORTED](capi-error-code-h.md#arkui_errorcode) if the gesture recognizer type is<br>                not supported. |

### OH_ArkUI_SetTouchTestDoneCallback()

```c
ArkUI_ErrorCode OH_ArkUI_SetTouchTestDoneCallback(ArkUI_NodeHandle node, void* userData, void (*touchTestDone)(ArkUI_GestureEvent* event, ArkUI_GestureRecognizerHandleArray recognizers, int32_t count, void* userData)
)
```

**Description**

Registers a callback that is executed after all gesture recognizers are collected.When the user begins touching the screen, the system performs hit testing and collects gesture recognizersbased on the touch location. Subsequently, before processing any move events, the component can use this APIto determine the gesture recognizers that will participate in and compete for recognition.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Handle to the node on which the callback is to be set. |
| void\* userData | Custom data. |
| void (\*touchTestDone)(ArkUI_GestureEvent\* event | Callback for completion of gesture recognizer collection.- event: Basic information of the gesture.- recognizers: Array of gesture recognizers.- count: Number of gesture recognizers. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ErrorCode](capi-error-code-h.md#arkui_errorcode) | Result code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode): The operation is successful.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode): A parameter error occurs. |

### OH_ArkUI_GestureInterrupter_GetUserData()

```c
void* OH_ArkUI_GestureInterrupter_GetUserData(ArkUI_GestureInterruptInfo* event)
```

**Description**

Obtains the custom data from a gesture interruption event.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureInterruptInfo](capi-arkui-nativemodule-arkui-gestureinterruptinfo.md)* event | Pointer to the gesture interruption information. |

**Returns**:

| Type | Description |
| -- | -- |
| void* | Returns the pointer to the custom data. |

### OH_ArkUI_PreventGestureRecognizerBegin()

```c
ArkUI_ErrorCode OH_ArkUI_PreventGestureRecognizerBegin(ArkUI_GestureRecognizer* recognizer)
```

**Description**

Prevents a gesture recognizer from participating in the current gesture recognition before all fingers arelifted.If the system has already determined the result of the gesture recognizer (regardless of success or failure),calling this API will be ineffective.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Pointer to a gesture recognizer. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ErrorCode](capi-error-code-h.md#arkui_errorcode) | Result code.<br>         [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode): The operation is successful.<br>         [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode): A parameter error occurs. |

### OH_ArkUI_GestureCollectInterceptInfo_GetResponseRecognizers()

```c
ArkUI_ErrorCode OH_ArkUI_GestureCollectInterceptInfo_GetResponseRecognizers(const ArkUI_GestureCollectInterceptInfo* info, ArkUI_GestureRecognizerHandleArray* array, int32_t* size)
```

**Description**

Obtains the gesture recognizer from the gesture collection interception information.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureCollectInterceptInfo](capi-arkui-nativemodule-arkui-gesturecollectinterceptinfo.md)* info | Pointer to the gesture collection interception information. |
| ArkUI_GestureRecognizerHandleArray* array | Pointer to the gesture recognizer array. |
| int32_t* size | Size of the gesture recognizer array. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ErrorCode](capi-error-code-h.md#arkui_errorcode) | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_GestureCollectInterceptInfo_GetTouchRecognizers()

```c
ArkUI_ErrorCode OH_ArkUI_GestureCollectInterceptInfo_GetTouchRecognizers(const ArkUI_GestureCollectInterceptInfo* info, ArkUI_TouchRecognizerHandleArray* recognizers, int32_t* size)
```

**Description**

Obtains the handle to touch recognizer from the gesture collection interception information.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureCollectInterceptInfo](capi-arkui-nativemodule-arkui-gesturecollectinterceptinfo.md)* info | Pointer to the gesture collection interception information. |
| ArkUI_TouchRecognizerHandleArray* recognizers | Pointer to the array of handles to touch recognizers. |
| int32_t* size | Size of the recognizers array. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ErrorCode](capi-error-code-h.md#arkui_errorcode) | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_GestureCollectInterceptInfo_SetGestureCollectIntervention()

```c
ArkUI_ErrorCode OH_ArkUI_GestureCollectInterceptInfo_SetGestureCollectIntervention(ArkUI_GestureCollectInterceptInfo* info, OH_ArkUI_GestureCollectIntervention intervention)
```

**Description**

Sets the gesture collection intervention mode.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureCollectInterceptInfo](capi-arkui-nativemodule-arkui-gesturecollectinterceptinfo.md)* info | Pointer to the gesture collection interception information. |
| [OH_ArkUI_GestureCollectIntervention](capi-native-gesture-h.md#oh_arkui_gesturecollectintervention) intervention | Gesture collection intervention mode, which is oftype [OH_ArkUI_GestureCollectIntervention](capi-native-gesture-h.md#oh_arkui_gesturecollectintervention). |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ErrorCode](capi-error-code-h.md#arkui_errorcode) | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_GetGestureBindNodeUniqueId()

```c
ArkUI_ErrorCode OH_ArkUI_GetGestureBindNodeUniqueId(const ArkUI_GestureRecognizer* recognizer, int32_t* uniqueId)
```

**Description**

Obtains the unique ID of the component linked to a gesture recognizer.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Pointer to the gesture recognizer. |
| int32_t* uniqueId | Unique ID of the component linked to a gesture recognizer. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_ErrorCode](capi-error-code-h.md#arkui_errorcode) | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if the operation is successful.<br>         Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter error occurs. |

### OH_ArkUI_TouchRecognizer_IsHostBelongsTo()

```c
bool OH_ArkUI_TouchRecognizer_IsHostBelongsTo(const ArkUI_TouchRecognizerHandle recognizer, int32_t uniqueId)
```

**Description**

Checks whether the node linked to the gesture is a child node of the passed component.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| const ArkUI_TouchRecognizerHandle recognizer | Handle to the touch recognizer. |
| int32_t uniqueId | Unique ID of the component. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | Returns <b>true</b> if the node linked to the gesture is a child node of the passed component.<br>         Returns <b>false</b> otherwise. |

### OH_ArkUI_GestureRecognizer_IsHostBelongsTo()

```c
bool OH_ArkUI_GestureRecognizer_IsHostBelongsTo(const ArkUI_GestureRecognizer* recognizer, int32_t uniqueId)
```

**Description**

Checks whether the node linked to the gesture is a child node of the passed component.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Pointer to the gesture recognizer. |
| int32_t uniqueId | Unique ID of the component. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | Returns <b>true</b> if the node linked to the gesture is a child node of the passed component.<br>         Returns <b>false</b> otherwise. |


