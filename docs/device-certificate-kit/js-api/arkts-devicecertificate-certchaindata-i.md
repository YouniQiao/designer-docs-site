# CertChainData

Defines the certificate chain data, which is passed in as input parameters during certificate chain verification.

**Since:** 9

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@ohos.security.cert';
```

## count

```TypeScript
count: number
```

Number of certificates contained in the input data.

**Type:** number

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

## data

```TypeScript
data: Uint8Array
```

Certificate data.

**Type:** Uint8Array

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

## encodingFormat

```TypeScript
encodingFormat: EncodingFormat
```

Certificate encoding format.

**Type:** EncodingFormat

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

