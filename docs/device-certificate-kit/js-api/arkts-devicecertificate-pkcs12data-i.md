# Pkcs12Data

Represents data of the parsed PKCS #12 (.p12) file.

**Since:** 18

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@ohos.security.cert';
```

## cert

```TypeScript
cert?: X509Cert
```

X.509 certificate obtained after the .p12 file is parsed.

**Type:** X509Cert

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Security.Cert

## otherCerts

```TypeScript
otherCerts?: Array<X509Cert>
```

Other certificates obtained after the .p12 file is parsed.

**Type:** Array<X509Cert>

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Security.Cert

## privateKey

```TypeScript
privateKey?: string | Uint8Array
```

Private key obtained after the .p12 file is parsed.

**Type:** string | Uint8Array

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Security.Cert

