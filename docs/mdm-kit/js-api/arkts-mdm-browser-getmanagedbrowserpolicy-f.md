# getManagedBrowserPolicy

## Modules to Import

```TypeScript
import { browser } from '@kit.MDMKit';
```

## getManagedBrowserPolicy

```TypeScript
function getManagedBrowserPolicy(admin: Want, bundleName: string): ArrayBuffer
```

Obtains the browser policy by application bundle name.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

<!--Device-browser-function getManagedBrowserPolicy(admin: Want, bundleName: string): ArrayBuffer--><!--Device-browser-function getManagedBrowserPolicy(admin: Want, bundleName: string): ArrayBuffer-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| bundleName | string | Yes | Application bundle name, which is used to specify the browser. |

**Return value:**

| Type | Description |
| --- | --- |
| [ArrayBuffer](../../apis-arkts/arkts-apis/arkts-arkts-collections-arraybuffer-c.md) | Browser policy obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { browser } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';
import { util } from '@kit.ArkTS';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace with actual values.
let bundleName: string = 'com.example.testbrowser';

try {
  let buffer: ArrayBuffer = browser.getManagedBrowserPolicy(wantTemp, bundleName);
  let intBuffer: Uint8Array = new Uint8Array(buffer);
  let decoder: util.TextDecoder = util.TextDecoder.create('utf-8');
  let stringData: string = decoder.decodeToString(intBuffer);
  console.info(`Succeeded in getting managed browser policy, result : ${stringData}`);
} catch(err) {
  console.error(`Failed to get managed browser policy. Code is ${err.code}, message is ${err.message}`);
}

```

