# CalendarPicker properties/events

In addition to the [universal attributes](./common), the following attributes are supported. In addition to the [universal events](./common), the following events are supported.

**Inheritance/Implementation:** CalendarPickerAttribute extends [CommonMethod<CalendarPickerAttribute>](CommonMethod<CalendarPickerAttribute>)

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## edgeAlign

```TypeScript
edgeAlign(alignType: CalendarAlign, offset?: Offset)
```

Sets how the picker is aligned with the entry component.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alignType | CalendarAlign | Yes | Alignment type.<br>Default value: **CalendarAlign.END**. |
| offset | Offset | No | Offset of the picker relative to the entry component after alignment based on thespecified alignment type.<br>Default value: **{dx: 0, dy: 0}** |

## edgeAlign

```TypeScript
edgeAlign(alignType: Optional<CalendarAlign>, offset?: Offset)
```

Sets how the picker is aligned with the entry component. Compared with [edgeAlign](CalendarPickerAttribute#edgeAlign(alignType: CalendarAlign, offset?: Offset)), this API supports the **undefined** type for the **alignType** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alignType | Optional&lt;CalendarAlign&gt; | Yes | Alignment type.<br>Default value: **CalendarAlign.END**.<br>If thevalue of **alignType** is **undefined**, the default value is used. |
| offset | Offset | No | Offset of the picker relative to the entry component after alignment based on thespecified alignment type.<br>Default value: **{dx: 0, dy: 0}** |

## markToday

```TypeScript
markToday(enabled: boolean)
```

Whether to highlight the current system date.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to highlight the current system date.<br>- **true**: Highlight the currentsystem date.<br>- **false**: Do not highlight the current system date.<br>Default value: **false**. |

## onChange

```TypeScript
onChange(callback: Callback<Date>)
```

Triggered when a date is selected. This event cannot be triggered by two-way bound state variables.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Date&gt; | Yes | Selected date value.<br>**Since:** 18 |

## onChange

```TypeScript
onChange(callback: Optional<Callback<Date>>)
```

Triggered when a date is selected. This event cannot be triggered by two-way bound state variables. Compared with [onChange](CalendarPickerAttribute#onChange(callback: Callback<Date>)), this API supports the **undefined** type for the **callback** parameter. > **NOTE** > > This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 20.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Optional&lt;Callback&lt;Date&gt;&gt; | Yes | Selected date value.<br>If **callback** is set to **undefined**, thecallback function is not used. |

## textStyle

```TypeScript
textStyle(value: PickerTextStyle)
```

Sets the font color, font size, and font weight in the entry area.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PickerTextStyle | Yes | Font color, font size, and font weight in the entry area.<br>Default value:<br>{<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>} |

## textStyle

```TypeScript
textStyle(style: Optional<PickerTextStyle>)
```

Sets the font color, font size, and font weight in the entry area. Compared with [textStyle](CalendarPickerAttribute#textStyle(value: PickerTextStyle)), this API supports the **undefined** type for the **style** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;PickerTextStyle&gt; | Yes | Font color, font size, and font weight in the entry area.<br>Defaultvalue:<br>{<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>}<br>Ifthe value of **style** is **undefined**, the default value is used. |

