# stopBluetoothSearch

## stopBluetoothSearch

```TypeScript
function stopBluetoothSearch(callback?: Callback<BluetoothScanResult>): void
```

Stop Bluetooth scanning and searching.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;BluetoothScanResult> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.startBluetoothSearch} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

