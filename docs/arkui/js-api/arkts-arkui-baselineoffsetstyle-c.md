# BaselineOffsetStyle

Describes the text baseline offset style.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(value: LengthMetrics)
```

A constructor used to create a text baseline offset style.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LengthMetrics | Yes | Text baseline offset options. This API does not work if **unit** of**LengthMetrics** is percent. |

## baselineOffset

```TypeScript
readonly baselineOffset: number
```

Text baseline offset.

Unit: [vp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md)

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

