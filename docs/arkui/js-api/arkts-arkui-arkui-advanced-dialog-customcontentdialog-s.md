# CustomContentDialog

Declare custom content dialog

**Since:** 12

<!--Device-unnamed-export declare struct CustomContentDialog--><!--Device-unnamed-export declare struct CustomContentDialog-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { AlertDialog, SelectDialog, ButtonOptions, PopoverOptions, TipsDialog, PopoverDialog, LoadingDialog, CustomContentDialog, ConfirmDialog } from '@kit.ArkUI';
```

## buttons

```TypeScript
buttons?: ButtonOptions[]
```

Sets the CustomContentDialog buttons.

**Type:** ButtonOptions[]

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CustomContentDialog-buttons?: ButtonOptions[]--><!--Device-CustomContentDialog-buttons?: ButtonOptions[]-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## contentAreaPadding

```TypeScript
contentAreaPadding?: Padding
```

Sets the CustomContentDialog content area padding.

**Type:** Padding

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CustomContentDialog-contentAreaPadding?: Padding--><!--Device-CustomContentDialog-contentAreaPadding?: Padding-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## contentBuilder

```TypeScript
@BuilderParam contentBuilder: () => void
```

Sets the CustomContentDialog content.

**Type:** () => void

**Since:** 12

**Decorator:** @BuilderParam

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CustomContentDialog-@BuilderParam contentBuilder: () => void--><!--Device-CustomContentDialog-@BuilderParam contentBuilder: () => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## controller

```TypeScript
controller: CustomDialogController
```

Sets the CustomContentDialog Controller.

**Type:** CustomDialogController

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CustomContentDialog-controller: CustomDialogController--><!--Device-CustomContentDialog-controller: CustomDialogController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## localizedContentAreaPadding

```TypeScript
localizedContentAreaPadding?: LocalizedPadding
```

Sets the CustomContentDialog content area localized padding.

**Type:** LocalizedPadding

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CustomContentDialog-localizedContentAreaPadding?: LocalizedPadding--><!--Device-CustomContentDialog-localizedContentAreaPadding?: LocalizedPadding-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## primaryTitle

```TypeScript
primaryTitle?: ResourceStr
```

Sets the CustomContentDialog title.

**Type:** ResourceStr

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CustomContentDialog-primaryTitle?: ResourceStr--><!--Device-CustomContentDialog-primaryTitle?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## secondaryTitle

```TypeScript
secondaryTitle?: ResourceStr
```

Sets the CustomContentDialog secondary title.

**Type:** ResourceStr

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CustomContentDialog-secondaryTitle?: ResourceStr--><!--Device-CustomContentDialog-secondaryTitle?: ResourceStr-End-->

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

<!--Device-CustomContentDialog-theme?: Theme | CustomTheme--><!--Device-CustomContentDialog-theme?: Theme | CustomTheme-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## themeColorMode

```TypeScript
themeColorMode?: ThemeColorMode
```

Sets the CustomContentDialog dark or light Mode.

**Type:** ThemeColorMode

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CustomContentDialog-themeColorMode?: ThemeColorMode--><!--Device-CustomContentDialog-themeColorMode?: ThemeColorMode-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

