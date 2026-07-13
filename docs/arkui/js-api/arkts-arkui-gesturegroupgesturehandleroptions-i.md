# GestureGroupGestureHandlerOptions

Provides the parameters of the gesture group handler.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## gestures

```TypeScript
gestures: GestureHandler<TapGestureHandler | LongPressGestureHandler | PanGestureHandler | SwipeGestureHandler | PinchGestureHandler | RotationGestureHandler | GestureGroupHandler>[]
```

Gestures to be included in a gesture group.

**NOTE**

To add both single-tap and double-tap gestures for a component, add two [TapGesture](TapGesture) instances as
the [combined gestures](arkts-arkui-tapgesture-con.md#gesturegroup), with the double-tap gesture preceding the single-tap gesture. The gestures
will not work correctly if this order is reversed.

**Type:** GestureHandler<TapGestureHandler | LongPressGestureHandler | PanGestureHandler | SwipeGestureHandler | PinchGestureHandler | RotationGestureHandler | GestureGroupHandler>[]

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## mode

```TypeScript
mode: GestureMode
```

Recognition mode of combined gestures.

Default value: **GestureMode.Sequence**

**Type:** GestureMode

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

