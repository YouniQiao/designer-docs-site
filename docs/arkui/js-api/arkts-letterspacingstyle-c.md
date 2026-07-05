# LetterSpacingStyle

文本字符间距对象说明。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(value: LengthMetrics)
```

文本字符间距的构造函数。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LengthMetrics | Yes | 文本字符间距设置项。如果LengthMetrics的unit值是PERCENT，该设置不生效。 |

## letterSpacing

```TypeScript
readonly letterSpacing: number
```

获取属性字符串的文本字符间距。 单位：[vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

