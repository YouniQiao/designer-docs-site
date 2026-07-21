# Gauge

The **Gauge** component represents a gauge that displays data in a circular format.

> **NOTE**

> - This component supports [WithTheme]{@link with_theme} since API version 26.0.0.

## Child Components

This component can contain only one child component.

> **NOTE**  
>  
> - Supported child component types: built-in and custom components, including  
> [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) but excluding [ForEach]{@link for_each}  
> and [LazyForEach]{@link lazy_for_each}.  
>  
> - You are advised to use the **Text** component to build the current value and auxiliary text.  
>  
> - If the width and height of the child component are in percentage, the reference range is the rectangle that has  
> the outer ring as its inscribed circle.

## Gauge

```TypeScript
Gauge(options: GaugeOptions)
```

Creates a gauge.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-GaugeInterface-(options: GaugeOptions): GaugeAttribute--><!--Device-GaugeInterface-(options: GaugeOptions): GaugeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [GaugeOptions](arkts-arkui-gaugeoptions-i.md) | Yes | Settings of the gauge. |

## Summary

- [GaugeConfiguration](arkts-arkui-gauge-gaugeconfiguration-i.md)
- [GaugeIndicatorOptions](arkts-arkui-gauge-gaugeindicatoroptions-i.md)
- [GaugeOptions](arkts-arkui-gauge-gaugeoptions-i.md)
- [GaugeShadowOptions](arkts-arkui-gauge-gaugeshadowoptions-i.md)
