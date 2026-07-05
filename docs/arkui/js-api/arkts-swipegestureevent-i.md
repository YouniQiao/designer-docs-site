# SwipeGestureEvent

继承自[BaseGestureEvent](arkts-basegestureevent-i.md#BaseGestureEvent)。可将该对象作为[onGestureJudgeBegin]CommonMethod#onGestureJudgeBegin的 event参数来传递。

**Inheritance:** SwipeGestureEventextends: BaseGestureEvent.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## angle

```TypeScript
angle: number
```

表示快滑手势的角度，即手指滑动的瞬时方向与水平正方向的夹角，单位为deg。 **说明：** 以水平正方向为基准，滑动方向位于水平正方向顺时针侧时，角度范围为0到180度；位于水平正方向逆时针侧时，角度范围为0到-180度。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## speed

```TypeScript
speed: number
```

快滑手势速度，即所有手指相对当前组件元素原始区域滑动的平均速度，单位为vp/s。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

