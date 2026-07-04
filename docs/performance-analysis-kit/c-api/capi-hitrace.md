# Hitrace

## Overview

hitraceChain provides APIs for cross-thread and cross-process distributed tracing.hiTraceChain generates a unique chain ID for a service process and passes it to various information (includingapplication events, system events, and logs) specific to the service process.During debugging and fault locating, you can use the unique chain ID to quickly correlate various informationrelated to the service process.

**Since**: 10
## Files

| Name | Description |
| -- | -- |
| [trace.h](capi-trace-h.md) | Defines APIs of the **HiTraceMeter** and **HiTraceChain** modules for performance tracing and distributedtracing.The vertical bar (\|) is used as the separator in user-mode trace format. Therefore, the string parameters passed bythe HiTraceMeter APIs must exclude this character to avoid trace parsing exceptions.The maximum length of a user-mode trace is 512 characters. Excess characters will be truncated. |
