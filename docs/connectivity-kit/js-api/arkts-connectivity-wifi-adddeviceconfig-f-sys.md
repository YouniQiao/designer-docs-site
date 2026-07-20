# addDeviceConfig (System API)

## Modules to Import

```TypeScript
import { wifi } from '@kit.ConnectivityKit';
```

## addDeviceConfig

```TypeScript
function addDeviceConfig(config: WifiDeviceConfig): Promise<number>
```

Adds Wi-Fi connection configuration to the device.

<p>The configuration will be updated when the configuration is added.</p>

**Since:** 6

**Deprecated since:** 9

**Substitutes:** addDeviceConfig

**Required permissions:** ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG

<!--Device-wifi-function addDeviceConfig(config: WifiDeviceConfig): Promise<number>--><!--Device-wifi-function addDeviceConfig(config: WifiDeviceConfig): Promise<number>-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [WifiDeviceConfig](arkts-connectivity-wifi-wifideviceconfig-i-sys.md) | Yes | Indicates the device configuration for connection to the Wi-Fi network. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Returns {@code networkId} if the configuration is added; returns {@code -1} otherwise. |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

try {
    let config:wifi.WifiDeviceConfig = {
        ssid : "****",
        bssid:  "****",
        preSharedKey: "****",
        isHiddenSsid: false,
        securityType: 0,
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
    wifi.addDeviceConfig(config).then(result => {
        console.info("result:" + JSON.stringify(result));
    });    
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```


## addDeviceConfig

```TypeScript
function addDeviceConfig(config: WifiDeviceConfig, callback: AsyncCallback<number>): void
```

Adds Wi-Fi connection configuration to the device.

<p>The configuration will be updated when the configuration is added.</p>

**Since:** 6

**Deprecated since:** 9

**Substitutes:** addDeviceConfig

**Required permissions:** ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG

<!--Device-wifi-function addDeviceConfig(config: WifiDeviceConfig, callback: AsyncCallback<number>): void--><!--Device-wifi-function addDeviceConfig(config: WifiDeviceConfig, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Communication.WiFi.STA

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [WifiDeviceConfig](arkts-connectivity-wifi-wifideviceconfig-i-sys.md) | Yes | Indicates the device configuration for connection to the Wi-Fi network. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<number> | Yes |  |

**Example**

```TypeScript
import wifi from '@ohos.wifi';

try {
    let config:wifi.WifiDeviceConfig = {
        ssid : "****",
        bssid:  "****",
        preSharedKey: "****",
        isHiddenSsid: false,
        securityType: 0,
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
    wifi.addDeviceConfig(config,(error,result) => {
        console.info("result:" + JSON.stringify(result));
    });    
}catch(error){
    console.error("failed:" + JSON.stringify(error));
}

```

