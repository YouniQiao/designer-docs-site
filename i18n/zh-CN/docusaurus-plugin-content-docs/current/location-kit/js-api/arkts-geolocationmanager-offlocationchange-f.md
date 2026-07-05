# offLocationChange

## offLocationChange

```TypeScript
function offLocationChange(callback?: Callback<Location>): void
```

Unsubscribe location changed.

**起始版本：** 23

**需要权限：** 

- API版本23 - 24： ohos.permission.APPROXIMATELY_LOCATION

**系统能力：** SystemCapability.Location.Location.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Location> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. Introduced in API 9 and  will not be threw above API 24. [since 23 - 24] |
| 801 | Capability not supported.  Failed to call ${geoLocationManager.off('locationChange')} due to limited device capabilities.  [since 23] |
| 3301000 | The location service is unavailable. [since 23] |

