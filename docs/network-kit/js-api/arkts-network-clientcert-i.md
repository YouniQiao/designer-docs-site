# ClientCert

The clientCert field of the client certificate, which includes three attributes:
client certificate (certPath) and only support PEM format, certificate private key (keyPath),
and passphrase (keyPassword).

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { webSocket } from '@kit.NetworkKit';
```

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

Client certificate password.

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

