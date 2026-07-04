# LinearStyleOptions

Linear style options. Inherits from [ScanEffectOptions](arkts-arkui-scaneffectoptions-i.md#scaneffectoptions) and [CommonProgressStyleOptions](arkts-arkui-commonprogressstyleoptions-i.md#commonprogressstyleoptions).

**Inheritance/Implementation:** LinearStyleOptions extends [ScanEffectOptions](arkts-arkui-scaneffectoptions-i.md#scaneffectoptions), [CommonProgressStyleOptions](arkts-arkui-commonprogressstyleoptions-i.md#commonprogressstyleoptions)

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeRadius

```TypeScript
strokeRadius?: PX | VP | LPX | Resource
```

Border radius of the linear progress indicator. Value range: [0, strokeWidth/2] Default value: **strokeWidth/2**

**Type:** PX | VP | LPX | Resource

**Default:** strokeWidth / 2

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeWidth

```TypeScript
strokeWidth?: Length
```

Stroke width of the progress indicator. Percentage values are not supported. Default value: **4.0vp**

**Type:** Length

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

