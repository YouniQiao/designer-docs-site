# startBluetoothSearch

## startBluetoothSearch

```TypeScript
function startBluetoothSearch(
      request: BluetoothSearchRequest, callback: Callback<BluetoothScanResult>): void
```

Starts Bluetooth scanning and matches the device ID list in the input parameter with the Bluetooth scanning result. If the matching is successful, the Bluetooth device information is returned through the callback.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.APPROXIMATELY_LOCATION

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| request | BluetoothSearchRequest | 是 | Indicates the configuration parameters  for the Bluetooth search function. |
| callback | Callback&lt;BluetoothScanResult> | 是 | Callback used to return ${BluetoothScanResult}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does  not have the permission required to call the API. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.startBluetoothSearch} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301800 | Failed to start Bluetooth scanning. |

