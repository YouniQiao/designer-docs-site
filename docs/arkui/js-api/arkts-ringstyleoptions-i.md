# RingStyleOptions

环形无刻度样式选项。 继承自[ScanEffectOptions](arkts-scaneffectoptions-i.md#ScanEffectOptions)和[CommonProgressStyleOptions](arkts-commonprogressstyleoptions-i.md#CommonProgressStyleOptions)。

**Inheritance:** RingStyleOptionsextends: ScanEffectOptions, CommonProgressStyleOptions.

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

## shadow

```TypeScript
shadow?: boolean
```

进度条阴影开关。 true：表示打开进度条阴影；false：表示关闭进度条阴影。 默认值：false

**Type:** boolean

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## status

```TypeScript
status?: ProgressStatus
```

设置进度条状态。当设置为ProgressStatus.LOADING时会开启检查更新动效，此时设置进度值不生效。当从ProgressStatus.LOADING设置为ProgressStatus.PROGRESSING时，检查更新 动效会执行到终点再停止。 默认值：ProgressStatus.PROGRESSING

**Type:** ProgressStatus

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

