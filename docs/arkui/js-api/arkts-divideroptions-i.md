# DividerOptions

分割线的信息。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeWidth

```TypeScript
strokeWidth?: Dimension
```

分割线的线宽。 默认值：2.0px 单位：默认为vp，也可指定单位为px。 取值范围：strokeWidth小于0取默认值，最大不得超过列高的一半。不支持“百分比”类型。

**Type:** Dimension

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## color

```TypeScript
color?: ResourceColor
```

分割线的颜色。 默认值：'#33000000'

**Type:** ResourceColor

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## endMargin

```TypeScript
endMargin?: Dimension
```

分割线与TextPicker侧边结束端的距离。 默认值：0 单位：默认为vp，也可指定单位为px。 取值范围：endMargin小于0时无效，最大值不得超过TextPicker列宽。不支持“百分比”类型。

**Type:** Dimension

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## startMargin

```TypeScript
startMargin?: Dimension
```

分割线与TextPicker侧边起始端的距离。 默认值：0 单位：默认为vp，也可指定单位为px。 取值范围：startMargin小于0时无效，最大值不得超过TextPicker列宽。不支持“百分比”类型。

**Type:** Dimension

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

