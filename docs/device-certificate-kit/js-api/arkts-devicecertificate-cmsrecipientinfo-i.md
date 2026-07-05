# CmsRecipientInfo

Represents recipient information encapsulated in CMS data. > **NOTE** > > At least one recipient needs to be set.

**Since:** 22

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@ohos.security.cert';
```

## keyAgreeInfo

```TypeScript
keyAgreeInfo?: CmsKeyAgreeRecipientInfo
```

KeyAgree recipient information.

**Type:** CmsKeyAgreeRecipientInfo

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Security.Cert

## keyTransInfo

```TypeScript
keyTransInfo?: CmsKeyTransRecipientInfo
```

KeyTrans recipient information.

**Type:** CmsKeyTransRecipientInfo

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Security.Cert

