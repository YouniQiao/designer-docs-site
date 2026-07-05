# HiLog

## Overview

Provides logging functions.For example, you can use these functions to output logs of the specified log type, service domain, log tag,and log level.

**Since**: 8
## Files

| Name | Description |
| -- | -- |
| [log.h](capi-log-h.md) | Defines the logging functions of the HiLog module.Before outputting logs, you must define the service domain, and log tag, use the function withthe specified log type and level, and specify the privacy identifier.<br> <ul><li>Service domain: used to identify the subsystem and module of a service. Its value is a hexadecimalinteger ranging from 0x0 to 0xFFFF. <br> <li>Log tag: a string used to identify the class, file, or service.</li> <br> <li>Log level: <b>DEBUG</b>, <b>INFO</b>, <b>WARN</b>, <b>ERROR</b>, and <b>FATAL</b></li> <br> <li>Parameter format: a printf format string that starts with a % character, including format specifiersand variable parameters.</li> <br> <li>Privacy identifier: {public} or {private} added between the % character and the format specifier ineach parameter. Note that each parameter has a privacy identifier. If no privacy identifier is added,the parameter is considered to be <b>private</b>.</li></ul> <br> Sample code:<br> Defining the service domain and log tag:<br>     #include <hilog/log.h><br>     #define LOG_DOMAIN 0x0201<br>     #define LOG_TAG "MY_TAG"<br> Outputting logs:<br>     HILOG_WARN([LOG_APP](capi-log-h.md#logtype), "Failed to visit %{private}s, reason:%{public}d.", url, errno);<br> Output result:<br>     05-06 15:01:06.870 1051 1051 W 0201/MY_TAG: Failed to visit <private>, reason:503.<br> |
