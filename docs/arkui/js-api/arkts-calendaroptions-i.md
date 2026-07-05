# CalendarOptions

日历选择器组件的参数说明。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## hintRadius

```TypeScript
hintRadius?: number | Resource
```

描述日期选中态底板样式。 取值范围：[0.0, 16.0] 单位：vp 默认值：16.0，即底板样式为圆形。 **说明：** 当hintRadius为0.0时表示底板样式为直角矩形；当hintRadius为(0.0, 16.0)时，底板样式为圆角矩形； 当hintRadius为负数或大于16.0时，恢复为默认值16.0。

**Type:** number | Resource

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## start

```TypeScript
start?: Date
```

设置开始日期。 默认值：Date('0001-01-01') 取值范围：[Date('0001-01-01'), Date('5000-12-31')]

**Type:** Date

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## disabledDateRange

```TypeScript
disabledDateRange?: DateRange[]
```

设置禁用日期区间。 **说明：** 1. 若日期区间内的开始日期或结束日期未设置或设置为异常值，则该日期区间无效。 2. 若在日期区间内，结束日期早于开始日期，则该日期区间无效。 3. 当在入口区选定某日期，通过上下箭头调整日期进行增加或减少操作时，若遇到禁用日期，系统将自动跳过整个禁用区间。

**Type:** DateRange[]

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## end

```TypeScript
end?: Date
```

设置结束日期。 默认值：Date('5000-12-31') 取值范围：[Date('0001-01-01'), Date('5000-12-31')]

**Type:** Date

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selected

```TypeScript
selected?: Date
```

设置选中项的日期。选中的日期未设置或日期格式不符合规范则为默认值。 默认值：当前系统日期。 取值范围：[Date('0001-01-01'), Date('5000-12-31')]

**Type:** Date

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

