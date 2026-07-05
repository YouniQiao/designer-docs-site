# isWlanBssidMatched

## isWlanBssidMatched

```TypeScript
function isWlanBssidMatched(
    wlanBssidArray: Array<string>, rssiThreshold: int, needStartScan: boolean): Promise<boolean>
```

Check whether the WLAN scan results match the WLAN BSSID list.

**起始版本：** 21

**需要权限：** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| wlanBssidArray | Array&lt;string> | 是 | Indicates the list of WLAN BSSIDs that need to be matched. |
| rssiThreshold | int | 是 | Indicates the WLAN RSSI threshold, only matching WLAN BSSID with  RSSI greater than this threshold. |
| needStartScan | boolean | 是 | Indicates whether a WLAN scan needs to be initiated. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.isWlanBssidMatched} due to limited device capabilities. |
| 3301100 | The location switch is off. |
| 3301800 | Failed to start WiFi scanning. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  let wlanBssidArray: Array<string> = ["02:1b:32:23:ea:91", "02:1b:32:23:ea:93"];
  let rssiThreshold: number = -70;
  let needStartScan: boolean = true;
  geoLocationManager.isWlanBssidMatched(wlanBssidArray, rssiThreshold, needStartScan).then((res) => {
    console.info("Wlan Bssid Matched Result:" + res);
  })
} catch (error) {
  console.error("isWlanBssidMatched: errCode" + error.code + ", errMessage" + error.message);
}

```

