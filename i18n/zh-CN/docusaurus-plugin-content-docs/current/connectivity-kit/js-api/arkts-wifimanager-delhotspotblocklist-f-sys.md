# delHotspotBlockList

## delHotspotBlockList

```TypeScript
function delHotspotBlockList(stationInfo: StationInfo): void
```

Delete the station from block list, the station can access the hotspot.

**起始版本：** 11

**需要权限：** 

 ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT

**系统能力：** SystemCapability.Communication.WiFi.AP.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| stationInfo | StationInfo | 是 | station which will be deleted in the block list. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API is not allowed called by Non-system application. |
| 401 | Invalid parameters. Possible causes: 1.Incorrect parameter types.  2.Parameter verification failed. |
| 801 | Capability not supported. |
| 2601000 | Operation failed. |

**示例：**

```TypeScript
import { wifiManager } from '@kit.ConnectivityKit';

try {
  let config:wifiManager.StationInfo = {
    name : "testSsid",
    macAddress : "11:22:33:44:55:66",
    ipAddress : "192.168.1.111"
  }
  wifiManager.delHotspotBlockList(config);
} catch (error) {
  console.error("failed:" + JSON.stringify(error));
}

```

