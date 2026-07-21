# UIWaterFlowEvent

Represents the return value of the [getEvent('WaterFlow')](../arkts-apis/arkts-arkui-typenode-getevent-f.md#getevent-1) method in **frameNode**, which can be used to set scroll events for a **WaterFlow** node.

**Inheritance/Implementation:** UIWaterFlowEvent extends [UIScrollableCommonEvent](arkts-arkui-uiscrollablecommonevent-i.md)

**Since:** 19

<!--Device-unnamed-declare interface UIWaterFlowEvent extends UIScrollableCommonEvent--><!--Device-unnamed-declare interface UIWaterFlowEvent extends UIScrollableCommonEvent-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="setondidscroll"></a>
## setOnDidScroll

```TypeScript
setOnDidScroll(callback: OnScrollCallback | undefined): void
```

Sets the callback for the [onDidScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#ondidscroll12) event.

If the input parameter is **undefined**, the event callback is reset.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIWaterFlowEvent-setOnDidScroll(callback: OnScrollCallback | undefined): void--><!--Device-UIWaterFlowEvent-setOnDidScroll(callback: OnScrollCallback | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [OnScrollCallback](arkts-arkui-onscrollcallback-t.md) \| undefined | Yes | Callback for the **onDidScroll** event. |

<a id="setonscrollindex"></a>
## setOnScrollIndex

```TypeScript
setOnScrollIndex(callback: OnWaterFlowScrollIndexCallback | undefined): void
```

Sets the callback of the [onScrollIndex](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#onscrollindex11) event.

If the input parameter is **undefined**, the event callback is reset.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIWaterFlowEvent-setOnScrollIndex(callback: OnWaterFlowScrollIndexCallback | undefined): void--><!--Device-UIWaterFlowEvent-setOnScrollIndex(callback: OnWaterFlowScrollIndexCallback | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [OnWaterFlowScrollIndexCallback](arkts-arkui-onwaterflowscrollindexcallback-t.md) \| undefined | Yes | Callback for the **onScrollIndex** event. |

<a id="setonwillscroll"></a>
## setOnWillScroll

```TypeScript
setOnWillScroll(callback: OnWillScrollCallback | undefined): void
```

Sets the callback for the [onWillScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onwillscroll12) event.

If the input parameter is **undefined**, the event callback is reset.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIWaterFlowEvent-setOnWillScroll(callback: OnWillScrollCallback | undefined): void--><!--Device-UIWaterFlowEvent-setOnWillScroll(callback: OnWillScrollCallback | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [OnWillScrollCallback](arkts-arkui-onwillscrollcallback-t.md) \| undefined | Yes | Callback for the **onWillScroll** event. |

