# installUserCertificate

## installUserCertificate

```TypeScript
function installUserCertificate(admin: Want, certificate: CertBlob): Promise<string>
```

安装用户证书，使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| certificate | CertBlob | Yes | 证书信息。证书文件应放在应用沙箱路径(应用沙箱路径和真实路径的对应关系可参见：  [应用沙箱路径和真实物理路径的对应关系](docroot://file-management/app-sandbox-directory.md#应用沙箱路径和真实物理路径的对应关系))等应用有权限访问的路径下。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回当前证书安装后的uri，用于卸载证书。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9201001 | Failed to manage the certificate. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { securityManager } from '@kit.MDMKit';
import { common, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
let certFileArray: Uint8Array = new Uint8Array();
// Initialize the context variable in the onCreate callback function of the MainAbility.
// Store test.cer in the rawfile directory.
// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
const context = this.getUIContext().getHostContext() as common.UIAbilityContext;
context.resourceManager.getRawFileContent("test.cer").then((value) => {
  certFileArray = value;
  securityManager.installUserCertificate(wantTemp, { inData: certFileArray, alias: "cert_alias_xts" })
    .then((result) => {
      console.info(`Succeeded in installing user certificate, result : ${JSON.stringify(result)}`);
    }).catch((err: BusinessError) => {
    console.error(`Failed to install user certificate. Code: ${err.code}, message: ${err.message}`);
  })
}).catch((err: BusinessError) => {
  console.error(`Failed to get raw file content. message: ${err.message}`);
  return;
});

```

## installUserCertificate

```TypeScript
function installUserCertificate(admin: Want, certificate: CertBlob, accountId: number): string
```

支持按系统账户安装用户证书。

**Since:** 18

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| certificate | CertBlob | Yes | 证书信息。证书文件应放在应用沙箱路径(应用沙箱路径和真实路径的对应关系可参见：  [应用沙箱路径和真实物理路径的对应关系](docroot://file-management/app-sandbox-directory.md#应用沙箱路径和真实物理路径的对应关系))等应用有权限访问的路径下。 |
| accountId | number | Yes | 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的  [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId)等接口来获取。@ohos.account.osAccount to obtain the account ID. |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回当前证书安装后的uri，用于卸载证书。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9201001 | Failed to manage the certificate. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |

**Example**

```TypeScript
import { securityManager } from '@kit.MDMKit';
import { common, Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
let certFileArray: Uint8Array = new Uint8Array();
let accountId: number = 100;
// Initialize the context variable in the onCreate callback function of the MainAbility.
// Store test.cer in the rawfile directory.
// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
const context = this.getUIContext().getHostContext() as common.UIAbilityContext;
context.resourceManager.getRawFileContent("test.cer").then((value) => {
  certFileArray = value;
  try {
    let result: string = securityManager.installUserCertificate(wantTemp, { inData: certFileArray, alias: "cert_alias_xts" }, accountId);
    console.info(`Succeeded in installing user certificate. result: ${result}`);
  } catch (err) {
    console.error(`Failed to install user certificate. Code: ${err.code}, message: ${err.message}`);
  }
});

```

