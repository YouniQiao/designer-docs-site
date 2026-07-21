# @ohos.backgroundTaskManager

The **BackgroundTaskManager** module provides APIs to manage background tasks.

If a service needs to be continued when the application or service module is running in the background (not visible to users), the application or service module can request a transient task to delay the suspension or a continuous task to prevent the suspension.

If an application has a task that needs to be continued when the application is switched to the background and can be completed within a short period of time, the application can request a transient task. For example, if a user chooses to clear junk files in the **Files** application and exits the application, the application can request a transient task to complete the cleanup.

If an application has a service that can be intuitively perceived by users and needs to run in the background for a long period of time (for example, music playback in the background), the application can request a continuous task.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [backgroundTaskManager:backgroundTaskManager](arkts-resourceschedule-backgroundtaskmanager.md)

<!--Device-unnamed-declare namespace backgroundTaskManager--><!--Device-unnamed-declare namespace backgroundTaskManager-End-->

**System capability:** SystemCapability.ResourceSchedule.BackgroundTaskManager.TransientTask

## Summary

### Functions

| Name | Description |
| --- | --- |
| [cancelSuspendDelay](arkts-backgroundtasks-backgroundtaskmanager-cancelsuspenddelay-depr-f.md#cancelsuspenddelay) | Cancels the suspension delay. |
| [getRemainingDelayTime](arkts-backgroundtasks-backgroundtaskmanager-getremainingdelaytime-depr-f.md#getremainingdelaytime) | Obtains the remaining duration before the application is suspended. This API uses an asynchronous callback to return the result. |
| [getRemainingDelayTime](arkts-backgroundtasks-backgroundtaskmanager-getremainingdelaytime-depr-f.md#getremainingdelaytime-1) | Obtains the remaining duration before the application is suspended. This API uses a promise to return the result. |
| [requestSuspendDelay](arkts-backgroundtasks-backgroundtaskmanager-requestsuspenddelay-depr-f.md#requestsuspenddelay) | Requests delayed suspension after the application switches to the background.  The default duration of delayed suspension is 3 minutes when the battery level is higher than or equal to the broadcast low battery level and 1 minute when the battery level is lower than the broadcast low battery level. |
| [startBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-startbackgroundrunning-depr-f.md#startbackgroundrunning) | Requests a continuous task from the system. This API uses an asynchronous callback to return the result. |
| [startBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-startbackgroundrunning-depr-f.md#startbackgroundrunning-1) | Requests a continuous task from the system. This API uses a promise to return the result. |
| [stopBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-stopbackgroundrunning-depr-f.md#stopbackgroundrunning) | Requests to cancel a continuous task. This API uses an asynchronous callback to return the result. |
| [stopBackgroundRunning](arkts-backgroundtasks-backgroundtaskmanager-stopbackgroundrunning-depr-f.md#stopbackgroundrunning-1) | Requests to cancel a continuous task. This API uses a promise to return the result. |

### Interfaces

| Name | Description |
| --- | --- |
| [DelaySuspendInfo](arkts-backgroundtasks-backgroundtaskmanager-delaysuspendinfo-depr-i.md) | Provides the information about the suspension delay. |

### Enums

| Name | Description |
| --- | --- |
| [BackgroundMode](arkts-backgroundtasks-backgroundtaskmanager-backgroundmode-depr-e.md) | Defines the type of a continuous task. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [BackgroundMode](arkts-backgroundtasks-backgroundtaskmanager-backgroundmode-depr-e-sys.md) | Defines the type of a continuous task. |
<!--DelEnd-->

