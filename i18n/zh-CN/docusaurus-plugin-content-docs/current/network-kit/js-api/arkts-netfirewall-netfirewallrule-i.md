# NetFirewallRule

Firewall rules.

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## 导入模块

```TypeScript
import { netFirewall } from '@kit.NetworkKit';
```

## dns

```TypeScript
dns?: NetFirewallDnsParams
```

DNS: valid when ruleType = RULE_DNS, otherwise it will be ignored.

**类型：** NetFirewallDnsParams

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## domains

```TypeScript
domains?: Array<NetFirewallDomainParams>
```

Domain name list: valid when ruleType = RULE_DOMAIN, otherwise it will be ignored.

**类型：** Array<NetFirewallDomainParams>

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## description

```TypeScript
description?: string
```

Rule description.

**类型：** string

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## localIps

```TypeScript
localIps?: Array<NetFirewallIpParams>
```

Local IP address: valid when ruleType = RULE_IP, otherwise it will be ignored.

**类型：** Array<NetFirewallIpParams>

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## appUid

```TypeScript
appUid?: number
```

Application or service UID.

**类型：** number

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## interface

```TypeScript
interface?: string
```

Interface name: valid when type = RULE_IP, otherwise it will be ignored.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## type

```TypeScript
type: NetFirewallRuleType
```

Rule type.

**类型：** NetFirewallRuleType

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## userId

```TypeScript
userId: number
```

User id.

**类型：** number

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## remotePorts

```TypeScript
remotePorts?: Array<NetFirewallPortParams>
```

Remote ports: valid when ruleType = RULE_IP, otherwise it will be ignored.

**类型：** Array<NetFirewallPortParams>

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## protocol

```TypeScript
protocol?: number
```

Protocol, 1: ICMPv4, 6: TCP, 17: UDP, 58: ICMPv6. Valid when ruleType = RULE_IP, otherwise it will be ignored.

**类型：** number

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## remoteIps

```TypeScript
remoteIps?: Array<NetFirewallIpParams>
```

Remote IP address: valid when ruleType = RULE_IP, otherwise it will be ignored.

**类型：** Array<NetFirewallIpParams>

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## isEnabled

```TypeScript
isEnabled: boolean
```

Whether the rule is enabled.

**类型：** boolean

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## localPorts

```TypeScript
localPorts?: Array<NetFirewallPortParams>
```

Local ports: valid when ruleType = RULE_IP, otherwise it will be ignored.

**类型：** Array<NetFirewallPortParams>

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## name

```TypeScript
name: string
```

Rule name.

**类型：** string

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## action

```TypeScript
action: FirewallRuleAction
```

Rule action.

**类型：** FirewallRuleAction

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## id

```TypeScript
id?: number
```

Rule id: When a rule is added to the system, the system generates a rule ID.

**类型：** number

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

## direction

```TypeScript
direction: NetFirewallRuleDirection
```

Rule direction, inbound or outbound.

**类型：** NetFirewallRuleDirection

**起始版本：** 15

**系统能力：** SystemCapability.Communication.NetManager.NetFirewall

