# trace.h

## Overview

Defines APIs of the **HiTraceMeter** and **HiTraceChain** modules for performance tracing and distributedtracing.The vertical bar (\|) is used as the separator in user-mode trace format. Therefore, the string parameters passed bythe HiTraceMeter APIs must exclude this character to avoid trace parsing exceptions.The maximum length of a user-mode trace is 512 characters. Excess characters will be truncated.

**Include**: <hitrace/trace.h>

**Library**: libhitrace_ndk.z.so

**System capability**: SystemCapability.HiviewDFX.HiTrace

**Since**: 10

**Related module**: [Hitrace](capi-hitrace.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [HiTraceId](capi-hitrace-hitraceid.md) | HiTraceId | Defines a **HiTraceId** instance. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [HiTraceId_Valid](#hitraceid_valid) | HiTraceId_Valid | Enumerates whether a **HiTraceId** instance is valid. |
| [HiTrace_Version](#hitrace_version) | HiTrace_Version | Enumerates the HiTrace versions. |
| [HiTrace_Flag](#hitrace_flag) | HiTrace_Flag | Enumerates the HiTrace flags. |
| [HiTrace_Tracepoint_Type](#hitrace_tracepoint_type) | HiTrace_Tracepoint_Type | Enumerates the trace point types. |
| [HiTrace_Communication_Mode](#hitrace_communication_mode) | HiTrace_Communication_Mode | Enumerates the trace communication types. |
| [HiTrace_Output_Level](#hitrace_output_level) | HiTrace_Output_Level | Enumerates the HiTrace output levels. The trace output level lower than the threshold does not take effect.The log version threshold is **HITRACE_LEVEL_INFO**, and the nolog version threshold is **HITRACE_LEVEL_COMMERCIAL**. |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [typedef void (\*OH_HiTrace_TraceEventListener)(bool traceStatus)](#oh_hitrace_traceeventlistener) | OH_HiTrace_TraceEventListener | Defines a callback to listen for whether the trace capture is enabled. |
| [HiTraceId OH_HiTrace_BeginChain(const char *name, int flags)](#oh_hitrace_beginchain) | - | Starts tracing.If the current thread's TLS does not contain a valid HiTrace ID, this function generates one, stores it in TLS, andreturns it.If the current thread's TLS already contains a valid HiTrace ID, this function does not start tracing and returns aninvalid HiTrace ID with all property values being 0. |
| [void OH_HiTrace_EndChain()](#oh_hitrace_endchain) | - | Stops tracing.Stops tracing and sets the HiTrace ID in the TLS of the current thread to invalid. |
| [HiTraceId OH_HiTrace_GetId()](#oh_hitrace_getid) | - | Obtains the HiTrace ID in the TLS of the current thread. |
| [void OH_HiTrace_SetId(const HiTraceId *id)](#oh_hitrace_setid) | - | Sets the given HiTrace ID to the TLS of the current thread. If the given HiTrace ID is invalid, no operationis performed. |
| [void OH_HiTrace_ClearId(void)](#oh_hitrace_clearid) | - | Clears the HiTrace ID in the current thread's TLS. |
| [HiTraceId OH_HiTrace_CreateSpan(void)](#oh_hitrace_createspan) | - | Creates a trace span.Specifically, create a **HiTraceId**, use the **chainId** and **spanId** in the TLS of the current thread toinitialize the **chainId** and **parentSpanId** of the **HiTraceId**, generate a new **spanId** for the **HiTraceId, and return the **HiTraceId**. |
| [void OH_HiTrace_Tracepoint(HiTrace_Communication_Mode mode, HiTrace_Tracepoint_Type type, const HiTraceId *id, const char *fmt, ...)](#oh_hitrace_tracepoint) | - | Adds a trace point for the HiTraceMeter logging.When **type** is set to **HITRACE_TP_CS** and **HITRACE_TP_SR**, the HiTraceMeter tracing starts. When **type** isset to **HITRACE_TP_CR** and **HITRACE_TP_SS**, the HiTraceMeter tracing ends. When **type** is set to HITRACE_TP_GENERAL**, the HiTraceMeter tracing does not start.The tracing points of **HITRACE_TP_CS** and **HITRACE_TP_CR** must be used in pairs; the tracing points of HITRACE_TP_SR** and **HITRACE_TP_SS** must be used in pairs. Otherwise, the start and end trace points ofHiTraceMeter cannot match each other. |
| [void OH_HiTrace_InitId(HiTraceId *id)](#oh_hitrace_initid) | - | Initializes a **HiTraceId**. |
| [void OH_HiTrace_IdFromBytes(HiTraceId *id, const uint8_t *pIdArray, int len)](#oh_hitrace_idfrombytes) | - | Creates a **HiTraceId** based on a byte array. |
| [bool OH_HiTrace_IsIdValid(const HiTraceId *id)](#oh_hitrace_isidvalid) | - | Checks whether the **HiTraceId** is valid. |
| [bool OH_HiTrace_IsFlagEnabled(const HiTraceId *id, HiTrace_Flag flag)](#oh_hitrace_isflagenabled) | - | Checks whether the trace flag is enabled for the **HiTraceId**. |
| [void OH_HiTrace_EnableFlag(const HiTraceId *id, HiTrace_Flag flag)](#oh_hitrace_enableflag) | - | Enables the trace flag specified in **HiTraceId**. |
| [int OH_HiTrace_GetFlags(const HiTraceId *id)](#oh_hitrace_getflags) | - | Obtains the trace flag set in **HiTraceId**. |
| [void OH_HiTrace_SetFlags(HiTraceId *id, int flags)](#oh_hitrace_setflags) | - | Sets the trace flag to [HiTraceId](capi-hitrace-hitraceid.md). |
| [uint64_t OH_HiTrace_GetChainId(const HiTraceId *id)](#oh_hitrace_getchainid) | - | Obtains the trace chain ID in **HiTraceId**. |
| [void OH_HiTrace_SetChainId(HiTraceId *id, uint64_t chainId)](#oh_hitrace_setchainid) | - | Sets the trace chain ID in **HiTraceId**. |
| [uint64_t OH_HiTrace_GetSpanId(const HiTraceId *id)](#oh_hitrace_getspanid) | - | Obtains the span ID in **HiTraceId**. |
| [void OH_HiTrace_SetSpanId(HiTraceId *id, uint64_t spanId)](#oh_hitrace_setspanid) | - | Sets the span ID in **HiTraceId**. |
| [uint64_t OH_HiTrace_GetParentSpanId(const HiTraceId *id)](#oh_hitrace_getparentspanid) | - | Obtains the parent span ID in **HiTraceId**. |
| [void OH_HiTrace_SetParentSpanId(HiTraceId *id, uint64_t parentSpanId)](#oh_hitrace_setparentspanid) | - | Sets the **ParentSpanId** in a **HiTraceId** instance. |
| [int OH_HiTrace_IdToBytes(const HiTraceId* id, uint8_t* pIdArray, int len)](#oh_hitrace_idtobytes) | - | Converts **HiTraceId** into a byte array for cache or communication. |
| [void OH_HiTrace_StartTrace(const char *name)](#oh_hitrace_starttrace) | - | Marks the start of a synchronous trace.This API is used with **OH_HiTrace_FinishTrace()** in pairs.The two APIs can be nested. The stack data structure is used for matching during trace parsing.Since API version 19, you are advised to use the **OH_HiTrace_StartTraceEx()** API to specify the trace output level. |
| [void OH_HiTrace_FinishTrace(void)](#oh_hitrace_finishtrace) | - | Marks the end of a synchronous trace.This API must be used with **OH_HiTrace_StartTrace()** in pairs. During trace parsing, the system matches it withthe latest **OH_HiTrace_StartTrace()** API in the service process.Since API version 19, you are advised to use the **OH_HiTrace_FinishTraceEx()** API to specify the trace outputlevel. |
| [void OH_HiTrace_StartAsyncTrace(const char *name, int32_t taskId)](#oh_hitrace_startasynctrace) | - | Marks the start of an asynchronous trace.This API is used to start tracing before an asynchronous operation. The start and end of an asynchronous trace donot occur in sequence. Therefore, a unique task ID is required to identify them.It must be used with **OH_HiTrace_FinishAsyncTrace()** in pairs. The start and end identified by the same name andtask ID constitute an asynchronous trace task.If multiple trace tasks with the same name need to be performed at the same time or a trace task needs to beperformed multiple times concurrently, different task IDs must be specified.If the trace tasks with the same name are not performed at the same time, the same **taskId** can be used.Since API version 19, you are advised to use the **OH_HiTrace_StartAsyncTraceEx()** API to specify the trace outputlevel and category. |
| [void OH_HiTrace_FinishAsyncTrace(const char *name, int32_t taskId)](#oh_hitrace_finishasynctrace) | - | Marks the end of an asynchronous trace.This API is called in the callback function after an asynchronous trace is complete.It is used with **OH_HiTrace_StartAsyncTrace()** in pairs. Its name and task ID must be the same as those of OH_HiTrace_StartAsyncTrace()**.Since API version 19, you are advised to use the **OH_HiTrace_FinishAsyncTraceEx()** API to specify the trace outputlevel. |
| [void OH_HiTrace_CountTrace(const char *name, int64_t count)](#oh_hitrace_counttrace) | - | Traces the value change of an integer variable based on its name.This API can be executed for multiple times to trace the value change of a given integer variable at different timepoints.Since API version 19, you are advised to use the **OH_HiTrace_CountTraceEx()** API to specify the trace output level. |
| [void OH_HiTrace_StartTraceEx(HiTrace_Output_Level level, const char* name, const char* customArgs)](#oh_hitrace_starttraceex) | - | Marks the start of a synchronous trace task with the trace output level specified.This API is used with **OH_HiTrace_FinishTraceEx()** in pairs.The two APIs can be nested. The stack data structure is used for matching during trace parsing. |
| [void OH_HiTrace_FinishTraceEx(HiTrace_Output_Level level)](#oh_hitrace_finishtraceex) | - | Marks the end of a synchronous trace task with the trace output level specified.It must be used with **OH_HiTrace_StartTraceEx()** in pairs. Its level must be the same as those of OH_HiTrace_StartTraceEx()**.During trace data parsing, the system matches it with the **OH_HiTrace_StartTraceEx()** API recently invoked in theservice process. |
| [void OH_HiTrace_StartAsyncTraceEx(HiTrace_Output_Level level, const char* name, int32_t taskId, const char* customCategory, const char* customArgs)](#oh_hitrace_startasynctraceex) | - | Marks the start of an asynchronous trace task with the trace output level specified.This API is used to start tracing before an asynchronous operation. The start and end of an asynchronous trace donot occur in sequence. Therefore, a unique task ID is required to identify them.It is used with **OH_HiTrace_FinishAsyncTraceEx()** in pairs. The start and end identified by the same name and taskID constitute an asynchronous trace task.If multiple trace tasks with the same name need to be performed at the same time or a trace task needs to beperformed multiple times concurrently, different task IDs must be specified.If the trace tasks with the same name are not performed at the same time, the same **taskId** can be used.Task IDs of different processes does not interfere with each other. |
| [void OH_HiTrace_FinishAsyncTraceEx(HiTrace_Output_Level level, const char* name, int32_t taskId)](#oh_hitrace_finishasynctraceex) | - | Marks the end of an asynchronous trace task with the trace output level specified.This API is used to stop tracing after an asynchronous operation is complete, for example, in a callback function.It is used with **OH_HiTrace_StartAsyncTraceEx()** in pairs. Its level, name and task ID must be the same as thoseof **OH_HiTrace_StartAsyncTraceEx()**. |
| [void OH_HiTrace_CountTraceEx(HiTrace_Output_Level level, const char* name, int64_t count)](#oh_hitrace_counttraceex) | - | Marks an integer variable trace task with the trace output level specified. |
| [bool OH_HiTrace_IsTraceEnabled(void)](#oh_hitrace_istraceenabled) | - | Checks whether trace capture is enabled for an application. |
| [int32_t OH_HiTrace_RegisterTraceListener(OH_HiTrace_TraceEventListener callback)](#oh_hitrace_registertracelistener) | - | Registers a callback to notify whether the application trace capture is enabled. This API uses a synchronouscallback to return the result. |
| [int32_t OH_HiTrace_UnregisterTraceListener(int32_t index)](#oh_hitrace_unregistertracelistener) | - | Unregisters the callback used to notify whether the application trace capture is enabled.You can use this function to unregister the callback function associated with the callback index returned by[OH_HiTrace_RegisterTraceListener](capi-trace-h.md#oh_hitrace_registertracelistener). |

## Enum type description

### HiTraceId_Valid

```c
enum HiTraceId_Valid
```

**Description**

Enumerates whether a **HiTraceId** instance is valid.

**Since**: 12

| Enum item | Description |
| -- | -- |
| HITRACE_ID_INVALID = 0 | Invalid **HiTraceId**.<br>**Since**: 12 |
| HITRACE_ID_VALID = 1 | Valid **HiTraceId**.<br>**Since**: 12 |

### HiTrace_Version

```c
enum HiTrace_Version
```

**Description**

Enumerates the HiTrace versions.

**Since**: 12

| Enum item | Description |
| -- | -- |
| HITRACE_VER_1 = 0 | Version 1.<br>**Since**: 12 |

### HiTrace_Flag

```c
enum HiTrace_Flag
```

**Description**

Enumerates the HiTrace flags.

**Since**: 12

| Enum item | Description |
| -- | -- |
| HITRACE_FLAG_DEFAULT = 0 | Default flag.<br>**Since**: 12 |
| HITRACE_FLAG_INCLUDE_ASYNC = 1 << 0 | Asynchronous call flag.When this flag is set, both synchronous and asynchronous calls are traced.Bydefault, only synchronous calls are traced.<br>**Since**: 12 |
| HITRACE_FLAG_DONOT_CREATE_SPAN = 1 << 1 | No span flag.When this flag is set, no span information is created. By default, span information iscreated.<br>**Since**: 12 |
| HITRACE_FLAG_TP_INFO = 1 << 2 | Trace point flag.When this flag is set in the debugging scenario, the HiLog logs of the trace point areprinted upon calling the **OH_HiTrace_Tracepoint()** API. By default, the HiLog logs are not printed.<br>**Since**: 12 |
| HITRACE_FLAG_NO_BE_INFO = 1 << 3 | No begin and end flag.When this flag is set in the debugging scenario, the HiLog logs about the begin andend of tracing are printed when the **OH_HiTrace_BeginChain()** and **OH_HiTrace_EndChain()** APIs are called.By default,the HiLog logs about the begin and end of tracing are not printed.<br>**Since**: 12 |
| HITRACE_FLAG_DONOT_ENABLE_LOG = 1 << 4 | Log association flag.When this flag is set, the **HiTraceId** information is not added to the HiLog logs.By default, the **HiTraceId** information is added to the HiLog logs.<br>**Since**: 12 |
| HITRACE_FLAG_FAULT_TRIGGER = 1 << 5 | Failure trigger flag. This is a reserved flag.<br>**Since**: 12 |
| HITRACE_FLAG_D2D_TP_INFO = 1 << 6 | Device-to-device trace point flag. It is a subset of **HITRACE_FLAG_TP_INFO** and is used in debuggingscenarios.When the **HITRACE_FLAG_TP_INFO** flag is set, the **HITRACE_FLAG_D2D_TP_INFO** flag does not takeeffect.When **HITRACE_FLAG_TP_INFO** is not set and **HITRACE_FLAG_D2D_TP_INFO** is set, the HiLog logs of thetrace point are printed only when the **mode** parameter is set to **HITRACE_CM_DEVICE** upon calling**OH_HiTrace_Tracepoint()**.<br>**Since**: 12 |

### HiTrace_Tracepoint_Type

```c
enum HiTrace_Tracepoint_Type
```

**Description**

Enumerates the trace point types.

**Since**: 12

| Enum item | Description |
| -- | -- |
| HITRACE_TP_CS = 0 | CS trace point.<br>**Since**: 12 |
| HITRACE_TP_CR = 1 | CR trace point.<br>**Since**: 12 |
| HITRACE_TP_SS = 2 | SS trace point.<br>**Since**: 12 |
| HITRACE_TP_SR = 3 | SR trace point.<br>**Since**: 12 |
| HITRACE_TP_GENERAL = 4 | General type, which identifies the trace points except **HITRACE_TP_CS**, **HITRACE_TP_CR**,**HITRACE_TP_SS**, and **HITRACE_TP_SR**.<br>**Since**: 12 |

### HiTrace_Communication_Mode

```c
enum HiTrace_Communication_Mode
```

**Description**

Enumerates the trace communication types.

**Since**: 12

| Enum item | Description |
| -- | -- |
| HITRACE_CM_DEFAULT = 0 | Default communication.<br>**Since**: 12 |
| HITRACE_CM_THREAD = 1 | Inter-thread communication.<br>**Since**: 12 |
| HITRACE_CM_PROCESS = 2 | Inter-process communication (IPC).<br>**Since**: 12 |
| HITRACE_CM_DEVICE = 3 | Inter-device communication.<br>**Since**: 12 |

### HiTrace_Output_Level

```c
enum HiTrace_Output_Level
```

**Description**

Enumerates the HiTrace output levels. The trace output level lower than the threshold does not take effect.The log version threshold is **HITRACE_LEVEL_INFO**, and the nolog version threshold is **HITRACE_LEVEL_COMMERCIAL**.

**Since**: 19

| Enum item | Description |
| -- | -- |
| HITRACE_LEVEL_DEBUG = 0 | Level used only for debugging, which has the lowest priority.<br>**Since**: 19 |
| HITRACE_LEVEL_INFO = 1 | Level for the log version.<br>**Since**: 19 |
| HITRACE_LEVEL_CRITICAL = 2 | Level for the log version, which has a higher priority than **INFO**.<br>**Since**: 19 |
| HITRACE_LEVEL_COMMERCIAL = 3 | Level for the nolog version, which has the highest priority.<br>**Since**: 19 |
| HITRACE_LEVEL_MAX = HITRACE_LEVEL_COMMERCIAL | The maximum output level.<br>**Since**: 19 |


## Function description

### OH_HiTrace_TraceEventListener()

```c
typedef void (*OH_HiTrace_TraceEventListener)(bool traceStatus)
```

**Description**

Defines a callback to listen for whether the trace capture is enabled.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| (bool traceStatus | Whether the trace capture is enabled for the current application.The value **true** indicates that the trace capture is enabled, and **false** indicates the opposite. |

### OH_HiTrace_BeginChain()

```c
HiTraceId OH_HiTrace_BeginChain(const char *name, int flags)
```

**Description**

Starts tracing.If the current thread's TLS does not contain a valid HiTrace ID, this function generates one, stores it in TLS, andreturns it.If the current thread's TLS already contains a valid HiTrace ID, this function does not start tracing and returns aninvalid HiTrace ID with all property values being 0.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char *name | Name of the traced service. |
| int flags | Trace flags. For details, see [HiTrace_Flag](capi-trace-h.md#hitrace_flag). |

**Returns**:

| Type | Description |
| -- | -- |
| [HiTraceId](capi-hitrace-hitraceid.md) | The [HiTraceId](capi-hitrace-hitraceid.md) struct. |

### OH_HiTrace_EndChain()

```c
void OH_HiTrace_EndChain()
```

**Description**

Stops tracing.Stops tracing and sets the HiTrace ID in the TLS of the current thread to invalid.

**Since**: 12

### OH_HiTrace_GetId()

```c
HiTraceId OH_HiTrace_GetId()
```

**Description**

Obtains the HiTrace ID in the TLS of the current thread.

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| [HiTraceId](capi-hitrace-hitraceid.md) | The [HiTraceId](capi-hitrace-hitraceid.md) struct. |

### OH_HiTrace_SetId()

```c
void OH_HiTrace_SetId(const HiTraceId *id)
```

**Description**

Sets the given HiTrace ID to the TLS of the current thread. If the given HiTrace ID is invalid, no operationis performed.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const HiTraceId](capi-hitrace-hitraceid.md) *id | [HiTraceId](capi-hitrace-hitraceid.md) to set. |

### OH_HiTrace_ClearId()

```c
void OH_HiTrace_ClearId(void)
```

**Description**

Clears the HiTrace ID in the current thread's TLS.

**Since**: 12

### OH_HiTrace_CreateSpan()

```c
HiTraceId OH_HiTrace_CreateSpan(void)
```

**Description**

Creates a trace span.Specifically, create a **HiTraceId**, use the **chainId** and **spanId** in the TLS of the current thread toinitialize the **chainId** and **parentSpanId** of the **HiTraceId**, generate a new **spanId** for the **HiTraceId, and return the **HiTraceId**.

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| [HiTraceId](capi-hitrace-hitraceid.md) | The [HiTraceId](capi-hitrace-hitraceid.md) struct. |

### OH_HiTrace_Tracepoint()

```c
void OH_HiTrace_Tracepoint(HiTrace_Communication_Mode mode, HiTrace_Tracepoint_Type type, const HiTraceId *id, const char *fmt, ...)
```

**Description**

Adds a trace point for the HiTraceMeter logging.When **type** is set to **HITRACE_TP_CS** and **HITRACE_TP_SR**, the HiTraceMeter tracing starts. When **type** isset to **HITRACE_TP_CR** and **HITRACE_TP_SS**, the HiTraceMeter tracing ends. When **type** is set to HITRACE_TP_GENERAL**, the HiTraceMeter tracing does not start.The tracing points of **HITRACE_TP_CS** and **HITRACE_TP_CR** must be used in pairs; the tracing points of HITRACE_TP_SR** and **HITRACE_TP_SS** must be used in pairs. Otherwise, the start and end trace points ofHiTraceMeter cannot match each other.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiTrace_Communication_Mode](capi-trace-h.md#hitrace_communication_mode) mode | Trace communication mode. For details, see [HiTrace_Communication_Mode](capi-trace-h.md#hitrace_communication_mode). |
| [HiTrace_Tracepoint_Type](capi-trace-h.md#hitrace_tracepoint_type) type | Trace information type. For details, see [HiTrace_Tracepoint_Type](capi-trace-h.md#hitrace_tracepoint_type). |
| [const HiTraceId](capi-hitrace-hitraceid.md) *id | [HiTraceId](capi-hitrace-hitraceid.md) for implementing trace points. |
| const char *fmt | Formatted string of the trace description information passed by the HiTraceMeter logging. |

### OH_HiTrace_InitId()

```c
void OH_HiTrace_InitId(HiTraceId *id)
```

**Description**

Initializes a **HiTraceId**.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiTraceId](capi-hitrace-hitraceid.md) *id | [HiTraceId](capi-hitrace-hitraceid.md) to initialize. |

### OH_HiTrace_IdFromBytes()

```c
void OH_HiTrace_IdFromBytes(HiTraceId *id, const uint8_t *pIdArray, int len)
```

**Description**

Creates a **HiTraceId** based on a byte array.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiTraceId](capi-hitrace-hitraceid.md) *id | [HiTraceId](capi-hitrace-hitraceid.md) to create. |
| const uint8_t *pIdArray | Byte array. |
| int len | Length of the byte array. |

### OH_HiTrace_IsIdValid()

```c
bool OH_HiTrace_IsIdValid(const HiTraceId *id)
```

**Description**

Checks whether the **HiTraceId** is valid.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const HiTraceId](capi-hitrace-hitraceid.md) *id | [HiTraceId](capi-hitrace-hitraceid.md) to check. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | The value true indicates that [HiTraceId](capi-hitrace-hitraceid.md) is valid, and false indicates the opposite. |

### OH_HiTrace_IsFlagEnabled()

```c
bool OH_HiTrace_IsFlagEnabled(const HiTraceId *id, HiTrace_Flag flag)
```

**Description**

Checks whether the trace flag is enabled for the **HiTraceId**.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const HiTraceId](capi-hitrace-hitraceid.md) *id | [HiTraceId](capi-hitrace-hitraceid.md) to check. |
| [HiTrace_Flag](capi-trace-h.md#hitrace_flag) flag | Trace flag. For details, see [HiTrace_Flag](capi-trace-h.md#hitrace_flag). |

**Returns**:

| Type | Description |
| -- | -- |
| bool | The value true indicates that the flag is enabled for the [HiTraceId](capi-hitrace-hitraceid.md), and false indicates the<br>     opposite. |

### OH_HiTrace_EnableFlag()

```c
void OH_HiTrace_EnableFlag(const HiTraceId *id, HiTrace_Flag flag)
```

**Description**

Enables the trace flag specified in **HiTraceId**.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const HiTraceId](capi-hitrace-hitraceid.md) *id | [HiTraceId](capi-hitrace-hitraceid.md) for which the trace flag is enabled. |
| [HiTrace_Flag](capi-trace-h.md#hitrace_flag) flag | Trace flag. For details, see [HiTrace_Flag](capi-trace-h.md#hitrace_flag). |

### OH_HiTrace_GetFlags()

```c
int OH_HiTrace_GetFlags(const HiTraceId *id)
```

**Description**

Obtains the trace flag set in **HiTraceId**.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const HiTraceId](capi-hitrace-hitraceid.md) *id | [HiTraceId](capi-hitrace-hitraceid.md) for which the trace flag is obtained. |

**Returns**:

| Type | Description |
| -- | -- |
| int | Trace flag set in [HiTraceId](capi-hitrace-hitraceid.md). |

### OH_HiTrace_SetFlags()

```c
void OH_HiTrace_SetFlags(HiTraceId *id, int flags)
```

**Description**

Sets the trace flag to [HiTraceId](capi-hitrace-hitraceid.md).

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiTraceId](capi-hitrace-hitraceid.md) *id | [HiTraceId](capi-hitrace-hitraceid.md) to which the trace flag is set. |
| int flags | Trace flag. For details, see [HiTrace_Flag](capi-trace-h.md#hitrace_flag). |

### OH_HiTrace_GetChainId()

```c
uint64_t OH_HiTrace_GetChainId(const HiTraceId *id)
```

**Description**

Obtains the trace chain ID in **HiTraceId**.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const HiTraceId](capi-hitrace-hitraceid.md) *id | [HiTraceId](capi-hitrace-hitraceid.md) for which the trace chain ID is obtained. |

**Returns**:

| Type | Description |
| -- | -- |
| uint64_t | Trace chain ID. |

### OH_HiTrace_SetChainId()

```c
void OH_HiTrace_SetChainId(HiTraceId *id, uint64_t chainId)
```

**Description**

Sets the trace chain ID in **HiTraceId**.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiTraceId](capi-hitrace-hitraceid.md) *id | [HiTraceId](capi-hitrace-hitraceid.md) to which the trace chain ID is to be set. |
| uint64_t chainId | Trace chain ID to set. |

### OH_HiTrace_GetSpanId()

```c
uint64_t OH_HiTrace_GetSpanId(const HiTraceId *id)
```

**Description**

Obtains the span ID in **HiTraceId**.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const HiTraceId](capi-hitrace-hitraceid.md) *id | [HiTraceId](capi-hitrace-hitraceid.md) for which span ID is obtained. |

**Returns**:

| Type | Description |
| -- | -- |
| uint64_t | Span ID set in [HiTraceId](capi-hitrace-hitraceid.md). |

### OH_HiTrace_SetSpanId()

```c
void OH_HiTrace_SetSpanId(HiTraceId *id, uint64_t spanId)
```

**Description**

Sets the span ID in **HiTraceId**.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiTraceId](capi-hitrace-hitraceid.md) *id | [HiTraceId](capi-hitrace-hitraceid.md) to which the span ID is set. |
| uint64_t spanId | Span ID to set. |

### OH_HiTrace_GetParentSpanId()

```c
uint64_t OH_HiTrace_GetParentSpanId(const HiTraceId *id)
```

**Description**

Obtains the parent span ID in **HiTraceId**.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const HiTraceId](capi-hitrace-hitraceid.md) *id | [HiTraceId](capi-hitrace-hitraceid.md) for which the parent span ID is obtained. |

**Returns**:

| Type | Description |
| -- | -- |
| uint64_t | Parent span ID set in [HiTraceId](capi-hitrace-hitraceid.md). |

### OH_HiTrace_SetParentSpanId()

```c
void OH_HiTrace_SetParentSpanId(HiTraceId *id, uint64_t parentSpanId)
```

**Description**

Sets the **ParentSpanId** in a **HiTraceId** instance.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiTraceId](capi-hitrace-hitraceid.md) *id | [HiTraceId](capi-hitrace-hitraceid.md) to which the parent span ID is set. |
| uint64_t parentSpanId | Parent span ID to set. |

### OH_HiTrace_IdToBytes()

```c
int OH_HiTrace_IdToBytes(const HiTraceId* id, uint8_t* pIdArray, int len)
```

**Description**

Converts **HiTraceId** into a byte array for cache or communication.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const HiTraceId](capi-hitrace-hitraceid.md)* id | [HiTraceId](capi-hitrace-hitraceid.md) to convert. |
| uint8_t* pIdArray | Byte array. |
| int len | Length of the byte array. |

**Returns**:

| Type | Description |
| -- | -- |
| int | Returns the length of the byte array after conversion. |

### OH_HiTrace_StartTrace()

```c
void OH_HiTrace_StartTrace(const char *name)
```

**Description**

Marks the start of a synchronous trace.This API is used with **OH_HiTrace_FinishTrace()** in pairs.The two APIs can be nested. The stack data structure is used for matching during trace parsing.Since API version 19, you are advised to use the **OH_HiTrace_StartTraceEx()** API to specify the trace output level.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char *name | Name of a synchronous trace. |

### OH_HiTrace_FinishTrace()

```c
void OH_HiTrace_FinishTrace(void)
```

**Description**

Marks the end of a synchronous trace.This API must be used with **OH_HiTrace_StartTrace()** in pairs. During trace parsing, the system matches it withthe latest **OH_HiTrace_StartTrace()** API in the service process.Since API version 19, you are advised to use the **OH_HiTrace_FinishTraceEx()** API to specify the trace outputlevel.

**Since**: 10

### OH_HiTrace_StartAsyncTrace()

```c
void OH_HiTrace_StartAsyncTrace(const char *name, int32_t taskId)
```

**Description**

Marks the start of an asynchronous trace.This API is used to start tracing before an asynchronous operation. The start and end of an asynchronous trace donot occur in sequence. Therefore, a unique task ID is required to identify them.It must be used with **OH_HiTrace_FinishAsyncTrace()** in pairs. The start and end identified by the same name andtask ID constitute an asynchronous trace task.If multiple trace tasks with the same name need to be performed at the same time or a trace task needs to beperformed multiple times concurrently, different task IDs must be specified.If the trace tasks with the same name are not performed at the same time, the same **taskId** can be used.Since API version 19, you are advised to use the **OH_HiTrace_StartAsyncTraceEx()** API to specify the trace outputlevel and category.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char *name | Name of the asynchronous trace. |
| int32_t taskId | ID of the asynchronous trace. The start and end of an asynchronous trace do not occur in sequence.Therefore, the start and end of an asynchronous trace need to be matched based on the task name and the unique taskID together. |

### OH_HiTrace_FinishAsyncTrace()

```c
void OH_HiTrace_FinishAsyncTrace(const char *name, int32_t taskId)
```

**Description**

Marks the end of an asynchronous trace.This API is called in the callback function after an asynchronous trace is complete.It is used with **OH_HiTrace_StartAsyncTrace()** in pairs. Its name and task ID must be the same as those of OH_HiTrace_StartAsyncTrace()**.Since API version 19, you are advised to use the **OH_HiTrace_FinishAsyncTraceEx()** API to specify the trace outputlevel.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char *name | Name of the asynchronous trace. |
| int32_t taskId | ID of the asynchronous trace. The start and end of an asynchronous trace do not occur in sequence.Therefore, the start and end of an asynchronous trace need to be matched based on the task name and the unique taskID together. |

### OH_HiTrace_CountTrace()

```c
void OH_HiTrace_CountTrace(const char *name, int64_t count)
```

**Description**

Traces the value change of an integer variable based on its name.This API can be executed for multiple times to trace the value change of a given integer variable at different timepoints.Since API version 19, you are advised to use the **OH_HiTrace_CountTraceEx()** API to specify the trace output level.

**Since**: 10

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char *name | Name of the integer variable. It does not need to be the same as the real variable name. |
| int64_t count | Integer value. |

### OH_HiTrace_StartTraceEx()

```c
void OH_HiTrace_StartTraceEx(HiTrace_Output_Level level, const char* name, const char* customArgs)
```

**Description**

Marks the start of a synchronous trace task with the trace output level specified.This API is used with **OH_HiTrace_FinishTraceEx()** in pairs.The two APIs can be nested. The stack data structure is used for matching during trace parsing.

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiTrace_Output_Level](capi-trace-h.md#hitrace_output_level) level | Trace output level. |
| const char* name | Name of a synchronous trace. |
| const char* customArgs | Key-value pair. Use commas (,) to separate multiple key-value pairs, for example, **"key1=value1,key2=value2"**. |

### OH_HiTrace_FinishTraceEx()

```c
void OH_HiTrace_FinishTraceEx(HiTrace_Output_Level level)
```

**Description**

Marks the end of a synchronous trace task with the trace output level specified.It must be used with **OH_HiTrace_StartTraceEx()** in pairs. Its level must be the same as those of OH_HiTrace_StartTraceEx()**.During trace data parsing, the system matches it with the **OH_HiTrace_StartTraceEx()** API recently invoked in theservice process.

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiTrace_Output_Level](capi-trace-h.md#hitrace_output_level) level | Trace output level. |

### OH_HiTrace_StartAsyncTraceEx()

```c
void OH_HiTrace_StartAsyncTraceEx(HiTrace_Output_Level level, const char* name, int32_t taskId, const char* customCategory, const char* customArgs)
```

**Description**

Marks the start of an asynchronous trace task with the trace output level specified.This API is used to start tracing before an asynchronous operation. The start and end of an asynchronous trace donot occur in sequence. Therefore, a unique task ID is required to identify them.It is used with **OH_HiTrace_FinishAsyncTraceEx()** in pairs. The start and end identified by the same name and taskID constitute an asynchronous trace task.If multiple trace tasks with the same name need to be performed at the same time or a trace task needs to beperformed multiple times concurrently, different task IDs must be specified.If the trace tasks with the same name are not performed at the same time, the same **taskId** can be used.Task IDs of different processes does not interfere with each other.

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiTrace_Output_Level](capi-trace-h.md#hitrace_output_level) level | Trace output level. |
| const char* name | Name of the asynchronous trace. |
| int32_t taskId | ID of the asynchronous trace. |
| const char* customCategory | Custom category name, which is used to collect asynchronous trace data of the same type. |
| const char* customArgs | Key-value pair. Use commas (,) to separate multiple key-value pairs, for example, **"key1=value1,key2=value2"**. |

### OH_HiTrace_FinishAsyncTraceEx()

```c
void OH_HiTrace_FinishAsyncTraceEx(HiTrace_Output_Level level, const char* name, int32_t taskId)
```

**Description**

Marks the end of an asynchronous trace task with the trace output level specified.This API is used to stop tracing after an asynchronous operation is complete, for example, in a callback function.It is used with **OH_HiTrace_StartAsyncTraceEx()** in pairs. Its level, name and task ID must be the same as thoseof **OH_HiTrace_StartAsyncTraceEx()**.

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiTrace_Output_Level](capi-trace-h.md#hitrace_output_level) level | Trace output level. |
| const char* name | Name of the asynchronous trace. |
| int32_t taskId | ID of the asynchronous trace. |

### OH_HiTrace_CountTraceEx()

```c
void OH_HiTrace_CountTraceEx(HiTrace_Output_Level level, const char* name, int64_t count)
```

**Description**

Marks an integer variable trace task with the trace output level specified.

**Since**: 19

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiTrace_Output_Level](capi-trace-h.md#hitrace_output_level) level | Trace output level. |
| const char* name | Name of the integer variable. It does not need to be the same as the actual variable name. |
| int64_t count | Integer value. |

### OH_HiTrace_IsTraceEnabled()

```c
bool OH_HiTrace_IsTraceEnabled(void)
```

**Description**

Checks whether trace capture is enabled for an application.

**Since**: 19

**Returns**:

| Type | Description |
| -- | -- |
| bool | When it is enabled, true is returned;<br>     when it is disabled or stopped, false is returned. In this case,<br>     calling the HiTraceMeter API does not take effect. |

### OH_HiTrace_RegisterTraceListener()

```c
int32_t OH_HiTrace_RegisterTraceListener(OH_HiTrace_TraceEventListener callback)
```

**Description**

Registers a callback to notify whether the application trace capture is enabled. This API uses a synchronouscallback to return the result.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_HiTrace_TraceEventListener](capi-trace-h.md#oh_hitrace_traceeventlistener) callback | Registered callback. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Callback registration status.<br> >= 0: The registration is successful. The callback index for unregistration is returned. The index ranges from 0<br> to 9.<br> -1: The maximum number of callbacks has been reached.<br> -2: Invalid parameter. The parameter is not of the TraceEventListener type. |

### OH_HiTrace_UnregisterTraceListener()

```c
int32_t OH_HiTrace_UnregisterTraceListener(int32_t index)
```

**Description**

Unregisters the callback used to notify whether the application trace capture is enabled.You can use this function to unregister the callback function associated with the callback index returned by[OH_HiTrace_RegisterTraceListener](capi-trace-h.md#oh_hitrace_registertracelistener).

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t index | Index of the registered callback. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | Callback unregistration status.<br> 0: Unregistration succeeded.<br> -1: The callback corresponding to the index is not registered.<br> -2: Invalid index. The index value is not within the range of 0 to 9. |


