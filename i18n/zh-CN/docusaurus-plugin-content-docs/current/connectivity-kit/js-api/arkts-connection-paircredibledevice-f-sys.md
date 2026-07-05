# pairCredibleDevice

## pairCredibleDevice

```TypeScript
function pairCredibleDevice(deviceId: string, transport: BluetoothTransport, callback: AsyncCallback<void>): void
```

Starts pairing with a credible remote Bluetooth device with transport. This interface does not trigger a dialog box and does not require user authorization. Only specific system application can use this function.

**起始版本：** 10

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | Indicates device ID. For example, "11:22:33:AA:BB:FF". |
| transport | BluetoothTransport | 是 | the transport of the remote device to pair. |
| callback | AsyncCallback&lt;void> | 是 | the callback of pairCredibleDevice. |

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
try {
    connection.pairCredibleDevice('68:13:24:79:4C:8C', connection.BluetoothTransport
        .TRANSPORT_BR_EDR, (err: BusinessError) => {
        if (err) {
            console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
            return;
        }
        console.info('pairCredibleDevice, err: ' + JSON.stringify(err));
    });
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

## pairCredibleDevice

```TypeScript
function pairCredibleDevice(deviceId: string, transport: BluetoothTransport): Promise<void>
```

Starts pairing with a credible remote Bluetooth device with transport. This interface does not trigger a dialog box and does not require user authorization. Only specific system application can use this function.

**起始版本：** 10

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | Indicates device ID. For example, "11:22:33:AA:BB:FF". |
| transport | BluetoothTransport | 是 | the transport of the remote device to pair. |

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
try {
    connection.pairCredibleDevice('68:13:24:79:4C:8C', 0).then(() => {
        console.info('PairCredibleDevice');
    }, (err: BusinessError) => {
        console.error('PairCredibleDevice:errCode' + err.code + ', errMessage: ' + err.message);
    });
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

