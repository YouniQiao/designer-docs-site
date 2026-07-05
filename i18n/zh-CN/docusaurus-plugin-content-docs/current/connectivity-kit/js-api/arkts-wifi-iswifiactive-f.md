# isWifiActive

## isWifiActive

```TypeScript
function isWifiActive(): boolean
```

Queries the Wi-Fi status

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.isWifiActive

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.STA

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the Wi-Fi is active, returns {@code false} otherwise. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
  let isWifiActive = wifi.isWifiActive();
  console.info("isWifiActive:" + isWifiActive);
}catch(error){
  console.error("failed:" + JSON.stringify(error));
}

```

