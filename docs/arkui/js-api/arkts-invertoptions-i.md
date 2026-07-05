# InvertOptions

前景智能取反色。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## high

```TypeScript
high: number
```

背景颜色灰度值小于阈值区间时的取值。 取值范围：[0, 1]

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## low

```TypeScript
low: number
```

背景颜色灰度值大于阈值区间时的取值。 取值范围：[0, 1]

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## thresholdRange

```TypeScript
thresholdRange: number
```

阈值范围。 取值范围：[0, 1] **说明：** 灰度阈值上下偏移thresholdRange构成阈值区间，背景颜色灰度值在区间内取值由high线性渐变到low。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## threshold

```TypeScript
threshold: number
```

灰度阈值。 取值范围：[0, 1]

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

