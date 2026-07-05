# getCurrentDistrict

## getCurrentDistrict

```TypeScript
function getCurrentDistrict(params?: DistrictRequestParams): Promise<DistrictInfo>
```

Obtains the information about the district where the current device is located.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.APPROXIMATELY_LOCATION

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Geocoder

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| params | DistrictRequestParams | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;DistrictInfo> | Promise used to return ${DistrictInfo}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getCurrentDistrict} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |
| 3301500 | Failed to query the area information because the reverse geocoding server  returns an error. |

**示例：**

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';
// 参数配置一：指定语言/国家/超时时间
try {
  let params: geoLocationManager.DistrictRequestParams = {
    locale: "en",
    timeoutMs: 5000
  }
  geoLocationManager.getCurrentDistrict(params).then((res) => {
    if (res) {
      console.info("getCurrentDistrict result:" + res);
    }
  })
  .catch((error: BusinessError) => {
    console.error('promise, getCurrentDistrict: error=' + JSON.stringify(error));
  });
} catch (error) {
  console.error("getCurrentDistrict: errCode" + error.code + ", errMessage" + error.message);
}
// 参数配置二：使用默认值
try {
  geoLocationManager.getCurrentDistrict().then((res) => {
    if (res) {
      console.info("getCurrentDistrict result:" + res);
    }
  })
  .catch((error: BusinessError) => {
    console.error('promise, getCurrentDistrict: error=' + JSON.stringify(error));
  });
} catch (error) {
  console.error("getCurrentDistrict: errCode" + error.code + ", errMessage" + error.message);
}

```

