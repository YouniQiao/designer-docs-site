# ShowActionMenuOptions

Defines the option of ShowActionMenu.

**Since:** 11

<!--Device-unnamed-export interface ShowActionMenuOptions--><!--Device-unnamed-export interface ShowActionMenuOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ShowActionMenuOptions, Button, ShowToastOptions, ShowDialogOptions, ShowDialogSuccessResponse } from '@kit.ArkUI';
```

## buttons

```TypeScript
buttons: [Button, Button?, Button?, Button?, Button?, Button?]
```

Array of buttons in the dialog box.The array structure is {text:'button', color: '#666666'}.One to six buttons are supported.

**Type:** [Button, Button?, Button?, Button?, Button?, Button?]

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ShowActionMenuOptions-buttons: [Button, Button?, Button?, Button?, Button?, Button?]--><!--Device-ShowActionMenuOptions-buttons: [Button, Button?, Button?, Button?, Button?, Button?]-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## complete

```TypeScript
complete?: () => void
```

Called when the dialog box is closed.

**Type:** () => void

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ShowActionMenuOptions-complete?: () => void--><!--Device-ShowActionMenuOptions-complete?: () => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fail

```TypeScript
fail?: (errMsg: string) => void
```

Called when the operation is cancelled.

**Type:** (errMsg: string) => void

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ShowActionMenuOptions-fail?: (errMsg: string) => void--><!--Device-ShowActionMenuOptions-fail?: (errMsg: string) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## success

```TypeScript
success?: (tapIndex: number, errMsg: string) => void
```

Called when the dialog box is displayed.

**Type:** (tapIndex: number, errMsg: string) => void

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ShowActionMenuOptions-success?: (tapIndex: number, errMsg: string) => void--><!--Device-ShowActionMenuOptions-success?: (tapIndex: number, errMsg: string) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title?: string
```

Title of the text to display.

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ShowActionMenuOptions-title?: string--><!--Device-ShowActionMenuOptions-title?: string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

