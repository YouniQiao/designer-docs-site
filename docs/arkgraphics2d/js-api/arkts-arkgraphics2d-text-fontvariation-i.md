# FontVariation

Describes a font variation.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

<!--Device-text-interface FontVariation--><!--Device-text-interface FontVariation-End-->

**System capability:** SystemCapability.Graphics.Drawing

## axis

```TypeScript
axis: string
```

String identified by the keyword in the font variation key-value pair.

**Type:** string

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-FontVariation-axis: string--><!--Device-FontVariation-axis: string-End-->

**System capability:** SystemCapability.Graphics.Drawing

## isNormalized

```TypeScript
isNormalized?: boolean
```

Whether to normalize. If the value is **true**, the value range of the value field is -1 to 1, which maps the minimum value to the maximum value configured in the font file. The value **0** indicates the default value configured in the font file. If the value is **false**, the value range of the value field is the adjustable range supported by the font file itself. The default value is **false**.

**Type:** boolean

**Since:** 24

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 24.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-FontVariation-isNormalized?: boolean--><!--Device-FontVariation-isNormalized?: boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

## value

```TypeScript
value: double
```

Value in the font variation key-value pair.

**Type:** double

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-FontVariation-value: double--><!--Device-FontVariation-value: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

