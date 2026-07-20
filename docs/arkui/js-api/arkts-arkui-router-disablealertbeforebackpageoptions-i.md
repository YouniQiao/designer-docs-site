# DisableAlertBeforeBackPageOptions

Defines the **DisableAlertBeforeBackPage** parameter.

**Since:** 6

**Deprecated since:** 8

**Substitutes:** RouterOptions

<!--Device-unnamed-export interface DisableAlertBeforeBackPageOptions--><!--Device-unnamed-export interface DisableAlertBeforeBackPageOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { BackRouterOptions, DisableAlertBeforeBackPageOptions, RouterOptions, RouterState, EnableAlertBeforeBackPageOptions } from '@kit.ArkUI';
```

## cancel

```TypeScript
cancel?: (errMsg: string) => void
```

Called when the dialog box fails to be closed. **errMsg** indicates the returned information.

**Type:** (errMsg: string) => void

**Since:** 6

**Deprecated since:** 8

**Substitutes:** RouterOptions

<!--Device-DisableAlertBeforeBackPageOptions-cancel?: (errMsg: string) => void--><!--Device-DisableAlertBeforeBackPageOptions-cancel?: (errMsg: string) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## complete

```TypeScript
complete?: () => void
```

Called when the dialog box is closed.

**Type:** () => void

**Since:** 6

**Deprecated since:** 8

**Substitutes:** RouterOptions

<!--Device-DisableAlertBeforeBackPageOptions-complete?: () => void--><!--Device-DisableAlertBeforeBackPageOptions-complete?: () => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## success

```TypeScript
success?: (errMsg: string) => void
```

Called when the dialog box is closed. **errMsg** indicates the returned information.

**Type:** (errMsg: string) => void

**Since:** 6

**Deprecated since:** 8

**Substitutes:** RouterOptions

<!--Device-DisableAlertBeforeBackPageOptions-success?: (errMsg: string) => void--><!--Device-DisableAlertBeforeBackPageOptions-success?: (errMsg: string) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

