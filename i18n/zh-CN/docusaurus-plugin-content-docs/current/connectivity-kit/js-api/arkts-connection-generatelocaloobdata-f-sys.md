# generateLocalOobData

## generateLocalOobData

```TypeScript
function generateLocalOobData(transport: BluetoothTransport): Promise<OobData>
```

Generate out-of-band data of the local device.

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

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;OobData> | Returns the out-of-band data. |

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
import { BusinessError } from '@kit.BasicServicesKit';
try {
    let transport: connection.BluetoothTransport = connection.BluetoothTransport.TRANSPORT_LE;
    connection.generateLocalOobData(transport).then((oobData: connection.OobData) => {
        console.info(`generateLocalOobData: ${JSON.stringify(oobData)}`);
    }, (err: BusinessError) => {
        console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
    });
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

