# getDeviceInfo

## Modules to Import

```TypeScript
import { deviceInfo } from '@ohos.enterprise.deviceInfo';
```

## getDeviceInfo

```TypeScript
function getDeviceInfo(admin: Want, label: string): string
```

Obtains device information.

**Since:** 12

**Required permissions:** ohos.permission.ENTERPRISE_GET_DEVICE_INFO

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| label | string | Yes | Device information label that can be obtained.<br>- **deviceName**: device name.<br>-**deviceSerial**: device serial number.<br>- **simInfo**: SIM card information.&lt;!--RP1--&gt;&lt;!--RP1End--&gt; |

**Return value:**

| Type | Description |
| --- | --- |
| string | Device information obtained.<br>If **label** is **simInfo**, the return value is the SIM card information in a JSON string. For example,[{"slotId": 0, "MEID": "", "IMSI": "", "ICCID": "", "IMEI": "", "NUMBER": ""},{"slotId": 1, "MEID": "", "IMSI": "", "ICCID": "", "IMEI": "", "NUMBER": ""}], where **slotId:0** indicates card slot 1, and **slotId:1** indicates card slot 2. **NUMBER** indicates thephone number and is supported since API version 23. The value is in the E.164 international standard format (for example, +8612345678901) that contains the country code. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200007](../errorcode-enterpriseDeviceManager.md#9200007-system-ability-error) | The system ability works abnormally. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { deviceInfo } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  // Replace with actual values.
  let result: string = deviceInfo.getDeviceInfo(wantTemp, 'deviceName');
  console.info(`Succeeded in getting device name, result : ${result}`);
} catch (err) {
  console.error(`Failed to get device name. Code: ${err.code}, message: ${err.message}`);
}

```

