# GridLayoutAlgorithm

网格布局算法类。 > **说明：** > > GridLayoutAlgorithm类对象可以赋值给LayoutAlgorithm类型变量，作为[DynamicLayout]@ohos.arkui.components.ArkDynamicLayout组件的入 > 参指定布局算法。

**Inheritance:** GridLayoutAlgorithmimplements: LayoutAlgorithm.

**Since:** 24

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(option?: GridLayoutAlgorithmOptions)
```

网格布局算法类的构造函数。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | GridLayoutAlgorithmOptions | No |  |

## columnsGap

```TypeScript
@Trace public columnsGap?: LengthMetrics
```

列与列之间的间距。 默认值：LengthMetrics.vp(0) 非法值：按默认值处理。 装饰器类型：@Trace

**Type:** LengthMetrics

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## columnsTemplate

```TypeScript
@Trace public columnsTemplate?: string | ItemFillPolicy
```

设置当前网格布局的列数。 默认值：'1fr' 非法值：按默认值处理。 装饰器类型：@Trace

**Type:** string | ItemFillPolicy

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## rowsGap

```TypeScript
@Trace public rowsGap?: LengthMetrics
```

行与行之间的间距。 默认值：LengthMetrics.vp(0) 非法值：按默认值处理。 装饰器类型：@Trace

**Type:** LengthMetrics

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

