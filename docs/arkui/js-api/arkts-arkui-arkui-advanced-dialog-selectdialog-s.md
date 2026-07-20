# SelectDialog

Declare CustomDialog SelectDialog

**Since:** 18

<!--Device-unnamed-export declare struct SelectDialog--><!--Device-unnamed-export declare struct SelectDialog-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { AlertDialog, SelectDialog, ButtonOptions, PopoverOptions, TipsDialog, PopoverDialog, LoadingDialog, CustomContentDialog, ConfirmDialog } from '@kit.ArkUI';
```

## confirm

```TypeScript
confirm?: ButtonOptions
```

Sets the SelectDialog confirm button.

**Type:** ButtonOptions

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SelectDialog-confirm?: ButtonOptions--><!--Device-SelectDialog-confirm?: ButtonOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## content

```TypeScript
content?: ResourceStr
```

Sets the SelectDialog content.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SelectDialog-content?: ResourceStr--><!--Device-SelectDialog-content?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## controller

```TypeScript
controller: CustomDialogController
```

Sets the SelectDialog Controller.

**Type:** CustomDialogController

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SelectDialog-controller: CustomDialogController--><!--Device-SelectDialog-controller: CustomDialogController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## radioContent

```TypeScript
radioContent: Array<SheetInfo>
```

Sets the SelectDialog sheets.

**Type:** Array<SheetInfo>

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SelectDialog-radioContent: Array<SheetInfo>--><!--Device-SelectDialog-radioContent: Array<SheetInfo>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedIndex

```TypeScript
selectedIndex?: number
```

Sets the SelectDialog selected index.

**Type:** number

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SelectDialog-selectedIndex?: number--><!--Device-SelectDialog-selectedIndex?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## theme

```TypeScript
theme?: Theme | CustomTheme
```

Custom Theme.

**Type:** Theme | CustomTheme

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SelectDialog-theme?: Theme | CustomTheme--><!--Device-SelectDialog-theme?: Theme | CustomTheme-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## themeColorMode

```TypeScript
themeColorMode?: ThemeColorMode
```

Sets the SelectDialog dark or light Mode.

**Type:** ThemeColorMode

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SelectDialog-themeColorMode?: ThemeColorMode--><!--Device-SelectDialog-themeColorMode?: ThemeColorMode-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title: ResourceStr
```

Sets the SelectDialog title.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SelectDialog-title: ResourceStr--><!--Device-SelectDialog-title: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

