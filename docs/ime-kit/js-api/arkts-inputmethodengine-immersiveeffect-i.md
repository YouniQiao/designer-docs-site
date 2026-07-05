# ImmersiveEffect

Describes the immersive effect.

**Since:** 20

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## gradientHeight

```TypeScript
gradientHeight: int
```

Gradient height, which cannot exceed 15% of the screen height.

**Type:** int

**Since:** 20

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## gradientMode

```TypeScript
gradientMode: GradientMode
```

Gradient mode. If this attribute is not specified or is set to an invalid value, the gradient mode is not used by default.

**Type:** GradientMode

**Since:** 20

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## fluidLightMode

```TypeScript
fluidLightMode?: FluidLightMode
```

Fluid light mode. If this attribute is not specified or is set to an invalid value, the fluid light mode is not used by default. This attribute is available only to system applications.

**Type:** FluidLightMode

**Since:** 20

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

