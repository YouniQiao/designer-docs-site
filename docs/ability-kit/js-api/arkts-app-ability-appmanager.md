# @ohos.app.ability.appManager

The appManager module implements application management. You can use the APIs of this module to query whether the application is undergoing a stability test, whether the application is running on a RAM constrained device, the memory size of the application, and information about the running process.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { appManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAppMemorySize](arkts-ability-getappmemorysize-f.md#getappmemorysize-1) | Obtains the maximum memory (RAM allocation) available to the current application. This API uses a promise to return the result. |
| [getAppMemorySize](arkts-ability-getappmemorysize-f.md#getappmemorysize-2) | Obtains the maximum memory (RAM allocation) available to the current application. This API uses an asynchronous callback to return the result. |
| [getRunningProcessInformation](arkts-ability-getrunningprocessinformation-f.md#getrunningprocessinformation-1) | Obtains information about the running processes of the current application. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; - In versions earlier than API version 11, this API requires the ohos.permission.GET_RUNNING_INFO permission, &gt; which is available only for system applications. &gt; &gt; - Starting from API version 11, this API is used only to obtain the process information of the caller. No &gt; permission is required. |
| [getRunningProcessInformation](arkts-ability-getrunningprocessinformation-f.md#getrunningprocessinformation-2) | Obtains information about the running processes of the current application. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; - In versions earlier than API version 11, this API requires the ohos.permission.GET_RUNNING_INFO permission, &gt; which is available only for system applications. &gt; &gt; - Starting from API version 11, this API is used only to obtain the process information of the caller. No &gt; permission is required. |
| [isAppRunning](arkts-ability-isapprunning-f.md#isapprunning-1) | Checks whether the application with the specified bundle name and application clone index is running across all users. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; If the application is not installed for the current user, error code 16000073 is returned. If the application is &gt; installed for the current user, the system checks whether the application is running across all users. |
| [isRamConstrainedDevice](arkts-ability-isramconstraineddevice-f.md#isramconstraineddevice-1) | Checks whether the current device is a RAM-constrained device (a device with severely limited memory resources). This API uses a promise to return the result. |
| [isRamConstrainedDevice](arkts-ability-isramconstraineddevice-f.md#isramconstraineddevice-2) | Checks whether the current device is a RAM-constrained device (a device with severely limited memory resources). This API uses an asynchronous callback to return the result. |
| [isRunningInStabilityTest](arkts-ability-isrunninginstabilitytest-f.md#isrunninginstabilitytest-1) | Checks whether the system is undergoing a stability test. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; A stability test scenario refers to a specific testing environment designed to verify application reliability &gt; under complex, extreme, or long-term operating conditions. |
| [isRunningInStabilityTest](arkts-ability-isrunninginstabilitytest-f.md#isrunninginstabilitytest-2) | Checks whether the system is undergoing a stability test. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; A stability test scenario refers to a specific testing environment designed to verify application reliability &gt; under complex, extreme, or long-term operating conditions. |
| [killProcessesByBundleName](arkts-ability-killprocessesbybundlename-f.md#killprocessesbybundlename-2) | Kills a process by bundle name. This API uses a promise to return the result. |
| [off](arkts-ability-off-f.md#off-1) | Unregisters the observer used to listen for application state changes. This API uses an asynchronous callback to return the result. |
| [off](arkts-ability-off-f.md#off-2) | Unregisters the observer used to listen for application state changes. This API uses a promise to return the result. |
| [on](arkts-ability-on-f.md#on-1) | Registers an observer to listen for lifecycle changes of all applications. |
| [on](arkts-ability-on-f.md#on-2) | Registers an observer to listen for lifecycle changes of the specified application. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [clearUpAppData](arkts-ability-clearupappdata-f-sys.md#clearupappdata-1) | Clears data of a specified application based on the bundle name and application clone index. This API uses a promise to return the result. |
| [clearUpApplicationData](arkts-ability-clearupapplicationdata-f-sys.md#clearupapplicationdata-1) | Clears application data by bundle name. This API uses a promise to return the result. |
| [clearUpApplicationData](arkts-ability-clearupapplicationdata-f-sys.md#clearupapplicationdata-2) | Clears application data by bundle name. This API uses an asynchronous callback to return the result. |
| [getForegroundApplications](arkts-ability-getforegroundapplications-f-sys.md#getforegroundapplications-1) | Obtains applications that are running in the foreground. The application information is defined by [AppStateData](arkts-ability-appstatedata-c.md). This API uses an asynchronous callback to return the result. |
| [getForegroundApplications](arkts-ability-getforegroundapplications-f-sys.md#getforegroundapplications-2) | Obtains applications that are running in the foreground. The application information is defined by [AppStateData](arkts-ability-appstatedata-c.md). This API uses a promise to return the result. |
| [getKeepAliveAppServiceExtensions](arkts-ability-getkeepaliveappserviceextensions-f-sys.md#getkeepaliveappserviceextensions-1) | Obtains information about all AppServiceExtensionAbility components that are kept alive. The information is defined by [KeepAliveBundleInfo](arkts-ability-keepalivebundleinfo-i-sys.md). This API uses a promise to return the result. This API can be properly called on PCs/2-in-1 devices. If it is called on other devices, error code 801 is returned. |
| [getKeepAliveBundles](arkts-ability-getkeepalivebundles-f-sys.md#getkeepalivebundles-1) | Obtains information about a specified type of keep-alive application of a user. The application information is defined by [KeepAliveBundleInfo](arkts-ability-keepalivebundleinfo-i-sys.md). This API uses a promise to return the result. This API can be properly called on PCs/2-in-1 devices. If it is called on other devices, error code 801 is returned. **Required permissions**: ohos.permission.MANAGE_APP_KEEP_ALIVE |
| [getProcessMemoryByPid](arkts-ability-getprocessmemorybypid-f-sys.md#getprocessmemorybypid-1) | Obtains the memory size of a process. This API uses a promise to return the result. |
| [getProcessMemoryByPid](arkts-ability-getprocessmemorybypid-f-sys.md#getprocessmemorybypid-2) | Obtains the memory size of a process. This API uses an asynchronous callback to return the result. |
| [getProcessRunningInfos](arkts-ability-getprocessrunninginfos-f-sys.md#getprocessrunninginfos-1) | Obtains information about the running processes of the current application. This API uses a promise to return the result. |
| [getProcessRunningInfos](arkts-ability-getprocessrunninginfos-f-sys.md#getprocessrunninginfos-2) | Obtains information about the running processes of the current application. This API uses an asynchronous callback to return the result. |
| [getRunningMultiAppInfo](arkts-ability-getrunningmultiappinfo-f-sys.md#getrunningmultiappinfo-1) | Obtains the information about running applications in multi-app mode. The multi-app mode means that an application can be simultaneously logged in with different accounts on the same device. This API uses a promise to return the result. |
| [getRunningProcessInfoByBundleName](arkts-ability-getrunningprocessinfobybundlename-f-sys.md#getrunningprocessinfobybundlename-1) | Obtains information about the running processes by bundle name. This API uses an asynchronous callback to return the result. |
| [getRunningProcessInfoByBundleName](arkts-ability-getrunningprocessinfobybundlename-f-sys.md#getrunningprocessinfobybundlename-2) | Obtains information about the running processes by bundle name and user ID. This API uses an asynchronous callback to return the result. |
| [getRunningProcessInfoByBundleName](arkts-ability-getrunningprocessinfobybundlename-f-sys.md#getrunningprocessinfobybundlename-3) | Obtains information about the running processes by bundle name. This API uses a promise to return the result. |
| [getRunningProcessInfoByBundleName](arkts-ability-getrunningprocessinfobybundlename-f-sys.md#getrunningprocessinfobybundlename-4) | Obtains information about the running processes by bundle name and user ID. This API uses a promise to return the result. |
| [getRunningProcessInformationByBundleType](arkts-ability-getrunningprocessinformationbybundletype-f-sys.md#getrunningprocessinformationbybundletype-1) | Obtains the information about the running process based on the bundle type. This API uses a promise to return the result. |
| [getSupportedProcessCachePids](arkts-ability-getsupportedprocesscachepids-f-sys.md#getsupportedprocesscachepids-1) | Obtains the PIDs of processes that support quick startup after caching in a specified application. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; This API can only be used to obtain the PIDs of the system account to which the caller belongs. |
| [isApplicationRunning](arkts-ability-isapplicationrunning-f-sys.md#isapplicationrunning-1) | Checks whether the application with the specified bundle name is running across all users. This API uses a promise to return the result. |
| [isApplicationRunning](arkts-ability-isapplicationrunning-f-sys.md#isapplicationrunning-2) | Checks whether the application with the specified bundle name is running across all users. This API uses an asynchronous callback to return the result. |
| [isSharedBundleRunning](arkts-ability-issharedbundlerunning-f-sys.md#issharedbundlerunning-1) | Checks whether the shared library is in use. This API uses a promise to return the result. |
| [isSharedBundleRunning](arkts-ability-issharedbundlerunning-f-sys.md#issharedbundlerunning-2) | Checks whether the shared library is in use. This API uses an asynchronous callback to return the result. |
| [killProcessWithAccount](arkts-ability-killprocesswithaccount-f-sys.md#killprocesswithaccount-1) | Kills a process by bundle name and account ID. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; The ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permission is not required when **accountId** specifies the &gt; current user. |
| [killProcessWithAccount](arkts-ability-killprocesswithaccount-f-sys.md#killprocesswithaccount-2) | Kills a process by bundle name and account ID. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; The ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permission is not required when **accountId** specifies the &gt; current user. |
| [killProcessWithAccount](arkts-ability-killprocesswithaccount-f-sys.md#killprocesswithaccount-3) | Kills a process by bundle name and account ID. This API uses an asynchronous callback to return the result. &gt; **NOTE** &gt; &gt; The ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permission is not required when **accountId** specifies the &gt; current user. |
| [killProcessesByBundleName](arkts-ability-killprocessesbybundlename-f-sys.md#killprocessesbybundlename-1) | Kills a process by bundle name. This API uses a promise to return the result. |
| [killProcessesByBundleName](arkts-ability-killprocessesbybundlename-f-sys.md#killprocessesbybundlename-3) | Kills a process by bundle name. This API uses an asynchronous callback to return the result. |
| [killProcessesInBatch](arkts-ability-killprocessesinbatch-f-sys.md#killprocessesinbatch-1) | Kills processes in batches. This API uses a promise to return the result. This API can be properly called on PCs/2-in-1 devices. If it is called on other devices, error code 801 is returned. **Required permissions**: ohos.permission.KILL_APP_PROCESSES |
| [off](arkts-ability-off-f-sys.md#off-3) | Unregisters the observer used to listen for application start or exit events. |
| [off](arkts-ability-off-f-sys.md#off-4) | Deregisters the observer used to listen for the complete of the first frame rendering of a given ability. |
| [on](arkts-ability-on-f-sys.md#on-3) | Registers an application state observer, which allows you to filter for specific application lifecycle changes by setting filter criteria. |
| [on](arkts-ability-on-f-sys.md#on-4) | Registers an observer to listen for application start or exit events. The observer can be used by a system application to observe the start or event events of all applications. |
| [on](arkts-ability-on-f-sys.md#on-5) | Registers an observer to listen for the complete of the first frame rendering of a given ability. |
| [preloadApplication](arkts-ability-preloadapplication-f-sys.md#preloadapplication-1) | Preloads an application process. A successful call does not always mean that the preloading is successful. In other words, the target application process may not be created even if the API is successfully called. This API uses a promise to return the result. |
| [setKeepAliveForAppServiceExtension](arkts-ability-setkeepaliveforappserviceextension-f-sys.md#setkeepaliveforappserviceextension-1) | Sets or cancels the keep-alive status for an AppServiceExtensionAbility. This API uses a promise to return the result. This API can be properly called on PCs/2-in-1 devices. If it is called on other devices, error code 801 is returned. &gt; **NOTE** &gt; &gt; - This API takes effect only when the application is installed under the user with **userId** of 1 and the &gt; **mainElement** field in the **module.json5** file of the entry HAP is set to **AppServiceExtensionAbility**. |
| [setKeepAliveForBundle](arkts-ability-setkeepaliveforbundle-f-sys.md#setkeepaliveforbundle-1) | Sets or cancels the keep-alive status for an application that belongs to a specified user. This API uses a promise to return the result. Starting from API version 18, this API can be properly called only on 2-in-1 devices and wearables. For versions earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is called on other device types, error code 801 is returned. &gt; **NOTE** &gt; &gt; - To support keep-alive, **mainElement** in the &gt; [module.json5](../../../../quick-start/module-configuration-file.md) file of the application must be a UIAbility. &gt; The system initiates the keep-alive operation only when this mainElement has been launched. &gt; &gt; - On 2-in-1 devices, the application must appear in the status bar within 5 seconds of launch. Otherwise, the &gt; system revokes the application's keep-alive status and terminate the restarted process. &gt; &gt; - When the kept-alive application process exits, the system attempts to restart it. If three consecutive restart &gt; attempts fail, the system stops restarting the process. |
| [terminateMission](arkts-ability-terminatemission-f-sys.md#terminatemission-1) | Terminates a mission. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AppStateFilter](arkts-ability-appstatefilter-i-sys.md) | Describes the filter for application lifecycle change events. It can be used as a parameter of [on](arkts-ability-on-f-sys.md#on-3) to filter application lifecycle change events you want to listen for. |
| [KeepAliveBundleInfo](arkts-ability-keepalivebundleinfo-i-sys.md) | Describes the keep-alive application information, which can be obtained by calling [getKeepAliveBundles](arkts-ability-getkeepalivebundles-f-sys.md#getkeepalivebundles-1) or [getKeepAliveAppServiceExtensions](arkts-ability-getkeepaliveappserviceextensions-f-sys.md#getkeepaliveappserviceextensions-1). |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [ProcessState](arkts-ability-processstate-e.md) | Enumerates the processes states. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ApplicationState](arkts-ability-applicationstate-e-sys.md) | Enumerates the application states. This enum can be used together with [AbilityStateData](arkts-ability-abilitystatedata-c.md) to return the application state. |
| [FilterAbilityStateType](arkts-ability-filterabilitystatetype-e-sys.md) | Enumerates the types of ability states to filter. It can be used with [AppStateFilter](arkts-ability-appstatefilter-i-sys.md) to filter the ability state types you want to listen for. |
| [FilterAppStateType](arkts-ability-filterappstatetype-e-sys.md) | Enumerates the types of application states to filter. It can be used with [AppStateFilter](arkts-ability-appstatefilter-i-sys.md) to filter the application state types you want to listen for. |
| [FilterBundleType](arkts-ability-filterbundletype-e-sys.md) | Enumerates the types of applications to filter. It can be used with [AppStateFilter](arkts-ability-appstatefilter-i-sys.md) to filter the application types you want to listen for. |
| [FilterCallback](arkts-ability-filtercallback-e-sys.md) | Enumerates the callbacks to filter. It can be used with [AppStateFilter](arkts-ability-appstatefilter-i-sys.md) to filter the callbacks you want to listen for. |
| [FilterProcessStateType](arkts-ability-filterprocessstatetype-e-sys.md) | Enumerates the types of process states to filter. It can be used with [AppStateFilter](arkts-ability-appstatefilter-i-sys.md) to filter the process state types you want to listen for. |
| [KeepAliveAppType](arkts-ability-keepaliveapptype-e-sys.md) | Enumerates the types of applications to be kept alive. |
| [KeepAliveSetter](arkts-ability-keepalivesetter-e-sys.md) | Enumerates the types of parties that set to keep applications alive. |
| [PreloadMode](arkts-ability-preloadmode-e-sys.md) | Enumerates the modes used for preloading an application process. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [AbilityStateData](arkts-ability-abilitystatedata-t.md) | Defines the ability state data. |
| [AppStateData](arkts-ability-appstatedata-t.md) | Defines the application state data. |
| [ApplicationStateObserver](arkts-ability-applicationstateobserver-t.md) | Defines the observer used to listen for application state changes. |
| [ProcessData](arkts-ability-processdata-t.md) | Defines the process data. |
| [ProcessInformation](arkts-ability-processinformation-t.md) | Defines the process information. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [AbilityFirstFrameStateData](arkts-ability-abilityfirstframestatedata-t-sys.md) | Defines the data structure reported when the first frame rendering of the UIAbility is complete. |
| [AbilityFirstFrameStateObserver](arkts-ability-abilityfirstframestateobserver-t-sys.md) | Defines the listener for the completion of the first frame rendering of the UIAbility. |
| [AppForegroundStateObserver](arkts-ability-appforegroundstateobserver-t-sys.md) | Defines the listener for the state of application launch and exit. |
| [RunningMultiAppInfo](arkts-ability-runningmultiappinfo-t-sys.md) | Defines the information of an application in multi-app mode in the running state. |
<!--DelEnd-->

