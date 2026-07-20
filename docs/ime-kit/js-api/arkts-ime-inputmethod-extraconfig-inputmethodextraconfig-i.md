# InputMethodExtraConfig

Represents the extension information of an input method.

**Since:** 22

<!--Device-unnamed-export interface InputMethodExtraConfig--><!--Device-unnamed-export interface InputMethodExtraConfig-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { InputMethodExtraConfig } from '@kit.IMEKit';
```

## customSettings

```TypeScript
customSettings: Record<string, CustomValueType>
```

Input method extension information, which is used to store custom key-value pairs. These key-value pairs can be any configuration information related to the input method, such as user input habits, shortcut key settings,theme colors, and more. The settings are loaded when the input method application is bound to the system,delivering a personalized user experience. The total length of the information cannot exceed 32 KB.

**Type:** Record<string, CustomValueType>

**Since:** 22

<!--Device-InputMethodExtraConfig-customSettings: Record<string, CustomValueType>--><!--Device-InputMethodExtraConfig-customSettings: Record<string, CustomValueType>-End-->

**System capability:** SystemCapability.MiscServices.InputMethodFramework

