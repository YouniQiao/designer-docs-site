# TextPickerTextStyle

文本样式选项，继承自[PickerTextStyle]PickerTextStyle。

**Inheritance:** TextPickerTextStyleextends: PickerTextStyle.

**Since:** 15

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## overflow

```TypeScript
overflow?: TextOverflow
```

文本截断方式。当设置为MARQUEE时，该属性不生效。 详细规则请参考Text组件的[textOverflow]TextAttribute#textOverflow属性。

**Type:** TextOverflow

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maxFontSize

```TypeScript
maxFontSize?: number | string | Resource
```

文本最大显示字号。详细规则请参考Text组件的[maxFontSize]TextAttribute#maxFontSize属性。

**Type:** number | string | Resource

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## minFontSize

```TypeScript
minFontSize?: number | string | Resource
```

文本最小显示字号，与maxFontSize配合使用。当设置minFontSize和maxFontSize时，font中的size将不生效。 默认最大行数为1，自适应高度方式为MIN_FONT_SIZE_FIRST。 详细规则请参考Text组件的[minFontSize]TextAttribute#minFontSize属性。

**Type:** number | string | Resource

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

