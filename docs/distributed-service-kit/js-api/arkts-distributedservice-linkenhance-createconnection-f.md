# createConnection

## Modules to Import

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
```

## createConnection

```TypeScript
function createConnection(deviceId: string, name: string): Connection
```

Creates a **Connection** object on the device that functions as the client. The device can then initiate connection requests to the device that functions as the server.

**Since:** 20

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the stage model.

<!--Device-linkEnhance-function createConnection(deviceId: string, name: string): Connection--><!--Device-linkEnhance-function createConnection(deviceId: string, name: string): Connection-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Device ID of the peer device, that is, the BLE MAC address of the peer device. For details about how to obtain the BLE MAC address, see [BLE Advertising and Scanning](../../../../connectivity/bluetooth/ble-development-guide.md). |
| name | string | Yes | Server name of the device to be connected. The value is a string of up to 255 bytes. It cannot be empty. |

**Return value:**

| Type | Description |
| --- | --- |
| [Connection](arkts-distributedservice-linkenhance-connection-i.md) | **Connection** object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the linkEnhance function has been trimmed.<br>**Applicable version:** 26.0.0 and later |
| [32390206](../../apis-distributedservice-kit/errorcode-link-enhance.md#32390206-invalid-parameter) | Invalid parameter. |

**Example**

On the device that functions as the client, call the createConnection() to create a Connection object.

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "testDemo";

try {
  let peerDeviceId: string = "00:11:22:33:44:55";
  hilog.info(0x0000, TAG, 'connection server deviceId = ' + peerDeviceId);
  let connection: linkEnhance.Connection = linkEnhance.createConnection(peerDeviceId, "demo");
} catch (err) {
  hilog.error(0x0000, TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' +
  (err as BusinessError).message);
}

```

