# AnnualTimeZoneRule

```c
typedef struct AnnualTimeZoneRule {...} AnnualTimeZoneRule
```

## Overview

Defines a set of timezone rules by specifying the start year when the rules come into effect and end.

**Since**: 22

**Related module**: [i18n](capi-i18n.md)

**Header file**: [timezone.h](capi-timezone-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| char* name | Indicates the timezone name. |
| int32_t startYear | Indicates the start year when the rule takes effective. |
| int32_t endYear | Indicates the end year when the rule takes effective. |
| int32_t rawOffset | Indicates the raw offset of timezone. |
| int32_t dstSavings | Indicates the dstSavings offset of timezone. |
| [DateTimeRule](capi-i18n-datetimerule.md) dateTimeRule | Indicates DateTimeRule of the rule to specify the date and time. |


