# gesture

Enumerates gesture competition results.

## Summary

### Namespaces

| Name | Description |
| --- | --- |
| [GestureControl](arkts-arkui-gesturecontrol-n.md) | Enumerates gesture competition results. |

### Classes

| Name | Description |
| --- | --- |
| [EventTargetInfo](arkts-arkui-eventtargetinfo-c.md) | Provides the information about the component corresponding to the gesture recognizer. |
| [GestureGroupHandler](arkts-arkui-gesturegrouphandler-c.md) | Defines a gesture group handler object. |
| [GestureHandler](arkts-arkui-gesturehandler-c.md) | Represents the base type for gesture handlers. |
| [GestureRecognizer](arkts-arkui-gesturerecognizer-c.md) | Gesture recognizer object. |
| [LongPressGestureHandler](arkts-arkui-longpressgesturehandler-c.md) | Defines a long press gesture handler object. |
| [LongPressRecognizer](arkts-arkui-longpressrecognizer-c.md) | Implements a long press gesture recognizer. Inherits from [GestureRecognizer](arkts-arkui-gesturerecognizer-c.md). |
| [PanGestureHandler](arkts-arkui-pangesturehandler-c.md) | Defines a pan gesture handler object. |
| [PanGestureOptions](arkts-arkui-pangestureoptions-c.md) | Defines the PanGesture options. |
| [PanRecognizer](arkts-arkui-panrecognizer-c.md) | Gesture recognizer object. |
| [PinchGestureHandler](arkts-arkui-pinchgesturehandler-c.md) | Defines a type of gesture handler object for pinch gestures. |
| [PinchRecognizer](arkts-arkui-pinchrecognizer-c.md) | Implements a pinch gesture recognizer. Inherits from [GestureRecognizer](arkts-arkui-gesturerecognizer-c.md). |
| [RotationGestureHandler](arkts-arkui-rotationgesturehandler-c.md) | Defines a rotation gesture handler object. |
| [RotationRecognizer](arkts-arkui-rotationrecognizer-c.md) | Implements a rotation gesture recognizer. Inherits from [GestureRecognizer](arkts-arkui-gesturerecognizer-c.md). |
| [ScrollableTargetInfo](arkts-arkui-scrollabletargetinfo-c.md) | Provides the information about the scrollable container component corresponding to the gesture recognizer. It inherits from [EventTargetInfo](arkts-arkui-eventtargetinfo-c.md). |
| [SwipeGestureHandler](arkts-arkui-swipegesturehandler-c.md) | Defines a swipe gesture handler object. |
| [SwipeRecognizer](arkts-arkui-swiperecognizer-c.md) | Implements a swipe gesture recognizer. Inherits from [GestureRecognizer](arkts-arkui-gesturerecognizer-c.md). |
| [TapGestureHandler](arkts-arkui-tapgesturehandler-c.md) | Defines a type of gesture handler object for tap gestures. |
| [TapRecognizer](arkts-arkui-taprecognizer-c.md) | Implements a tap gesture recognizer object. Inherits from [GestureRecognizer](arkts-arkui-gesturerecognizer-c.md). |
| [TouchRecognizer](arkts-arkui-touchrecognizer-c.md) | Represents a touch gesture recognizer. |

### Interfaces

