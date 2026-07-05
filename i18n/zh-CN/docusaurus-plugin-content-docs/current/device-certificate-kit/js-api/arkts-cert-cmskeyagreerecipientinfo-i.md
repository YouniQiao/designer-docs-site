# CmsKeyAgreeRecipientInfo

CMS封装数据的KeyAgree接收方信息。

**起始版本：** 22

**系统能力：** SystemCapability.Security.Cert

## 导入模块

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## digestAlgorithm

```TypeScript
digestAlgorithm?: CmsKeyAgreeRecipientDigestAlgorithm
```

KDF摘要算法，默认为SHA256。

**类型：** CmsKeyAgreeRecipientDigestAlgorithm

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Cert

## cert

```TypeScript
cert: X509Cert
```

EC证书。

**类型：** X509Cert

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Cert

