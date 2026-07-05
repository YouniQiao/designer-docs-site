# OH_QoS_GewuCreateSessionResult

```c
typedef struct OH_QoS_GewuCreateSessionResult {...} OH_QoS_GewuCreateSessionResult
```

## Overview

Defines a struct for the return results of the **OH_QoS_GewuCreateSession()** API.If the operation is successful,the created session is returned. If the operation fails, the corresponding error code is returned.

**Since**: 20

**Related module**: [QoS](capi-qos.md)

**Header file**: [qos.h](capi-qos-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| OH_QoS_GewuSession session | Handle of the session<br>**Since**: 20 |
| [OH_QoS_GewuErrorCode](capi-qos-h.md#oh_qos_gewuerrorcode) error | Error code of creating a session<br>**Since**: 20 |


