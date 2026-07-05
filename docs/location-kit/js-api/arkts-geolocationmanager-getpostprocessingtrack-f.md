# getPostProcessingTrack

## getPostProcessingTrack

```TypeScript
function getPostProcessingTrack(sportsType: SportsType): Promise<Array<Location>>
```

Obtain post-processing trajectory information under specific sport mode. Only [SKIING]geoLocationManager.SportsType.SKIING is supported currently. Before calling this API, you need to call [on('locationChange')]geoLocationManager.on('locationChange') and set the input parameter [sportsType]geoLocationManager.ContinuousLocationRequest.sportsType to the specific sport mode to start tracking. Returns data within 24 hours since tracking started; Subsequent calls return only new records.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.LOCATION

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Gnss

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sportsType | SportsType | Yes | Indicate the type of sports. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Location>> | Promise used to return `Array`. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 801 | Capability not supported. Failed to call this API due to limited device  capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |
| 3301200 | Failed to obtain the post processing track because sports type is not  supported. |

