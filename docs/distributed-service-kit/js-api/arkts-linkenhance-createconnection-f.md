# createConnection

## createConnection

```TypeScript
function createConnection(deviceId: string, name: string): Connection
```

作为客户端的设备创建连接对象，以便后续向服务端设备发起连接。

**Since:** 20

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | 连接的目标设备的deviceId，即对端设备的BLE MAC地址。BLE MAC的获取方法，请参考  [查找设备](docroot://connectivity/bluetooth/ble-development-guide.md)。 |
| name | string | Yes | 连接的目标设备的服务名，非空字符串，最大长度255字节。 |

**Return value:**

| Type | Description |
| --- | --- |
| Connection | 创建成功的连接对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported  because the linkEnhance function has been trimmed [since 26.0.0] |
| 32390206 | Invalid parameter. |

**Example**

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

