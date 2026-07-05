# getLocationPolicy

## getLocationPolicy

```TypeScript
function getLocationPolicy(admin: Want): LocationPolicy
```

查询位置服务管理策略。

**Since:** 12

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_LOCATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |

**Return value:**

| Type | Description |
| --- | --- |
| LocationPolicy | 位置服务策略枚举值。0：默认策略。1：禁用。2：强制启用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { locationManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
    let result: locationManager.LocationPolicy = locationManager.getLocationPolicy(wantTemp);
    console.info(`Succeeded in getting location policy. policy: ${result}`);
} catch(err) {
    console.error(`Failed to get location policy. Code: ${err.code}, message: ${err.message}`);
}

```

