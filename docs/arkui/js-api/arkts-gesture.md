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
| [EventTargetInfo](arkts-arkui-gesture-eventtargetinfo-c.md) | Provides the information about the component corresponding to the gesture recognizer. |
| [GestureGroupHandler](arkts-arkui-gesture-gesturegrouphandler-c.md) | Defines a gesture group handler object. |
| [GestureHandler](arkts-arkui-gesture-gesturehandler-c.md) | Represents the base type for gesture handlers. |
| [GestureRecognizer](arkts-arkui-gesture-gesturerecognizer-c.md) | Gesture recognizer object. |
| [LongPressGestureHandler](arkts-arkui-gesture-longpressgesturehandler-c.md) | Defines a long press gesture handler object. |
| [LongPressRecognizer](arkts-arkui-gesture-longpressrecognizer-c.md) | Implements a long press gesture recognizer. Inherits from [GestureRecognizer](arkts-arkui-gesture-gesturerecognizer-c.md). |
| [PanGestureHandler](arkts-arkui-gesture-pangesturehandler-c.md) | Defines a pan gesture handler object. |
| [PanGestureOptions](arkts-arkui-gesture-pangestureoptions-c.md) | Defines the PanGesture options. |
| [PanRecognizer](arkts-arkui-gesture-panrecognizer-c.md) | Gesture recognizer object. |
| [PinchGestureHandler](arkts-arkui-gesture-pinchgesturehandler-c.md) | Defines a type of gesture handler object for pinch gestures. |
| [PinchRecognizer](arkts-arkui-gesture-pinchrecognizer-c.md) | Implements a pinch gesture recognizer. Inherits from [GestureRecognizer](arkts-arkui-gesture-gesturerecognizer-c.md). |
| [RotationGestureHandler](arkts-arkui-gesture-rotationgesturehandler-c.md) | Defines a rotation gesture handler object. |
| [RotationRecognizer](arkts-arkui-gesture-rotationrecognizer-c.md) | Implements a rotation gesture recognizer. Inherits from [GestureRecognizer](arkts-arkui-gesture-gesturerecognizer-c.md). |
| [ScrollableTargetInfo](arkts-arkui-gesture-scrollabletargetinfo-c.md) | Provides the information about the scrollable container component corresponding to the gesture recognizer. It inherits from [EventTargetInfo](arkts-arkui-gesture-eventtargetinfo-c.md). |
| [SwipeGestureHandler](arkts-arkui-gesture-swipegesturehandler-c.md) | Defines a swipe gesture handler object. |
| [SwipeRecognizer](arkts-arkui-gesture-swiperecognizer-c.md) | Implements a swipe gesture recognizer. Inherits from [GestureRecognizer](arkts-arkui-gesture-gesturerecognizer-c.md). |
| [TapGestureHandler](arkts-arkui-gesture-tapgesturehandler-c.md) | Defines a type of gesture handler object for tap gestures. |
| [TapRecognizer](arkts-arkui-gesture-taprecognizer-c.md) | Implements a tap gesture recognizer object. Inherits from [GestureRecognizer](arkts-arkui-gesture-gesturerecognizer-c.md). |
| [TouchRecognizer](arkts-arkui-gesture-touchrecognizer-c.md) | Represents a touch gesture recognizer. |

### Interfaces

