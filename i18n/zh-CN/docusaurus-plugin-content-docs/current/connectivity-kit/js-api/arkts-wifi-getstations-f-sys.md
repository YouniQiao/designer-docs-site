# getStations

## getStations

```TypeScript
function getStations(): Array<StationInfo>
```

Obtains the list of clients that are connected to a Wi-Fi hotspot. <p>This method can only be used on a device that serves as a Wi-Fi hotspot.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.getHotspotStations

**需要权限：** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.MANAGE_WIFI_HOTSPOT

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;StationInfo> | Returns the list of clients that are connected to the Wi-Fi hotspot. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
    let stations = wifi.getStations();
    console.info("result:" + JSON.stringify(stations));        
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

