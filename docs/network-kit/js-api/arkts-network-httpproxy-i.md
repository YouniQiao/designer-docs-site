# HttpProxy

Network Global Proxy Configuration Information.

**Since:** 24

**System capability:** SystemCapability.Communication.NetManager.Core

## Modules to Import

```TypeScript
import { connection } from '@ohos.net.connection';
```

## exclusionList

```TypeScript
exclusionList: Array<string>
```

Do not use a blocking list for proxy servers.

**Type:** Array<string>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetManager.Core

## host

```TypeScript
host: string
```

Proxy server host name.

**Type:** string

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Communication.NetManager.Core

## password

```TypeScript
password?: string
```

Http proxy password.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Communication.NetManager.Core

## port

```TypeScript
port: number
```

Host port.

**Type:** number

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Communication.NetManager.Core

## username

```TypeScript
username?: string
```

Http proxy username.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Communication.NetManager.Core