| Name | Description |
| --- | --- |
| [BaseGestureEvent](arkts-arkui-gesture-basegestureevent-i.md) | Defines the basic gesture event type. Inherits from [BaseEvent](../arkts-components/arkts-arkui-common-baseevent-i.md). |
| [BaseHandlerOptions](arkts-arkui-gesture-basehandleroptions-i.md) | Provides the parameters of the basic gesture handler. |
| [EventLocationInfo](arkts-arkui-gesture-eventlocationinfo-i.md) | Provides coordinate information for tap gestures. |
| [FingerInfo](arkts-arkui-gesture-fingerinfo-i.md) | Defines the finger information type. |
| [GestureEvent](arkts-arkui-gesture-gestureevent-i.md) | Defines the gesture event information. Inherits from [BaseEvent](../arkts-components/arkts-arkui-common-baseevent-i.md). |
| [GestureGroupGestureHandlerOptions](arkts-arkui-gesture-gesturegroupgesturehandleroptions-i.md) | Provides the parameters of the gesture group handler. |
| [GestureGroupInterface](arkts-arkui-gesture-gesturegroupinterface-i.md) | Combined gestures integrate two or more gestures into a compound gesture, supporting sequential recognition, parallel recognition, and exclusive recognition. |
| [GestureInfo](arkts-arkui-gesture-gestureinfo-i.md) | Defines the gesture information type. |
| [GestureInterface](arkts-arkui-gesture-gestureinterface-i.md) | Defines the gesture API. |
| [LongPressGestureEvent](arkts-arkui-gesture-longpressgestureevent-i.md) | Inherits from [BaseGestureEvent](arkts-arkui-gesture-basegestureevent-i.md). This object can be passed as the **event** parameter of [onGestureJudgeBegin](../arkts-components/arkts-arkui-common-commonmethod-c.md#ongesturejudgebegin-1). |
| [LongPressGestureHandlerOptions](arkts-arkui-gesture-longpressgesturehandleroptions-i.md) | Provides the parameters of the long press gesture handler. Inherits from [BaseHandlerOptions](arkts-arkui-gesture-basehandleroptions-i.md). |
| [LongPressGestureInterface](arkts-arkui-gesture-longpressgestureinterface-i.md) | **LongPressGesture** is used to trigger a long press gesture. This gesture requires one or more fingers to be held down for a specified duration, which is 500 ms by default and can be adjusted using the **duration** parameter. |
| [PanGestureEvent](arkts-arkui-gesture-pangestureevent-i.md) | Inherits from [BaseGestureEvent](arkts-arkui-gesture-basegestureevent-i.md). This object can be passed as the **event** parameter of [onGestureJudgeBegin](../arkts-components/arkts-arkui-common-commonmethod-c.md#ongesturejudgebegin-1). |
| [PanGestureHandlerOptions](arkts-arkui-gesture-pangesturehandleroptions-i.md) | Provides the parameters of the pan gesture handler. Inherits from [BaseHandlerOptions](arkts-arkui-gesture-basehandleroptions-i.md). |
| [PanGestureInterface](arkts-arkui-gesture-pangestureinterface-i.md) | PanGesture is used to trigger a pan gesture when the movement distance of a finger on the screen reaches the minimum value. |
| [PinchGestureEvent](arkts-arkui-gesture-pinchgestureevent-i.md) | Inherits from [BaseGestureEvent](arkts-arkui-gesture-basegestureevent-i.md). This object can be passed as the **event** parameter of [onGestureJudgeBegin](../arkts-components/arkts-arkui-common-commonmethod-c.md#ongesturejudgebegin-1). |
| [PinchGestureHandlerOptions](arkts-arkui-gesture-pinchgesturehandleroptions-i.md) | Provides the parameters of the pinch gesture handler. Inherits from [BaseHandlerOptions](arkts-arkui-gesture-basehandleroptions-i.md). |
| [PinchGestureInterface](arkts-arkui-gesture-pinchgestureinterface-i.md) | **PinchGesture** is used to trigger a pinch gesture, which requires two to five fingers with a minimum 5 vp distance between the fingers. |
| [RotationGestureEvent](arkts-arkui-gesture-rotationgestureevent-i.md) | Inherits from [BaseGestureEvent](arkts-arkui-gesture-basegestureevent-i.md). This object can be passed as the **event** parameter of [onGestureJudgeBegin](../arkts-components/arkts-arkui-common-commonmethod-c.md#ongesturejudgebegin-1). |
| [RotationGestureHandlerOptions](arkts-arkui-gesture-rotationgesturehandleroptions-i.md) | Provides the parameters of the rotation gesture handler. Inherits from [BaseHandlerOptions](arkts-arkui-gesture-basehandleroptions-i.md). |
| [RotationGestureInterface](arkts-arkui-gesture-rotationgestureinterface-i.md) | **RotationGesture** is used to trigger a rotation gesture, which recognizes rotational movements using two to five fingers, with a minimum angular change of 1 degree. This gesture cannot be triggered using a two-finger rotation operation on a trackpad. |
| [SwipeGestureEvent](arkts-arkui-gesture-swipegestureevent-i.md) | Inherits from [BaseGestureEvent](arkts-arkui-gesture-basegestureevent-i.md). This object can be passed as the **event** parameter of [onGestureJudgeBegin](../arkts-components/arkts-arkui-common-commonmethod-c.md#ongesturejudgebegin-1). |
| [SwipeGestureHandlerOptions](arkts-arkui-gesture-swipegesturehandleroptions-i.md) | Provides the parameters of the swipe gesture handler. Inherits from [BaseHandlerOptions](arkts-arkui-gesture-basehandleroptions-i.md). |
| [SwipeGestureInterface](arkts-arkui-gesture-swipegestureinterface-i.md) | **SwipeGesture** is used to trigger a swipe gesture. This gesture is successfully recognized when the swipe speed exceeds the specified threshold, which is 100 vp/s by default. |
| [TapGestureEvent](arkts-arkui-gesture-tapgestureevent-i.md) | Inherits from [BaseGestureEvent](arkts-arkui-gesture-basegestureevent-i.md). This object can be passed as the **event** parameter of [onGestureJudgeBegin](../arkts-components/arkts-arkui-common-commonmethod-c.md#ongesturejudgebegin-1). |
| [TapGestureHandlerOptions](arkts-arkui-gesture-tapgesturehandleroptions-i.md) | Provides the parameters of the tap gesture handler. Inherits from [BaseHandlerOptions](arkts-arkui-gesture-basehandleroptions-i.md). |
| [TapGestureInterface](arkts-arkui-gesture-tapgestureinterface-i.md) | TapGesture is used to trigger a tap gesture with one, two, or more taps. |
| [TapGestureParameters](arkts-arkui-gesture-tapgestureparameters-i.md) | Defines tap gesture parameters. Inherits from [BaseHandlerOptions](arkts-arkui-gesture-basehandleroptions-i.md).@since version number is higher than inner elements'. This does not affect interface usability. |

### Enums

| Name | Description |
| --- | --- |
| [GestureJudgeResult](arkts-arkui-gesture-gesturejudgeresult-e.md) | Enumerates gesture competition results. |
| [GestureMask](arkts-arkui-gesture-gesturemask-e.md) | Enumerates masking modes of child component gestures. |
| [GestureMode](arkts-arkui-gesture-gesturemode-e.md) | Defines the recognition mode of a gesture group. |
| [GesturePriority](arkts-arkui-gesture-gesturepriority-e.md) | Enumerates gesture priority levels. |
| [GestureRecognizerState](arkts-arkui-gesture-gesturerecognizerstate-e.md) | Enumerates the gesture recognizer states. |
| [PanDirection](arkts-arkui-gesture-pandirection-e.md) | Enumerates the pan directions. Unlike **SwipeDirection**, **PanDirection** has no angular restrictions. |
| [SwipeDirection](arkts-arkui-gesture-swipedirection-e.md) | Enumerates the directions in which the swipe gesture can be recognized. |

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

