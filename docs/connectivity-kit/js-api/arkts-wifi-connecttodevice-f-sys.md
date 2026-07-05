# connectToDevice

## connectToDevice

```TypeScript
function connectToDevice(config: WifiDeviceConfig): boolean
```

Connects to Wi-Fi network.

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.wifiManager/wifiManager.connectToDevice

**Required permissions:** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG and * ohos.permission.MANAGE_WIFI_CONNECTION

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | WifiDeviceConfig | Yes | Indicates the device configuration for connection to the Wi-Fi network. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the network connection is successful, returns {@code false} otherwise. |

**Example**

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

