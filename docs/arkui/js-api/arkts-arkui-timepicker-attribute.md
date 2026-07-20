# TimePicker properties/events

In addition to the [universal attributes](./common), the following attributes are supported.

In addition to the [universal events](./common), the following events are supported.

**Inheritance/Implementation:** TimePickerAttribute extends [CommonMethod<TimePickerAttribute>](CommonMethod<TimePickerAttribute>)

**Since:** 8

<!--Device-unnamed-declare class TimePickerAttribute extends CommonMethod<TimePickerAttribute>--><!--Device-unnamed-declare class TimePickerAttribute extends CommonMethod<TimePickerAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## dateTimeOptions

```TypeScript
dateTimeOptions(value: DateTimeOptions)
```

Sets whether to display a leading zero for the hours, minutes, and seconds.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TimePickerAttribute-dateTimeOptions(value: DateTimeOptions): TimePickerAttribute--><!--Device-TimePickerAttribute-dateTimeOptions(value: DateTimeOptions): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [DateTimeOptions](../../apis-localization-kit/arkts-apis/arkts-localization-intl-datetimeoptions-i.md) | Yes | Whether to display a leading zero for the hours, minutes, and seconds.<br>Default value:<br>**hour**: For the 24-hour format, the default value is **"2-digit"**, meaning the hour is displayed as a two-digit number. If the actual value is less than 10, a leading zero is added, displayed as "0X". For the 12-hour format, the default value is **"numeric"**, meaning no leading zero.<br>**minute**: The default value is **"2-digit"**, meaning the minute is displayed as a two-digit number. If the actual value is less than 10, a leading zero is added, displayed as "0X".<br>**second**: The default value is **"2-digit"**,meaning the minute is displayed as a two-digit number. If the actual value is less than 10, a leading zero is added, displayed as "0X".<br> If **hour**, **minute**, or **second** is set to **undefined**, the display follows the default rules. |

## dateTimeOptions

```TypeScript
dateTimeOptions(timeFormat: Optional<DateTimeOptions>)
```

Sets whether to display a leading zero for the hours, minutes, and seconds. Compared with [dateTimeOptions<sup>12+</sup>](TimePickerAttribute#dateTimeOptions(value: DateTimeOptions)), this API supports the **undefined** type for the **timeFormat** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TimePickerAttribute-dateTimeOptions(timeFormat: Optional<DateTimeOptions>): TimePickerAttribute--><!--Device-TimePickerAttribute-dateTimeOptions(timeFormat: Optional<DateTimeOptions>): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeFormat | [Optional](arkts-arkui-optional-t.md)<DateTimeOptions> | Yes | Whether to display a leading zero for the hours, minutes, and seconds. Currently only the configuration of the **hour**, **minute**, and **second** parameters is supported.Default value:<br>**hour**: For the 24-hour format, the default value is **"2-digit"**, meaning the hour is displayed as a two-digit number. If the actual value is less than 10, a leading zero is added, displayed as "0X". For the 12-hour format, the default value is **"numeric"**, meaning no leading zero.<br>**minute**: The default value is **"2-digit"**, meaning the minute is displayed as a two-digit number. If the actual value is less than 10, a leading zero is added, displayed as "0X".<br>**second**: The default value is **"2-digit"**,meaning the minute is displayed as a two-digit number. If the actual value is less than 10, a leading zero is added, displayed as "0X".<br> If **hour**, **minute**, or **second** is set to **undefined**, the display follows the default rules. |

## digitalCrownSensitivity

```TypeScript
digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>)
```

Sets the sensitivity to the digital crown rotation.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TimePickerAttribute-digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): TimePickerAttribute--><!--Device-TimePickerAttribute-digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sensitivity | [Optional](arkts-arkui-optional-t.md)<CrownSensitivity> | Yes | Sensitivity to the digital crown rotation.<br>Default value:**CrownSensitivity.MEDIUM** |

## disappearTextStyle

```TypeScript
disappearTextStyle(value: PickerTextStyle)
```

