# queryAssociatedDomains

## queryAssociatedDomains

```TypeScript
function queryAssociatedDomains(bundleName: string): string[]
```

query domains verify associated with bundleName.

**Since:** 13

**Required permissions:** 

 ohos.permission.GET_APP_DOMAIN_BUNDLE_INFO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BundleManager.AppDomainVerify

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | app bundleName. |

**Return value:**

| Type | Description |
| --- | --- |
| string[] | Result domains. |

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

// Obtain the list of domain names associated with the bundle name "com.example.app1".
let bundleName = "com.example.app1";
let domains = appDomainVerify.queryAssociatedDomains(bundleName);
domains.forEach(domain => {
  hilog.info(0x0000, 'testTag', `app:${bundleName} associate with domain:${domain}`);
});

```

