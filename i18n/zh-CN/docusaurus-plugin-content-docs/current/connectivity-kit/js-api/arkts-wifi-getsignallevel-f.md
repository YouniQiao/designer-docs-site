# getSignalLevel

## getSignalLevel

```TypeScript
function getSignalLevel(rssi: number, band: number): number
```

Calculates the Wi-Fi signal level based on the Wi-Fi RSSI and frequency band.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** ohos.wifiManager/wifiManager.getSignalLevel

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.STA

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rssi | number | 是 | Indicates the Wi-Fi RSSI. |
| band | number | 是 | Indicates the Wi-Fi frequency band. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | Returns Wi-Fi signal level ranging from 0 to 4. |

**示例：**

```TypeScript
import wifi from '@ohos.wifi';

try {
  let rssi = 0;
  let band = 0;
  let level = wifi.getSignalLevel(rssi,band);
  console.info("level:" + JSON.stringify(level));
}catch(error){
  console.error("failed:" + JSON.stringify(error));
}


```

