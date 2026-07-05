# DateData

DateData定义了日期通用属性和方法，包括年、月、日。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CounterType,DateData,CounterComponent,CounterOptions } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(year: number, month: number, day: number)
```

DateData的构造函数用于初始化日期对象。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| year | number | Yes | 设置日期内联型初始年份。 |
| month | number | Yes | 设置日期内联型初始月份。 |
| day | number | Yes | 设置日期内联型初始日。 |

## toString

```TypeScript
toString(): string
```

以字符串格式返回当前日期值。格式为’YYYY-MM-DD'。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | 当前日期值。 |

## month

```TypeScript
month: number
```

设置日期内联型初始月份。 默认值：1 取值范围：[1, 12] 超出取值范围按默认值处理。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## year

```TypeScript
year: number
```

设置日期内联型初始年份。 默认值：1 取值范围：[1, 5000] 超出取值范围按默认值处理。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## day

```TypeScript
day: number
```

设置日期内联型初始日。 默认值：1 取值范围：[1, 31] 超出取值范围按默认值处理。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

