# CalendarAttribute

**Since:** 7

**Deprecated since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## currentDayStyle

```TypeScript
currentDayStyle(value: CurrentDayStyle)
```

Sets the date style in the current month.

**Since:** 7

**Deprecated since:** 20

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | CurrentDayStyle | Yes |  |

## direction

```TypeScript
direction(value: Axis)
```

Sets the sliding direction.

**Since:** 7

**Deprecated since:** 20

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Axis | Yes |  |

## needSlide

```TypeScript
needSlide(value: boolean)
```

Indicates whether the page can be scrolled.

**Since:** 7

**Deprecated since:** 20

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes |  |

## nonCurrentDayStyle

```TypeScript
nonCurrentDayStyle(value: NonCurrentDayStyle)
```

Sets the non-monthly date style.

**Since:** 7

**Deprecated since:** 20

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | NonCurrentDayStyle | Yes |  |

## offDays

```TypeScript
offDays(value: number)
```

Set weekend. The default value is Sunday and Saturday.

**Since:** 7

**Deprecated since:** 20

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes |  |

## onRequestData

```TypeScript
onRequestData(
    event: (event: CalendarRequestedData) => void,
  )
```

When you swipe to switch months, the information about the previous month and the next month is requested.

**Since:** 7

**Deprecated since:** 20

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: CalendarRequestedData) => void | Yes |  |

## onSelectChange

```TypeScript
onSelectChange(event: (event: CalendarSelectedDate) => void)
```

Click a date to return the information about the date you clicked.

**Since:** 7

**Deprecated since:** 20

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: CalendarSelectedDate) => void | Yes |  |

## showHoliday

```TypeScript
showHoliday(value: boolean)
```

Setting whether to display holiday information

**Since:** 7

**Deprecated since:** 20

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes |  |

## showLunar

```TypeScript
showLunar(value: boolean)
```

Specifies whether the component displays the lunar calendar information.

**Since:** 7

**Deprecated since:** 20

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes |  |

## startOfWeek

```TypeScript
startOfWeek(value: number)
```

Set the start day of the week for the calendar.

**Since:** 7

**Deprecated since:** 20

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes |  |

## todayStyle

```TypeScript
todayStyle(value: TodayStyle)
```

Set the date style for today.

**Since:** 7

**Deprecated since:** 20

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | TodayStyle | Yes |  |

## weekStyle

```TypeScript
weekStyle(value: WeekStyle)
```

Sets the date style for the weekend.

**Since:** 7

**Deprecated since:** 20

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | WeekStyle | Yes |  |

## workStateStyle

```TypeScript
workStateStyle(value: WorkStateStyle)
```

Sets the style of the working state.

**Since:** 7

**Deprecated since:** 20

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | WorkStateStyle | Yes |  |

