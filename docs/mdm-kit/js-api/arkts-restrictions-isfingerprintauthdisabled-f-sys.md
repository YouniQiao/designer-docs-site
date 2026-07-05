# isFingerprintAuthDisabled

## isFingerprintAuthDisabled

```TypeScript
function isFingerprintAuthDisabled(admin: Want): boolean
```

查询指纹认证是否被禁用。

**Since:** 11

**Deprecated since:** 26.0.0

**Substitute:** restrictions.getDisallowedPolicy(admin:

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回指纹认证是否被禁用，true表示指纹认证被禁用，false表示指纹认证未被禁用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

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
  let result: boolean = restrictions.isFingerprintAuthDisabled(wantTemp);
  console.info(`Succeeded in getting the state of fingerprint auth. result : ${result}`);
} catch (err) {
  console.error(`Failed to get the state of fingerprint auth. Code: ${err.code}, message: ${err.message}`);
};

```

