# getLinkedInfoSync

## getLinkedInfoSync

```TypeScript
function getLinkedInfoSync(): WifiLinkedInfo
```

Obtain connection information about the Wi-Fi connection.this apireturns the result syncchronously. If does't have the permission of ohos.permission.GET_WIFI_PEERS_MAC, return random bssid.

**起始版本：** 18

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**系统能力：** SystemCapability.Communication.WiFi.STA

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WifiLinkedInfo | Returns Wi-Fi linked information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |
| 2501001 | Wi-Fi STA disabled. |

**示例：**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';
  try {
    let linkInfo = wifiManager.getLinkedInfoSync();
    console.info("get linked info:" + JSON.stringify(linkInfo));
  } catch(error) {
    console.error("get linked info failed:" + JSON.stringify(error));
  }

```

