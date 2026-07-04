# AdvancedDialogV2Button

Declare AdvancedDialogV2Button.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { AdvancedDialogV2OnCheckedChange, LoadingDialogV2, AdvancedDialogV2Button, AdvancedDialogV2ButtonAction, AlertDialogV2, CustomContentDialogV2, PopoverDialogV2Options, PopoverDialogV2, SelectDialogV2, PopoverDialogV2OnVisibleChange, TipsDialogV2, AdvancedDialogV2ButtonOptions, ConfirmDialogV2 } from '@ohos.arkui.advanced.DialogV2';
```

## constructor

```TypeScript
constructor(options: AdvancedDialogV2ButtonOptions)
```

The constructor used to create a AdvancedDialogV2Button object.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | AdvancedDialogV2ButtonOptions | Yes | button info. |

## action

```TypeScript
action?: AdvancedDialogV2ButtonAction
```

Sets the Button Callback.

**Type:** AdvancedDialogV2ButtonAction

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## background

```TypeScript
background?: ColorMetrics
```

Sets the background color of a button.

**Type:** ColorMetrics

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## buttonStyle

```TypeScript
buttonStyle?: ButtonStyleMode
```

Describes the Button style.

**Type:** ButtonStyleMode

**Default:** ButtonStyleMode.TEXTUAL

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## content

```TypeScript
content: ResourceStr
```

Sets the Display Content of a Button.

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

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

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enabled

```TypeScript
enabled?: boolean
```

Set the availability of the button.

**Type:** boolean

**Default:** { true }

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontColor

```TypeScript
fontColor?: ColorMetrics
```

Sets the Button Text Color.

**Type:** ColorMetrics

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## role

```TypeScript
role?: ButtonRole
```

Describes the Button role.

**Type:** ButtonRole

**Default:** ButtonRole.NORMAL

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

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

**System capability:** SystemCapability.ArkUI.ArkUI.Full

