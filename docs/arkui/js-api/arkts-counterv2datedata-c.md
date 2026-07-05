# CounterV2DateData

CounterV2DateData定义了日期通用属性和方法，包括年、月、日。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CounterV2Component,CounterV2Options,CounterV2Type,CounterV2DateData } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(year: int, month: int, day: int)
```

CounterV2DateData的构造函数用于初始化日期对象。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| year | int | Yes | 设置日期内联型初始年份。 取值范围：[1, 5000] 超出取值范围按默认值处理。 |
| month | int | Yes | 设置日期内联型初始月份。 取值范围：[1, 12] 超出取值范围按默认值处理。 |
| day | int | Yes | 设置日期内联型初始日。 取值范围：[1, 31] 必须为合法日期，如month为2月时，day传入30将视为异常值，按默认值处理。 |

## toString

```TypeScript
toString(): string
```

以字符串格式返回当前日期值。格式为'YYYY-MM-DD'。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | 当前日期值。 |

## month

```TypeScript
month: int
```

设置日期内联型初始月份。 默认值：1 取值范围：[1, 12] 超出取值范围按默认值处理。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## year

```TypeScript
year: int
```

设置日期内联型初始年份。 默认值：1 取值范围：[1, 5000] 超出取值范围按默认值处理。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## day

```TypeScript
day: int
```

设置日期内联型初始日。 默认值：1 取值范围：[1, 31] 必须为合法日期，如month为2月时，day传入30将视为异常值，按默认值处理。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

