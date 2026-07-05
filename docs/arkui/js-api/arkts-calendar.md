# calendar

Defines Calendar Component instance.

## calendar

```TypeScript
calendar(value: {
    date: { year: number; month: number; day: number };
    currentData: MonthData;
    preData: MonthData;
    nextData: MonthData;
    controller?: CalendarController;
  })
```

Set value.

**Since:** 7

**Deprecated since:** 20

**Widget capability:** From API version 10 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | {
    date: { year: number; month: number; day: number };
    currentData: MonthData;
    preData: MonthData;
    nextData: MonthData;
    controller?: CalendarController;
  } | Yes |  |

## Summary

### Classes

| Name | Description |
| --- | --- |
| <!--DelRow-->[CalendarAttribute](arkts-calendarattribute-c.md) |  |
| <!--DelRow-->[CalendarController](arkts-calendarcontroller-c.md) | Calendar controller. |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[CalendarDay](arkts-calendarday-i.md) | Provides a monthly view component to display information such as date, shift break, and schedule. |
| <!--DelRow-->[CalendarInterface](arkts-calendarinterface-i.md) | Calendar Interface |
| <!--DelRow-->[CalendarRequestedData](arkts-calendarrequesteddata-i.md) | Defines the struct of CalendarRequestedData. |
| <!--DelRow-->[CalendarSelectedDate](arkts-calendarselecteddate-i.md) | Defines the struct of CalendarSelectedDate. |
| <!--DelRow-->[CurrentDayStyle](arkts-currentdaystyle-i.md) | CurrentDayStyle object. |
| <!--DelRow-->[MonthData](arkts-monthdata-i.md) | Date object. |
| <!--DelRow-->[NonCurrentDayStyle](arkts-noncurrentdaystyle-i.md) | Non current day style. |
| <!--DelRow-->[TodayStyle](arkts-todaystyle-i.md) | Non current day style. |
| <!--DelRow-->[WeekStyle](arkts-weekstyle-i.md) | Week Style. |
| <!--DelRow-->[WorkStateStyle](arkts-workstatestyle-i.md) | Work state style. |

### Constants

| Name | Description |
| --- | --- |
| <!--DelRow-->[Calendar](arkts-calendar-con-sys.md#Calendar) | Defines Calendar Component. |
| <!--DelRow-->[CalendarInstance](arkts-calendar-con-sys.md#CalendarInstance) | Defines Calendar Component instance. |

