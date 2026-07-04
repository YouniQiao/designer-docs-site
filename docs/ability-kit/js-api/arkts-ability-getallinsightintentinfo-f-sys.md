# getAllInsightIntentInfo (System API)

## Modules to Import

```TypeScript
import { insightIntentDriver } from '@ohos.app.ability.insightIntentDriver';
```

## getAllInsightIntentInfo

```TypeScript
function getAllInsightIntentInfo(intentFlags: number): Promise<Array<InsightIntentInfo>>
```

Obtains the information about all intents on the current device. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| intentFlags | number | Yes | Flag of the intent information ([InsightIntentInfo](arkts-ability-insightintentinfo-i-sys.md#insightintentinfo)). It is used to query full or brief intentinformation. For details, see [GetInsightIntentFlag](arkts-ability-getinsightintentflag-e-sys.md#getinsightintentflag). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;InsightIntentInfo&gt;&gt; | Promise used to return an array holding InsightIntentInfo objects. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [16000050](../errorcode-ability.md#16000050-internal-error) | Internal error. Possible causes: 1. Failed to connect to the system service;2. The system service fails to communicate with the dependency module. |

