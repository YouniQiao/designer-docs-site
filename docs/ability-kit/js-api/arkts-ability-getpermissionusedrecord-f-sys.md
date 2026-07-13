# getPermissionUsedRecord (System API)

## Modules to Import

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
```

## getPermissionUsedRecord

```TypeScript
function getPermissionUsedRecord(request: PermissionUsedRequest): Promise<PermissionUsedResponse>
```

Obtains historical permission usage records, which can be used in permission auditing or security monitoring
scenarios, such as checking an application's usage of sensitive permissions within a specified time period.
This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.PERMISSION_USED_STATS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | PermissionUsedRequest | Yes | Request for querying permission usage records. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PermissionUsedResponse&gt; | Promise used to return the queried permission usage record. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.PERMISSION_USED_STATS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system app. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The value of flag, begin, or end in request is invalid. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let request: privacyManager.PermissionUsedRequest = {
    'tokenId': 1, // It can be obtained through the accessTokenId field of ApplicationInfo in the application's BundleInfo.
    'isRemote': false,
    'deviceId': 'device',
    'bundleName': 'bundle',
    'permissionNames': [],
    'beginTime': 0,
    'endTime': 1,
    'flag': privacyManager.PermissionUsageFlag.FLAG_PERMISSION_USAGE_DETAIL,
};

// Query historical permission usage records
privacyManager.getPermissionUsedRecord(request).then((data) => {
  console.info(`getPermissionUsedRecord success, result: ${data}`);
}).catch((err: BusinessError): void => {
  console.error(`getPermissionUsedRecord fail, code: ${err.code}, message: ${err.message}`);
});

```


## getPermissionUsedRecord

```TypeScript
function getPermissionUsedRecord(
    request: PermissionUsedRequest,
    callback: AsyncCallback<PermissionUsedResponse>): void
```

Obtains historical permission usage records, which can be used in permission auditing or security monitoring
scenarios, such as checking an application's usage of sensitive permissions within a specified time period.
This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.PERMISSION_USED_STATS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | PermissionUsedRequest | Yes | Request for querying permission usage records. |
| callback | AsyncCallback&lt;PermissionUsedResponse&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **undefined**, and data is the permission usage record is obtained. Otherwise,**err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.PERMISSION_USED_STATS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system app. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The value of flag, begin, or end in request is invalid. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let request: privacyManager.PermissionUsedRequest = {
    'tokenId': 1, // It can be obtained through the accessTokenId field in the ApplicationInfo of the application's BundleInfo.
    'isRemote': false,
    'deviceId': 'device',
    'bundleName': 'bundle',
    'permissionNames': [],
    'beginTime': 0,
    'endTime': 1,
    'flag': privacyManager.PermissionUsageFlag.FLAG_PERMISSION_USAGE_DETAIL,
};

// Query historical permission usage records
privacyManager.getPermissionUsedRecord(request, (err: BusinessError, data: privacyManager.PermissionUsedResponse) => {
  if (err) {
    console.error(`getPermissionUsedRecord fail, code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`getPermissionUsedRecord success, result: ${data}`);
  }
});

```

