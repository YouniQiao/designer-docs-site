# BackRouterOptions

Defines the option of router back.

**Since:** 7

**Deprecated since:** 8

**Substitutes:** RouterOptions

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { BackRouterOptions, DisableAlertBeforeBackPageOptions, RouterOptions, RouterState, EnableAlertBeforeBackPageOptions } from '@kit.ArkUI';
```

## params

```TypeScript
params?: Object
```

Data that needs to be passed to the destination page during navigation.

**Type:** Object

**Since:** 7

**Deprecated since:** 8

**Substitutes:** params

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

## uri

```TypeScript
uri?: string
```

Returns to the page of the specified path.
If the page with the specified path does not exist in the page stack, router.back() is called by default.

**Type:** string

**Since:** 7

**Deprecated since:** 8

**Substitutes:** url

**System capability:** SystemCapability.ArkUI.ArkUI.Full

