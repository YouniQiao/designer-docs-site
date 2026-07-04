# NetFirewallDomainParams

Firewall domain name parameters.

**Since:** 15

**System capability:** SystemCapability.Communication.NetManager.NetFirewall

## Modules to Import

```TypeScript
import { netFirewall } from '@ohos.net.netFirewall';
```

## domain

```TypeScript
domain: string
```

Domain: when isWildcard is false, the complete domain that needs to be determined; When isWildcard is true, fuzzy domain only support domains like *.openharmony.cn; *.com.

**Type:** string

**Since:** 15

**System capability:** SystemCapability.Communication.NetManager.NetFirewall

## isWildcard

```TypeScript
isWildcard: boolean
```

Is there a universal configuration rule.

**Type:** boolean

**Since:** 15

**System capability:** SystemCapability.Communication.NetManager.NetFirewall

