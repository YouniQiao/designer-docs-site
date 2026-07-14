# LineSpacingStyle

Describes the text line spacing style.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(lineSpacing: LengthMetrics, options?: LineSpacingOptions)
```

A constructor used to create a text line spacing style. **Since**: 26.0.0

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lineSpacing | LengthMetrics | Yes | Text line spacing.<br>Default value: **0.0**<br>Value range:[0, +∞) <br>**NOTE** If **value** of **LengthMetrics** is less than 0, the default value **0.0** is used. |
| options | LineSpacingOptions | No | Line spacing options.<br>Default value: **{ onlyBetweenLines: false }** |

## lineSpacing

```TypeScript
readonly lineSpacing: number
```

Text line spacing. Value range: [0, +∞) Unit: [vp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md)

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## options

```TypeScript
readonly options?: LineSpacingOptions
```

Line spacing options.

**Type:** LineSpacingOptions

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

