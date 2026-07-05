# ClientCert

The clientCert field of the client certificate, which includes 4 attributes: client certificate (cert), client certificate type (certType), certificate private key (key), and passphrase (keyPassword).

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { http } from '@kit.NetworkKit';
```

## certType

```TypeScript
certType?: CertType
```

The type of the client certificate.

**Type:** CertType

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## certPath

```TypeScript
certPath: string
```

The path to the client certificate file.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## keyPassword

```TypeScript
keyPassword?: string
```

Password required to use the client certificate private key.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## keyPath

```TypeScript
keyPath: string
```

The path of the client certificate private key file.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

