# getCertificateStorePath

## getCertificateStorePath

```TypeScript
function getCertificateStorePath(property: CertStoreProperty): string
```

表示获取证书的存储路径。

**Since:** 18

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| property | CertStoreProperty | Yes | 表示获取证书存储路径的参数集合。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 表示证书的存储路径。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left  unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. For example, CertStoreProperty.certType  is set to CA_CERT_USER, but CertStoreProperty.certScope is not specified. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |
| 17500009 | The device does not support the specified certificate storage path,  For example, the device outside China does not support the certificate that uses SM algorithm. [since 20] |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';

try {
  /* Obtain the storage path of the system CA certificates. */
  let property1: certificateManager.CertStoreProperty = {
    certType: certificateManager.CertType.CA_CERT_SYSTEM,
  }
  let systemCAPath = certificateManager.getCertificateStorePath(property1);
  console.info(`Success to get system ca path: ${systemCAPath}`);

  /* Obtain the storage path of the CA certificates for the current user. */
  let property2: certificateManager.CertStoreProperty = {
    certType: certificateManager.CertType.CA_CERT_USER,
    certScope: certificateManager.CertScope.CURRENT_USER,
  }
  let userCACurrentPath = certificateManager.getCertificateStorePath(property2);
  console.info(`Success to get current user's user ca path: ${userCACurrentPath}`);

  /* Obtain the storage path of the CA certificates for all users. */
  let property3: certificateManager.CertStoreProperty = {
    certType: certificateManager.CertType.CA_CERT_USER,
    certScope: certificateManager.CertScope.GLOBAL_USER,
  }
  let globalCACurrentPath = certificateManager.getCertificateStorePath(property3);
  console.info(`Success to get global user's user ca path: ${globalCACurrentPath}`);

  /* Obtain the storage path of the system CA certificates of the SM algorithm. */
  let property4: certificateManager.CertStoreProperty = {
    certType: certificateManager.CertType.CA_CERT_SYSTEM,
    certAlg: certificateManager.CertAlgorithm.SM,
  }
  let smSystemCAPath = certificateManager.getCertificateStorePath(property4);
  console.info(`Success to get SM system ca path: ${smSystemCAPath}`);
} catch (error) {
  console.error(`Failed to get store path. Code: ${error.code}, message: ${error.message}`);
}

```

