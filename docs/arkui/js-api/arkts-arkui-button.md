# Button

The **Button** component can be used to create different types of buttons. > **NOTE**

## Button

```TypeScript
Button()
```

Creates an empty button.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Button

```TypeScript
Button(options: ButtonOptions)
```

Creates a button that can contain a single child component.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ButtonOptions | Yes | Button settings. |

## Button

```TypeScript
Button(label: ResourceStr, options?: ButtonOptions)
```

Creates a button based on text content. In this case, the component cannot contain child components. By default, the text content is displayed in a one line.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| label | ResourceStr | Yes | Button text.<br>Note: If the text is longer than the width of the button, it istruncated. |
| options | ButtonOptions | No | Button settings. |

## Summary

- [ButtonConfiguration](arkts-arkui-button-buttonconfiguration-i.md)
- [ButtonOptions](arkts-arkui-button-buttonoptions-i.md)
- [LabelStyle](arkts-arkui-button-labelstyle-i.md)
- [ButtonTriggerClickCallback](arkts-arkui-button-buttontriggerclickcallback-t.md)
- [ButtonRole](arkts-arkui-button-buttonrole-e.md)
- [ButtonStyleMode](arkts-arkui-button-buttonstylemode-e.md)
- [ButtonType](arkts-arkui-button-buttontype-e.md)
- [ControlSize](arkts-arkui-button-controlsize-e.md)
