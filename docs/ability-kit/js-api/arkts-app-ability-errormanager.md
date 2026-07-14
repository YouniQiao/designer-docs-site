# @ohos.app.ability.errorManager

The ErrorManager module provides capabilities for registering and unregistering error observers, which are primarily used to listen for errors such as JavaScript crashes and application freezes.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { errorManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [off](arkts-ability-off-f.md#off-1) | Unregisters an error observer. This API uses an asynchronous callback to return the result. This API can only be used in the main thread. If a thread error occurs, an error code is thrown. You are advised to handle it with try-catch logic. |
| [off](arkts-ability-off-f.md#off-2) | Unregisters an error observer. This API uses a promise to return the result. This API can only be used in the main thread. If a thread error occurs, an error code is thrown. You are advised to handle it with try-catch logic. |
| [off](arkts-ability-off-f.md#off-3) | Unregisters an observer for the message processing duration of the main thread. This API can only be used in the main thread. If a thread error occurs, an error code is thrown. You are advised to handle it with try-catch logic. |
| [off](arkts-ability-off-f.md#off-4) | Unregisters an observer for the promise rejection. This API can only be used in the main thread. If a thread error occurs, an error code is thrown. You are advised to handle it with try-catch logic. |
| [off](arkts-ability-off-f.md#off-5) | Unregisters a rejected promise observer. After the deregistration, promise exceptions in the process cannot be listened for. If the observer passed in is not in the observer queue registered via the **on** API, error code 16300004 is thrown. Therefore, you are advised to handle this using **try-catch** logic. |
| [off](arkts-ability-off-f.md#off-6) | Unregisters an observer for the main thread freeze event of the application. This API can only be used in the main thread. If a thread error occurs, an error code is thrown. You are advised to handle it with try-catch logic. If the observer passed in does not match the observer registered via the **on** API, error code 16300004 is thrown. Therefore, you are advised to handle this using **try-catch** logic. |
| [off](arkts-ability-off-f.md#off-7) | Unregisters a global error observer. Once unregistered, global listening cannot be implemented. If the observer passed in is not in the observer queue registered via the **on** API, error code 16300004 is thrown. Therefore, you are advised to handle this using **try-catch** logic. |
| [on](arkts-ability-on-f.md#on-1) | Registers an error observer. Once registered, it can capture JavaScript crashes occurring within the application, which are a type of application crash. When the observer captures such an exception, the application will not exit automatically. You are advised to add a synchronous exit operation after the callback function completes. This API can only be used in the main thread. If a thread error occurs, an error code is thrown. You are advised to handle it with try-catch logic. |
| [on](arkts-ability-on-f.md#on-2) | Registers an observer for the message processing duration of the main thread. After the registration, the execution time of a message processed by the main thread of the application can be captured. This API can only be used in the main thread. If a thread error occurs, an error code is thrown. You are advised to handle it with try-catch logic. |
| [on](arkts-ability-on-f.md#on-3) | Registers an observer for the promise rejection. After the registration, a rejected promise that is not captured in the current thread of the application can be captured. This API can only be used in the main thread. If a thread error occurs, an error code is thrown. You are advised to handle it with try-catch logic. |
| [on](arkts-ability-on-f.md#on-4) | Registers a rejected promise observer with any thread in the process. Once registered, it can capture a rejected promise that is not captured in the current thread of the application. |
| [on](arkts-ability-on-f.md#on-5) | Registers an observer for the main thread freeze event of the application. If the observer is registered multiple times, only the last one takes effect. This API can only be used in the main thread. If a thread error occurs, an error code is thrown. You are advised to handle it with try-catch logic. &gt; **NOTE** &gt; &gt; If the callback function runs for more than 1 second, the &gt; [AppRecovery](arkts-app-ability-apprecovery.md) feature may not work. The execution duration can &gt; be calculated by parsing the time difference between **begin** and **Freeze callback execution completed** in &gt; HiLogs. If the execution duration exceeds 1 second, you can optimize the callback logic by using methods such as &gt; asynchronous processing, reducing operations that block other tasks, and optimizing the data structures to reduce &gt; the execution duration. |
| [on](arkts-ability-on-f.md#on-6) | Registers a global error observer via the **errorManager.on** API within any thread of a process. Once registered, it can capture exceptions occurring in any thread across the entire process. When the observer captures such an exception, the application will not exit automatically. You are advised to add a synchronous exit operation after the callback function completes. |
| [setDefaultErrorHandler](arkts-ability-setdefaulterrorhandler-f.md#setdefaulterrorhandler-1) | Returns the previously registered handler when a JavaScript crash exception occurs. It can only be used in the main thread. If an invalid parameter is passed or the API is called from a child thread, an error code is thrown and **undefined** is returned. You are advised to handle it with try-catch logic. If the API parameter is empty, subsequently registered handlers are not able to establish a connection with previously registered handlers, thereby breaking the chain call mechanism. |
| [setDefaultFreezeObserver](arkts-ability-setdefaultfreezeobserver-f.md#setdefaultfreezeobserver-1) | Set the default freeze observer, This function will be executed right after the callback function registered through errorManager.on is executed. You can use it to implement chain calls instead of errorManager.on. If an empty observer is set for a certain module, it will cause the call chain to be interrupted. This API must be called in the main thread. |
| [setDefaultResourceUsageObserver](arkts-ability-setdefaultresourceusageobserver-f.md#setdefaultresourceusageobserver-1) | Set the default resource usage observer. You can use it to implement chain calls. If an empty observer is set for a certain module, it will cause the call chain to be interrupted. This API must be called on the main thread. |

### Interfaces

| Name | Description |
| --- | --- |
| [GlobalError](arkts-ability-globalerror-i.md) | Describes the object related to the exception event name, message, error stack information, exception thread name, and exception thread type. |

### Enums

| Name | Description |
| --- | --- |
| [InstanceType](arkts-ability-instancetype-e.md) | Enumerates the VM instance types. |
| [ResourceType](arkts-ability-resourcetype-e.md) | Define the resource types of the application. |

### Types

| Name | Description |
| --- | --- |
| [ErrorHandler](arkts-ability-errorhandler-t.md) | The ErrorHandler will be called when the ArkTS runtime throws an exception that is not caught by the user. |
| [ErrorObserver](arkts-ability-errorobserver-t.md) | Defines the ErrorObserver module. |
| [FreezeObserver](arkts-ability-freezeobserver-t.md) | Defines an observer for the main thread freeze event of the application. It is used by the application to customize freeze information. |
| [GlobalObserver](arkts-ability-globalobserver-t.md) | Defines an exception observer that can be used as an input parameter for [errorManager.on('globalErrorOccurred')](arkts-ability-on-f.md#on-6) and [errorManager.on('globalUnhandledRejectionDetected')](arkts-ability-on-f.md#on-4) to monitor event processing on the main thread of the current application. |
| [LoopObserver](arkts-ability-loopobserver-t.md) | Defines the LoopObserver module. It can be used as a parameter of **errormanager.on** to listen for and handle main thread timeout events in the current application. |
| [ResourceUsageObserver](arkts-ability-resourceusageobserver-t.md) | The observer will be called by the system when resource usage exceed threshold. |
| [UnhandledRejectionObserver](arkts-ability-unhandledrejectionobserver-t.md) | Defines an observer to capture the cause of a rejected promise. |

