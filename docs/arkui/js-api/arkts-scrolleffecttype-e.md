# ScrollEffectType

```TypeScript
declare enum ScrollEffectType
```

滑动模糊效果类型。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## COMMON_BLUR

```TypeScript
COMMON_BLUR = 0
```

普通模糊样式，对标题栏背景应用统一模糊效果，模糊背景伴随透明渐变出现或消失。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## GRADUAL_BLUR

```TypeScript
GRADUAL_BLUR = 1
```

渐变模糊样式，对标题栏背景应用统一模糊效果，具有清晰边界。标题栏内容在滑动前后改变颜色或状态，滑动过程中跟随手势线性变化。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

