# getDisallowedBluetoothProtocols

## getDisallowedBluetoothProtocols

```TypeScript
function getDisallowedBluetoothProtocols(admin: Want, accountId: number): Array<Protocol>
```

获取指定用户的蓝牙协议禁用名单。

**Since:** 20

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| accountId | number | Yes | 用户ID，取值范围：大于等于0。 accountId可以通过@ohos.account.osAccount中的  [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId)等接口来获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Protocol> | 禁用名单中蓝牙协议的数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { bluetoothManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // Replace it as required.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace it as required.
let accountId: number = 100;
try{
    let result: Array<bluetoothManager.Protocol> = bluetoothManager.getDisallowedBluetoothProtocols(wantTemp, accountId);
    console.info(`Succeeded in getting disallowed bluetooth protocols. Result: ${JSON.stringify(result)}`);
} catch (err) {
    console.error(`Failed to get disallowed bluetooth protocols. Code: ${err.code}, message: ${err.message}`);
}

```

## getDisallowedBluetoothProtocols

```TypeScript
function getDisallowedBluetoothProtocols(admin: Want | null, accountId: number, policy: TransferPolicy): Array<Protocol>
```

获取指定用户指定传输策略下已禁用的蓝牙协议列表。 > **说明：** >

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want \| null | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| accountId | number | Yes | 不合法的值区间: [0, +。  - 用户ID，取值范围：大于等于0。 accountId可以通过@ohos.account.osAccount中的  [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId)等接口来获取。 |
| policy | TransferPolicy | Yes | 传输策略。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Protocol> | 返回禁用名单中的蓝牙协议数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

