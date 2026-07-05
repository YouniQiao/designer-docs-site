# SwipeGestureHandlerOptions

快滑手势处理器配置参数。继承自[BaseHandlerOptions](arkts-basehandleroptions-i.md#BaseHandlerOptions)。

**Inheritance:** SwipeGestureHandlerOptionsextends: BaseHandlerOptions.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fingers

```TypeScript
fingers?: number
```

触发快滑的最少手指数，默认为1，最小为1指，最大为10指。 默认值：1 取值范围：[1, 10]

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## speed

```TypeScript
speed?: number
```

识别快滑的最小速度。 默认值：100VP/s **说明：** 当滑动速度的值小于等于0时，会被转化为默认值。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## direction

```TypeScript
direction?: SwipeDirection
```

触发快滑手势的滑动方向。 默认值：SwipeDirection.All

**Type:** SwipeDirection

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

