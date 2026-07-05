# ChineseCalendarTime

Represents chinese calendar time element for the ChineseCalendar object.

**Since:** 26.0.0

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## date

```TypeScript
date: int
```

Date of the chinese calendar time.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

## isLeapMonth

```TypeScript
isLeapMonth?: boolean
```

Determines whether the input month is a leap month.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

## hour

```TypeScript
hour?: int
```

Hour of the chinese calendar time.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

## month

```TypeScript
month: int
```

Month of the chinese calendar time. Note: The month starts from 0. For example, 0 indicates January.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

## cyclicalYear

```TypeScript
cyclicalYear: int
```

The cyclical year of date. If you need to convert between the chinese calendar and the Gregorian calendar, the year range must be set from 1 to 60. The value range is all integers.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

## gregorianYear

```TypeScript
gregorianYear: int
```

The gregorian year of date. If you need to convert between the chinese calendar and the Gregorian calendar, the year range must be set from 1900 to 2100.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

## second

```TypeScript
second?: int
```

Second of the chinese calendar time.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

## minute

```TypeScript
minute?: int
```

Minute of the chinese calendar time.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

