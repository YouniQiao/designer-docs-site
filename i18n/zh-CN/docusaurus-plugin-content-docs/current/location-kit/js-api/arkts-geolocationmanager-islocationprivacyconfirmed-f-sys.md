# isLocationPrivacyConfirmed

## isLocationPrivacyConfirmed

```TypeScript
function isLocationPrivacyConfirmed(type: LocationPrivacyType): boolean
```

Querying location privacy protocol confirmation status.

**起始版本：** 9

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | LocationPrivacyType | 是 | Indicates location privacy protocol type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the location privacy protocol has been confirmed, returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.isLocationPrivacyConfirmed} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  let isConfirmed = geoLocationManager.isLocationPrivacyConfirmed(1);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

