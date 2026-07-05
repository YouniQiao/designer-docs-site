# gauge

定义Gauge组件实例。

## gauge

```TypeScript
gauge(options: GaugeOptions)
```

创建数据量规图表组件。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | GaugeOptions | Yes | 数据量规图表组件参数。 [since 18] |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [GaugeAttribute](arkts-gaugeattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性。 |

### Interfaces

| Name | Description |
| --- | --- |
| [GaugeConfiguration](arkts-gaugeconfiguration-i.md) | 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。 |
| [GaugeIndicatorOptions](arkts-gaugeindicatoroptions-i.md) | 数据量规图表指针选项。 |
| [GaugeInterface](arkts-gaugeinterface-i.md) | 数据量规图表组件，用于将数据展示为环形图表。 > **说明：** > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。 |
| [GaugeOptions](arkts-gaugeoptions-i.md) | 数据量规图表选项。 |
| [GaugeShadowOptions](arkts-gaugeshadowoptions-i.md) | GaugeShadowOptions继承自[MultiShadowOptions]{@link MultiShadowOptions}，具有MultiShadowOptions的全部属性。 |

### Constants

| Name | Description |
| --- | --- |
| [Gauge](arkts-gauge-con.md#Gauge) | 数据量规图表组件，用于将数据展示为环形图表。 > **说明：** > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。 ###### 子组件 可以包含单个子组件。 > **说明：** > > - 支持的子组件类型：系统组件和自定义组件，支持条件渲染控制[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)，不支持循环渲染控制 > [ForEach]{@link for_each}和[LazyForEach]{@link lazy_for_each}。 > > - 建议使用文本组件构建当前数值文本和辅助文本。 > > - 若子组件宽高为百分比形式，则基准范围为以外圆环做为内切圆的矩形。 |
| [GaugeInstance](arkts-gauge-con.md#GaugeInstance) | 定义Gauge组件实例。 |

