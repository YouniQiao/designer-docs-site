# setDisallowedPolicy

## setDisallowedPolicy

```TypeScript
function setDisallowedPolicy(admin: Want, feature: string, disallow: boolean): void
```

设置禁用/启用某特性。

**起始版本：** 12

**废弃版本：** 26.0.0

**需要权限：** 

- API版本12 - 14： ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS

- API版本15 - 19： ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or * ohos.permission.PERSONAL_MANAGE_RESTRICTIONS

- API版本20+： ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or * ohos.permission.ENTERPRISE_MANAGE_NETWORK

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want | 是 | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| feature | string | 是 | 支持设置的特性清单参考表1。 说明： 从API version 15开始，应用申请权限  ohos.permission.PERSONAL_MANAGE_RESTRICTIONS并通过  [startAdminProvision](arkts-adminmanager-startadminprovision-f.md#startAdminProvision-1)激活为  [BDA](docroot://mdm/mdm-kit-term.md#bda)，可以使用此接口设置以下特性：bluetooth、hdc、microphone、usb、wifi、tethering、camera，从API版本26.0.0开始，新增支持使用此接口设置mtpServer特性。 |
| disallow | boolean | 是 | true表示禁止使用，false表示允许使用。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 9200013 | The enterprise management policy has been successfully set,  but the function has not taken effect in real time. [since 21] |

**示例：**

```TypeScript
import { restrictions } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // 需根据实际情况进行替换
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  // 参数需根据实际情况进行替换
  restrictions.setDisallowedPolicy(wantTemp, 'printer', true);
  console.info('Succeeded in setting printer disabled');
} catch (err) {
  console.error(`Failed to set printer disabled. Code is ${err.code}, message is ${err.message}`);
}

```

## setDisallowedPolicy

```TypeScript
function setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean): void
```

设置禁用/启用指定设备特性，禁用后相关设备特性无法被使用。

**起始版本：** 24

**需要权限：** 

 ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want | 是 | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| feature | FeatureForDevice | 是 | 指定要禁用或允许的设备特性。 说明： 应用申请权限  ohos.permission.PERSONAL_MANAGE_RESTRICTIONS并通过  [startAdminProvision](arkts-adminmanager-startadminprovision-f.md#startAdminProvision-1)激活为  [BDA](docroot://mdm/mdm-kit-term.md#bda)，可以使用此接口设置以下特性：  [FeatureForDevice.WIFI_P2P]restrictions.FeatureForDevice。 |
| disallow | boolean | 是 | true表示禁止使用，false表示允许使用。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200010 | A conflict policy has been configured. |
| 9200013 | The enterprise management policy has been successfully set,  but the function has not taken effect in real time. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

**示例：**

```TypeScript
import { restrictions } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // 需根据实际情况进行替换
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  restrictions.setDisallowedPolicy(wantTemp, restrictions.FeatureForDevice.WIFI_P2P, true);
  console.info('Succeeded in setting Wi-Fi P2P disabled');
} catch (err) {
  console.error(`Failed to set Wi-Fi P2P disabled. Code is ${err.code}, message is ${err.message}`);
}

```

