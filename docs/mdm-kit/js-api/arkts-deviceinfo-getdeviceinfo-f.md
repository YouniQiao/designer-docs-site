# getDeviceInfo

## getDeviceInfo

```TypeScript
function getDeviceInfo(admin: Want, label: string): string
```

获取设备信息。

**Since:** 12

**Required permissions:** 

 ohos.permission.ENTERPRISE_GET_DEVICE_INFO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| label | string | Yes | 支持获取的设备信息标签。 - deviceName：设备名称。 - deviceSerial：设备序列号。 - simInfo：SIM卡信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | Device information obtained.  If label is simInfo, the return value is the SIM card information in a JSON string. For example,  [{"slotId": 0, "MEID": "", "IMSI": "", "ICCID": "", "IMEI": "", "NUMBER": ""},  {"slotId": 1, "MEID": "", "IMSI": "", "ICCID": "", "IMEI": "", "NUMBER": ""}]  , where slotId:0 indicates card slot 1, and slotId:1 indicates card slot 2. NUMBER indicates the  phone number and is supported since API version 23. The value is in the E.164 international standard format (  for example, +8612345678901) that contains the country code. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200007 | The system ability works abnormally. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

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

