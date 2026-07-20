# Rating

The **Rating** component provides a rating bar.

> **NOTE**

> - If the parent node of the **Rating** component has fixed dimensions, you must also specify the width and height 
> for the **Rating** component, or set its parent node's [clip]{@link CommonMethod#clip(clip: Optional<boolean>)} 
> attribute to **true**.

## Child Components

Not supported

## Sequential Keyboard Navigation Specifications

| Key | Description |  
|------------|-----------------------------|  
| Tab | Switch the focus between components. |  
| Left and right arrow keys | Increase or decrease the rating on preview at the specified step, without changing the actual rating.|  
| Home | Move the focus to the first star, without changing the actual rating. |  
| End | Move the focus to the last star, without changing the actual rating. |  
| Space/Enter | Submit the rating result based on the current rating. |

## Rating

```TypeScript
Rating(options?: RatingOptions)
```

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-RatingInterface-(options?: RatingOptions): RatingAttribute--><!--Device-RatingInterface-(options?: RatingOptions): RatingAttribute-End-->

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
