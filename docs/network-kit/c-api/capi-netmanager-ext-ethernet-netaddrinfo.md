# Ethernet_NetAddrInfo

```c
typedef struct Ethernet_NetAddrInfo {...} Ethernet_NetAddrInfo
```

## Overview

Defines the ethernet iface net address info.

**Since**: 26.0.0

**Related module**: [netmanager_ext](capi-netmanager-ext.md)

**Header file**: [net_ethernet_type.h](capi-net-ethernet-type-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| char ifaceName[ETHERNET_MAX_STR_LEN] |  |
| [Ethernet_NetAddr](capi-netmanager-ext-ethernet-netaddr.md) netAddrInfo[ETHERNET_MAX_NET_SIZE] |  |
| int32_t netAddrInfoSize |  |


