# RotationGestureHandlerOptions

旋转手势处理器配置参数。继承自[BaseHandlerOptions](arkts-basehandleroptions-i.md#BaseHandlerOptions)。

**Inheritance:** RotationGestureHandlerOptionsextends: BaseHandlerOptions.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## angle

```TypeScript
angle?: number
```

触发旋转手势的最小改变度数，单位为deg。 默认值：1 **说明：** 当改变度数的值小于等于0或大于360时，会被转化为默认值。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fingers

```TypeScript
fingers?: number
```

触发旋转的最少手指数，最小为2指，最大为5指。 默认值：2 取值范围：[2, 5] 触发手势时手指数量可以多于fingers参数值，但仅最先落下的两指参与手势计算。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

