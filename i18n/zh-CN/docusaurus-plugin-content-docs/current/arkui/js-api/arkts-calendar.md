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

**起始版本：** 7

**废弃版本：** 20

**卡片能力：** 从API version 10开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | {
    date: { year: number; month: number; day: number };
    currentData: MonthData;
    preData: MonthData;
    nextData: MonthData;
    controller?: CalendarController;
  } | 是 |  |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[CalendarAttribute](arkts-calendarattribute-c.md) |  |
| <!--DelRow-->[CalendarController](arkts-calendarcontroller-c.md) | Calendar controller. |

### 接口

| 名称 | 描述 |
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

### 常量

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[Calendar](arkts-calendar-con-sys.md#Calendar) | Defines Calendar Component. |
| <!--DelRow-->[CalendarInstance](arkts-calendar-con-sys.md#CalendarInstance) | Defines Calendar Component instance. |

