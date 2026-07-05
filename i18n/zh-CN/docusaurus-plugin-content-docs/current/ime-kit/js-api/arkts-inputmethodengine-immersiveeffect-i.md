# ImmersiveEffect

Describes the immersive effect.

**起始版本：** 20

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## 导入模块

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## gradientHeight

```TypeScript
gradientHeight: int
```

Gradient height, which cannot exceed 15% of the screen height.

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## gradientMode

```TypeScript
gradientMode: GradientMode
```

Gradient mode. If this attribute is not specified or is set to an invalid value, the gradient mode is not used by default.

**类型：** GradientMode

**起始版本：** 20

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## fluidLightMode

```TypeScript
fluidLightMode?: FluidLightMode
```

Fluid light mode. If this attribute is not specified or is set to an invalid value, the fluid light mode is not used by default. This attribute is available only to system applications.

**类型：** FluidLightMode

**起始版本：** 20

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

