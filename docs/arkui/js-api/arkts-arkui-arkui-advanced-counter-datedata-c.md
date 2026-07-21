# DateData

Defines the date data.

**Since:** 11

<!--Device-unnamed-declare class DateData--><!--Device-unnamed-declare class DateData-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CounterType, DateData, CounterComponent, CounterOptions } from '@kit.ArkUI';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(year: number, month: number, day: number)
```

Constructor of the DateData.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DateData-constructor(year: number, month: number, day: number)--><!--Device-DateData-constructor(year: number, month: number, day: number)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| year | number | Yes | set the year of the DateData. |
| month | number | Yes | set the month of the DateData. |
| day | number | Yes | set the day of the DateData. |

<a id="tostring"></a>
## toString

```TypeScript
toString(): string
```

Convert the date data to string.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DateData-toString(): string--><!--Device-DateData-toString(): string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | date data in string form. |

## day

```TypeScript
day: number
```

The day of the DateData.

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DateData-day: number--><!--Device-DateData-day: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## month

```TypeScript
month: number
```

The month of the DateData.

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DateData-month: number--><!--Device-DateData-month: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## year

```TypeScript
year: number
```

The year of the DateData, ranges from 1 to 5000.

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-DateData-year: number--><!--Device-DateData-year: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

