# ArcSliderEnlargeHandler

```TypeScript
declare type ArcSliderEnlargeHandler = (isEnlarged: boolean) => void
```

Defines the callback invoked to notify the application when the arc slider is enlarged or reduced.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-unnamed-declare type ArcSliderEnlargeHandler = (isEnlarged: boolean) => void--><!--Device-unnamed-declare type ArcSliderEnlargeHandler = (isEnlarged: boolean) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnlarged | boolean | Yes | Whether the arc slider is enlarged.<br>**false**: The arc slider is in a reducedstate.<br>**true**: The arc slider is in an enlarged state. |

