# getStations

## getStations

```TypeScript
function getStations(): Array<StationInfo>
```

Obtain the list of stations that are connected to the Wi-Fi hotspot. This method can only be used on a device that serves as a Wi-Fi hotspot.

**起始版本：** 10

**需要权限：** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;StationInfo> | the list of clients that are connected to the Wi-Fi hotspot. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 801 | Capability not supported. |
| 2601000 | Operation failed. |

**示例：**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  let stations = wifiManager.getStations();
  console.info("result:" + JSON.stringify(stations));    
}catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

