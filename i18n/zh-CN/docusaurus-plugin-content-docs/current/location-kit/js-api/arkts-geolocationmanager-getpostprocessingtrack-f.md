# getPostProcessingTrack

## getPostProcessingTrack

```TypeScript
function getPostProcessingTrack(sportsType: SportsType): Promise<Array<Location>>
```

Obtain post-processing trajectory information under specific sport mode. Only [SKIING]geoLocationManager.SportsType.SKIING is supported currently. Before calling this API, you need to call [on('locationChange')]geoLocationManager.on('locationChange') and set the input parameter [sportsType]geoLocationManager.ContinuousLocationRequest.sportsType to the specific sport mode to start tracking. Returns data within 24 hours since tracking started; Subsequent calls return only new records.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.LOCATION

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Location.Location.Gnss

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sportsType | SportsType | 是 | Indicate the type of sports. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;Location>> | Promise used to return `Array`. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 801 | Capability not supported. Failed to call this API due to limited device  capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |
| 3301200 | Failed to obtain the post processing track because sports type is not  supported. |

