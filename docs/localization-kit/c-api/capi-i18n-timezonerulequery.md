# TimeZoneRuleQuery

```c
typedef struct TimeZoneRuleQuery {...} TimeZoneRuleQuery
```

## Overview

Defines the query information and query result.

**Since**: 22

**Related module**: [i18n](capi-i18n.md)

**Header file**: [timezone.h](capi-timezone-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| double base | Indicates the base time in a next start or previous start time query. |
| int32_t prevRawOffset | Indicates the previous raw offset. |
| int32_t prevDSTSavings | Indicates the previous dstSavings offset. |
| bool inclusive | Indicates whether the base time is inclusive. |
| double result | Indicates the query result. |


