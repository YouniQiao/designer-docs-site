# TlsConfig

TLS config.

**起始版本：** 18

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { http } from '@kit.NetworkKit';
```

## tlsVersionMax

```TypeScript
tlsVersionMax: TlsVersion
```

Maximum version num of Tls protocol.

**类型：** TlsVersion

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## tlsVersionMin

```TypeScript
tlsVersionMin: TlsVersion
```

Minimum version num of Tls protocol.

**类型：** TlsVersion

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

## cipherSuites

```TypeScript
cipherSuites?: CipherSuite[]
```

CipherSuites, cipherSuits must match tsl version, otherswise will set all system-supported cipherSuits.

**类型：** CipherSuite[]

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

