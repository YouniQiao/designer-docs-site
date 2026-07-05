# queryBusinessAbilityInfo

## queryBusinessAbilityInfo

```TypeScript
function queryBusinessAbilityInfo(
    filter: BusinessAbilityFilter,
    callback: AsyncCallback<Array<BusinessAbilityInfo>>
  ): void
```

Query the business ability info of by the given filter. ohos.permission.GET_BUNDLE_INFO_PRIVILEGED is required for cross user access.

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | BusinessAbilityFilter | Yes | Indicates the filter containing the business ability info to be queried. |
| callback | AsyncCallback&lt;Array&lt;BusinessAbilityInfo>> | Yes | The callback of querying business ability info  result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { businessAbilityRouter } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let filter: businessAbilityRouter.BusinessAbilityFilter = { businessType: businessAbilityRouter.BusinessType.SHARE };

try {
  businessAbilityRouter.queryBusinessAbilityInfo(filter, (error, data) => {
    if (error) {
      console.error('queryBusinessAbilityInfo failed ' + error.message);
      return;
    }
    console.info('queryBusinessAbilityInfo success');
  });
} catch (error) {
  let message = (error as BusinessError).message;
  console.error('queryBusinessAbilityInfo failed ' + message);
}

```

## queryBusinessAbilityInfo

```TypeScript
function queryBusinessAbilityInfo(filter: BusinessAbilityFilter): Promise<Array<BusinessAbilityInfo>>
```

Query the business ability info of by the given filter. ohos.permission.GET_BUNDLE_INFO_PRIVILEGED is required for cross user access.

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | BusinessAbilityFilter | Yes | Indicates the filter containing the business ability info to be queried. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;BusinessAbilityInfo>> | Returns a list of business ability info objects. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { businessAbilityRouter } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let filter: businessAbilityRouter.BusinessAbilityFilter = { businessType: businessAbilityRouter.BusinessType.SHARE };

try {
  businessAbilityRouter.queryBusinessAbilityInfo(filter)
    .then(() => {
      console.info('queryBusinessAbilityInfo success');
    }).catch((error: BusinessError) => {
    console.error('queryBusinessAbilityInfo failed ' + error.message);
  });
} catch (error) {
  let message = (error as BusinessError).message;
  console.error('queryBusinessAbilityInfo failed ' + message);
}

```

