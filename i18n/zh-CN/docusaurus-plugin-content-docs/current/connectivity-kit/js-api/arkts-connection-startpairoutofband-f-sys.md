# startPairOutOfBand

## startPairOutOfBand

```TypeScript
function startPairOutOfBand(deviceId: string, transport: BluetoothTransport, p192Data?: OobData,
    p256Data?: OobData): Promise<void>
```

Starts pairing with the specific remote Bluetooth device using the Out Of Band mechanism. This function is asynchronous, and the pairing status is obtained by listening to the bondStateChange event. If both p192Data and p256Data are not used, the function call will fail. If both p192Data and p256Data are used simultaneously, p256Data takes effect.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | string | 是 | Indicates device ID. For example, "11:22:33:AA:BB:FF". |
| transport | BluetoothTransport | 是 | Indicates the transport of a remote Bluetooth device. |
| p192Data | OobData | 否 |  |
| p256Data | OobData | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 801 | Capability not supported. |
| 2900003 | Bluetooth disabled. |
| 2900099 | Operation failed. |

