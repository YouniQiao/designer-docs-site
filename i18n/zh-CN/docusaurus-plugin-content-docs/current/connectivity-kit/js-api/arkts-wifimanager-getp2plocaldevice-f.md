# getP2pLocalDevice

## getP2pLocalDevice

```TypeScript
function getP2pLocalDevice(): Promise<WifiP2pDevice>
```

Obtain the information about own device information. DeviceAddress in the returned WifiP2pDevice will be set "00:00:00:00:00:00", if ohos.permission.GET_WIFI_LOCAL_MAC is not granted.

**起始版本：** 11

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.P2P

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;WifiP2pDevice> | Returns the information about own device info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2801000 | Operation failed. |

## getP2pLocalDevice

```TypeScript
function getP2pLocalDevice(callback: AsyncCallback<WifiP2pDevice>): void
```

Obtain the information about own device information. DeviceAddress in the returned WifiP2pDevice will be set "00:00:00:00:00:00", if ohos.permission.GET_WIFI_LOCAL_MAC is not granted.

**起始版本：** 11

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.P2P

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;WifiP2pDevice> | 是 | Indicates callback of function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2801000 | Operation failed. |
| 2801001 | Wi-Fi STA disabled. |

**示例：**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';
  // p2p已经建组或者连接成功，才能正常获取到本端设备信息
  wifiManager.getP2pLocalDevice((err, data:wifiManager.WifiP2pDevice) => {
    if (err) {
        console.error("get P2P local device error");
        return;
    }
    console.info("get P2P local device: " + JSON.stringify(data));
  });

  wifiManager.getP2pLocalDevice().then(data => {
    console.info("get P2P local device: " + JSON.stringify(data));
  });

```

