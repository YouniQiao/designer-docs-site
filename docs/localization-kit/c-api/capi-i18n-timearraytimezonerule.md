# TimeArrayTimeZoneRule

```c
typedef struct TimeArrayTimeZoneRule {...} TimeArrayTimeZoneRule
```

## Overview

Defines a set of timezone rules by the rule effective time array.

**Since**: 22

**Related module**: [i18n](capi-i18n.md)

**Header file**: [timezone.h](capi-timezone-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| char* name | Indicates the timezone name. |
| int32_t rawOffset | Indicates the raw offset of timezone. |
| int32_t dstSavings | Indicates the dstSavings offset of timezone. |
| double* startTimes | Indicates the start times when the rule takes effect. The caller is responsible for releasing the array. |
| int32_t numStartTimes | Indicates the num of start times when the rule takes effect. |
| [TimeRuleType](capi-timezone-h.md#timeruletype) timeRuleType | Indicates the TimeRule of the rule to specify the time. |


