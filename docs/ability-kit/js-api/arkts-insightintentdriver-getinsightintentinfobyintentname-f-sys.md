# getInsightIntentInfoByIntentName

## getInsightIntentInfoByIntentName

```TypeScript
function getInsightIntentInfoByIntentName(bundleName: string, moduleName: string, intentName: string, intentFlags: int): Promise<InsightIntentInfo>
```

根据包名、模块名和意图名查询当前设备上的意图信息。使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用包名称。 说明： 若包名不存在，则返回空对象。 |
| moduleName | string | Yes | 模块名称。 说明： 若模块名不存在，则返回空对象。 |
| intentName | string | Yes | 意图名称。 说明： 若意图名不存在，则返回空对象。 |
| intentFlags | int | Yes | 意图信息（[InsightIntentInfo]insightIntentDriver.InsightIntentInfo）的标识，用于表示查询全量意图信息或者简要意  图信息，参考[GetInsightIntentFlag]insightIntentDriver.GetInsightIntentFlag。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;InsightIntentInfo> | Promise对象，返回意图信息对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 16000050 | Internal error. Possible causes: 1. Failed to connect to the system service;  2. The system service fails to communicate with the dependency module. |

