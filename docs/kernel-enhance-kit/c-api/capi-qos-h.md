# qos.h

## Overview

Declares the QoS interfaces in C.Quality-of-service (QoS) refers to the priority scheduling attribute of tasksin OpenHarmony. Developers can use QoS to categorize tasks to be executed toindicate the degree of their relevance to user interactions, the system canschedule the time and running order of tasks according to the QoS set by the tasks.

**Library**: libqos.so

**System capability**: SystemCapability.Resourceschedule.QoS.Core

**Since**: 12

**Related module**: [QoS](capi-qos.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [OH_QoS_GewuCreateSessionResult](capi-qos-oh-qos-gewucreatesessionresult.md) | OH_QoS_GewuCreateSessionResult | Defines a struct for the return results of the **OH_QoS_GewuCreateSession()** API.If the operation is successful,the created session is returned. If the operation fails, the corresponding error code is returned. |
| [OH_QoS_GewuSubmitRequestResult](capi-qos-oh-qos-gewusubmitrequestresult.md) | OH_QoS_GewuSubmitRequestResult | Defines a struct for the return result of the **OH_QoS_GewuSubmitRequest()** API.If the operation is successful, a handle of the request is returned.If the operation fails, the corresponding error code is returned. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [QoS_Level](#qos_level) | QoS_Level | Enumerates the QoS levels. |
| [OH_QoS_GewuErrorCode](#oh_qos_gewuerrorcode) | OH_QoS_GewuErrorCode | Enumerates the Gewu error codes. |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [int OH_QoS_SetThreadQoS(QoS_Level level)](#oh_qos_setthreadqos) | - | Sets the QoS level for the calling thread. |
| [int OH_QoS_ResetThreadQoS()](#oh_qos_resetthreadqos) | - | Cancels the QoS level of the calling thread. |
| [int OH_QoS_GetThreadQoS(QoS_Level *level)](#oh_qos_getthreadqos) | - | Obtains the QoS level of the calling thread. |
| [typedef void (\*OH_QoS_GewuOnResponse)(void* context, const char* response)](#oh_qos_gewuonresponse) | OH_QoS_GewuOnResponse | Callback to receive response of the request. |
| [OH_QoS_GewuCreateSessionResult OH_QoS_GewuCreateSession(const char* attributes)](#oh_qos_gewucreatesession) | - | Creates a Gewu session. The lifecycle of the session object starts when the **CreateSession** functionreturns and ends when **DestroySession** is called.`const char* attributes`: JSON string of the session attributes, whichsupports the following fields:- **model**: String. Path to model directory for the session.An example of json string of session attributes: |
| [OH_QoS_GewuErrorCode OH_QoS_GewuDestroySession(OH_QoS_GewuSession session)](#oh_qos_gewudestroysession) | - | Destroys a Gewu session.You are advised to wait until all requests are completed or aborted before callingthis API. If there are ongoing requests when this API is called, the requests will be aborted,and no further response will be recevied.Note that after this API is called, the session object can no longer be used. |
| [OH_QoS_GewuErrorCode OH_QoS_GewuAbortRequest(OH_QoS_GewuSession session, OH_QoS_GewuRequest request)](#oh_qos_gewuabortrequest) | - | Abort the specified request.After this function is successfully called, the client will not receive anyresponse to the request, and the request handle cannot be used. |
| [OH_QoS_GewuSubmitRequestResult OH_QoS_GewuSubmitRequest(OH_QoS_GewuSession session, const char* request, OH_QoS_GewuOnResponse callback, void* context)](#oh_qos_gewusubmitrequest) | - | Submits a request. |

## Enum type description

### QoS_Level

```c
enum QoS_Level
```

**Description**

Enumerates the QoS levels.

**Since**: 12

| Enum item | Description |
| -- | -- |
| QOS_BACKGROUND = 0 | Means the QoS level is background. |
| QOS_UTILITY | Means the QoS level is utility. |
| QOS_DEFAULT | Means the QoS level is default. |
| QOS_USER_INITIATED | Means the QoS level is user-initiated. |
| QOS_DEADLINE_REQUEST | Means the QoS level is user-request. |
| QOS_USER_INTERACTIVE | Means the QoS level is user-interactive. |

### OH_QoS_GewuErrorCode

```c
enum OH_QoS_GewuErrorCode
```

**Description**

Enumerates the Gewu error codes.

**Since**: 20

| Enum item | Description |
| -- | -- |
| OH_QOS_GEWU_OK     = 0 | Means the result is OK<br>**Since**: 20 |
| OH_QOS_GEWU_NOPERM = 201 | No permission<br>**Since**: 20 |
| OH_QOS_GEWU_NOMEM  = 203 | No memory<br>**Since**: 20 |
| OH_QOS_GEWU_INVAL  = 401 | Invalid input<br>**Since**: 20 |
| OH_QOS_GEWU_EXIST  = 501 | Already exists<br>**Since**: 20 |
| OH_QOS_GEWU_NOENT  = 502 | No entity<br>**Since**: 20 |
| OH_QOS_GEWU_NOSYS  = 801 | Subsystem does not exist<br>**Since**: 20 |
| OH_QOS_GEWU_FAULT  = 901 | All other faults<br>**Since**: 20 |


## Function description

### OH_QoS_SetThreadQoS()

```c
int OH_QoS_SetThreadQoS(QoS_Level level)
```

**Description**

Sets the QoS level for the calling thread.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [QoS_Level](capi-qos-h.md#qos_level) level | Sets the QoS level. For details, see [QoS_Level](capi-qos-h.md#qos_level). |

**Returns**:

| Type | Description |
| -- | -- |
| int | 0 is returned if the operation is successful; -1 is returned if level is out of range or internal<br>     error failed. |

**Reference**:

[QoS_Level](capi-qos-h.md#qos_level)


### OH_QoS_ResetThreadQoS()

```c
int OH_QoS_ResetThreadQoS()
```

**Description**

Cancels the QoS level of the calling thread.

**Since**: 12

**Returns**:

| Type | Description |
| -- | -- |
| int | 0 is returned if the operation is successful; -1 is returned if level is out of range or internal<br>     error failed. |

**Reference**:

[QoS_Level](capi-qos-h.md#qos_level)


### OH_QoS_GetThreadQoS()

```c
int OH_QoS_GetThreadQoS(QoS_Level *level)
```

**Description**

Obtains the QoS level of the calling thread.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [QoS_Level](capi-qos-h.md#qos_level) *level | QoS level of the calling thread. The parameter is an output parameter and is written to this variablein [QoS_Level](capi-qos-h.md#qos_level) format. |

**Returns**:

| Type | Description |
| -- | -- |
| int | 0 is returned if the operation is successful; -1 is returned if level is out of range or internal<br>     error failed. |

**Reference**:

[QoS_Level](capi-qos-h.md#qos_level)


### OH_QoS_GewuOnResponse()

```c
typedef void (*OH_QoS_GewuOnResponse)(void* context, const char* response)
```

**Description**

Callback to receive response of the request.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| (void\* context | User context handle specified when the request is submitted. |
| reponse | The json string of the response, including the following parameters:- message: A message that contains the following fields.- role: string. Must be "assistant".- content: string. The message generated by the model in response to user messages.- finish_reason: string or null. The reason the inference stopped. Possible values:- null: Not finished yet, only present in streaming mode.- "stop": The model stopped natually.- "abort": The inference request was aborted.- "length": The generated tokens reached the limit. |

### OH_QoS_GewuCreateSession()

```c
OH_QoS_GewuCreateSessionResult OH_QoS_GewuCreateSession(const char* attributes)
```

**Description**

Creates a Gewu session. The lifecycle of the session object starts when the **CreateSession** functionreturns and ends when **DestroySession** is called.`const char* attributes`: JSON string of the session attributes, whichsupports the following fields:- **model**: String. Path to model directory for the session.An example of json string of session attributes:

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* attributes | JSON string of session attributes. |

**Returns**:

| Type | Description |
| -- | -- |
| Result | Result of creating a session. |

### OH_QoS_GewuDestroySession()

```c
OH_QoS_GewuErrorCode OH_QoS_GewuDestroySession(OH_QoS_GewuSession session)
```

**Description**

Destroys a Gewu session.You are advised to wait until all requests are completed or aborted before callingthis API. If there are ongoing requests when this API is called, the requests will be aborted,and no further response will be recevied.Note that after this API is called, the session object can no longer be used.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| OH_QoS_GewuSession session | Handle of the session to destroy. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_QoS_GewuErrorCode](capi-qos-h.md#oh_qos_gewuerrorcode) | Error code.<br>     <ul><br>         <li>[OH_QOS_GEWU_OK](capi-qos-h.md#oh_qos_gewuerrorcode) The session is destroyed successfully.</li><br>         <li>[OH_QOS_GEWU_NOENT](capi-qos-h.md#oh_qos_gewuerrorcode) The session is not found. </li><br>     </ul> |

### OH_QoS_GewuAbortRequest()

```c
OH_QoS_GewuErrorCode OH_QoS_GewuAbortRequest(OH_QoS_GewuSession session, OH_QoS_GewuRequest request)
```

**Description**

Abort the specified request.After this function is successfully called, the client will not receive anyresponse to the request, and the request handle cannot be used.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| OH_QoS_GewuSession session | Handle of the session to which the request is submitted. |
| OH_QoS_GewuRequest request | Handle of the request. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_QoS_GewuErrorCode](capi-qos-h.md#oh_qos_gewuerrorcode) | Error code.<br>     <ul><br>         <li>[OH_QOS_GEWU_OK](capi-qos-h.md#oh_qos_gewuerrorcode) The request is aborted successfully.</li><br>         <li>[OH_QOS_GEWU_NOENT](capi-qos-h.md#oh_qos_gewuerrorcode) The request is not found. </li><br>     </ul> |

### OH_QoS_GewuSubmitRequest()

```c
OH_QoS_GewuSubmitRequestResult OH_QoS_GewuSubmitRequest(OH_QoS_GewuSession session, const char* request, OH_QoS_GewuOnResponse callback, void* context)
```

**Description**

Submits a request.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| OH_QoS_GewuSession session | Session to which the request is submitted. |
| const char* request | JSON string of the request. |
| [OH_QoS_GewuOnResponse](capi-qos-h.md#oh_qos_gewuonresponse) callback | Callback for receiving the response. |
| void* context | Pointer to the user context to be passed to the callback. |

**Returns**:

| Type | Description |
| -- | -- |
| Result | Result code.<br> - OH_QOS_GEWU_OK: The request is successfully submitted.<br> - OH_QOS_GEWU_NOMEM: The request fails to be submitted due to insufficient memory. |


