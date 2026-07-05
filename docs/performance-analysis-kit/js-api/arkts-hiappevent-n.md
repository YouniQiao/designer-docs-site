# hiAppEvent

This module provides application logging and event subscription capabilities, including event storage, event subscription, event clearance, and logging configuration. HiAppEvent records the events triggered during application running in [AppEventInfo](arkts-hiappevent-appeventinfo-i.md#AppEventInfo), and classifies the events into system events and application events. System events are triggered in system services and are predefined in the system. The fields of the event parameter object **params** of such events are defined by each system event. For details, see overviews of user guides. For example, [Crash Event Overview](docroot://dfx/hiappevent-watcher-crash-events.md). Application events are defined by application developers and can be customized using the [Write](arkts-hiappevent-write-f.md#write-1) API as required.

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## Modules to Import

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## Summary

### Namespaces

| Name | Description |
| --- | --- |
| [domain](arkts-hiappevent-domain-n.md) | Provides domain name constants. | Name| Type | Read Only | Description | | --- | ------ | ------ | ---------- | | OS | string | Yes| System domain.| |
| [event](arkts-hiappevent-event-n.md) | Provides event name constants, including system event name constants and application event name constants. <br>The application event name constants are optional custom event names reserved when you call Write for application event logging. |
| [param](arkts-hiappevent-param-n.md) | Provides parameter name constants. | Name | Type | Read Only | Description | | ------------------------------- | ------ | ------ | ------------------ | | USER_ID | string | Yes| Custom user ID. | | DISTRIBUTED_SERVICE_NAME | string | Yes| Distributed service name. | | DISTRIBUTED_SERVICE_INSTANCE_ID | string | Yes| Distributed service instance ID.| |

### Functions

| Name | Description |
| --- | --- |
| [addProcessor](arkts-hiappevent-addprocessor-f.md#addProcessor-1) | Adds the configuration information of the data processor, such as name of the data processor. This is a synchronous API and involves time-consuming operations. To ensure performance, you are advised to use the asynchronous API [addProcessorFromConfig](arkts-hiappevent-addprocessorfromconfig-f.md#addProcessorFromConfig-1) or use a child thread. |
| [addProcessorFromConfig](arkts-hiappevent-addprocessorfromconfig-f.md#addProcessorFromConfig-1) | Adds the configuration information of the data processor. The configuration file contains information such as the name of the event received by the data processor. This API uses a promise to return the result. |
| [addWatcher](arkts-hiappevent-addwatcher-f.md#addWatcher-1) | Adds an event watcher. You can use the callback of the event watcher to subscribe to events. |
| [clearData](arkts-hiappevent-cleardata-f.md#clearData-1) | Clears local logging data of the application. |
| [configEventPolicy](arkts-hiappevent-configeventpolicy-f.md#configEventPolicy-1) | Sets a system event configuration policy. This API uses a promise to return the result. In the same lifecycle, you can set system event configuration by policy. |
| [configure](arkts-hiappevent-configure-f.md#configure-1) | Configures the application event logging function, such as setting the logging switch and directory storage quota. |
| [getUserId](arkts-hiappevent-getuserid-f.md#getUserId-1) | Obtains the value set through **setUserId**. |
| [getUserProperty](arkts-hiappevent-getuserproperty-f.md#getUserProperty-1) | Obtains the value set through **setUserProperty**. |
| [removeProcessor](arkts-hiappevent-removeprocessor-f.md#removeProcessor-1) | Removes the data processor of a reported event. |
| [removeWatcher](arkts-hiappevent-removewatcher-f.md#removeWatcher-1) | Removes an event watcher. |
| [setEventConfig](arkts-hiappevent-seteventconfig-f.md#setEventConfig-1) | Sets event configuration. This method uses a promise to return the result. In the same lifecycle, you can set event configuration by event name. Configuration items vary depending on events. Currently, only the following events are supported: - **MAIN_THREAD_JANK**. (For details about the parameter configuration, see [Main Thread Jank Event Overview](docroot://dfx/hiappevent-watcher-mainthreadjank-events.md#parameters-of-seteventconfig) .) - **APP_CRASH** (For details about the parameter configuration, see [Customizing Crash Log Specifications](docroot://dfx/hiappevent-watcher-crash-events.md#customizing-crash-log-specifications) .) - **RESOURCE_OVERLIMIT** (For details about the parameter configuration, see [Resource Leak Event Overview](docroot://dfx/hiappevent-watcher-resourceleak-events.md#customizing-specifications). ) |
| [setEventParam](arkts-hiappevent-seteventparam-f.md#setEventParam-1) | Sets custom event parameters. This API uses a promise to return the result. During the same lifecycle, system events and application events can be associated through event domain and event name.System events only support crash, freeze and resource leak events. |
| [setUserId](arkts-hiappevent-setuserid-f.md#setUserId-1) | Sets a user ID, which is used for association when a [Processor](arkts-hiappevent-processor-i.md#Processor) is configured. |
| [setUserProperty](arkts-hiappevent-setuserproperty-f.md#setUserProperty-1) | Sets a user property, which is used for association when a [Processor](arkts-hiappevent-processor-i.md#Processor) is configured. |
| [write](arkts-hiappevent-write-f.md#write-1) | Writes events of the **AppEventInfo** type. This API uses a promise to return the result. The event object written by calling this API is a custom object. To avoid conflicts with system events, you are not advised to write it to system events (system event name constants defined in [Event](arkts-hiappevent-event-n.md#event)). The events written by this API can be subscribed to through ([addWatcher](arkts-hiappevent-addwatcher-f.md#addWatcher-1)). |
| [write](arkts-hiappevent-write-f.md#write-2) | Writes events of the **AppEventInfo** type. This API uses an asynchronous callback to return the result. The event object written by calling this API is a custom object. To avoid conflicts with system events, you are not advised to write it to system events (system event name constants defined in [Event](arkts-hiappevent-event-n.md#event)). The events written by this API can be subscribed to through ([addWatcher](arkts-hiappevent-addwatcher-f.md#addWatcher-1)). |

### Classes

| Name | Description |
| --- | --- |
| [AppEventPackageHolder](arkts-hiappevent-appeventpackageholder-c.md) | Defines a subscription data holder for processing event information. |

### Interfaces

| Name | Description |
| --- | --- |
| [AddressSanitizerPolicy](arkts-hiappevent-addresssanitizerpolicy-i.md) | Defines the address sanitizer event configuration policy. |
| [AppCrashPolicy](arkts-hiappevent-appcrashpolicy-i.md) | Defines the application crash event configuration policy. |
| [AppEventFilter](arkts-hiappevent-appeventfilter-i.md) | Defines parameters of subscription filtering conditions of a [Watcher](arkts-hiappevent-watcher-i.md#Watcher). This API is used to set event filtering conditions in the event watcher to ensure that only the events that meet the filtering conditions are subscribed to. > **NOTE** > > The subscription specifications of system events vary according to application types. For details, see > [HiAppEvent Constraints](docroot://dfx/hiappevent-intro.md#constraints). |
| [AppEventGroup](arkts-hiappevent-appeventgroup-i.md) | Defines parameters of the event group returned by the subscription. This API can be used to obtain detail information about an event group, which is often used in the **onReceive** callback of [Watcher](arkts-hiappevent-watcher-i.md#Watcher). |
| [AppEventInfo](arkts-hiappevent-appeventinfo-i.md) | Defines parameters of the event information. |
| [AppEventPackage](arkts-hiappevent-appeventpackage-i.md) | Defines parameters of an **AppEventPackage** object. This API is used to obtain detail information about an event package, which is obtained using the [takeNext](arkts-hiappevent-appeventpackageholder-c.md#takeNext) API. |
| [AppEventReportConfig](arkts-hiappevent-appeventreportconfig-i.md) | Defines the event configuration for the data processor to report. |
| [AppFreezePolicy](arkts-hiappevent-appfreezepolicy-i.md) | Defines the application freeze event configuration policy. |
| [ConfigOption](arkts-hiappevent-configoption-i.md) | Provides configuration options for application event logging. |
| [CpuUsageHighPolicy](arkts-hiappevent-cpuusagehighpolicy-i.md) | Defines the configuration policy for the high CPU usage event. > **NOTE** > > After this API is called, the setting is persisted. If this API is called again and the corresponding parameter > is not set, the value used by the system last time is used. |
| [EventPolicy](arkts-hiappevent-eventpolicy-i.md) | Defines the system event configuration policy, which is set by calling [configEventPolicy](arkts-hiappevent-configeventpolicy-f.md#configEventPolicy-1). |
| [MainThreadJankPolicy](arkts-hiappevent-mainthreadjankpolicy-i.md) | Defines the configuration policy for the main thread jank event. |
| [Processor](arkts-hiappevent-processor-i.md) | Defines a data processor for reporting and managing events. You can customize processor configurations as required. |
| [ResourceOverlimitPolicy](arkts-hiappevent-resourceoverlimitpolicy-i.md) | Defines the resource leak event configuration policy. |
| [TriggerCondition](arkts-hiappevent-triggercondition-i.md) | Defines the triggering condition parameters of the **onTrigger** callback of a [Watcher](arkts-hiappevent-watcher-i.md#Watcher). |
| [Watcher](arkts-hiappevent-watcher-i.md) | Defines parameters for a **Watcher** object. This API is used to configure and manage event watchers to subscribe to and process specified events. > **NOTE** > > You are not advised to [remove watchers](arkts-hiappevent-removewatcher-f.md#removeWatcher-1) in the callback. Once a watcher is > removed, the subscription callback of the watcher becomes invalid, and the callback may not be triggered when an > event occurs. |

### Types

| Name | Description |
| --- | --- |
| [ParamType](arkts-hiappevent-paramtype-t.md) | Enumerates the types of custom event parameter values. |

### Enums

| Name | Description |
| --- | --- |
| [EventType](arkts-hiappevent-eventtype-e.md) | Enumerates event types. |

