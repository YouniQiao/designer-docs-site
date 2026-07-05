# HeatDistortionEffectParam (System API)

The parameters of heat distortion effect.

**Since:** 26.0.0

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { uiEffect } from '@ohos.graphics.uiEffect';
```

## intensity

```TypeScript
intensity: number
```

Defines distortion intensity for heat distortion effect. Value range [0, 1], and values outside the range will be clamped. 0 means no distortion, and 1 represents the maximum distortion level.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## noiseScale

```TypeScript
noiseScale: number
```

Defines noise scale for heat distortion effect, controls the fineness of the noise texture. Value range [0.1, 5.0], and values outside the range will be clamped. The larger the value, the finer the noise texture.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## progress

```TypeScript
progress: number
```

Defines animation progress for heat distortion effect. Value range [0, 1], and values outside the range will be clamped. 0 corresponds to the start of the animation, and 1 corresponds to the end of the animation.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

## riseWeight

```TypeScript
riseWeight: number
```

Defines rise weight for heat distortion effect, controls the rising speed of bubbles. Value range [0, 1], and values outside the range will be clamped. The larger the value, the more obvious the upward movement.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

