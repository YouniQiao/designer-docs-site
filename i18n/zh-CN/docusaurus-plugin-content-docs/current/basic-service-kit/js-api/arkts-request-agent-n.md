# agent

The request agent api. Supports "background" and "frontend" tasks as while. Though "background" and "frontend" here do not the same with process's concept. All tasks will be executed at request manager service and recorded. Background tasks is for concurrent transfer, such as caching videos for a later play. Frontend tasks is for instant transfer, such as submitting forms for a consumption bill. Background tasks use notification to tell user tasks' status information. Frontend tasks use callback to tell caller tasks' status information. Background has some automatically restore mechanism. Frontend tasks controlled by caller. Uses `multipart/form-data` in client request for upload. A `Content-Disposition: attachment; filename=<filename>` response from server leads to download. More details, please see the architecture documents of the request subsystem. Only front-end mode is supported in cross-platform scenarios.

**起始版本：** 10

**系统能力：** SystemCapability.Request.FileTransferAgent

## 导入模块

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [attachGroup](arkts-agent-attachgroup-f.md#attachGroup-1) | 向指定分组id中绑定多个下载任务id。使用Promise异步回调。 如果任意一个任务id不满足添加条件，则所有列表中的任务都不会添加到分组中。 |
| [create](arkts-agent-create-f.md#create-1) | 创建需要上传或下载的任务，并将其排入队列。支持HTTP/HTTPS协议，使用callback异步回调。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。 |
| [create](arkts-agent-create-f.md#create-2) | 创建需要上传或下载的任务，并将其排入队列。支持HTTP/HTTPS协议，使用Promise异步回调。 > **说明：** > > 示例中context的获取方式请参见[获取UIAbility的上下文信息](docroot://application-models/uiability-usage.md#获取uiability的上下文信息)。 |
| [createGroup](arkts-agent-creategroup-f.md#createGroup-1) | 根据[GroupConfig]request.agent.GroupConfig分组条件创建分组 ，并返回分组id。使用Promise异步回调。 |
| [deleteGroup](arkts-agent-deletegroup-f.md#deleteGroup-1) | 移除指定分组，后续不能再往该分组中添加任务id。使用Promise异步回调。 当分组中的所有任务处于完成、失败或移除状态，并且分组被移除时，显示该分组的完成或失败通知。 |
| [getTask](arkts-agent-gettask-f.md#getTask-1) | 根据任务id查询任务。使用Promise异步回调。 |
| <!--DelRow-->[query](arkts-agent-query-f-sys.md#query-1) | Queries specified task details. Creates a group based on GroupConfig |
| <!--DelRow-->[query](arkts-agent-query-f-sys.md#query-2) | Queries specified task details. |
| [remove](arkts-agent-remove-f.md#remove-1) | 移除属于调用方的指定任务，如果正在处理中，该任务将被迫停止。使用callback异步回调。在调用后任务对象和其回调函数会被释放。 |
| [remove](arkts-agent-remove-f.md#remove-2) | 移除属于调用方的指定任务，如果正在处理中，该任务将被迫停止。使用Promise异步回调。在调用后任务对象和其回调函数会被释放。 |
| [search](arkts-agent-search-f.md#search-1) | 根据默认[Filter]request.agent.Filter过滤条件查找任务id，即查询调用 时刻至24小时前的所有任务的任务id。使用callback异步回调。 |
| [search](arkts-agent-search-f.md#search-2) | 根据[Filter]request.agent.Filter过滤条件查找任务id。使用 callback异步回调。 |
| [search](arkts-agent-search-f.md#search-3) | 根据[Filter]request.agent.Filter过滤条件查找任务id。使用 Promise异步回调。 |
| [show](arkts-agent-show-f.md#show-1) | 根据任务id查询任务的详细信息。使用callback异步回调。 |
| [show](arkts-agent-show-f.md#show-2) | 根据任务id查询任务的详细信息。使用Promise异步回调。 |
| [touch](arkts-agent-touch-f.md#touch-1) | 根据任务id和token查询任务的详细信息。使用callback异步回调。 |
| [touch](arkts-agent-touch-f.md#touch-2) | 根据任务id和token查询任务的详细信息。使用Promise异步回调。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [Config](arkts-agent-config-i.md) | 上传/下载任务的配置信息。 |
| [FileSpec](arkts-agent-filespec-i.md) | 表单项的文件信息。 |
| [Filter](arkts-agent-filter-i.md) | 过滤条件。 |
| [FormItem](arkts-agent-formitem-i.md) | 任务的表单项信息。 |
| [GroupConfig](arkts-agent-groupconfig-i.md) | 下载任务分组配置选项。 |
| [HttpResponse](arkts-agent-httpresponse-i.md) | 任务响应头的数据结构。 |
| [MinSpeed](arkts-agent-minspeed-i.md) | 任务的最低限速配置。若任务速度持续低于设定值并达到指定时长，则任务失败，失败原因为 [LOW_SPEED]request.agent.Faults。 |
| [Notification](arkts-agent-notification-i.md) | 通知栏自定义信息。 |
| [Progress](arkts-agent-progress-i.md) | 任务进度的数据结构。 |
| [Task](arkts-agent-task-i.md) | 上传或下载任务。使用该方法前需要先获取Task对象，promise形式通过 [request.agent.create]request.agent.create(context: BaseContext, config: Config)获取， callback形式通过 [request.agent.create]request.agent.create(context: BaseContext, config: Config, callback: AsyncCallback<Task>)获取。 > **说明：** > > Task对象及其挂载回调函数会在调用remove方法后释放并被系统自动回收。 |
| [TaskInfo](arkts-agent-taskinfo-i.md) | 查询结果的任务信息数据结构，提供普通查询和系统查询，两种字段的可见范围不同。 |
| [Timeout](arkts-agent-timeout-i.md) | 任务的超时配置。任务处于等待状态的时间不参与计算，上传下载任务会存在以下任务等待的原因: [WaitingReason<sup>20+</sup>]request.agent.WaitingReason 。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [ProgressCallback](arkts-agent-progresscallback-t.md) | The callback function for the download progress event. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [Action](arkts-agent-action-e.md) | 定义操作选项。 |
| [BroadcastEvent](arkts-agent-broadcastevent-e.md) | 定义自定义系统事件。用户可以使用公共事件接口获取该事件。 上传下载SA具有'ohos.permission.SEND_TASK_COMPLETE_EVENT'权限，用户可以配置事件的metadata指向的二级配置文件来拦截其他事件发送者。 调用CommonEventData类型传输公共事件相关数据，成员的内容填写和 [CommonEventData]./commonEvent/commonEventData:CommonEventData 介绍的 有所区别，其中CommonEventData.code表示任务的状态，目前为0x40 COMPLETE或0x41 FAILED；CommonEventData.data表示任务的taskId。 <!--Del--> 请参考[静态订阅公共事件](docroot://basic-services/common-event/common-event-static-subscription-sys.md)以获取事件配置信息和二级配置文件的配置方式 。<!--DelEnd--> |
| [Faults](arkts-agent-faults-e.md) | 定义任务失败的原因。 > **说明：** > > API version 12及以下版本，只支持串行的尝试连接域名相关ip，且不支持单个ip的连接时间控制，如果DNS返回的首个ip是阻塞的，可能会导致握手超时，进而引发TIMEOUT错误。 |
| [Mode](arkts-agent-mode-e.md) | 定义模式选项。 当应用的前台任务切换到后台一段时间后会显示运行失败或暂停，而后台任务不受此操作影响。 |
| [Network](arkts-agent-network-e.md) | 定义网络选项。 网络不满足设置条件时，未执行的任务会等待执行，执行中的任务将失败或暂停。 |
| [State](arkts-agent-state-e.md) | 定义任务当前的状态。 |
| [WaitingReason](arkts-agent-waitingreason-e.md) | 枚举，定义任务等待的原因。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [VISIBILITY_COMPLETION](arkts-agent-con.md#VISIBILITY_COMPLETION) | [通知栏]request.agent.Notification 展示类型：显示完成通知 |
| [VISIBILITY_COMPLETION](arkts-agent-con.md#VISIBILITY_COMPLETION) | Indicates to show completion notification. |
| [VISIBILITY_PROGRESS](arkts-agent-con.md#VISIBILITY_PROGRESS) | [通知栏]request.agent.Notification 展示类型：显示进度通知 |
| [VISIBILITY_PROGRESS](arkts-agent-con.md#VISIBILITY_PROGRESS) | Indicates to show progress notification. |

