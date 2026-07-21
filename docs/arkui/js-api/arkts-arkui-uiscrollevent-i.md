# UIScrollEvent

Defines a UIScrollableCommonEvent which is used to set different common event to target component.

**Inheritance/Implementation:** UIScrollEvent extends [UIScrollableCommonEvent](arkts-arkui-uiscrollablecommonevent-i.md)

**Since:** 19

<!--Device-unnamed-declare interface UIScrollEvent extends UIScrollableCommonEvent--><!--Device-unnamed-declare interface UIScrollEvent extends UIScrollableCommonEvent-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="setondidscroll"></a>
## setOnDidScroll

```TypeScript
setOnDidScroll(callback: ScrollOnScrollCallback | undefined): void
```

Set or reset the callback which is triggered when the Scroll did scroll.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIScrollEvent-setOnDidScroll(callback: ScrollOnScrollCallback | undefined): void--><!--Device-UIScrollEvent-setOnDidScroll(callback: ScrollOnScrollCallback | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [ScrollOnScrollCallback](arkts-arkui-scrollonscrollcallback-t.md) \| undefined | Yes | callback function, triggered when the Scroll did scroll. |

<a id="setonwillscroll"></a>
## setOnWillScroll

```TypeScript
setOnWillScroll(callback: ScrollOnWillScrollCallback | undefined): void
```

Set or reset the callback which is triggered when the Scroll will scroll.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIScrollEvent-setOnWillScroll(callback: ScrollOnWillScrollCallback | undefined): void--><!--Device-UIScrollEvent-setOnWillScroll(callback: ScrollOnWillScrollCallback | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [ScrollOnWillScrollCallback](arkts-arkui-scrollonwillscrollcallback-t.md) \| undefined | Yes | callback function, triggered when the Scroll will scroll. |

