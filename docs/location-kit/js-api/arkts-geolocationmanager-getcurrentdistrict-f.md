# getCurrentDistrict

## getCurrentDistrict

```TypeScript
function getCurrentDistrict(params?: DistrictRequestParams): Promise<DistrictInfo>
```

Obtains the information about the district where the current device is located.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.APPROXIMATELY_LOCATION

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Location.Location.Geocoder

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | DistrictRequestParams | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DistrictInfo> | Promise used to return ${DistrictInfo}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 801 | Capability not supported. Failed to call  ${geoLocationManager.getCurrentDistrict} due to limited device capabilities. |
| 3301000 | The location service is unavailable. |
| 3301100 | The location switch is off. |
| 3301500 | Failed to query the area information because the reverse geocoding server  returns an error. |

