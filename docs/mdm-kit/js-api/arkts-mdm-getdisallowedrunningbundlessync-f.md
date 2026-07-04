# getDisallowedRunningBundlesSync

## Modules to Import

```TypeScript
import { applicationManager } from '@ohos.enterprise.applicationManager';
```

## getDisallowedRunningBundlesSync

```TypeScript
function getDisallowedRunningBundlesSync(admin: Want | null, accountId?: number): Array<string>
```

Obtains applications that are not allowed to run by the current user or specified user.

**Since:** 12

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want \| null | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDMapplications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policiesthat actually take effect on the device are returned.<br>**Since:** 26.0.0 |
| accountId | number | No | Account ID, which must be greater than or equal to 0.<br> You can call[getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-accountmanager-i.md#getosaccountlocalid-2) of @ohos.account.osAccount to obtain the ID.<br> - If **accountId** is passed in, this API applies to the specifieduser.<br> - If **accountId** is not passed in, this API applies to the current user. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string&gt; | Applications that are not allowed to run by the current user or specified user.<br>Note: For API version 20 and earlier versions, the return value is the **appId** list. In API version 21 andlater versions, the return value is the **appId** or **appIdentifier** list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

