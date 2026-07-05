# updateNetwork

## updateNetwork

```TypeScript
function updateNetwork(config: WifiDeviceConfig): number
```

Updates the specified Wi-Fi configuration.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.updateDeviceConfig

**需要权限：** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | WifiDeviceConfig | 是 | Indicates the Wi-Fi configuration to update. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | Returns the network ID in the updated Wi-Fi configuration if the update is successful;  returns {@code -1} if the specified Wi-Fi configuration is not contained in the list. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
    let config:wifi.WifiDeviceConfig = {
        ssid : "****",
        bssid:  "****",
        preSharedKey: "****",
        isHiddenSsid: false,
        securityType: 3,
        creatorUid: 0,
        disableReason: 0,
        netId: 0,
        randomMacType: 0,
        randomMacAddr:  "****",
        ipType: 0,
        staticIp: {
            ipAddress: "",
            gateway: "",
            dnsServers: [],
            domains: []
        }
    }
    let ret = wifi.updateNetwork(config);
    console.error("ret:" + ret);        
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

