# UIScrollEvent

定义UIScrollEvent，用于设置目标组件的不同通用事件。

**Inheritance:** UIScrollEventextends: UIScrollableCommonEvent.

**Since:** 19

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## setOnDidScroll

```TypeScript
setOnDidScroll(callback: ScrollOnScrollCallback | undefined): void
```

设置或重置Scroll滚动时触发的回调。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ScrollOnScrollCallback \| undefined | Yes | 回调函数，在Scroll滚动时触发。 |

## setOnWillScroll

```TypeScript
setOnWillScroll(callback: ScrollOnWillScrollCallback | undefined): void
```

设置或重置Scroll滚动前触发的回调。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ScrollOnWillScrollCallback \| undefined | Yes | 回调函数，在Scroll即将滚动时触发。 |

