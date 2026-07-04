# ArkUI_NativeGestureAPI_1

```c
typedef struct ArkUI_NativeGestureAPI_1 {...} ArkUI_NativeGestureAPI_1
```

## Overview

Defines the gesture APIs.

**Since**: 12

**Related module**: [ArkUI_NativeModule](capi-arkui-nativemodule.md)

**Header file**: [native_gesture.h](capi-native-gesture-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| int32_t version | The struct version is 1. |


### Member functions

| Name | Description |
| -- | -- |
| [ArkUI_GestureRecognizer* (\*createTapGesture)(int32_t countNum, int32_t fingersNum)](#createtapgesture) | Creates a tap gesture.1. This API is used to trigger a tap gesture with one, two, or more taps. <br>        2. If multi-tap is configured, the timeout interval between a lift and the next tap is 300 ms. <br>        3. If the distance between the last tapped position and the current tapped position exceeds 60 vp,gesture recognition fails. <br>        4. If the value is greater than 1, the tap gesture will fail to be recognized when the number of fingerstouching the screen within 300 ms of the first finger touch is less than the required number, <br>           or when the number of fingers lifted from the screen within 300 ms of the first finger's being liftedis less than the required number. <br>        5. When the number of fingers touching the screen exceeds the set value, the gesture can be recognized. <br> |
| [ArkUI_GestureRecognizer* (\*createLongPressGesture)(int32_t fingersNum, bool repeatResult, int32_t durationNum)](#createlongpressgesture) | Creates a long press gesture.1. This API is used to trigger a long press gesture, which requires one or more fingers with a minimumThe value ranges 500 ms hold-down time. <br>        2. In components that support drag actions by default, such as <b><Text></b>, <b><TextInput></b>,<b><TextArea></b>, <b><Hyperlink></b>, <b><Image></b>, and <b>RichEditor></b>, the long press gesture <br>           may conflict with the drag action. If this occurs, they are handled as follows: <br>           If the minimum duration of the long press gesture is less than 500 ms, the long press gesture receivesa higher response priority than the drag action. <br>           If the minimum duration of the long press gesture is greater than or equal to 500 ms,the drag action receives a higher response priority than the long press gesture. <br>        3. If a finger moves more than 15 px after being pressed, the gesture recognition fails. <br> |
| [ArkUI_GestureRecognizer* (\*createPanGesture)(int32_t fingersNum, ArkUI_GestureDirectionMask directions, double distanceNum)](#createpangesture) | Creates a pan gesture.1. This API is used to trigger a pan gesture when the movement distance of a finger on the screen exceedsthe minimum value. <br>        2. If a pan gesture and a tab swipe occur at the same time, set <b>distanceNum</b> to <b>1</b>so that the gesture can be more easily recognized. <br> |
| [ArkUI_GestureRecognizer* (\*createPinchGesture)(int32_t fingersNum, double distanceNum)](#createpinchgesture) | Creates a pinch gesture.1. This API is used to trigger a pinch gesture, which requires two to five fingers with a minimum 5 vpdistance between the fingers. <br>        2. While more fingers than the minimum number can be pressed to trigger the gesture, only the firstfingers of the minimum number participate in gesture calculation. <br> |
| [ArkUI_GestureRecognizer* (\*createRotationGesture)(int32_t fingersNum, double angleNum)](#createrotationgesture) | Creates a rotation gesture.1. This API is used to trigger a rotation gesture, which requires two to five fingers with aminimum 1-degree rotation angle. <br>        2. While more fingers than the minimum number can be pressed to trigger the gesture, only the firsttwo fingers participate in gesture calculation. <br> |
| [ArkUI_GestureRecognizer* (\*createSwipeGesture)(int32_t fingersNum, ArkUI_GestureDirectionMask directions, double speedNum)](#createswipegesture) | Creates a swipe gesture.This API is used to implement a swipe gesture, which can be recognized when the swipe speed is 100vp/s or higher. <br> |
| [ArkUI_GestureRecognizer* (\*createGroupGesture)(ArkUI_GroupGestureMode gestureMode)](#creategroupgesture) | Creates a gesture group. |
| [void (\*dispose)(ArkUI_GestureRecognizer* recognizer)](#dispose) | Disposes a gesture to release resources. |
| [int32_t (\*addChildGesture)(ArkUI_GestureRecognizer* group, ArkUI_GestureRecognizer* child)](#addchildgesture) | Adds a gesture to a gesture group. |
| [int32_t (\*removeChildGesture)(ArkUI_GestureRecognizer* group, ArkUI_GestureRecognizer* child)](#removechildgesture) | Removes a gesture to a gesture group. |
| [int32_t (\*setGestureEventTarget)(ArkUI_GestureRecognizer* recognizer, ArkUI_GestureEventActionTypeMask actionTypeMask, void* extraParams,void (\*targetReceiver)(ArkUI_GestureEvent* event, void* extraParams))](#setgestureeventtarget) | Registers a callback for gestures. |
| [int32_t (\*addGestureToNode)(ArkUI_NodeHandle node, ArkUI_GestureRecognizer* recognizer, ArkUI_GesturePriority mode, ArkUI_GestureMask mask)](#addgesturetonode) | Adds a gesture to a UI component. |
| [int32_t (\*removeGestureFromNode)(ArkUI_NodeHandle node, ArkUI_GestureRecognizer* recognizer)](#removegesturefromnode) | Removes a gesture from a node. |
| [int32_t (\*setGestureInterrupterToNode)(ArkUI_NodeHandle node, ArkUI_GestureInterruptResult (\*interrupter)(ArkUI_GestureInterruptInfo* info))](#setgestureinterruptertonode) | Sets a gesture interruption callback for a node. |
| [ArkUI_GestureRecognizerType (\*getGestureType)(ArkUI_GestureRecognizer* recognizer)](#getgesturetype) | Obtains the type of a gesture. |
| [int32_t (\*setInnerGestureParallelTo)(ArkUI_NodeHandle node, void* userData, ArkUI_GestureRecognizer* (\*parallelInnerGesture)(ArkUI_ParallelInnerGestureEvent* event))](#setinnergestureparallelto) | Sets the callback function for a parallel internal gesture event. |
| [ArkUI_GestureRecognizer* (\*createTapGestureWithDistanceThreshold)(int32_t countNum, int32_t fingersNum, double distanceThreshold)](#createtapgesturewithdistancethreshold) | Creates a tap gesture that is subject to distance restrictions.1. This API is used to trigger a tap gesture with one, two, or more taps. <br>        2. If multi-tap is configured, the timeout interval between a lift and the next tap is 300 ms. <br>        3. If the distance between the last tapped position and the current tapped position exceeds 60 vp,gesture recognition fails. <br>        4. If the value is greater than 1, the tap gesture will fail to be recognized when the number of fingerstouching the screen within 300 ms of the first finger touch is less than the required number,or when the number of fingers lifted from the screen within 300 ms of the first finger's being liftedis less than the required number. <br>        5. When the number of fingers touching the screen exceeds the set value, the gesture can be recognized. <br>        6. If the finger moves beyond the preset distance limit, gesture recognition fails. <br> |

## Member function description

### createTapGesture()

```c
ArkUI_GestureRecognizer* (*createTapGesture)(int32_t countNum, int32_t fingersNum)
```

**Description**

Creates a tap gesture.1. This API is used to trigger a tap gesture with one, two, or more taps. <br>        2. If multi-tap is configured, the timeout interval between a lift and the next tap is 300 ms. <br>        3. If the distance between the last tapped position and the current tapped position exceeds 60 vp,gesture recognition fails. <br>        4. If the value is greater than 1, the tap gesture will fail to be recognized when the number of fingerstouching the screen within 300 ms of the first finger touch is less than the required number, <br>           or when the number of fingers lifted from the screen within 300 ms of the first finger's being liftedis less than the required number. <br>        5. When the number of fingers touching the screen exceeds the set value, the gesture can be recognized. <br>

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t countNum | Indicates the number of consecutive taps. If the value is less than 1 or is not set,the default value <b>1</b> is used. |
|  int32_t fingersNum | Indicates the number of fingers required to trigger a tap. The value rangesfrom 1 to 10. If the value is less than 1 or is not set, the default value <b>1</b> is used. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_GestureRecognizer*](capi-arkui-nativemodule-arkui-gesturerecognizer.md) | Returns the pointer to the created gesture. |

### createLongPressGesture()

```c
ArkUI_GestureRecognizer* (*createLongPressGesture)(int32_t fingersNum, bool repeatResult, int32_t durationNum)
```

**Description**

Creates a long press gesture.1. This API is used to trigger a long press gesture, which requires one or more fingers with a minimumThe value ranges 500 ms hold-down time. <br>        2. In components that support drag actions by default, such as <b><Text></b>, <b><TextInput></b>,<b><TextArea></b>, <b><Hyperlink></b>, <b><Image></b>, and <b>RichEditor></b>, the long press gesture <br>           may conflict with the drag action. If this occurs, they are handled as follows: <br>           If the minimum duration of the long press gesture is less than 500 ms, the long press gesture receivesa higher response priority than the drag action. <br>           If the minimum duration of the long press gesture is greater than or equal to 500 ms,the drag action receives a higher response priority than the long press gesture. <br>        3. If a finger moves more than 15 px after being pressed, the gesture recognition fails. <br>

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t fingersNum | Indicates the minimum number of fingers to trigger a long press gesture.The value ranges from 1 to 10. |
|  bool repeatResult | Indicates whether to continuously trigger the event callback. |
|  int32_t durationNum | Indicates the minimum hold-down time, in ms.If the value is less than or equal to 0, the default value <b>500</b> is used. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_GestureRecognizer*](capi-arkui-nativemodule-arkui-gesturerecognizer.md) | Returns the pointer to the created gesture. |

### createPanGesture()

```c
ArkUI_GestureRecognizer* (*createPanGesture)(int32_t fingersNum, ArkUI_GestureDirectionMask directions, double distanceNum)
```

**Description**

Creates a pan gesture.1. This API is used to trigger a pan gesture when the movement distance of a finger on the screen exceedsthe minimum value. <br>        2. If a pan gesture and a tab swipe occur at the same time, set <b>distanceNum</b> to <b>1</b>so that the gesture can be more easily recognized. <br>

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t fingersNum | Indicates the minimum number of fingers to trigger a pan gesture. The value ranges from 1 to 10.If the value is less than 1 or is not set, the default value <b>1</b> is used. |
|  ArkUI_GestureDirectionMask directions | Indicates the pan direction. The value supports the AND (&amp;) and OR (\|) operations. |
|  double distanceNum | Indicates the minimum pan distance to trigger the gesture, in vp. If this parameter isset to a value less than or equal to 0, the default value <b>5</b> is used. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_GestureRecognizer*](capi-arkui-nativemodule-arkui-gesturerecognizer.md) | Returns the pointer to the created gesture. |

### createPinchGesture()

```c
ArkUI_GestureRecognizer* (*createPinchGesture)(int32_t fingersNum, double distanceNum)
```

**Description**

Creates a pinch gesture.1. This API is used to trigger a pinch gesture, which requires two to five fingers with a minimum 5 vpdistance between the fingers. <br>        2. While more fingers than the minimum number can be pressed to trigger the gesture, only the firstfingers of the minimum number participate in gesture calculation. <br>

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t fingersNum | Indicates the minimum number of fingers to trigger a pinch. The value ranges from 2 to 5.Default value: <b>2</b> |
|  double distanceNum | Indicates the minimum recognition distance, in px. If this parameter is set to a value lessthan or equal to 0, the default value <b>5</b> is used. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_GestureRecognizer*](capi-arkui-nativemodule-arkui-gesturerecognizer.md) | Returns the pointer to the created gesture. |

### createRotationGesture()

```c
ArkUI_GestureRecognizer* (*createRotationGesture)(int32_t fingersNum, double angleNum)
```

**Description**

Creates a rotation gesture.1. This API is used to trigger a rotation gesture, which requires two to five fingers with aminimum 1-degree rotation angle. <br>        2. While more fingers than the minimum number can be pressed to trigger the gesture, only the firsttwo fingers participate in gesture calculation. <br>

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t fingersNum | Indicates the minimum number of fingers to trigger a rotation. The value ranges from 2 to 5.Default value: <b>2</b> |
|  double angleNum | Indicates the minimum degree that can trigger the rotation gesture. Default value: <b>1</b>If this parameter is set to a value less than or equal to 0 or greater than 360,the default value <b>1</b> is used. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_GestureRecognizer*](capi-arkui-nativemodule-arkui-gesturerecognizer.md) | Returns the pointer to the created gesture. |

### createSwipeGesture()

```c
ArkUI_GestureRecognizer* (*createSwipeGesture)(int32_t fingersNum, ArkUI_GestureDirectionMask directions, double speedNum)
```

**Description**

Creates a swipe gesture.This API is used to implement a swipe gesture, which can be recognized when the swipe speed is 100vp/s or higher. <br>

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t fingersNum | Indicates the minimum number of fingers to trigger a swipe gesture.The value ranges from 1 to 10. |
|  ArkUI_GestureDirectionMask directions | Indicates the swipe direction. |
|  double speedNum | Indicates the minimum speed of the swipe gesture, in px/s.If this parameter is set to a value less than or equal to 0, the default value <b>100</b> is used. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_GestureRecognizer*](capi-arkui-nativemodule-arkui-gesturerecognizer.md) | Returns the pointer to the created gesture. |

### createGroupGesture()

```c
ArkUI_GestureRecognizer* (*createGroupGesture)(ArkUI_GroupGestureMode gestureMode)
```

**Description**

Creates a gesture group.

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GroupGestureMode](capi-native-gesture-h.md#arkui_groupgesturemode) gestureMode | Indicates the gesture group mode. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_GestureRecognizer*](capi-arkui-nativemodule-arkui-gesturerecognizer.md) | Returns the pointer to the created gesture group. |

### dispose()

```c
void (*dispose)(ArkUI_GestureRecognizer* recognizer)
```

**Description**

Disposes a gesture to release resources.

### addChildGesture()

```c
int32_t (*addChildGesture)(ArkUI_GestureRecognizer* group, ArkUI_GestureRecognizer* child)
```

**Description**

Adds a gesture to a gesture group.

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* group | Indicates the pointer to the gesture group. |
|  [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* child | Indicates the gesture to be added to the gesture group. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns <b>0</b> if success.<br>            Returns <b>401</b> if a parameter exception occurs. Returns 401 if a parameter exception occurs. |

### removeChildGesture()

```c
int32_t (*removeChildGesture)(ArkUI_GestureRecognizer* group, ArkUI_GestureRecognizer* child)
```

**Description**

Removes a gesture to a gesture group.

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* group | Indicates the pointer to the gesture group. |
|  [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* child | Indicates the gesture to be removed to the gesture group. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns <b>0</b> if success.<br>            Returns <b>401</b> if a parameter exception occurs. |

### setGestureEventTarget()

```c
int32_t (*setGestureEventTarget)(ArkUI_GestureRecognizer* recognizer, ArkUI_GestureEventActionTypeMask actionTypeMask, void* extraParams,void (*targetReceiver)(ArkUI_GestureEvent* event, void* extraParams))
```

**Description**

Registers a callback for gestures.

**Parameters**:

| Parameter | Description |
| -- | -- |
| recognizer | Indicates the pointer to the gesture recognizer. |
| actionTypeMask | Indicates the set of gesture event types. Multiple callbacks can be registered at once,with the callback event types distinguished in the callbacks.Example: actionTypeMask = GESTURE_EVENT_ACTION_ACCEPT | GESTURE_EVENT_ACTION_UPDATE; |
|  void* extraParams | Indicates the context passed in the <b>targetReceiver</b> callback. |
| targetReceiver | Indicates the callback to register for processing the gesture event types.<b>event</b> indicates the gesture callback data. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns <b>0</b> if success.<br>            Returns <b>401</b> if a parameter exception occurs. |

### addGestureToNode()

```c
int32_t (*addGestureToNode)(ArkUI_NodeHandle node, ArkUI_GestureRecognizer* recognizer, ArkUI_GesturePriority mode, ArkUI_GestureMask mask)
```

**Description**

Adds a gesture to a UI component.

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the UI component to which you want to add the gesture. |
|  [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Indicates the gesture to be added to the UI component. |
|  [ArkUI_GesturePriority](capi-native-gesture-h.md#arkui_gesturepriority) mode | Indicates the gesture event mode. Available options are <b>NORMAL_GESTURE</b>,<b>PARALLEL_GESTURE</b>, and <b>PRIORITY_GESTURE</b>. |
|  [ArkUI_GestureMask](capi-native-gesture-h.md#arkui_gesturemask) mask | Indicates the gesture masking mode. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns <b>0</b> if success.<br>            Returns <b>401</b> if a parameter exception occurs. |

### removeGestureFromNode()

```c
int32_t (*removeGestureFromNode)(ArkUI_NodeHandle node, ArkUI_GestureRecognizer* recognizer)
```

**Description**

Removes a gesture from a node.

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_NodeHandle](capi-arkui-nativemodule-arkui-node8h.md) node | Indicates the node from which you want to remove the gesture. |
|  [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Indicates the gesture to be removed. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns <b>0</b> if success.<br>    Returns <b>401</b> if a parameter exception occurs. |

### setGestureInterrupterToNode()

```c
int32_t (*setGestureInterrupterToNode)(ArkUI_NodeHandle node, ArkUI_GestureInterruptResult (*interrupter)(ArkUI_GestureInterruptInfo* info))
```

**Description**

Sets a gesture interruption callback for a node.

**Parameters**:

| Parameter | Description |
| -- | -- |
| node | Indicates the node for which you want to set a gesture interruption callback. |
| interrupter | Indicates the gesture interruption callback to set.<b>info</b> indicates the gesture interruption data. If <b>interrupter</b> returns<b>GESTURE_INTERRUPT_RESULT_CONTINUE</b>, the gesture recognition process continues. If it returns<b>GESTURE_INTERRUPT_RESULT_REJECT</b>, the gesture recognition process is paused. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns <b>0</b> if success.<br>    Returns <b>401</b> if a parameter exception occurs. |

### getGestureType()

```c
ArkUI_GestureRecognizerType (*getGestureType)(ArkUI_GestureRecognizer* recognizer)
```

**Description**

Obtains the type of a gesture.

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ArkUI_GestureRecognizer](capi-arkui-nativemodule-arkui-gesturerecognizer.md)* recognizer | Indicates the pointer to the gesture. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_GestureRecognizerType](capi-native-gesture-h.md#arkui_gesturerecognizertype) | Returns the gesture type. |

### setInnerGestureParallelTo()

```c
int32_t (*setInnerGestureParallelTo)(ArkUI_NodeHandle node, void* userData, ArkUI_GestureRecognizer* (*parallelInnerGesture)(ArkUI_ParallelInnerGestureEvent* event))
```

**Description**

Sets the callback function for a parallel internal gesture event.

**Parameters**:

| Parameter | Description |
| -- | -- |
| node | Indicates the ArkUI node for which the callback of a parallel internal gesture event is to be set. |
| userData | Indicates the custom data. |
| parallelInnerGesture | Indicates the parallel internal gesture event. <b>event</b> returns the data of theparallel internal gesture event; <b>parallelInnerGesture</b> returns the pointer to the gesture recognizerthat requires parallel recognition. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Returns [ARKUI_ERROR_CODE_NO_ERROR](capi-error-code-h.md#arkui_errorcode) if success.<br>            Returns [ARKUI_ERROR_CODE_PARAM_INVALID](capi-error-code-h.md#arkui_errorcode) if a parameter exception occurs. |

### createTapGestureWithDistanceThreshold()

```c
ArkUI_GestureRecognizer* (*createTapGestureWithDistanceThreshold)(int32_t countNum, int32_t fingersNum, double distanceThreshold)
```

**Description**

Creates a tap gesture that is subject to distance restrictions.1. This API is used to trigger a tap gesture with one, two, or more taps. <br>        2. If multi-tap is configured, the timeout interval between a lift and the next tap is 300 ms. <br>        3. If the distance between the last tapped position and the current tapped position exceeds 60 vp,gesture recognition fails. <br>        4. If the value is greater than 1, the tap gesture will fail to be recognized when the number of fingerstouching the screen within 300 ms of the first finger touch is less than the required number,or when the number of fingers lifted from the screen within 300 ms of the first finger's being liftedis less than the required number. <br>        5. When the number of fingers touching the screen exceeds the set value, the gesture can be recognized. <br>        6. If the finger moves beyond the preset distance limit, gesture recognition fails. <br>

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t countNum | Indicates the number of consecutive taps. If the value is less than 1 or is not set, the defaultvalue <b>1</b> is used. |
|  int32_t fingersNum | Indicates the number of fingers required to trigger a tap. The value ranges from 1 to 10.If the value is less than 1 or is not set, the default value <b>1</b> is used. |
|  double distanceThreshold | Indicates the allowed moving distance of a finger.If the value is less than 0 or is not set, it will be converted to the default value of infinity. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkUI_GestureRecognizer*](capi-arkui-nativemodule-arkui-gesturerecognizer.md) | Returns the pointer to the created gesture. |


