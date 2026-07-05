# addPortAuthorization (System API)

## Modules to Import

```TypeScript
import { serial } from '@ohos.busManager.serial';
```

## addPortAuthorization

```TypeScript
function addPortAuthorization(tokenId: string, deviceId: string): Promise<void>
```

Adds the permission for applications to access the serial port. This API is open only to system applications that display a pop-up window for serial port authorization.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.BusManager.Serial

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenId | string | Yes | Token ID of the authorized application. |
| deviceId | string | Yes | Serial port device ID.<br>For an onboard serial port, the value is portName. For a USB virtual serial port, the value is thecombination of VID+PID+SN. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | - Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. Called by non-system application |
| [35700001](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700001-abnormal-service) | Service error. |
| [35700002](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700002-parameter-error) | Invalid parameter. |
| [35700008](../../apis-basic-services-kit/errorcode-busmanager-serial.md#35700008-permission-denied) | Permission denied. |

