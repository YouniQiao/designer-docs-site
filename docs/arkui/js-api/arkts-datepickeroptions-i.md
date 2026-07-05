# DatePickerOptions

日期选择器组件的参数说明。 > **说明：** > > - Date的使用请参考[TimePickerOptions]TimePickerOptions。 > > - 在DatePicker组件滑动过程中修改DatePickerOptions中的属性，会导致这些属性无法生效。

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## mode

```TypeScript
mode?: DatePickerMode
```

设置日期展示模式。 默认值：DatePickerMode.DATE，显示年、月、日三列。 在[DatePickerDialog]./date_picker中，当[DatePickerDialogOptions] (docroot://reference/apis-arkui/arkui-ts/ts-methods-datepicker-dialog.md#datepickerdialogoptions)的showTime设置为 true时，此参数不生效，默认显示年、月、日三列。

**Type:** DatePickerMode

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## start

```TypeScript
start?: Date
```

指定选择器的起始日期。 默认值：Date('1970-1-1') 取值范围：[Date('1900-01-31'), Date('2100-12-31')]

**Type:** Date

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## end

```TypeScript
end?: Date
```

指定选择器的结束日期。 默认值：Date('2100-12-31') 取值范围：[Date('1900-01-31'), Date('2100-12-31')]

**Type:** Date

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selected

```TypeScript
selected?: Date
```

设置选中项的日期。 默认值：当前系统日期。 取值范围：[Date('1900-01-31'), Date('2100-12-31')] 从API version 10开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。

**Type:** Date

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

