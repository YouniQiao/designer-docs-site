# UIScrollableCommonEvent

Defines a UIScrollableCommonEvent which is used to set event to target component.

**Inheritance/Implementation:** UIScrollableCommonEvent extends [UICommonEvent](arkts-arkui-uicommonevent-i.md)

**Since:** 19

<!--Device-unnamed-declare interface UIScrollableCommonEvent extends UICommonEvent--><!--Device-unnamed-declare interface UIScrollableCommonEvent extends UICommonEvent-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="setonreachend"></a>
## setOnReachEnd

```TypeScript
setOnReachEnd(callback: Callback<void> | undefined): void
```

Set or reset the callback which is triggered when the scrolling reaches the end position.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIScrollableCommonEvent-setOnReachEnd(callback: Callback<void> | undefined): void--><!--Device-UIScrollableCommonEvent-setOnReachEnd(callback: Callback<void> | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;void&gt; \| undefined | Yes | callback function, triggered when the scrolling reaches the end position. |

<a id="setonreachstart"></a>
## setOnReachStart

```TypeScript
setOnReachStart(callback: Callback<void> | undefined): void
```

Set or reset the callback which is triggered when the scrolling reaches the start position.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIScrollableCommonEvent-setOnReachStart(callback: Callback<void> | undefined): void--><!--Device-UIScrollableCommonEvent-setOnReachStart(callback: Callback<void> | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;void&gt; \| undefined | Yes | callback function, triggered when the scrolling reaches the start position. |

<a id="setonscrollframebegin"></a>
## setOnScrollFrameBegin

```TypeScript
setOnScrollFrameBegin(callback: OnScrollFrameBeginCallback | undefined): void
```

Set or reset the callback which is triggered when scrolling begin each frame.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIScrollableCommonEvent-setOnScrollFrameBegin(callback: OnScrollFrameBeginCallback | undefined): void--><!--Device-UIScrollableCommonEvent-setOnScrollFrameBegin(callback: OnScrollFrameBeginCallback | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [OnScrollFrameBeginCallback](arkts-arkui-onscrollframebegincallback-t.md) \| undefined | Yes | callback function, triggered when the scrolling begin each frame. |

<a id="setonscrollstart"></a>
## setOnScrollStart

```TypeScript
setOnScrollStart(callback: Callback<void> | undefined): void
```

Set or reset the callback which is triggered when the scrolling started.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIScrollableCommonEvent-setOnScrollStart(callback: Callback<void> | undefined): void--><!--Device-UIScrollableCommonEvent-setOnScrollStart(callback: Callback<void> | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;void&gt; \| undefined | Yes | callback function, triggered when the scrolling started. |

<a id="setonscrollstop"></a>
## setOnScrollStop

```TypeScript
setOnScrollStop(callback: Callback<void> | undefined): void
```

Set or reset the callback which is triggered when the scrolling stoped.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-UIScrollableCommonEvent-setOnScrollStop(callback: Callback<void> | undefined): void--><!--Device-UIScrollableCommonEvent-setOnScrollStop(callback: Callback<void> | undefined): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;void&gt; \| undefined | Yes | callback function, triggered when the scrolling stoped. |

