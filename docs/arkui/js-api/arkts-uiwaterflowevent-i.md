# UIWaterFlowEvent

frameNode中 [getEvent('WaterFlow')]./../../../arkui/FrameNode:typeNode.getEvent(node: FrameNode, nodeType: 'WaterFlow')方法 的返回值，可用于给WaterFlow节点设置滚动事件。 UIWaterFlowEvent继承于[UIScrollableCommonEvent](arkts-uiscrollablecommonevent-i.md#UIScrollableCommonEvent)。

**Inheritance:** UIWaterFlowEventextends: UIScrollableCommonEvent.

**Since:** 19

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## setOnDidScroll

```TypeScript
setOnDidScroll(callback: OnScrollCallback | undefined): void
```

设置[onDidScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#ondidscroll12)事件的回调。 方法入参为undefined时，会重置事件回调。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnScrollCallback \| undefined | Yes | onDidScroll事件的回调函数。 |

## setOnScrollIndex

```TypeScript
setOnScrollIndex(callback: OnWaterFlowScrollIndexCallback | undefined): void
```

设置[onScrollIndex](docroot://reference/apis-arkui/arkui-ts/ts-container-waterflow.md#onscrollindex11)事件的回调。 方法入参为undefined时，会重置事件回调。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnWaterFlowScrollIndexCallback \| undefined | Yes | onScrollIndex事件的回调函数。 |

## setOnWillScroll

```TypeScript
setOnWillScroll(callback: OnWillScrollCallback | undefined): void
```

设置[onWillScroll](docroot://reference/apis-arkui/arkui-ts/ts-container-scrollable-common.md#onwillscroll12)事件的回调。 方法入参为undefined时，会重置事件回调。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnWillScrollCallback \| undefined | Yes | onWillScroll事件的回调函数。 |

