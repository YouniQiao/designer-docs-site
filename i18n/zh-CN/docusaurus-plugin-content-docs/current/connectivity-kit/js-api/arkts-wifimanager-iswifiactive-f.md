# isWifiActive

## isWifiActive

```TypeScript
function isWifiActive(): boolean
```

Query the Wi-Fi status

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the Wi-Fi is active, returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

**示例：**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let isWifiActive = wifiManager.isWifiActive();
    console.info("isWifiActive:" + isWifiActive);
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }

```

