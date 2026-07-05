# removeUntrustedConfig

## removeUntrustedConfig

```TypeScript
function removeUntrustedConfig(config: WifiDeviceConfig): Promise<boolean>
```

Removes a specified untrusted hotspot configuration. <p>This method removes one configuration at a time.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.removeCandidateConfig

**需要权限：** 

 ohos.permission.SET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.STA

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | WifiDeviceConfig | 是 | Indicates the device configuration for connection to the Wi-Fi network. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Returns {@code true} if the untrusted hotspot configuration is removed, returns {@code false} otherwise. |

**示例：**

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
      ipAddress: 0,
      gateway: 0,
      dnsServers: [],
      domains: []
    }
  }
  wifi.removeUntrustedConfig(config).then(result => {
    console.info("result:" + JSON.stringify(result));
  });  
}catch(error){
  console.error("failed:" + JSON.stringify(error));
}

```

## removeUntrustedConfig

```TypeScript
function removeUntrustedConfig(config: WifiDeviceConfig, callback: AsyncCallback<boolean>): void
```

Removes a specified untrusted hotspot configuration. <p>This method removes one configuration at a time.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.removeCandidateConfig

**需要权限：** 

 ohos.permission.SET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.STA

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | WifiDeviceConfig | 是 | Indicates the device configuration for connection to the Wi-Fi network. |
| callback | AsyncCallback&lt;boolean> | 是 |  |

**示例：**

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
      ipAddress: 0,
      gateway: 0,
      dnsServers: [],
      domains: []
    }
  }
  wifi.removeUntrustedConfig(config,(error,result) => {
  console.info("result:" + JSON.stringify(result));
  });  
}catch(error){
  console.error("failed:" + JSON.stringify(error));
}

```

