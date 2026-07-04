# hidebug.h

## Overview

Defines the debug functions of the HiDebug module.

**Library**: libohhidebug.so

**System capability**: SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Since**: 12

**Related module**: [HiDebug](capi-hidebug.md)

## Summary

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [double OH_HiDebug_GetSystemCpuUsage()](#oh_hidebug_getsystemcpuusage) | - | Obtains the cpu usage of system. |
| [double OH_HiDebug_GetAppCpuUsage()](#oh_hidebug_getappcpuusage) | - | Obtains the cpu usage percent of a process. |
| [HiDebug_ThreadCpuUsagePtr OH_HiDebug_GetAppThreadCpuUsage()](#oh_hidebug_getappthreadcpuusage) | - | Obtains cpu usage of application's all thread. |
| [void OH_HiDebug_FreeThreadCpuUsage(HiDebug_ThreadCpuUsagePtr *threadCpuUsage)](#oh_hidebug_freethreadcpuusage) | - | Free cpu usage buffer of application's all thread. |
| [void OH_HiDebug_GetSystemMemInfo(HiDebug_SystemMemInfo *systemMemInfo)](#oh_hidebug_getsystemmeminfo) | - | Obtains the system memory size. |
| [void OH_HiDebug_GetAppNativeMemInfo(HiDebug_NativeMemInfo *nativeMemInfo)](#oh_hidebug_getappnativememinfo) | - | Obtains the memory info of application process. |
| [void OH_HiDebug_GetAppNativeMemInfoWithCache(HiDebug_NativeMemInfo *nativeMemInfo, bool forceRefresh)](#oh_hidebug_getappnativememinfowithcache) | - | Obtains the memory info of application process, with optional caching to improve performance. The cached valueremains valid for 5 minutes. |
| [void OH_HiDebug_GetAppMemoryLimit(HiDebug_MemoryLimit *memoryLimit)](#oh_hidebug_getappmemorylimit) | - | Obtains the memory limit of application process. |
| [HiDebug_ErrorCode OH_HiDebug_StartAppTraceCapture(HiDebug_TraceFlag flag, uint64_t tags, uint32_t limitSize, char* fileName, uint32_t length)](#oh_hidebug_startapptracecapture) | - | Start capture application trace. |
| [HiDebug_ErrorCode OH_HiDebug_StopAppTraceCapture()](#oh_hidebug_stopapptracecapture) | - | Stop capture application trace. |
| [HiDebug_ErrorCode OH_HiDebug_RequestTrace(OH_HiDebug_RequestTraceConfig *config, OH_HiDebug_RequestTraceCallback callback)](#oh_hidebug_requesttrace) | - | Requests application trace capture with specified configuration. |
| [HiDebug_ErrorCode OH_HiDebug_GetGraphicsMemory(uint32_t *value)](#oh_hidebug_getgraphicsmemory) | - | Get the graphics memory of application. |
| [HiDebug_ErrorCode OH_HiDebug_SetMallocDispatchTable(struct HiDebug_MallocDispatch *dispatchTable)](#oh_hidebug_setmallocdispatchtable) | - | Replace MallocDispatch table with developer-defined memory allocation functions. |
| [HiDebug_MallocDispatch* OH_HiDebug_GetDefaultMallocDispatchTable(void)](#oh_hidebug_getdefaultmallocdispatchtable) | - | Obtain current MallocDispatch table. |
| [void OH_HiDebug_RestoreMallocDispatchTable(void)](#oh_hidebug_restoremallocdispatchtable) | - | Restore original MallocDispatch table. |
| [int OH_HiDebug_BacktraceFromFp(HiDebug_Backtrace_Object object, void* startFp, void** pcArray, int size)](#oh_hidebug_backtracefromfp) | - | Get backtrace frames start from the given frame pointer and the function is signal-safe. |
| [typedef void (\*OH_HiDebug_SymbolicAddressCallback)(void* pc, void* arg, const HiDebug_StackFrame* frame)](#oh_hidebug_symbolicaddresscallback) | OH_HiDebug_SymbolicAddressCallback | Defines the callback of the [OH_HiDebug_SymbolicAddress](capi-hidebug-h.md#oh_hidebug_symbolicaddress) function. |
| [HiDebug_ErrorCode OH_HiDebug_SymbolicAddress(HiDebug_Backtrace_Object object, void* pc, void* arg, OH_HiDebug_SymbolicAddressCallback callback)](#oh_hidebug_symbolicaddress) | - | Get detailed symbol info by given pc and the function is not signal-safe. |
| [HiDebug_Backtrace_Object OH_HiDebug_CreateBacktraceObject(void)](#oh_hidebug_createbacktraceobject) | - | Create a backtrace object for further using and the function is not signal-safe. |
| [void OH_HiDebug_DestroyBacktraceObject(HiDebug_Backtrace_Object object)](#oh_hidebug_destroybacktraceobject) | - | Destroy a backtrace object and the function is not signal-safe. |
| [HiDebug_ErrorCode OH_HiDebug_GetGraphicsMemorySummary(uint32_t interval, HiDebug_GraphicsMemorySummary *summary)](#oh_hidebug_getgraphicsmemorysummary) | - | Obtain the graphics memory summary of application. |
| [typedef void (\*OH_HiDebug_ThreadLiteSamplingCallback)(const char* stacks)](#oh_hidebug_threadlitesamplingcallback) | OH_HiDebug_ThreadLiteSamplingCallback | Defines the callback of the lightweight performance stack. |
| [HiDebug_ErrorCode OH_HiDebug_RequestThreadLiteSampling(HiDebug_ProcessSamplerConfig* config, OH_HiDebug_ThreadLiteSamplingCallback stacksCallback)](#oh_hidebug_requestthreadlitesampling) | - |  |
| [uint64_t OH_HiDebug_SetCrashObj(HiDebug_CrashObjType type, void* addr)](#oh_hidebug_setcrashobj) | - | Attaches diagnostic information to the current crash context. |
| [void OH_HiDebug_ResetCrashObj(uint64_t crashObj)](#oh_hidebug_resetcrashobj) | - | Detaches diagnostic information from the current crash context. |
| [HiDebug_ErrorCode OH_HiDebug_StartProfiler(OH_HiDebug_ResourceType type, OH_HiDebug_ResProfilerConfig* config, OH_HiDebug_ProfilingCallback callback)](#oh_hidebug_startprofiler) | - | Starts Resource Profiler for the current process asynchronously.The callback is invoked only after profiling stops, including auto-stop caused by the maximum duration.When profiling output is available, the callback carries the output file path. If profiling stops withoutproducing output, the callback is invoked with a NULL file path. |
| [HiDebug_ErrorCode OH_HiDebug_StopProfiler(void)](#oh_hidebug_stopprofiler) | - | Stops resource profiler for the current process. This API can be called after the[OH_HiDebug_StartProfiler](capi-hidebug-h.md#oh_hidebug_startprofiler) API and the call duration must be within the maximum duration. |
| [typedef bool (\*OH_HiDebug_MemDumpListener)(int32_t fd, OH_HiDebug_MemListenerType tag, bool mayReportToOEM, const char* arg)](#oh_hidebug_memdumplistener) | OH_HiDebug_MemDumpListener | Callback triggered for listening. You can use FDs to write memory data in your app so that you can export thedata using the hidumper command. |
| [HiDebug_ErrorCode OH_HiDebug_RegisterMemDumpListener(const char* name, OH_HiDebug_MemDumpListener listener)](#oh_hidebug_registermemdumplistener) | - | Registers a listener triggered when the memory watermark of an app is high or the memory information ismanually exported by hidumper. The third-party app framework or app developer calls back the registered functionto dump the app's internal memory information to hidumper or upload the information to the OME vendor throughcommercial gray release.OH_HiDebug_UnregisterMemDumpListener is used to unregister the listener. |
| [HiDebug_ErrorCode OH_HiDebug_UnregisterMemDumpListener(const char* name)](#oh_hidebug_unregistermemdumplistener) | - | Unregisters a memory dump listener that has been successfully registered. |
| [uint64_t OH_HiDebug_AcquireAsyncContext()](#oh_hidebug_acquireasynccontext) | - | Profiler helper interfaces, acquire a AsyncContext for further using.The corresponding unregister function is as follows:OH_HiDebug_ReleaseAsyncContext. |
| [void OH_HiDebug_PushAsyncContext(uint64_t ctx)](#oh_hidebug_pushasynccontext) | - | Profiler helper interfaces, push AsyncContext to the running context. |
| [void OH_HiDebug_PopAsyncContext(uint64_t ctx)](#oh_hidebug_popasynccontext) | - | Profiler helper interfaces, pop AsyncContext from the running context. |
| [void OH_HiDebug_ReleaseAsyncContext(uint64_t ctx)](#oh_hidebug_releaseasynccontext) | - | Profiler helper interfaces, release AsyncContext to system. |

## Function description

### OH_HiDebug_GetSystemCpuUsage()

```c
double OH_HiDebug_GetSystemCpuUsage()
```

**Description**

Obtains the cpu usage of system.

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| double | Returns the cpu usage of system<br>         If the result is zero,The possible reason is that get failed. |

### OH_HiDebug_GetAppCpuUsage()

```c
double OH_HiDebug_GetAppCpuUsage()
```

**Description**

Obtains the cpu usage percent of a process.

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| double | Returns the cpu usage percent of a process<br>         If the result is zero.The possbile reason is the current application usage rate is too low<br>         or acquisition has failed |

### OH_HiDebug_GetAppThreadCpuUsage()

```c
HiDebug_ThreadCpuUsagePtr OH_HiDebug_GetAppThreadCpuUsage()
```

**Description**

Obtains cpu usage of application's all thread.

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| HiDebug_ThreadCpuUsagePtr | Returns all thread cpu usage. See {@link HiDebug_ThreadCpuUsagePtr}.<br>         If the HiDebug_ThreadCpuUsagePtr is null.<br>         The possible reason is that no thread related data was obtained |

### OH_HiDebug_FreeThreadCpuUsage()

```c
void OH_HiDebug_FreeThreadCpuUsage(HiDebug_ThreadCpuUsagePtr *threadCpuUsage)
```

**Description**

Free cpu usage buffer of application's all thread.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| HiDebug_ThreadCpuUsagePtr *threadCpuUsage | Indicates applicatoin's all thread. See {@link HiDebug_ThreadCpuUsagePtr}Use the pointer generated through the OH_HiDebug_GetAppThreadCpuUsage(). |

### OH_HiDebug_GetSystemMemInfo()

```c
void OH_HiDebug_GetSystemMemInfo(HiDebug_SystemMemInfo *systemMemInfo)
```

**Description**

Obtains the system memory size.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiDebug_SystemMemInfo](capi-hidebug-hidebug-systemmeminfo.md) *systemMemInfo | Indicates the pointer to [HiDebug_SystemMemInfo](capi-hidebug-hidebug-systemmeminfo.md).If there is no data in structure after the function.The Possible reason is system error. |

### OH_HiDebug_GetAppNativeMemInfo()

```c
void OH_HiDebug_GetAppNativeMemInfo(HiDebug_NativeMemInfo *nativeMemInfo)
```

**Description**

Obtains the memory info of application process.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiDebug_NativeMemInfo](capi-hidebug-hidebug-nativememinfo.md) *nativeMemInfo | Indicates the pointer to [HiDebug_NativeMemInfo](capi-hidebug-hidebug-nativememinfo.md).If there is no data in structure after the function.The Possible reason is system error. |

### OH_HiDebug_GetAppNativeMemInfoWithCache()

```c
void OH_HiDebug_GetAppNativeMemInfoWithCache(HiDebug_NativeMemInfo *nativeMemInfo, bool forceRefresh)
```

**Description**

Obtains the memory info of application process, with optional caching to improve performance. The cached valueremains valid for 5 minutes.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiDebug_NativeMemInfo](capi-hidebug-hidebug-nativememinfo.md) *nativeMemInfo | Indicates the pointer to [HiDebug_NativeMemInfo](capi-hidebug-hidebug-nativememinfo.md).If there is no data in structure after the function.The Possible reason is system error. |
| bool forceRefresh | Whether to bypass the cache and retrieve fresh data.Set to true to force retrieve fresh data and immediate refresh the cached value;Set to false to retrieve the cached value when it is valid; otherwise, retrievefresh data and refresh the cache. |

### OH_HiDebug_GetAppMemoryLimit()

```c
void OH_HiDebug_GetAppMemoryLimit(HiDebug_MemoryLimit *memoryLimit)
```

**Description**

Obtains the memory limit of application process.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiDebug_MemoryLimit](capi-hidebug-hidebug-memorylimit.md) *memoryLimit | Indicates the pointer to [HiDebug_MemoryLimit](capi-hidebug-hidebug-memorylimit.md)If there is no data in structure after the function.The Possible reason is system error. |

### OH_HiDebug_StartAppTraceCapture()

```c
HiDebug_ErrorCode OH_HiDebug_StartAppTraceCapture(HiDebug_TraceFlag flag, uint64_t tags, uint32_t limitSize, char* fileName, uint32_t length)
```

**Description**

Start capture application trace.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiDebug_TraceFlag](capi-hidebug-type-h.md#hidebug_traceflag) flag | Trace flag |
| uint64_t tags | Tag of trace |
| uint32_t limitSize | Max size of trace file, in bytes, the max is 500MB. |
| char* fileName | Output trace file name buffer |
| uint32_t length | Output trace file name buffer length |

**Returns**:

| Type | Description |
| -- | -- |
| [HiDebug_ErrorCode](capi-hidebug-type-h.md#hidebug_errorcode) | 0 - Success<br>         [HIDEBUG_INVALID_ARGUMENT](capi-hidebug-type-h.md#hidebug_errorcode) 401 - if the fileName is null or the length is too short or<br>         limitSize is too small<br>         11400102 - Have already capture trace<br>         11400103 - Have no permission to trace<br>         11400104 - The Possible reason is some error in the system. |

### OH_HiDebug_StopAppTraceCapture()

```c
HiDebug_ErrorCode OH_HiDebug_StopAppTraceCapture()
```

**Description**

Stop capture application trace.

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| [HiDebug_ErrorCode](capi-hidebug-type-h.md#hidebug_errorcode) | 0 - Success<br>         11400104 - Maybe no trace is running or some error in the system.<br>         11400105 - Have no trace running. |

### OH_HiDebug_RequestTrace()

```c
HiDebug_ErrorCode OH_HiDebug_RequestTrace(OH_HiDebug_RequestTraceConfig *config, OH_HiDebug_RequestTraceCallback callback)
```

**Description**

Requests application trace capture with specified configuration.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_HiDebug_RequestTraceConfig](capi-hidebug-oh-hidebug-requesttraceconfig.md) *config | Indicates the trace request configuration. See [OH_HiDebug_RequestTraceConfig](capi-hidebug-oh-hidebug-requesttraceconfig.md). |
| [OH_HiDebug_RequestTraceCallback](capi-hidebug-type-h.md#oh_hidebug_requesttracecallback) callback | Indicates the callback for the trace request. See [OH_HiDebug_RequestTraceCallback](capi-hidebug-type-h.md#oh_hidebug_requesttracecallback). |

**Returns**:

| Type | Description |
| -- | -- |
| [HiDebug_ErrorCode](capi-hidebug-type-h.md#hidebug_errorcode) | Result code.<br>         [HIDEBUG_SUCCESS](capi-hidebug-type-h.md#hidebug_errorcode) The operation is successful.<br>         [HIDEBUG_TRACE_ABNORMAL](capi-hidebug-type-h.md#hidebug_errorcode) Remote service exception.<br>         [OH_HIDEBUG_TRACE_STORAGE_LIMIT](capi-hidebug-type-h.md#hidebug_errorcode) Trace storage limit reached.<br>         [HIDEBUG_RESOURCE_UNAVAILABLE](capi-hidebug-type-h.md#hidebug_errorcode) Resource unavailable. |

### OH_HiDebug_GetGraphicsMemory()

```c
HiDebug_ErrorCode OH_HiDebug_GetGraphicsMemory(uint32_t *value)
```

**Description**

Get the graphics memory of application.

**Since**: 14

**Parameters**:

| Parameter | Description |
| -- | -- |
| uint32_t *value | Indicates value of graphics memory, in kibibytes. |

**Returns**:

| Type | Description |
| -- | -- |
| [HiDebug_ErrorCode](capi-hidebug-type-h.md#hidebug_errorcode) | Result code<br>         [HIDEBUG_SUCCESS](capi-hidebug-type-h.md#hidebug_errorcode) Get graphics memory success.<br>         [HIDEBUG_INVALID_ARGUMENT](capi-hidebug-type-h.md#hidebug_errorcode) Invalid argument, value is null.<br>         [HIDEBUG_TRACE_ABNORMAL](capi-hidebug-type-h.md#hidebug_errorcode) Failed to get the application memory due to a remote exception. |

### OH_HiDebug_SetMallocDispatchTable()

```c
HiDebug_ErrorCode OH_HiDebug_SetMallocDispatchTable(struct HiDebug_MallocDispatch *dispatchTable)
```

**Description**

Replace MallocDispatch table with developer-defined memory allocation functions.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [struct HiDebug_MallocDispatch](capi-hidebug-hidebug-mallocdispatch.md) *dispatchTable | A pointer to the MallocDispatch table. |

**Returns**:

| Type | Description |
| -- | -- |
| [HiDebug_ErrorCode](capi-hidebug-type-h.md#hidebug_errorcode) | Result code<br>         [HIDEBUG_SUCCESS](capi-hidebug-type-h.md#hidebug_errorcode) The MallocDispatch table is successfully overriden.<br>         [HIDEBUG_INVALID_ARGUMENT](capi-hidebug-type-h.md#hidebug_errorcode) Invalid argument, dispatchTable is a null pointer. |

### OH_HiDebug_GetDefaultMallocDispatchTable()

```c
HiDebug_MallocDispatch* OH_HiDebug_GetDefaultMallocDispatchTable(void)
```

**Description**

Obtain current MallocDispatch table.

**Since**: 20

**Returns**:

| Type | Description |
| -- | -- |
| [HiDebug_MallocDispatch*](capi-hidebug-hidebug-mallocdispatch.md) | Returns a pointer to MallocDispatch table on success, or NULL on failure. |

### OH_HiDebug_RestoreMallocDispatchTable()

```c
void OH_HiDebug_RestoreMallocDispatchTable(void)
```

**Description**

Restore original MallocDispatch table.

**Since**: 20

### OH_HiDebug_BacktraceFromFp()

```c
int OH_HiDebug_BacktraceFromFp(HiDebug_Backtrace_Object object, void* startFp, void** pcArray, int size)
```

**Description**

Get backtrace frames start from the given frame pointer and the function is signal-safe.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiDebug_Backtrace_Object](capi-hidebug-hidebug-backtrace-object--8h.md) object | The backtrace object create by [OH_HiDebug_CreateBacktraceObject](capi-hidebug-h.md#oh_hidebug_createbacktraceobject). |
| void* startFp | The entry frame pointer. |
| void** pcArray | The array to place program counter values. |
| int size | The size of the array to place program counter values. |

**Returns**:

| Type | Description |
| -- | -- |
| int | The number of stack frames written to array. |

### OH_HiDebug_SymbolicAddressCallback()

```c
typedef void (*OH_HiDebug_SymbolicAddressCallback)(void* pc, void* arg, const HiDebug_StackFrame* frame)
```

**Description**

Defines the callback of the [OH_HiDebug_SymbolicAddress](capi-hidebug-h.md#oh_hidebug_symbolicaddress) function.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| (void\* pc | The program counter pass to [OH_HiDebug_SymbolicAddress](capi-hidebug-h.md#oh_hidebug_symbolicaddress). |
| void\* arg | The arg pass to [OH_HiDebug_SymbolicAddress](capi-hidebug-h.md#oh_hidebug_symbolicaddress). |
| [const HiDebug_StackFrame](capi-hidebug-hidebug-stackframe.md)\* frame | The parsed frame content, the content is invalid after return of [OH_HiDebug_SymbolicAddress](capi-hidebug-h.md#oh_hidebug_symbolicaddress). |

### OH_HiDebug_SymbolicAddress()

```c
HiDebug_ErrorCode OH_HiDebug_SymbolicAddress(HiDebug_Backtrace_Object object, void* pc, void* arg, OH_HiDebug_SymbolicAddressCallback callback)
```

**Description**

Get detailed symbol info by given pc and the function is not signal-safe.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiDebug_Backtrace_Object](capi-hidebug-hidebug-backtrace-object--8h.md) object | The backtrace object create by [OH_HiDebug_CreateBacktraceObject](capi-hidebug-h.md#oh_hidebug_createbacktraceobject). |
| void* pc | The program counter return by [OH_HiDebug_BacktraceFromFp](capi-hidebug-h.md#oh_hidebug_backtracefromfp). |
| void* arg | The arg will be pass to callback. |
| [OH_HiDebug_SymbolicAddressCallback](capi-hidebug-h.md#oh_hidebug_symbolicaddresscallback) callback | The function to pass parsed frame to caller. |

**Returns**:

| Type | Description |
| -- | -- |
| [HiDebug_ErrorCode](capi-hidebug-type-h.md#hidebug_errorcode) | Result code<br>         [HIDEBUG_SUCCESS](capi-hidebug-type-h.md#hidebug_errorcode) Get detailed frame info successfully and the callback is invoked.<br>         [HIDEBUG_INVALID_ARGUMENT](capi-hidebug-type-h.md#hidebug_errorcode) Invalid argument.<br>         [HIDEBUG_INVALID_SYMBOLIC_PC_ADDRESS](capi-hidebug-type-h.md#hidebug_errorcode) Could not find symbol info by given pc. |

### OH_HiDebug_CreateBacktraceObject()

```c
HiDebug_Backtrace_Object OH_HiDebug_CreateBacktraceObject(void)
```

**Description**

Create a backtrace object for further using and the function is not signal-safe.

**Since**: 20

**Returns**:

| Type | Description |
| -- | -- |
| [HiDebug_Backtrace_Object](capi-hidebug-hidebug-backtrace-object--8h.md) | BacktraceObject if Success or NULL if is not supported on current arch |

### OH_HiDebug_DestroyBacktraceObject()

```c
void OH_HiDebug_DestroyBacktraceObject(HiDebug_Backtrace_Object object)
```

**Description**

Destroy a backtrace object and the function is not signal-safe.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiDebug_Backtrace_Object](capi-hidebug-hidebug-backtrace-object--8h.md) object | The object to be destroyed. |

### OH_HiDebug_GetGraphicsMemorySummary()

```c
HiDebug_ErrorCode OH_HiDebug_GetGraphicsMemorySummary(uint32_t interval, HiDebug_GraphicsMemorySummary *summary)
```

**Description**

Obtain the graphics memory summary of application.

**Since**: 21

**Parameters**:

| Parameter | Description |
| -- | -- |
| uint32_t interval | If the cache of graphics memory is longer than interval (unit: second), the latestgraphics memory data will be obtained. The interval value range is 2 seconds to3600 seconds, If interval is an invalid value, the default value is 300 seconds. |
| [HiDebug_GraphicsMemorySummary](capi-hidebug-hidebug-graphicsmemorysummary.md) *summary | Indicates value of graphics memory summary, in kibibytes. |

**Returns**:

| Type | Description |
| -- | -- |
| [HiDebug_ErrorCode](capi-hidebug-type-h.md#hidebug_errorcode) | Result code<br>         [HIDEBUG_SUCCESS](capi-hidebug-type-h.md#hidebug_errorcode) Get graphics memory success.<br>         [HIDEBUG_INVALID_ARGUMENT](capi-hidebug-type-h.md#hidebug_errorcode) Invalid argument, value is null.<br>         [HIDEBUG_TRACE_ABNORMAL](capi-hidebug-type-h.md#hidebug_errorcode) Failed to get the application memory due to a remote exception. |

### OH_HiDebug_ThreadLiteSamplingCallback()

```c
typedef void (*OH_HiDebug_ThreadLiteSamplingCallback)(const char* stacks)
```

**Description**

Defines the callback of the lightweight performance stack.

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| (const char\* stacks | Stacks. |

### OH_HiDebug_RequestThreadLiteSampling()

```c
HiDebug_ErrorCode OH_HiDebug_RequestThreadLiteSampling(HiDebug_ProcessSamplerConfig* config, OH_HiDebug_ThreadLiteSamplingCallback stacksCallback)
```

**Description**

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiDebug_ProcessSamplerConfig](capi-hidebug-hidebug-processsamplerconfig.md)* config | Sampling configuration parameters. |
| [OH_HiDebug_ThreadLiteSamplingCallback](capi-hidebug-h.md#oh_hidebug_threadlitesamplingcallback) stacksCallback | Callback of the sampling stack. This function is called after the sampling to passthe sampling stack information. |

**Returns**:

| Type | Description |
| -- | -- |
| [HiDebug_ErrorCode](capi-hidebug-type-h.md#hidebug_errorcode) | Result code.<br>         [HIDEBUG_SUCCESS](capi-hidebug-type-h.md#hidebug_errorcode) The operation is successful.<br>         [HIDEBUG_INVALID_ARGUMENT](capi-hidebug-type-h.md#hidebug_errorcode) Invalid argument.<br>         [HIDEBUG_NOT_SUPPORTED](capi-hidebug-type-h.md#hidebug_errorcode) The device does not support sampling.<br>         [HIDEBUG_UNDER_SAMPLING](capi-hidebug-type-h.md#hidebug_errorcode) The sampling is in progress.<br>         [HIDEBUG_RESOURCE_UNAVAILABLE](capi-hidebug-type-h.md#hidebug_errorcode) Resource unavailable. |

### OH_HiDebug_SetCrashObj()

```c
uint64_t OH_HiDebug_SetCrashObj(HiDebug_CrashObjType type, void* addr)
```

**Description**

Attaches diagnostic information to the current crash context.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiDebug_CrashObjType](capi-hidebug-type-h.md#hidebug_crashobjtype) type | Type of diagnostic data. |
| void* addr | Point to the data buffer(must remain valid until crash). |

**Returns**:

| Type | Description |
| -- | -- |
| uint64_t | Handle to the previously set crash object(0 if none). |

### OH_HiDebug_ResetCrashObj()

```c
void OH_HiDebug_ResetCrashObj(uint64_t crashObj)
```

**Description**

Detaches diagnostic information from the current crash context.

**Since**: 23

**Parameters**:

| Parameter | Description |
| -- | -- |
| uint64_t crashObj | Handle returned by OH_HiDebug_SetCrashObj. |

### OH_HiDebug_StartProfiler()

```c
HiDebug_ErrorCode OH_HiDebug_StartProfiler(OH_HiDebug_ResourceType type, OH_HiDebug_ResProfilerConfig* config, OH_HiDebug_ProfilingCallback callback)
```

**Description**

Starts Resource Profiler for the current process asynchronously.The callback is invoked only after profiling stops, including auto-stop caused by the maximum duration.When profiling output is available, the callback carries the output file path. If profiling stops withoutproducing output, the callback is invoked with a NULL file path.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_HiDebug_ResourceType](capi-hidebug-type-h.md#oh_hidebug_resourcetype) type | Type of resource to be profiled. |
| [OH_HiDebug_ResProfilerConfig](capi-hidebug-oh-hidebug-resprofilerconfig.md)* config | Configuration parameters for the profiler. |
| [OH_HiDebug_ProfilingCallback](capi-hidebug-type-h.md#oh_hidebug_profilingcallback) callback | Callback to receive the profiling result. See [OH_HiDebug_ProfilingCallback](capi-hidebug-type-h.md#oh_hidebug_profilingcallback). |

**Returns**:

| Type | Description |
| -- | -- |
| [HiDebug_ErrorCode](capi-hidebug-type-h.md#hidebug_errorcode) | Result code<br>         [HIDEBUG_RES_PROF_SUCCESS](capi-hidebug-type-h.md#hidebug_errorcode) Resource profiler started successfully.<br>         [HIDEBUG_RES_PROF_INVALID_ARG](capi-hidebug-type-h.md#hidebug_errorcode) Invalid resource profiler argument.<br>         [HIDEBUG_RES_PROF_INVALID_MAX_DURATION](capi-hidebug-type-h.md#hidebug_errorcode) Invalid maximum duration.<br>         [HIDEBUG_RES_PROF_INVALID_FILTER_SIZE](capi-hidebug-type-h.md#hidebug_errorcode) Invalid filter size.<br>         [HIDEBUG_RES_PROF_INVALID_MAX_STACK_DEPTH](capi-hidebug-type-h.md#hidebug_errorcode) Invalid maximum stack depth.<br>         [HIDEBUG_RES_PROF_INVALID_STATISTICS_INTERVAL](capi-hidebug-type-h.md#hidebug_errorcode) Invalid statistics interval.<br>         [HIDEBUG_RES_PROF_INVALID_SAMPLE_INTERVAL](capi-hidebug-type-h.md#hidebug_errorcode) Invalid sample interval.<br>         [HIDEBUG_RES_PROF_INVALID_RESOURCE_TYPE](capi-hidebug-type-h.md#hidebug_errorcode) Invalid resource type.<br>         [HIDEBUG_RES_PROF_PERMISSION_DENIED](capi-hidebug-type-h.md#hidebug_errorcode) Resource profiler permission denied.<br>         [HIDEBUG_RES_PROF_ALREADY_STARTED](capi-hidebug-type-h.md#hidebug_errorcode) Resource profiler already started.<br>         [HIDEBUG_RES_PROF_PROCESS_OVERLIMIT](capi-hidebug-type-h.md#hidebug_errorcode) Resource profiler process count exceeds the limit.<br>         [HIDEBUG_RES_PROF_CONFLICT](capi-hidebug-type-h.md#hidebug_errorcode) Resource profiler conflicts with CLI tools or system profiling tasks.<br>         [HIDEBUG_RES_PROF_DAILY_QUOTA_EXCEEDED](capi-hidebug-type-h.md#hidebug_errorcode) Daily quota exceeded during resource profiling.<br>         [HIDEBUG_RES_PROF_CPU_OVERLOADED](capi-hidebug-type-h.md#hidebug_errorcode) System is experiencing high CPU utilization.<br>         [HIDEBUG_RES_PROF_MEM_PRESSURE_CRITICAL](capi-hidebug-type-h.md#hidebug_errorcode) Insufficient available memory.<br>         [HIDEBUG_RES_PROF_STORAGE_PRESSURE_CRITICAL](capi-hidebug-type-h.md#hidebug_errorcode) Insufficient available storage space.<br>         [HIDEBUG_RES_PROF_FAILURE](capi-hidebug-type-h.md#hidebug_errorcode) Failed to start the resource profiler. |

### OH_HiDebug_StopProfiler()

```c
HiDebug_ErrorCode OH_HiDebug_StopProfiler(void)
```

**Description**

Stops resource profiler for the current process. This API can be called after the[OH_HiDebug_StartProfiler](capi-hidebug-h.md#oh_hidebug_startprofiler) API and the call duration must be within the maximum duration.

**Since**: 24

**Returns**:

| Type | Description |
| -- | -- |
| [HiDebug_ErrorCode](capi-hidebug-type-h.md#hidebug_errorcode) | Result code<br>         [HIDEBUG_RES_PROF_SUCCESS](capi-hidebug-type-h.md#hidebug_errorcode) Resource profiler stopped successfully.<br>         [HIDEBUG_RES_PROF_NOT_STARTED](capi-hidebug-type-h.md#hidebug_errorcode) Resource profiler not started.<br>         [HIDEBUG_RES_PROF_FAILURE](capi-hidebug-type-h.md#hidebug_errorcode) Failed to stop the resource profiler. |

### OH_HiDebug_MemDumpListener()

```c
typedef bool (*OH_HiDebug_MemDumpListener)(int32_t fd, OH_HiDebug_MemListenerType tag, bool mayReportToOEM, const char* arg)
```

**Description**

Callback triggered for listening. You can use FDs to write memory data in your app so that you can export thedata using the hidumper command.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| (int32_t fd | FD used to write memory data in the app. |
| [OH_HiDebug_MemListenerType](capi-hidebug-type-h.md#oh_hidebug_memlistenertype) tag | Callback type. You can process the related logic based on the callback type. |
| bool mayReportToOEM | Whether the data will be uploaded to the OEM. If the value is true, the data will be uploadedto the OEM. Pay attention to data privacy and security issues. |
| const char\* arg | Callback argument. You can pass different arguments based on the value of type. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | Whether the operation is successful. |

### OH_HiDebug_RegisterMemDumpListener()

```c
HiDebug_ErrorCode OH_HiDebug_RegisterMemDumpListener(const char* name, OH_HiDebug_MemDumpListener listener)
```

**Description**

Registers a listener triggered when the memory watermark of an app is high or the memory information ismanually exported by hidumper. The third-party app framework or app developer calls back the registered functionto dump the app's internal memory information to hidumper or upload the information to the OME vendor throughcommercial gray release.OH_HiDebug_UnregisterMemDumpListener is used to unregister the listener.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* name | Consumer type ID. |
| [OH_HiDebug_MemDumpListener](capi-hidebug-h.md#oh_hidebug_memdumplistener) listener | Callback triggered for listening. |

**Returns**:

| Type | Description |
| -- | -- |
| [HiDebug_ErrorCode](capi-hidebug-type-h.md#hidebug_errorcode) | Result code.<br> [HIDEBUG_SUCCESS](capi-hidebug-type-h.md#hidebug_errorcode) Operation succeeded.<br> [HIDEBUG_INVALID_ARGUMENT](capi-hidebug-type-h.md#hidebug_errorcode) Invalid argument. |

### OH_HiDebug_UnregisterMemDumpListener()

```c
HiDebug_ErrorCode OH_HiDebug_UnregisterMemDumpListener(const char* name)
```

**Description**

Unregisters a memory dump listener that has been successfully registered.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* name | Consumer type ID. |

**Returns**:

| Type | Description |
| -- | -- |
| [HiDebug_ErrorCode](capi-hidebug-type-h.md#hidebug_errorcode) | Result code.<br> [HIDEBUG_SUCCESS](capi-hidebug-type-h.md#hidebug_errorcode) Operation succeeded.<br> [HIDEBUG_INVALID_ARGUMENT](capi-hidebug-type-h.md#hidebug_errorcode) Invalid argument. |

### OH_HiDebug_AcquireAsyncContext()

```c
uint64_t OH_HiDebug_AcquireAsyncContext()
```

**Description**

Profiler helper interfaces, acquire a AsyncContext for further using.The corresponding unregister function is as follows:OH_HiDebug_ReleaseAsyncContext.

**Since**: 26.0.0

**Returns**:

| Type | Description |
| -- | -- |
| uint64_t | AsyncContext. |

### OH_HiDebug_PushAsyncContext()

```c
void OH_HiDebug_PushAsyncContext(uint64_t ctx)
```

**Description**

Profiler helper interfaces, push AsyncContext to the running context.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| uint64_t ctx | The context acquired by {@link OH_Hidebug_AcquireAsyncContext}. |

### OH_HiDebug_PopAsyncContext()

```c
void OH_HiDebug_PopAsyncContext(uint64_t ctx)
```

**Description**

Profiler helper interfaces, pop AsyncContext from the running context.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| uint64_t ctx | The context acquired by {@link OH_Hidebug_AcquireAsyncContext}. |

### OH_HiDebug_ReleaseAsyncContext()

```c
void OH_HiDebug_ReleaseAsyncContext(uint64_t ctx)
```

**Description**

Profiler helper interfaces, release AsyncContext to system.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| uint64_t ctx | The context acquired by {@link OH_Hidebug_AcquireAsyncContext}. |


