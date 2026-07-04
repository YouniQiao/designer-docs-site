# native_child_process.h

## Overview

Declares the APIs used to create a native child process and establish an IPC channel between the parent andchild processes.

**Library**: libchild_process.so

**System capability**: SystemCapability.Ability.AbilityRuntime.Core

**Since**: 12

**Related module**: [ChildProcess](capi-childprocess.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [NativeChildProcess_Fd](capi-childprocess-nativechildprocess-fd.md) | NativeChildProcess_Fd | The info of the file descriptors passed to child process. |
| [NativeChildProcess_FdList](capi-childprocess-nativechildprocess-fdlist.md) | NativeChildProcess_FdList | The list of the info of the file descriptors passed to child process. |
| [NativeChildProcess_Options](capi-childprocess-nativechildprocess-options.md) | NativeChildProcess_Options | The options used by the child process. |
| [NativeChildProcess_Args](capi-childprocess-nativechildprocess-args.md) | NativeChildProcess_Args | The arguments passed to the child process. |
| [Ability_ChildProcessConfigs](capi-childprocess-ability-childprocessconfigs.md) | Ability_ChildProcessConfigs | Defines a struct for the child process configs. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [Ability_NativeChildProcess_ErrCode](#ability_nativechildprocess_errcode) | Ability_NativeChildProcess_ErrCode | Enumerates the error codes used by the native child process module. |
| [NativeChildProcess_IsolationMode](#nativechildprocess_isolationmode) | NativeChildProcess_IsolationMode | Enumerates the isolation modes used by the native child process module. |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [Ability_ChildProcessConfigs* OH_Ability_CreateChildProcessConfigs()](#oh_ability_createchildprocessconfigs) | - | Creates a new child process configs object.The caller is responsible for destroying the returned object by calling[OH_Ability_DestroyChildProcessConfigs](capi-native-child-process-h.md#oh_ability_destroychildprocessconfigs) to avoid memory leaks. |
| [Ability_NativeChildProcess_ErrCode OH_Ability_DestroyChildProcessConfigs(Ability_ChildProcessConfigs* configs)](#oh_ability_destroychildprocessconfigs) | - | Destroys a child process configs object and releases associated resources. |
| [Ability_NativeChildProcess_ErrCode OH_Ability_ChildProcessConfigs_SetIsolationMode(Ability_ChildProcessConfigs* configs, NativeChildProcess_IsolationMode isolationMode)](#oh_ability_childprocessconfigs_setisolationmode) | - | Sets the isolation mode for the specified child process configs. |
| [Ability_NativeChildProcess_ErrCode OH_Ability_ChildProcessConfigs_SetIsolationUid(Ability_ChildProcessConfigs* configs, bool isolationUid)](#oh_ability_childprocessconfigs_setisolationuid) | - | Sets the UID isolation flag for the specified child process configs.The isolationUid only takes effect when [OH_Ability_ChildProcessConfigs_SetIsolationMode](capi-native-child-process-h.md#oh_ability_childprocessconfigs_setisolationmode)is set to [NCP_ISOLATION_MODE_ISOLATED](capi-native-child-process-h.md#nativechildprocess_isolationmode). |
| [Ability_NativeChildProcess_ErrCode OH_Ability_ChildProcessConfigs_SetProcessName(Ability_ChildProcessConfigs* configs, const char* processName)](#oh_ability_childprocessconfigs_setprocessname) | - | Sets the process name for the specified child process configs. |
| [typedef void (\*OH_Ability_OnNativeChildProcessStarted)(int errCode, OHIPCRemoteProxy *remoteProxy)](#oh_ability_onnativechildprocessstarted) | OH_Ability_OnNativeChildProcessStarted | Defines a callback function for notifying the child process startup result. |
| [int OH_Ability_CreateNativeChildProcess(const char* libName, OH_Ability_OnNativeChildProcessStarted onProcessStarted)](#oh_ability_createnativechildprocess) | - | Creates a child process, loads the specified dynamic library file, and returns the startup resultasynchronously through a callback parameter.The callback notification is an independent thread. When implementing the callback function,pay attention to thread synchronization and do not perform time-consuming operations to avoid long-time blocking.The dynamic library specified must implement and export the following functions:<br>   1. OHIPCRemoteStub* NativeChildProcess_OnConnect()<br>   2. void NativeChildProcess_MainProc()<br> The processing logic sequence is shown in the following pseudocode: <br>   Main process: <br>     1. OH_Ability_CreateNativeChildProcess(libName, onProcessStartedCallback)<br>   Child process: <br>     2. dlopen(libName)<br>     3. dlsym("NativeChildProcess_OnConnect")<br>     4. dlsym("NativeChildProcess_MainProc")<br>     5. ipcRemote = NativeChildProcess_OnConnect()<br>     6. NativeChildProcess_MainProc()<br> Main process: <br>     7. onProcessStartedCallback(ipcRemote, errCode)<br> Child process: <br>     8. The child process exits after the NativeChildProcess_MainProc() function is returned. <br> |
| [Ability_NativeChildProcess_ErrCode OH_Ability_CreateNativeChildProcessWithConfigs(const char* libName, Ability_ChildProcessConfigs* configs, OH_Ability_OnNativeChildProcessStarted onProcessStarted)](#oh_ability_createnativechildprocesswithconfigs) | - | Creates a child process, loads the specified dynamic library file, and returns the startup resultasynchronously through a callback parameter.The callback notification is an independent thread. When implementing the callback function,pay attention to thread synchronization and do not perform time-consuming operations to avoid long-time blocking.The dynamic library specified must implement and export the following functions:1. OHIPCRemoteStub* NativeChildProcess_OnConnect()2. void NativeChildProcess_MainProc()The processing logic sequence is shown in the following pseudocode: Main process: 1. OH_Ability_CreateNativeChildProcessWithConfigs(libName, configs, onProcessStartedCallback)Child process: 2. dlopen(libName)3. dlsym("NativeChildProcess_OnConnect")4. dlsym("NativeChildProcess_MainProc")5. ipcRemote = NativeChildProcess_OnConnect()6. NativeChildProcess_MainProc()Main process: 7. onProcessStartedCallback(ipcRemote, errCode)Child process: 8. The child process exits after the NativeChildProcess_MainProc() function is returned. |
| [Ability_NativeChildProcess_ErrCode OH_Ability_StartNativeChildProcess(const char* entry, NativeChildProcess_Args args, NativeChildProcess_Options options, int32_t *pid)](#oh_ability_startnativechildprocess) | - | Starts a child process, loads the specified dynamic library file.The dynamic library specified must implement a function with NativeChildProcess_Args as apamameter(function name can be customized), and export the function, such as:<br>   1. void Main(NativeChildProcess_Args args);The processing logic sequence is shown in the following pseudocode: <br>   Main process: <br>     1. OH_Ability_StartNativeChildProcess(entryPoint, args, options)<br>   Child process: <br>     2. dlopen(libName)<br>     3. dlsym("Main")<br>     4. Main(args)<br>     5. The child process exits after the Main(args) function is returned <br> |
| [Ability_NativeChildProcess_ErrCode OH_Ability_StartNativeChildProcessWithConfigs(const char* entry, NativeChildProcess_Args args, Ability_ChildProcessConfigs* configs, int32_t *pid)](#oh_ability_startnativechildprocesswithconfigs) | - | Starts a child process, loads the specified dynamic library file.The dynamic library specified must implement a function with NativeChildProcess_Args as apamameter(function name can be customized), and export the function, such as:1. void Main(NativeChildProcess_Args args);The processing logic sequence is shown in the following pseudocode: Main process: 1. OH_Ability_StartNativeChildProcessWithConfigs(entryPoint, args, configs, &pid)Child process: 2. dlopen(libName)3. dlsym("Main")4. Main(args)5. The child process exits after the Main(args) function is returned |
| [NativeChildProcess_Args* OH_Ability_GetCurrentChildProcessArgs()](#oh_ability_getcurrentchildprocessargs) | - | Child process get self NativeChildProcess_Args. |
| [typedef void (\*OH_Ability_OnNativeChildProcessExit)(int32_t pid, int32_t signal)](#oh_ability_onnativechildprocessexit) | OH_Ability_OnNativeChildProcessExit | Defines a callback function to handle the exit of a native child process. |
| [Ability_NativeChildProcess_ErrCode OH_Ability_RegisterNativeChildProcessExitCallback(OH_Ability_OnNativeChildProcessExit onProcessExit)](#oh_ability_registernativechildprocessexitcallback) | - | Register a native child process exit callback.Registering the same callback repeatedly will only keep one. |
| [Ability_NativeChildProcess_ErrCode OH_Ability_UnregisterNativeChildProcessExitCallback(OH_Ability_OnNativeChildProcessExit onProcessExit)](#oh_ability_unregisternativechildprocessexitcallback) | - | Unregister a native child process exit callback. |
| [Ability_NativeChildProcess_ErrCode OH_Ability_KillChildProcess(int32_t pid)](#oh_ability_killchildprocess) | - | Terminates a child process created by the current process.<p>**NOTE**:<br>Child processes created in SELF_FORK mode cannot be terminated.</p> |
| [bool OH_Ability_IsNativeChildProcessSupported()](#oh_ability_isnativechildprocesssupported) | - | Check whether the caller is allowed to use native process capabilities. |

## Enum type description

### Ability_NativeChildProcess_ErrCode

```c
enum Ability_NativeChildProcess_ErrCode
```

**Description**

Enumerates the error codes used by the native child process module.

**Since**: 12

| Enum item | Description |
| -- | -- |
| NCP_NO_ERROR = 0 | Operation successful. |
| NCP_ERR_INVALID_PARAM = 401 | Invalid parameter. |
| NCP_ERR_NOT_SUPPORTED = 801 | Creating a native child process is not supported. |
| NCP_ERR_INTERNAL = 16000050 | Internal error. |
| NCP_ERR_BUSY = 16010001 | A new child process cannot be created during the startup of another native child process.You can try again after the child process is started. |
| NCP_ERR_TIMEOUT = 16010002 | Starting the native child process times out. |
| NCP_ERR_SERVICE_ERROR = 16010003 | Server error. |
| NCP_ERR_MULTI_PROCESS_DISABLED = 16010004 | The multi-process mode is disabled. A child process cannot be started. |
| NCP_ERR_ALREADY_IN_CHILD = 16010005 | A process cannot be created in a child process. |
| NCP_ERR_MAX_CHILD_PROCESSES_REACHED = 16010006 | The number of native child processes reaches the maximum. |
| NCP_ERR_LIB_LOADING_FAILED = 16010007 | The child process fails to load the dynamic library because the file does not existor the corresponding method is not implemented or exported. |
| NCP_ERR_CONNECTION_FAILED = 16010008 | The child process fails to call the OnConnect method of the dynamic library.An invalid IPC object pointer may be returned. |
| NCP_ERR_CALLBACK_NOT_EXIST = 16010009 |  The callback does not exist; it may not have been registered or has already been unregistered.<br>**Since**: 20 |
| NCP_ERR_INVALID_PID = 16010010 |  The specified PID does not exist or is not a child process of the current processor is a SELF_FORK mode child process.<br>**Since**: 22 |

### NativeChildProcess_IsolationMode

```c
enum NativeChildProcess_IsolationMode
```

**Description**

Enumerates the isolation modes used by the native child process module.

**Since**: 13

| Enum item | Description |
| -- | -- |
| NCP_ISOLATION_MODE_NORMAL = 0 | Normal isolation mode, parent process shares the same sandbox or internet with the child process. |
| NCP_ISOLATION_MODE_ISOLATED = 1 | Isolated mode, parent process does not share the same sandbox or internet with the child process. |


## Function description

### OH_Ability_CreateChildProcessConfigs()

```c
Ability_ChildProcessConfigs* OH_Ability_CreateChildProcessConfigs()
```

**Description**

Creates a new child process configs object.The caller is responsible for destroying the returned object by calling[OH_Ability_DestroyChildProcessConfigs](capi-native-child-process-h.md#oh_ability_destroychildprocessconfigs) to avoid memory leaks.

**Since**: 20

**Returns**:

| Type | Description |
| -- | -- |
| [Ability_ChildProcessConfigs*](capi-childprocess-ability-childprocessconfigs.md) | Returns a pointer to the newly created [Ability_ChildProcessConfigs](capi-childprocess-ability-childprocessconfigs.md) object if successful.<br>         Returns nullptr if an internal error occurs or memory allocation fails. |

### OH_Ability_DestroyChildProcessConfigs()

```c
Ability_NativeChildProcess_ErrCode OH_Ability_DestroyChildProcessConfigs(Ability_ChildProcessConfigs* configs)
```

**Description**

Destroys a child process configs object and releases associated resources.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [Ability_ChildProcessConfigs](capi-childprocess-ability-childprocessconfigs.md)* configs | Pointer to the child process configs object to be destroyed.After this call, the pointer becomes invalid and must not be used.Passing nullptr is allowed and will be ignored. |

**Returns**:

| Type | Description |
| -- | -- |
| [Ability_NativeChildProcess_ErrCode](capi-native-child-process-h.md#ability_nativechildprocess_errcode) | Returns [NCP_NO_ERROR](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the operation is successful or if the input is nullptr.<br>         Returns [NCP_ERR_INVALID_PARAM](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the input parameters are invalid. |

### OH_Ability_ChildProcessConfigs_SetIsolationMode()

```c
Ability_NativeChildProcess_ErrCode OH_Ability_ChildProcessConfigs_SetIsolationMode(Ability_ChildProcessConfigs* configs, NativeChildProcess_IsolationMode isolationMode)
```

**Description**

Sets the isolation mode for the specified child process configs.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [Ability_ChildProcessConfigs](capi-childprocess-ability-childprocessconfigs.md)* configs | Pointer to the child process configs object. Must not be nullptr. |
| [NativeChildProcess_IsolationMode](capi-native-child-process-h.md#nativechildprocess_isolationmode) isolationMode | The isolation mode to set. See [NativeChildProcess_IsolationMode](capi-native-child-process-h.md#nativechildprocess_isolationmode) for details. |

**Returns**:

| Type | Description |
| -- | -- |
| [Ability_NativeChildProcess_ErrCode](capi-native-child-process-h.md#ability_nativechildprocess_errcode) | Returns [NCP_NO_ERROR](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the isolation mode is set successfully.<br>         Returns [NCP_ERR_INVALID_PARAM](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the input parameters are invalid. |

### OH_Ability_ChildProcessConfigs_SetIsolationUid()

```c
Ability_NativeChildProcess_ErrCode OH_Ability_ChildProcessConfigs_SetIsolationUid(Ability_ChildProcessConfigs* configs, bool isolationUid)
```

**Description**

Sets the UID isolation flag for the specified child process configs.The isolationUid only takes effect when [OH_Ability_ChildProcessConfigs_SetIsolationMode](capi-native-child-process-h.md#oh_ability_childprocessconfigs_setisolationmode)is set to [NCP_ISOLATION_MODE_ISOLATED](capi-native-child-process-h.md#nativechildprocess_isolationmode).

**Since**: 21

**Parameters**:

| Parameter | Description |
| -- | -- |
| [Ability_ChildProcessConfigs](capi-childprocess-ability-childprocessconfigs.md)* configs | Pointer to the child process configs object. Must not be nullptr. |
| bool isolationUid | The UID isolation setting to apply.- true: uses independent UID- false: uses parent process's UID |

**Returns**:

| Type | Description |
| -- | -- |
| [Ability_NativeChildProcess_ErrCode](capi-native-child-process-h.md#ability_nativechildprocess_errcode) | Returns [NCP_NO_ERROR](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the UID isolation flag is set successfully.<br>         Returns [NCP_ERR_INVALID_PARAM](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the input parameters are invalid. |

### OH_Ability_ChildProcessConfigs_SetProcessName()

```c
Ability_NativeChildProcess_ErrCode OH_Ability_ChildProcessConfigs_SetProcessName(Ability_ChildProcessConfigs* configs, const char* processName)
```

**Description**

Sets the process name for the specified child process configs.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [Ability_ChildProcessConfigs](capi-childprocess-ability-childprocessconfigs.md)* configs | Pointer to the child process configs object. Must not be nullptr. |
| const char* processName | The process name to set.Must be a non-empty string containing only letters, digits, or underscores.Maximum length is 64 characters.The name ultimately assigned to the process is {bundleName}:{processName}. |

**Returns**:

| Type | Description |
| -- | -- |
| [Ability_NativeChildProcess_ErrCode](capi-native-child-process-h.md#ability_nativechildprocess_errcode) | Returns [NCP_NO_ERROR](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the process name is set successfully.<br>         Returns [NCP_ERR_INVALID_PARAM](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the input parameters are invalid. |

### OH_Ability_OnNativeChildProcessStarted()

```c
typedef void (*OH_Ability_OnNativeChildProcessStarted)(int errCode, OHIPCRemoteProxy *remoteProxy)
```

**Description**

Defines a callback function for notifying the child process startup result.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (int errCode | Error code corresponding to the callback function. The following values are available:[NCP_NO_ERROR](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the child process is created successfully.<br> [NCP_ERR_LIB_LOADING_FAILED](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if loading the dynamic library file fails or the necessary export functionis not implemented in the dynamic library.<br> [NCP_ERR_CONNECTION_FAILED](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the OnConnect method implemented in the dynamic library does not returna valid IPC stub pointer.<br> For details, see [Ability_NativeChildProcess_ErrCode](capi-native-child-process-h.md#ability_nativechildprocess_errcode). |
| [OHIPCRemoteProxy](../IPCKit/capi-ohipcparcel-ohipcremoteproxy.md) \*remoteProxy | Pointer to the IPC object of the child process. If an exception occurs, the value may be nullptr.The object must be released by calling {@link OH_IPCRemoteProxy_Destory} when it is no longer needed. |

**Reference**:

[OH_Ability_CreateNativeChildProcess](capi-native-child-process-h.md#oh_ability_createnativechildprocess)
OH_IPCRemoteProxy_Destory


### OH_Ability_CreateNativeChildProcess()

```c
int OH_Ability_CreateNativeChildProcess(const char* libName, OH_Ability_OnNativeChildProcessStarted onProcessStarted)
```

**Description**

Creates a child process, loads the specified dynamic library file, and returns the startup resultasynchronously through a callback parameter.The callback notification is an independent thread. When implementing the callback function,pay attention to thread synchronization and do not perform time-consuming operations to avoid long-time blocking.The dynamic library specified must implement and export the following functions:<br>   1. OHIPCRemoteStub* NativeChildProcess_OnConnect()<br>   2. void NativeChildProcess_MainProc()<br> The processing logic sequence is shown in the following pseudocode: <br>   Main process: <br>     1. OH_Ability_CreateNativeChildProcess(libName, onProcessStartedCallback)<br>   Child process: <br>     2. dlopen(libName)<br>     3. dlsym("NativeChildProcess_OnConnect")<br>     4. dlsym("NativeChildProcess_MainProc")<br>     5. ipcRemote = NativeChildProcess_OnConnect()<br>     6. NativeChildProcess_MainProc()<br> Main process: <br>     7. onProcessStartedCallback(ipcRemote, errCode)<br> Child process: <br>     8. The child process exits after the NativeChildProcess_MainProc() function is returned. <br>

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* libName | Name of the dynamic library file loaded in the child process. The value cannot be nullptr. |
| [OH_Ability_OnNativeChildProcessStarted](capi-native-child-process-h.md#oh_ability_onnativechildprocessstarted) onProcessStarted | Pointer to the callback function for notifying the child process startup result.The value cannot be nullptr. For details, see [OH_Ability_OnNativeChildProcessStarted](capi-native-child-process-h.md#oh_ability_onnativechildprocessstarted). |

**Returns**:

| Type | Description |
| -- | -- |
| int | Returns [NCP_NO_ERROR](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the call is successful, but the actual startup result is notified by the<br> callback function.<br> Returns [NCP_ERR_INVALID_PARAM](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the dynamic library name or callback function pointer is invalid.<br> Returns [NCP_ERR_NOT_SUPPORTED](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the device does not support the creation of native child processes.<br> Returns [NCP_ERR_MULTI_PROCESS_DISABLED](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the multi-process mode is disabled on the device.<br> Returns [NCP_ERR_ALREADY_IN_CHILD](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if it is not allowed to create another child process in the child process.<br> Returns [NCP_ERR_MAX_CHILD_PROCESSES_REACHED](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the maximum number of native child processes is reached.<br> For details, see [Ability_NativeChildProcess_ErrCode](capi-native-child-process-h.md#ability_nativechildprocess_errcode). |

**Reference**:

[OH_Ability_OnNativeChildProcessStarted](capi-native-child-process-h.md#oh_ability_onnativechildprocessstarted)


### OH_Ability_CreateNativeChildProcessWithConfigs()

```c
Ability_NativeChildProcess_ErrCode OH_Ability_CreateNativeChildProcessWithConfigs(const char* libName, Ability_ChildProcessConfigs* configs, OH_Ability_OnNativeChildProcessStarted onProcessStarted)
```

**Description**

Creates a child process, loads the specified dynamic library file, and returns the startup resultasynchronously through a callback parameter.The callback notification is an independent thread. When implementing the callback function,pay attention to thread synchronization and do not perform time-consuming operations to avoid long-time blocking.The dynamic library specified must implement and export the following functions:1. OHIPCRemoteStub* NativeChildProcess_OnConnect()2. void NativeChildProcess_MainProc()The processing logic sequence is shown in the following pseudocode: Main process: 1. OH_Ability_CreateNativeChildProcessWithConfigs(libName, configs, onProcessStartedCallback)Child process: 2. dlopen(libName)3. dlsym("NativeChildProcess_OnConnect")4. dlsym("NativeChildProcess_MainProc")5. ipcRemote = NativeChildProcess_OnConnect()6. NativeChildProcess_MainProc()Main process: 7. onProcessStartedCallback(ipcRemote, errCode)Child process: 8. The child process exits after the NativeChildProcess_MainProc() function is returned.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* libName | Name of the dynamic library file loaded in the child process. The value cannot be nullptr. |
| [Ability_ChildProcessConfigs](capi-childprocess-ability-childprocessconfigs.md)* configs | Pointer to the child process configs object. The value cannot be nullptr. |
| [OH_Ability_OnNativeChildProcessStarted](capi-native-child-process-h.md#oh_ability_onnativechildprocessstarted) onProcessStarted | Pointer to the callback function for notifying the child process startup result.The value cannot be nullptr. For details, see [OH_Ability_OnNativeChildProcessStarted](capi-native-child-process-h.md#oh_ability_onnativechildprocessstarted). |

**Returns**:

| Type | Description |
| -- | -- |
| [Ability_NativeChildProcess_ErrCode](capi-native-child-process-h.md#ability_nativechildprocess_errcode) | Returns [NCP_NO_ERROR](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the call is successful, but the actual startup result is notified by the<br> callback function.<br> Returns [NCP_ERR_INVALID_PARAM](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the dynamic library name or callback function pointer is invalid.<br> Returns [NCP_ERR_NOT_SUPPORTED](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the device does not support the creation of native child processes.<br> Returns [NCP_ERR_MULTI_PROCESS_DISABLED](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the multi-process mode is disabled on the device.<br> Returns [NCP_ERR_ALREADY_IN_CHILD](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if it is not allowed to create another child process in the child process.<br> Returns [NCP_ERR_MAX_CHILD_PROCESSES_REACHED](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the maximum number of native child processes is reached.<br> For details, see [Ability_NativeChildProcess_ErrCode](capi-native-child-process-h.md#ability_nativechildprocess_errcode). |

**Reference**:

[OH_Ability_OnNativeChildProcessStarted](capi-native-child-process-h.md#oh_ability_onnativechildprocessstarted)


### OH_Ability_StartNativeChildProcess()

```c
Ability_NativeChildProcess_ErrCode OH_Ability_StartNativeChildProcess(const char* entry, NativeChildProcess_Args args, NativeChildProcess_Options options, int32_t *pid)
```

**Description**

Starts a child process, loads the specified dynamic library file.The dynamic library specified must implement a function with NativeChildProcess_Args as apamameter(function name can be customized), and export the function, such as:<br>   1. void Main(NativeChildProcess_Args args);The processing logic sequence is shown in the following pseudocode: <br>   Main process: <br>     1. OH_Ability_StartNativeChildProcess(entryPoint, args, options)<br>   Child process: <br>     2. dlopen(libName)<br>     3. dlsym("Main")<br>     4. Main(args)<br>     5. The child process exits after the Main(args) function is returned <br>

**Since**: 13

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* entry | Dynamic library and entry function loaded in child process, such as "libEntry.so:Main".The value cannot be nullptr. |
| [NativeChildProcess_Args](capi-childprocess-nativechildprocess-args.md) args | The arguments passed to the child process.For details, see [NativeChildProcess_Args](capi-childprocess-nativechildprocess-args.md). |
| [NativeChildProcess_Options](capi-childprocess-nativechildprocess-options.md) options | The child process options.For details, see [NativeChildProcess_Options](capi-childprocess-nativechildprocess-options.md). |
| int32_t *pid | The started child process id. |

**Returns**:

| Type | Description |
| -- | -- |
| [Ability_NativeChildProcess_ErrCode](capi-native-child-process-h.md#ability_nativechildprocess_errcode) | Returns [NCP_NO_ERROR](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the call is successful.<br> Returns [NCP_ERR_INVALID_PARAM](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the dynamic library name or callback function pointer is invalid.<br> Returns [NCP_ERR_NOT_SUPPORTED](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the device does not support the creation of native child processes.<br> Returns [NCP_ERR_ALREADY_IN_CHILD](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if it is not allowed to create another child process in the child process.<br> Returns [NCP_ERR_MAX_CHILD_PROCESSES_REACHED](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the maximum number of native child processes is reached.<br> For details, see [Ability_NativeChildProcess_ErrCode](capi-native-child-process-h.md#ability_nativechildprocess_errcode). |

**Reference**:

[OH_Ability_OnNativeChildProcessStarted](capi-native-child-process-h.md#oh_ability_onnativechildprocessstarted)


### OH_Ability_StartNativeChildProcessWithConfigs()

```c
Ability_NativeChildProcess_ErrCode OH_Ability_StartNativeChildProcessWithConfigs(const char* entry, NativeChildProcess_Args args, Ability_ChildProcessConfigs* configs, int32_t *pid)
```

**Description**

Starts a child process, loads the specified dynamic library file.The dynamic library specified must implement a function with NativeChildProcess_Args as apamameter(function name can be customized), and export the function, such as:1. void Main(NativeChildProcess_Args args);The processing logic sequence is shown in the following pseudocode: Main process: 1. OH_Ability_StartNativeChildProcessWithConfigs(entryPoint, args, configs, &pid)Child process: 2. dlopen(libName)3. dlsym("Main")4. Main(args)5. The child process exits after the Main(args) function is returned

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* entry | Dynamic library and entry function loaded in child process, such as "libEntry.so:Main".The value cannot be nullptr. |
| [NativeChildProcess_Args](capi-childprocess-nativechildprocess-args.md) args | The arguments passed to the child process.For details, see [NativeChildProcess_Args](capi-childprocess-nativechildprocess-args.md). |
| [Ability_ChildProcessConfigs](capi-childprocess-ability-childprocessconfigs.md)* configs | Pointer to the child process configs object. The value cannot be null.For details, see [Ability_ChildProcessConfigs](capi-childprocess-ability-childprocessconfigs.md). |
| int32_t *pid | The started child process id. |

**Returns**:

| Type | Description |
| -- | -- |
| [Ability_NativeChildProcess_ErrCode](capi-native-child-process-h.md#ability_nativechildprocess_errcode) | Returns [NCP_NO_ERROR](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the call is successful.<br> Returns [NCP_ERR_INVALID_PARAM](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the dynamic library name or callback function pointer is invalid.<br> Returns [NCP_ERR_NOT_SUPPORTED](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the device does not support the creation of native child processes.<br> Returns [NCP_ERR_ALREADY_IN_CHILD](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if it is not allowed to create another child process in the child process.<br> Returns [NCP_ERR_MAX_CHILD_PROCESSES_REACHED](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the maximum number of native child processes is reached.<br> For details, see [Ability_NativeChildProcess_ErrCode](capi-native-child-process-h.md#ability_nativechildprocess_errcode). |

### OH_Ability_GetCurrentChildProcessArgs()

```c
NativeChildProcess_Args* OH_Ability_GetCurrentChildProcessArgs()
```

**Description**

Child process get self NativeChildProcess_Args.

**Since**: 17

**Returns**:

| Type | Description |
| -- | -- |
| [NativeChildProcess_Args*](capi-childprocess-nativechildprocess-args.md) | Returns a pointer to the arguments passed to current child process.<br> For details, see [NativeChildProcess_Args](capi-childprocess-nativechildprocess-args.md). |

### OH_Ability_OnNativeChildProcessExit()

```c
typedef void (*OH_Ability_OnNativeChildProcessExit)(int32_t pid, int32_t signal)
```

**Description**

Defines a callback function to handle the exit of a native child process.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| (int32_t pid | The pid of the exited native child process. |
| int32_t signal | The signal of the exited native child process. |

### OH_Ability_RegisterNativeChildProcessExitCallback()

```c
Ability_NativeChildProcess_ErrCode OH_Ability_RegisterNativeChildProcessExitCallback(OH_Ability_OnNativeChildProcessExit onProcessExit)
```

**Description**

Register a native child process exit callback.Registering the same callback repeatedly will only keep one.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Ability_OnNativeChildProcessExit](capi-native-child-process-h.md#oh_ability_onnativechildprocessexit) onProcessExit | Pointer to the callback function to handle the exit of a native child process.For details, see [OH_Ability_OnNativeChildProcessExit](capi-native-child-process-h.md#oh_ability_onnativechildprocessexit). |

**Returns**:

| Type | Description |
| -- | -- |
| [Ability_NativeChildProcess_ErrCode](capi-native-child-process-h.md#ability_nativechildprocess_errcode) | Returns [NCP_NO_ERROR](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the call is successful.<br>         Returns [NCP_ERR_INVALID_PARAM](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the param is invalid.<br>         Returns [NCP_ERR_INTERNAL](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if internal error occurs.<br>         For details, see [Ability_NativeChildProcess_ErrCode](capi-native-child-process-h.md#ability_nativechildprocess_errcode). |

### OH_Ability_UnregisterNativeChildProcessExitCallback()

```c
Ability_NativeChildProcess_ErrCode OH_Ability_UnregisterNativeChildProcessExitCallback(OH_Ability_OnNativeChildProcessExit onProcessExit)
```

**Description**

Unregister a native child process exit callback.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_Ability_OnNativeChildProcessExit](capi-native-child-process-h.md#oh_ability_onnativechildprocessexit) onProcessExit | Pointer to the callback function to handle the exit of a native child process.For details, see [OH_Ability_OnNativeChildProcessExit](capi-native-child-process-h.md#oh_ability_onnativechildprocessexit). |

**Returns**:

| Type | Description |
| -- | -- |
| [Ability_NativeChildProcess_ErrCode](capi-native-child-process-h.md#ability_nativechildprocess_errcode) | Returns [NCP_NO_ERROR](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the call is successful.<br>         Returns [NCP_ERR_INTERNAL](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if internal error occurs.<br>         Returns [NCP_ERR_CALLBACK_NOT_EXIST](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the callback is not exist.<br>         For details, see [Ability_NativeChildProcess_ErrCode](capi-native-child-process-h.md#ability_nativechildprocess_errcode). |

### OH_Ability_KillChildProcess()

```c
Ability_NativeChildProcess_ErrCode OH_Ability_KillChildProcess(int32_t pid)
```

**Description**

Terminates a child process created by the current process.<p>**NOTE**:<br>Child processes created in SELF_FORK mode cannot be terminated.</p>

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| int32_t pid | Process ID of the target child process to terminate. |

**Returns**:

| Type | Description |
| -- | -- |
| [Ability_NativeChildProcess_ErrCode](capi-native-child-process-h.md#ability_nativechildprocess_errcode) | Returns [NCP_NO_ERROR](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if the operation succeeds.<br>         Returns [NCP_ERR_SERVICE_ERROR](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if system service error occurs, please try again later.<br>         Returns [NCP_ERR_INVALID_PID](capi-native-child-process-h.md#ability_nativechildprocess_errcode) if:<br>           - The specified PID does not exist<br>           - The PID is not a child process of the current process<br>           - The PID is a SELF_FORK mode child process<br>         For details, see [Ability_NativeChildProcess_ErrCode](capi-native-child-process-h.md#ability_nativechildprocess_errcode). |

### OH_Ability_IsNativeChildProcessSupported()

```c
bool OH_Ability_IsNativeChildProcessSupported()
```

**Description**

Check whether the caller is allowed to use native process capabilities.

**Since**: 26.0.0

**Returns**:

| Type | Description |
| -- | -- |
| bool | true if the caller is allowed to create native child processes, false otherwise. |


