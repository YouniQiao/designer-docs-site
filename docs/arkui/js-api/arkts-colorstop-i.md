# ColorStop

颜色断点类型，用于描述渐进色颜色断点。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## offset

```TypeScript
offset: Length
```

渐变色断点（0~1之间的比例值，若数据值小于0则置为0，若数据值大于1则置为1）。 **说明：** 若传入字符串类型且内容为数字，则转换为对应的数值。 例如'10vp'转换为10，'10%'转换为0.1。

**Type:** Length

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## color

```TypeScript
color: ResourceColor
```

渐变色断点处的颜色值。

**Type:** ResourceColor

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

