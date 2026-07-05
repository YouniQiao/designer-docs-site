# setEthernetConfig

## setEthernetConfig

```TypeScript
function setEthernetConfig(admin: Want, networkInterface: string, config: InterfaceConfig): void
```

设置特定以太网网络接口的IP地址。

**Since:** 23

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_NETWORK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。 |
| networkInterface | string | Yes | 要设置的网络接口名。 |
| config | InterfaceConfig | Yes | 要设置的网络接口配置信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 9201010 | Ethernet configuration failed. Ethernet device not connected. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { networkManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility',
};
let config: networkManager.InterfaceConfig = {
  // Replace with actual values.
  "ipSetMode": networkManager.IpSetMode.STATIC,
  "ipAddress": "192.168.1.121",
  "gateway": "192.168.1.1",
  "netMask": "255.255.255.0",
  "dnsServers": "192.168.1.1"
}
let networkInterface: string = "eth0"; // Replace it as required.
try {
  networkManager.setEthernetConfig(wantTemp, networkInterface, config);
  console.info('Succeeded in setting ethernet config.');
} catch (err) {
  console.error(`Failed to set ethernet config. Code: ${err.code}, message: ${err.message}`);
}

```

