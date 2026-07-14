# EditorAttribute

In the following API examples, you must first use [getKeyboardDelegate](arkts-ime-getkeyboarddelegate-f.md#getkeyboarddelegate-1) to obtain a **KeyboardDelegate** instance, and then call the APIs using the obtained instance.

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## abilityName

```TypeScript
readonly abilityName?: string
```

Ability name set for the edit box.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## bundleName

```TypeScript
readonly bundleName?: string
```

Name of the application package to which the edit box belongs. The value may be **""**. Handle this scenario when using the attribute.

**Type:** string

**Since:** 14

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## capitalizeMode

```TypeScript
readonly capitalizeMode?: CapitalizeMode
```

Whether to capitalize the first letter in the edit box. If it is not set or is set to an invalid value, the first letter is not capitalized by default.

**Type:** CapitalizeMode

**Since:** 20

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## consumeKeyEvents

```TypeScript
readonly consumeKeyEvents?: boolean
```

Whether the editor supports consuming key events.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## displayId

```TypeScript
readonly displayId?: number
```

Screen ID of the window corresponding to the edit box. If window ID is not set, the screen ID of the focused window is used.

**Type:** number

**Since:** 18

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## enterKeyType

```TypeScript
readonly enterKeyType: number
```

Function attributes of the edit box. For details, see [function key definitions in constants](../../../../reference/apis-ime-kit/js-apis-inputmethodengine.md#Constants).

**Type:** number

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## extraConfig

```TypeScript
readonly extraConfig?: InputMethodExtraConfig
```

Extra information about the input method.

**Type:** InputMethodExtraConfig

**Since:** 22

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## gradientMode

```TypeScript
readonly gradientMode?: GradientMode
```

Gradient mode. If this attribute is not specified or is set to an invalid value, the gradient mode is not used by default.

**Type:** GradientMode

**Since:** 20

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## immersiveMode

```TypeScript
readonly immersiveMode?: ImmersiveMode
```

Immersive mode of the input method.

**Type:** ImmersiveMode

**Since:** 15

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## inputPattern

```TypeScript
readonly inputPattern: number
```

Text attribute of the edit box. For details, see [edit box definitions in constants](../../../../reference/apis-ime-kit/js-apis-inputmethodengine.md#Constants).

**Type:** number

**Since:** 8

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## isTextPreviewSupported

```TypeScript
isTextPreviewSupported: boolean
```

Whether text preview is supported. - **true**: Supported. - **false**: Unsupported.

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## placeholder

```TypeScript
readonly placeholder?: string
```

Placeholder information set for the edit box.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## windowId

```TypeScript
readonly windowId?: number
```

ID of the window where the edit box is located.

**Type:** number

**Since:** 18

**System capability:** SystemCapability.MiscServices.InputMethodFramework

