# @ohos.resourceschedule.backgroundTaskManager

The **backgroundTaskManager** module provides APIs to request background tasks. You can use the APIs to request transient tasks, continuous tasks, or efficiency resources to prevent the application process from being terminated or suspended when your application is switched to the background. For details, see [Continuous Task](../../../task-management/continuous-task.md) and [Transient Task](../../../task-management/transient-task.md).

**Since:** 9

<!--Device-unnamed-declare namespace backgroundTaskManager--><!--Device-unnamed-declare namespace backgroundTaskManager-End-->

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.ContinuousTask

## Modules to Import

```TypeScript
import { backgroundTaskManager } from '@kit.BackgroundTasksKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [cancelSuspendDelay](arkts-backgroundtasks-backgroundtaskmanager-cancelsuspenddelay-f.md#cancelsuspenddelay) | Cancels a transient task. |
| [getAllContinuousTasks](arkts-backgroundtasks-backgroundtaskmanager-getallcontinuoustasks-f.md#getallcontinuoustasks) | Obtains all continuous task information, including the task ID and type. This API uses a promise to return the result. |
| [getAllContinuousTasks](arkts-backgroundtasks-backgroundtaskmanager-getallcontinuoustasks-f.md#getallcontinuoustasks-1) | Obtains all continuous task information, including the task ID and type. It supports specifying whether to include suspended tasks and uses a promise to return the result. |
| [getRemainingDelayTime](arkts-backgroundtasks-backgroundtaskmanager-getremainingdelaytime-f.md#getremainingdelaytime) | Obtains the remaining time of a transient task. This API uses an asynchronous callback to return the result. |
| [getRemainingDelayTime](arkts-backgroundtasks-backgroundtaskmanager-getremainingdelaytime-f.md#getremainingdelaytime-1) | Obtains the remaining time of a transient task. This API uses a promise to return the result. |
| [getTransientTaskInfo](arkts-backgroundtasks-backgroundtaskmanager-gettransienttaskinfo-f.md#gettransienttaskinfo) | Obtains all transient task information, including the remaining quota of the current day. This API uses a promise to return the result. |
| [off](arkts-backgroundtasks-backgroundtaskmanager-off-f.md#off) | Unsubscribes from continuous task cancellation events. This API uses an asynchronous callback to return the result. |
| [off](arkts-backgroundtasks-backgroundtaskmanager-off-f.md#off-1) | Unregisters from the listener for continuous task suspension. This API uses an asynchronous callback to return the result. |
| [off](arkts-backgroundtasks-backgroundtaskmanager-off-f.md#off-2) | Unregisters from the listener for continuous task activation. This API uses an asynchronous callback to return the result. |
| [on](arkts-backgroundtasks-backgroundtaskmanager-on-f.md#on) | Subscribes to continuous task cancellation events. This API uses an asynchronous callback to return the result. |
| [on](arkts-backgroundtasks-backgroundtaskmanager-on-f.md#on-1) | Registers a listener for continuous task suspension. This API uses an asynchronous callback to return the result.After the callback is registered, if the system detects for the first time that the application does not execute the corresponding service, the system does not directly cancel the continuous task. Instead, it will mark the task as suspended. If the detection failures persist, the system will cancel the continuous task.  When a continuous task is suspended, the application will be suspended when switched to the background and automatically activated when brought back to the foreground. |
| [on](arkts-backgroundtasks-backgroundtaskmanager-on-f.md#on-2) | Registers a listener for continuous task activation. This API uses an asynchronous callback to return the result.The application returns to the foreground to activate the suspended continuous task. |
| [requestSuspendDelay](arkts-backgroundtasks-backgroundtaskmanager-requestsuspenddelay-f.md#requestsuspenddelay) | Requests a transient task. |
| [startBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-startbackgroundrunning-f.md#startbackgroundrunning) | Requests a continuous task of a specific type. This API uses an asynchronous callback to return the result. After a continuous task is successfully requested, there will be a notification message without prompt tone. A UIAbility (ServiceAbility in the FA model) can request only one continuous task at a time through this API. You can request multiple continuous tasks by calling [startBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-startbackgroundrunning-f.md#startbackgroundrunning)added in API version 21. |
| [startBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-startbackgroundrunning-f.md#startbackgroundrunning-1) | Requests a continuous task of a specific type. This API uses a promise to return the result. After a continuous task is successfully requested, there will be a notification message without prompt tone. A UIAbility (ServiceAbility in the FA model) can request only one continuous task at a time through this API. You can request multiple continuous tasks by calling [startBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-startbackgroundrunning-f.md#startbackgroundrunning)added in API version 21. |
| [startBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-startbackgroundrunning-f.md#startbackgroundrunning-2) | Requests continuous tasks of multiple types. This API uses a promise to return the result. After a continuous task is successfully requested, there will be a notification message without prompt tone. A UIAbility (ServiceAbility in the FA model) can request only one continuous task at a time through this API. You can request multiple continuous tasks by calling [startBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-startbackgroundrunning-f.md#startbackgroundrunning)added in API version 21. |
| [startBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-startbackgroundrunning-f.md#startbackgroundrunning-3) | Requests a continuous task. This API allows a UIAbility (ServiceAbility in the FA model) to request multiple continuous tasks and uses a promise to return the result. When using this API to request a continuous task, its notification can be combined with that of an existing continuous task. For details, see [ContinuousTaskRequest](arkts-backgroundtasks-backgroundtaskmanager-continuoustaskrequest-c.md).  A maximum of 10 continuous tasks can be created simultaneously. Upon successful creation of a continuous task, a notification will be sent without a prompt tone.  If a continuous task requested via this API includes multiple task types (including data transmission tasks), two notifications will appear in the notification panel: one for the data transmission task and the other for the remaining tasks. Removing either notification will cancel the continuous task and remove the other notification.The continuous task notification ID returned by the API is the ID of the data transmission type, which is used to update the data transmission progress. |
| [stopBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-stopbackgroundrunning-f.md#stopbackgroundrunning) | Cancels all continuous tasks in the current UIAbility (ServiceAbility in the FA model). This API uses an asynchronous callback to return the result. You can also call the [stopBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-stopbackgroundrunning-f.md#stopbackgroundrunning)API to cancel a continuous task with the specified ID. |
| [stopBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-stopbackgroundrunning-f.md#stopbackgroundrunning-1) | Cancels all continuous tasks in the current UIAbility (ServiceAbility in the FA model). This API uses a promise to return the result. You can also call the [stopBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-stopbackgroundrunning-f.md#stopbackgroundrunning)API to cancel a continuous task with the specified ID. |
| [stopBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-stopbackgroundrunning-f.md#stopbackgroundrunning-2) | Cancels a continuous task with the specified ID. This API uses a promise to return the result. You can also call the [stopBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-stopbackgroundrunning-f.md#stopbackgroundrunning)API to cancel all continuous tasks in the current UIAbility. |
| [updateBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-updatebackgroundrunning-f.md#updatebackgroundrunning) | Updates continuous tasks of multiple types. This API uses a promise to return the result. After a continuous task is successfully updated, there will be a notification message without prompt tone.  Before updating a continuous task, you can call [getAllContinuousTasks](arkts-backgroundtasks-backgroundtaskmanager-getallcontinuoustasks-f.md#getallcontinuoustasks) to retrieve information about all existing continuous tasks. If there are no continuous tasks, the update will fail.  This API can only be used to update continuous tasks that were requested via the following APIs:  [startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent, callback: AsyncCallback&lt;void&gt;): void](arkts-backgroundtasks-backgroundtaskmanager-startbackgroundrunning-f.md#startbackgroundrunning)  [startBackgroundRunning(context: Context, bgMode: BackgroundMode, wantAgent: WantAgent): Promise&lt;void&gt;](arkts-backgroundtasks-backgroundtaskmanager-startbackgroundrunning-f.md#startbackgroundrunning)  [startBackgroundRunning(context: Context, bgModes: string[], wantAgent: WantAgent): Promise&lt;ContinuousTaskNotification&gt;]{@link backgroundTaskManager.startBackgroundRunning(context: Context, bgModes: string[], wantAgent: WantAgent)} |
| [updateBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-updatebackgroundrunning-f.md#updatebackgroundrunning-1) | Updates a continuous task. This API uses a promise to return the result. After a continuous task is successfully updated, there will be a notification message without prompt tone.  The following restrictions apply when updating a continuous task:  1. This API can only update continuous tasks requested via [startBackgroundRunning(context: Context, request: ContinuousTaskRequest): Promise&lt;ContinuousTaskNotification&gt;](arkts-backgroundtasks-backgroundtaskmanager-startbackgroundrunning-f.md#startbackgroundrunning).2. If the main type and subtype of the background tasks are the same,only the wants information (such as **abilityName**) in **ContinuousTaskRequest.wantAgent** can be updated.If the types are different, the update fails.3. If the continuous task to be updated or the specified update type contains the data transmission type,a failure message is returned. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [applyEfficiencyResources](arkts-backgroundtasks-backgroundtaskmanager-applyefficiencyresources-f-sys.md#applyefficiencyresources) | Requests efficiency resources. |
| [getAllEfficiencyResources](arkts-backgroundtasks-backgroundtaskmanager-getallefficiencyresources-f-sys.md#getallefficiencyresources) | Obtains all information about the requested efficiency resources, including the resource type. This API uses a promise to return the result. |
| [getBackgroundTaskState](arkts-backgroundtasks-backgroundtaskmanager-getbackgroundtaskstate-f-sys.md#getbackgroundtaskstate) | Obtains the authorization information of a continuous task. |
| [obtainAllContinuousTasks](arkts-backgroundtasks-backgroundtaskmanager-obtainallcontinuoustasks-f-sys.md#obtainallcontinuoustasks) | Obtains all continuous task information, including the task ID and type. This API uses a promise to return the result. |
| [resetAllEfficiencyResources](arkts-backgroundtasks-backgroundtaskmanager-resetallefficiencyresources-f-sys.md#resetallefficiencyresources) | Releases all efficiency resources. |
| [setBackgroundTaskState](arkts-backgroundtasks-backgroundtaskmanager-setbackgroundtaskstate-f-sys.md#setbackgroundtaskstate) | Sets the authorization information of a continuous task. |
| [subscribeContinuousTaskState](arkts-backgroundtasks-backgroundtaskmanager-subscribecontinuoustaskstate-f-sys.md#subscribecontinuoustaskstate) | Registers a callback to listen for the continuous task change events. |
| [unsubscribeContinuousTaskState](arkts-backgroundtasks-backgroundtaskmanager-unsubscribecontinuoustaskstate-f-sys.md#unsubscribecontinuoustaskstate) | Unregisters the callback for continuous task changes. |
<!--DelEnd-->

### Classes

| Name | Description |
| --- | --- |
| [ContinuousTaskRequest](arkts-backgroundtasks-backgroundtaskmanager-continuoustaskrequest-c.md) | Specifies details of the continuous task being requested or updated. It is typically used as input for the [startBackgroundRunning()](arkts-backgroundtasks-backgroundtaskmanager-startbackgroundrunning-f.md#startbackgroundrunning)and [updateBackgroundRunning()](arkts-backgroundtasks-backgroundtaskmanager-updatebackgroundrunning-f.md#updatebackgroundrunning)APIs. Note that:  1. When requesting a continuous task via [startBackgroundRunning()](arkts-backgroundtasks-backgroundtaskmanager-startbackgroundrunning-f.md#startbackgroundrunning),notifications will be combined if the main type and subtype of the continuous task to be requested are the same as those of the existing continuous task in the current application,and the **combinedTaskNotification** value is **true** for both tasks.Otherwise, notifications will not be combined.2. Notifications will not be combined if the continuous task has no notification.For details about whether notifications are sent for the continuous task,see [BackgroundTaskMode](arkts-backgroundtasks-backgroundtaskmanager-backgroundtaskmode-e.md).3. Notifications cannot be combined if the continuous task includes data transmission.4. Notifications that have been combined cannot be canceled.If notifications have been combined, they cannot be updated to uncombined.5. After notifications are combined, tapping the notification will redirect to the UIAbility corresponding to the first requested continuous task.If the update API is called,the redirection will target the UIAbility corresponding to the last updated continuous task.6. When the [updateBackgroundRunning()](arkts-backgroundtasks-backgroundtaskmanager-updatebackgroundrunning-f.md#updatebackgroundrunning)API is called to update a continuous task, the input **continuousTaskId** must exist. Otherwise, the update fails.7. Continuous tasks of the [MODE_SPECIAL_SCENARIO_PROCESSING](arkts-backgroundtasks-backgroundtaskmanager-backgroundtaskmode-e.md) type are supported since API version 22. This task type must be used independently and notifications cannot be combined.Specifically, when you request or update a continuous task,it must be of the **MODE_SPECIAL_SCENARIO_PROCESSING** type.Otherwise, an error is returned. |

### Interfaces

| Name | Description |
| --- | --- |
| [ContinuousTaskActiveInfo](arkts-backgroundtasks-backgroundtaskmanager-continuoustaskactiveinfo-i.md) | Describes the activation information of a continuous task. |
| [ContinuousTaskCancelInfo](arkts-backgroundtasks-backgroundtaskmanager-continuoustaskcancelinfo-i.md) | Describes the information about the cancellation of a continuous task. |
| [ContinuousTaskInfo](arkts-backgroundtasks-backgroundtaskmanager-continuoustaskinfo-i.md) | Describes the continuous task information. |
| [ContinuousTaskNotification](arkts-backgroundtasks-backgroundtaskmanager-continuoustasknotification-i.md) | Describes the information about a continuous-task notification. |
| [ContinuousTaskSuspendInfo](arkts-backgroundtasks-backgroundtaskmanager-continuoustasksuspendinfo-i.md) | Describes the information about a suspended continuous task. |
| [DelaySuspendInfo](arkts-backgroundtasks-backgroundtaskmanager-delaysuspendinfo-i.md) | Defines the information about the transient task. |
| [SuspendMessage](arkts-backgroundtasks-backgroundtaskmanager-suspendmessage-i.md) | Describes the reason why a continuous task is suspended. |
| [TransientTaskInfo](arkts-backgroundtasks-backgroundtaskmanager-transienttaskinfo-i.md) | Describes all transient task information. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [BackgroundTaskStateInfo](arkts-backgroundtasks-backgroundtaskmanager-backgroundtaskstateinfo-i-sys.md) | Defines the authorization information of a continuous task. |
| [BackgroundTaskSubscriber](arkts-backgroundtasks-backgroundtaskmanager-backgroundtasksubscriber-i-sys.md) | Represents a listener object used to listen for background task state changes. |
| [EfficiencyResourcesInfo](arkts-backgroundtasks-backgroundtaskmanager-efficiencyresourcesinfo-i-sys.md) | Defines the efficiency resource information. |
| [EfficiencyResourcesRequest](arkts-backgroundtasks-backgroundtaskmanager-efficiencyresourcesrequest-i-sys.md) | Describes the parameters for requesting efficiency resources. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [BackgroundMode](arkts-backgroundtasks-backgroundtaskmanager-backgroundmode-e.md) | Defines the type of a continuous task. |
| [BackgroundModeType](arkts-backgroundtasks-backgroundtaskmanager-backgroundmodetype-e.md) | Defines the type of a continuous task. |
| [BackgroundSubMode](arkts-backgroundtasks-backgroundtaskmanager-backgroundsubmode-e.md) | Defines the subtype of a continuous task. |
| [BackgroundTaskMode](arkts-backgroundtasks-backgroundtaskmanager-backgroundtaskmode-e.md) | Main type of a continuous task. It is usually used together with the subtype [BackgroundTaskSubmode](arkts-backgroundtasks-backgroundtaskmanager-backgroundtasksubmode-e.md). For details, see the mapping table. The two types are newly added in API version 21 for [requesting](arkts-backgroundtasks-backgroundtaskmanager-startbackgroundrunning-f.md#startbackgroundrunning)and [updating](arkts-backgroundtasks-backgroundtaskmanager-updatebackgroundrunning-f.md#updatebackgroundrunning)continuous tasks.  When the main type of the continuous task is **MODE_SPECIAL_SCENARIO_PROCESSING**, or that of a non-PC/2-in-1device is **MODE_TASK_KEEPING**, you need to request the ACL permission [ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM](../../../security/AccessToken/restricted-permissions.md#ohospermissionkeep_background_running_system)before calling APIs related to continuous tasks. In other scenarios, this permission is not required. |
| [BackgroundTaskSubmode](arkts-backgroundtasks-backgroundtaskmanager-backgroundtasksubmode-e.md) | Defines the subtype of a continuous task. It is usually used together with the main type [BackgroundTaskMode](arkts-backgroundtasks-backgroundtaskmanager-backgroundtaskmode-e.md). For details, see the mapping table. The two types are newly added in API version 21 for requesting and updating continuous tasks. |
| [ContinuousTaskCancelReason](arkts-backgroundtasks-backgroundtaskmanager-continuoustaskcancelreason-e.md) | Describes the reason for canceling a continuous task. |
| [ContinuousTaskDetailedCancelReason](arkts-backgroundtasks-backgroundtaskmanager-continuoustaskdetailedcancelreason-e.md) | Describes the detailed reason for canceling a continuous task. |
| [ContinuousTaskSuspendReason](arkts-backgroundtasks-backgroundtaskmanager-continuoustasksuspendreason-e.md) | Describes the reason why a continuous task is suspended. |
| [UserAuthResult](arkts-backgroundtasks-backgroundtaskmanager-userauthresult-e.md) | Represents the user authorization result. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [BackgroundMode](arkts-backgroundtasks-backgroundtaskmanager-backgroundmode-e-sys.md) | Defines the type of a continuous task. |
| [BackgroundTaskMode](arkts-backgroundtasks-backgroundtaskmanager-backgroundtaskmode-e-sys.md) | Main type of a continuous task. It is usually used together with the subtype [BackgroundTaskSubmode](arkts-backgroundtasks-backgroundtaskmanager-backgroundtasksubmode-e.md). For details, see the mapping table. The two types are newly added in API version 21 for [requesting](arkts-backgroundtasks-backgroundtaskmanager-startbackgroundrunning-f.md#startbackgroundrunning)and [updating](arkts-backgroundtasks-backgroundtaskmanager-updatebackgroundrunning-f.md#updatebackgroundrunning)continuous tasks.  When the main type of the continuous task is **MODE_SPECIAL_SCENARIO_PROCESSING**, or that of a non-PC/2-in-1device is **MODE_TASK_KEEPING**, you need to request the ACL permission [ohos.permission.KEEP_BACKGROUND_RUNNING_SYSTEM](../../../security/AccessToken/restricted-permissions.md#ohospermissionkeep_background_running_system)before calling APIs related to continuous tasks. In other scenarios, this permission is not required. |
| [EfficiencyResourcesCpuLevel](arkts-backgroundtasks-backgroundtaskmanager-efficiencyresourcescpulevel-e-sys.md) | Defines the CPU level of the efficiency resource. |
| [ResourceType](arkts-backgroundtasks-backgroundtaskmanager-resourcetype-e-sys.md) | Enumerates the efficiency resource types. |
<!--DelEnd-->

