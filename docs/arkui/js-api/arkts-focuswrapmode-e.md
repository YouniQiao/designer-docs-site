# FocusWrapMode

```TypeScript
declare enum FocusWrapMode
```

交叉轴方向键走焦模式枚举。

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## DEFAULT

```TypeScript
DEFAULT = 0
```

交叉轴方向键不允许换行。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## WRAP_WITH_ARROW

```TypeScript
WRAP_WITH_ARROW = 1
```

交叉轴方向键允许换行。 不规则单元格场景下，交叉轴方向键走焦时优先走到同一行的可获焦item。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

