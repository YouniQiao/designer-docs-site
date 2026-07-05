# ArcSliderEnlargeHandler

```TypeScript
declare type ArcSliderEnlargeHandler = (isEnlarged: boolean) => void
```

弧形Slider放大或缩小时，告知应用。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnlarged | boolean | Yes | ArcSlider当前是否放大。 isEnlarged为false时，ArcSlider组件处于缩小状态。 isEnlarged为true时，  ArcSlider组件处于放大状态。 |

