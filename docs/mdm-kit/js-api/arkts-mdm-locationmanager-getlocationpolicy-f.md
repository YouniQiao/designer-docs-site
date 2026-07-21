# getLocationPolicy

## Modules to Import

```TypeScript
import { locationManager } from '@kit.MDMKit';
```

<a id="getlocationpolicy"></a>
## getLocationPolicy

```TypeScript
function getLocationPolicy(admin: Want | null): LocationPolicy
```

Queries the location service policy.

**Since:** 12

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_LOCATION

**Model restriction:** This API can be used only in the stage model.

<!--Device-locationManager-function getLocationPolicy(admin: Want | null): LocationPolicy--><!--Device-locationManager-function getLocationPolicy(admin: Want | null): LocationPolicy-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) \| null | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application.<br>If the device has multiple MDM applications, you can pass **admin** to query the corresponding policies. If **null** is passed, the policies that actually take effect on the device are returned.<br>**Since:** 26.0.0 |

**Return value:**

| Type | Description |
| --- | --- |
| [LocationPolicy](arkts-mdm-locationmanager-locationpolicy-e.md) | Enumerated value of the location service policy. **0**: The default policy is used.**1**: The location service is disabled. **2**: The location service is forcibly enabled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

