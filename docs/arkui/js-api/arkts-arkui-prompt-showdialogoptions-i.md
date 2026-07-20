# ShowDialogOptions

Defines the option of show dialog.

**Since:** 11

<!--Device-unnamed-export interface ShowDialogOptions--><!--Device-unnamed-export interface ShowDialogOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ShowActionMenuOptions, Button, ShowToastOptions, ShowDialogOptions, ShowDialogSuccessResponse } from '@kit.ArkUI';
```

## buttons

```TypeScript
buttons?: [Button, Button?, Button?]
```

Array of buttons in the dialog box.The array structure is {text:'button', color: '#666666'}.One to three buttons are supported. The first button is of the positiveButton type, the second is of the negativeButton type, and the third is of the neutralButton type.

**Type:** [Button, Button?, Button?]

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ShowDialogOptions-buttons?: [Button, Button?, Button?]--><!--Device-ShowDialogOptions-buttons?: [Button, Button?, Button?]-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## cancel

```TypeScript
cancel?: (data: string, code: string) => void
```

Called when the operation is cancelled.

**Type:** (data: string, code: string) => void

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ShowDialogOptions-cancel?: (data: string, code: string) => void--><!--Device-ShowDialogOptions-cancel?: (data: string, code: string) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## complete

```TypeScript
complete?: (data: string) => void
```

Called when the dialog box is closed.

**Type:** (data: string) => void

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ShowDialogOptions-complete?: (data: string) => void--><!--Device-ShowDialogOptions-complete?: (data: string) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## message

```TypeScript
message?: string
```

Text body.

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ShowDialogOptions-message?: string--><!--Device-ShowDialogOptions-message?: string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## success

```TypeScript
success?: (data: ShowDialogSuccessResponse) => void
```

Called when the dialog box is displayed.

**Type:** (data: ShowDialogSuccessResponse) => void

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ShowDialogOptions-success?: (data: ShowDialogSuccessResponse) => void--><!--Device-ShowDialogOptions-success?: (data: ShowDialogSuccessResponse) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title?: string
```

Title of the text to display.

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ShowDialogOptions-title?: string--><!--Device-ShowDialogOptions-title?: string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

