# VpnExtensionAbility

class of vpn extension ability.

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { VpnExtensionContext } from '@ohos.app.ability.VpnExtensionAbility';
```

## onCreate

```TypeScript
onCreate(want: Want): void
```

Called back when a vpn extension is started for initialization.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates the want of created service extension. |

**Example**

```TypeScript
import { VpnExtensionAbility } from '@kit.NetworkKit';
import { Want } from '@kit.AbilityKit';

class MyVpnExtAbility extends VpnExtensionAbility {
    onCreate(want: Want) {
       console.info('MyVpnExtAbility onCreate');
    }
}

```

## onDestroy

```TypeScript
onDestroy(): void
```

Called back before a vpn extension is destroyed.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Example**

```TypeScript
import { VpnExtensionAbility } from '@kit.NetworkKit';

class MyVpnExtAbility extends VpnExtensionAbility {
    onDestroy() {
       console.info('MyVpnExtAbility onDestroy');
    }
}

```

## context

```TypeScript
context: VpnExtensionContext
```

Indicates service extension ability context.

**Type:** VpnExtensionContext

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

