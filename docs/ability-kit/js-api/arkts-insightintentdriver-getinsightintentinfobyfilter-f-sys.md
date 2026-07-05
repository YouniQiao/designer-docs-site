# getInsightIntentInfoByFilter

## getInsightIntentInfoByFilter

```TypeScript
function getInsightIntentInfoByFilter(filter: InsightIntentInfoFilter): Promise<Array<InsightIntentInfo>>
```

Obtains the intent information on the current device based on the given intent filter. This API uses a promise to return the result.<br>If the user ID of the calling application is different from the user ID of the intent, the

**Since:** 23

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | InsightIntentInfoFilter | Yes | Intent filter, which specifies the criteria for selecting a target  intent. It is used to filter intents on the device that meet these criteria. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;InsightIntentInfo>> | Promise used to return an array holding InsightIntentInfo objects. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 16000006 | Cross-user operations are not allowed. |
| 16000050 | Internal error. Possible causes: 1. Connect to system service failed;  2.Send restart message to system service failed; 3.System service failed to communicate with dependency module. |

**Example**

```TypeScript
import { insightIntentDriver } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

function getInfoByFilter() {
  let filter: insightIntentDriver.InsightIntentInfoFilter = {
    intentFlags: insightIntentDriver.GetInsightIntentFlag.GET_FULL_INSIGHT_INTENT | insightIntentDriver.GetInsightIntentFlag.GET_ENTITY_INFO,
    bundleName: 'com.example.intent', // Use the actual bundle name.
    moduleName: 'entry', // Use the actual module name.
    intentName: 'play', // Use the actual intent name.
    userId: 100, // Use the actual user ID.
  };

  try {
    insightIntentDriver.getInsightIntentInfoByFilter(filter).then((data) => {
      hilog.info(0x0000, 'testTag', 'getInsightIntentInfoByFilter return %{public}s', JSON.stringify(data));
    }).catch((err: BusinessError) => {
      hilog.info(0x0000, 'testTag', 'getInsightIntentInfoByFilter errCode: %{public}d', err.code);
      hilog.info(0x0000, 'testTag', 'getInsightIntentInfoByFilter errMessage: %{public}s', err.message);
    });
  } catch (error) {
    hilog.error(0x0000, 'testTag', 'getInsightIntentInfoByFilter error caught %{public}s', JSON.stringify(error));
  }
}

```

