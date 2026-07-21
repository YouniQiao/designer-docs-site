# LetterSpacingStyle

Describes the letter spacing style.

**Since:** 12

<!--Device-unnamed-declare class LetterSpacingStyle--><!--Device-unnamed-declare class LetterSpacingStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor(value: LengthMetrics)
```

A constructor used to create a text letter spacing style.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-LetterSpacingStyle-constructor(value: LengthMetrics)--><!--Device-LetterSpacingStyle-constructor(value: LengthMetrics)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [LengthMetrics](arkts-arkui-lengthmetrics-t.md) | Yes | Letter spacing options. This API does not work if **unit** of **LengthMetrics** is percent. |

## letterSpacing

```TypeScript
readonly letterSpacing: number
```

Letter spacing.

Unit: [vp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md)

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-LetterSpacingStyle-readonly letterSpacing: number--><!--Device-LetterSpacingStyle-readonly letterSpacing: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

