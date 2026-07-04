# log.h

## Overview

Defines the logging functions of the HiLog module.Before outputting logs, you must define the service domain, and log tag, use the function withthe specified log type and level, and specify the privacy identifier.<br> <ul><li>Service domain: used to identify the subsystem and module of a service. Its value is a hexadecimalinteger ranging from 0x0 to 0xFFFF. <br> <li>Log tag: a string used to identify the class, file, or service.</li> <br> <li>Log level: <b>DEBUG</b>, <b>INFO</b>, <b>WARN</b>, <b>ERROR</b>, and <b>FATAL</b></li> <br> <li>Parameter format: a printf format string that starts with a % character, including format specifiersand variable parameters.</li> <br> <li>Privacy identifier: {public} or {private} added between the % character and the format specifier ineach parameter. Note that each parameter has a privacy identifier. If no privacy identifier is added,the parameter is considered to be <b>private</b>.</li></ul> <br> Sample code:<br> Defining the service domain and log tag:<br>     #include <hilog/log.h><br>     #define LOG_DOMAIN 0x0201<br>     #define LOG_TAG "MY_TAG"<br> Outputting logs:<br>     HILOG_WARN([LOG_APP](capi-log-h.md#logtype), "Failed to visit %{private}s, reason:%{public}d.", url, errno);<br> Output result:<br>     05-06 15:01:06.870 1051 1051 W 0201/MY_TAG: Failed to visit <private>, reason:503.<br>

**Include**: <hilog/log.h>

**Library**: libhilog_ndk.z.so

**System capability**: SystemCapability.HiviewDFX.HiLog

**Since**: 8

**Related module**: [HiLog](capi-hilog.md)

