# CertStoreProperty

表示获取证书存储位置的参数集合，包括证书的类型及证书的位置。

**Since:** 18

**System capability:** SystemCapability.Security.CertificateManager

## Modules to Import

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
```

## certType

```TypeScript
certType: CertType
```

表示证书的类型。

**Type:** CertType

**Since:** 18

**System capability:** SystemCapability.Security.CertificateManager

## certAlg

```TypeScript
certAlg?: CertAlgorithm
```

表示证书算法类型。仅当certType为CA_CERT_SYSTEM时有效，默认值为INTERNATIONAL。 海外设备不支持SM算法。

**Type:** CertAlgorithm

**Since:** 20

**System capability:** SystemCapability.Security.CertificateManager

## certScope

```TypeScript
certScope?: CertScope
```

表示证书的存储位置。当证书类型为CA_CERT_USER时，此项为必选项。

**Type:** CertScope

**Since:** 18

**System capability:** SystemCapability.Security.CertificateManager

