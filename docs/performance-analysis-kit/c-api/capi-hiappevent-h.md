# hiappevent.h

## Overview

The **HiAppEvent** module provides event subscription and event logging function definitions. Beforeperforming application event logging, you must construct a parameter list object to store the input event parametersand specify the event domain, event name, and event type. <p>Event domain: domain associated with the applicationevent. <p>Event name: name of the application event. <p>Event type: fault, statistics, security, or behavior. <p>Parameter list: a linked list used to store event parameters. Each parameter consists of a parameter name and aparameter value.

**Library**: libhiappevent_ndk.z.so

**System capability**: SystemCapability.HiviewDFX.HiAppEvent

**Since**: 8

**Related module**: [HiAppEvent](capi-hiappevent.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [HiAppEvent_AppEventInfo](capi-hiappevent-hiappevent-appeventinfo.md) | HiAppEvent_AppEventInfo | Defines a struct for the information about a single event, including the domain, name, type, andparameter list in JSON string format. |
| [HiAppEvent_AppEventGroup](capi-hiappevent-hiappevent-appeventgroup.md) | HiAppEvent_AppEventGroup | Defines the information of an event group, including its name, the array of event information grouped by name,and the length of the event array. |
| [ParamListNode*](capi-hiappevent-paramlistnode8h.md) | ParamList | Defines the event parameter list node. |
| [HiAppEvent_Watcher](capi-hiappevent-hiappevent-watcher.md) | HiAppEvent_Watcher | Defines the watcher for application events. |
| [HiAppEvent_Processor](capi-hiappevent-hiappevent-processor.md) | HiAppEvent_Processor | Defines a processor for application events. |
| [HiAppEvent_Config](capi-hiappevent-hiappevent-config.md) | HiAppEvent_Config | Defines the configuration object used to set the conditions for triggering system events. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [EventType](#eventtype) | - | Enumerates the event types. You are advised to select different event types based on application scenarios. |
| [OH_HiAppEvent_FrameworkType](#oh_hiappevent_frameworktype) | OH_HiAppEvent_FrameworkType | Framework types.You are advised to select framework types based on their respective usage scenarios. |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [typedef void (\*OH_HiAppEvent_OnReceive)(const char* domain, const struct HiAppEvent_AppEventGroup* appEventGroups, uint32_t groupLen)](#oh_hiappevent_onreceive) | OH_HiAppEvent_OnReceive | Passes event content to the caller. Note: The lifecycle of the object pointed by the pointer in the callbackis limited to the callback function. Do not use the pointer outside of the callback function. If the informationneeds to be cached, perform a deep copy of the content pointed by the pointer. |
| [typedef void (\*OH_HiAppEvent_OnTrigger)(int row, int size)](#oh_hiappevent_ontrigger) | OH_HiAppEvent_OnTrigger | Invoked if the event received by the watcher meets the conditions specified by OH_HiAppEvent_SetTriggerCondition**. When the **OH_HiAppEvent_OnReceive** callback is not set in the watcher, theevent received by the watcher will be saved.After the callback is complete, if a newly saved event meets the specified condition, the callback is invoked again. |
| [typedef void (\*OH_HiAppEvent_OnTake)(const char* const *events, uint32_t eventLen)](#oh_hiappevent_ontake) | OH_HiAppEvent_OnTake | Passes the events received by the watcher to the caller when **OH_HiAppEvent_TakeWatcherData** is used toobtain the events. Note: The lifecycle of the object pointed by the pointer in the callback is limited to thecallback function. Do not use the pointer outside of the callback function. If the information needs to be cached,perform a deep copy of the content pointed by the pointer. |
| [ParamList OH_HiAppEvent_CreateParamList(void)](#oh_hiappevent_createparamlist) | - | Creates a pointer to a parameter list object. |
| [void OH_HiAppEvent_DestroyParamList(ParamList list)](#oh_hiappevent_destroyparamlist) | - | Destroys a pointer to a parameter list object and releases its allocated memory. |
| [ParamList OH_HiAppEvent_AddBoolParam(ParamList list, const char* name, bool boolean)](#oh_hiappevent_addboolparam) | - | Adds an event parameter of the Boolean type to the parameter list. |
| [ParamList OH_HiAppEvent_AddBoolArrayParam(ParamList list, const char* name, const bool* booleans, int arrSize)](#oh_hiappevent_addboolarrayparam) | - | Adds an event parameter of the Boolean array type to the parameter list. |
| [ParamList OH_HiAppEvent_AddInt8Param(ParamList list, const char* name, int8_t num)](#oh_hiappevent_addint8param) | - | Adds an event parameter of the int8_t type to the parameter list. |
| [ParamList OH_HiAppEvent_AddInt8ArrayParam(ParamList list, const char* name, const int8_t* nums, int arrSize)](#oh_hiappevent_addint8arrayparam) | - | Adds an event parameter of the int8_t array type to the parameter list. |
| [ParamList OH_HiAppEvent_AddInt16Param(ParamList list, const char* name, int16_t num)](#oh_hiappevent_addint16param) | - | Adds an event parameter of the int16_t type to the parameter list. |
| [ParamList OH_HiAppEvent_AddInt16ArrayParam(ParamList list, const char* name, const int16_t* nums, int arrSize)](#oh_hiappevent_addint16arrayparam) | - | Adds an event parameter of the int16_t array type to the parameter list. |
| [ParamList OH_HiAppEvent_AddInt32Param(ParamList list, const char* name, int32_t num)](#oh_hiappevent_addint32param) | - | Adds an event parameter of the int32_t type to the parameter list. |
| [ParamList OH_HiAppEvent_AddInt32ArrayParam(ParamList list, const char* name, const int32_t* nums, int arrSize)](#oh_hiappevent_addint32arrayparam) | - | Adds an event parameter of the int32_t array type to the parameter list. |
| [ParamList OH_HiAppEvent_AddInt64Param(ParamList list, const char* name, int64_t num)](#oh_hiappevent_addint64param) | - | Adds an event parameter of the int64_t type to the parameter list. |
| [ParamList OH_HiAppEvent_AddInt64ArrayParam(ParamList list, const char* name, const int64_t* nums, int arrSize)](#oh_hiappevent_addint64arrayparam) | - | Adds an event parameter of the int64_t array type to the parameter list. |
| [ParamList OH_HiAppEvent_AddFloatParam(ParamList list, const char* name, float num)](#oh_hiappevent_addfloatparam) | - | Adds an event parameter of the float type to the parameter list. |
| [ParamList OH_HiAppEvent_AddFloatArrayParam(ParamList list, const char* name, const float* nums, int arrSize)](#oh_hiappevent_addfloatarrayparam) | - | Adds an event parameter of the float array type to the parameter list. |
| [ParamList OH_HiAppEvent_AddDoubleParam(ParamList list, const char* name, double num)](#oh_hiappevent_adddoubleparam) | - | Adds an event parameter of the Double type to the parameter list. |
| [ParamList OH_HiAppEvent_AddDoubleArrayParam(ParamList list, const char* name, const double* nums, int arrSize)](#oh_hiappevent_adddoublearrayparam) | - | Adds an event parameter of the double array type to the parameter list. |
| [ParamList OH_HiAppEvent_AddStringParam(ParamList list, const char* name, const char* str)](#oh_hiappevent_addstringparam) | - | Adds a parameter of the string type to the parameter list. |
| [ParamList OH_HiAppEvent_AddStringArrayParam(ParamList list, const char* name, const char * const *strs, int arrSize)](#oh_hiappevent_addstringarrayparam) | - | Adds a parameter of the string array type to the parameter list. |
| [int OH_HiAppEvent_Write(const char* domain, const char* name, enum EventType type, const ParamList list)](#oh_hiappevent_write) | - | Logs application events whose parameters are of the list type. Before application event logging, use this APIto verify parameters of the events. If the verification is successful, the API writes the events to the event file. |
| [bool OH_HiAppEvent_Configure(const char* name, const char* value)](#oh_hiappevent_configure) | - | Configures the application event logging function. This function is used to configure the event loggingfunction and the storage quota of the event file directory. |
| [HiAppEvent_Watcher* OH_HiAppEvent_CreateWatcher(const char* name)](#oh_hiappevent_createwatcher) | - | Creates a watcher for application events. |
| [void OH_HiAppEvent_DestroyWatcher(HiAppEvent_Watcher* watcher)](#oh_hiappevent_destroywatcher) | - | Destroys a created watcher. Note: If a created watcher is no longer used, destroy it to release memory toprevent memory leaks. After the watcher is destroyed, set its pointer to null. |
| [int OH_HiAppEvent_SetTriggerCondition(HiAppEvent_Watcher* watcher, int row, int size, int timeOut)](#oh_hiappevent_settriggercondition) | - | Sets the trigger condition of the **OH_HiAppEvent_OnTrigger** callback.You can set the trigger condition by the number and size of new events received by the watcher, and **onTriggertimeout interval. Ensure that at least one of the trigger conditions is set on the caller side. |
| [int OH_HiAppEvent_SetAppEventFilter(HiAppEvent_Watcher* watcher, const char* domain, uint8_t eventTypes, const char* const *names, int namesLen)](#oh_hiappevent_setappeventfilter) | - | Sets the type of events to listen for. This function can be called repeatedly. You can add multiple filteringconditions instead of replacing them. The watcher will receive notifications of events that meet any of thefiltering conditions. |
| [int OH_HiAppEvent_SetWatcherOnTrigger(HiAppEvent_Watcher* watcher, OH_HiAppEvent_OnTrigger onTrigger)](#oh_hiappevent_setwatcherontrigger) | - | Sets the **onTrigger** callback.If **OnReceive** is not set or is set to **nullptr**, the application events received by the watcher will be saved.If the saved application events meet the trigger conditions of the **onTrigger** callback, the **onTriggercallback will be called. |
| [int OH_HiAppEvent_SetWatcherOnReceive(HiAppEvent_Watcher* watcher, OH_HiAppEvent_OnReceive onReceive)](#oh_hiappevent_setwatcheronreceive) | - | Sets the **onReceive** callback. When the listener detects the corresponding event, the onReceive callback iscalled. |
| [int OH_HiAppEvent_TakeWatcherData(HiAppEvent_Watcher* watcher, uint32_t eventNum, OH_HiAppEvent_OnTake onTake)](#oh_hiappevent_takewatcherdata) | - | Obtains the event saved by the watcher. |
| [int OH_HiAppEvent_AddWatcher(HiAppEvent_Watcher* watcher)](#oh_hiappevent_addwatcher) | - | Adds a watcher. Once a watcher is added, it starts to listen for system messages. |
| [int OH_HiAppEvent_RemoveWatcher(HiAppEvent_Watcher* watcher)](#oh_hiappevent_removewatcher) | - | Removes a watcher. Once a watcher is removed, it stops listening for system messages. Note: This API onlyenables the watcher to stop listening for system messages. It does not destroy the watcher. The watcher stillresides in the memory until the OH_HiAppEvent_DestroyWatcher API is called. |
| [void OH_HiAppEvent_ClearData()](#oh_hiappevent_cleardata) | - | Clears the events saved by all watchers. |
| [HiAppEvent_Processor* OH_HiAppEvent_CreateProcessor(const char* name)](#oh_hiappevent_createprocessor) | - | Creates a processor for application events. |
| [int OH_HiAppEvent_SetReportRoute(HiAppEvent_Processor* processor, const char* appId, const char* routeInfo)](#oh_hiappevent_setreportroute) | - | Sets the report route for the processor. |
| [int OH_HiAppEvent_SetReportPolicy(HiAppEvent_Processor* processor, int periodReport, int batchReport, bool onStartReport, bool onBackgroundReport)](#oh_hiappevent_setreportpolicy) | - | Sets the report policy for the processor. |
| [int OH_HiAppEvent_SetReportEvent(HiAppEvent_Processor* processor, const char* domain, const char* name, bool isRealTime)](#oh_hiappevent_setreportevent) | - | Sets the report event for the processor. |
| [int OH_HiAppEvent_SetCustomConfig(HiAppEvent_Processor* processor, const char* key, const char* value)](#oh_hiappevent_setcustomconfig) | - | Sets the custom extension parameters of the processor. |
| [int OH_HiAppEvent_SetConfigId(HiAppEvent_Processor* processor, int configId)](#oh_hiappevent_setconfigid) | - | Sets the configuration ID of the processor. |
| [int OH_HiAppEvent_SetConfigName(HiAppEvent_Processor* processor, const char* configName)](#oh_hiappevent_setconfigname) | - | Sets the configuration name of the processor. |
| [int OH_HiAppEvent_SetReportUserId(HiAppEvent_Processor* processor, const char* const * userIdNames, int size)](#oh_hiappevent_setreportuserid) | - | Sets the report user ID of the processor. |
| [int OH_HiAppEvent_SetReportUserProperty(HiAppEvent_Processor* processor, const char* const * userPropertyNames, int size)](#oh_hiappevent_setreportuserproperty) | - | Sets the report user property of the processor. |
| [int64_t OH_HiAppEvent_AddProcessor(HiAppEvent_Processor* processor)](#oh_hiappevent_addprocessor) | - | Adds a processor. You can add a processor to migrate event data to the cloud. You can preset theimplementation of the processor on the device and set its properties based on its constraints. Note that theconfiguration information of **Processor** must be provided by the data processor. Yet, as no data processor ispreset in the device for interaction for the moment, migrating events to the cloud is unavailable. |
| [void OH_HiAppEvent_DestroyProcessor(HiAppEvent_Processor* processor)](#oh_hiappevent_destroyprocessor) | - | Destroys a processor. Note: If a processor is no longer used, destroy it to release memory to prevent memoryleaks. After the processor is destroyed, set its pointer to null. |
| [int OH_HiAppEvent_RemoveProcessor(int64_t processorId)](#oh_hiappevent_removeprocessor) | - | Removes a processor. Once a processor is removed, it stops reporting events. Note: This API only stops theprocessor reporting events but does not destroy the processor. You can call **OH_HiAppEvent_DestroyProcessor** todestroy the processor and release the memory. |
| [HiAppEvent_Config* OH_HiAppEvent_CreateConfig(void)](#oh_hiappevent_createconfig) | - | Creates a pointer to the configuration object that sets the conditions for triggering system events. |
| [void OH_HiAppEvent_DestroyConfig(HiAppEvent_Config* config)](#oh_hiappevent_destroyconfig) | - | Destroys a configuration object. Note: If a configuration object is no longer used, destroy it to releasememory to prevent memory leaks. After the object is destroyed, set its pointer to null. |
| [int OH_HiAppEvent_SetConfigItem(HiAppEvent_Config* config, const char* itemName, const char* itemValue)](#oh_hiappevent_setconfigitem) | - | Sets the items in the configuration object. |
| [int OH_HiAppEvent_SetEventConfig(const char* name, HiAppEvent_Config* config)](#oh_hiappevent_seteventconfig) | - | Sets event configuration parameters.Configuration items vary depending on events. Currently, only the following events are supported:**MAIN_THREAD_JANK**. (For details about the parameter configuration, see {@link Main Thread Jank Event Overview}.)**MAIN_THREAD_JANK_V2**. (For details about the parameter configuration, see {@link Main Thread Jank Event Overview}.)**EVENT_APP_CRASH**. (For details about the parameter configuration, see {@link Crash Event Overview}.) This eventis supported since API version 24. |
| [int OH_HiAppEvent_ReportFrameworkMemAnomaly(enum OH_HiAppEvent_FrameworkType frameworkType, const char* frameworkVersion, const char* description)](#oh_hiappevent_reportframeworkmemanomaly) | - | When a framework has a memory leak report event. |

## Enum type description

### EventType

```c
enum EventType
```

**Description**

Enumerates the event types. You are advised to select different event types based on application scenarios.

**Since**: 8

| Enum item | Description |
| -- | -- |
| FAULT = 1 | Fault event type |
| STATISTIC = 2 | Statistic event type |
| SECURITY = 3 | Security event type |
| BEHAVIOR = 4 | Behavior event type |

### OH_HiAppEvent_FrameworkType

```c
enum OH_HiAppEvent_FrameworkType
```

**Description**

Framework types.You are advised to select framework types based on their respective usage scenarios.

**Since**: 26.0.0

| Enum item | Description |
| -- | -- |
| OH_FLUTTER_DART = 0 |  |
| OH_REACT_NATIVE_HERMES = 1 |  |
| OH_KMP_KOTLIN = 2 |  |


## Function description

### OH_HiAppEvent_OnReceive()

```c
typedef void (*OH_HiAppEvent_OnReceive)(const char* domain, const struct HiAppEvent_AppEventGroup* appEventGroups, uint32_t groupLen)
```

**Description**

Passes event content to the caller. Note: The lifecycle of the object pointed by the pointer in the callbackis limited to the callback function. Do not use the pointer outside of the callback function. If the informationneeds to be cached, perform a deep copy of the content pointed by the pointer.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (const char\* domain | Domain of the received application event. |
| [const struct HiAppEvent_AppEventGroup](capi-hiappevent-hiappevent-appeventgroup.md)\* appEventGroups | Event group array. |
| uint32_t groupLen | Length of the event group array. |

### OH_HiAppEvent_OnTrigger()

```c
typedef void (*OH_HiAppEvent_OnTrigger)(int row, int size)
```

**Description**

Invoked if the event received by the watcher meets the conditions specified by OH_HiAppEvent_SetTriggerCondition**. When the **OH_HiAppEvent_OnReceive** callback is not set in the watcher, theevent received by the watcher will be saved.After the callback is complete, if a newly saved event meets the specified condition, the callback is invoked again.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (int row | Number of events newly received by the watcher. |
| int size | Total size of events newly received by the watcher, in bytes. The size of a single event is the lengthof the JSON string converted from the event. |

### OH_HiAppEvent_OnTake()

```c
typedef void (*OH_HiAppEvent_OnTake)(const char* const *events, uint32_t eventLen)
```

**Description**

Passes the events received by the watcher to the caller when **OH_HiAppEvent_TakeWatcherData** is used toobtain the events. Note: The lifecycle of the object pointed by the pointer in the callback is limited to thecallback function. Do not use the pointer outside of the callback function. If the information needs to be cached,perform a deep copy of the content pointed by the pointer.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| (const char\* const \*events | The event JSON string array. |
| uint32_t eventLen | Size of the event array. |

### OH_HiAppEvent_CreateParamList()

```c
ParamList OH_HiAppEvent_CreateParamList(void)
```

**Description**

Creates a pointer to a parameter list object.

**Since**: 8

**Returns**:

| Type | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) | Pointer to the parameter list object. |

### OH_HiAppEvent_DestroyParamList()

```c
void OH_HiAppEvent_DestroyParamList(ParamList list)
```

**Description**

Destroys a pointer to a parameter list object and releases its allocated memory.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) list | Pointer to the parameter list object. |

### OH_HiAppEvent_AddBoolParam()

```c
ParamList OH_HiAppEvent_AddBoolParam(ParamList list, const char* name, bool boolean)
```

**Description**

Adds an event parameter of the Boolean type to the parameter list.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) list | Pointer to the parameter list to which parameters need to be added. |
| const char* name | Name of the parameter to be added. |
| bool boolean | Value of the parameter to be added. |

**Returns**:

| Type | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) | Pointer to the parameter list that contains the parameters added. |

### OH_HiAppEvent_AddBoolArrayParam()

```c
ParamList OH_HiAppEvent_AddBoolArrayParam(ParamList list, const char* name, const bool* booleans, int arrSize)
```

**Description**

Adds an event parameter of the Boolean array type to the parameter list.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) list | Pointer to the parameter list to which parameters need to be added. |
| const char* name | Name of the parameter to be added. |
| const bool* booleans | Value of the parameter to be added. |
| int arrSize | Size of the parameter array to be added. |

**Returns**:

| Type | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) | Pointer to the parameter list that contains the parameters added. |

### OH_HiAppEvent_AddInt8Param()

```c
ParamList OH_HiAppEvent_AddInt8Param(ParamList list, const char* name, int8_t num)
```

**Description**

Adds an event parameter of the int8_t type to the parameter list.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) list | Pointer to the parameter list to which parameters need to be added. |
| const char* name | Name of the parameter to be added. |
| int8_t num | Value of the parameter to be added. |

**Returns**:

| Type | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) | Pointer to the parameter list that contains the parameters added. |

### OH_HiAppEvent_AddInt8ArrayParam()

```c
ParamList OH_HiAppEvent_AddInt8ArrayParam(ParamList list, const char* name, const int8_t* nums, int arrSize)
```

**Description**

Adds an event parameter of the int8_t array type to the parameter list.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) list | Pointer to the parameter list to which parameters need to be added. |
| const char* name | Name of the parameter to be added. |
| const int8_t* nums | Value of the parameter to be added. |
| int arrSize | Size of the parameter array to be added. |

**Returns**:

| Type | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) | Pointer to the parameter list that contains the parameters added. |

### OH_HiAppEvent_AddInt16Param()

```c
ParamList OH_HiAppEvent_AddInt16Param(ParamList list, const char* name, int16_t num)
```

**Description**

Adds an event parameter of the int16_t type to the parameter list.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) list | Pointer to the parameter list to which parameters need to be added. |
| const char* name | Name of the parameter to be added. |
| int16_t num | Value of the parameter to be added. |

**Returns**:

| Type | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) | Pointer to the parameter list that contains the parameters added. |

### OH_HiAppEvent_AddInt16ArrayParam()

```c
ParamList OH_HiAppEvent_AddInt16ArrayParam(ParamList list, const char* name, const int16_t* nums, int arrSize)
```

**Description**

Adds an event parameter of the int16_t array type to the parameter list.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) list | Pointer to the parameter list to which parameters need to be added. |
| const char* name | Name of the parameter to be added. |
| const int16_t* nums | Value of the parameter to be added. |
| int arrSize | Size of the parameter array to be added. |

**Returns**:

| Type | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) | Pointer to the parameter list that contains the parameters added. |

### OH_HiAppEvent_AddInt32Param()

```c
ParamList OH_HiAppEvent_AddInt32Param(ParamList list, const char* name, int32_t num)
```

**Description**

Adds an event parameter of the int32_t type to the parameter list.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) list | Pointer to the parameter list to which parameters need to be added. |
| const char* name | Name of the parameter to be added. |
| int32_t num | Value of the parameter to be added. |

**Returns**:

| Type | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) | Pointer to the parameter list that contains the parameters added. |

### OH_HiAppEvent_AddInt32ArrayParam()

```c
ParamList OH_HiAppEvent_AddInt32ArrayParam(ParamList list, const char* name, const int32_t* nums, int arrSize)
```

**Description**

Adds an event parameter of the int32_t array type to the parameter list.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) list | Pointer to the parameter list to which parameters need to be added. |
| const char* name | Name of the parameter to be added. |
| const int32_t* nums | Value of the parameter to be added. |
| int arrSize | Size of the parameter array to be added. |

**Returns**:

| Type | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) | Pointer to the parameter list that contains the parameters added. |

### OH_HiAppEvent_AddInt64Param()

```c
ParamList OH_HiAppEvent_AddInt64Param(ParamList list, const char* name, int64_t num)
```

**Description**

Adds an event parameter of the int64_t type to the parameter list.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) list | Pointer to the parameter list to which parameters need to be added. |
| const char* name | Name of the parameter to be added. |
| int64_t num | Value of the parameter to be added. |

**Returns**:

| Type | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) | Pointer to the parameter list that contains the parameters added. |

### OH_HiAppEvent_AddInt64ArrayParam()

```c
ParamList OH_HiAppEvent_AddInt64ArrayParam(ParamList list, const char* name, const int64_t* nums, int arrSize)
```

**Description**

Adds an event parameter of the int64_t array type to the parameter list.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) list | Pointer to the parameter list to which parameters need to be added. |
| const char* name | Name of the parameter to be added. |
| const int64_t* nums | Value of the parameter to be added. |
| int arrSize | Size of the parameter array to be added. |

**Returns**:

| Type | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) | Pointer to the parameter list that contains the parameters added. |

### OH_HiAppEvent_AddFloatParam()

```c
ParamList OH_HiAppEvent_AddFloatParam(ParamList list, const char* name, float num)
```

**Description**

Adds an event parameter of the float type to the parameter list.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) list | Pointer to the parameter list to which parameters need to be added. |
| const char* name | Name of the parameter to be added. |
| float num | Value of the parameter to be added. |

**Returns**:

| Type | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) | Pointer to the parameter list that contains the parameters added. |

### OH_HiAppEvent_AddFloatArrayParam()

```c
ParamList OH_HiAppEvent_AddFloatArrayParam(ParamList list, const char* name, const float* nums, int arrSize)
```

**Description**

Adds an event parameter of the float array type to the parameter list.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) list | Pointer to the parameter list to which parameters need to be added. |
| const char* name | Name of the parameter to be added. |
| const float* nums | Value of the parameter to be added. |
| int arrSize | Size of the parameter array to be added. |

**Returns**:

| Type | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) | Pointer to the parameter list that contains the parameters added. |

### OH_HiAppEvent_AddDoubleParam()

```c
ParamList OH_HiAppEvent_AddDoubleParam(ParamList list, const char* name, double num)
```

**Description**

Adds an event parameter of the Double type to the parameter list.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) list | Pointer to the parameter list to which parameters need to be added. |
| const char* name | Name of the parameter to be added. |
| double num | Value of the parameter to be added. |

**Returns**:

| Type | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) | Pointer to the parameter list that contains the parameters added. |

### OH_HiAppEvent_AddDoubleArrayParam()

```c
ParamList OH_HiAppEvent_AddDoubleArrayParam(ParamList list, const char* name, const double* nums, int arrSize)
```

**Description**

Adds an event parameter of the double array type to the parameter list.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) list | Pointer to the parameter list to which parameters need to be added. |
| const char* name | Name of the parameter to be added. |
| const double* nums | Value of the parameter to be added. |
| int arrSize | Size of the parameter array to be added. |

**Returns**:

| Type | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) | Pointer to the parameter list that contains the parameters added. |

### OH_HiAppEvent_AddStringParam()

```c
ParamList OH_HiAppEvent_AddStringParam(ParamList list, const char* name, const char* str)
```

**Description**

Adds a parameter of the string type to the parameter list.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) list | Pointer to the parameter list to which parameters need to be added. |
| const char* name | Name of the parameter to be added. |
| const char* str | Value of the parameter to be added. |

**Returns**:

| Type | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) | Pointer to the parameter list that contains the parameters added. |

### OH_HiAppEvent_AddStringArrayParam()

```c
ParamList OH_HiAppEvent_AddStringArrayParam(ParamList list, const char* name, const char * const *strs, int arrSize)
```

**Description**

Adds a parameter of the string array type to the parameter list.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) list | Pointer to the parameter list to which parameters need to be added. |
| const char* name | Name of the parameter to be added. |
| const char * const *strs | Value of the parameter to be added. |
| int arrSize | Size of the parameter array to be added. |

**Returns**:

| Type | Description |
| -- | -- |
| [ParamList](capi-hiappevent-paramlistnode8h.md) | Pointer to the parameter list that contains the parameters added. |

### OH_HiAppEvent_Write()

```c
int OH_HiAppEvent_Write(const char* domain, const char* name, enum EventType type, const ParamList list)
```

**Description**

Logs application events whose parameters are of the list type. Before application event logging, use this APIto verify parameters of the events. If the verification is successful, the API writes the events to the event file.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* domain | Event domain. You can customize event domains as required.The value is a string that contains a maximum of 32 characters, including digits (0 to 9), letters (a to z)(A to Z), and underscore (\_). It must start with a letter and cannot end with an underscore (\_). |
| const char* name | Event name. You can customize event names as required.The value is a string that contains a maximum of 48 characters, including digits (0 to 9), letters (a to z)(A to Z), underscore (\_), and dollar sign (`$`). It must start with a letter or dollar sign (`$`) and end witha digit or letter. |
| enum EventType type | Event type. For details, see [EventType](capi-hiappevent-h.md#eventtype). |
| [const ParamList](capi-hiappevent-paramlistnode8h.md) list | List of event parameters, each of which consists of a parameter name and a parameter value. Thespecifications are as follows:<br>1. The value is a string that contains a maximum of 32 characters, including digits (0 to 9), letters(a to z)(A to Z),underscore (_), and dollar sign (`$`). It must start with a letter or dollar sign (`$`) andend with a digit or letter.<br>2. The parameter value can be a string, number, Boolean, or array. The length of a string must be less than8 * 1024 characters. If this limit is exceeded, excess characters will be truncated.The element type of an array parameter can only be a string, number, or Boolean, and the number of elementsmust be less than 100. If this limit is exceeded, excess elements will be discarded.<br>3. The maximum number of parameters is 32. If this limit is exceeded, excess parameters will be discarded. |

**Returns**:

| Type | Description |
| -- | -- |
| int | If the event parameters are successfully verified, 0 is returned and the event is written into the event<br>     file.<br>     If an event contains invalid parameters, a positive value is returned. The event is written into the event file<br>     after the invalid parameters are discarded.<br>     If the event parameter fails to be verified, a negative value is returned and the event is not written to the<br>     event file.<br>     <br>0: Parameter verification successful.<br>     <br>-1: Invalid event name.<br>     <br>-4: Invalid event domain name.<br>     <br>-99: Application event logging disabled.<br>     <br>1: Invalid event parameter name.<br>     <br>4: Invalid event parameter string length.<br>     <br>5: Invalid number of event parameters.<br>     <br>6: Invalid event parameter array length.<br>     <br>8: Duplicate event parameter name. |

### OH_HiAppEvent_Configure()

```c
bool OH_HiAppEvent_Configure(const char* name, const char* value)
```

**Description**

Configures the application event logging function. This function is used to configure the event loggingfunction and the storage quota of the event file directory.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* name | Configuration item name The value can be {@link DISABLE} or {@link MAX_STORAGE}. |
| const char* value | Configuration item value. If the configuration item name is {@link DISABLE}, the value can be **trueor **false**.If the configuration item name is {@link MAX_STORAGE}, the quota value consists of only digits and a unit(including b\|k\|kb\|m\|mb\|g\|gb\|t\|tb, which are case-insensitive).The quota value must start with a digit. You can determine whether to pass the unit. If the unit is leftempty, **b**(that is, byte) is used by default. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | Configuration result. The value true indicates that the configuration is successful, and the<br>     value false indicates the opposite. |

### OH_HiAppEvent_CreateWatcher()

```c
HiAppEvent_Watcher* OH_HiAppEvent_CreateWatcher(const char* name)
```

**Description**

Creates a watcher for application events.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* name | Watcher name. |

**Returns**:

| Type | Description |
| -- | -- |
| [HiAppEvent_Watcher*](capi-hiappevent-hiappevent-watcher.md) | Pointer to the new watcher if the API is called successfully; nullptr if the name parameter is<br>     invalid. |

### OH_HiAppEvent_DestroyWatcher()

```c
void OH_HiAppEvent_DestroyWatcher(HiAppEvent_Watcher* watcher)
```

**Description**

Destroys a created watcher. Note: If a created watcher is no longer used, destroy it to release memory toprevent memory leaks. After the watcher is destroyed, set its pointer to null.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Watcher](capi-hiappevent-hiappevent-watcher.md)* watcher | Pointer to the watcher (that is, the pointer returned by OH_HiAppEvent_CreateWatcher). |

### OH_HiAppEvent_SetTriggerCondition()

```c
int OH_HiAppEvent_SetTriggerCondition(HiAppEvent_Watcher* watcher, int row, int size, int timeOut)
```

**Description**

Sets the trigger condition of the **OH_HiAppEvent_OnTrigger** callback.You can set the trigger condition by the number and size of new events received by the watcher, and **onTriggertimeout interval. Ensure that at least one of the trigger conditions is set on the caller side.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Watcher](capi-hiappevent-hiappevent-watcher.md)* watcher | Pointer to the watcher (that is, the pointer returned by OH_HiAppEvent_CreateWatcher). |
| int row | Row count. If the input value is greater than 0 and the number of newly received events is greater thanor equal to the value of this parameter, the configured **onTrigger** callback is called.If the input value is less than or equal to 0, the number of received events is not used as the condition totrigger the **onTrigger** callback. |
| int size | Size value, Unit: bytes. If the input value is greater than 0 and the size of the newly received eventis greater than or equal to the value of this parameter, the configured **onTrigger** callback is called. Thesize of a single event is the length of the JSON string converted from the event.If the input value is less than or equal to 0, the size of received events is not used as the condition totrigger the **onTrigger** callback. |
| int timeOut | Timeout value, in seconds. If the input value is greater than 0, the system checks the watcher fornewly received events based on the timeout * 30 interval. If there are any newly received events, the configuredonTrigger callback is triggered.After the callback is complete, the system checks the watcher for newly received events when the timeout * 30value expires.If the input value is less than or equal to 0, the timeout interval is not used as the condition to trigger theonTrigger callback. |

**Returns**:

| Type | Description |
| -- | -- |
| int | 0 if the API is called successfully; -5 if the pointer to an input parameter is null. |

### OH_HiAppEvent_SetAppEventFilter()

```c
int OH_HiAppEvent_SetAppEventFilter(HiAppEvent_Watcher* watcher, const char* domain, uint8_t eventTypes, const char* const *names, int namesLen)
```

**Description**

Sets the type of events to listen for. This function can be called repeatedly. You can add multiple filteringconditions instead of replacing them. The watcher will receive notifications of events that meet any of thefiltering conditions.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Watcher](capi-hiappevent-hiappevent-watcher.md)* watcher | Pointer to the watcher (that is, the pointer returned by OH_HiAppEvent_CreateWatcher). |
| const char* domain | Domain of events to be listened for. |
| uint8_t eventTypes | Types of events to be listened for. The bitwise AND matching mode is used. Multiple types ofevents can be listened for. If the first bit is **1** (the value is **1**), fault events can be listened for.<br>If the second bit is **1** (the value is **2**), statistics events can be listened for.<br>If the third bit is **1** (the value is **4**), security events can be listened for.<br>If the fourth digit is **1**(the value is **8**), events of the listening behavior type can be listened for.<br>If four digits are **1** (the value is **15**) or 0 (the value is **0**), events of all types can be<br>listened for. |
| const char* const *names | Array of the event names. |
| int namesLen | Length of the event name array. |

**Returns**:

| Type | Description |
| -- | -- |
| int | 0 if the API is called successfully; -1 if the names parameter is invalid; -4 if the <br>     domain parameter is invalid; -5 if the pointer to an input parameter is null. |

### OH_HiAppEvent_SetWatcherOnTrigger()

```c
int OH_HiAppEvent_SetWatcherOnTrigger(HiAppEvent_Watcher* watcher, OH_HiAppEvent_OnTrigger onTrigger)
```

**Description**

Sets the **onTrigger** callback.If **OnReceive** is not set or is set to **nullptr**, the application events received by the watcher will be saved.If the saved application events meet the trigger conditions of the **onTrigger** callback, the **onTriggercallback will be called.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Watcher](capi-hiappevent-hiappevent-watcher.md)* watcher | Pointer to the watcher (that is, the pointer returned by OH_HiAppEvent_CreateWatcher). |
| [OH_HiAppEvent_OnTrigger](capi-hiappevent-h.md#oh_hiappevent_ontrigger) onTrigger | Callback to be set. |

**Returns**:

| Type | Description |
| -- | -- |
| int | 0 if the API is called successfully; -5 if the pointer to an input parameter is null. |

### OH_HiAppEvent_SetWatcherOnReceive()

```c
int OH_HiAppEvent_SetWatcherOnReceive(HiAppEvent_Watcher* watcher, OH_HiAppEvent_OnReceive onReceive)
```

**Description**

Sets the **onReceive** callback. When the listener detects the corresponding event, the onReceive callback iscalled.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Watcher](capi-hiappevent-hiappevent-watcher.md)* watcher | Pointer to the watcher (that is, the pointer returned by OH_HiAppEvent_CreateWatcher). |
| [OH_HiAppEvent_OnReceive](capi-hiappevent-h.md#oh_hiappevent_onreceive) onReceive | Pointer to the callback function. |

**Returns**:

| Type | Description |
| -- | -- |
| int | 0 if the API is called successfully; -5 if the pointer to an input parameter is null. |

### OH_HiAppEvent_TakeWatcherData()

```c
int OH_HiAppEvent_TakeWatcherData(HiAppEvent_Watcher* watcher, uint32_t eventNum, OH_HiAppEvent_OnTake onTake)
```

**Description**

Obtains the event saved by the watcher.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Watcher](capi-hiappevent-hiappevent-watcher.md)* watcher | Pointer to the watcher (that is, the pointer returned by OH_HiAppEvent_CreateWatcher). |
| uint32_t eventNum | If the input value is less than or equal to **0**, all saved events are obtained. If the input valueis greater than **0**, events are sorted by time in descending order and a specified number of saved events areobtained. |
| [OH_HiAppEvent_OnTake](capi-hiappevent-h.md#oh_hiappevent_ontake) onTake | Pointer to the callback. The event information is returned through this callback. |

**Returns**:

| Type | Description |
| -- | -- |
| int | 0 if the API is called successfully; -5 if the pointer to an input parameter is null; -6 if <br>     OH_HiAppEvent_AddWatcher has not been called to add a watcher. |

### OH_HiAppEvent_AddWatcher()

```c
int OH_HiAppEvent_AddWatcher(HiAppEvent_Watcher* watcher)
```

**Description**

Adds a watcher. Once a watcher is added, it starts to listen for system messages.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Watcher](capi-hiappevent-hiappevent-watcher.md)* watcher | Pointer to the watcher (that is, the pointer returned by OH_HiAppEvent_CreateWatcher). |

**Returns**:

| Type | Description |
| -- | -- |
| int | 0 if the API is called successfully; -5 if the pointer to an input parameter is null. |

### OH_HiAppEvent_RemoveWatcher()

```c
int OH_HiAppEvent_RemoveWatcher(HiAppEvent_Watcher* watcher)
```

**Description**

Removes a watcher. Once a watcher is removed, it stops listening for system messages. Note: This API onlyenables the watcher to stop listening for system messages. It does not destroy the watcher. The watcher stillresides in the memory until the OH_HiAppEvent_DestroyWatcher API is called.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Watcher](capi-hiappevent-hiappevent-watcher.md)* watcher | Pointer to the watcher (that is, the pointer returned by OH_HiAppEvent_CreateWatcher). |

**Returns**:

| Type | Description |
| -- | -- |
| int | 0 if the API is called successfully; -5 if the pointer to an input parameter is null; -6 if <br>     OH_HiAppEvent_AddWatcher has not been called to add a watcher. |

### OH_HiAppEvent_ClearData()

```c
void OH_HiAppEvent_ClearData()
```

**Description**

Clears the events saved by all watchers.

**Since**: 12

### OH_HiAppEvent_CreateProcessor()

```c
HiAppEvent_Processor* OH_HiAppEvent_CreateProcessor(const char* name)
```

**Description**

Creates a processor for application events.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* name | Processor name, which can contain only letters, digits, underscores (_), and dollar signs ($). It cannotstart with a digit and cannot exceed 256 characters. |

**Returns**:

| Type | Description |
| -- | -- |
| [HiAppEvent_Processor*](capi-hiappevent-hiappevent-processor.md) | Pointer to the new processor if the API is called successfully; nullptr if the name parameter is<br>     invalid. |

### OH_HiAppEvent_SetReportRoute()

```c
int OH_HiAppEvent_SetReportRoute(HiAppEvent_Processor* processor, const char* appId, const char* routeInfo)
```

**Description**

Sets the report route for the processor.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Processor](capi-hiappevent-hiappevent-processor.md)* processor | Pointer to the processor, that is, the pointer returned by **OH_HiAppEvent_CreateProcessor**. |
| const char* appId | Application ID of the processor. |
| const char* routeInfo | Server location information. The default value is an empty string. The string length cannot exceed8 KB. Otherwise, the default value is used. |

**Returns**:

| Type | Description |
| -- | -- |
| int | <ul><br>         <li>{@link HIAPPEVENT_SUCCESS} The operation is successful.</li><br>         <li>{@link HIAPPEVENT_PROCESSOR_IS_NULL} The processor is nullptr.</li><br>         <li>{@link HIAPPEVENT_INVALID_PARAM_VALUE} Invalid Param value.</li><br>         <li>{@link HIAPPEVENT_INVALID_UID} Invalid uid.</li><br>         <li>{@link HIAPPEVENT_INVALID_PARAM_VALUE_LENGTH} Invalid param value length.</li><br>         </ul><br>     For details, see {@link HiAppEvent_ErrorCode}. |

### OH_HiAppEvent_SetReportPolicy()

```c
int OH_HiAppEvent_SetReportPolicy(HiAppEvent_Processor* processor, int periodReport, int batchReport, bool onStartReport, bool onBackgroundReport)
```

**Description**

Sets the report policy for the processor.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Processor](capi-hiappevent-hiappevent-processor.md)* processor | Pointer to the processor, that is, the pointer returned by **OH_HiAppEvent_CreateProcessor**. |
| int periodReport | Period for reporting events, in seconds. |
| int batchReport | Threshold for reporting events. When the number of events reaches the threshold, an event isreported. |
| bool onStartReport | Whether to report events during startup. **true**: yes; **false**: no. |
| bool onBackgroundReport | Whether to report events after an application switches to the background. **true**:yes; **false**: no. |

**Returns**:

| Type | Description |
| -- | -- |
| int | <ul><br>         <li>{@link HIAPPEVENT_SUCCESS} The operation is successful.</li><br>         <li>{@link HIAPPEVENT_PROCESSOR_IS_NULL} The processor is nullptr.</li><br>         <li>{@link HIAPPEVENT_INVALID_PARAM_VALUE} Invalid Param value.</li><br>         <li>{@link HIAPPEVENT_INVALID_UID} Invalid uid.</li><br>         </ul><br>     For details, see {@link HiAppEvent_ErrorCode}. |

### OH_HiAppEvent_SetReportEvent()

```c
int OH_HiAppEvent_SetReportEvent(HiAppEvent_Processor* processor, const char* domain, const char* name, bool isRealTime)
```

**Description**

Sets the report event for the processor.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Processor](capi-hiappevent-hiappevent-processor.md)* processor | Pointer to the processor, that is, the pointer returned by **OH_HiAppEvent_CreateProcessor**. |
| const char* domain | Domain of the report event. |
| const char* name | Name of the report event. |
| bool isRealTime | Whether to report events in real time. The value **true** means to report events in real time,and **false** means the opposite. |

**Returns**:

| Type | Description |
| -- | -- |
| int | <ul><br>         <li>{@link HIAPPEVENT_SUCCESS} The operation is successful.</li><br>         <li>{@link HIAPPEVENT_PROCESSOR_IS_NULL} The processor is nullptr.</li><br>         <li>{@link HIAPPEVENT_INVALID_PARAM_VALUE} Invalid Param value.</li><br>         <li>{@link HIAPPEVENT_INVALID_UID} Invalid uid.</li><br>         </ul><br>     For details, see {@link HiAppEvent_ErrorCode}. |

### OH_HiAppEvent_SetCustomConfig()

```c
int OH_HiAppEvent_SetCustomConfig(HiAppEvent_Processor* processor, const char* key, const char* value)
```

**Description**

Sets the custom extension parameters of the processor.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Processor](capi-hiappevent-hiappevent-processor.md)* processor | Pointer to the processor, that is, the pointer returned by **OH_HiAppEvent_CreateProcessor**. |
| const char* key | Parameter name, which contains a maximum of 32 characters. |
| const char* value | Parameter value, which contains a maximum of 1024 characters. |

**Returns**:

| Type | Description |
| -- | -- |
| int | <ul><br>         <li>{@link HIAPPEVENT_SUCCESS} The operation is successful.</li><br>         <li>{@link HIAPPEVENT_PROCESSOR_IS_NULL} The processor is nullptr.</li><br>         <li>{@link HIAPPEVENT_INVALID_PARAM_VALUE} Invalid Param value.</li><br>         <li>{@link HIAPPEVENT_INVALID_UID} Invalid uid.</li><br>         <li>{@link HIAPPEVENT_INVALID_PARAM_VALUE_LENGTH} Invalid param value length.</li><br>         </ul><br>     For details, see {@link HiAppEvent_ErrorCode}. |

### OH_HiAppEvent_SetConfigId()

```c
int OH_HiAppEvent_SetConfigId(HiAppEvent_Processor* processor, int configId)
```

**Description**

Sets the configuration ID of the processor.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Processor](capi-hiappevent-hiappevent-processor.md)* processor | Pointer to the processor, that is, the pointer returned by **OH_HiAppEvent_CreateProcessor**. |
| int configId | Configuration ID of the processor, which is a natural number. |

**Returns**:

| Type | Description |
| -- | -- |
| int | <ul><br>         <li>{@link HIAPPEVENT_SUCCESS} The operation is successful.</li><br>         <li>{@link HIAPPEVENT_PROCESSOR_IS_NULL} The processor is nullptr.</li><br>         <li>{@link HIAPPEVENT_INVALID_PARAM_VALUE} Invalid Param value.</li><br>         <li>{@link HIAPPEVENT_INVALID_UID} Invalid uid.</li><br>         </ul><br>     For details, see {@link HiAppEvent_ErrorCode}. |

### OH_HiAppEvent_SetConfigName()

```c
int OH_HiAppEvent_SetConfigName(HiAppEvent_Processor* processor, const char* configName)
```

**Description**

Sets the configuration name of the processor.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Processor](capi-hiappevent-hiappevent-processor.md)* processor | Pointer to the processor, that is, the pointer returned by **OH_HiAppEvent_CreateProcessor**. |
| const char* configName | Configuration name of the data processor, which can contain only letters, digits,underscores (_), and dollar signs ($). It cannot start with a digit and cannot exceed 256 characters. |

**Returns**:

| Type | Description |
| -- | -- |
| int | <ul><br>         <li>{@link HIAPPEVENT_SUCCESS} The operation is successful.</li><br>         <li>{@link HIAPPEVENT_PROCESSOR_IS_NULL} The processor is nullptr.</li><br>         <li>{@link HIAPPEVENT_INVALID_PARAM_VALUE} Invalid Param value.</li><br>         <li>{@link HIAPPEVENT_INVALID_UID} Invalid uid.</li><br>         <li>{@link HIAPPEVENT_INVALID_PARAM_VALUE_LENGTH} Invalid param value length.</li><br>         </ul><br>     For details, see {@link HiAppEvent_ErrorCode}. |

### OH_HiAppEvent_SetReportUserId()

```c
int OH_HiAppEvent_SetReportUserId(HiAppEvent_Processor* processor, const char* const * userIdNames, int size)
```

**Description**

Sets the report user ID of the processor.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Processor](capi-hiappevent-hiappevent-processor.md)* processor | Pointer to the processor, that is, the pointer returned by **OH_HiAppEvent_CreateProcessor**. |
| const char* const * userIdNames | Name array of user IDs that can be reported by the processor. |
| int size | Length of the name array of user IDs. |

**Returns**:

| Type | Description |
| -- | -- |
| int | <ul><br>         <li>{@link HIAPPEVENT_SUCCESS} The operation is successful.</li><br>         <li>{@link HIAPPEVENT_PROCESSOR_IS_NULL} The processor is nullptr.</li><br>         <li>{@link HIAPPEVENT_INVALID_PARAM_VALUE} Invalid Param value.</li><br>         <li>{@link HIAPPEVENT_INVALID_UID} Invalid uid.</li><br>         <li>{@link HIAPPEVENT_INVALID_PARAM_VALUE_LENGTH} Invalid param value length.</li><br>         </ul><br>     For details, see {@link HiAppEvent_ErrorCode}. |

### OH_HiAppEvent_SetReportUserProperty()

```c
int OH_HiAppEvent_SetReportUserProperty(HiAppEvent_Processor* processor, const char* const * userPropertyNames, int size)
```

**Description**

Sets the report user property of the processor.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Processor](capi-hiappevent-hiappevent-processor.md)* processor | Pointer to the processor, that is, the pointer returned by **OH_HiAppEvent_CreateProcessor**. |
| const char* const * userPropertyNames | Name array of user properties that can be reported by the processor. |
| int size | Length of the name array of user properties. |

**Returns**:

| Type | Description |
| -- | -- |
| int | <ul><br>         <li>{@link HIAPPEVENT_SUCCESS} The operation is successful.</li><br>         <li>{@link HIAPPEVENT_PROCESSOR_IS_NULL} The processor is nullptr.</li><br>         <li>{@link HIAPPEVENT_INVALID_PARAM_VALUE} Invalid Param value.</li><br>         <li>{@link HIAPPEVENT_INVALID_UID} Invalid uid.</li><br>         <li>{@link HIAPPEVENT_INVALID_PARAM_VALUE_LENGTH} Invalid param value length.</li><br>         </ul><br>     For details, see {@link HiAppEvent_ErrorCode}. |

### OH_HiAppEvent_AddProcessor()

```c
int64_t OH_HiAppEvent_AddProcessor(HiAppEvent_Processor* processor)
```

**Description**

Adds a processor. You can add a processor to migrate event data to the cloud. You can preset theimplementation of the processor on the device and set its properties based on its constraints. Note that theconfiguration information of **Processor** must be provided by the data processor. Yet, as no data processor ispreset in the device for interaction for the moment, migrating events to the cloud is unavailable.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Processor](capi-hiappevent-hiappevent-processor.md)* processor | Pointer to the processor, that is, the pointer returned by **OH_HiAppEvent_CreateProcessor**. |

**Returns**:

| Type | Description |
| -- | -- |
| int64_t | <ul><br>         <li>process id if set is successful.</li><br>         <li>{@link HIAPPEVENT_PROCESSOR_IS_NULL}: The processor is nullptr.</li><br>         <li>{@link HIAPPEVENT_INVALID_PARAM_VALUE}: Invalid Param value.</li><br>         <li>{@link HIAPPEVENT_OPERATE_FAILED}: Name not found or register processor error.</li><br>         <li>{@link HIAPPEVENT_INVALID_UID}: Invalid uid.</li><br>         </ul><br>     For details, see {@link HiAppEvent_ErrorCode}. |

### OH_HiAppEvent_DestroyProcessor()

```c
void OH_HiAppEvent_DestroyProcessor(HiAppEvent_Processor* processor)
```

**Description**

Destroys a processor. Note: If a processor is no longer used, destroy it to release memory to prevent memoryleaks. After the processor is destroyed, set its pointer to null.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Processor](capi-hiappevent-hiappevent-processor.md)* processor | Pointer to the processor, that is, the pointer returned by **OH_HiAppEvent_CreateProcessor**. |

### OH_HiAppEvent_RemoveProcessor()

```c
int OH_HiAppEvent_RemoveProcessor(int64_t processorId)
```

**Description**

Removes a processor. Once a processor is removed, it stops reporting events. Note: This API only stops theprocessor reporting events but does not destroy the processor. You can call **OH_HiAppEvent_DestroyProcessor** todestroy the processor and release the memory.

**Since**: 18

**Parameters**:

| Parameter | Description |
| -- | -- |
| int64_t processorId | Unique ID of a processor. |

**Returns**:

| Type | Description |
| -- | -- |
| int | <ul><br>         <li>{@link HIAPPEVENT_SUCCESS}: The operation is successful.</li><br>         <li>{@link HIAPPEVENT_PROCESSOR_NOT_FOUND}: Processor not add.</li><br>         <li>{@link HIAPPEVENT_OPERATE_FAILED}: The operation is failed.</li><br>         <li>{@link HIAPPEVENT_INVALID_UID}: Invalid uid.</li><br>         </ul><br>     For details, see {@link HiAppEvent_ErrorCode}. |

### OH_HiAppEvent_CreateConfig()

```c
HiAppEvent_Config* OH_HiAppEvent_CreateConfig(void)
```

**Description**

Creates a pointer to the configuration object that sets the conditions for triggering system events.

**Since**: 15

**Returns**:

| Type | Description |
| -- | -- |
| [HiAppEvent_Config*](capi-hiappevent-hiappevent-config.md) | Pointer to the configuration object that sets the conditions for triggering system events. |

### OH_HiAppEvent_DestroyConfig()

```c
void OH_HiAppEvent_DestroyConfig(HiAppEvent_Config* config)
```

**Description**

Destroys a configuration object. Note: If a configuration object is no longer used, destroy it to releasememory to prevent memory leaks. After the object is destroyed, set its pointer to null.

**Since**: 15

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Config](capi-hiappevent-hiappevent-config.md)* config | Pointer to the configuration object, that is, the pointer returned bythe **OH_HiAppEvent_CreateConfig** API. |

### OH_HiAppEvent_SetConfigItem()

```c
int OH_HiAppEvent_SetConfigItem(HiAppEvent_Config* config, const char* itemName, const char* itemValue)
```

**Description**

Sets the items in the configuration object.

**Since**: 15

**Parameters**:

| Parameter | Description |
| -- | -- |
| [HiAppEvent_Config](capi-hiappevent-hiappevent-config.md)* config | Pointer to the configuration object, that is, the pointer returned bythe **OH_HiAppEvent_CreateConfig** API. |
| const char* itemName | Name of the configuration item. |
| const char* itemValue | Value of the configuration item. |

**Returns**:

| Type | Description |
| -- | -- |
| int | <ul><br>         <li>{@link HIAPPEVENT_SUCCESS} The operation is successful.</li><br>         <li>{@link HIAPPEVENT_EVENT_CONFIG_IS_NULL} The event config is null.</li><br>         <li>{@link HIAPPEVENT_INVALID_PARAM_VALUE} The item is invalid.</li><br>         </ul><br>     For details, see {@link HiAppEvent_ErrorCode}. |

### OH_HiAppEvent_SetEventConfig()

```c
int OH_HiAppEvent_SetEventConfig(const char* name, HiAppEvent_Config* config)
```

**Description**

Sets event configuration parameters.Configuration items vary depending on events. Currently, only the following events are supported:**MAIN_THREAD_JANK**. (For details about the parameter configuration, see {@link Main Thread Jank Event Overview}.)**MAIN_THREAD_JANK_V2**. (For details about the parameter configuration, see {@link Main Thread Jank Event Overview}.)**EVENT_APP_CRASH**. (For details about the parameter configuration, see {@link Crash Event Overview}.) This eventis supported since API version 24.

**Since**: 15

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* name | Name of the system event. |
| [HiAppEvent_Config](capi-hiappevent-hiappevent-config.md)* config | Pointer to the configuration object, that is, the pointer returned bythe **OH_HiAppEvent_CreateConfig** API. |

**Returns**:

| Type | Description |
| -- | -- |
| int | <ul><br>         <li>{@link HIAPPEVENT_SUCCESS} The operation is successful.</li><br>         <li>{@link HIAPPEVENT_INVALID_PARAM_VALUE} The config is invalid.</li><br>         </ul><br>     For details, see {@link HiAppEvent_ErrorCode}. |

### OH_HiAppEvent_ReportFrameworkMemAnomaly()

```c
int OH_HiAppEvent_ReportFrameworkMemAnomaly(enum OH_HiAppEvent_FrameworkType frameworkType, const char* frameworkVersion, const char* description)
```

**Description**

When a framework has a memory leak report event.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| enum OH_HiAppEvent_FrameworkType frameworkType | Framework type. |
| const char* frameworkVersion | Framework version. |
| const char* description | Description of the framework memory leak event. |

**Returns**:

| Type | Description |
| -- | -- |
| int | report result.<br>     {@link HIAPPEVENT_SUCCESS} The operation is successful.<br>     {@link HIAPPEVENT_INVALID_PARAM_VALUE} Invalid Param value.<br>     {@link HIAPPEVENT_OPERATE_FAILED} System/application event write failed, or timestamp retrieval failed.<br>     {@link HIAPPEVENT_REPORT_FREQUENCY_EXCEEDED} Report frequency exceeded. |


