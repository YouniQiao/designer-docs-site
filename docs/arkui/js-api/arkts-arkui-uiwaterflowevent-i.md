# UIWaterFlowEvent

Represents the return value of the [getEvent('WaterFlow')](FrameNode:typeNode.getEvent(node: FrameNode, nodeType: 'WaterFlow')) method in **frameNode**, which can be used to set scroll events for a **WaterFlow** node.

**Inheritance/Implementation:** UIWaterFlowEvent extends [UIScrollableCommonEvent](arkts-arkui-uiscrollablecommonevent-i.md#uiscrollablecommonevent)

**Since:** 19

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## setOnDidScroll

```TypeScript
setOnDidScroll(callback: OnScrollCallback | undefined): void
```

Sets the callback for the [onDidScroll](../../../../reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#ondidscroll12) event. If the input parameter is **undefined**, the event callback is reset.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnScrollCallback \| undefined | Yes | Callback for the **onDidScroll** event. |

## setOnScrollIndex

```TypeScript
setOnScrollIndex(callback: OnWaterFlowScrollIndexCallback | undefined): void
```

Sets the callback of the [onScrollIndex](../../../../reference/apis-arkui/arkui-ts/ts-container-waterflow.md#onscrollindex11) event. If the input parameter is **undefined**, the event callback is reset.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnWaterFlowScrollIndexCallback \| undefined | Yes | Callback for the **onScrollIndex** event. |

## setOnWillScroll

```TypeScript
setOnWillScroll(callback: OnWillScrollCallback | undefined): void
```

Sets the callback for the [onWillScroll](../../../../reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onwillscroll12) event. If the input parameter is **undefined**, the event callback is reset.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnWillScrollCallback \| undefined | Yes | Callback for the **onWillScroll** event. |

