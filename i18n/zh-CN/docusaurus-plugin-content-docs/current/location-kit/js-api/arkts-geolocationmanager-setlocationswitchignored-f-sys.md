# setLocationSwitchIgnored

## setLocationSwitchIgnored

```TypeScript
function setLocationSwitchIgnored(isIgnored: boolean): void
```

Set the app locating behavior not controlled by the location switch.

**起始版本：** 18

**需要权限：** 

 ohos.permission.LOCATION_SWITCH_IGNORED

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isIgnored | boolean | 是 | True indicates that the location behavior of the app is not controlled by the location switch.  Otherwise, it's the opposite. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.enableLocation} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  let isIgnored: boolean = true;
  geoLocationManager.setLocationSwitchIgnored(isIgnored);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