| Name | Description |
| --- | --- |
| [BaseGestureEvent](arkts-arkui-basegestureevent-i.md) | Defines the basic gesture event type. Inherits from [BaseEvent](../arkts-components/arkts-arkui-baseevent-i.md). |
| [BaseHandlerOptions](arkts-arkui-basehandleroptions-i.md) | Provides the parameters of the basic gesture handler. |
| [EventLocationInfo](arkts-arkui-eventlocationinfo-i.md) | Provides coordinate information for tap gestures. |
| [FingerInfo](arkts-arkui-fingerinfo-i.md) | Defines the finger information type. |
| [GestureEvent](arkts-arkui-gestureevent-i.md) | Defines the gesture event information. Inherits from [BaseEvent](../arkts-components/arkts-arkui-baseevent-i.md). |
| [GestureGroupGestureHandlerOptions](arkts-arkui-gesturegroupgesturehandleroptions-i.md) | Provides the parameters of the gesture group handler. |
| [GestureGroupInterface](arkts-arkui-gesturegroupinterface-i.md) | Combined gestures integrate two or more gestures into a compound gesture, supporting sequential recognition, parallel recognition, and exclusive recognition. |
| [GestureInfo](arkts-arkui-gestureinfo-i.md) | Defines the gesture information type. |
| [GestureInterface](arkts-arkui-gestureinterface-i.md) | Defines the gesture API. |
| [LongPressGestureEvent](arkts-arkui-longpressgestureevent-i.md) | Inherits from [BaseGestureEvent](arkts-arkui-basegestureevent-i.md). This object can be passed as the **event** parameter of [onGestureJudgeBegin](../arkts-components/arkts-arkui-commonmethod-c.md#ongesturejudgebegin-1). |
| [LongPressGestureHandlerOptions](arkts-arkui-longpressgesturehandleroptions-i.md) | Provides the parameters of the long press gesture handler. Inherits from [BaseHandlerOptions](arkts-arkui-basehandleroptions-i.md). |
| [LongPressGestureInterface](arkts-arkui-longpressgestureinterface-i.md) | **LongPressGesture** is used to trigger a long press gesture. This gesture requires one or more fingers to be held down for a specified duration, which is 500 ms by default and can be adjusted using the **duration** parameter. |
| [PanGestureEvent](arkts-arkui-pangestureevent-i.md) | Inherits from [BaseGestureEvent](arkts-arkui-basegestureevent-i.md). This object can be passed as the **event** parameter of [onGestureJudgeBegin](../arkts-components/arkts-arkui-commonmethod-c.md#ongesturejudgebegin-1). |
| [PanGestureHandlerOptions](arkts-arkui-pangesturehandleroptions-i.md) | Provides the parameters of the pan gesture handler. Inherits from [BaseHandlerOptions](arkts-arkui-basehandleroptions-i.md). |
| [PanGestureInterface](arkts-arkui-pangestureinterface-i.md) | PanGesture is used to trigger a pan gesture when the movement distance of a finger on the screen reaches the minimum value. |
| [PinchGestureEvent](arkts-arkui-pinchgestureevent-i.md) | Inherits from [BaseGestureEvent](arkts-arkui-basegestureevent-i.md). This object can be passed as the **event** parameter of [onGestureJudgeBegin](../arkts-components/arkts-arkui-commonmethod-c.md#ongesturejudgebegin-1). |
| [PinchGestureHandlerOptions](arkts-arkui-pinchgesturehandleroptions-i.md) | Provides the parameters of the pinch gesture handler. Inherits from [BaseHandlerOptions](arkts-arkui-basehandleroptions-i.md). |
| [PinchGestureInterface](arkts-arkui-pinchgestureinterface-i.md) | **PinchGesture** is used to trigger a pinch gesture, which requires two to five fingers with a minimum 5 vp distance between the fingers. |
| [RotationGestureEvent](arkts-arkui-rotationgestureevent-i.md) | Inherits from [BaseGestureEvent](arkts-arkui-basegestureevent-i.md). This object can be passed as the **event** parameter of [onGestureJudgeBegin](../arkts-components/arkts-arkui-commonmethod-c.md#ongesturejudgebegin-1). |
| [RotationGestureHandlerOptions](arkts-arkui-rotationgesturehandleroptions-i.md) | Provides the parameters of the rotation gesture handler. Inherits from [BaseHandlerOptions](arkts-arkui-basehandleroptions-i.md). |
| [RotationGestureInterface](arkts-arkui-rotationgestureinterface-i.md) | **RotationGesture** is used to trigger a rotation gesture, which recognizes rotational movements using two to five fingers, with a minimum angular change of 1 degree. This gesture cannot be triggered using a two-finger rotation operation on a trackpad. |
| [SwipeGestureEvent](arkts-arkui-swipegestureevent-i.md) | Inherits from [BaseGestureEvent](arkts-arkui-basegestureevent-i.md). This object can be passed as the **event** parameter of [onGestureJudgeBegin](../arkts-components/arkts-arkui-commonmethod-c.md#ongesturejudgebegin-1). |
| [SwipeGestureHandlerOptions](arkts-arkui-swipegesturehandleroptions-i.md) | Provides the parameters of the swipe gesture handler. Inherits from [BaseHandlerOptions](arkts-arkui-basehandleroptions-i.md). |
| [SwipeGestureInterface](arkts-arkui-swipegestureinterface-i.md) | **SwipeGesture** is used to trigger a swipe gesture. This gesture is successfully recognized when the swipe speed exceeds the specified threshold, which is 100 vp/s by default. |
| [TapGestureEvent](arkts-arkui-tapgestureevent-i.md) | Inherits from [BaseGestureEvent](arkts-arkui-basegestureevent-i.md). This object can be passed as the **event** parameter of [onGestureJudgeBegin](../arkts-components/arkts-arkui-commonmethod-c.md#ongesturejudgebegin-1). |
| [TapGestureHandlerOptions](arkts-arkui-tapgesturehandleroptions-i.md) | Provides the parameters of the tap gesture handler. Inherits from [BaseHandlerOptions](arkts-arkui-basehandleroptions-i.md). |
| [TapGestureInterface](arkts-arkui-tapgestureinterface-i.md) | TapGesture is used to trigger a tap gesture with one, two, or more taps. |
| [TapGestureParameters](arkts-arkui-tapgestureparameters-i.md) | Defines tap gesture parameters. Inherits from [BaseHandlerOptions](arkts-arkui-basehandleroptions-i.md).  @since version number is higher than inner elements'. This does not affect interface usability. |

### Enums

| Name | Description |
| --- | --- |
| [GestureJudgeResult](arkts-arkui-gesturejudgeresult-e.md) | Enumerates gesture competition results. |
| [GestureMask](arkts-arkui-gesturemask-e.md) | Enumerates masking modes of child component gestures. |
| [GestureMode](arkts-arkui-gesturemode-e.md) | Defines the recognition mode of a gesture group. |
| [GesturePriority](arkts-arkui-gesturepriority-e.md) | Enumerates gesture priority levels. |
| [GestureRecognizerState](arkts-arkui-gesturerecognizerstate-e.md) | Enumerates the gesture recognizer states. |
| [PanDirection](arkts-arkui-pandirection-e.md) | Enumerates the pan directions. Unlike **SwipeDirection**, **PanDirection** has no angular restrictions. |
| [SwipeDirection](arkts-arkui-swipedirection-e.md) | Enumerates the directions in which the swipe gesture can be recognized. |

### Types

| Name | Description |
| --- | --- |
| [GestureType](arkts-arkui-gesturetype-t.md) | Defines the Gesture Type. |

### Constants

| Name | Description |
| --- | --- |
| [GestureGroup](arkts-arkui-gesture-con.md#gesturegroup) | Defines GestureGroup Component. |
| [LongPressGesture](arkts-arkui-gesture-con.md#longpressgesture) | Defines LongPressGesture Component. |
| [PanGesture](arkts-arkui-gesture-con.md#pangesture) | Defines PanGesture Component. |
| [PinchGesture](arkts-arkui-gesture-con.md#pinchgesture) | Defines PinchGesture Component. |
| [RotationGesture](arkts-arkui-gesture-con.md#rotationgesture) | Defines RotationGesture Component. |
| [SwipeGesture](arkts-arkui-gesture-con.md#swipegesture) | Defines SwipeGesture Component. |
| [TapGesture](arkts-arkui-gesture-con.md#tapgesture) | Defines TapGesture Component. |

