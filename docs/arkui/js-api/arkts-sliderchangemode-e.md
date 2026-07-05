# SliderChangeMode

```TypeScript
declare enum SliderChangeMode
```

滑块的状态值。包括按下、拖动、离开以及点击滑动条使滑块位置时。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Begin

```TypeScript
Begin
```

手势/鼠标接触或者按下滑块。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Moving

```TypeScript
Moving
```

正在拖动滑块过程中。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## End

```TypeScript
End
```

手势/鼠标离开滑块。 **说明：** 异常值恢复成默认值时触发，即value设置小于min或大于max。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Click

```TypeScript
Click
```

点击滑动条使滑块位置移动。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

