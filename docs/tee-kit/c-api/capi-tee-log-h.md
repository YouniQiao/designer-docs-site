# tee_log.h

## Overview

Provides TEE log APIs.Reference of TEE log APIs and internal definitions.

**Library**: NA

**System capability**: SystemCapability.Tee.TeeClient

**Since**: 20

**Related module**: [TeeTrusted](capi-teetrusted.md)

## Summary

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [LOG_LEVEL](#log_level) | LOG_LEVEL | Enumerates the levels of the log. |

### Macro

| Name | Description |
| -- | -- |
| TA_LOG_LEVEL_ERROR   0 | Defines the ERROR level of the TA log.<br>**Since**: 20 |
| TA_LOG_LEVEL_WARNING 1 | Defines the WARNING level of the TA log.<br>**Since**: 20 |
| TA_LOG_LEVEL_INFO    2 | Defines the INFO level of the TA log.<br>**Since**: 20 |
| TA_LOG_LEVEL_DEBUG   3 | Defines the DEBUG level of the TA log.<br>**Since**: 20 |
| TA_LOG_LEVEL_VERBO   4 | Defines the VERBO level of the TA log.<br>**Since**: 20 |
| TA_LOG_LEVEL_DEFAULT  TA_LOG_LEVEL_INFO | Defines the default level of the TA log.<br>**Since**: 20 |
| TA_LOG_LEVEL TA_LOG_LEVEL_DEFAULT | Defines the default level of the TA log.{@code TA_LOG_LEVEL} can be redefined by TA developers<br>**Since**: 20 |
| TAG_VERB  "[verb]" | Defines the tag of the VERBO level TA log.<br>**Since**: 20 |
| TAG_DEBUG "[debug]" | Defines the tag of the DEBUG level TA log.<br>**Since**: 20 |
| TAG_INFO  "[info]" | Defines the tag of the INFO level TA log.<br>**Since**: 20 |
| TAG_WARN  "[warn]" | Defines the tag of the WARNING level TA log.<br>**Since**: 20 |
| TAG_ERROR "[error]" | Defines the tag of the ERROR level TA log.<br>**Since**: 20 |

### Function

| Name | Description |
| -- | -- |
| [void uart_cprintf(const char *fmt, ...)](#uart_cprintf) | Provides to print UART logs. |
| [void uart_printf_func(const char *fmt, ...)](#uart_printf_func) | Provides to print UART logs. |
| [void tee_print(LOG_LEVEL log_level, const char *fmt, ...)](#tee_print) | Provides to print TEE logs. |
| [void tee_print_driver(LOG_LEVEL log_level, const char *log_tag, const char *fmt, ...)](#tee_print_driver) | Provides to print TEE driver logs. |
| [extern const char *g_debug_prefix

#if (TA_LOG_LEVEL >= TA_LOG_LEVEL_VERBO)](#) | Defines the debug prefix string. |
| [tlogv(fmt, args...) \tee_print_driver(LOG_LEVEL_VERBO, DRIVER_LOG_TAG, "%s %d:" fmt "", TAG_VERB, __LINE__, ##args)
#else](#tlogv) | Defines the API to print TEE log at the VERBO level. |
| [tlogv(fmt, args...) tee_print(LOG_LEVEL_VERBO, "%s %d:" fmt "", TAG_VERB, __LINE__, ##args)](#tlogv) | Defines the API to print TEE log at the VERBO level. |
| [ tlogv(fmt, args...)](#tlogv) | Defines the API to print TEE log at the VERBO level. |
| [tlogd(fmt, args...) \tee_print_driver(LOG_LEVEL_DEBUG, DRIVER_LOG_TAG, "%s %d:" fmt "", TAG_DEBUG, __LINE__, ##args)
#else](#tlogd) | Defines the API to print TEE log at the DEBUG level. |
| [tlogd(fmt, args...) tee_print(LOG_LEVEL_DEBUG, "%s %d:" fmt "", TAG_DEBUG, __LINE__, ##args)](#tlogd) | Defines the API to print TEE log at the DEBUG level. |
| [ tlogd(fmt, args...)](#tlogd) | Defines the API to print TEE log at the DEBUG level. |
| [tlogi(fmt, args...) \tee_print_driver(LOG_LEVEL_INFO, DRIVER_LOG_TAG, "%s %d:" fmt "", TAG_INFO, __LINE__, ##args)
#else](#tlogi) | Defines the API to print TEE log at the INFO level. |
| [tlogi(fmt, args...) tee_print(LOG_LEVEL_INFO, "%s %d:" fmt "", TAG_INFO, __LINE__, ##args)](#tlogi) | Defines the API to print TEE log at the INFO level. |
| [ tlogi(fmt, args...)](#tlogi) | Defines the API to print TEE log at the INFO level. |
| [tlogw(fmt, args...) \tee_print_driver(LOG_LEVEL_WARN, DRIVER_LOG_TAG, "%s %d:" fmt "", TAG_WARN, __LINE__, ##args)
#else](#tlogw) | Defines the API to print TEE log at the WARNING level. |
| [tlogw(fmt, args...) tee_print(LOG_LEVEL_WARN, "%s %d:" fmt "", TAG_WARN, __LINE__, ##args)](#tlogw) | Defines the API to print TEE log at the WARNING level. |
| [ tlogw(fmt, args...)](#tlogw) | Defines the API to print TEE log at the WARNING level. |
| [tloge(fmt, args...) \tee_print_driver(LOG_LEVEL_ERROR, DRIVER_LOG_TAG, "%s %d:" fmt " ", TAG_ERROR, __LINE__, ##args)
#else](#tloge) | Defines the API to print TEE log at the ERROR level. |
| [tloge(fmt, args...) tee_print(LOG_LEVEL_ERROR, "%s %d:" fmt " ", TAG_ERROR, __LINE__, ##args)](#tloge) | Defines the API to print TEE log at the ERROR level. |
| [tloge(fmt, args...) printf("[%s] %s %d:" fmt " ", g_debug_prefix, TAG_ERROR, __LINE__, ##args)](#tloge) | Defines the API to print TEE log at the ERROR level. |
| [ tloge(fmt, args...)](#tloge) | Defines the API to print TEE log at the ERROR level. |

### Variable

| Name | Description |
| -- | -- |
| const char * g_debug_prefix | Defines the debug prefix string.<br>**Since**: 20 |

## Enum type description

### LOG_LEVEL

```c
enum LOG_LEVEL
```

**Description**

Enumerates the levels of the log.

**Since**: 20

| Enum item | Description |
| -- | -- |
| LOG_LEVEL_ERROR = 0 | Error level log. |
| LOG_LEVEL_WARN  = 1 | Warning level log. |
| LOG_LEVEL_INFO  = 2 | Information level log. |
| LOG_LEVEL_DEBUG = 3 | Debug level log. |
| LOG_LEVEL_VERBO = 4 | Verbose level log. |
| LOG_LEVEL_ON    = 5 | On level log. |


## Function description

### uart_cprintf()

```c
void uart_cprintf(const char *fmt, ...)
```

**Description**

Provides to print UART logs.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char *fmt | [IN] The log information. |

### uart_printf_func()

```c
void uart_printf_func(const char *fmt, ...)
```

**Description**

Provides to print UART logs.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char *fmt | [IN] The log information. |

### tee_print()

```c
void tee_print(LOG_LEVEL log_level, const char *fmt, ...)
```

**Description**

Provides to print TEE logs.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [LOG_LEVEL](capi-tee-log-h.md#log_level) log_level | [IN] The level of the log. |
| const char *fmt | [IN] The log information. |

### tee_print_driver()

```c
void tee_print_driver(LOG_LEVEL log_level, const char *log_tag, const char *fmt, ...)
```

**Description**

Provides to print TEE driver logs.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [LOG_LEVEL](capi-tee-log-h.md#log_level) log_level | [IN] The level of the log. |
| const char *log_tag | [IN] The tag of the log. |
| const char *fmt | [IN] The log information. |

### ()

```c
extern const char *g_debug_prefix

#if (TA_LOG_LEVEL >= TA_LOG_LEVEL_VERBO)
```

**Description**

Defines the debug prefix string.

**Since**: 20

### tlogv()

```c
tlogv(fmt, args...) \tee_print_driver(LOG_LEVEL_VERBO, DRIVER_LOG_TAG, "%s %d:" fmt "", TAG_VERB, __LINE__, ##args)
#else
```

**Description**

Defines the API to print TEE log at the VERBO level.

**Since**: 20

### tlogv()

```c
tlogv(fmt, args...) tee_print(LOG_LEVEL_VERBO, "%s %d:" fmt "", TAG_VERB, __LINE__, ##args)
```

**Description**

Defines the API to print TEE log at the VERBO level.

**Since**: 20

### tlogv()

```c
tlogv(fmt, args...) \do {                    \} while (0)
```

**Description**

Defines the API to print TEE log at the VERBO level.

**Since**: 20

### tlogd()

```c
tlogd(fmt, args...) \tee_print_driver(LOG_LEVEL_DEBUG, DRIVER_LOG_TAG, "%s %d:" fmt "", TAG_DEBUG, __LINE__, ##args)
#else
```

**Description**

Defines the API to print TEE log at the DEBUG level.

**Since**: 20

### tlogd()

```c
tlogd(fmt, args...) tee_print(LOG_LEVEL_DEBUG, "%s %d:" fmt "", TAG_DEBUG, __LINE__, ##args)
```

**Description**

Defines the API to print TEE log at the DEBUG level.

**Since**: 20

### tlogd()

```c
tlogd(fmt, args...) \do {                    \} while (0)
```

**Description**

Defines the API to print TEE log at the DEBUG level.

**Since**: 20

### tlogi()

```c
tlogi(fmt, args...) \tee_print_driver(LOG_LEVEL_INFO, DRIVER_LOG_TAG, "%s %d:" fmt "", TAG_INFO, __LINE__, ##args)
#else
```

**Description**

Defines the API to print TEE log at the INFO level.

**Since**: 20

### tlogi()

```c
tlogi(fmt, args...) tee_print(LOG_LEVEL_INFO, "%s %d:" fmt "", TAG_INFO, __LINE__, ##args)
```

**Description**

Defines the API to print TEE log at the INFO level.

**Since**: 20

### tlogi()

```c
tlogi(fmt, args...) \do {                    \} while (0)
```

**Description**

Defines the API to print TEE log at the INFO level.

**Since**: 20

### tlogw()

```c
tlogw(fmt, args...) \tee_print_driver(LOG_LEVEL_WARN, DRIVER_LOG_TAG, "%s %d:" fmt "", TAG_WARN, __LINE__, ##args)
#else
```

**Description**

Defines the API to print TEE log at the WARNING level.

**Since**: 20

### tlogw()

```c
tlogw(fmt, args...) tee_print(LOG_LEVEL_WARN, "%s %d:" fmt "", TAG_WARN, __LINE__, ##args)
```

**Description**

Defines the API to print TEE log at the WARNING level.

**Since**: 20

### tlogw()

```c
tlogw(fmt, args...) \do {                    \} while (0)
```

**Description**

Defines the API to print TEE log at the WARNING level.

**Since**: 20

### tloge()

```c
tloge(fmt, args...) \tee_print_driver(LOG_LEVEL_ERROR, DRIVER_LOG_TAG, "%s %d:" fmt " ", TAG_ERROR, __LINE__, ##args)
#else
```

**Description**

Defines the API to print TEE log at the ERROR level.

**Since**: 20

### tloge()

```c
tloge(fmt, args...) tee_print(LOG_LEVEL_ERROR, "%s %d:" fmt " ", TAG_ERROR, __LINE__, ##args)
```

**Description**

Defines the API to print TEE log at the ERROR level.

**Since**: 20

### tloge()

```c
tloge(fmt, args...) printf("[%s] %s %d:" fmt " ", g_debug_prefix, TAG_ERROR, __LINE__, ##args)
```

**Description**

Defines the API to print TEE log at the ERROR level.

**Since**: 20

### tloge()

```c
tloge(fmt, args...) \do {                    \} while (0)
```

**Description**

Defines the API to print TEE log at the ERROR level.

**Since**: 20


