# queryAssociatedBundleNames

## queryAssociatedBundleNames

```TypeScript
function queryAssociatedBundleNames(domain: string): string[]
```

query bundleNames associated with domain.

**Since:** 13

**Required permissions:** 

 ohos.permission.GET_APP_DOMAIN_BUNDLE_INFO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.AppDomainVerify

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| domain | string | Yes | Parameters related to the function. |

**Return value:**

| Type | Description |
| --- | --- |
| string[] | Result bundleNames. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | System API accessed by non-system app. |
| 401 | Parameter error. |
| 29900001 | Internal error. |

**Example**

```TypeScript
import { appDomainVerify } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

// Obtain the list of bundle names associated with the domain name "example.com".
let domain = "example.com";
let bundleNames = appDomainVerify.queryAssociatedBundleNames(domain);
bundleNames.forEach(bundleName => {
  hilog.info(0x0000, 'testTag', `domain:${domain} associate with app:${bundleName}`);
});

```

