# addDisallowedWifiList

## Modules to Import

```TypeScript
import { wifiManager } from '@kit.MDMKit';
```

## addDisallowedWifiList

```TypeScript
function addDisallowedWifiList(admin: Want, list: Array<WifiAccessInfo>): void
```

Adds disallowed Wi-Fi networks. The current device cannot connect to the disallowed Wi-Fi networks.

A policy conflict is reported when this API is called in the following scenarios:

1. Wi-Fi networks have been disabled by calling [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1).
You can resolve the conflict by enabling the Wi-Fi networks through [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1).
2. Allowed Wi-Fi networks have been added by calling [addAllowedWifiList](arkts-mdm-addallowedwifilist-f.md#addallowedwifilist-1).
You can resolve the conflict by removing the allowed Wi-Fi networks through [removeAllowedWifiList](arkts-mdm-removeallowedwifilist-f.md#removeallowedwifilist-1).

**Since:** 19

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_WIFI

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| list | Array&lt;WifiAccessInfo&gt; | Yes | Array of disallowed Wi-Fi networks. The maximum length of the array is 200.For example, if there are already 100 Wi-Fi networks, a maximum of 100 more can be added. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200010](../errorcode-enterpriseDeviceManager.md#9200010-policy-conflict) | A conflict policy has been configured. |
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
  wifiManager.addDisallowedWifiList(wantTemp, wifiIds);
  console.info(`Succeeded in adding disallowed Wi-Fi list.`);
} catch (err) {
  console.error(`Failed to add disallowed Wi-Fi list. Code: ${err.code}, message: ${err.message}`);
}

```

