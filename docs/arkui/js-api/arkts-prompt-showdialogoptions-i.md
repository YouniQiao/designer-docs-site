# ShowDialogOptions

Defines the option of show dialog.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.promptAction/promptAction.ShowDialogOptions

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { prompt } from '@kit.ArkUI';
```

## buttons

```TypeScript
buttons?: [Button, Button?, Button?]
```

Array of buttons in the dialog box. The array structure is {text:'button', color: '#666666'}. One to three buttons are supported. The first button is of the positiveButton type, the second is of the negativeButton type, and the third is of the neutralButton type.

**Type:** [Button, Button?, Button?]

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.promptAction/promptAction.ShowDialogOptions#buttons

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## message

```TypeScript
message?: string
```

Text body.

**Type:** string

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.promptAction/promptAction.ShowDialogOptions#message

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title?: string
```

Title of the text to display.

**Type:** string

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.promptAction/promptAction.ShowDialogOptions#title

**System capability:** SystemCapability.ArkUI.ArkUI.Full

