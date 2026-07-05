# CmsRecipientInfo

CMS封装数据的接收者信息。 > **说明：** > > 至少需要设置一个接收者。

**Since:** 22

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## keyTransInfo

```TypeScript
keyTransInfo?: CmsKeyTransRecipientInfo
```

keyTrans接收者信息。

**Type:** CmsKeyTransRecipientInfo

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## keyAgreeInfo

```TypeScript
keyAgreeInfo?: CmsKeyAgreeRecipientInfo
```

keyAgree接收者信息。

**Type:** CmsKeyAgreeRecipientInfo

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

