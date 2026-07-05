# hidebug_type.h

## Overview

Defines the code of the HiDebug module.

**Library**: libohhidebug.so

**System capability**: SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Since**: 12

**Related module**: [HiDebug](capi-hidebug.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [HiDebug_ThreadCpuUsage](capi-hidebug-hidebug-threadcpuusage.md) | HiDebug_ThreadCpuUsage | Defines application cpu usage of all threads structure type. |
| [HiDebug_SystemMemInfo](capi-hidebug-hidebug-systemmeminfo.md) | HiDebug_SystemMemInfo | Defines system memory information structure type. |
| [HiDebug_NativeMemInfo](capi-hidebug-hidebug-nativememinfo.md) | HiDebug_NativeMemInfo | Defines application process native memory information structure type. |
| [HiDebug_MemoryLimit](capi-hidebug-hidebug-memorylimit.md) | HiDebug_MemoryLimit | Defines application process memory limit structure type. |
| [OH_HiDebug_RequestTraceConfig](capi-hidebug-oh-hidebug-requesttraceconfig.md) | OH_HiDebug_RequestTraceConfig | Defines trace request configuration. |
| [HiDebug_MallocDispatch](capi-hidebug-hidebug-mallocdispatch.md) | HiDebug_MallocDispatch | Defines structure type for MallocDispatch table. |
| [HiDebug_JsStackFrame](capi-hidebug-hidebug-jsstackframe.md) | HiDebug_JsStackFrame | Defines Js stack frame content |
| [HiDebug_NativeStackFrame](capi-hidebug-hidebug-nativestackframe.md) | HiDebug_NativeStackFrame | Defines native frame content |
| [HiDebug_StackFrame](capi-hidebug-hidebug-stackframe.md) | HiDebug_StackFrame | Defines Stack Frame content |
| [HiDebug_GraphicsMemorySummary](capi-hidebug-hidebug-graphicsmemorysummary.md) | HiDebug_GraphicsMemorySummary | Defines the graphics memory summary structure type. |
| [HiDebug_ProcessSamplerConfig](capi-hidebug-hidebug-processsamplerconfig.md) | HiDebug_ProcessSamplerConfig | Defines a struct for the process sampler configuration. |
| [OH_HiDebug_ResProfilerConfig](capi-hidebug-oh-hidebug-resprofilerconfig.md) | OH_HiDebug_ResProfilerConfig | Defines a struct for the resource profiler configuration. |
| [OH_HiDebug_ProfilingResult](capi-hidebug-oh-hidebug-profilingresult.md) | OH_HiDebug_ProfilingResult | Encapsulates result of a single profiling request operation.It represents data delivered via OH_HiDebug_ProfilingCallback. |
| [HiDebug_Backtrace_Object__*](capi-hidebug-hidebug-backtrace-object--8h.md) | HiDebug_Backtrace_Object | To represent a backtrace object |
| [HiDebug_ThreadCpuUsage*](capi-hidebug-hidebug-threadcpuusage8h.md) | HiDebug_ThreadCpuUsagePtr | Defines pointer of HiDebug_ThreadCpuUsage. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [HiDebug_ErrorCode](#hidebug_errorcode) | HiDebug_ErrorCode | Defines error code |
| [HiDebug_TraceFlag](#hidebug_traceflag) | HiDebug_TraceFlag | Enum for trace flag. |
| [HiDebug_StackFrameType](#hidebug_stackframetype) | HiDebug_StackFrameType | Enum for stack frame type. |
| [HiDebug_CrashObjType](#hidebug_crashobjtype) | HiDebug_CrashObjType | Types of crash objects for diagnostic information |
| [OH_HiDebug_ResourceType](#oh_hidebug_resourcetype) | OH_HiDebug_ResourceType | Defines an enum for the resource profiler types. |
| [OH_HiDebug_MemListenerType](#oh_hidebug_memlistenertype) | OH_HiDebug_MemListenerType | Defines an enum for memory listener callbacks. |

### Macro

| Name | Description |
| -- | -- |
| HIDEBUG_TRACE_TAG_FFRT (1ULL << 13) | FFRT tasks.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_COMMON_LIBRARY (1ULL << 16) | Common library subsystem tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_HDF (1ULL << 18) | HDF subsystem tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_NET (1ULL << 23) | Net tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_NWEB (1ULL << 24) | NWeb tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_DISTRIBUTED_AUDIO (1ULL << 27) | Distributed audio tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_FILE_MANAGEMENT (1ULL << 29) | File management tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_OHOS (1ULL << 30) | OHOS generic tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_ABILITY_MANAGER (1ULL << 31) | Ability Manager tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_CAMERA (1ULL << 32) | Camera module tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_MEDIA (1ULL << 33) | Media module tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_IMAGE (1ULL << 34) | Image module tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_AUDIO (1ULL << 35) | Audio module tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_DISTRIBUTED_DATA (1ULL << 36) | Distributed data manager module tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_GRAPHICS (1ULL << 38) | Graphics module tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_ARKUI (1ULL << 39) | ARKUI development framework tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_NOTIFICATION (1ULL << 40) | Notification module tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_MISC (1ULL << 41) | MISC module tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_MULTIMODAL_INPUT (1ULL << 42) | Multimodal input module tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_RPC (1ULL << 46) | RPC tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_ARK (1ULL << 47) | ARK tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_WINDOW_MANAGER (1ULL << 48) | Window manager tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_DISTRIBUTED_SCREEN (1ULL << 50) | Distributed screen tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_DISTRIBUTED_CAMERA (1ULL << 51) | Distributed camera tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_DISTRIBUTED_HARDWARE_FRAMEWORK (1ULL << 52) | Distributed hardware framework tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_GLOBAL_RESOURCE_MANAGER (1ULL << 53) | Global resource manager tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_DISTRIBUTED_HARDWARE_DEVICE_MANAGER (1ULL << 54) | Distributed hardware device manager tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_SAMGR (1ULL << 55) | SA tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_POWER_MANAGER (1ULL << 56) | Power manager tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_DISTRIBUTED_SCHEDULER (1ULL << 57) | Distributed scheduler tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_DISTRIBUTED_INPUT (1ULL << 59) | Distributed input tag.<br>**Since**: 12 |
| HIDEBUG_TRACE_TAG_BLUETOOTH (1ULL << 60) | bluetooth tag.<br>**Since**: 12 |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [typedef void (\*OH_HiDebug_RequestTraceCallback)(HiDebug_ErrorCode errorCode, const char* filePath)](#oh_hidebug_requesttracecallback) | OH_HiDebug_RequestTraceCallback | Defines callback type for trace request. |
| [typedef void (\*OH_HiDebug_ProfilingCallback)(OH_HiDebug_ProfilingResult* result)](#oh_hidebug_profilingcallback) | OH_HiDebug_ProfilingCallback | Callback signature for the resource profiling result. |

## Enum type description

### HiDebug_ErrorCode

```c
enum HiDebug_ErrorCode
```

**Description**

Defines error code

**Since**: 12

| Enum item | Description |
| -- | -- |
| HIDEBUG_SUCCESS = 0 | Success |
| HIDEBUG_INVALID_ARGUMENT = 401 | Invalid argument |
| HIDEBUG_TRACE_CAPTURED_ALREADY = 11400102 | Have already capture trace |
| HIDEBUG_NO_PERMISSION = 11400103 | No write permission on the file |
| HIDEBUG_TRACE_ABNORMAL = 11400104 | The status of the trace is abnormal |
| HIDEBUG_NO_TRACE_RUNNING = 11400105 | No trace running |
| OH_HIDEBUG_TRACE_STORAGE_LIMIT = 11400120 |  |
| HIDEBUG_INVALID_SYMBOLIC_PC_ADDRESS = 11400200 |  |
| HIDEBUG_NOT_SUPPORTED = 11400300 |  |
| HIDEBUG_UNDER_SAMPLING = 11400301 |  |
| HIDEBUG_RESOURCE_UNAVAILABLE = 11400302 |  |
| HIDEBUG_RES_PROF_SUCCESS = 11400400 |  |
| HIDEBUG_RES_PROF_INVALID_ARG = 11400410 |  |
| HIDEBUG_RES_PROF_INVALID_MAX_DURATION = 11400411 |  |
| HIDEBUG_RES_PROF_INVALID_FILTER_SIZE = 11400412 |  |
| HIDEBUG_RES_PROF_INVALID_MAX_STACK_DEPTH = 11400413 |  |
| HIDEBUG_RES_PROF_INVALID_STATISTICS_INTERVAL = 11400414 |  |
| HIDEBUG_RES_PROF_INVALID_SAMPLE_INTERVAL = 11400415 |  |
| HIDEBUG_RES_PROF_INVALID_RESOURCE_TYPE = 11400416 |  |
| HIDEBUG_RES_PROF_PERMISSION_DENIED = 11400420 |  |
| HIDEBUG_RES_PROF_ALREADY_STARTED = 11400421 |  |
| HIDEBUG_RES_PROF_NOT_STARTED = 11400422 |  |
| HIDEBUG_RES_PROF_PROCESS_OVERLIMIT = 11400423 |  |
| HIDEBUG_RES_PROF_CONFLICT = 11400424 |  |
| HIDEBUG_RES_PROF_AUTO_STOPPED_BY_DURATION = 11400425 |  |
| HIDEBUG_RES_PROF_DAILY_QUOTA_EXCEEDED = 11400426 |  |
| HIDEBUG_RES_PROF_CPU_OVERLOADED = 11400427 |  |
| HIDEBUG_RES_PROF_MEM_PRESSURE_CRITICAL = 11400428 |  |
| HIDEBUG_RES_PROF_STORAGE_PRESSURE_CRITICAL = 11400429 |  |
| HIDEBUG_RES_PROF_FAILURE = 11400430 |  |

### HiDebug_TraceFlag

```c
enum HiDebug_TraceFlag
```

**Description**

Enum for trace flag.

**Since**: 12

| Enum item | Description |
| -- | -- |
| HIDEBUG_TRACE_FLAG_MAIN_THREAD = 1 | Only capture main thread trace |
| HIDEBUG_TRACE_FLAG_ALL_THREADS = 2 | Capture all thread trace |

### HiDebug_StackFrameType

```c
enum HiDebug_StackFrameType
```

**Description**

Enum for stack frame type.

**Since**: 20

| Enum item | Description |
| -- | -- |
| HIDEBUG_STACK_FRAME_TYPE_JS = 1 | Type of js frame |
| HIDEBUG_STACK_FRAME_TYPE_NATIVE = 2 | Type of native frame |

### HiDebug_CrashObjType

```c
enum HiDebug_CrashObjType
```

**Description**

Types of crash objects for diagnostic information

**Since**: 23

| Enum item | Description |
| -- | -- |
| HIDEBUG_CRASHOBJ_STRING = 0 | Null-terminated string |
| HIDEBUG_CRASHOBJ_MEMORY_64B = 1 | 64-byte memory block |
| HIDEBUG_CRASHOBJ_MEMORY_256B = 2 | 256-byte memory block |
| HIDEBUG_CRASHOBJ_MEMORY_1024B = 3 | 1KB memory block |
| HIDEBUG_CRASHOBJ_MEMORY_2048B = 4 | 2KB memory block |
| HIDEBUG_CRASHOBJ_MEMORY_4096B = 5 | 4KB memory block |

### OH_HiDebug_ResourceType

```c
enum OH_HiDebug_ResourceType
```

**Description**

Defines an enum for the resource profiler types.

**Since**: 24

| Enum item | Description |
| -- | -- |
| OH_RES_TYPE_FD |  |
| OH_RES_TYPE_THREAD |  |
| OH_RES_TYPE_NATIVE |  |
| OH_RES_TYPE_GPU |  |
| OH_RES_TYPE_GLOBAL_HANDLE |  |

### OH_HiDebug_MemListenerType

```c
enum OH_HiDebug_MemListenerType
```

**Description**

Defines an enum for memory listener callbacks.

**Since**: 26.0.0

| Enum item | Description |
| -- | -- |
| OH_HIDEBUG_DO_NOTHING = 0 |  |
| OH_HIDEBUG_RUNNING_GC = 1 |  |
| OH_HIDEBUG_DUMP_SNAPSHOT = 2 |  |


## Function description

### OH_HiDebug_RequestTraceCallback()

```c
typedef void (*OH_HiDebug_RequestTraceCallback)(HiDebug_ErrorCode errorCode, const char* filePath)
```

**Description**

Defines callback type for trace request.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| (HiDebug_ErrorCode errorCode | Result code, see [HiDebug_ErrorCode](capi-hidebug-type-h.md#hidebug_errorcode). |
| const char\* filePath | Path of the generated trace file, may be NULL on failure. |

### OH_HiDebug_ProfilingCallback()

```c
typedef void (*OH_HiDebug_ProfilingCallback)(OH_HiDebug_ProfilingResult* result)
```

**Description**

Callback signature for the resource profiling result.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| (OH_HiDebug_ProfilingResult\* result | Pointer to the OH_HiDebug_ProfilingResult structure. |


