# LoadingProgress

The **LoadingProgress** component is used to create a loading progress animation.

The loading progress animation stops when the component is invisible. The component's visibility is determined by the
value of **ratios** in the
[onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)}
event callback: If the value is greater than 0, the component is visible.

> **NOTE**

> - This component supports [WithTheme]{@link with_theme} since API version 26.0.0.


## LoadingProgress

```TypeScript
LoadingProgress()
```

Creates a loading progress component.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Summary

- [LoadingProgressConfiguration](arkts-arkui-loadingprogress-loadingprogressconfiguration-i.md)
- [LoadingProgressStyle](arkts-arkui-loadingprogress-loadingprogressstyle-e.md)
