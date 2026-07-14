# ButtonOptions

Describes the button style.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## buttonStyle

```TypeScript
buttonStyle?: ButtonStyleMode
```

Style and importance of the button. The system automatically adjusts the button background color and text color based on the enumerated value. You can also use the [backgroundColor](arkts-arkui-commonmethod-c.md#backgroundcolor-1), [fontColor](ButtonAttribute#fontColor), and [role](ButtonAttribute#role) APIs to set the background color and text color. The actual displayed effect will be determined by the last setting. Default value: **ButtonStyleMode.EMPHASIZED** **NOTE** The button primacy is as follows, from high to low: emphasized button, normal button, text button.

**Type:** ButtonStyleMode

**Default:** ButtonStyleMode.EMPHASIZED

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## controlSize

```TypeScript
controlSize?: ControlSize
```

Button size. Default value: **ControlSize.NORMAL**

**Type:** ControlSize

**Default:** ControlSize.NORMAL

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## role

```TypeScript
role?: ButtonRole
```

Role of the button. The system automatically adjusts the button background color and text color based on the enumerated value. You can also use the [backgroundColor](arkts-arkui-commonmethod-c.md#backgroundcolor-1), [fontColor](ButtonAttribute#fontColor), and [buttonStyle](ButtonAttribute#buttonStyle) APIs to set the background color and text color. The actual displayed effect will be determined by the last setting. Default value: **ButtonRole.NORMAL**

**Type:** ButtonRole

**Default:** ButtonRole.NORMAL

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## stateEffect

```TypeScript
stateEffect?: boolean
```

Whether to enable the pressed state effect when the button is clicked. **true**: The pressed state effect is enabled. **false**: The pressed state effect is disabled. Default value: **true** **NOTE** When the pressed state effect is enabled and a custom pressed state style is configured, the resulting color displayed after pressing is a composite blend of the original background color and the newly defined pressed state color.

**Type:** boolean

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type?: ButtonType
```

Button display style. Default value: **ButtonType.ROUNDED_RECTANGLE** API version 18 and later: The default value is **ButtonType.ROUNDED_RECTANGLE**. Versions earlier than API version 18: The default value is **ButtonType.Capsule**.

**Type:** ButtonType

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

