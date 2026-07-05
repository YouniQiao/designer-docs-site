# getSignalLevel

## getSignalLevel

```TypeScript
function getSignalLevel(rssi: int, band: int): int
```

Calculate the Wi-Fi signal level based on the Wi-Fi RSSI and frequency band.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.STA

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| rssi | int | 是 | Indicates the Wi-Fi RSSI. |
| band | int | 是 | Indicates the Wi-Fi frequency band. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns Wi-Fi signal level ranging from 0 to 4. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

**示例：**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let rssi = 0;
    let band = 0;
    let level = wifiManager.getSignalLevel(rssi,band);
    console.info("level:" + JSON.stringify(level));
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }


```

