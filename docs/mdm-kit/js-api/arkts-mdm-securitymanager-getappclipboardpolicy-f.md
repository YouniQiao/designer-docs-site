# getAppClipboardPolicy

## Modules to Import

```TypeScript
import { securityManager } from '@kit.MDMKit';
```

<a id="getappclipboardpolicy"></a>
## getAppClipboardPolicy

```TypeScript
function getAppClipboardPolicy(admin: Want | null, tokenId?: number): string
```

Obtains the device clipboard policy.

**Since:** 12

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the stage model.

<!--Device-securityManager-function getAppClipboardPolicy(admin: Want | null, tokenId?: number): string--><!--Device-securityManager-function getAppClipboardPolicy(admin: Want | null, tokenId?: number): string-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) \| null | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies that actually take effect on the device are returned.<br>**Since:** 26.0.0 |
| tokenId | number | No | Application token ID, which can be obtained using [bundleManager.getApplicationInfo](../../apis-ability-kit/arkts-apis/arkts-ability-applicationinfo-i.md). |

**Return value:**

| Type | Description |
| --- | --- |
| string | Device clipboard policy in JSON format. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |


<a id="getappclipboardpolicy-1"></a>
## getAppClipboardPolicy

```TypeScript
function getAppClipboardPolicy(admin: Want | null, bundleName: string, accountId: number): string
```

Obtains the device clipboard policy of a specified application for a specified user.

**Since:** 18

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the stage model.

<!--Device-securityManager-function getAppClipboardPolicy(admin: Want | null, bundleName: string, accountId: number): string--><!--Device-securityManager-function getAppClipboardPolicy(admin: Want | null, bundleName: string, accountId: number): string-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) \| null | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies that actually take effect on the device are returned.<br>**Since:** 26.0.0 |
| bundleName | string | Yes | Bundle name of the application for which the device clipboard policy is set. |
| accountId | number | Yes | Account ID, which must be greater than or equal to 0. You can call [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-accountmanager-i.md#getosaccountlocalid-1) of **@ohos.account.osAccount** to obtain the account ID. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Device clipboard policy in JSON format. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |

