# getPoliciesSync

## Modules to Import

```TypeScript
import { browser } from '@kit.MDMKit';
```

## getPoliciesSync

```TypeScript
function getPoliciesSync(admin: Want | null, appId: string): string
```

Obtains the browser policy by app ID.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-browser-function getPoliciesSync(admin: Want | null, appId: string): string--><!--Device-browser-function getPoliciesSync(admin: Want | null, appId: string): string-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want \| null | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies that actually take effect on the device are returned.<br>**Since:** 26.0.0 |
| appId | string | Yes | Application ID, which is used to specify the browser. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Browser policy obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

