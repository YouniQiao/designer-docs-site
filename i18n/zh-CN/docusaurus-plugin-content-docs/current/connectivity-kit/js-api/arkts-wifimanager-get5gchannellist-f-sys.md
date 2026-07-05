# get5GChannelList

## get5GChannelList

```TypeScript
function get5GChannelList(): Array<int>
```

Obtain the supported 5G channel list of the device.

**起始版本：** 10

**需要权限：** 

 ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG

**系统能力：** SystemCapability.Communication.WiFi.STA

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;int> | Returns 5G channel list. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 801 | Capability not supported. |
| 2501000 | Operation failed. |

**示例：**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  let channelList = wifiManager.get5GChannelList();
  console.info("channelList:" + JSON.stringify(channelList));    
} catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

