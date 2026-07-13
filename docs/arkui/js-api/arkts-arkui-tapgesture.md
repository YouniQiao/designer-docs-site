# TapGesture

TapGesture is used to trigger a tap gesture with one, two, or more taps.

> **NOTE**
>
> When both double-tap and single-tap gestures are bound to a component with the double-tap gesture bound first, the
> single-tap gesture will have a 300 ms delay.


## TapGesture

```TypeScript
TapGesture(value?: TapGestureParameters)
```

Creates a tap gesture. Inherits from [GestureInterface<T>]{@link GestureInterface}.

When triggered by keyboard or gamepad input, the gesture event's [SourceTool]{@link SourceTool} is **Unknown**, and
[SourceType]{@link SourceType} is **KEY** or **JOYSTICK**.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | TapGestureParameters | No | Parameters for the tap gesture. |

## TapGesture

```TypeScript
TapGesture(event: (event: GestureEvent) => void)
```

Triggered when the tap gesture is recognized.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: GestureEvent) =&gt; void | Yes | Callback for the tap event. |

## Summary

- [BaseGestureEvent](arkts-arkui-tapgesture-basegestureevent-i.md)
- [BaseHandlerOptions](arkts-arkui-tapgesture-basehandleroptions-i.md)
- [EventLocationInfo](arkts-arkui-tapgesture-eventlocationinfo-i.md)
- [FingerInfo](arkts-arkui-tapgesture-fingerinfo-i.md)
- [GestureEvent](arkts-arkui-tapgesture-gestureevent-i.md)
- [GestureGroupGestureHandlerOptions](arkts-arkui-tapgesture-gesturegroupgesturehandleroptions-i.md)
- [GestureGroupInterface](arkts-arkui-tapgesture-gesturegroupinterface-i.md)
- [GestureInfo](arkts-arkui-tapgesture-gestureinfo-i.md)
- [GestureInterface](arkts-arkui-tapgesture-gestureinterface-i.md)
- [LongPressGestureEvent](arkts-arkui-tapgesture-longpressgestureevent-i.md)
- [LongPressGestureHandlerOptions](arkts-arkui-tapgesture-longpressgesturehandleroptions-i.md)
- [LongPressGestureInterface](arkts-arkui-tapgesture-longpressgestureinterface-i.md)
- [PanGestureEvent](arkts-arkui-tapgesture-pangestureevent-i.md)
- [PanGestureHandlerOptions](arkts-arkui-tapgesture-pangesturehandleroptions-i.md)
- [PanGestureInterface](arkts-arkui-tapgesture-pangestureinterface-i.md)
- [PinchGestureEvent](arkts-arkui-tapgesture-pinchgestureevent-i.md)
- [PinchGestureHandlerOptions](arkts-arkui-tapgesture-pinchgesturehandleroptions-i.md)
- [PinchGestureInterface](arkts-arkui-tapgesture-pinchgestureinterface-i.md)
- [RotationGestureEvent](arkts-arkui-tapgesture-rotationgestureevent-i.md)
- [RotationGestureHandlerOptions](arkts-arkui-tapgesture-rotationgesturehandleroptions-i.md)
- [RotationGestureInterface](arkts-arkui-tapgesture-rotationgestureinterface-i.md)
- [SwipeGestureEvent](arkts-arkui-tapgesture-swipegestureevent-i.md)
- [SwipeGestureHandlerOptions](arkts-arkui-tapgesture-swipegesturehandleroptions-i.md)
- [SwipeGestureInterface](arkts-arkui-tapgesture-swipegestureinterface-i.md)
- [TapGestureEvent](arkts-arkui-tapgesture-tapgestureevent-i.md)
- [TapGestureHandlerOptions](arkts-arkui-tapgesture-tapgesturehandleroptions-i.md)
- [TapGestureParameters](arkts-arkui-tapgesture-tapgestureparameters-i.md)
- [GestureType](arkts-arkui-tapgesture-gesturetype-t.md)
- [GestureJudgeResult](arkts-arkui-tapgesture-gesturejudgeresult-e.md)
- [GestureMask](arkts-arkui-tapgesture-gesturemask-e.md)
- [GestureMode](arkts-arkui-tapgesture-gesturemode-e.md)
- [GesturePriority](arkts-arkui-tapgesture-gesturepriority-e.md)
- [GestureRecognizerState](arkts-arkui-tapgesture-gesturerecognizerstate-e.md)
- [PanDirection](arkts-arkui-tapgesture-pandirection-e.md)
- [SwipeDirection](arkts-arkui-tapgesture-swipedirection-e.md)
