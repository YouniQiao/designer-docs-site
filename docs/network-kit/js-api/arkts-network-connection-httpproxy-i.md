# HttpProxy

Network Global Proxy Configuration Information.

**Since:** 24

<!--Device-connection-export interface HttpProxy--><!--Device-connection-export interface HttpProxy-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## exclusionList

```TypeScript
exclusionList: Array<string>
```

Do not use a blocking list for proxy servers.

**Type:** Array<string>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-HttpProxy-exclusionList: Array<string>--><!--Device-HttpProxy-exclusionList: Array<string>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

## host

```TypeScript
host: string
```

Proxy server host name.

**Type:** string

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-HttpProxy-host: string--><!--Device-HttpProxy-host: string-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

## password

```TypeScript
password?: string
```

Http proxy password.

**Type:** string

**Since:** 12

<!--Device-HttpProxy-password?: string--><!--Device-HttpProxy-password?: string-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

## port

```TypeScript
port: number
```

Host port.

**Type:** number

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-HttpProxy-port: int--><!--Device-HttpProxy-port: int-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

## username

```TypeScript
username?: string
```

Http proxy username.

**Type:** string

**Since:** 12

<!--Device-HttpProxy-username?: string--><!--Device-HttpProxy-username?: string-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

