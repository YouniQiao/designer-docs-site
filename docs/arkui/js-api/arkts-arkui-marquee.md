# Marquee

The **Marquee** component is used to display a scrolling piece of text. Text scrolling is activated only when the
content width is greater than or equal to the component's width.

> **NOTE**
>
> To ensure that scrolling frame rates are not affected, it is recommended that the number of **Marquee** components
> in a scroll container does not exceed four, or alternatively, use the [Text]{@link text} component's
> [TextOverflow.MARQUEE]{@link TextOverflow} as a substitute.
>
> For the scenario where the frame rate of the **Marquee** component is dynamic, you can use the
> [MarqueeDynamicSyncScene]{@link @ohos.arkui.UIContext} API.
>
> If the text width is less than the **Marquee** component width, use the [property animation]{@link common} to
> implement scrolling.


## Marquee

```TypeScript
Marquee(options: MarqueeOptions)
```

Creates a marquee.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | MarqueeOptions | Yes | Parameters of the marquee. |

## Summary

- [MarqueeOptions](arkts-arkui-marquee-marqueeoptions-i.md)
