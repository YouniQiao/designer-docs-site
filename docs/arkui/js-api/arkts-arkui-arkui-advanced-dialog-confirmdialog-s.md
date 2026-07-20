# ConfirmDialog

Declare CustomDialog ConfirmDialog

**Since:** 18

<!--Device-unnamed-export declare struct ConfirmDialog--><!--Device-unnamed-export declare struct ConfirmDialog-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { AlertDialog, SelectDialog, ButtonOptions, PopoverOptions, TipsDialog, PopoverDialog, LoadingDialog, CustomContentDialog, ConfirmDialog } from '@kit.ArkUI';
```

## checkTips

```TypeScript
checkTips?: ResourceStr
```

Sets the ConfirmDialog checkbox tips.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ConfirmDialog-checkTips?: ResourceStr--><!--Device-ConfirmDialog-checkTips?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## content

```TypeScript
content?: ResourceStr
```

Sets the ConfirmDialog content.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ConfirmDialog-content?: ResourceStr--><!--Device-ConfirmDialog-content?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## controller

```TypeScript
controller: CustomDialogController
```

Sets the ConfirmDialog Controller.

**Type:** CustomDialogController

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ConfirmDialog-controller: CustomDialogController--><!--Device-ConfirmDialog-controller: CustomDialogController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isChecked

```TypeScript
@Prop isChecked?: boolean
```

Sets the ConfirmDialog checkbox state.

**Type:** boolean

**Since:** 18

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ConfirmDialog-@Prop isChecked?: boolean--><!--Device-ConfirmDialog-@Prop isChecked?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onCheckedChange

```TypeScript
onCheckedChange?: Callback<boolean>
```

Sets the ConfirmDialog CheckBox Callback.

**Type:** Callback<boolean>

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ConfirmDialog-onCheckedChange?: Callback<boolean>--><!--Device-ConfirmDialog-onCheckedChange?: Callback<boolean>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## primaryButton

```TypeScript
primaryButton?: ButtonOptions
```

Sets the ConfirmDialog primary button.

**Type:** ButtonOptions

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ConfirmDialog-primaryButton?: ButtonOptions--><!--Device-ConfirmDialog-primaryButton?: ButtonOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## secondaryButton

```TypeScript
secondaryButton?: ButtonOptions
```

Sets the ConfirmDialog secondary button.

**Type:** ButtonOptions

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ConfirmDialog-secondaryButton?: ButtonOptions--><!--Device-ConfirmDialog-secondaryButton?: ButtonOptions-End-->

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

<!--Device-ConfirmDialog-theme?: Theme | CustomTheme--><!--Device-ConfirmDialog-theme?: Theme | CustomTheme-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## themeColorMode

```TypeScript
themeColorMode?: ThemeColorMode
```

Sets the ConfirmDialog dark or light Mode.

**Type:** ThemeColorMode

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ConfirmDialog-themeColorMode?: ThemeColorMode--><!--Device-ConfirmDialog-themeColorMode?: ThemeColorMode-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title: ResourceStr
```

Sets the ConfirmDialog title.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ConfirmDialog-title: ResourceStr--><!--Device-ConfirmDialog-title: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

