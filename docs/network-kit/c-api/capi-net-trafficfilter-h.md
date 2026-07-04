# net_trafficfilter.h

## Overview

Defines the APIs for traffic filtering.

**Library**: libnet_trafficfilter.so

**System capability**: SystemCapability.Communication.NetManager.NetFirewall

**Since**: 26.0.0

**Related module**: [TrafficFilter](capi-trafficfilter.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [int32_t OH_TrafficFilter_CreateRedirector(uint32_t group_id, uint32_t priority, OH_TrafficFilter_Redirector** redirector
)](#oh_trafficfilter_createredirector) | Creates a traffic redirection instanceCreates a traffic redirection instance for transparent TCP traffic redirection to proxy serverResource Management: You must call [OH_TrafficFilter_DestroyRedirector](capi-net-trafficfilter-h.md#oh_trafficfilter_destroyredirector) to release resources.If this function fails, no valid redirector is returned. |
| [int32_t OH_TrafficFilter_DestroyRedirector(OH_TrafficFilter_Redirector* redirector)](#oh_trafficfilter_destroyredirector) | Destroys a traffic redirection instance.Destroys the redirection instance and releases related resources, including rules.The handle becomes invalid after this call. |
| [int32_t OH_TrafficFilter_AddRedirectRule(OH_TrafficFilter_Redirector* redirector, const OH_TrafficFilter_RedirectRule* rule
)](#oh_trafficfilter_addredirectrule) | Adds a redirection ruleAdds a TCP traffic redirection rule to redirect matched traffic to specified proxy serverTo clear redirect rules, you need to call [OH_TrafficFilter_ClearRedirectRule](capi-net-trafficfilter-h.md#oh_trafficfilter_clearredirectrule). |
| [int32_t OH_TrafficFilter_ClearRedirectRule(OH_TrafficFilter_Redirector* redirector)](#oh_trafficfilter_clearredirectrule) | Clear all redirection rule |
| [int32_t OH_TrafficFilter_QueryProcess(const OH_TrafficFilter_ConnectionInfo* connection_info, OH_TrafficFilter_ProcessInfo* process_info
)](#oh_trafficfilter_queryprocess) | Queries corresponding process information based on connection informationQueries corresponding process information based on five-tuple information |

## Function description

### OH_TrafficFilter_CreateRedirector()

```c
int32_t OH_TrafficFilter_CreateRedirector(uint32_t group_id, uint32_t priority, OH_TrafficFilter_Redirector** redirector
)
```

**Description**

Creates a traffic redirection instanceCreates a traffic redirection instance for transparent TCP traffic redirection to proxy serverResource Management: You must call [OH_TrafficFilter_DestroyRedirector](capi-net-trafficfilter-h.md#oh_trafficfilter_destroyredirector) to release resources.If this function fails, no valid redirector is returned.

**Required permission**: ohos.permission.kernel.TRAFFIC_FILTER

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| uint32_t group_id | Redirection chain identifier.This is the logical grouping ID within the application.Multiple redirectors within the same application can use different group_id.The same group_id from different applications will be automatically isolated.The valid range is [{@link OH_TRAFFICFILTER_MIN_GROUP_ID}, {@link OH_TRAFFICFILTER_MAX_GROUP_ID}],including both boundaries. If group_id is outside this range, this function returns[OH_TRAFFICFILTER_ERROR_INVALID_PARAM](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode). |
| uint32_t priority | Priority.Determines execution order between different group_id chains. A smaller number executes first.Note: Redirector priority is higher than packet filter priority.The valid range is [{@link OH_TRAFFICFILTER_MIN_PRIORITY}, {@link OH_TRAFFICFILTER_MAX_PRIORITY}],including both boundaries. If priority is outside this range, this function returns[OH_TRAFFICFILTER_ERROR_INVALID_PARAM](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode). |
| redirector | Output parameter, the redirection handle on success. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | <ul><li>[OH_TRAFFICFILTER_OK](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) on success.</li><br>     <li>[OH_TRAFFICFILTER_ERROR_PERMISSION_DENIED](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) if permission is denied.</li><br>     <li>[OH_TRAFFICFILTER_ERROR_GROUP_ID_IN_USE](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) when group_id already exists.</li><br>     <li>[OH_TRAFFICFILTER_ERROR_INVALID_PARAM](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) if priority is invalid.</li><br>     <li>[OH_TRAFFICFILTER_ERROR_NFQUEUE_ERROR](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) if NFQueue initialization fails.</li></ul> |

### OH_TrafficFilter_DestroyRedirector()

```c
int32_t OH_TrafficFilter_DestroyRedirector(OH_TrafficFilter_Redirector* redirector)
```

**Description**

Destroys a traffic redirection instance.Destroys the redirection instance and releases related resources, including rules.The handle becomes invalid after this call.

**Required permission**: ohos.permission.kernel.TRAFFIC_FILTER

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_TrafficFilter_Redirector](capi-trafficfilter-oh-trafficfilter-redirector.md)* redirector | OH_TrafficFilter_Redirector handle |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | <ul><li>[OH_TRAFFICFILTER_OK](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) on success.</li><br>     <li>[OH_TRAFFICFILTER_ERROR_PERMISSION_DENIED](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) if permission is denied.</li><br>     <li>[OH_TRAFFICFILTER_ERROR_INVALID_PARAM](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) if redirector is NULL.</li><br>     <li>[OH_TRAFFICFILTER_ERROR_NOT_FOUND](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) if the specified redirector handle is not found.</li></ul> |

### OH_TrafficFilter_AddRedirectRule()

```c
int32_t OH_TrafficFilter_AddRedirectRule(OH_TrafficFilter_Redirector* redirector, const OH_TrafficFilter_RedirectRule* rule
)
```

**Description**

Adds a redirection ruleAdds a TCP traffic redirection rule to redirect matched traffic to specified proxy serverTo clear redirect rules, you need to call [OH_TrafficFilter_ClearRedirectRule](capi-net-trafficfilter-h.md#oh_trafficfilter_clearredirectrule).

**Required permission**: ohos.permission.kernel.TRAFFIC_FILTER

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_TrafficFilter_Redirector](capi-trafficfilter-oh-trafficfilter-redirector.md)* redirector | OH_TrafficFilter_Redirector handle |
| rule | Redirection rule. Cannot be NULL. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | <ul><li>[OH_TRAFFICFILTER_OK](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) on success.</li><br>     <li>[OH_TRAFFICFILTER_ERROR_PERMISSION_DENIED](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) if permission is denied.</li><br>     <li>[OH_TRAFFICFILTER_ERROR_INVALID_PARAM](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) if redirector or rule is NULL.</li><br>     <li>[OH_TRAFFICFILTER_ERROR_TOO_MANY_RULES](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) if too many rules added.</li></ul> |

### OH_TrafficFilter_ClearRedirectRule()

```c
int32_t OH_TrafficFilter_ClearRedirectRule(OH_TrafficFilter_Redirector* redirector)
```

**Description**

Clear all redirection rule

**Required permission**: ohos.permission.kernel.TRAFFIC_FILTER

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_TrafficFilter_Redirector](capi-trafficfilter-oh-trafficfilter-redirector.md)* redirector | OH_TrafficFilter_Redirector handle |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | <ul><li>[OH_TRAFFICFILTER_OK](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) on success.</li><br>     <li>[OH_TRAFFICFILTER_ERROR_PERMISSION_DENIED](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) if permission is denied.</li><br>     <li>[OH_TRAFFICFILTER_ERROR_INVALID_PARAM](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) if redirector is NULL.</li></ul> |

### OH_TrafficFilter_QueryProcess()

```c
int32_t OH_TrafficFilter_QueryProcess(const OH_TrafficFilter_ConnectionInfo* connection_info, OH_TrafficFilter_ProcessInfo* process_info
)
```

**Description**

Queries corresponding process information based on connection informationQueries corresponding process information based on five-tuple information

**Required permission**: ohos.permission.kernel.TRAFFIC_FILTER

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const OH_TrafficFilter_ConnectionInfo](capi-trafficfilter-oh-trafficfilter-connectioninfo.md)* connection_info | Input connection information |
| process_info | Output process information |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | <ul><li>[OH_TRAFFICFILTER_OK](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) on success.</li><br>     <li>[OH_TRAFFICFILTER_ERROR_PERMISSION_DENIED](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) if permission is denied.</li><br>     <li>[OH_TRAFFICFILTER_ERROR_INVALID_PARAM](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) if input parameters are invalid.</li><br>     <li>[OH_TRAFFICFILTER_ERROR_NOT_FOUND](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode) if process not found.</li></ul> |


