# setValue

## Modules to Import

```TypeScript
import { deviceSettings } from '@kit.MDMKit';
```

## setValue

```TypeScript
function setValue(admin: Want, item: string, value: string): void
```

Sets the device policy.

**Since:** 12

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SETTINGS

**Model restriction:** This API can be used only in the stage model.

<!--Device-deviceSettings-function setValue(admin: Want, item: string, value: string): void--><!--Device-deviceSettings-function setValue(admin: Want, item: string, value: string): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| item | string | Yes | Type of the policy to set.<br>- **screenOff**: device screen-off policy. For PCs/2-in-1devices, the screen-off policies for the battery and power supply modes can be set.<br>- **dateTime**: system time settings.<br>- **powerPolicy**: device power policy. For PCs/2-in-1 devices, only the power policy for the battery mode can be set.<br>- **eyeComfort**: eye comfort mode. This parameter is supported since API version 23. This mode can only be enabled all day or disabled.<br>- **defaultInputMethod**: default input method. This parameter is supported since API version 23. |
| value | string | Yes | Policy type value.<br>If **item** is **screenOff**, **value** is the screen-off time, in ms.<br>If **item** is **dateTime**, **value** is the system time to set, in ms.<br>If **item** is **powerPolicy**, **value** is a JSON string in {"powerScene":xx,"powerPolicy":{"powerPolicyAction":xx,"delayTime":xx}} format. **powerScene** indicates the power policy scenario, **delayTime** indicates the delay time (in milliseconds), and **powerPolicyAction** indicates the sleep policy.<br>The value of **powerScene** can be:<br>- **0**: timeout.<br>The value of **powerPolicyAction** can be:<br>- **0**: No action is performed.<br>- **1**: enter sleep mode automatically.<br>- **2**: forcibly enter sleep mode.<br>- **3**: enter sleep mode. This policy does not take effect currently.<br>- **4**: power off.<br>If **item** is **eyeComfort**,**value** is a string indicating the status of the eye comfort mode.<br>- **on**: The eye comfort mode is enabled all day.<br>- **off**: The eye comfort mode is disabled.<br>If **item** is **defaultInputMethod**,**value** is a string indicating the name of the input method application bundle.<br>- You can use [getCurrentInputMethod](../../apis-ime-kit/arkts-apis/arkts-ime-inputmethod-getcurrentinputmethod-f.md#getcurrentinputmethod-1) to obtain the current input method application bundle name. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

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
  // Replace with actual values.
  deviceSettings.setValue(wantTemp, 'screenOff', '3000');
  console.info(`Succeeded in setting screen off time.`);
} catch (err) {
  console.error(`Failed to set screen off time. Code: ${err.code}, message: ${err.message}`);
}

```

