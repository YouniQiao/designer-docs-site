# getInsightIntentInfoByIntentName (System API)

## Modules to Import

```TypeScript
import { insightIntentDriver } from '@kit.AbilityKit';
```

## getInsightIntentInfoByIntentName

```TypeScript
function getInsightIntentInfoByIntentName(bundleName: string, moduleName: string, intentName: string, intentFlags: number): Promise<InsightIntentInfo>
```

Obtains the intent information on the current device based on the bundle name, module name, and intent name. This
API uses a promise to return the result.

**Since:** 20

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application.<br>**NOTE**<br> If the bundle name does not exist, anempty object is returned. |
| moduleName | string | Yes | Module name.<br>**NOTE**<br> If the module name does not exist, an empty object isreturned. |
| intentName | string | Yes | Intent name.<br>**NOTE**<br> If the intent name does not exist, an empty object isreturned. |
| intentFlags | number | Yes | Flag of the intent information ([InsightIntentInfo](arkts-ability-insightintentinfo-i-sys.md)). It is used to query full or brief intentinformation. For details, see [GetInsightIntentFlag](arkts-ability-getinsightintentflag-e-sys.md). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;InsightIntentInfo&gt; | Promise used to return the InsightIntentInfo object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. Possible causes: 1. Failed to connect to the system service;2. The system service fails to communicate with the dependency module. |

