# getDeviceConfigs

## getDeviceConfigs

```TypeScript
function getDeviceConfigs(): Array<WifiDeviceConfig>
```

Obtains the list of all existing Wi-Fi configurations. <p>You can obtain only the Wi-Fi configurations you created on your own application.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.getDeviceConfigs

**需要权限：** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.GET_WIFI_CONFIG

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;WifiDeviceConfig> | sReturns the list of all existing Wi-Fi configurations you created on your application. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
    let configs = wifi.getDeviceConfigs();
    console.info("configs:" + JSON.stringify(configs));
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

