# agent

The request agent api. Supports "background" and "frontend" tasks as while. Though "background" and "frontend" here do not the same with process's concept. All tasks will be executed at request manager service and recorded. Background tasks is for concurrent transfer, such as caching videos for a later play. Frontend tasks is for instant transfer, such as submitting forms for a consumption bill. Background tasks use notification to tell user tasks' status information. Frontend tasks use callback to tell caller tasks' status information. Background has some automatically restore mechanism. Frontend tasks controlled by caller. Uses `multipart/form-data` in client request for upload. A `Content-Disposition: attachment; filename=<filename>` response from server leads to download. More details, please see the architecture documents of the request subsystem. Only front-end mode is supported in cross-platform scenarios.

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## Modules to Import

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [create](arkts-basicservices-create-f.md#create-1) | Creates an upload or download task and adds it to the queue. This API uses an asynchronous callback to return the result. HTTP/HTTPS is supported. &gt; **NOTE** &gt; &gt; For details about how to obtain the context in the example, see &gt; [Obtaining the Context of UIAbility](../../../../application-models/uiability-usage.md#obtaining-the-context-of-uiability) &gt; . |
| [create](arkts-basicservices-create-f.md#create-2) | Creates an upload or download task and adds it to the queue. This API uses a promise to return the result. HTTP/ HTTPS is supported. &gt; **NOTE** &gt; &gt; For details about how to obtain the context in the example, see &gt; [Obtaining the Context of UIAbility](../../../../application-models/uiability-usage.md#obtaining-the-context-of-uiability) &gt; . |
| [getTask](arkts-basicservices-gettask-f.md#gettask-1) | Obtains task information based on the task ID. This API uses a promise to return the result. |
| [remove](arkts-basicservices-remove-f.md#remove-1) | Removes a specified task of the invoker. If the task is being executed, the task is forced to stop. This API uses an asynchronous callback to return the result. After this API is called, the **task** object and its callback function are released. |
| [remove](arkts-basicservices-remove-f.md#remove-2) | Removes a specified task of the invoker. If the task is being executed, the task is forced to stop. This API uses a promise to return the result. After this API is called, the **task** object and its callback function are released. |
| [show](arkts-basicservices-show-f.md#show-1) | Queries the task details based on the task ID. This API uses an asynchronous callback to return the result. |
| [show](arkts-basicservices-show-f.md#show-2) | Queries the task details based on the task ID. This API uses a promise to return the result. |
| [touch](arkts-basicservices-touch-f.md#touch-1) | Queries the task details based on the task ID and token. This API uses an asynchronous callback to return the result. |
| [touch](arkts-basicservices-touch-f.md#touch-2) | Queries the task details based on the task ID and token. This API uses a promise to return the result. |
| [search](arkts-basicservices-search-f.md#search-1) | Searches for task IDs based on [Filter](arkts-basicservices-filter-i.md). The IDs of all tasks from the invoking time to 24 hours ago are searched. This API uses an asynchronous callback to return the result. |
| [search](arkts-basicservices-search-f.md#search-2) | Searches for task IDs based on [Filter](arkts-basicservices-filter-i.md). This API uses an asynchronous callback to return the result. |
| [search](arkts-basicservices-search-f.md#search-3) | Searches for task IDs based on [Filter](arkts-basicservices-filter-i.md). This API uses a promise to return the result. |
| [createGroup](arkts-basicservices-creategroup-f.md#creategroup-1) | Creates a group based on [GroupConfig](arkts-basicservices-groupconfig-i.md). This API uses a promise to return the result. |
| [attachGroup](arkts-basicservices-attachgroup-f.md#attachgroup-1) | Attaches multiple download task IDs to a specified group ID. This API uses a promise to return the result. If any task ID does not meet the attachment conditions, all tasks in the list will not be added to the group. |
| [deleteGroup](arkts-basicservices-deletegroup-f.md#deletegroup-1) | Deletes a specified group. No task ID can be added to the group. This API uses a promise to return the result. When all tasks in a group are succeeded, failed, or removed and the group is deleted, the completion and failure notifications of this group are displayed. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [query](arkts-basicservices-query-f-sys.md#query-1) | Queries specified task details. Creates a group based on GroupConfig |
| [query](arkts-basicservices-query-f-sys.md#query-2) | Queries specified task details. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [FileSpec](arkts-basicservices-filespec-i.md) | Provides the file information of a table item. |
| [FormItem](arkts-basicservices-formitem-i.md) | Describes the form item of a task. |
| [Notification](arkts-basicservices-notification-i.md) | Describes the custom information of the notification bar. |
| [MinSpeed](arkts-basicservices-minspeed-i.md) | Defines the minimum speed of a task. If the task speed is lower than the preset value for a specified period of time, the task fails. The failure cause is [LOW_SPEED](arkts-basicservices-faults-e.md). |
| [Timeout](arkts-basicservices-timeout-i.md) | Defines the timeout configuration of a task. The task waiting duration is not counted. For details about the waiting reasons, see [WaitingReason&lt;sup&gt;20+&lt;/sup&gt;](arkts-basicservices-waitingreason-e.md) . |
| [Config](arkts-basicservices-config-i.md) | Provides the configuration information of an upload or download task. |
| [Progress](arkts-basicservices-progress-i.md) | Describes the data structure of the task progress. |
| [Filter](arkts-basicservices-filter-i.md) | Defines the filter criteria. |
| [TaskInfo](arkts-basicservices-taskinfo-i.md) | Defines the data structure of the task information for query. The fields available vary depending on the query type. |
| [HttpResponse](arkts-basicservices-httpresponse-i.md) | Describes the data structure of the task response header. |
| [Task](arkts-basicservices-task-i.md) | Implements an upload or download task. Before using this API, you must obtain a **Task** object, from a promise through [request.agent.create](arkts-basicservices-create-f.md#create-2) or from a callback through [request.agent.create](arkts-basicservices-create-f.md#create-1). &gt; **NOTE** &gt; &gt; The **Task** object and its mounting callback function are released and automatically reclaimed by the system &gt; after the **remove** method is called. |
| [GroupConfig](arkts-basicservices-groupconfig-i.md) | Describes group configuration options for download tasks. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [Notification](arkts-basicservices-notification-i-sys.md) | Describes the custom information of the notification bar. |
| [Filter](arkts-basicservices-filter-i-sys.md) | Defines the filter criteria. |
| [TaskInfo](arkts-basicservices-taskinfo-i-sys.md) | Defines the data structure of the task information for query. The fields available vary depending on the query type. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [Action](arkts-basicservices-action-e.md) | Defines action options. |
| [Mode](arkts-basicservices-mode-e.md) | Defines mode options. After foreground tasks of an application are switched to the background for a period of time, background tasks are not affected but foreground tasks will fail or pause. |
| [Network](arkts-basicservices-network-e.md) | Defines network options. If the network does not meet the preset conditions, the tasks that have not been executed will await for execution, and the tasks that are being executed will fail or pause. |
| [BroadcastEvent](arkts-basicservices-broadcastevent-e.md) | Defines a custom system event. You can use a common event API to obtain the event. The upload and download SA has the **ohos.permission.SEND_TASK_COMPLETE_EVENT** permission. You can configure the level-2 configuration file to which the metadata of an event points to intercept other event senders. Use the **CommonEventData** type to transmit data related to common events. The members in **CommonEventData** are different from those described in [CommonEventData](arkts-basicservices-commoneventdata-i.md). Specifically, **CommonEventData.code** indicates the task status, which is **0x40 COMPLETE** or **0x41 FAILED**, and **CommonEventData.data** indicates the task ID. &lt;!--Del--&gt; For details about how to obtain the event configuration and configure the level-2 configuration file, see [Subscribing to Common Events in Static Mode (for System Applications Only)](../../../../basic-services/common-event/common-event-static-subscription-sys.md) .&lt;!--DelEnd--&gt; |
| [State](arkts-basicservices-state-e.md) | Defines the current task status. |
| [Faults](arkts-basicservices-faults-e.md) | Defines the cause of a task failure. &gt; **NOTE** &gt; &gt; In API version 12 or earlier, only serial connection to the IP addresses associated with the specified domain &gt; name is supported, and the connection time for a single IP address is not controllable. If the first IP address &gt; returned by the DNS is blocked, a handshake timeout may occur, leading to a **TIMEOUT** error. |
| [WaitingReason](arkts-basicservices-waitingreason-e.md) | Enumerates the reasons why a task is waiting. |

### Constants

| Name | Description |
| --- | --- |
| [VISIBILITY_COMPLETION](arkts-basicservices-agent-con.md#visibility_completion) | ([Notification](arkts-basicservices-notification-i.md) visibility type) Displays completion notifications. |
| [VISIBILITY_PROGRESS](arkts-basicservices-agent-con.md#visibility_progress) | ([Notification](arkts-basicservices-notification-i.md) visibility type) Displays progress notifications. |

