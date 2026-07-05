# CalendarAttribute

**起始版本：** 7

**废弃版本：** 20

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## currentDayStyle

```TypeScript
currentDayStyle(value: CurrentDayStyle)
```

Sets the date style in the current month.

**起始版本：** 7

**废弃版本：** 20

**卡片能力：** 从API version 10开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | CurrentDayStyle | 是 |  |

## direction

```TypeScript
direction(value: Axis)
```

Sets the sliding direction.

**起始版本：** 7

**废弃版本：** 20

**卡片能力：** 从API version 10开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Axis | 是 |  |

## needSlide

```TypeScript
needSlide(value: boolean)
```

Indicates whether the page can be scrolled.

**起始版本：** 7

**废弃版本：** 20

**卡片能力：** 从API version 10开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 |  |

## nonCurrentDayStyle

```TypeScript
nonCurrentDayStyle(value: NonCurrentDayStyle)
```

Sets the non-monthly date style.

**起始版本：** 7

**废弃版本：** 20

**卡片能力：** 从API version 10开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | NonCurrentDayStyle | 是 |  |

## offDays

```TypeScript
offDays(value: number)
```

Set weekend. The default value is Sunday and Saturday.

**起始版本：** 7

**废弃版本：** 20

**卡片能力：** 从API version 10开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 |  |

## onRequestData

```TypeScript
onRequestData(
    event: (event: CalendarRequestedData) => void,
  )
```

When you swipe to switch months, the information about the previous month and the next month is requested.

**起始版本：** 7

**废弃版本：** 20

**卡片能力：** 从API version 10开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | (event: CalendarRequestedData) => void | 是 |  |

## onSelectChange

```TypeScript
onSelectChange(event: (event: CalendarSelectedDate) => void)
```

Click a date to return the information about the date you clicked.

**起始版本：** 7

**废弃版本：** 20

**卡片能力：** 从API version 10开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | (event: CalendarSelectedDate) => void | 是 |  |

## showHoliday

```TypeScript
showHoliday(value: boolean)
```

Setting whether to display holiday information

**起始版本：** 7

**废弃版本：** 20

**卡片能力：** 从API version 10开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 |  |

## showLunar

```TypeScript
showLunar(value: boolean)
```

Specifies whether the component displays the lunar calendar information.

**起始版本：** 7

**废弃版本：** 20

**卡片能力：** 从API version 10开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 |  |

## startOfWeek

```TypeScript
startOfWeek(value: number)
```

Set the start day of the week for the calendar.

**起始版本：** 7

**废弃版本：** 20

**卡片能力：** 从API version 10开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 |  |

## todayStyle

```TypeScript
todayStyle(value: TodayStyle)
```

Set the date style for today.

**起始版本：** 7

**废弃版本：** 20

**卡片能力：** 从API version 10开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | TodayStyle | 是 |  |

## weekStyle

```TypeScript
weekStyle(value: WeekStyle)
```

Sets the date style for the weekend.

**起始版本：** 7

**废弃版本：** 20

**卡片能力：** 从API version 10开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | WeekStyle | 是 |  |

## workStateStyle

```TypeScript
workStateStyle(value: WorkStateStyle)
```

Sets the style of the working state.

**起始版本：** 7

**废弃版本：** 20

**卡片能力：** 从API version 10开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | WorkStateStyle | 是 |  |

