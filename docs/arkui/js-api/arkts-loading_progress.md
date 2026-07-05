# loading_progress

定义Loading Progress组件实例。

## loading_progress

```TypeScript
loading_progress()
```

创建加载进度组件。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Summary

### Classes

| Name | Description |
| --- | --- |
| [LoadingProgressAttribute](arkts-loadingprogressattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性。 支持[通用事件]{@link common}。 |

### Interfaces

| Name | Description |
| --- | --- |
| [LoadingProgressConfiguration](arkts-loadingprogressconfiguration-i.md) | 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。 |
| [LoadingProgressInterface](arkts-loadingprogressinterface-i.md) | 用于显示加载动效的组件。 加载动效在组件不可见时停止，组件的可见状态基于 [onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)} 处理，可见阈值ratios大于0即视为可见状态。 > **说明：** > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。 |

### Enums

| Name | Description |
| --- | --- |
| [LoadingProgressStyle](arkts-loadingprogressstyle-e.md) | 表示LoadingProgress的样式类型，不推荐使用。 |

### Constants

| Name | Description |
| --- | --- |
| [LoadingProgress](arkts-loading-progress-con.md#LoadingProgress) | 用于显示加载动效的组件。 加载动效在组件不可见时停止，组件的可见状态基于 [onVisibleAreaChange]{@link CommonMethod#onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback)} 处理，可见阈值ratios大于0即视为可见状态。 > **说明：** > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。 ###### 子组件 无 |
| [LoadingProgressInstance](arkts-loading-progress-con.md#LoadingProgressInstance) | 定义Loading Progress组件实例。 |

