# getInsightIntentInfoByBundleName

## getInsightIntentInfoByBundleName

```TypeScript
function getInsightIntentInfoByBundleName(bundleName: string, intentFlags: int): Promise<Array<InsightIntentInfo>>
```

根据包名查询当前设备上的意图信息。使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用包名称。 说明： 若包名不存在，则返回空数组。 |
| intentFlags | int | Yes | 意图信息（[InsightIntentInfo]insightIntentDriver.InsightIntentInfo）的标识，用于表示查询全量意图信息或者简要意  图信息，参考[GetInsightIntentFlag]insightIntentDriver.GetInsightIntentFlag。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;InsightIntentInfo>> | Promise对象，返回意图信息对象数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 16000050 | Internal error. Possible causes: 1. Failed to connect to the system service;  2. The system service fails to communicate with the dependency module. |

