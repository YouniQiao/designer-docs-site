# ScrollEffectOptions

定义标题栏的滑动模糊效果选项。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## scrollEffectType

```TypeScript
scrollEffectType?: ScrollEffectType
```

标题栏滑动模糊样式。 默认值： ScrollEffectType.COMMON_BLUR。

**Type:** ScrollEffectType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## blurEffectiveStartOffset

```TypeScript
blurEffectiveStartOffset?: LengthMetrics
```

内容区域的最小滑动距离，实现标题栏滑动模糊效果。 默认值： 0vp。

**Type:** LengthMetrics

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## blurEffectiveEndOffset

```TypeScript
blurEffectiveEndOffset?: LengthMetrics
```

标题栏达到最终模糊样式的内容区最大滑动距离。 默认值： 8vp。

**Type:** LengthMetrics

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

