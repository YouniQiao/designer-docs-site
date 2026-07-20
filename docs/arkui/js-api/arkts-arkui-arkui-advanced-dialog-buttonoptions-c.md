# ButtonOptions

Declare ButtonOptions

**Since:** 18

<!--Device-unnamed-export declare class ButtonOptions--><!--Device-unnamed-export declare class ButtonOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { AlertDialog, SelectDialog, ButtonOptions, PopoverOptions, TipsDialog, PopoverDialog, LoadingDialog, CustomContentDialog, ConfirmDialog } from '@kit.ArkUI';
```

## action

```TypeScript
action?: () => void
```

Sets the Button Callback.

**Type:** () => void

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ButtonOptions-action?: () => void--><!--Device-ButtonOptions-action?: () => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## background

```TypeScript
background?: ResourceColor
```

Sets the background color of a button.

**Type:** ResourceColor

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ButtonOptions-background?: ResourceColor--><!--Device-ButtonOptions-background?: ResourceColor-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## buttonStyle

```TypeScript
buttonStyle?: ButtonStyleMode
```

Describes the Button style.

**Type:** ButtonStyleMode

**Default:** ButtonStyleMode.TEXTUAL

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ButtonOptions-buttonStyle?: ButtonStyleMode--><!--Device-ButtonOptions-buttonStyle?: ButtonStyleMode-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## defaultFocus

```TypeScript
defaultFocus?: boolean
```

Set the default focus of a button.

**Type:** boolean

**Default:** { false }

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ButtonOptions-defaultFocus?: boolean--><!--Device-ButtonOptions-defaultFocus?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontColor

```TypeScript
fontColor?: ResourceColor
```

Sets the Button Text Color.

**Type:** ResourceColor

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ButtonOptions-fontColor?: ResourceColor--><!--Device-ButtonOptions-fontColor?: ResourceColor-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## role

```TypeScript
role?: ButtonRole
```

Describes the Button role.

**Type:** ButtonRole

**Default:** ButtonRole.NORMAL

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ButtonOptions-role?: ButtonRole--><!--Device-ButtonOptions-role?: ButtonRole-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textAlign

```TypeScript
textAlign?: TextAlign
```

Set the alignment mode for the button label.

**Type:** TextAlign

**Default:** { TextAlign.Start }

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-ButtonOptions-textAlign?: TextAlign--><!--Device-ButtonOptions-textAlign?: TextAlign-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value: ResourceStr
```

Sets the Display Content of a Button.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ButtonOptions-value: ResourceStr--><!--Device-ButtonOptions-value: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

