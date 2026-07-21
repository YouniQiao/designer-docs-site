# EditorAttribute

In the following API examples, you must first use [getKeyboardDelegate](arkts-ime-inputmethodengine-getkeyboarddelegate-f.md#getkeyboarddelegate-1) to obtain a **KeyboardDelegate** instance, and then call the APIs using the obtained instance.

**Since:** 8

<!--Device-inputMethodEngine-interface EditorAttribute--><!--Device-inputMethodEngine-interface EditorAttribute-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## fluidLightMode

```TypeScript
readonly fluidLightMode?: FluidLightMode
```

Fluid light mode. If this attribute is not specified or is set to an invalid value, the fluid light mode is not used by default.

This attribute is available only to system applications.

**Type:** FluidLightMode

**Since:** 20

<!--Device-EditorAttribute-readonly fluidLightMode?: FluidLightMode--><!--Device-EditorAttribute-readonly fluidLightMode?: FluidLightMode-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

