# onLocationChange

## onLocationChange

```TypeScript
function onLocationChange(request: LocationRequest | ContinuousLocationRequest,
  callback: Callback<Location>): void
```

Subscribe location changed.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| request | LocationRequest \| ContinuousLocationRequest | 是 | Indicates the location request parameters. |
| callback | Callback&lt;Location> | 是 | Indicates the callback for reporting the location result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 801 | Capability not supported.  Failed to call ${geoLocationManager.on('locationChange')} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |

