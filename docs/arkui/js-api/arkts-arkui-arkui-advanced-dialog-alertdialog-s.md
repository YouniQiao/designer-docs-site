# AlertDialog

Declare CustomDialog AlertDialog

**Since:** 18

<!--Device-unnamed-export declare struct AlertDialog--><!--Device-unnamed-export declare struct AlertDialog-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { AlertDialog, SelectDialog, ButtonOptions, PopoverOptions, TipsDialog, PopoverDialog, LoadingDialog, CustomContentDialog, ConfirmDialog } from '@kit.ArkUI';
```

## content

```TypeScript
content: ResourceStr
```

Sets the AlertDialog content.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-AlertDialog-content: ResourceStr--><!--Device-AlertDialog-content: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## controller

```TypeScript
controller: CustomDialogController
```

Sets the AlertDialog Controller.

**Type:** CustomDialogController

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-AlertDialog-controller: CustomDialogController--><!--Device-AlertDialog-controller: CustomDialogController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## primaryButton

```TypeScript
primaryButton?: ButtonOptions
```

Sets the AlertDialog primary button.

**Type:** ButtonOptions

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-AlertDialog-primaryButton?: ButtonOptions--><!--Device-AlertDialog-primaryButton?: ButtonOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## primaryTitle

```TypeScript
primaryTitle?: ResourceStr
```

Sets the AlertDialog title.

**Type:** ResourceStr

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlertDialog-primaryTitle?: ResourceStr--><!--Device-AlertDialog-primaryTitle?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## secondaryButton

```TypeScript
secondaryButton?: ButtonOptions
```

Sets the AlertDialog secondary button.

**Type:** ButtonOptions

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-AlertDialog-secondaryButton?: ButtonOptions--><!--Device-AlertDialog-secondaryButton?: ButtonOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## secondaryTitle

```TypeScript
secondaryTitle?: ResourceStr
```

Sets the AlertDialog secondary title.

**Type:** ResourceStr

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlertDialog-secondaryTitle?: ResourceStr--><!--Device-AlertDialog-secondaryTitle?: ResourceStr-End-->

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

<!--Device-AlertDialog-theme?: Theme | CustomTheme--><!--Device-AlertDialog-theme?: Theme | CustomTheme-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## themeColorMode

```TypeScript
themeColorMode?: ThemeColorMode
```

Sets the AlertDialog dark or light Mode.

**Type:** ThemeColorMode

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlertDialog-themeColorMode?: ThemeColorMode--><!--Device-AlertDialog-themeColorMode?: ThemeColorMode-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

