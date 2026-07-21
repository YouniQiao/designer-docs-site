# setFingerprintAuthDisabled (System API)

## Modules to Import

```TypeScript
import { restrictions } from '@kit.MDMKit';
```

<a id="setfingerprintauthdisabled"></a>
## setFingerprintAuthDisabled

```TypeScript
function setFingerprintAuthDisabled(admin: Want, disabled: boolean): void
```

Enables or disables fingerprint authentication.

**Since:** 11

**Deprecated since:** 26.0.0

**Substitutes:** [setDisallowedPolicy(admin:](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy-1)

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS

**Model restriction:** This API can be used only in the stage model.

<!--Device-restrictions-function setFingerprintAuthDisabled(admin: Want, disabled: boolean): void--><!--Device-restrictions-function setFingerprintAuthDisabled(admin: Want, disabled: boolean): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-want-want-c.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| disabled | boolean | Yes | Operation to perform. The value **true** means to disable fingerprint authentication;the value **false** the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { restrictions } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  restrictions.setFingerprintAuthDisabled(wantTemp, true);
  console.info('Succeeded in disabling the fingerprint auth');
} catch (err) {
  console.error(`Failed to disable fingerprint auth. Code: ${err.code}, message: ${err.message}`);
};


```

