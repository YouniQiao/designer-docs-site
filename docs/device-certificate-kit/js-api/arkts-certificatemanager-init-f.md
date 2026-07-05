# init

## init

```TypeScript
function init(authUri: string, spec: CMSignatureSpec, callback: AsyncCallback<CMHandle>): void
```

使用凭据进行签名、验签的初始化操作，是签名验签流程的第一步，后续需依次调用update和finish接口完成操作。使用Callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authUri | string | Yes | 表示使用凭据的唯一标识符，长度限制256字节以内。 |
| spec | CMSignatureSpec | Yes | 表示签名、验签的属性。 |
| callback | AsyncCallback&lt;CMHandle> | Yes | 回调函数。当签名、验签的初始化操作成功时，err为null，data为获取到的CMHandle；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500002 | The certificate does not exist. |
| 17500005 | The application is not authorized by the user.  Please call [openAuthorizeDialog]certificateManagerDialog.openAuthorizeDialog  method to request user authorization for the certificate or credential. [since 12] |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';

let uri: string = 'test'; /* The service needs to use the unique identifier of the credential to initialize signing and signature verification, which is not elaborated here. */
const req: certificateManager.CMSignatureSpec = {
  purpose: certificateManager.CmKeyPurpose.CM_KEY_PURPOSE_SIGN,
  padding: certificateManager.CmKeyPadding.CM_PADDING_PSS,
  digest: certificateManager.CmKeyDigest.CM_DIGEST_SHA256
}
try {
  certificateManager.init(uri, req, (err, cmHandle) => {
    if (err != null) {
      console.error(`Failed to init. Code: ${err.code}, message: ${err.message}`);
    } else {
      console.info('Succeeded in initiating.');
    }
  })
} catch (error) {
  console.error(`Failed to init. Code: ${error.code}, message: ${error.message}`);
}

```

## init

```TypeScript
function init(authUri: string, spec: CMSignatureSpec): Promise<CMHandle>
```

使用凭据进行签名、验签的初始化操作。使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authUri | string | Yes | 表示使用凭据的唯一标识符，长度限制256字节以内。 |
| spec | CMSignatureSpec | Yes | 表示签名、验签的属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CMHandle> | Promise对象，返回签名、验签的初始化操作结果，返回值为CMHandle对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500002 | The certificate does not exist. |
| 17500005 | The application is not authorized by the user. [since 12] |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

let uri: string = 'test'; /* The service needs to use the unique identifier of the credential to initialize signing and signature verification, which is not elaborated here. */
const req: certificateManager.CMSignatureSpec = {
  purpose: certificateManager.CmKeyPurpose.CM_KEY_PURPOSE_VERIFY,
  padding: certificateManager.CmKeyPadding.CM_PADDING_PSS,
  digest: certificateManager.CmKeyDigest.CM_DIGEST_MD5
}
try {
  certificateManager.init(uri, req).then((handle) => {
    console.info('Succeeded in initiating.');
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to init. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to init. Code: ${error.code}, message: ${error.message}`);
}

```

