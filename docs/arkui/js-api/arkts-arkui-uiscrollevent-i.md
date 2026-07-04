# UIScrollEvent

Defines a UIScrollableCommonEvent which is used to set different common event to target component.

**Inheritance/Implementation:** UIScrollEvent extends [UIScrollableCommonEvent](arkts-arkui-uiscrollablecommonevent-i.md#uiscrollablecommonevent)

**Since:** 19

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## setOnDidScroll

```TypeScript
setOnDidScroll(callback: ScrollOnScrollCallback | undefined): void
```

Set or reset the callback which is triggered when the Scroll did scroll.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ScrollOnScrollCallback \| undefined | Yes | callback function, triggered when the Scroll did scroll. |

## setOnWillScroll

```TypeScript
setOnWillScroll(callback: ScrollOnWillScrollCallback | undefined): void
```

Set or reset the callback which is triggered when the Scroll will scroll.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ScrollOnWillScrollCallback \| undefined | Yes | callback function, triggered whenthe Scroll will scroll. |

