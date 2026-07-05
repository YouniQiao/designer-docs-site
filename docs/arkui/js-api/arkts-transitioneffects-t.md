# TransitionEffects

```TypeScript
declare type TransitionEffects = {
  identity: undefined;
  opacity: number;
  slideSwitch: undefined;
  move: TransitionEdge;
  translate: TranslateOptions;
  rotate: RotateOptions;
  scale: ScaleOptions;
  asymmetric: {
    appear: TransitionEffect;
    disappear: TransitionEffect;
  };
}
```

定义所有转场效果。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Property type:** {
  identity: undefined;
  opacity: number;
  slideSwitch: undefined;
  move: TransitionEdge;
  translate: TranslateOptions;
  rotate: RotateOptions;
  scale: ScaleOptions;
  asymmetric: {
    appear: TransitionEffect;
    disappear: TransitionEffect;
  };
}

