# InputAttribute

Attribute of Input.

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { inputMethod } from '@ohos.inputMethod';
```

## abilityName

```TypeScript
abilityName?: string
```

The name of the ability where the edit box is located.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## consumeKeyEvents

```TypeScript
consumeKeyEvents?: boolean
```

Whether the editor supports consuming key events.

**Type:** boolean

**Default:** false

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## enterKeyType

```TypeScript
enterKeyType: EnterKeyType
```

Indicates the enter key type of the input method.

**Type:** EnterKeyType

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## placeholder

```TypeScript
placeholder?: string
```

Placeholder text in the edit box.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## textInputType

```TypeScript
textInputType: TextInputType
```

Indicates the text input type of the input method.

**Type:** TextInputType

**Since:** 10

**System capability:** SystemCapability.MiscServices.InputMethodFramework

