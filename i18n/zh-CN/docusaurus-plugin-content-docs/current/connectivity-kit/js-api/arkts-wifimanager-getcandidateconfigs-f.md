# getCandidateConfigs

## getCandidateConfigs

```TypeScript
function getCandidateConfigs(): Array<WifiDeviceConfig>
```

Obtain the list of all existed candidate Wi-Fi configurations which added by ourself. You can obtain only the Wi-Fi configurations you created on your own application.

**起始版本：** 12

**需要权限：** 

 ohos.permission.GET_WIFI_INFO

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.WiFi.STA

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;WifiDeviceConfig> | Returns the list of all existed Wi-Fi configurations you created on your application. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

**示例：**

```TypeScript
  import { wifiManager } from '@kit.ConnectivityKit';

  try {
    let configs = wifiManager.getCandidateConfigs();
    console.info("configs:" + JSON.stringify(configs));
    let len = configs.length;
        console.info("result len: " + len);
    if(len > 0){
      for (let i = 0; i < len; ++i) {
        console.info("ssid: " + configs[i].ssid);
        console.info("bssid: " + configs[i].bssid);
      }
    }  
  }catch(error){
    console.error("failed:" + JSON.stringify(error));
  }
  

```

