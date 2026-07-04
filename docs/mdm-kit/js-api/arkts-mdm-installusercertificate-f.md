# installUserCertificate

## Modules to Import

```TypeScript
import { securityManager } from '@ohos.enterprise.securityManager';
```

## installUserCertificate

```TypeScript
function installUserCertificate(admin: Want, certificate: CertBlob): Promise<string>
```

Installs a user certificate. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| certificate | CertBlob | Yes | Certificate information. The certificate file must be stored in the path that theapp has the permission to access, such as the app sandbox path. For details about the mapping between the appsandbox path and the actual physical path, see[Mappings Between App Sandbox Paths and Physical Paths](../../../../file-management/app-sandbox-directory.md#mappings-between-application-sandbox-paths-and-physical-paths). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the URI of the installed certificate. This URI can be used touninstall the certificate. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9201001](../errorcode-enterpriseDeviceManager.md#9201001-failed-to-manage-the-certificate) | Failed to manage the certificate. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permissionrequired to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

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

Installs a user certificate based on the system account.

**Since:** 18

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_CERTIFICATE

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| certificate | CertBlob | Yes | Certificate information. The certificate file must be stored in the path that theapp has the permission to access, such as the app sandbox path. For details about the mapping between the appsandbox path and the actual physical path, see[Mappings Between App Sandbox Paths and Physical Paths](../../../../file-management/app-sandbox-directory.md#mappings-between-application-sandbox-paths-and-physical-paths). |
| accountId | number | Yes | Account ID, which must be greater than or equal to 0. You can call[getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-accountmanager-i.md#getosaccountlocalid-2) of**@ohos.account.osAccount** to obtain the account ID. |

**Return value:**

| Type | Description |
| --- | --- |
| string | URI of the installed certificate, which is used to uninstall the certificate. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9201001](../errorcode-enterpriseDeviceManager.md#9201001-failed-to-manage-the-certificate) | Failed to manage the certificate. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permissionrequired to call the API. |

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