## Summary

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [LogType](#logtype) | LogType | Enumerates log types.Currently, <b>LOG_APP</b> is available. <br> |
| [LogLevel](#loglevel) | LogLevel | Enumerates log levels.You are advised to select log levels based on their respective usage scenarios:<br> <ul><li><b>DEBUG</b>: used for debugging and disabled from commercial releases</li> <br> <li><b>INFO</b>: used for logging important system running status and steps in key processes</li> <br> <li><b>WARN</b>: used for logging unexpected exceptions that have little impact on user experience and canautomatically recover. Logs at this level are generally output when such exceptions are detected andcaptured.</li> <br> <li><b>ERROR</b>: used for logging malfunction that affects user experience and cannot automaticallyrecover</li><br> <li><b>FATAL</b>: used for logging major exceptions that have severely affected user experience and shouldnot occur.</li></ul> <br> |
| [PreferStrategy](#preferstrategy) | PreferStrategy | Enumerates preference strategy to be used in [OH_LOG_SetLogLevel](capi-log-h.md#oh_log_setloglevel).You are advised to select preference strategy based on their respective usage scenarios. |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [int OH_LOG_Print(LogType type, LogLevel level, unsigned int domain, const char *tag, const char *fmt, ...)](#oh_log_print) | - | Outputs logs.You can use this function to output logs based on the specified log type, log level, service domain, log tag,and variable parameters determined by the format specifier and privacy identifier in the printf format. |
| [int OH_LOG_PrintMsg(LogType type, LogLevel level, unsigned int domain, const char *tag, const char *message)](#oh_log_printmsg) | - | Outputs logs.You can use this function to output logs based on the specified log type, log level, service domain, log tag,and message text. |
| [int OH_LOG_PrintMsgByLen(LogType type, LogLevel level, unsigned int domain, const char *tag, size_t tagLen, const char *message, size_t messageLen)](#oh_log_printmsgbylen) | - | Outputs logs.You can use this function to output logs based on the specified log type, log level, service domain, log tag,message text and message length. |
| [int OH_LOG_VPrint(LogType type, LogLevel level, unsigned int domain, const char *tag, const char *fmt, va_list ap)](#oh_log_vprint) | - | Outputs logs.You can use this function to output logs based on the specified log type, log level, service domain, log tag,and a va_list instead of variable parameters determined by the format specifier and privacy identifier in the printfformat. |
| [bool OH_LOG_IsLoggable(unsigned int domain, const char *tag, LogLevel level)](#oh_log_isloggable) | - | Checks whether logs of the specified service domain, log tag, and log level can be output. |
| [OH_LOG_DEBUG(type, ...)((void)OH_LOG_Print((type), LOG_DEBUG, LOG_DOMAIN, LOG_TAG, __VA_ARGS__))](#oh_log_debug) | - | Outputs debug logs. This is a function-like macro.Before calling this function, define the log service domain and log tag. Generally, you need to define them atthe beginning of the source file. <br> |
| [OH_LOG_INFO(type, ...)((void)OH_LOG_Print((type), LOG_INFO, LOG_DOMAIN, LOG_TAG, __VA_ARGS__))](#oh_log_info) | - | Outputs informational logs. This is a function-like macro.Before calling this function, define the log service domain and log tag. Generally, you need to define themat the beginning of the source file. <br> |
| [OH_LOG_WARN(type, ...)((void)OH_LOG_Print((type), LOG_WARN, LOG_DOMAIN, LOG_TAG, __VA_ARGS__))](#oh_log_warn) | - | Outputs warning logs. This is a function-like macro.Before calling this function, define the log service domain and log tag. Generally, you need to define themat the beginning of the source file. <br> |
| [OH_LOG_ERROR(type, ...)((void)OH_LOG_Print((type), LOG_ERROR, LOG_DOMAIN, LOG_TAG, __VA_ARGS__))](#oh_log_error) | - | Outputs error logs. This is a function-like macro.Before calling this function, define the log service domain and log tag. Generally, you need to definethem at the beginning of the source file. <br> |
| [OH_LOG_FATAL(type, ...)((void)OH_LOG_Print((type), LOG_FATAL, LOG_DOMAIN, LOG_TAG, __VA_ARGS__))](#oh_log_fatal) | - | Outputs fatal logs. This is a function-like macro.Before calling this function, define the log service domain and log tag. Generally, you need to define them atthe beginning of the source file. <br> |
| [typedef void (\*LogCallback)(const LogType type, const LogLevel level, const unsigned int domain, const char *tag, const char *msg)](#logcallback) | LogCallback | Defines the function pointer type for the user-defined log processing function. |
| [void OH_LOG_SetCallback(LogCallback callback)](#oh_log_setcallback) | - | Set the user-defined log processing function.After calling this function, the callback function implemented by the user can receive all hilogs of thecurrent process.Note that it will not change the default behavior of hilog logs of the current process, no matter whether thisinterface is called or not. <br> |
| [void OH_LOG_SetMinLogLevel(LogLevel level)](#oh_log_setminloglevel) | - | Sets the lowest log level of the current application process. |
| [void OH_LOG_SetLogLevel(LogLevel level, PreferStrategy prefer)](#oh_log_setloglevel) | - | Sets the lowest log level of the current application process. Different preference strategy can be set. |

## Enum type description

### LogType

```c
enum LogType
```

**Description**

Enumerates log types.Currently, <b>LOG_APP</b> is available. <br>

**Since**: 8

| Enum item | Description |
| -- | -- |
| LOG_APP = 0 | Third-party application logs |

### LogLevel

```c
enum LogLevel
```

**Description**

Enumerates log levels.You are advised to select log levels based on their respective usage scenarios:<br> <ul><li><b>DEBUG</b>: used for debugging and disabled from commercial releases</li> <br> <li><b>INFO</b>: used for logging important system running status and steps in key processes</li> <br> <li><b>WARN</b>: used for logging unexpected exceptions that have little impact on user experience and canautomatically recover. Logs at this level are generally output when such exceptions are detected andcaptured.</li> <br> <li><b>ERROR</b>: used for logging malfunction that affects user experience and cannot automaticallyrecover</li><br> <li><b>FATAL</b>: used for logging major exceptions that have severely affected user experience and shouldnot occur.</li></ul> <br>

**Since**: 8

| Enum item | Description |
| -- | -- |
| LOG_DEBUG = 3 | Debug level to be used by [OH_LOG_DEBUG](capi-log-h.md#oh_log_debug) |
| LOG_INFO = 4 | Informational level to be used by [OH_LOG_INFO](capi-log-h.md#oh_log_info) |
| LOG_WARN = 5 | Warning level to be used by [OH_LOG_WARN](capi-log-h.md#oh_log_warn) |
| LOG_ERROR = 6 | Error level to be used by [OH_LOG_ERROR](capi-log-h.md#oh_log_error) |
| LOG_FATAL = 7 | Fatal level to be used by [OH_LOG_FATAL](capi-log-h.md#oh_log_fatal) |

### PreferStrategy

```c
enum PreferStrategy
```

**Description**

Enumerates preference strategy to be used in [OH_LOG_SetLogLevel](capi-log-h.md#oh_log_setloglevel).You are advised to select preference strategy based on their respective usage scenarios.

**Since**: 21

| Enum item | Description |
| -- | -- |
| UNSET_LOGLEVEL = 0 | Used to unset SetLogLevel, then none is set |
| PREFER_CLOSE_LOG = 1 | The actual lowest log level is determined bythe maximum level between the new level and the system-controlled level.This is equivalent to calling OH_LOG_SetMinLogLevel. |
| PREFER_OPEN_LOG = 2 | The actual lowest log level is determined bythe minimum level between the new level and the system-controlled level. |


## Function description

### OH_LOG_Print()

```c
int OH_LOG_Print(LogType type, LogLevel level, unsigned int domain, const char *tag, const char *fmt, ...)
```

**Description**

Outputs logs.You can use this function to output logs based on the specified log type, log level, service domain, log tag,and variable parameters determined by the format specifier and privacy identifier in the printf format.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [LogType](capi-log-h.md#logtype) type | Indicates the log type. The type for third-party applications is defined by [LOG_APP](capi-log-h.md#logtype). |
| [LogLevel](capi-log-h.md#loglevel) level | Indicates the log level, which can be <b>LOG_DEBUG</b>, <b>LOG_INFO</b>, <b>LOG_WARN</b>,<b>LOG_ERROR</b>, and <b>LOG_FATAL</b>. |
| unsigned int domain | Indicates the service domain of logs. Its value is a hexadecimal integer ranging from 0x0 to 0xFFFF. |
| const char *tag | Indicates the log tag, which is a string used to identify the class, file, or service behavior. |
| const char *fmt | Indicates the format string, which is an enhancement of a printf format string and supports the privacyidentifier. Specifically, {public} or {private} is added between the % character and the format specifierin each parameter. |
| [](capi-log-h.md#).[](capi-log-h.md#).[](capi-log-h.md#).[](capi-log-h.md#) | Indicates a list of parameters. The number and type of parameters must map onto the format specifiersin the format string. |

**Returns**:

| Type | Description |
| -- | -- |
| int | Returns <b>0</b> or a larger value if the operation is successful; returns a value smaller<br> than <b>0</b> otherwise. |

### OH_LOG_PrintMsg()

```c
int OH_LOG_PrintMsg(LogType type, LogLevel level, unsigned int domain, const char *tag, const char *message)
```

**Description**

Outputs logs.You can use this function to output logs based on the specified log type, log level, service domain, log tag,and message text.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [LogType](capi-log-h.md#logtype) type | Indicates the log type. The type for third-party applications is defined by [LOG_APP](capi-log-h.md#logtype). |
| [LogLevel](capi-log-h.md#loglevel) level | Indicates the log level, which can be <b>LOG_DEBUG</b>, <b>LOG_INFO</b>, <b>LOG_WARN</b>,<b>LOG_ERROR</b>, and <b>LOG_FATAL</b>. |
| unsigned int domain | Indicates the service domain of logs. Its value is a hexadecimal integer ranging from 0x0 to 0xFFFF. |
| const char *tag | Indicates the log tag, which is a string used to identify the class, file, or service behavior. |
| const char *message | Indicates the log string. |

**Returns**:

| Type | Description |
| -- | -- |
| int | Returns <b>0</b> or a larger value if the operation is successful; returns a value smaller<br> than <b>0</b> otherwise. |

### OH_LOG_PrintMsgByLen()

```c
int OH_LOG_PrintMsgByLen(LogType type, LogLevel level, unsigned int domain, const char *tag, size_t tagLen, const char *message, size_t messageLen)
```

**Description**

Outputs logs.You can use this function to output logs based on the specified log type, log level, service domain, log tag,message text and message length.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [LogType](capi-log-h.md#logtype) type | Indicates the log type. The type for third-party applications is defined by [LOG_APP](capi-log-h.md#logtype). |
| [LogLevel](capi-log-h.md#loglevel) level | Indicates the log level, which can be <b>LOG_DEBUG</b>, <b>LOG_INFO</b>, <b>LOG_WARN</b>,<b>LOG_ERROR</b>, and <b>LOG_FATAL</b>. |
| unsigned int domain | Indicates the service domain of logs. Its value is a hexadecimal integer ranging from 0x0 to 0xFFFF. |
| const char *tag | Indicates the log tag, which is a string used to identify the class, file, or service behavior. |
| size_t tagLen | Indicates the length of tag. |
| const char *message | Indicates the log string. |
| size_t messageLen | Indicates the length of message. |

**Returns**:

| Type | Description |
| -- | -- |
| int | Returns <b>0</b> or a larger value if the operation is successful; returns a value smaller<br> than <b>0</b> otherwise. |

### OH_LOG_VPrint()

```c
int OH_LOG_VPrint(LogType type, LogLevel level, unsigned int domain, const char *tag, const char *fmt, va_list ap)
```

**Description**

Outputs logs.You can use this function to output logs based on the specified log type, log level, service domain, log tag,and a va_list instead of variable parameters determined by the format specifier and privacy identifier in the printfformat.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [LogType](capi-log-h.md#logtype) type | Indicates the log type. The type for third-party applications is defined by [LOG_APP](capi-log-h.md#logtype). |
| [LogLevel](capi-log-h.md#loglevel) level | Indicates the log level, which can be <b>LOG_DEBUG</b>, <b>LOG_INFO</b>, <b>LOG_WARN</b>,<b>LOG_ERROR</b>, and <b>LOG_FATAL</b>. |
| unsigned int domain | Indicates the service domain of logs. Its value is a hexadecimal integer ranging from 0x0 to 0xFFFF. |
| const char *tag | Indicates the log tag, which is a string used to identify the class, file, or service behavior. |
| const char *fmt | Indicates the format string, which is an enhancement of a printf format string and supports the privacyidentifier. Specifically, {public} or {private} is added between the % character and the format specifierin each parameter. |
| va_list ap | Indicates a list of parameters. The number and type of parameters must map onto the format specifiersin the format string. |

**Returns**:

| Type | Description |
| -- | -- |
| int | Returns <b>0</b> or a larger value if the operation is successful; returns a value smaller<br> than <b>0</b> otherwise. |

### OH_LOG_IsLoggable()

```c
bool OH_LOG_IsLoggable(unsigned int domain, const char *tag, LogLevel level)
```

**Description**

Checks whether logs of the specified service domain, log tag, and log level can be output.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| unsigned int domain | Indicates the service domain of logs. |
| const char *tag | Indicates the log tag. |
| [LogLevel](capi-log-h.md#loglevel) level | Indicates the log level. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | Returns <b>true</b> if the specified logs can be output; returns <b>false</b> otherwise. |

### OH_LOG_DEBUG()

```c
OH_LOG_DEBUG(type, ...)((void)OH_LOG_Print((type), LOG_DEBUG, LOG_DOMAIN, LOG_TAG, __VA_ARGS__))
```

**Description**

Outputs debug logs. This is a function-like macro.Before calling this function, define the log service domain and log tag. Generally, you need to define them atthe beginning of the source file. <br>

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| type | Indicates the log type. The type for third-party applications is defined by [LOG_APP](capi-log-h.md#logtype). |
| fmt | Indicates the format string, which is an enhancement of a printf format string and supports theprivacy identifier. Specifically, {public} or {private} is added between the % character and the format specifierin each parameter. |
| ... | Indicates a list of parameters. The number and type of parameters must map onto the format specifiersin the format string. |

**Reference**:

[OH_LOG_Print](capi-log-h.md#oh_log_print)


### OH_LOG_INFO()

```c
OH_LOG_INFO(type, ...)((void)OH_LOG_Print((type), LOG_INFO, LOG_DOMAIN, LOG_TAG, __VA_ARGS__))
```

**Description**

Outputs informational logs. This is a function-like macro.Before calling this function, define the log service domain and log tag. Generally, you need to define themat the beginning of the source file. <br>

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| type | Indicates the log type. The type for third-party applications is defined by [LOG_APP](capi-log-h.md#logtype). |
| fmt | Indicates the format string, which is an enhancement of a printf format string and supports the privacyidentifier. Specifically, {public} or {private} is added between the % character and the format specifier ineach parameter. |
| ... | Indicates a list of parameters. The number and type of parameters must map onto the format specifiersin the format string. |

**Reference**:

[OH_LOG_Print](capi-log-h.md#oh_log_print)


### OH_LOG_WARN()

```c
OH_LOG_WARN(type, ...)((void)OH_LOG_Print((type), LOG_WARN, LOG_DOMAIN, LOG_TAG, __VA_ARGS__))
```

**Description**

Outputs warning logs. This is a function-like macro.Before calling this function, define the log service domain and log tag. Generally, you need to define themat the beginning of the source file. <br>

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| type | Indicates the log type. The type for third-party applications is defined by [LOG_APP](capi-log-h.md#logtype). |
| fmt | Indicates the format string, which is an enhancement of a printf format string and supports theprivacy identifier. Specifically, {public} or {private} is added between the % character and the format specifierin each parameter. |
| ... | Indicates a list of parameters. The number and type of parameters must map onto the format specifiersin the format string. |

**Reference**:

[OH_LOG_Print](capi-log-h.md#oh_log_print)


### OH_LOG_ERROR()

```c
OH_LOG_ERROR(type, ...)((void)OH_LOG_Print((type), LOG_ERROR, LOG_DOMAIN, LOG_TAG, __VA_ARGS__))
```

**Description**

Outputs error logs. This is a function-like macro.Before calling this function, define the log service domain and log tag. Generally, you need to definethem at the beginning of the source file. <br>

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| type | Indicates the log type. The type for third-party applications is defined by [LOG_APP](capi-log-h.md#logtype). |
| fmt | Indicates the format string, which is an enhancement of a printf format string and supports the privacyidentifier. Specifically, {public} or {private} is added between the % character and the format specifier in eachparameter. |
| ... | Indicates a list of parameters. The number and type of parameters must map onto the format specifiersin the format string. |

**Reference**:

[OH_LOG_Print](capi-log-h.md#oh_log_print)


### OH_LOG_FATAL()

```c
OH_LOG_FATAL(type, ...)((void)OH_LOG_Print((type), LOG_FATAL, LOG_DOMAIN, LOG_TAG, __VA_ARGS__))
```

**Description**

Outputs fatal logs. This is a function-like macro.Before calling this function, define the log service domain and log tag. Generally, you need to define them atthe beginning of the source file. <br>

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| type | Indicates the log type. The type for third-party applications is defined by [LOG_APP](capi-log-h.md#logtype). |
| fmt | Indicates the format string, which is an enhancement of a printf format string and supports the privacyidentifier. Specifically, {public} or {private} is added between the % character and the format specifier ineach parameter. |
| ... | Indicates a list of parameters. The number and type of parameters must map onto the format specifiersin the format string. |

**Reference**:

[OH_LOG_Print](capi-log-h.md#oh_log_print)


### LogCallback()

```c
typedef void (*LogCallback)(const LogType type, const LogLevel level, const unsigned int domain, const char *tag, const char *msg)
```

**Description**

Defines the function pointer type for the user-defined log processing function.

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| (const LogType type | Indicates the log type. The type for third-party applications is defined by [LOG_APP](capi-log-h.md#logtype). |
| [const LogLevel](capi-log-h.md#loglevel) level | Indicates the log level, which can be <b>LOG_DEBUG</b>, <b>LOG_INFO</b>, <b>LOG_WARN</b>,<b>LOG_ERROR</b>, and <b>LOG_FATAL</b>. |
| const unsigned int domain | Indicates the service domain of logs. Its value is a hexadecimal integer ranging from 0x0 to 0xFFFF. |
| const char \*tag | Indicates the log tag, which is a string used to identify the class, file, or service behavior. |
| const char \*msg | Indicates the log message itself, which is a formatted log string. |

### OH_LOG_SetCallback()

```c
void OH_LOG_SetCallback(LogCallback callback)
```

**Description**

Set the user-defined log processing function.After calling this function, the callback function implemented by the user can receive all hilogs of thecurrent process.Note that it will not change the default behavior of hilog logs of the current process, no matter whether thisinterface is called or not. <br>

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| [LogCallback](capi-log-h.md#logcallback) callback | Indicates the callback function implemented by the user. If you do not need to process hilog logs,you can transfer a null pointer. |

### OH_LOG_SetMinLogLevel()

```c
void OH_LOG_SetMinLogLevel(LogLevel level)
```

**Description**

Sets the lowest log level of the current application process.

**Since**: 15

**Parameters**:

| Parameter | Description |
| -- | -- |
| [LogLevel](capi-log-h.md#loglevel) level | log level |

### OH_LOG_SetLogLevel()

```c
void OH_LOG_SetLogLevel(LogLevel level, PreferStrategy prefer)
```

**Description**

Sets the lowest log level of the current application process. Different preference strategy can be set.

**Since**: 21

**Parameters**:

| Parameter | Description |
| -- | -- |
| [LogLevel](capi-log-h.md#loglevel) level | log level. |
| [PreferStrategy](capi-log-h.md#preferstrategy) prefer | preference strategy. See [PreferStrategy](capi-log-h.md#preferstrategy). |


