# allowAutoConnect

## allowAutoConnect

```TypeScript
function allowAutoConnect(netId: int, isAllowed: boolean): void
```

Set whther to allow automatic connnect by networkId. The network can be associated with again if isAllowed is true, else not.

**Since:** 17

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| netId | int | Yes | Identifies the network to be set. The value of networkId cannot be less than 0. |
| isAllowed | boolean | Yes | Identifies whether allow auto connect or not. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 401 | Invalid parameters. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |

