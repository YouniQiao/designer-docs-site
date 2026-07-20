# PopoverDialog

Declare struct PopoverDialog

**Since:** 14

<!--Device-unnamed-export declare struct PopoverDialog--><!--Device-unnamed-export declare struct PopoverDialog-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { AlertDialog, SelectDialog, ButtonOptions, PopoverOptions, TipsDialog, PopoverDialog, LoadingDialog, CustomContentDialog, ConfirmDialog } from '@kit.ArkUI';
```

## popover

```TypeScript
popover: PopoverOptions
```

Sets the PopoverDialog options.

**Type:** PopoverOptions

**Since:** 14

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-PopoverDialog-popover: PopoverOptions--><!--Device-PopoverDialog-popover: PopoverOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## targetBuilder

```TypeScript
targetBuilder: Callback<void>
```

Sets the targetBuilder content.

**Type:** Callback<void>

**Since:** 14

**Decorator:** @BuilderParam

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-PopoverDialog-targetBuilder: Callback<void>--><!--Device-PopoverDialog-targetBuilder: Callback<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## visible

```TypeScript
visible: boolean
```

Sets the PopoverDialog Visible Status.

**Type:** boolean

**Since:** 14

**Decorator:** @Link

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-PopoverDialog-visible: boolean--><!--Device-PopoverDialog-visible: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

