# InputMethodExtensionAbility

The **InputMethodExtensionAbility** module provides APIs for developing input methods and managing the lifecycle of input method extensions. > **NOTE** > > - The APIs of this module can be used only in the stage model.

**Since:** 9

**System capability:** SystemCapability.MiscServices.InputMethodFramework

## Modules to Import

```TypeScript
import { InputMethodExtensionAbility } from '@kit.IMEKit';
```

## onCreate

```TypeScript
onCreate(want: Want): void
```

Called when the **InputMethodExtensionAbility** is started to implement initialization.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Information related to the **InputMethodExtensionAbility**, including the ability name andbundle name. |

**Example**

```TypeScript
import { InputMethodExtensionAbility } from '@kit.IMEKit';
import { Want } from '@kit.AbilityKit';

class InputMethodExt extends InputMethodExtensionAbility {
  onCreate(want: Want): void {
    console.info('onCreate, want:' + want.abilityName);
  }
}

```

## onDestroy

```TypeScript
onDestroy(): void
```

Called when this **InputMethodExtensionAbility** is destroyed to clear resources.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Example**

```TypeScript
import { InputMethodExtensionAbility } from '@kit.IMEKit';

class InputMethodExt extends InputMethodExtensionAbility {
  onDestroy(): void {
    console.info('onDestroy');
  }
}

```

## context

```TypeScript
context: InputMethodExtensionContext
```

Context of the **InputMethodExtension**, which is inherited from **ExtensionContext**.

**Type:** InputMethodExtensionContext

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.MiscServices.InputMethodFramework

