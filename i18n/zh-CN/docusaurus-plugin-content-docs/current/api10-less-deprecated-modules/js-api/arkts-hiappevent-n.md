# hiAppEvent

The **hiAppEvent** module provides the application event logging functions, such as writing application events to the event file and managing the event logging configuration. > **NOTE** > > - The APIs provided by this module are deprecated since API version 9. You are advised to use > [@ohos.hiviewdfx.hiAppEvent](../../apis-performance-analysis-kit/arkts-apis/arkts-hiappevent-n.md#hiAppEvent).

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.hiviewdfx.hiAppEvent

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## 汇总

### 命名空间

| 名称 | 描述 |
| --- | --- |
| [Event](arkts-hiappevent-event-n.md) | Provides constants that define the names of all predefined events. | Name | Type | Readable| Writable| Description | | ------------------------- | ------ | ---- | ---- | -------------------- | | USER_LOGIN | string | Yes | No | User login event. | | USER_LOGOUT | string | Yes | No | User logout event. | | DISTRIBUTED_SERVICE_START | string | Yes | No | Distributed service startup event.| |
| [Param](arkts-hiappevent-param-n.md) | Provides constants that define the names of all predefined event parameters. | Name | Type | Readable| Writable| Description | | ------------------------------- | ------ | ---- | ---- | ------------------ | | USER_ID | string | Yes | No | Custom user ID. | | DISTRIBUTED_SERVICE_NAME | string | Yes | No | Distributed service name. | | DISTRIBUTED_SERVICE_INSTANCE_ID | string | Yes | No | Distributed service instance ID.| |

### 函数

| 名称 | 描述 |
| --- | --- |
| [configure](arkts-hiappevent-configure-f.md#configure-1) | Configures the application event logging function, such as setting the event logging switch and maximum size of the directory that stores the event logging files. |
| [write](arkts-hiappevent-write-f.md#write-1) | Writes event information to the event file of the current day. This API uses a promise to return the result. |
| [write](arkts-hiappevent-write-f.md#write-2) | Writes event information to the event file of the current day. This API uses an asynchronous callback to return the result. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ConfigOption](arkts-hiappevent-configoption-i.md) | Provides the configuration items for application event logging. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [EventType](arkts-hiappevent-eventtype-e.md) | Enumerates the event types. |

