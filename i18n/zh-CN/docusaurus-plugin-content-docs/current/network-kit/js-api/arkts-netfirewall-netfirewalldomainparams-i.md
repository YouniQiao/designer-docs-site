# NetFirewallDomainParams

Firewall domain name parameters.

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## 导入模块

```TypeScript
import { netFirewall } from '@kit.NetworkKit';
```

## domain

```TypeScript
domain: string
```

Domain: when isWildcard is false, the complete domain that needs to be determined; When isWildcard is true, fuzzy domain only support domains like *.openharmony.cn; *.com.

**类型：** string

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## isWildcard

```TypeScript
isWildcard: boolean
```

Is there a universal configuration rule.

**类型：** boolean

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

