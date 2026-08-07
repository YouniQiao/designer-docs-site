# HeatDistortionEffectParam (System API)

The parameters of heat distortion effect.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

<!--Device-uiEffect-interface HeatDistortionEffectParam--><!--Device-uiEffect-interface HeatDistortionEffectParam-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## intensity

```TypeScript
intensity: double
```

Defines distortion intensity for heat distortion effect.Value range [0, 1], and values outside the range will be clamped.0 means no distortion, and 1 represents the maximum distortion level.

**Type:** double

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-HeatDistortionEffectParam-intensity: double--><!--Device-HeatDistortionEffectParam-intensity: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## noiseScale

```TypeScript
noiseScale: double
```

Defines noise scale for heat distortion effect, controls the fineness of the noise texture.Value range [0.1, 5.0], and values outside the range will be clamped.The larger the value, the finer the noise texture.

**Type:** double

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-HeatDistortionEffectParam-noiseScale: double--><!--Device-HeatDistortionEffectParam-noiseScale: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## progress

```TypeScript
progress: double
```

Defines animation progress for heat distortion effect.Value range [0, 1], and values outside the range will be clamped.0 corresponds to the start of the animation, and 1 corresponds to the end of the animation.

**Type:** double

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-HeatDistortionEffectParam-progress: double--><!--Device-HeatDistortionEffectParam-progress: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## riseWeight

```TypeScript
riseWeight: double
```

Defines rise weight for heat distortion effect, controls the rising speed of bubbles.Value range [0, 1], and values outside the range will be clamped.The larger the value, the more obvious the upward movement.

**Type:** double

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-HeatDistortionEffectParam-riseWeight: double--><!--Device-HeatDistortionEffectParam-riseWeight: double-End-->

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

