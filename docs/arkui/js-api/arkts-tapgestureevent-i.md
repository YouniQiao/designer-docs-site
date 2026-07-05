# TapGestureEvent

继承自[BaseGestureEvent](arkts-basegestureevent-i.md#BaseGestureEvent)。可将该对象作为[onGestureJudgeBegin]CommonMethod#onGestureJudgeBegin的 event参数来传递。

**Inheritance:** TapGestureEventextends: BaseGestureEvent.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## tapLocation

```TypeScript
tapLocation?: EventLocationInfo
```

用于点击手势中，获取当前手势的坐标信息。在非点击手势中，tapLocation返回值为undefined。

**Type:** EventLocationInfo

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

