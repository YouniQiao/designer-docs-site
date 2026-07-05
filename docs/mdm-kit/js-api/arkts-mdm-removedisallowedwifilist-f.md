# removeDisallowedWifiList

## Modules to Import

```TypeScript
import { wifiManager } from '@ohos.enterprise.wifiManager';
```

## removeDisallowedWifiList

```TypeScript
function removeDisallowedWifiList(admin: Want, list: Array<WifiAccessInfo>): void
```

Removes disallowed Wi-Fi networks. If some Wi-Fi networks are removed from the disallowed list, the current device cannot connect to the remaining ones; if all Wi-Fi networks are removed from the disallowed list, the current device can connect to any Wi-Fi network.

**Since:** 19

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_WIFI

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| list | Array&lt;WifiAccessInfo&gt; | Yes | Array of Wi-Fi networks to be removed. The maximum length of the array is 200. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permissionrequired to call the API. |

**Example**

```TypeScript
import { wifiManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.edmtest',
  abilityName: 'EnterpriseAdminAbility'
};
try {
  let wifiIds: Array<wifiManager.WifiAccessInfo> = [{
    // Replace with actual values.
    ssid: "wifi_name",
    bssid: "68:77:24:77:A6:D8"
  }];
  wifiManager.removeDisallowedWifiList(wantTemp, wifiIds);
  console.info(`Succeeded in removing disallowed Wi-Fi list.`);
} catch (err) {
  console.error(`Failed to remove disallowed Wi-Fi list. Code: ${err.code}, message: ${err.message}`);
}

```

