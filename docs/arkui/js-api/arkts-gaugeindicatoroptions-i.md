# GaugeIndicatorOptions

数据量规图表指针选项。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## icon

```TypeScript
icon?: ResourceStr
```

图标资源路径。 **说明：** 不配置则使用系统默认样式，系统默认样式为三角形指针。 仅支持使用svg格式的图标，若使用其他格式，则使用默认的三角形样式指针。

**Type:** ResourceStr

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## space

```TypeScript
space?: Dimension
```

指针距离圆环外边的间距。(不支持百分比) 默认值：8 单位：vp **说明：** 对于默认的三角形样式指针，间距为黑色三角形到圆环外边的间距。 若设置值小于0，则使用默认值。 若设置值大于圆环半径，则使用默认值。

**Type:** Dimension

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

