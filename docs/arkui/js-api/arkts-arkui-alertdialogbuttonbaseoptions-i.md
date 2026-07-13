# AlertDialogButtonBaseOptions

Defines the button style of the alert dialog box.

> **NOTE**
>
> To standardize anonymous object definitions, the element definitions here have been revised in API version 18.
> While historical version information is preserved for anonymous objects, there may be cases where the outer element
> 's @since version number is higher than inner elements'. This does not affect interface usability.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## action

```TypeScript
action: VoidCallback
```

Callback upon button clicking.

**Type:** VoidCallback

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundColor

```TypeScript
backgroundColor?: ResourceColor
```

Background color of the button.

**Type:** ResourceColor

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## defaultFocus

```TypeScript
defaultFocus?: boolean
```

Whether the button is the default focus. Default value: **false**. **true**: The button is the default focus.
**false**: The button is not the default focus.

**Type:** boolean

**Default:** false

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enabled

```TypeScript
enabled?: boolean
```

Whether to respond when the button is clicked.

Default value: **true**

**true**: Respond when the button is clicked. **false**: Do not respond when the button is clicked.

**Type:** boolean

**Default:** true

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontColor

```TypeScript
fontColor?: ResourceColor
```

Font color of the button.

**Type:** ResourceColor

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## style

```TypeScript
style?: DialogButtonStyle
```

Style of the button.

Default value: **DialogButtonStyle.DEFAULT**

**Type:** DialogButtonStyle

**Default:** -

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value: ResourceStr
```

Text of the button. If the value is null, the button is not displayed.

**Type:** ResourceStr

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

