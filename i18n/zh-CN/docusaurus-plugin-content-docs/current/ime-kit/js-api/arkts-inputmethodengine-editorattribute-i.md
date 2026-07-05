# EditorAttribute

In the following API examples, you must first use [getKeyboardDelegate]inputMethodEngine.getKeyboardDelegate() to obtain a **KeyboardDelegate** instance, and then call the APIs using the obtained instance.

**起始版本：** 8

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## 导入模块

```TypeScript
import { inputMethodEngine } from '@kit.IMEKit';
```

## extraConfig

```TypeScript
readonly extraConfig?: InputMethodExtraConfig
```

Extra information about the input method.

**类型：** InputMethodExtraConfig

**起始版本：** 22

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## inputPattern

```TypeScript
readonly inputPattern: int
```

Text attribute of the edit box. For details, see [edit box definitions in constants](docroot://reference/apis-ime-kit/js-apis-inputmethodengine.md#Constants).

**类型：** int

**起始版本：** 8

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## immersiveMode

```TypeScript
readonly immersiveMode?: ImmersiveMode
```

Immersive mode of the input method.

**类型：** ImmersiveMode

**起始版本：** 15

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## enterKeyType

```TypeScript
readonly enterKeyType: int
```

Function attributes of the edit box. For details, see [function key definitions in constants](docroot://reference/apis-ime-kit/js-apis-inputmethodengine.md#Constants).

**类型：** int

**起始版本：** 8

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## fluidLightMode

```TypeScript
readonly fluidLightMode?: FluidLightMode
```

Fluid light mode. If this attribute is not specified or is set to an invalid value, the fluid light mode is not used by default. This attribute is available only to system applications.

**类型：** FluidLightMode

**起始版本：** 20

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**系统接口：** 此接口为系统接口。

## windowId

```TypeScript
readonly windowId?: int
```

ID of the window where the edit box is located.

**类型：** int

**起始版本：** 18

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## isTextPreviewSupported

```TypeScript
isTextPreviewSupported: boolean
```

Whether text preview is supported. - **true**: Supported. - **false**: Unsupported.

**类型：** boolean

**起始版本：** 12

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## abilityName

```TypeScript
readonly abilityName?: string
```

Ability name set for the edit box.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## bundleName

```TypeScript
readonly bundleName?: string
```

Name of the application package to which the edit box belongs. The value may be **""**. Handle this scenario when using the attribute.

**类型：** string

**起始版本：** 14

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## capitalizeMode

```TypeScript
readonly capitalizeMode?: CapitalizeMode
```

Whether to capitalize the first letter in the edit box. If it is not set or is set to an invalid value, the first letter is not capitalized by default.

**类型：** CapitalizeMode

**起始版本：** 20

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## placeholder

```TypeScript
readonly placeholder?: string
```

Placeholder information set for the edit box.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## consumeKeyEvents

```TypeScript
readonly consumeKeyEvents?: boolean
```

Whether the editor supports consuming key events.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## displayId

```TypeScript
readonly displayId?: long
```

Screen ID of the window corresponding to the edit box. If window ID is not set, the screen ID of the focused window is used.

**类型：** long

**起始版本：** 18

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## gradientMode

```TypeScript
readonly gradientMode?: GradientMode
```

Gradient mode. If this attribute is not specified or is set to an invalid value, the gradient mode is not used by default.

**类型：** GradientMode

**起始版本：** 20

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

