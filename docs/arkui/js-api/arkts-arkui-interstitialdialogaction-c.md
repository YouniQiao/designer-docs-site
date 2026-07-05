# InterstitialDialogAction

Declare dialog action.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { IconStyle, TitlePosition, BottomOffset, InterstitialDialogAction } from '@ohos.atomicservice.InterstitialDialogAction';
```

## closeDialog

```TypeScript
closeDialog(): void
```

Execute a dialog close event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(dialogOptions: DialogOptions)
```

The constructor transfers parameter settings.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dialogOptions | DialogOptions | Yes | Creates a new dialog action object. |

## openDialog

```TypeScript
openDialog(): void
```

Execute a dialog open event.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

