# EnableAlertBeforeBackPageOptions

Defines the option of EnableAlertBeforeBackPage.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** EnableAlertOptions

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { BackRouterOptions, DisableAlertBeforeBackPageOptions, RouterOptions, RouterState, EnableAlertBeforeBackPageOptions } from '@system.router';
```

## cancel

```TypeScript
cancel?: (errMsg: string) => void
```

Called when the operation is cancelled.

**Type:** (errMsg: string) => void

**Since:** 6

**Deprecated since:** 8

**Substitutes:** EnableAlertOptions

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## complete

```TypeScript
complete?: () => void
```

Called when the dialog box is closed.

**Type:** () => void

**Since:** 6

**Deprecated since:** 8

**Substitutes:** EnableAlertOptions

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## message

```TypeScript
message: string
```

dialog context.

**Type:** string

**Since:** 6

**Deprecated since:** 8

**Substitutes:** message

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## success

```TypeScript
success?: (errMsg: string) => void
```

Called when the dialog box is displayed.

**Type:** (errMsg: string) => void

**Since:** 6

**Deprecated since:** 8

**Substitutes:** EnableAlertOptions

**System capability:** SystemCapability.ArkUI.ArkUI.Full

