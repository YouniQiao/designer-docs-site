# DismissDialogAction

Provides information about the action to dismiss the dialog box.

**Since:** 12

<!--Device-unnamed-declare interface DismissDialogAction--><!--Device-unnamed-declare interface DismissDialogAction-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { LevelMode, ImmersiveMode, LevelOrder } from '@kit.ArkUI';
```

## dismiss

```TypeScript
dismiss: Callback<void>
```

Callback for dismissing the dialog box. This API is called only when the dialog box needs to be exited.

**Type:** Callback<void>

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DismissDialogAction-dismiss: Callback<void>--><!--Device-DismissDialogAction-dismiss: Callback<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## reason

```TypeScript
reason: DismissReason
```

Reason why the dialog box cannot be dismissed. You must specify whether to close the dialog box for each of the listed actions.

**Type:** DismissReason

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DismissDialogAction-reason: DismissReason--><!--Device-DismissDialogAction-reason: DismissReason-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

