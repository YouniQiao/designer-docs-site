# Constants

## LoadingProgress

```TypeScript
declare const LoadingProgress: LoadingProgressInterface
```

用于显示加载动效的组件。 加载动效在组件不可见时停止，组件的可见状态基于 [onVisibleAreaChange]CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback) 处理，可见阈值ratios大于0即视为可见状态。 > **说明：** > - 该组件从API版本26.0.0开始支持[WithTheme]with_theme。 ###### 子组件 无

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## LoadingProgressInstance

```TypeScript
declare const LoadingProgressInstance: LoadingProgressAttribute
```

定义Loading Progress组件实例。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

