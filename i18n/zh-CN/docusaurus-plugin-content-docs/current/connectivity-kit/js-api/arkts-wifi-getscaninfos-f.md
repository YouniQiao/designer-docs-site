# getScanInfos

## getScanInfos

```TypeScript
function getScanInfos(): Promise<Array<WifiScanInfo>>
```

Obtains the hotspot information that scanned.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.getScanInfoList

**需要权限：** 

 ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or ohos.permission.LOCATION)

**系统能力：** SystemCapability.Communication.WiFi.STA

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;WifiScanInfo>> | Returns information about scanned Wi-Fi hotspot if any. |

## getScanInfos

```TypeScript
function getScanInfos(callback: AsyncCallback<Array<WifiScanInfo>>): void
```

Obtains the hotspot information that scanned.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.getScanInfoList

**需要权限：** 

 ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or ohos.permission.LOCATION)

**系统能力：** SystemCapability.Communication.WiFi.STA

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;WifiScanInfo>> | 是 |  |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

wifi.getScanInfos().then(result => {
    let len = result.length;
    console.info("wifi received scan info: " + len);
    for (let i = 0; i < len; ++i) {
        console.info("ssid: " + result[i].ssid);
        console.info("bssid: " + result[i].bssid);
        console.info("capabilities: " + result[i].capabilities);
        console.info("securityType: " + result[i].securityType);
        console.info("rssi: " + result[i].rssi);
        console.info("band: " + result[i].band);
        console.info("frequency: " + result[i].frequency);
        console.info("channelWidth: " + result[i].channelWidth);
        console.info("timestamp: " + result[i].timestamp);
    }
});

```

