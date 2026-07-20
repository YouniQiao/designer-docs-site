# operateDevice

## Modules to Import

```TypeScript
import { deviceControl } from '@kit.MDMKit';
```

## operateDevice

```TypeScript
function operateDevice(admin: Want, operate: string, addition?: string): void
```

Allows the specified device administrator application to operate devices.

**Since:** 12

**Required permissions:** ohos.permission.ENTERPRISE_OPERATE_DEVICE

**Model restriction:** This API can be used only in the stage model.

<!--Device-deviceControl-function operateDevice(admin: Want, operate: string, addition?: string): void--><!--Device-deviceControl-function operateDevice(admin: Want, operate: string, addition?: string): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| operate | string | Yes | Operation to be performed, which can be any of the following:<br>- **resetFactory**:restore device factory settings. After this API is called, the device will be restored to factory settings immediately. Once the restoration is complete, all device data will be erased and cannot be restored. To protect against data loss caused by potential application attacks, enterprises should implement robust security measures for their applications.<br>- **reboot**: restart devices.<br>- **shutDown**: shut down devices.<br>-**lockScreen**: lock device screens. Once this capability is used, the device screen will become inaccessible.It only supports lock screen text customization but does not allow for interactive function customization on the lock screen. To implement custom behaviors on the lock screen, you are advised to use the [setAllowedKioskApps](arkts-mdm-applicationmanager-setallowedkioskapps-f.md#setallowedkioskapps-1) API to configure apps that support the [Kiosk mode](../../apis-ability-kit/arkts-apis/arkts-ability-kioskmanager-enterkioskmode-f.md#enterkioskmode-1).&lt;!--RP1--&gt;&lt;!--RP1End--&gt; |
| addition | string | No | &lt;!--RP2--&gt;Additional parameter for the operation. Currently, this parameter does not need to be passed in.&lt;!--RP2End--&gt; |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { deviceControl } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace it as required.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  // Replace the parameters as required.
  deviceControl.operateDevice(wantTemp, 'resetFactory');
} catch (err) {
  console.error(`Failed to reset factory. Code is ${err.code}, message is ${err.message}`);
}

```


## operateDevice

```TypeScript
function operateDevice(admin: Want, operation: Operation, addition?: string): void
```

Allows the administrator to operate devices.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_OPERATE_DEVICE

**Model restriction:** This API can be used only in the stage model.

<!--Device-deviceControl-function operateDevice(admin: Want, operation: Operation, addition?: string): void--><!--Device-deviceControl-function operateDevice(admin: Want, operation: Operation, addition?: string): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | admin indicates the enterprise admin extension ability information. |
| operation | [Operation](../../apis-connectivity-kit/arkts-apis/arkts-connectivity-ssap-operation-e.md) | Yes | operation indicates the operation to performed. |
| addition | string | No | addition indicates the specified additional parameters when performing the operation. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200010](../errorcode-enterpriseDeviceManager.md#9200010-policy-conflict) | A conflict policy has been configured. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

