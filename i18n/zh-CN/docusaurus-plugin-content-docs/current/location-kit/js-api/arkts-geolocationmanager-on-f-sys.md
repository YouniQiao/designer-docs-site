# on

## on('locatingRequiredDataChange')

```TypeScript
function on(type: 'locatingRequiredDataChange', config: LocatingRequiredDataConfig, callback: Callback<Array<LocatingRequiredData>>): void
```

Subscribe to changes in WiFi/BT scanning information, and use the WiFi/BT scanning information for localization.

**起始版本：** 10

**需要权限：** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'locatingRequiredDataChange' | 是 | Indicates the location service event to be subscribed to. |
| config | LocatingRequiredDataConfig | 是 | Indicates the locating required data configuration parameters. |
| callback | Callback&lt;Array&lt;LocatingRequiredData>> | 是 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.on('locatingRequiredDataChange')} due to limited device capabilities. |
| 3301800 | Failed to start WiFi or Bluetooth scanning. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let callback = (code: Array<geoLocationManager.LocatingRequiredData>): void => {
  console.info('locatingRequiredDataChange: ' + JSON.stringify(code));
}
let config: geoLocationManager.LocatingRequiredDataConfig = { 'type': 1, 'needStartScan': true, 'scanInterval': 10000 };
try {
  geoLocationManager.on('locatingRequiredDataChange', config, callback);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## on('locationIconStatusChange')

```TypeScript
function on(type: 'locationIconStatusChange', callback: Callback<LocationIconStatus>): void
```

Subscribe location icon status changed.

**起始版本：** 12

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'locationIconStatusChange' | 是 | Indicates the location service event to be subscribed to. |
| callback | Callback&lt;LocationIconStatus> | 是 | Indicates the callback for reporting the location icon status. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.on('locationIconStatusChange')} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let callback = (code: geoLocationManager.LocationIconStatus): void => {
  console.info('LocationIconStatus: ' + JSON.stringify(code));
}
try {
  geoLocationManager.on('locationIconStatusChange', callback);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

