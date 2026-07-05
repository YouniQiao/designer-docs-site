# ClientCert

The clientCert field of the client certificate, which includes three attributes: client certificate (certPath) and only support PEM format, certificate private key (keyPath), and passphrase (keyPassword).

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { webSocket } from '@kit.NetworkKit';
```

## certPath

```TypeScript
certPath: string
```

The path to the client certificate file.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

## keyPassword

```TypeScript
keyPassword?: string
```

Client certificate password.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

## keyPath

```TypeScript
keyPath: string
```

The path of the client certificate private key file.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

