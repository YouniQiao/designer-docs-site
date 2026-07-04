# TimeZoneRules

```c
typedef struct TimeZoneRules {...} TimeZoneRules
```

## Overview

Defines a set of timezone rules of a timezone.

**Since**: 22

**Related module**: [i18n](capi-i18n.md)

**Header file**: [timezone.h](capi-timezone-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| [InitialTimeZoneRule](capi-i18n-initialtimezonerule.md) initial | Indicates the InitialTimeZoneRule of a timezone. |
| [TimeArrayTimeZoneRule*](capi-i18n-timearraytimezonerule.md) timeArrayRules | Indicates the TimeArrayTimeZoneRules of a timezone. The caller is responsible for releasing the array. |
| [AnnualTimeZoneRule*](capi-i18n-annualtimezonerule.md) annualRules | Indicates the AnnualTimeZoneRules of a timezone. The caller is responsible for releasing the array. |
| size_t numTimeArrayRules | Indicates the num of TimeArrayTimeZoneRules. |
| size_t numAnnualRules | Indicates the num of AnnualTimeZoneRules. |


