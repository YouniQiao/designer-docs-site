# Rating

The **Rating** component provides a rating bar.

> **NOTE**

> - If the parent node of the **Rating** component has fixed dimensions, you must also specify the width and height 
> for the **Rating** component, or set its parent node's [clip]{@link CommonMethod#clip(clip: Optional<boolean>)} 
> attribute to **true**.


## Rating

```TypeScript
Rating(options?: RatingOptions)
```

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RatingOptions | No | Rating bar options.<br> The default values of the parameters in**RatingOptions** apply if this parameter is not set. |

## Summary

- [RatingConfiguration](arkts-arkui-rating-ratingconfiguration-i.md)
- [RatingOptions](arkts-arkui-rating-ratingoptions-i.md)
- [StarStyleOptions](arkts-arkui-rating-starstyleoptions-i.md)
- [OnRatingChangeCallback](arkts-arkui-rating-onratingchangecallback-t.md)
