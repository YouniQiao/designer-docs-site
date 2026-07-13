# ServerCert

The serverCert field of the server certificate, which includes two attributes:
File paths of server certificate (certPath) and certificate private key (keyPath). Only support PEM format.

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { webSocket } from '@kit.NetworkKit';
```

## certPath

```TypeScript
certPath: string
```

File path for the server cert.

**Type:** string

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## keyPath

```TypeScript
keyPath: string
```

The path of the server certificate private key file.

**Type:** string

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