Sets the text color, font size, and font weight of edge items (the second item above or below the selected item).

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TimePickerAttribute-disappearTextStyle(value: PickerTextStyle): TimePickerAttribute--><!--Device-TimePickerAttribute-disappearTextStyle(value: PickerTextStyle): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [PickerTextStyle](arkts-arkui-common-pickertextstyle-i.md) | Yes | Text color, font size, and font weight for edge items.<br>Default value:<br>{<br  >color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>}<br>} |

## disappearTextStyle

```TypeScript
disappearTextStyle(style: Optional<PickerTextStyle>)
```

Sets the text color, font size, and font weight of edge items (the second item above or below the selected item).Compared with [disappearTextStyle<sup>10+</sup>](TimePickerAttribute#disappearTextStyle(value: PickerTextStyle)), this API supports the **undefined** type for the **style** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TimePickerAttribute-disappearTextStyle(style: Optional<PickerTextStyle>): TimePickerAttribute--><!--Device-TimePickerAttribute-disappearTextStyle(style: Optional<PickerTextStyle>): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [Optional](arkts-arkui-optional-t.md)<PickerTextStyle> | Yes | Text color, font size, and font weight for edge items.<br>Default value:<br>{<br>color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>}<br>}<br>If the value of **style** is **undefined**, the default value is used. |

## enableCascade

```TypeScript
enableCascade(enabled: boolean)
```

Sets whether the AM/PM indicator automatically switches based on the hour value. Only takes effect when [useMilitaryTime](TimePickerAttribute#useMilitaryTime(value: boolean)) is set to **false**.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TimePickerAttribute-enableCascade(enabled: boolean): TimePickerAttribute--><!--Device-TimePickerAttribute-enableCascade(enabled: boolean): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Sets whether the AM/PM indicator automatically switches based on the hour value. This setting only takes effect when **useMilitaryTime** is set to **false**.<br>- **true**: The AM/PM indicator automatically switches based on the hour value.<br>- **false**: The AM/PM indicator remains static regardless of hour changes.<br>Default value: **false**.<br>When **enabled** is set to **true**, it only takes effect if the **loop** parameter is also **true**. |

## enableHapticFeedback

```TypeScript
enableHapticFeedback(enable: boolean)
```

Sets whether to enable haptic feedback.

To enable haptic feedback, you must declare the following permission under **requestPermissions** in **module** in **src/main/module.json5** of the project.

> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-common-commonmethod-c.md#attributemodifier-1) since API version 18.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TimePickerAttribute-enableHapticFeedback(enable: boolean): TimePickerAttribute--><!--Device-TimePickerAttribute-enableHapticFeedback(enable: boolean): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether to enable haptic feedback.<br>- **true**: Enable haptic feedback.<br>-**false**: Disable haptic feedback.<br>Default value: **true**.<br>Whether this parameter takes effect after being set to **true** depends on hardware support. |

## enableHapticFeedback

```TypeScript
enableHapticFeedback(enable: Optional<boolean>)
```

Sets whether to enable haptic feedback. Compared with [enableHapticFeedback<sup>12+</sup>](TimePickerAttribute#enableHapticFeedback(enable: boolean)), this API supports the **undefined** type for the **enable** parameter.

To enable haptic feedback, you must declare the following permission under **requestPermissions** in **module** in **src/main/module.json5** of the project.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TimePickerAttribute-enableHapticFeedback(enable: Optional<boolean>): TimePickerAttribute--><!--Device-TimePickerAttribute-enableHapticFeedback(enable: Optional<boolean>): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | [Optional](arkts-arkui-optional-t.md)<boolean> | Yes | Whether to enable haptic feedback.<br>- **true**: Enable haptic feedback.  - **false**: Disable haptic feedback.<br>Default value: **true**.<br>If the value of **enable** is **undefined**, the default value is used.<br>Whether this parameter takes effect after being set to **true** depends on hardware support. |

## loop

```TypeScript
loop(value: boolean)
```

Sets whether to enable loop scrolling.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TimePickerAttribute-loop(value: boolean): TimePickerAttribute--><!--Device-TimePickerAttribute-loop(value: boolean): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to enable loop scrolling.<br>- **true**: Enable loop scrolling.<br>- **false**:Disable loop scrolling.<br>Default value: **true**. |

## loop

```TypeScript
loop(isLoop: Optional<boolean>)
```

Sets whether to enable loop scrolling. Compared with [loop<sup>11+</sup>](TimePickerAttribute#loop(value: boolean)), this API supports the **undefined** type for the **isLoop** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TimePickerAttribute-loop(isLoop: Optional<boolean>): TimePickerAttribute--><!--Device-TimePickerAttribute-loop(isLoop: Optional<boolean>): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isLoop | [Optional](arkts-arkui-optional-t.md)<boolean> | Yes | Whether to enable loop scrolling.<br>- **true**: Enable loop scrolling.<br>-**false**: Disable loop scrolling.<br>Default value: **true**.<br>If the value of **isLoop** is **undefined**,the default value is used. |

## onChange

```TypeScript
onChange(callback: (value: TimePickerResult) => void)
```

Triggered when the time picker snaps to the selected item. This event cannot be triggered by two-way bound state variables.

This callback is triggered only after the scroll animation completes. To obtain real-time index changes, use [onEnterSelectedArea](TimePickerAttribute#onEnterSelectedArea) instead.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TimePickerAttribute-onChange(callback: (value: TimePickerResult) => void): TimePickerAttribute--><!--Device-TimePickerAttribute-onChange(callback: (value: TimePickerResult) => void): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (value: TimePickerResult) => void | Yes | Time in 24-hour format. |

## onChange

```TypeScript
onChange(callback: Optional<OnTimePickerChangeCallback>)
```

Triggered when the time picker snaps to the selected item. This event cannot be triggered by two-way bound state variables. Compared with [onChange](TimePickerAttribute#onChange(callback: TimePickerResult)), this API supports the **undefined** type for the **callback** parameter.

This callback is triggered only after the scroll animation completes. To obtain real-time index changes, use [onEnterSelectedArea](TimePickerAttribute#onEnterSelectedArea) instead.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TimePickerAttribute-onChange(callback: Optional<OnTimePickerChangeCallback>): TimePickerAttribute--><!--Device-TimePickerAttribute-onChange(callback: Optional<OnTimePickerChangeCallback>): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Optional](arkts-arkui-optional-t.md)<OnTimePickerChangeCallback> | Yes | Callback invoked when a time option is selected.<br>If **callback** is set to **undefined**, the callback function is not used. |

## onEnterSelectedArea

```TypeScript
onEnterSelectedArea(callback: Callback<TimePickerResult>)
```

Triggered during the scrolling of the time picker when an item enters the divider area.

Compared with the [onChange](TimePickerAttribute#onChange(callback: TimePickerResult)) event, this event is triggered earlier, specifically when the scroll distance of the current column exceeds half the height of the selected item, which indicates that the item has entered the divider area. When [enableCascade](TimePickerAttribute#enableCascade) is set to **true**, using this callback is not recommended due to the interdependent relationship between the AM/PM and hour columns. This callback indicates the moment an option enters the divider area during scrolling, and only the value of the currently scrolled column will change.The values of other non-scrolled columns will remain unchanged.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](arkts-arkui-common-commonmethod-c.md#attributemodifier-1).

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TimePickerAttribute-onEnterSelectedArea(callback: Callback<TimePickerResult>): TimePickerAttribute--><!--Device-TimePickerAttribute-onEnterSelectedArea(callback: Callback<TimePickerResult>): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<TimePickerResult> | Yes | Callback triggered during the scrolling of the time picker when an item enters the divider area. |

## selectedTextStyle

```TypeScript
selectedTextStyle(value: PickerTextStyle)
```

Sets the text color, font size, and font weight of the selected item.

Default value: { color: '#ff007dff', font: { size: '20fp', weight: FontWeight.Medium } }

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TimePickerAttribute-selectedTextStyle(value: PickerTextStyle): TimePickerAttribute--><!--Device-TimePickerAttribute-selectedTextStyle(value: PickerTextStyle): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [PickerTextStyle](arkts-arkui-common-pickertextstyle-i.md) | Yes | Font color, font size, and font weight of the selected item.<br>Default value:{ color: '#ff007dff', font: { size: '20fp', weight: FontWeight.Medium } } |

## selectedTextStyle

```TypeScript
selectedTextStyle(style: Optional<PickerTextStyle>)
```

Sets the text color, font size, and font weight of the selected item. Compared with [selectedTextStyle<sup>10+</sup>](TimePickerAttribute#selectedTextStyle(value: PickerTextStyle)), this API supports the **undefined** type for the **style** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TimePickerAttribute-selectedTextStyle(style: Optional<PickerTextStyle>): TimePickerAttribute--><!--Device-TimePickerAttribute-selectedTextStyle(style: Optional<PickerTextStyle>): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [Optional](arkts-arkui-optional-t.md)<PickerTextStyle> | Yes | Font color, font size, and font weight of the selected item.Default value: { color: '#ff007dff', font: { size: '20fp', weight: FontWeight.Medium } }If the value of **style** is **undefined**, the default value is used. |

## textStyle

```TypeScript
textStyle(value: PickerTextStyle)
```

Sets the text color, font size, and font weight of candidate items (the item immediately adjacent to the selected item, above or below).

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TimePickerAttribute-textStyle(value: PickerTextStyle): TimePickerAttribute--><!--Device-TimePickerAttribute-textStyle(value: PickerTextStyle): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [PickerTextStyle](arkts-arkui-common-pickertextstyle-i.md) | Yes | Text color, font size, and font weight for candidate items.<br>Default value:{<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>} |

## textStyle

```TypeScript
textStyle(style: Optional<PickerTextStyle>)
```

Sets the text color, font size, and font weight of candidate items (the item immediately adjacent to the selected item, above or below). Compared with [textStyle<sup>10+</sup>](TimePickerAttribute#textStyle(value: PickerTextStyle)), this API supports the **undefined** type for the **style** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TimePickerAttribute-textStyle(style: Optional<PickerTextStyle>): TimePickerAttribute--><!--Device-TimePickerAttribute-textStyle(style: Optional<PickerTextStyle>): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [Optional](arkts-arkui-optional-t.md)<PickerTextStyle> | Yes | Text color, font size, and font weight for candidate items.<br>Default value:<br>{<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>}<br>If the value of **style** is **undefined**, the default value is used. |

## useMilitaryTime

```TypeScript
useMilitaryTime(value: boolean)
```

Sets whether the time is displayed in 24-hour format. If this attribute is not specified, the system time format is used by default.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TimePickerAttribute-useMilitaryTime(value: boolean): TimePickerAttribute--><!--Device-TimePickerAttribute-useMilitaryTime(value: boolean): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to display the time in 24-hour format or 12-hour format.<br>- **true**: 24-hour format.<br>- **false**: 12-hour format. |

## useMilitaryTime

```TypeScript
useMilitaryTime(isMilitaryTime: Optional<boolean>)
```

Sets whether the time is displayed in 24-hour format. If this attribute is not specified, the system time format is used by default. Compared with [useMilitaryTime](TimePickerAttribute#useMilitaryTime(value: boolean)), this API supports the **undefined** type for the **isMilitaryTime** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TimePickerAttribute-useMilitaryTime(isMilitaryTime: Optional<boolean>): TimePickerAttribute--><!--Device-TimePickerAttribute-useMilitaryTime(isMilitaryTime: Optional<boolean>): TimePickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isMilitaryTime | [Optional](arkts-arkui-optional-t.md)<boolean> | Yes | Whether to display the time in 24-hour format or 12-hour format.<br>-**true**: 24-hour format.<br>- **false**: 12-hour format.<br>When the value is **undefined**, the system time format is used by default. |

