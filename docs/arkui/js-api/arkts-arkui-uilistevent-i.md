# UIListEvent

Represents the return value of the [getEvent('List')](../arkts-apis/arkts-arkui-typenode-getevent-f.md#getevent-1) method in **frameNode**,which can be used to set scroll events for a **List** node.

**Inheritance/Implementation:** UIListEvent extends [UIScrollableCommonEvent](arkts-arkui-uiscrollablecommonevent-i.md)

**Since:** 19

<!--Device-unnamed-declare interface UIListEvent extends UIScrollableCommonEvent--><!--Device-unnamed-declare interface UIListEvent extends UIScrollableCommonEvent-End-->

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

<!--Device-UIListEvent-setOnDidScroll(callback: OnScrollCallback | undefined): void--><!--Device-UIListEvent-setOnDidScroll(callback: OnScrollCallback | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [OnScrollCallback](arkts-arkui-onscrollcallback-t.md) \| undefined | Yes | Callback for the **onDidScroll** event. |

<a id="setonscrollindex"></a>
## setOnScrollIndex

```TypeScript
setOnScrollIndex(callback: OnListScrollIndexCallback | undefined): void
```

Sets the callback of the [onScrollIndex](docroot://reference/apis-arkui/arkui-ts/ts-container-list.md#onscrollindex) event.

If the input parameter is **undefined**, the event callback is reset.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIListEvent-setOnScrollIndex(callback: OnListScrollIndexCallback | undefined): void--><!--Device-UIListEvent-setOnScrollIndex(callback: OnListScrollIndexCallback | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [OnListScrollIndexCallback](arkts-arkui-onlistscrollindexcallback-t.md) \| undefined | Yes | Callback for the **onScrollIndex** event. |

<a id="setonscrollvisiblecontentchange"></a>
## setOnScrollVisibleContentChange

```TypeScript
setOnScrollVisibleContentChange(callback: OnScrollVisibleContentChangeCallback | undefined): void
```

Sets the callback of the [onScrollVisibleContentChange](ListAttribute#onScrollVisibleContentChange) event.

If the input parameter is **undefined**, the event callback is reset.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIListEvent-setOnScrollVisibleContentChange(callback: OnScrollVisibleContentChangeCallback | undefined): void--><!--Device-UIListEvent-setOnScrollVisibleContentChange(callback: OnScrollVisibleContentChangeCallback | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [OnScrollVisibleContentChangeCallback](arkts-arkui-onscrollvisiblecontentchangecallback-t.md) \| undefined | Yes | Callback for the **onScrollVisibleContentChange** event. |

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

<!--Device-UIListEvent-setOnWillScroll(callback: OnWillScrollCallback | undefined): void--><!--Device-UIListEvent-setOnWillScroll(callback: OnWillScrollCallback | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [OnWillScrollCallback](arkts-arkui-onwillscrollcallback-t.md) \| undefined | Yes | Callback for the **onWillScroll** event. |

