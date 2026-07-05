# GestureGroupGestureHandlerOptions

手势组处理器配置参数。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## mode

```TypeScript
mode: GestureMode
```

设置组合手势识别模式。 默认值：GestureMode.Sequence

**Type:** GestureMode

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## gestures

```TypeScript
gestures: GestureHandler<TapGestureHandler | LongPressGestureHandler | PanGestureHandler | SwipeGestureHandler | PinchGestureHandler | RotationGestureHandler | GestureGroupHandler>[]
```

设置手势组中需要包含的手势集合。 **说明：** 当需要为一个组件同时添加单击和双击手势时，可在[GestureGroup](arkts-gesture-con.md#GestureGroup)中添加两个[TapGesture](arkts-gesture-con.md#TapGesture)，需要双击手势在前，单击手势在后，否则不生效。

**Type:** GestureHandler<TapGestureHandler | LongPressGestureHandler | PanGestureHandler | SwipeGestureHandler | PinchGestureHandler | RotationGestureHandler | GestureGroupHandler>[]

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

