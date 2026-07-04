---
last_update:
  date: 2026-07-04
---

# GeneralName

Represents the CN information of a certificate.

**Since:** 12

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@ohos.security.cert';
```

## name

```TypeScript
name?: Uint8Array
```

DER format of the certificate subject.

**Type:** Uint8Array

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

## type

```TypeScript
type: GeneralNameType
```

Type of the certificate subject.

**Type:** GeneralNameType

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

