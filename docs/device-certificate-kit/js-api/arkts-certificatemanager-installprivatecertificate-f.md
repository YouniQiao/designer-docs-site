# installPrivateCertificate

## installPrivateCertificate

```TypeScript
function installPrivateCertificate(
    keystore: Uint8Array,
    keystorePwd: string,
    certAlias: string,
    callback: AsyncCallback<CMResult>
  ): void
```

安装私有凭据。使用Callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keystore | Uint8Array | Yes | 表示带有密钥对和证书的密钥库文件，   最大长度为20480字节。 |
| keystorePwd | string | Yes | 表示密钥库文件的密码，长度限制32字节以内。 |
| certAlias | string | Yes | 表示用户输入的凭据别名，当前仅支持传入数字、字母或下划线，长度建议32字节以内。 |
| callback | AsyncCallback&lt;CMResult> | Yes | 回调函数。当安装私有凭据成功时，err为null，data为  [CMResult]certificateManager.CMResult对象中的uri属性；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500003 | The keystore is in an invalid format or the keystore password is incorrect. |
| 17500004 | The number of certificates or credentials reaches the maximum allowed.  [since 12] |

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

安装私有凭据。使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keystore | Uint8Array | Yes | 表示带有密钥对和证书的密钥库文件，  最大长度为20480字节。 |
| keystorePwd | string | Yes | 表示密钥库文件的密码，长度限制32字节以内。 |
| certAlias | string | Yes | 表示用户输入的凭据别名，当前仅支持传入数字、字母或下划线，长度建议32字节以内。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CMResult> | Promise对象，返回安装私有凭据的结果，返回值为[CMResult]certificateManager.CMResult对象中的uri属性。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500003 | The keystore is in an invalid format or the keystore password is incorrect. |
| 17500004 | The number of certificates or credentials reaches the maximum allowed.  [since 12] |

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

表示安装私有凭据并指定凭据的存储级别。使用Promise异步回调。

**Since:** 18

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keystore | Uint8Array | Yes | 表示带有密钥对和证书的密钥库文件，最大长度为20480字节。 |
| keystorePwd | string | Yes | 表示密钥库文件的密码。 长度限制：32字节以内。 |
| certAlias | string | Yes | 表示用户输入的凭据别名，当前仅支持传入数字、字母或下划线。 长度建议：32字节以内。 |
| level | AuthStorageLevel | Yes | 表示凭据的存储级别。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CMResult> | Promise对象，返回安装私有凭据的结果，返回值为[CMResult]certificateManager.CMResult对象中的uri属性。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500003 | The keystore is in an invalid format or the keystore password is incorrect. |
| 17500004 | The number of certificates or credentials reaches the maximum allowed. |

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

