# updateCloudBluetoothDevice

## updateCloudBluetoothDevice

```TypeScript
function updateCloudBluetoothDevice(trustedPairedDevices: TrustedPairedDevices): Promise<void>
```

update cloud devices.

**起始版本：** 15

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| trustedPairedDevices | TrustedPairedDevices | 是 | Indicates the cloud devices. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns the promise object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// promise
/**
 * 更新云设备到蓝牙设置项。
 */
const trustPairDeviceArr: connection.TrustedPairedDevice[] = [];
let descBuffer = new ArrayBuffer(1);
trustPairDeviceArr.push({
    sn: '',
    deviceType: '',
    modelId: '',
    manufactory: '',
    productId: '',
    hiLinkVersion: '',
    macAddress: '11:22:33:44:55:66',
    serviceType: '',
    serviceId: '',
    deviceName: '',
    uuids: '',
    bluetoothClass: 0,
    token: descBuffer,
    deviceNameTime: 0,
    secureAdvertisingInfo: descBuffer,
    pairState: 0
    });
const trustPairDevices: connection.TrustedPairedDevices = { trustedPairedDevices: trustPairDeviceArr };
try {
    connection.updateCloudBluetoothDevice(trustPairDevices)
        .then(() => {
            console.info('updateCloudBluetoothDevice success!');
        })
        .catch((err: BusinessError) => {
            console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
        });
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}


```

