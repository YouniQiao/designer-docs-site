# Font

Sets the text style.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## family

```TypeScript
family?: string | Resource
```

Font family. <br>To specify multiple fonts, separate them with commas (,), and fonts are applied in priority order. Example: **'Arial, HarmonyOS Sans'**. Default value: 'HarmonyOS Sans'.

**Type:** string | Resource

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## size

```TypeScript
size?: Length
```

Font size. If the value is of the number type, the unit fp is used. Percentage strings are not supported. Default value: 16fp.

**Type:** Length

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## style

```TypeScript
style?: FontStyle
```

Font style. Default value: FontStyle.Normal.

**Type:** FontStyle

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## weight

```TypeScript
weight?: FontWeight | number | string
```

Font weight. For the number type, the value ranges from 100 to 900, at an interval of 100. A larger value indicates a thicker font. Default value: FontWeight.Normal.

**Type:** FontWeight | number | string

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

