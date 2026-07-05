# install

## install

```TypeScript
function install(admin: Want, hapFilePaths: Array<string>, callback: AsyncCallback<void>): void
```

安装指定路径下的应用包。使用callback异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** bundleManager.install(admin:

**Required permissions:** 

 ohos.permission.ENTERPRISE_INSTALL_BUNDLE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| hapFilePaths | Array&lt;string> | Yes | 待安装应用包路径数组。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当接口调用成功，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9201002 | Failed to install the application. |
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
// Replace with actual values.
let hapFilePaths: Array<string> = ['/data/storage/el2/base/haps/entry/testinstall/ExtensionTest.hap'];

bundleManager.install(wantTemp, hapFilePaths, (err) => {
  if (err) {
    console.error(`Failed to install bundles. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in installing bundles');
});

```

## install

```TypeScript
function install(admin: Want, hapFilePaths: Array<string>, installParam: InstallParam, callback: AsyncCallback<void>): void
```

安装指定路径下的指定安装参数的应用包。使用callback异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** bundleManager.install(admin:

**Required permissions:** 

 ohos.permission.ENTERPRISE_INSTALL_BUNDLE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| hapFilePaths | Array&lt;string> | Yes | 待安装应用包路径数组。 |
| installParam | InstallParam | Yes | 应用包安装参数。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当接口调用成功，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9201002 | Failed to install the application. |
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
// Replace with actual values.
let hapFilePaths: Array<string> = ['/data/storage/el2/base/haps/entry/testinstall/ExtensionTest.hap'];
let installParam: bundleManager.InstallParam = {
  userId: 100,
  installFlag: 1,
};

bundleManager.install(wantTemp, hapFilePaths, installParam, (err) => {
  if (err) {
    console.error(`Failed to install bundles. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in installing bundles');
});

```

