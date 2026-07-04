# net_trafficfilter_type.h

## Overview

Traffic filter and redirection subsystem - common types and error codes definition.

**Library**: libnet_trafficfilter.so

**System capability**: SystemCapability.Communication.NetManager.NetFirewall

**Since**: 26.0.0

**Related module**: [TrafficFilter](capi-trafficfilter.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [OH_TrafficFilter_IPAddress](capi-trafficfilter-oh-trafficfilter-ipaddress.md) | OH_TrafficFilter_IPAddress | IP address in binary form, supports both IPv4 and IPv6 |
| [OH_TrafficFilter_IPCidr](capi-trafficfilter-oh-trafficfilter-ipcidr.md) | OH_TrafficFilter_IPCidr | IP match value for CIDR match |
| [OH_TrafficFilter_IPRange](capi-trafficfilter-oh-trafficfilter-iprange.md) | OH_TrafficFilter_IPRange | IP match value for range match |
| [OH_TrafficFilter_IPMulti](capi-trafficfilter-oh-trafficfilter-ipmulti.md) | OH_TrafficFilter_IPMulti | IP match value for multi-IP match |
| [OH_TrafficFilter_IPMatch](capi-trafficfilter-oh-trafficfilter-ipmatch.md) | OH_TrafficFilter_IPMatch | IP match condition |
| [OH_TrafficFilter_InterfaceMatch](capi-trafficfilter-oh-trafficfilter-interfacematch.md) | OH_TrafficFilter_InterfaceMatch | interface match condition |
| [OH_TrafficFilter_PortRange](capi-trafficfilter-oh-trafficfilter-portrange.md) | OH_TrafficFilter_PortRange | Port match value for range match |
| [OH_TrafficFilter_PortMulti](capi-trafficfilter-oh-trafficfilter-portmulti.md) | OH_TrafficFilter_PortMulti | Port match value for multi-port match |
| [OH_TrafficFilter_PortMatch](capi-trafficfilter-oh-trafficfilter-portmatch.md) | OH_TrafficFilter_PortMatch | Port match condition |
| [OH_TrafficFilter_ConnectionInfo](capi-trafficfilter-oh-trafficfilter-connectioninfo.md) | OH_TrafficFilter_ConnectionInfo | Connection information structureDescribes five-tuple connection information used to query process information.Initialization rule:Before calling {@link OH_TrafficFilter_QueryProcess}, the caller must clear this structureto zero, for example by using memset, and then set {@link size} to the actual size of thestructure allocated by the caller, usually sizeof(OH_TrafficFilter_ConnectionInfo).ABI compatibility rule:The library uses {@link size} to determine which fields can be safely read.If {@link size} is smaller than the minimum size required by the current API, the functionreturns [OH_TRAFFICFILTER_ERROR_INVALID_PARAM](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode). If {@link size} is larger than thesize known by the library, the extra fields are ignored. Newly added fields in futureversions should remain zero-initialized when not used. |
| [OH_TrafficFilter_ProcessInfo](capi-trafficfilter-oh-trafficfilter-processinfo.md) | OH_TrafficFilter_ProcessInfo | Process information structure.Stores process information returned by {@link OH_TrafficFilter_QueryProcess}.Initialization rule:Before calling {@link OH_TrafficFilter_QueryProcess}, the caller must clear this structureto zero, for example by using memset, and then set {@link size} to the actual size of thestructure allocated by the caller, usually sizeof(OH_TrafficFilter_ProcessInfo).ABI compatibility rule:The library uses {@link size} to determine which output fields can be safely written.Only fields fully covered by {@link size} are written by the library. If {@link size} issmaller than the minimum size required to read the {@link size} field itself, the functionreturns [OH_TRAFFICFILTER_ERROR_INVALID_PARAM](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode). If {@link size} is larger than thesize known by the library, the extra fields are ignored.Output validity rule:When {@link OH_TrafficFilter_QueryProcess} returns [OH_TRAFFICFILTER_OK](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode), fieldscovered by {@link size} contain valid output values. When the function returns an error,the caller must not rely on the values of output fields other than {@link size}. |
| [OH_TrafficFilter_RedirectRule](capi-trafficfilter-oh-trafficfilter-redirectrule.md) | OH_TrafficFilter_RedirectRule | Traffic redirection rule.Defines a TCP traffic redirection rule to redirect matched traffic to the specified proxy server.Initialization rule:Before calling {@link OH_TrafficFilter_AddRedirectRule}, the caller must clear this structureto zero, for example by using memset, and then set {@link size} to the actual size of thestructure allocated by the caller, usually sizeof(OH_TrafficFilter_RedirectRule).ABI compatibility rule:The library uses {@link size} to determine which fields can be safely read.If {@link size} is smaller than the minimum size required by the current API, the functionreturns [OH_TRAFFICFILTER_ERROR_INVALID_PARAM](capi-net-trafficfilter-type-h.md#oh_trafficfilter_errcode). If {@link size} is larger than thesize known by the library, the extra fields are ignored. Newly added fields in futureversions should remain zero-initialized when not used.Failure rule:If {@link OH_TrafficFilter_AddRedirectRule} returns an error, the rule is not guaranteedto be added or applied. The caller should check the return value before assuming that therule takes effect. |
| [OH_TrafficFilter_Redirector](capi-trafficfilter-oh-trafficfilter-redirector.md) | OH_TrafficFilter_Redirector | Traffic redirector |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [OH_TrafficFilter_ErrCode](#oh_trafficfilter_errcode) | OH_TrafficFilter_ErrCode | Traffic filter and redirection error codes |
| [OH_TrafficFilter_IPMatchType](#oh_trafficfilter_ipmatchtype) | OH_TrafficFilter_IPMatchType | IP match type |
| [OH_TrafficFilter_IPFamily](#oh_trafficfilter_ipfamily) | OH_TrafficFilter_IPFamily | IP address family |
| [OH_TrafficFilter_PortMatchType](#oh_trafficfilter_portmatchtype) | OH_TrafficFilter_PortMatchType | Port match type |
| [OH_TrafficFilter_HookPoint](#oh_trafficfilter_hookpoint) | OH_TrafficFilter_HookPoint | Hook point type |

### Macro

| Name | Description |
| -- | -- |
| OH_TRAFFICFILTER_IP_ADDRLEN       16 | Maximum length of IP address (compatible with IPv4 and IPv6)<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_MAX_MULTI_IP_COUNT  16 | Maximum number of IPs supported in multi-IP matching<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_MAX_MULTI_PORT_COUNT 64 | Maximum number of ports supported in multi-port matching<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_NFQUEUE_COPY_META   0 | NFQueue packet copy mode: copy metadata only<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_NFQUEUE_COPY_PACKET 0xFFFF | NFQueue packet copy mode: copy entire packet<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_DEFAULT_COPY_LEN    0xFFFF | Default NFQueue packet copy length in bytesSet to 0xFFFF to copy the entire packet, smaller values (e.g., 128) copy only the packet header<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_DEFAULT_QUEUE_MAXLEN  1024 | Default NFQueue maximum queue length (number of packets)<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_NFQUEUE_FLAG_FAIL_OPEN  0x1 | NFQueue queue flag: FAIL-OPEN modeWhen userspace process crashes, kernel automatically accepts packets to avoid network interruption<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_MIN_PRIORITY        1 | Minimum priority value<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_MAX_PRIORITY        10000 | Maximum priority value<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_MIN_GROUP_ID        1 | Minimum Group ID value<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_MAX_GROUP_ID        65535 | Maximum Group ID value<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_IFNAMSIZ            32 | Maximum length of interface name<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_PROTO_ANY           0 OH_TRAFFICFILTER_PROTO_TCP           6 OH_TRAFFICFILTER_PROTO_UDP           17 OH_TRAFFICFILTER_PROTO_ICMP          1 OH_TRAFFICFILTER_PROTO_ICMPV6        58 | Protocol type constants<br>**Since**: 26.0.0 |

## Enum type description

### OH_TrafficFilter_ErrCode

```c
enum OH_TrafficFilter_ErrCode
```

**Description**

Traffic filter and redirection error codes

**Since**: 26.0.0

| Enum item | Description |
| -- | -- |
| OH_TRAFFICFILTER_OK = 0 | Operation successful<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_E_BASE = 29410000 | Error code base value<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_ERROR_PERMISSION_DENIED = 201 | Permission denied<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_ERROR_INVALID_PARAM = (OH_TRAFFICFILTER_E_BASE + 101) | Invalid parameter (invalid priority, IP address, port, or group ID)<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_ERROR_NOT_FOUND = (OH_TRAFFICFILTER_E_BASE + 102) | Resource not found (rule, target, process, or group ID not found)<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_ERROR_TOO_MANY_RULES = (OH_TRAFFICFILTER_E_BASE + 103) | Too many rules<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_ERROR_GROUP_ID_IN_USE = (OH_TRAFFICFILTER_E_BASE + 104) | Group ID already in use<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_ERROR_NFQUEUE_ERROR = (OH_TRAFFICFILTER_E_BASE + 105) | NFQueue error (initialization failed or no available queue)<br>**Since**: 26.0.0 |

### OH_TrafficFilter_IPMatchType

```c
enum OH_TrafficFilter_IPMatchType
```

**Description**

IP match type

**Since**: 26.0.0

| Enum item | Description |
| -- | -- |
| OH_TRAFFICFILTER_IP_MATCH_ANY = 0 | Any IP<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_IP_MATCH_SINGLE | Single IP<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_IP_MATCH_CIDR | CIDR format<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_IP_MATCH_RANGE | IP range<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_IP_MATCH_MULTI | Multiple IPs<br>**Since**: 26.0.0 |

### OH_TrafficFilter_IPFamily

```c
enum OH_TrafficFilter_IPFamily
```

**Description**

IP address family

**Since**: 26.0.0

| Enum item | Description |
| -- | -- |
| OH_TRAFFICFILTER_IP_FAMILY_UNSPEC = 0 | Unspecified IP family<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_IP_FAMILY_V4 = 1 | IPv4 address family<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_IP_FAMILY_V6 = 2 | IPv6 address family<br>**Since**: 26.0.0 |

### OH_TrafficFilter_PortMatchType

```c
enum OH_TrafficFilter_PortMatchType
```

**Description**

Port match type

**Since**: 26.0.0

| Enum item | Description |
| -- | -- |
| OH_TRAFFICFILTER_PORT_MATCH_ANY = 0 | Any port<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_PORT_MATCH_SINGLE | Single port<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_PORT_MATCH_RANGE | Port range<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_PORT_MATCH_MULTI | Multiple port<br>**Since**: 26.0.0 |

### OH_TrafficFilter_HookPoint

```c
enum OH_TrafficFilter_HookPoint
```

**Description**

Hook point type

**Since**: 26.0.0

| Enum item | Description |
| -- | -- |
| OH_TRAFFICFILTER_HOOK_INPUT = 0 | INPUT chain<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_HOOK_OUTPUT | OUTPUT chain<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_HOOK_FORWARD | FORWARD chain<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_HOOK_PREROUTING | PREROUTING chain<br>**Since**: 26.0.0 |
| OH_TRAFFICFILTER_HOOK_POSTROUTING | POSTROUTING chain<br>**Since**: 26.0.0 |


