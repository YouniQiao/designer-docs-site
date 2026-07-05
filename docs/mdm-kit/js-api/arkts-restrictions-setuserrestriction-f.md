# setUserRestriction

## setUserRestriction

```TypeScript
function setUserRestriction(admin: Want, settingsItem: string, restricted: boolean): void
```

设置用户行为的限制规则。

**Since:** 20

**Deprecated since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_SET_USER_RESTRICTION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| settingsItem | string | Yes | 行为名称。 - setApn：APN设置，当前仅支持手机、平板使用。 - powerLongPress：长按电源键打开电源菜单，当前仅支持手机、平板  使用。 - setEthernetIp：修改以太网IP地址，当前仅支持PC/2in1设备使用。 - setDeviceName：修改设备名称，当前仅支持PC/2in1设备、手机、平板使用。禁用后，PC/2  in1设备的设置中以下设备名称无法修改，包括关于本机、蓝牙、多设备协同->星闪。手机、平板设备设置中的关于本机、蓝牙、个人热点的设备名称无法修改。 - setBiometricsAndScreenLock：修改锁屏  密码，当前仅支持PC/2in1设备、手机、平板使用。 |
| restricted | boolean | Yes | 是否禁用行为。true表示禁用，false表示不禁用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { restrictions } from '@kit.MDMKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  // Replace parameters with actual values.
  restrictions.setUserRestriction(wantTemp, 'setApn', true);
  console.info('Succeeded in restricting from setting apn');
} catch (err) {
  console.error(`Failed to restrict from setting apn. Code is ${err.code}, message is ${err.message}`);
}

```

