# getTrustedDevices

## getTrustedDevices

```TypeScript
function getTrustedDevices(): DeviceNodeInfo[]
```

Obtains device information about all trusted devices. Trusted devices are devices that have been previously authenticated. This API returns a list of all such devices currently visible on the network.

**Since:** 26.1.0

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.SoftBus.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| DeviceNodeInfo[] | list of the obtained device information in  [DeviceNodeInfo]conversation.DeviceNodeInfo. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. The application does not have the required permission to  access distributed data. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. |
| 2000001 | Internal error. |

