# TapGestureEvent

Inherits from [BaseGestureEvent](arkts-arkui-basegestureevent-i.md). This object can be passed as the **event** parameter of [onGestureJudgeBegin](../arkts-components/arkts-arkui-commonmethod-c.md#ongesturejudgebegin-1).

**Inheritance/Implementation:** TapGestureEvent extends [BaseGestureEvent](arkts-arkui-basegestureevent-i.md)

**Since:** 11

<!--Device-unnamed-interface TapGestureEvent extends BaseGestureEvent--><!--Device-unnamed-interface TapGestureEvent extends BaseGestureEvent-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## tapLocation

```TypeScript
tapLocation?: EventLocationInfo
```

Coordinate information of the current tap gesture. For non-tap gestures, the return value of **tapLocation** is **undefined**.

**Type:** EventLocationInfo

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TapGestureEvent-tapLocation?: EventLocationInfo--><!--Device-TapGestureEvent-tapLocation?: EventLocationInfo-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

