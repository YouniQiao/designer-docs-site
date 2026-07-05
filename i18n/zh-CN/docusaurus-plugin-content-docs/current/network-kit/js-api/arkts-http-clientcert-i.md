# ClientCert

The clientCert field of the client certificate, which includes 4 attributes: client certificate (cert), client certificate type (certType), certificate private key (key), and passphrase (keyPassword).

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { http } from '@kit.NetworkKit';
```

## certType

```TypeScript
certType?: CertType
```

The type of the client certificate.

**类型：** CertType

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

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

Password required to use the client certificate private key.

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

