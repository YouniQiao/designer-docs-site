# Socks5Proxy

Socks5 Proxy Configuration Information.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NetManager.Core

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## exclusionList

```TypeScript
exclusionList?: Array<string>
```

Exclusion list for proxy servers.

**Type:** Array<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

## dnsStrategy

```TypeScript
dnsStrategy?: Socks5DnsStrategy
```

DNS resolution strategy. Determines whether the client or the proxy server resolves the domain name.

**Type:** Socks5DnsStrategy

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

## password

```TypeScript
password?: string
```

Proxy password.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

## port

```TypeScript
port: int
```

Host port.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

## host

```TypeScript
host: string
```

Proxy server host name.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

## username

```TypeScript
username?: string
```

Proxy username.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

