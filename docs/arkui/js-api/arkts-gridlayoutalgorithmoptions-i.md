# GridLayoutAlgorithmOptions

设置网格布局算法的列数模板、列间距、行间距。

**Since:** 24

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## columnsGap

```TypeScript
columnsGap?: LengthMetrics
```

列与列之间的间距。 默认值：LengthMetrics.vp(0) 非法值：按默认值处理。 装饰器类型：@Trace

**Type:** LengthMetrics

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## columnsTemplate

```TypeScript
columnsTemplate?: string | ItemFillPolicy
```

设置当前网格布局的列数。 默认值：'1fr' 非法值：按默认值处理。 装饰器类型：@Trace

**Type:** string | ItemFillPolicy

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## rowsGap

```TypeScript
rowsGap?: LengthMetrics
```

行与行之间的间距。 默认值：LengthMetrics.vp(0) 非法值：按默认值处理。 装饰器类型：@Trace

**Type:** LengthMetrics

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

