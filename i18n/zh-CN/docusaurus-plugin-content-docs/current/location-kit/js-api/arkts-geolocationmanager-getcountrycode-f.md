# getCountryCode

## getCountryCode

```TypeScript
function getCountryCode(callback: AsyncCallback<CountryCode>): void
```

Obtain the current country code.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CountryCode> | 是 | Indicates the callback for reporting the country code. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getCountryCode} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301500 | Failed to query the area information. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

try {
  geoLocationManager.getCountryCode((err, result) => {
    if (err) {
      console.error('getCountryCode: err=' + JSON.stringify(err));
    }
    if (result) {
      console.info('getCountryCode: result=' + JSON.stringify(result));
    }
  });
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

## getCountryCode

```TypeScript
function getCountryCode(): Promise<CountryCode>
```

Obtain the current country code.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;CountryCode> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getCountryCode} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301500 | Failed to query the area information. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  geoLocationManager.getCountryCode()
    .then((result) => {
      console.info('promise, getCountryCode: result=' + JSON.stringify(result));
    })
    .catch((error: BusinessError) => {
      console.error('promise, getCountryCode: error=' + JSON.stringify(error));
    });
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

