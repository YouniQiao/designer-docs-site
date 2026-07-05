# getValue

## getValue

```TypeScript
function getValue(admin: Want, item: string): string
```

获取设备设置策略。

**Since:** 12

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SETTINGS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| item | string | Yes | 设备设置策略类型。 - screenOff：设备息屏策略，对于PC/2in1设备，支持查询电池供电下的设备息屏策略。 - powerPolicy：设备电源策略，仅对  PC/2in1设备生效，仅支持查询电池供电下的设备电源策略。 - eyeComfort：从API version 23开始支持，护眼模式开关状态。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | Policy type value.  If item is screenOff, the device screen-off time (in ms) is returned. For PCs/2-in-1 devices,  the device screen-off time (in ms) in battery mode is returned.  If item is powerPolicy, the power policy is returned. For PCs/2-in-1 devices, the power policy in  battery mode is returned. The power policy a JSON string in {"powerScene":xx,"powerPolicy":{"powerPolicyAction"  :xx,"delayTime":xx}} format. powerScene indicates the power policy scenario, delayTime indicates the  delay time (in milliseconds), and powerPolicyAction indicates the sleep policy.  The value of powerScene can be:  - 0: timeout.  The value of powerPolicyAction can be:  - 0: No action is performed.  - 1: enter sleep mode automatically.  - 2: forcibly enter sleep mode.  - 3: enter sleep mode. This policy does not take effect currently.  - 4: power off.  If item is eyeComfort, value is a string indicating the status of the eye comfort mode.  - on: The eye comfort mode is enabled all day.  - off: The eye comfort mode is disabled.  - unknown: other modes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { deviceSettings } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  // Replace parameters with actual values.
  let result: string = deviceSettings.getValue(wantTemp, 'screenOff');
  console.info(`Succeeded in getting screen off time, result : ${result}`);
} catch (err) {
  console.error(`Failed to get screen off time. Code: ${err.code}, message: ${err.message}`);
}

```

