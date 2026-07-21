# ActionSheetButtonOptions

Provides button style configuration for the dialog box.

> **NOTE**  
>  
> To standardize anonymous object definitions, the element definitions here have been revised in API version 18.  
> While historical version information is preserved for anonymous objects, there may be cases where the outer element  
> 's @since version number is higher than inner elements'. This does not affect interface usability.

**Since:** 18

<!--Device-unnamed-interface ActionSheetButtonOptions--><!--Device-unnamed-interface ActionSheetButtonOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## action

```TypeScript
action: VoidCallback
```

Callback invoked when the button is selected.

**Type:** VoidCallback

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ActionSheetButtonOptions-action: VoidCallback--><!--Device-ActionSheetButtonOptions-action: VoidCallback-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## defaultFocus

```TypeScript
defaultFocus?: boolean
```

Whether the button is the default focus. The value **true** means that the button is the default focus, and **false** means the opposite.

Default value: **false**

**Type:** boolean

**Default:** false

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ActionSheetButtonOptions-defaultFocus?: boolean--><!--Device-ActionSheetButtonOptions-defaultFocus?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enabled

```TypeScript
enabled?: boolean
```

Whether to respond when the button is clicked. The value **true** means to respond when the button is clicked, and **false** means the opposite.

Default value: **true**

**Type:** boolean

**Default:** true

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ActionSheetButtonOptions-enabled?: boolean--><!--Device-ActionSheetButtonOptions-enabled?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## style

```TypeScript
style?: DialogButtonStyle
```

Button style.

Default value: **DialogButtonStyle.DEFAULT**

**Type:** DialogButtonStyle

**Default:** DialogButtonStyle.DEFAULT

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ActionSheetButtonOptions-style?: DialogButtonStyle--><!--Device-ActionSheetButtonOptions-style?: DialogButtonStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value: string | Resource
```

Button text.

If the text is too long to display, it is truncated with an ellipsis (...).

**Type:** string \| Resource

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ActionSheetButtonOptions-value: string | Resource--><!--Device-ActionSheetButtonOptions-value: string | Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

