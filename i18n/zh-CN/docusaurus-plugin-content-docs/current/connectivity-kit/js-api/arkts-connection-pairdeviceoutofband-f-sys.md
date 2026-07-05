# pairDeviceOutOfBand

## pairDeviceOutOfBand

```TypeScript
function pairDeviceOutOfBand(transport: BluetoothTransport, p192Data: OobData | null,
    p256Data: OobData | null): Promise<void>
```

Starts pairing with a remote Bluetooth device using the Out Of Band mechanism. This function is asynchronous, and the pairing status is obtained by listening to the bondStateChange event. If both p192Data and p256Data are null, the function call will fail. If both p192Data and p256Data are used simultaneously, p256Data takes effect.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| transport | BluetoothTransport | 是 | Indicates the transport of a remote Bluetooth device. |
| p192Data | OobData \| null | 是 | The out-of-band data (P192), or null if not available. |
| p256Data | OobData \| null | 是 | The out-of-band data (P256), or null if not available. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns the promise object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 801 | Capability not supported. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

**示例：**

```TypeScript
import { common } from '@kit.ConnectivityKit';
import { BusinessError } from '@kit.BasicServicesKit';
try {
    let transport: connection.BluetoothTransport = connection.BluetoothTransport.TRANSPORT_LE;
    let addressInfo: common.BluetoothAddress = {
        "address": "11:22:33:44:55:66",
        "addressType": common.BluetoothAddressType.REAL, // 必须为实际MAC地址类型
        "rawAddressType": common.BluetoothRawAddressType.RANDOM
    };
    let confirmHash: Uint8Array = new Uint8Array([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x0E, 0x0F, 0x10]);
    let randomHash: Uint8Array = new Uint8Array([0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x88, 0x99, 0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF, 0x11]);
    let oobData: connection.OobData = {
        "deviceId": addressInfo,
        "confirmationHash": confirmHash,
        "randomizerHash": randomHash,
        "deviceName": "testName",
        "deviceRole": connection.DeviceRole.DEVICE_ROLE_PERIPHERAL_ONLY
    }
    connection.pairDeviceOutOfBand(transport, null, oobData).then(() => {
        console.info('pairDeviceOufOfBand');
    }, (err: BusinessError) => {
        console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
    });
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

