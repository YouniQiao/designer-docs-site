# timezone.h

## Overview

Provides the API for obtaining timezone offset transition information.

**Library**: libohi18n.so

**System capability**: SystemCapability.Global.I18n

**Since**: 22

**Related module**: [i18n](capi-i18n.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [DateTimeRule](capi-i18n-datetimerule.md) | DateTimeRule | Defines the date and time rules to specify a date and time. |
| [InitialTimeZoneRule](capi-i18n-initialtimezonerule.md) | InitialTimeZoneRule | Defines the initial rule of a timezone which has no clear start time. |
| [TimeArrayTimeZoneRule](capi-i18n-timearraytimezonerule.md) | TimeArrayTimeZoneRule | Defines a set of timezone rules by the rule effective time array. |
| [AnnualTimeZoneRule](capi-i18n-annualtimezonerule.md) | AnnualTimeZoneRule | Defines a set of timezone rules by specifying the start year when the rules come into effect and end. |
| [TimeZoneRules](capi-i18n-timezonerules.md) | TimeZoneRules | Defines a set of timezone rules of a timezone. |
| [TimeZoneRuleQuery](capi-i18n-timezonerulequery.md) | TimeZoneRuleQuery | Defines the query information and query result. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [DateRuleType](#dateruletype) | DateRuleType | Enumerates the types of rules for defining dates. |
| [TimeRuleType](#timeruletype) | TimeRuleType | Enumerates the types of rules for defining time. |

### Macro

| Name | Description |
| -- | -- |
| MAX_YEAR_IN_ANNUAL_TIMEZONE_RULE 0x7fffffff | Indicates the maximum year when the rule takes effective in AnnualTimeZoneRule.<br>**Since**: 22 |

### Function

| Name | Description |
| -- | -- |
| [I18n_ErrorCode OH_i18n_GetTimeZoneRules(const char* timeZoneID, TimeZoneRules* rules)](#oh_i18n_gettimezonerules) | Obtains the timezone rules by timezone ID. |
| [I18n_ErrorCode OH_i18n_GetFirstStartFromTimeArrayTimeZoneRule(TimeArrayTimeZoneRule* rule, TimeZoneRuleQuery* query)](#oh_i18n_getfirststartfromtimearraytimezonerule) | Obtains the time when the TimeArrayTimeZoneRule first took effect. |
| [I18n_ErrorCode OH_i18n_GetFirstStartFromAnnualTimeZoneRule(AnnualTimeZoneRule* rule, TimeZoneRuleQuery* query)](#oh_i18n_getfirststartfromannualtimezonerule) | Obtains the time when the AnnualTimeZoneRule first took effect. |
| [I18n_ErrorCode OH_i18n_GetFinalStartFromTimeArrayTimeZoneRule(TimeArrayTimeZoneRule* rule, TimeZoneRuleQuery* query)](#oh_i18n_getfinalstartfromtimearraytimezonerule) | Obtains the time when the TimeArrayTimeZoneRule final took effect. |
| [I18n_ErrorCode OH_i18n_GetFinalStartFromAnnualTimeZoneRule(AnnualTimeZoneRule* rule, TimeZoneRuleQuery* query)](#oh_i18n_getfinalstartfromannualtimezonerule) | Obtains the time when the AnnualTimeZoneRule final took effect. |
| [I18n_ErrorCode OH_i18n_GetNextStartFromTimeArrayTimeZoneRule(TimeArrayTimeZoneRule* rule, TimeZoneRuleQuery* query)](#oh_i18n_getnextstartfromtimearraytimezonerule) | Obtains the time when the TimeArrayTimeZoneRule next took effect. |
| [I18n_ErrorCode OH_i18n_GetNextStartFromAnnualTimeZoneRule(AnnualTimeZoneRule* rule, TimeZoneRuleQuery* query)](#oh_i18n_getnextstartfromannualtimezonerule) | Obtains the time when the AnnualTimeZoneRule next took effect. |
| [I18n_ErrorCode OH_i18n_GetPrevStartFromTimeArrayTimeZoneRule(TimeArrayTimeZoneRule* rule, TimeZoneRuleQuery* query)](#oh_i18n_getprevstartfromtimearraytimezonerule) | Obtains the time when the TimeArrayTimeZoneRule previous took effect. |
| [I18n_ErrorCode OH_i18n_GetPrevStartFromAnnualTimeZoneRule(AnnualTimeZoneRule* rule, TimeZoneRuleQuery* query)](#oh_i18n_getprevstartfromannualtimezonerule) | Obtains the time when the AnnualTimeZoneRule previous took effect. |
| [I18n_ErrorCode OH_i18n_GetStartTimeAt(TimeArrayTimeZoneRule* rule, int32_t index, double* result)](#oh_i18n_getstarttimeat) | Obtain the effective start time of a specific rule in the TimeArrayTimeZoneRule. |
| [I18n_ErrorCode OH_i18n_GetStartInYear(AnnualTimeZoneRule* rule, int32_t year, TimeZoneRuleQuery* query)](#oh_i18n_getstartinyear) | Obtain the effective start time of a specific rule for target year in the AnnualTimeZoneRule. |

## Enum type description

### DateRuleType

```c
enum DateRuleType
```

**Description**

Enumerates the types of rules for defining dates.

**Since**: 22

| Enum item | Description |
| -- | -- |
| DOM = 0 | Indicates that a day is specified by day_of_month. |
| DOW = 1 | Indicates that a day is specified by day_of_week. |
| DOW_GEQ_DOM = 2 | Indicates that a day is specified by day_of_week on or after day_of_month. |
| DOW_LEQ_DOM = 3 | Indicates that a day is specified by day_of_week on or before day_of_month. |

### TimeRuleType

```c
enum TimeRuleType
```

**Description**

Enumerates the types of rules for defining time.

**Since**: 22

| Enum item | Description |
| -- | -- |
| WALL_TIME = 0 | Indicates that time is specified by wall time. |
| STANDARD_TIME = 1 | Indicates that time is specified by standard time. |
| UTC_TIME = 2 | Indicates that time is specified by UTC time. |


## Function description

### OH_i18n_GetTimeZoneRules()

```c
I18n_ErrorCode OH_i18n_GetTimeZoneRules(const char* timeZoneID, TimeZoneRules* rules)
```

**Description**

Obtains the timezone rules by timezone ID.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* timeZoneID | Indicates the timezone ID, such as "Asia/Shanghai". |
| [TimeZoneRules](capi-i18n-timezonerules.md)* rules | Indicates the TimeZoneRules[TimeZoneRules](capi-i18n-timezonerules.md) of timezoneID. |

**Returns**:

| Type | Description |
| -- | -- |
| [I18n_ErrorCode](capi-errorcode-h.md#i18n_errorcode) | [SUCCESS](capi-errorcode-h.md#i18n_errorcode) 0 - Success.<br>         [ERROR_INVALID_PARAMETER](capi-errorcode-h.md#i18n_errorcode) 8900001 - Invalid parameter. Possible causes: Parameter verification failed.<br>         [UNEXPECTED_ERROR](capi-errorcode-h.md#i18n_errorcode) 8900050 - Unexpected error, such as memory error. |

### OH_i18n_GetFirstStartFromTimeArrayTimeZoneRule()

```c
I18n_ErrorCode OH_i18n_GetFirstStartFromTimeArrayTimeZoneRule(TimeArrayTimeZoneRule* rule, TimeZoneRuleQuery* query)
```

**Description**

Obtains the time when the TimeArrayTimeZoneRule first took effect.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [TimeArrayTimeZoneRule](capi-i18n-timearraytimezonerule.md)* rule | Indicates the rule defined by TimeArrayTimeZoneRule[TimeArrayTimeZoneRule](capi-i18n-timearraytimezonerule.md). |
| [TimeZoneRuleQuery](capi-i18n-timezonerulequery.md)* query | Indicates the query information and query result. |

**Returns**:

| Type | Description |
| -- | -- |
| [I18n_ErrorCode](capi-errorcode-h.md#i18n_errorcode) | [SUCCESS](capi-errorcode-h.md#i18n_errorcode) 0 - Success.<br>         [ERROR_INVALID_PARAMETER](capi-errorcode-h.md#i18n_errorcode) 8900001 - Invalid parameter. Possible causes:<br>     Parameter verification failed.<br>         [UNEXPECTED_ERROR](capi-errorcode-h.md#i18n_errorcode) 8900050 - Unexpected error, such as memory error. |

### OH_i18n_GetFirstStartFromAnnualTimeZoneRule()

```c
I18n_ErrorCode OH_i18n_GetFirstStartFromAnnualTimeZoneRule(AnnualTimeZoneRule* rule, TimeZoneRuleQuery* query)
```

**Description**

Obtains the time when the AnnualTimeZoneRule first took effect.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [AnnualTimeZoneRule](capi-i18n-annualtimezonerule.md)* rule | Indicates the rule defined by AnnualTimeZoneRule[AnnualTimeZoneRule](capi-i18n-annualtimezonerule.md). |
| [TimeZoneRuleQuery](capi-i18n-timezonerulequery.md)* query | Indicates the query information and query result. |

**Returns**:

| Type | Description |
| -- | -- |
| [I18n_ErrorCode](capi-errorcode-h.md#i18n_errorcode) | [SUCCESS](capi-errorcode-h.md#i18n_errorcode) 0 - Success.<br>         [ERROR_INVALID_PARAMETER](capi-errorcode-h.md#i18n_errorcode) 8900001 - Invalid parameter. Possible causes:<br>     Parameter verification failed.<br>         [UNEXPECTED_ERROR](capi-errorcode-h.md#i18n_errorcode) 8900050 - Unexpected error, such as memory error. |

### OH_i18n_GetFinalStartFromTimeArrayTimeZoneRule()

```c
I18n_ErrorCode OH_i18n_GetFinalStartFromTimeArrayTimeZoneRule(TimeArrayTimeZoneRule* rule, TimeZoneRuleQuery* query)
```

**Description**

Obtains the time when the TimeArrayTimeZoneRule final took effect.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [TimeArrayTimeZoneRule](capi-i18n-timearraytimezonerule.md)* rule | Indicates the rule defined by TimeArrayTimeZoneRule[TimeArrayTimeZoneRule](capi-i18n-timearraytimezonerule.md). |
| [TimeZoneRuleQuery](capi-i18n-timezonerulequery.md)* query | Indicates the query information and query result. |

**Returns**:

| Type | Description |
| -- | -- |
| [I18n_ErrorCode](capi-errorcode-h.md#i18n_errorcode) | [SUCCESS](capi-errorcode-h.md#i18n_errorcode) 0 - Success.<br>         [ERROR_INVALID_PARAMETER](capi-errorcode-h.md#i18n_errorcode) 8900001 - Invalid parameter. Possible causes:<br>     Parameter verification failed.<br>         [UNEXPECTED_ERROR](capi-errorcode-h.md#i18n_errorcode) 8900050 - Unexpected error, such as memory error. |

### OH_i18n_GetFinalStartFromAnnualTimeZoneRule()

```c
I18n_ErrorCode OH_i18n_GetFinalStartFromAnnualTimeZoneRule(AnnualTimeZoneRule* rule, TimeZoneRuleQuery* query)
```

**Description**

Obtains the time when the AnnualTimeZoneRule final took effect.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [AnnualTimeZoneRule](capi-i18n-annualtimezonerule.md)* rule | Indicates the rule defined by AnnualTimeZoneRule[AnnualTimeZoneRule](capi-i18n-annualtimezonerule.md). |
| [TimeZoneRuleQuery](capi-i18n-timezonerulequery.md)* query | Indicates the query information and query result. |

**Returns**:

| Type | Description |
| -- | -- |
| [I18n_ErrorCode](capi-errorcode-h.md#i18n_errorcode) | [SUCCESS](capi-errorcode-h.md#i18n_errorcode) 0 - Success.<br>         [ERROR_INVALID_PARAMETER](capi-errorcode-h.md#i18n_errorcode) 8900001 - Invalid parameter. Possible causes:<br>     Parameter verification failed.<br>         [UNEXPECTED_ERROR](capi-errorcode-h.md#i18n_errorcode) 8900050 - Unexpected error, such as memory error. |

### OH_i18n_GetNextStartFromTimeArrayTimeZoneRule()

```c
I18n_ErrorCode OH_i18n_GetNextStartFromTimeArrayTimeZoneRule(TimeArrayTimeZoneRule* rule, TimeZoneRuleQuery* query)
```

**Description**

Obtains the time when the TimeArrayTimeZoneRule next took effect.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [TimeArrayTimeZoneRule](capi-i18n-timearraytimezonerule.md)* rule | Indicates the rule defined by TimeArrayTimeZoneRule[TimeArrayTimeZoneRule](capi-i18n-timearraytimezonerule.md). |
| [TimeZoneRuleQuery](capi-i18n-timezonerulequery.md)* query | Indicates the query information and query result. |

**Returns**:

| Type | Description |
| -- | -- |
| [I18n_ErrorCode](capi-errorcode-h.md#i18n_errorcode) | [SUCCESS](capi-errorcode-h.md#i18n_errorcode) 0 - Success.<br>         [ERROR_INVALID_PARAMETER](capi-errorcode-h.md#i18n_errorcode) 8900001 - Invalid parameter. Possible causes:<br>     Parameter verification failed.<br>         [UNEXPECTED_ERROR](capi-errorcode-h.md#i18n_errorcode) 8900050 - Unexpected error, such as memory error. |

### OH_i18n_GetNextStartFromAnnualTimeZoneRule()

```c
I18n_ErrorCode OH_i18n_GetNextStartFromAnnualTimeZoneRule(AnnualTimeZoneRule* rule, TimeZoneRuleQuery* query)
```

**Description**

Obtains the time when the AnnualTimeZoneRule next took effect.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [AnnualTimeZoneRule](capi-i18n-annualtimezonerule.md)* rule | Indicates the rule defined by AnnualTimeZoneRule[AnnualTimeZoneRule](capi-i18n-annualtimezonerule.md). |
| [TimeZoneRuleQuery](capi-i18n-timezonerulequery.md)* query | Indicates the query information and query result. |

**Returns**:

| Type | Description |
| -- | -- |
| [I18n_ErrorCode](capi-errorcode-h.md#i18n_errorcode) | [SUCCESS](capi-errorcode-h.md#i18n_errorcode) 0 - Success.<br>         [ERROR_INVALID_PARAMETER](capi-errorcode-h.md#i18n_errorcode) 8900001 - Invalid parameter. Possible causes:<br>     Parameter verification failed.<br>         [UNEXPECTED_ERROR](capi-errorcode-h.md#i18n_errorcode) 8900050 - Unexpected error, such as memory error. |

### OH_i18n_GetPrevStartFromTimeArrayTimeZoneRule()

```c
I18n_ErrorCode OH_i18n_GetPrevStartFromTimeArrayTimeZoneRule(TimeArrayTimeZoneRule* rule, TimeZoneRuleQuery* query)
```

**Description**

Obtains the time when the TimeArrayTimeZoneRule previous took effect.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [TimeArrayTimeZoneRule](capi-i18n-timearraytimezonerule.md)* rule | Indicates the rule defined by TimeArrayTimeZoneRule[TimeArrayTimeZoneRule](capi-i18n-timearraytimezonerule.md). |
| [TimeZoneRuleQuery](capi-i18n-timezonerulequery.md)* query | Indicates the query information and query result. |

**Returns**:

| Type | Description |
| -- | -- |
| [I18n_ErrorCode](capi-errorcode-h.md#i18n_errorcode) | [SUCCESS](capi-errorcode-h.md#i18n_errorcode) 0 - Success.<br>         [ERROR_INVALID_PARAMETER](capi-errorcode-h.md#i18n_errorcode) 8900001 - Invalid parameter. Possible causes:<br>     Parameter verification failed.<br>         [UNEXPECTED_ERROR](capi-errorcode-h.md#i18n_errorcode) 8900050 - Unexpected error, such as memory error. |

### OH_i18n_GetPrevStartFromAnnualTimeZoneRule()

```c
I18n_ErrorCode OH_i18n_GetPrevStartFromAnnualTimeZoneRule(AnnualTimeZoneRule* rule, TimeZoneRuleQuery* query)
```

**Description**

Obtains the time when the AnnualTimeZoneRule previous took effect.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [AnnualTimeZoneRule](capi-i18n-annualtimezonerule.md)* rule | Indicates the rule defined by AnnualTimeZoneRule[AnnualTimeZoneRule](capi-i18n-annualtimezonerule.md). |
| [TimeZoneRuleQuery](capi-i18n-timezonerulequery.md)* query | Indicates the query information and query result. |

**Returns**:

| Type | Description |
| -- | -- |
| [I18n_ErrorCode](capi-errorcode-h.md#i18n_errorcode) | [SUCCESS](capi-errorcode-h.md#i18n_errorcode) 0 - Success.<br>         [ERROR_INVALID_PARAMETER](capi-errorcode-h.md#i18n_errorcode) 8900001 - Invalid parameter. Possible causes:<br>     Parameter verification failed.<br>         [UNEXPECTED_ERROR](capi-errorcode-h.md#i18n_errorcode) 8900050 - Unexpected error, such as memory error. |

### OH_i18n_GetStartTimeAt()

```c
I18n_ErrorCode OH_i18n_GetStartTimeAt(TimeArrayTimeZoneRule* rule, int32_t index, double* result)
```

**Description**

Obtain the effective start time of a specific rule in the TimeArrayTimeZoneRule.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [TimeArrayTimeZoneRule](capi-i18n-timearraytimezonerule.md)* rule | Indicates the rule defined by TimeArrayTimeZoneRule[TimeArrayTimeZoneRule](capi-i18n-timearraytimezonerule.md). |
| int32_t index | Indicates the rule index. |
| double* result | the start time of the rule. |

**Returns**:

| Type | Description |
| -- | -- |
| [I18n_ErrorCode](capi-errorcode-h.md#i18n_errorcode) | [SUCCESS](capi-errorcode-h.md#i18n_errorcode) 0 - Success.<br>         [ERROR_INVALID_PARAMETER](capi-errorcode-h.md#i18n_errorcode) 8900001 - Invalid parameter. Possible causes:<br>     Parameter verification failed.<br>         [UNEXPECTED_ERROR](capi-errorcode-h.md#i18n_errorcode) 8900050 - Unexpected error, such as memory error. |

### OH_i18n_GetStartInYear()

```c
I18n_ErrorCode OH_i18n_GetStartInYear(AnnualTimeZoneRule* rule, int32_t year, TimeZoneRuleQuery* query)
```

**Description**

Obtain the effective start time of a specific rule for target year in the AnnualTimeZoneRule.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [AnnualTimeZoneRule](capi-i18n-annualtimezonerule.md)* rule | Indicates the rule defined by AnnualTimeZoneRule[AnnualTimeZoneRule](capi-i18n-annualtimezonerule.md). |
| int32_t year | Indicates the year used to get the rule defined by AnnualTimeZoneRule. |
| [TimeZoneRuleQuery](capi-i18n-timezonerulequery.md)* query | Indicates the query information and result. |

**Returns**:

| Type | Description |
| -- | -- |
| [I18n_ErrorCode](capi-errorcode-h.md#i18n_errorcode) | [SUCCESS](capi-errorcode-h.md#i18n_errorcode) 0 - Success.<br>         [ERROR_INVALID_PARAMETER](capi-errorcode-h.md#i18n_errorcode) 8900001 - Invalid parameter. Possible causes:<br>     Parameter verification failed.<br>         [UNEXPECTED_ERROR](capi-errorcode-h.md#i18n_errorcode) 8900050 - Unexpected error, such as memory error. |


