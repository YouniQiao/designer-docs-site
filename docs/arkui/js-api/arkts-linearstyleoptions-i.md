# LinearStyleOptions

线性样式选项。 继承自[ScanEffectOptions](arkts-scaneffectoptions-i.md#ScanEffectOptions)和[CommonProgressStyleOptions](arkts-commonprogressstyleoptions-i.md#CommonProgressStyleOptions)。

**Inheritance:** LinearStyleOptionsextends: ScanEffectOptions, CommonProgressStyleOptions.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeWidth

```TypeScript
strokeWidth?: Length
```

设置进度条宽度（不支持百分比设置）。当宽度大于等于半径时，宽度默认修改为半径值的二分之一。 默认值：4.0vp

**Type:** Length

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## strokeRadius

```TypeScript
strokeRadius?: PX | VP | LPX | Resource
```

设置线性进度条的圆角半径。 取值范围[0, strokeWidth / 2]。默认值：strokeWidth / 2。

**Type:** PX | VP | LPX | Resource

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

