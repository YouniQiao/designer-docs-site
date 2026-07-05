# getCurrentWifiBssidForLocating

## getCurrentWifiBssidForLocating

```TypeScript
function getCurrentWifiBssidForLocating(): string
```

Obtains the BSSID of the connected Wi-Fi hotspot.

**起始版本：** 14

**需要权限：** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Returns the BSSID of the connected Wi-Fi hotspot. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission required to call the API. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.getCurrentWifiBssidForLocating()} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |
| 3301900 | Failed to obtain the BSSID of the Wi-Fi hotspot. The Wi-Fi network is not connected. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  let bssid: string = geoLocationManager.getCurrentWifiBssidForLocating();
  console.info("get wifi bssid:" + bssid);
} catch (error) {
  console.error("getCurrentWifiBssidForLocating: errCode" + error.code + ", errMessage" + error.message);
}

```

