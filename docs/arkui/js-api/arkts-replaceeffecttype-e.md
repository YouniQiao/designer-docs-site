# ReplaceEffectType

```TypeScript
declare enum ReplaceEffectType
```

替换动效类型的枚举值。

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## SEQUENTIAL

```TypeScript
SEQUENTIAL = 0
```

默认替换动效：当前symbol完全消失后，新symbol出现。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## CROSS_FADE

```TypeScript
CROSS_FADE = 1
```

快速替换动效：当前symbol淡出的同时，新symbol淡入，产生更流畅、更快速的过渡效果。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## SLASH_OVERLAY

```TypeScript
SLASH_OVERLAY = 2
```

禁用动效：用带有斜杠遮罩层的symbol替换当前symbol，通常用于表示禁用或非活动状态。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

