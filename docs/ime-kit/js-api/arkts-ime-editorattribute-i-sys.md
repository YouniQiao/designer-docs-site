# EditorAttribute

In the following API examples, you must first use [getKeyboardDelegate](arkts-ime-getkeyboarddelegate-f.md#getkeyboarddelegate-1) to obtain a **KeyboardDelegate** instance, and then call the APIs using the obtained instance.

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { inputMethodEngine } from '@ohos.inputMethodEngine';
```

## fluidLightMode

```TypeScript
readonly fluidLightMode?: FluidLightMode
```

Fluid light mode. If this attribute is not specified or is set to an invalid value, the fluid light mode is not used by default. This attribute is available only to system applications.

**Type:** FluidLightMode

**Since:** 20

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**System API:** This is a system API.

