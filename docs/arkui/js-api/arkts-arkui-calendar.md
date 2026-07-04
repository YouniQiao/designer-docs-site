# Calendar

Calendar Interface

## Calendar

```TypeScript
Calendar(value: {
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

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | {    date: { year: number; month: number; day: number };    currentData: MonthData;    preData: MonthData;    nextData: MonthData;    controller?: CalendarController;  } | Yes |  |

## Summary

- [CalendarDay](arkts-arkui-calendar-calendarday-i-sys.md)
- [CalendarRequestedData](arkts-arkui-calendar-calendarrequesteddata-i-sys.md)
- [CalendarSelectedDate](arkts-arkui-calendar-calendarselecteddate-i-sys.md)
- [CurrentDayStyle](arkts-arkui-calendar-currentdaystyle-i-sys.md)
- [MonthData](arkts-arkui-calendar-monthdata-i-sys.md)
- [NonCurrentDayStyle](arkts-arkui-calendar-noncurrentdaystyle-i-sys.md)
- [TodayStyle](arkts-arkui-calendar-todaystyle-i-sys.md)
- [WeekStyle](arkts-arkui-calendar-weekstyle-i-sys.md)
- [WorkStateStyle](arkts-arkui-calendar-workstatestyle-i-sys.md)
