# ContentWillScrollCallback

```TypeScript
declare type ContentWillScrollCallback = (result: SwiperContentWillScrollResult) => boolean
```

Swiper即将滑动前触发的回调，返回值表示是否允许此次滑动。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | SwiperContentWillScrollResult | Yes | 即将滑动的相关信息，主要包括：当前页面对应的index、滑动方向上即将显示的页面index和此次滑动的位移。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Swiper是否响应本次滑动，true表示响应，false表示不响应。 |

