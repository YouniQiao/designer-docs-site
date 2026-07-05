# StackLayoutAlgorithm

堆叠布局算法类。 > **说明：** > > StackLayoutAlgorithm类对象可以赋值给LayoutAlgorithm类型变量，作为[DynamicLayout]@ohos.arkui.components.ArkDynamicLayout组件的 > 入参指定布局算法。

**Inheritance:** StackLayoutAlgorithmimplements: LayoutAlgorithm.

**Since:** 24

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(option?: StackLayoutAlgorithmOptions)
```

堆叠布局算法类的构造函数。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | StackLayoutAlgorithmOptions | No |  |

## alignContent

```TypeScript
@Trace public alignContent?: LocalizedAlignment
```

设置子组件在堆叠布局算法中对齐格式。 默认值：LocalizedAlignment.CENTER 非法值：按默认值处理。 装饰器类型：@Trace

**Type:** LocalizedAlignment

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

