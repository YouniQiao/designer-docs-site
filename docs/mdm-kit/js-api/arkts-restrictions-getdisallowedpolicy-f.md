# getDisallowedPolicy

## getDisallowedPolicy

```TypeScript
function getDisallowedPolicy(admin: Want | null, feature: string): boolean
```

查询某特性是否被禁用。

**Since:** 12

**Deprecated since:** 26.0.0

**Required permissions:** 

- API version12  to  14: ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS

- API version15  to  19: ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or * ohos.permission.PERSONAL_MANAGE_RESTRICTIONS

- API version20 and later: ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or * ohos.permission.ENTERPRISE_MANAGE_NETWORK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want \| null | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 [since 12 - 19] |
| feature | string | Yes | 支持查询的特性清单参考下表2。 说明： 从API version 15开始，应用申请权限  ohos.permission.PERSONAL_MANAGE_RESTRICTIONS并通过  [startAdminProvision](arkts-adminmanager-startadminprovision-f.md#startAdminProvision-1)激活为  [BDA](docroot://mdm/mdm-kit-term.md#bda)，可以使用此接口获取以下特性状态：bluetooth、hdc、microphone、usb、wifi、tethering、camera，从API版本26.0.0开始，新增支持使用此接口获取mtpServer特性状态。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 [since 20] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

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
  // Replace parameters with actual values.
  let result: boolean = restrictions.getDisallowedPolicy(wantTemp, 'printer');
  console.info(`Succeeded in querying whether the printing function is disabled. Disabled status: ${result}`);
} catch (err) {
  console.error(`Failed to get printer disabled status. Code is ${err.code}, message is ${err.message}`);
}

```

## getDisallowedPolicy

```TypeScript
function getDisallowedPolicy(admin: Want | null, feature: FeatureForDevice): boolean
```

查询指定设备特性是否被禁用。

**Since:** 24

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want \| null | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| feature | FeatureForDevice | Yes | 指定要查询的设备特性。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回true表示feature对应的设备特性被禁用，false表示feature对应的设备特性未被禁用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

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
  let result: boolean = restrictions.getDisallowedPolicy(wantTemp, restrictions.FeatureForDevice.WIFI_P2P);
  console.info(`Succeeded in querying whether Wi-Fi P2P is disabled. Disabled status: ${result}`);
} catch (err) {
  console.error(`Failed to get Wi-Fi P2P disabled status. Code is ${err.code}, message is ${err.message}`);
}

```

