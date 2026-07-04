# OH_QoS_GewuSubmitRequestResult

```c
typedef struct OH_QoS_GewuSubmitRequestResult {...} OH_QoS_GewuSubmitRequestResult
```

## Overview

Defines a struct for the return result of the **OH_QoS_GewuSubmitRequest()** API.If the operation is successful, a handle of the request is returned.If the operation fails, the corresponding error code is returned.

**Since**: 20

**Related module**: [QoS](capi-qos.md)

**Header file**: [qos.h](capi-qos-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| OH_QoS_GewuRequest request | Handle of the request<br>**Since**: 20 |
| [OH_QoS_GewuErrorCode](capi-qos-h.md#oh_qos_gewuerrorcode) error | Error code of submitting a Gewu request<br>**Since**: 20 |


