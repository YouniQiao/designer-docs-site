# addDisallowedWifiList

## addDisallowedWifiList

```TypeScript
function addDisallowedWifiList(admin: Want, list: Array<WifiAccessInfo>): void
```

添加Wi-Fi禁用名单。添加禁用名单后当前设备不允许连接该名单下的Wi-Fi。 以下情况下，调用本接口会报策略冲突： 1. 已经通过[setDisallowedPolicy](arkts-restrictions-setdisallowedpolicy-f.md#setDisallowedPolicy-1)接口禁用了设备Wi-Fi能力。通过[setDisallowedPolicy](arkts-restrictions-setdisallowedpolicy-f.md#setDisallowedPolicy-1)解除Wi-Fi禁用后，可解除冲突。 2. 已经通过[addAllowedWifiList]wifiManager.addAllowedWifiList接口添加了Wi-Fi允许名单。通过[removeAllowedWifiList]wifiManager.removeAllowedWifiList移除Wi-Fi允许名单后，可解除冲突。

**Since:** 19

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_WIFI

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| list | Array&lt;WifiAccessInfo> | Yes | Wi-Fi禁用名单数组。数组总长度不能超过200。例如，若当前禁用名单数组中已有100个Wi-Fi，则最多支持通过该接口再添加100个。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200010 | A conflict policy has been configured. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |

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

