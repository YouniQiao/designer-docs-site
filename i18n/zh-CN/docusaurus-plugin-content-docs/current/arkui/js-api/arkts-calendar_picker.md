# calendar_picker

定义日历选择器组件实例。

## calendar_picker

```TypeScript
calendar_picker(options?: CalendarOptions)
```

日历选择器。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | CalendarOptions | 否 | 配置日历选择器组件的参数。 |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [CalendarPickerAttribute](arkts-calendarpickerattribute-c.md) | 除支持[通用属性]{@link ./common}外，还支持以下属性： 除支持[通用事件]{@link ./common}，还支持以下事件： |
| [CalendarPickerDialog](arkts-calendarpickerdialog-c.md) | 点击日期弹出日历选择器弹窗，可在弹窗内选择日期。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [CalendarDialogOptions](arkts-calendardialogoptions-i.md) | 日历选择器弹窗选项。 继承自[CalendarOptions]{@link CalendarOptions}。 > **说明：** > > 在应用窗口缩小过程中，弹窗的宽度会被不断压缩，当缩小到一定程度时会导致其内容无法完整显示， 保证CalendarPickerDialog内容能够完整显示的最小窗口宽度为386vp。 |
| [CalendarOptions](arkts-calendaroptions-i.md) | 日历选择器组件的参数说明。 |
| [CalendarPickerInterface](arkts-calendarpickerinterface-i.md) | 日历选择器组件，提供下拉日历弹窗，可以让用户选择日期。 > **说明：** > - 该组件从API版本26.0.0开始支持[WithTheme]{@link ./with_theme}。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [CalendarAlign](arkts-calendaralign-e.md) | 对齐方式类型。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [CalendarPicker](arkts-calendar-picker-con.md#CalendarPicker) | 日历选择器组件，提供下拉日历弹窗，可以让用户选择日期。 > **说明：** > - 该组件从API版本26.0.0开始支持[WithTheme]{@link ./with_theme}。 子组件 无 |
| [CalendarPickerInstance](arkts-calendar-picker-con.md#CalendarPickerInstance) | 定义日历选择器组件实例。 |

