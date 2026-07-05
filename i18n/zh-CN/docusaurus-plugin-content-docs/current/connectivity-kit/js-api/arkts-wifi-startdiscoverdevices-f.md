# startDiscoverDevices

## startDiscoverDevices

```TypeScript
function startDiscoverDevices(): boolean
```

Discover Wi-Fi P2P devices.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.startDiscoverP2pDevices

**需要权限：** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION

**系统能力：** SystemCapability.Communication.WiFi.P2P

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the operation is successful, returns {@code false} otherwise. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
  wifi.startDiscoverDevices();  
}catch(error){
  console.error("failed:" + JSON.stringify(error));
}

```

