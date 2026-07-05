# Socks5Proxy

Socks5 Proxy Configuration Information.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Communication.NetManager.Core

## 导入模块

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## exclusionList

```TypeScript
exclusionList?: Array<string>
```

Exclusion list for proxy servers.

**类型：** Array<string>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

## dnsStrategy

```TypeScript
dnsStrategy?: Socks5DnsStrategy
```

DNS resolution strategy. Determines whether the client or the proxy server resolves the domain name.

**类型：** Socks5DnsStrategy

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

## password

```TypeScript
password?: string
```

Proxy password.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

## port

```TypeScript
port: int
```

Host port.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

## host

```TypeScript
host: string
```

Proxy server host name.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

## username

```TypeScript
username?: string
```

Proxy username.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

