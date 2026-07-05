# uninstall

## uninstall

```TypeScript
function uninstall(admin: Want, bundleName: string, callback: AsyncCallback<void>): void
```

卸载当前用户下的指定应用程序包，且不保留应用程序包数据。使用callback异步回调。 > **说明：** > > 当应用为不可卸载的预置应用或者通过 > [addDisallowedUninstallBundlesSync](arkts-bundlemanager-adddisalloweduninstallbundlessync-f.md#addDisallowedUninstallBundlesSync-1) > 接口设置了不允许卸载时，调用此接口卸载应用会返回401错误码。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** bundleManager.uninstall(admin:

**Required permissions:** 

 ohos.permission.ENTERPRISE_INSTALL_BUNDLE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| bundleName | string | Yes | 包名。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当接口调用成功，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { bundleManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

bundleManager.uninstall(wantTemp, 'bundleName', (err) => {
  if (err) {
    console.error(`Failed to uninstall bundles. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in uninstalling bundles');
});

```

## uninstall

```TypeScript
function uninstall(admin: Want, bundleName: string, userId: number, callback: AsyncCallback<void>): void
```

卸载指定用户下（由参数userId指定）的指定应用程序包，且不保留应用程序包数据。使用callback异步回调。 > **说明：** > > 当应用为不可卸载的预置应用或者通过 > [addDisallowedUninstallBundlesSync](arkts-bundlemanager-adddisalloweduninstallbundlessync-f.md#addDisallowedUninstallBundlesSync-1) > 接口设置了不允许卸载时，调用此接口卸载应用会返回401错误码。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** bundleManager.uninstall(admin:

**Required permissions:** 

 ohos.permission.ENTERPRISE_INSTALL_BUNDLE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| bundleName | string | Yes | 包名。 |
| userId | number | Yes | 用户ID，指定具体用户。取值范围：大于等于0。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当接口调用成功，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { bundleManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

bundleManager.uninstall(wantTemp, 'bundleName', 100, (err) => {
  if (err) {
    console.error(`Failed to uninstall bundles. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in uninstalling bundles');
});

```

## uninstall

```TypeScript
function uninstall(admin: Want, bundleName: string, isKeepData: boolean, callback: AsyncCallback<void>): void
```

卸载当前用户下的指定应用程序包，选择是否保留应用程序包数据（由isKeepData指定）。使用callback异步回调。 > **说明：** > > 当应用为不可卸载的预置应用或者通过 > [addDisallowedUninstallBundlesSync](arkts-bundlemanager-adddisalloweduninstallbundlessync-f.md#addDisallowedUninstallBundlesSync-1) > 接口设置了不允许卸载时，调用此接口卸载应用会返回401错误码。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** bundleManager.uninstall(admin:

**Required permissions:** 

 ohos.permission.ENTERPRISE_INSTALL_BUNDLE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| bundleName | string | Yes | 包名。 |
| isKeepData | boolean | Yes | 是否保留包数据，true表示保留，false表示不保留。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当接口调用成功，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { bundleManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

bundleManager.uninstall(wantTemp, 'bundleName', true, (err) => {
  if (err) {
    console.error(`Failed to uninstall bundles. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in uninstalling bundles');
});

```

## uninstall

```TypeScript
function uninstall(admin: Want, bundleName: string, userId: number, isKeepData: boolean, callback: AsyncCallback<void>): void
```

卸载指定用户下（由参数userId指定）的指定应用程序包接口，选择是否保留应用程序包数据（由isKeepData指定）。使用callback异步回调。 > **说明：** > > 当应用为不可卸载的预置应用或者通过 > [addDisallowedUninstallBundlesSync](arkts-bundlemanager-adddisalloweduninstallbundlessync-f.md#addDisallowedUninstallBundlesSync-1) > 接口设置了不允许卸载时，调用此接口卸载应用会返回401错误码。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** bundleManager.uninstall(admin:

**Required permissions:** 

 ohos.permission.ENTERPRISE_INSTALL_BUNDLE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| bundleName | string | Yes | 包名。 |
| userId | number | Yes | 用户ID，指定具体用户。取值范围：大于等于0。 |
| isKeepData | boolean | Yes | 是否保留包数据，true表示保留，false表示不保留。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当接口调用成功，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { bundleManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

bundleManager.uninstall(wantTemp, 'bundleName', 100, true, (err) => {
  if (err) {
    console.error(`Failed to uninstall bundles. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in uninstalling bundles');
});

```

