# TipsDialog

Declare CustomDialog TipsDialog

**Since:** 18

<!--Device-unnamed-export declare struct TipsDialog--><!--Device-unnamed-export declare struct TipsDialog-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { AlertDialog, SelectDialog, ButtonOptions, PopoverOptions, TipsDialog, PopoverDialog, LoadingDialog, CustomContentDialog, ConfirmDialog } from '@kit.ArkUI';
```

## checkAction

```TypeScript
checkAction?: (isChecked: boolean) => void
```

Sets the TipsDialog CheckBox Callback.

**Type:** (isChecked: boolean) => void

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TipsDialog-checkAction?: (isChecked: boolean) => void--><!--Device-TipsDialog-checkAction?: (isChecked: boolean) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## checkTips

```TypeScript
checkTips?: ResourceStr
```

Sets the TipsDialog checkbox tips.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TipsDialog-checkTips?: ResourceStr--><!--Device-TipsDialog-checkTips?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## content

```TypeScript
content?: ResourceStr
```

Sets the TipsDialog content.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TipsDialog-content?: ResourceStr--><!--Device-TipsDialog-content?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## controller

```TypeScript
controller: CustomDialogController
```

Sets the TipsDialog Controller.

**Type:** CustomDialogController

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TipsDialog-controller: CustomDialogController--><!--Device-TipsDialog-controller: CustomDialogController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## imageRes

```TypeScript
imageRes: ResourceStr | PixelMap
```

Sets the TipsDialog imageRes.

**Type:** ResourceStr | PixelMap

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TipsDialog-imageRes: ResourceStr | PixelMap--><!--Device-TipsDialog-imageRes: ResourceStr | PixelMap-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## imageSize

```TypeScript
imageSize?: SizeOptions
```

Sets the TipsDialog image size.

**Type:** SizeOptions

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TipsDialog-imageSize?: SizeOptions--><!--Device-TipsDialog-imageSize?: SizeOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isChecked

```TypeScript
@Prop isChecked?: boolean
```

Sets the TipsDialog checkbox check state.

**Type:** boolean

**Since:** 18

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TipsDialog-@Prop isChecked?: boolean--><!--Device-TipsDialog-@Prop isChecked?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onCheckedChange

```TypeScript
onCheckedChange?: Callback<boolean>
```

Sets the TipsDialog CheckBox Callback.

**Type:** Callback<boolean>

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TipsDialog-onCheckedChange?: Callback<boolean>--><!--Device-TipsDialog-onCheckedChange?: Callback<boolean>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## primaryButton

```TypeScript
primaryButton?: ButtonOptions
```

Sets the TipsDialog primary button.

**Type:** ButtonOptions

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TipsDialog-primaryButton?: ButtonOptions--><!--Device-TipsDialog-primaryButton?: ButtonOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## secondaryButton

```TypeScript
secondaryButton?: ButtonOptions
```

Sets the TipsDialog secondary button.

**Type:** ButtonOptions

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TipsDialog-secondaryButton?: ButtonOptions--><!--Device-TipsDialog-secondaryButton?: ButtonOptions-End-->

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

<!--Device-TipsDialog-theme?: Theme | CustomTheme--><!--Device-TipsDialog-theme?: Theme | CustomTheme-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## themeColorMode

```TypeScript
themeColorMode?: ThemeColorMode
```

Sets the TipsDialog dark or light Mode.

**Type:** ThemeColorMode

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TipsDialog-themeColorMode?: ThemeColorMode--><!--Device-TipsDialog-themeColorMode?: ThemeColorMode-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title?: ResourceStr
```

Sets the TipsDialog title.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TipsDialog-title?: ResourceStr--><!--Device-TipsDialog-title?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

