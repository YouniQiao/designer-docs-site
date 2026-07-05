# hiAppEvent

This module provides application logging and event subscription capabilities, including event storage, event subscription, event clearance, and logging configuration. HiAppEvent records the events triggered during application running in [AppEventInfo](arkts-performanceanalysis-appeventinfo-i.md#appeventinfo), and classifies the events into system events and application events. System events are triggered in system services and are predefined in the system. The fields of the event parameter object **params** of such events are defined by each system event. For details, see overviews of user guides. For example, [Crash Event Overview](../../../../dfx/hiappevent-watcher-crash-events.md). Application events are defined by application developers and can be customized using the [Write](arkts-performanceanalysis-write-f.md#write-1) API as required.

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## Modules to Import

```TypeScript
import { hiAppEvent } from '@ohos.hiviewdfx.hiAppEvent';
```

## Summary

### Namespaces

| Name | Description |
| --- | --- |
| [domain](arkts-performanceanalysis-hiappevent-domain-n.md) | Provides domain name constants. \| Name\| Type \| Read Only \| Description \| \| --- \| ------ \| ------ \| ---------- \| \| OS \| string \| Yes\| System domain.\| |
| [event](arkts-performanceanalysis-hiappevent-event-n.md) | Provides event name constants, including system event name constants and application event name constants. <br>The application event name constants are optional custom event names reserved when you call Write for application event logging. |
| [param](arkts-performanceanalysis-hiappevent-param-n.md) | Provides parameter name constants. \| Name \| Type \| Read Only \| Description \| \| ------------------------------- \| ------ \| ------ \| ------------------ \| \| USER_ID \| string \| Yes\| Custom user ID. \| \| DISTRIBUTED_SERVICE_NAME \| string \| Yes\| Distributed service name. \| \| DISTRIBUTED_SERVICE_INSTANCE_ID \| string \| Yes\| Distributed service instance ID.\| |

### Functions

| Name | Description |
| --- | --- |
| [configure](arkts-performanceanalysis-configure-f.md#configure-1) | Configures the application event logging function, such as setting the logging switch and directory storage quota. |
| [write](arkts-performanceanalysis-write-f.md#write-1) | Writes events of the **AppEventInfo** type. This API uses a promise to return the result. The event object written by calling this API is a custom object. To avoid conflicts with system events, you are not advised to write it to system events (system event name constants defined in [Event](arkts-performanceanalysis-hiappevent-event-n.md#event)). The events written by this API can be subscribed to through ([addWatcher](arkts-performanceanalysis-addwatcher-f.md#addwatcher-1)). |
| [write](arkts-performanceanalysis-write-f.md#write-2) | Writes events of the **AppEventInfo** type. This API uses an asynchronous callback to return the result. The event object written by calling this API is a custom object. To avoid conflicts with system events, you are not advised to write it to system events (system event name constants defined in [Event](arkts-performanceanalysis-hiappevent-event-n.md#event)). The events written by this API can be subscribed to through ([addWatcher](arkts-performanceanalysis-addwatcher-f.md#addwatcher-1)). |
| [setEventParam](arkts-performanceanalysis-seteventparam-f.md#seteventparam-1) | Sets custom event parameters. This API uses a promise to return the result. During the same lifecycle, system events and application events can be associated through event domain and event name.System events only support crash, freeze and resource leak events. |
| [setEventConfig](arkts-performanceanalysis-seteventconfig-f.md#seteventconfig-1) | Sets event configuration. This method uses a promise to return the result. In the same lifecycle, you can set event configuration by event name. Configuration items vary depending on events. Currently, only the following events are supported: - **MAIN_THREAD_JANK**. (For details about the parameter configuration, see [Main Thread Jank Event Overview](../../../../dfx/hiappevent-watcher-mainthreadjank-events.md#parameters-of-seteventconfig) .) - **APP_CRASH** (For details about the parameter configuration, see [Customizing Crash Log Specifications](../../../../dfx/hiappevent-watcher-crash-events.md#customizing-crash-log-specifications) .) - **RESOURCE_OVERLIMIT** (For details about the parameter configuration, see [Resource Leak Event Overview](../../../../dfx/hiappevent-watcher-resourceleak-events.md#customizing-specifications). ) |
| [addWatcher](arkts-performanceanalysis-addwatcher-f.md#addwatcher-1) | Adds an event watcher. You can use the callback of the event watcher to subscribe to events. |
| [removeWatcher](arkts-performanceanalysis-removewatcher-f.md#removewatcher-1) | Removes an event watcher. |
| [clearData](arkts-performanceanalysis-cleardata-f.md#cleardata-1) | Clears local logging data of the application. |
| [setUserId](arkts-performanceanalysis-setuserid-f.md#setuserid-1) | Sets a user ID, which is used for association when a [Processor](arkts-performanceanalysis-processor-i.md#processor) is configured. |
| [getUserId](arkts-performanceanalysis-getuserid-f.md#getuserid-1) | Obtains the value set through **setUserId**. |
| [setUserProperty](arkts-performanceanalysis-setuserproperty-f.md#setuserproperty-1) | Sets a user property, which is used for association when a [Processor](arkts-performanceanalysis-processor-i.md#processor) is configured. |
| [getUserProperty](arkts-performanceanalysis-getuserproperty-f.md#getuserproperty-1) | Obtains the value set through **setUserProperty**. |
| [addProcessor](arkts-performanceanalysis-addprocessor-f.md#addprocessor-1) | Adds the configuration information of the data processor, such as name of the data processor. This is a synchronous API and involves time-consuming operations. To ensure performance, you are advised to use the asynchronous API [addProcessorFromConfig](arkts-performanceanalysis-addprocessorfromconfig-f.md#addprocessorfromconfig-1) or use a child thread. |
| [addProcessorFromConfig](arkts-performanceanalysis-addprocessorfromconfig-f.md#addprocessorfromconfig-1) | Adds the configuration information of the data processor. The configuration file contains information such as the name of the event received by the data processor. This API uses a promise to return the result. |
| [removeProcessor](arkts-performanceanalysis-removeprocessor-f.md#removeprocessor-1) | Removes the data processor of a reported event. |
| [configEventPolicy](arkts-performanceanalysis-configeventpolicy-f.md#configeventpolicy-1) | Sets a system event configuration policy. This API uses a promise to return the result. In the same lifecycle, you can set system event configuration by policy. |

### Classes

| Name | Description |
| --- | --- |
| [AppEventPackageHolder](arkts-performanceanalysis-appeventpackageholder-c.md) | Defines a subscription data holder for processing event information. |

### Interfaces

| Name | Description |
| --- | --- |
| [ConfigOption](arkts-performanceanalysis-configoption-i.md) | Provides configuration options for application event logging. |
| [AppEventInfo](arkts-performanceanalysis-appeventinfo-i.md) | Defines parameters of the event information. |
| [AppEventPackage](arkts-performanceanalysis-appeventpackage-i.md) | Defines parameters of an **AppEventPackage** object. This API is used to obtain detail information about an event package, which is obtained using the [takeNext](arkts-performanceanalysis-appeventpackageholder-c.md#takenext-1) API. |
| [TriggerCondition](arkts-performanceanalysis-triggercondition-i.md) | Defines the triggering condition parameters of the **onTrigger** callback of a [Watcher](arkts-performanceanalysis-watcher-i.md#watcher). |
| [AppEventFilter](arkts-performanceanalysis-appeventfilter-i.md) | Defines parameters of subscription filtering conditions of a [Watcher](arkts-performanceanalysis-watcher-i.md#watcher). This API is used to set event filtering conditions in the event watcher to ensure that only the events that meet the filtering conditions are subscribed to. &gt; **NOTE** &gt; &gt; The subscription specifications of system events vary according to application types. For details, see &gt; [HiAppEvent Constraints](../../../../dfx/hiappevent-intro.md#constraints). |
| [AppEventGroup](arkts-performanceanalysis-appeventgroup-i.md) | Defines parameters of the event group returned by the subscription. This API can be used to obtain detail information about an event group, which is often used in the **onReceive** callback of [Watcher](arkts-performanceanalysis-watcher-i.md#watcher). |
| [Watcher](arkts-performanceanalysis-watcher-i.md) | Defines parameters for a **Watcher** object. This API is used to configure and manage event watchers to subscribe to and process specified events. &gt; **NOTE** &gt; &gt; You are not advised to [remove watchers](arkts-performanceanalysis-removewatcher-f.md#removewatcher-1) in the callback. Once a watcher is &gt; removed, the subscription callback of the watcher becomes invalid, and the callback may not be triggered when an &gt; event occurs. |
| [AppEventReportConfig](arkts-performanceanalysis-appeventreportconfig-i.md) | Defines the event configuration for the data processor to report. |
| [Processor](arkts-performanceanalysis-processor-i.md) | Defines a data processor for reporting and managing events. You can customize processor configurations as required. |
| [MainThreadJankPolicy](arkts-performanceanalysis-mainthreadjankpolicy-i.md) | Defines the configuration policy for the main thread jank event. |
| [CpuUsageHighPolicy](arkts-performanceanalysis-cpuusagehighpolicy-i.md) | Defines the configuration policy for the high CPU usage event. &gt; **NOTE** &gt; &gt; After this API is called, the setting is persisted. If this API is called again and the corresponding parameter &gt; is not set, the value used by the system last time is used. |
| [AppCrashPolicy](arkts-performanceanalysis-appcrashpolicy-i.md) | Defines the application crash event configuration policy. |
| [AppFreezePolicy](arkts-performanceanalysis-appfreezepolicy-i.md) | Defines the application freeze event configuration policy. |
| [ResourceOverlimitPolicy](arkts-performanceanalysis-resourceoverlimitpolicy-i.md) | Defines the resource leak event configuration policy. |
| [AddressSanitizerPolicy](arkts-performanceanalysis-addresssanitizerpolicy-i.md) | Defines the address sanitizer event configuration policy. |
| [EventPolicy](arkts-performanceanalysis-eventpolicy-i.md) | Defines the system event configuration policy, which is set by calling [configEventPolicy](arkts-performanceanalysis-configeventpolicy-f.md#configeventpolicy-1). |

### Enums

| Name | Description |
| --- | --- |
| [EventType](arkts-performanceanalysis-eventtype-e.md) | Enumerates event types. |

### Types

| Name | Description |
| --- | --- |
| [ParamType](arkts-performanceanalysis-paramtype-t.md) | Enumerates the types of custom event parameter values. |

