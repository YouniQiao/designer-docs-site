# CheckboxOptions

多选框的信息。

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## indicatorBuilder

```TypeScript
indicatorBuilder?: CustomBuilder
```

配置多选框的选中样式为自定义组件。自定义组件与Checkbox组件为中心点对齐显示。indicatorBuilder设置为undefined/null时，默认为indicatorBuilder未设置状态。

**Type:** CustomBuilder

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## name

```TypeScript
name?: string
```

指定多选框名称。 默认值：undefined，取值为undefined无效果。

**Type:** string

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## group

```TypeScript
group?: string
```

用于指定多选框所属群组的名称（即所属CheckboxGroup的名称）。 默认值：undefined，默认状态下配合[CheckboxGroupOptions]CheckboxGroupOptions属性group信息为undefined的节点使用。 **说明：** 未配合使用[CheckboxGroup]checkboxgroup组件时，此值无用。

**Type:** string

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

