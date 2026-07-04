---
last_update:
  date: 2026-07-04
---

# CmsVerificationConfig

Represents CMS verification configuration.

**Since:** 22

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@ohos.security.cert';
```

## contentData

```TypeScript
contentData?: Uint8Array
```

Content data. If the detached mode is used, you need to specify the plaintext data. This parameter can be left empty in attached mode.

**Type:** Uint8Array

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Security.Cert

## contentDataFormat

```TypeScript
contentDataFormat?: CmsContentDataFormat
```

Format of the content. The default value is **CmsContentDataFormat.BINARY**.

**Type:** CmsContentDataFormat

**Default:** CmsContentDataFormat.BINARY

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Security.Cert

## signerCerts

```TypeScript
signerCerts?: Array<X509Cert>
```

Signing certificate. This parameter is left empty by default.

**Type:** Array<X509Cert>

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Security.Cert

## trustCerts

```TypeScript
trustCerts: Array<X509Cert>
```

Trust certificate. **NOTE**: You need to configure the trust certificates of all signers.

**Type:** Array<X509Cert>

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Security.Cert

