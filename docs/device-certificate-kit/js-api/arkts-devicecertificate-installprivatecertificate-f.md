# installPrivateCertificate

## Modules to Import

```TypeScript
import { certificateManager } from '@ohos.security.certManager';
```

## installPrivateCertificate

```TypeScript
function installPrivateCertificate(
    keystore: Uint8Array,
    keystorePwd: string,
    certAlias: string,
    callback: AsyncCallback<CMResult>
  ): void
```

Installs a private credential. This API uses an asynchronous callback to return the result.

**Since:** 11

**Required permissions:** ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keystore | Uint8Array | Yes | Keystore file with a key pair and certificate. The value contains up to 20480bytes. |
| keystorePwd | string | Yes | Password of the keystore file. The password cannot exceed 32 bytes. |
| certAlias | string | Yes | Credential alias. Currently, the alias can contain only digits, letters, andunderscores (_) and should not exceed 32 bytes. |
| callback | AsyncCallback&lt;CMResult&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **null** and **data** is **uri** in the [CMResult](arkts-devicecertificate-cmresult-i.md#cmresult) object.Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permissionrequired to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [17500001](../errorcode-certManager.md#17500001-internal-error) | Internal error. Possible causes: 1. IPC communication failed;<br>2. Memory operation error; 3. File operation error. Please try again. |
| [17500003](../errorcode-certManager.md#17500003-invalid-certificate-or-credential) | The keystore is in an invalid format or the keystore password is incorrect. |
| [17500004](../errorcode-certManager.md#17500004-the-number-of-certificates-or-credentials-reaches-the-limit) | The number of certificates or credentials reaches the maximum allowed.<br>**Applicable version:** 12 |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';

/* The credential data to be installed must be assigned by the service. The data in this example is not the real credential data. */
let keystore: Uint8Array = new Uint8Array([
  0x30, 0x82, 0x0b, 0xc1, 0x02, 0x01,
]);
let keystorePwd: string = "123456";
try {
  certificateManager.installPrivateCertificate(keystore, keystorePwd, "test", (err, cmResult) => {
    if (err != null) {
      console.error(`Failed to install private certificate. Code: ${err.code}, message: ${err.message}`);
    } else {
      let uri: string = cmResult?.uri ?? '';
      console.info('Succeeded in installing private certificate.');
    }
  });
} catch (error) {
  console.error(`Failed to install private certificate. Code: ${error.code}, message: ${error.message}`);
}

```


## installPrivateCertificate

```TypeScript
function installPrivateCertificate(keystore: Uint8Array, keystorePwd: string, certAlias: string): Promise<CMResult>
```

Installs a private credential. This API uses a promise to return the result.

**Since:** 11

**Required permissions:** ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keystore | Uint8Array | Yes | Keystore file with a key pair and certificate. The value contains up to 20480bytes. |
| keystorePwd | string | Yes | Password of the keystore file. The password cannot exceed 32 bytes. |
| certAlias | string | Yes | Credential alias. Currently, the alias can contain only digits, letters, andunderscores (_) and should not exceed 32 bytes. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CMResult&gt; | Promise used to return the operation result, that is, **uri** in the[CMResult](arkts-devicecertificate-cmresult-i.md#cmresult) object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permissionrequired to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [17500001](../errorcode-certManager.md#17500001-internal-error) | Internal error. Possible causes: 1. IPC communication failed;<br>2. Memory operation error; 3. File operation error. Please try again. |
| [17500003](../errorcode-certManager.md#17500003-invalid-certificate-or-credential) | The keystore is in an invalid format or the keystore password is incorrect. |
| [17500004](../errorcode-certManager.md#17500004-the-number-of-certificates-or-credentials-reaches-the-limit) | The number of certificates or credentials reaches the maximum allowed.<br>**Applicable version:** 12 |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

/* The credential data to be installed must be assigned by the service. The data in this example is not the real credential data. */
let keystore: Uint8Array = new Uint8Array([
  0x30, 0x82, 0x0b, 0xc1, 0x02, 0x01,
]);
let keystorePwd: string = "123456";
try {
  certificateManager.installPrivateCertificate(keystore, keystorePwd, 'test').then((cmResult) => {
    let uri: string = cmResult?.uri ?? '';
    console.info('Succeeded in installing private certificate.');
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to install private certificate. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to install private certificate. Code: ${error.code}, message: ${error.message}`);
}

```


## installPrivateCertificate

```TypeScript
function installPrivateCertificate(keystore: Uint8Array, keystorePwd: string, certAlias: string, level: AuthStorageLevel): Promise<CMResult>
```

Installs a private credential and specifies its storage level. This API uses a promise to return the result.

**Since:** 18

**Required permissions:** ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keystore | Uint8Array | Yes | Keystore file with a key pair and certificate. The value contains up to 20480bytes. |
| keystorePwd | string | Yes | Password of the keystore file.<br>The value contains up to 32 bytes. |
| certAlias | string | Yes | Alias of the credential entered by the user. Only digits, letters, and underscores (_) are supported.<br>The value should contain up to 32 bytes. |
| level | AuthStorageLevel | Yes | Credential storage level. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CMResult&gt; | Promise used to return the operation result, that is, **uri** in the[CMResult](arkts-devicecertificate-cmresult-i.md#cmresult) object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permissionrequired to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [17500001](../errorcode-certManager.md#17500001-internal-error) | Internal error. Possible causes: 1. IPC communication failed;<br>2. Memory operation error; 3. File operation error. Please try again. |
| [17500003](../errorcode-certManager.md#17500003-invalid-certificate-or-credential) | The keystore is in an invalid format or the keystore password is incorrect. |
| [17500004](../errorcode-certManager.md#17500004-the-number-of-certificates-or-credentials-reaches-the-limit) | The number of certificates or credentials reaches the maximum allowed. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

/* The data of the credential to be installed must be assigned based on the service. The data in this example is not the real credential data. */
let keystore: Uint8Array = new Uint8Array([
  0x30, 0x82, 0x0b, 0xc1, 0x02, 0x01,
]);
let keystorePwd: string = "123456";
try {
  /* The credential can be used after the device is unlocked for the first time. */
  let level = certificateManager.AuthStorageLevel.EL2;
  certificateManager.installPrivateCertificate(keystore, keystorePwd, 'test', level).then((cmResult) => {
    let uri: string = cmResult.uri ?? '';
    console.info('Succeeded in installing private certificate.');
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to install private certificate. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to install private certificate. Code: ${error.code}, message: ${error.message}`);
}

```

