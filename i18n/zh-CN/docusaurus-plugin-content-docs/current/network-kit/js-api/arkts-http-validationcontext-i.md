# ValidationContext

The validation context of {@link ValidationCallback}

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { http } from '@kit.NetworkKit';
```

## ip

```TypeScript
ip: string
```

The real IP which this request connect to.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

## host

```TypeScript
host: string
```

The host of this request.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

## x509Certs

```TypeScript
x509Certs: X509Cert[]
```

X509 certificate chain.

**类型：** X509Cert[]

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

## pemCerts

```TypeScript
pemCerts: string[]
```

The raw data which in PEM format of certificate.

**类型：** string[]

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

