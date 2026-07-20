# InterstitialDialogAction

Declare dialog action.

**Since:** 12

<!--Device-unnamed-export declare class InterstitialDialogAction--><!--Device-unnamed-export declare class InterstitialDialogAction-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { IconStyle, TitlePosition, BottomOffset, InterstitialDialogAction } from '@kit.ArkUI';
```

## closeDialog

```TypeScript
closeDialog(): void
```

Execute a dialog close event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-InterstitialDialogAction-closeDialog(): void--><!--Device-InterstitialDialogAction-closeDialog(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(dialogOptions: DialogOptions)
```

The constructor transfers parameter settings.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-InterstitialDialogAction-constructor(dialogOptions: DialogOptions)--><!--Device-InterstitialDialogAction-constructor(dialogOptions: DialogOptions)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dialogOptions | [DialogOptions](arkts-arkui-atomicservice-interstitialdialogaction-dialogoptions-i.md) | Yes | Creates a new dialog action object. |

## openDialog

```TypeScript
openDialog(): void
```

Execute a dialog open event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-InterstitialDialogAction-openDialog(): void--><!--Device-InterstitialDialogAction-openDialog(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

