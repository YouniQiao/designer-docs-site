# getPrivateCertificate

## getPrivateCertificate

```TypeScript
function getPrivateCertificate(keyUri: string, callback: AsyncCallback<CMResult>): void
```

获取私有凭据的详细信息，使用Callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyUri | string | Yes | 表示待获取凭据的唯一标识符，长度限制256字节以内。 |
| callback | AsyncCallback&lt;CMResult> | Yes | 回调函数。当获取私有凭据的详细信息成功时，err为null，data为  [CMResult]certificateManager.CMResult对象中的credential属性；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500002 | The certificate does not exist. Possible causes:  1. The certificate URI is incorrect;  2. The certificate has been uninstalled. Please check the certificate URI. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';

let uri: string = 'test'; /* The service needs to use the unique identifier of the credential to obtain the private credential details, which is not elaborated here. */
try {
  certificateManager.getPrivateCertificate(uri, (err, cmResult) => {
    if (err != null) {
      console.error(`Failed to get private certificate. Code: ${err.code}, message: ${err.message}`);
    } else {
      if (cmResult?.credential == undefined) {
        console.info('The result of getting private certificate is undefined.');
      } else {
        let list = cmResult?.credential;
        console.info('Succeeded in getting private certificate.');
      }
    }
  });
} catch (error) {
  console.error(`Failed to get private certificate. Code: ${error.code}, message: ${error.message}`);
}

```

## getPrivateCertificate

```TypeScript
function getPrivateCertificate(keyUri: string): Promise<CMResult>
```

获取私有凭据详情。使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyUri | string | Yes | 表示待获取凭据的唯一标识符，长度限制256字节以内。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CMResult> | Promise对象，返回获取私有凭据详细信息的结果，返回值为[CMResult]certificateManager.CMResult对象中的  credential属性。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500002 | The certificate does not exist. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

let uri: string = 'test'; /* The service needs to use the unique identifier of the credential to obtain the private credential details, which is not elaborated here. */
try {
  certificateManager.getPrivateCertificate(uri).then((cmResult) => {
    if (cmResult?.credential == undefined) {
      console.info('The result of getting private certificate is undefined.');
    } else {
      let list = cmResult.credential;
      console.info('Succeeded in getting private certificate.');
    }
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to get private certificate. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to get private certificate. Code: ${error.code}, message: ${error.message}`);
}

```

