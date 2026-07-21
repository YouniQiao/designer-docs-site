# Prompt

Defines the prompt interface.

**Since:** 11

<!--Device-unnamed-export default class Prompt--><!--Device-unnamed-export default class Prompt-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ShowActionMenuOptions, Button, ShowToastOptions, ShowDialogOptions, ShowDialogSuccessResponse } from '@kit.ArkUI';
```

<a id="showactionmenu"></a>
## showActionMenu

```TypeScript
static showActionMenu(options: ShowActionMenuOptions): void
```

Displays the menu.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Prompt-static showActionMenu(options: ShowActionMenuOptions): void--><!--Device-Prompt-static showActionMenu(options: ShowActionMenuOptions): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [ShowActionMenuOptions](arkts-arkui-prompt-showactionmenuoptions-i.md) | Yes | Options. |

<a id="showdialog"></a>
## showDialog

```TypeScript
static showDialog(options: ShowDialogOptions): void
```

Displays the dialog box.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Prompt-static showDialog(options: ShowDialogOptions): void--><!--Device-Prompt-static showDialog(options: ShowDialogOptions): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [ShowDialogOptions](arkts-arkui-promptaction-showdialogoptions-i.md) | Yes | Options. |

<a id="showtoast"></a>
## showToast

```TypeScript
static showToast(options: ShowToastOptions): void
```

Displays the notification text.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Prompt-static showToast(options: ShowToastOptions): void--><!--Device-Prompt-static showToast(options: ShowToastOptions): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [ShowToastOptions](arkts-arkui-prompt-showtoastoptions-i.md) | Yes | Options. |

