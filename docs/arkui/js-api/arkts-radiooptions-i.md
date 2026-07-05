# RadioOptions

单选框的信息。

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## indicatorBuilder

```TypeScript
indicatorBuilder?: CustomBuilder
```

配置单选框的选中样式为自定义组件。自定义组件与Radio组件为中心点对齐显示。indicatorBuilder设置为undefined时，按照RadioIndicatorType.TICK进行显示。

**Type:** CustomBuilder

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## indicatorType

```TypeScript
indicatorType?: RadioIndicatorType
```

配置单选框的选中样式。未设置时按照RadioIndicatorType.TICK进行显示。

**Type:** RadioIndicatorType

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value: string
```

当前单选框的值。

**Type:** string

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## group

```TypeScript
group: string
```

当前单选框的所属群组名称，相同group的Radio只能有一个被选中。

**Type:** string

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

