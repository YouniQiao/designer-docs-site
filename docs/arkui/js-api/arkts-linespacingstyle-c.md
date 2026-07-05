# LineSpacingStyle

文本行间距对象说明。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(lineSpacing: LengthMetrics, options?: LineSpacingOptions)
```

文本行间距的构造函数。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lineSpacing | LengthMetrics | Yes | 文本的行间距。 默认值：0.0 取值范围：  [0, +∞) 说明： LengthMetrics的value值小于0时，取默认值0.0。 |
| options | LineSpacingOptions | No |  |

## options

```TypeScript
readonly options?: LineSpacingOptions
```

行间距配置项。

**Type:** LineSpacingOptions

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## lineSpacing

```TypeScript
readonly lineSpacing: number
```

文本行间距。 取值范围：[0, +∞) 单位：[vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

