# ServerCert

The serverCert field of the server certificate, which includes two attributes: File paths of server certificate (certPath) and certificate private key (keyPath). Only support PEM format.

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { webSocket } from '@kit.NetworkKit';
```

## certPath

```TypeScript
certPath: string
```

File path for the server cert.

**类型：** string

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## keyPath

```TypeScript
keyPath: string
```

The path of the server certificate private key file.

**类型：** string

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

