# setPermissionUsedRecordToggleStatus (System API)

## Modules to Import

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
```

## setPermissionUsedRecordToggleStatus

```TypeScript
function setPermissionUsedRecordToggleStatus(status: boolean): Promise<void>
```

Sets whether to record the permission usage of this user. Sets the permission usage record switch for this user.This API uses a promise to return the result.

When **status** is **true**, the [addPermissionUsedRecord](arkts-ability-privacymanager-addpermissionusedrecord-f-sys.md#addpermissionusedrecord-1) API can add usage records normally; when **status** is **false**, the [addPermissionUsedRecord](arkts-ability-privacymanager-addpermissionusedrecord-f-sys.md#addpermissionusedrecord-1) API does not generate permission usage records, and deletes the current user's historical records.

**Since:** 18

**Required permissions:** ohos.permission.PERMISSION_RECORD_TOGGLE

<!--Device-privacyManager-function setPermissionUsedRecordToggleStatus(status: boolean): Promise<void>--><!--Device-privacyManager-function setPermissionUsedRecordToggleStatus(status: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| status | boolean | Yes | Setting of the permission usage record switch. The value **true** means the switch is toggled on; the value **false** means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.PERMISSION_RECORD_TOGGLE". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system app. Interface caller is not a system app. |
| [12100006](../errorcode-access-token.md#12100006-permission-granting-or-revocation-not-supported) | Operation not allowed. The toggle status of the specified permission has already been set by [setPermissionUsedRecordToggleStatus](arkts-ability-privacymanager-setpermissionusedrecordtogglestatus-f-sys.md#setpermissionusedrecordtogglestatus-2).<br>**Applicable version:** 26.1.0 and later |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common inner error. Possible causes: 1. Database error. 2. Failed to query all applications under the user. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Set permission usage record switch status
privacyManager.setPermissionUsedRecordToggleStatus(true).then(() => {
  console.info('setPermissionUsedRecordToggleStatus success');
}).catch((err: BusinessError): void => {
  console.error(`setPermissionUsedRecordToggleStatus fail, code: ${err.code}, message: ${err.message}`);
});

```


## setPermissionUsedRecordToggleStatus

```TypeScript
function setPermissionUsedRecordToggleStatus(status: boolean, subProfileId: number): Promise<void>
```

Sets whether permission usage records are collected for a specified sub-profile. A system application can call this API to set the permission usage record switch status for the specified sub-profile. This API uses a promise to return the result.

When **status** is **true**, the [addPermissionUsedRecord](arkts-ability-privacymanager-addpermissionusedrecord-f-sys.md#addpermissionusedrecord-1) API can add usage records normally; when **status** is **false**, the [addPermissionUsedRecord](arkts-ability-privacymanager-addpermissionusedrecord-f-sys.md#addpermissionusedrecord-1) API does not generate permission usage records, and deletes the historical records of the specified sub-profile.

**Since:** 26.1.0

**Required permissions:** ohos.permission.PERMISSION_RECORD_TOGGLE

**Model restriction:** This API can be used only in the stage model.

<!--Device-privacyManager-function setPermissionUsedRecordToggleStatus(status: boolean, subProfileId: int): Promise<void>--><!--Device-privacyManager-function setPermissionUsedRecordToggleStatus(status: boolean, subProfileId: int): Promise<void>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| status | boolean | Yes | Setting of the permission usage record switch. The value **true** means the switch is toggled on; the value **false** means the opposite. |
| subProfileId | number | Yes | ID of the sub-profile. It can be obtained from [OsAccountSubProfile.id](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-osaccountsubprofile-i-sys.md#id).<br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.PERMISSION_RECORD_TOGGLE". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system app. Interface caller is not a system app. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The specified subProfileId does not exist for the current user. |
| [12100006](../errorcode-access-token.md#12100006-permission-granting-or-revocation-not-supported) | Operation not allowed. The toggle status of the specified permission has already been set by [setPermissionUsedRecordToggleStatus](arkts-ability-privacymanager-setpermissionusedrecordtogglestatus-f-sys.md#setpermissionusedrecordtogglestatus-1). |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common inner error. Possible causes: 1. Database error. 2. Failed to query all applications under the user. |

