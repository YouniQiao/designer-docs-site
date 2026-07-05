# setReverseGeocodingMockInfo

## setReverseGeocodingMockInfo

```TypeScript
function setReverseGeocodingMockInfo(mockInfos: Array<ReverseGeocodingMockInfo>): void
```

Set the configuration parameters for simulating reverse geocoding.

**起始版本：** 20

**需要权限：** 

 ohos.permission.MOCK_LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mockInfos | Array&lt;ReverseGeocodingMockInfo> | 是 | Indicates the set of locations and place names to be simulated. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. Failed to call ${geoLocationManager.setReverseGeocodingMockInfo} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';

let mockInfos: Array<geoLocationManager.ReverseGeocodingMockInfo> = [
  {
    "location": {
      "locale": "zh",
      "latitude": 30.12,
      "longitude": 120.11,
      "maxItems": 1
    },
    "geoAddress": {
      "locale": "zh",
      "latitude": 30.12,
      "longitude": 120.11,
      "isFromMock": true
    }
  },
  {
    "location": {
      "locale": "zh",
      "latitude": 31.12,
      "longitude": 121.11,
      "maxItems": 1
    },
    "geoAddress": {
      "locale": "zh",
      "latitude": 31.12,
      "longitude": 121.11,
      "isFromMock": true
    }
  },
  {
    "location": {
      "locale": "zh",
      "latitude": 32.12,
      "longitude": 122.11,
      "maxItems": 1
    },
    "geoAddress": {
      "locale": "zh",
      "latitude": 32.12,
      "longitude": 122.11,
      "isFromMock": true
    }
  },
  {
    "location": {
      "locale": "zh",
      "latitude": 33.12,
      "longitude": 123.11,
      "maxItems": 1
    },
    "geoAddress": {
      "locale": "zh",
      "latitude": 33.12,
      "longitude": 123.11,
      "isFromMock": true
    }
  },
  {
    "location": {
      "locale": "zh",
      "latitude": 34.12,
      "longitude": 124.11,
      "maxItems": 1
    },
    "geoAddress": {
      "locale": "zh",
      "latitude": 34.12,
      "longitude": 124.11,
      "isFromMock": true
    }
  },
];
try {
  geoLocationManager.enableReverseGeocodingMock();
  geoLocationManager.setReverseGeocodingMockInfo(mockInfos);
} catch (err) {
  console.error("errCode:" + err.code + ", message:" + err.message);
}

```

