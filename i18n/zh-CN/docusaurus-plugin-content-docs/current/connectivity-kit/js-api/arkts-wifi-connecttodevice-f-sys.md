# connectToDevice

## connectToDevice

```TypeScript
function connectToDevice(config: WifiDeviceConfig): boolean
```

Connects to Wi-Fi network.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.connectToDevice

**需要权限：** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG and * ohos.permission.MANAGE_WIFI_CONNECTION

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | WifiDeviceConfig | 是 | Indicates the device configuration for connection to the Wi-Fi network. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the network connection is successful, returns {@code false} otherwise. |

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
    wifi.connectToDevice(config);
            
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

