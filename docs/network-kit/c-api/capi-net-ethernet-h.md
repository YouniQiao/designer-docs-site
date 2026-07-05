# net_ethernet.h

## Overview

Defines the APIs for ethernet.

**Library**: libnet_ethernet.so

**System capability**: SystemCapability.Communication.NetManager.Ethernet

**Since**: 26.0.0

**Related module**: [netmanager_ext](capi-netmanager-ext.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [int32_t OH_Ethernet_GetMacAddress(Ethernet_MacAddrInfoList *macAddrList)](#oh_ethernet_getmacaddress) | Get the ethernet mac address list. |
| [int32_t OH_Ethernet_GetNetAddress(Ethernet_NetAddrList *netAddrList)](#oh_ethernet_getnetaddress) | Get the ethernet ip address list. |

## Function description

### OH_Ethernet_GetMacAddress()

```c
int32_t OH_Ethernet_GetMacAddress(Ethernet_MacAddrInfoList *macAddrList)
```

**Description**

Get the ethernet mac address list.

**System capability**: SystemCapability.Communication.NetManager.Ethernet

**Required permission**: ohos.permission.GET_ETHERNET_LOCAL_MAC

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [Ethernet_MacAddrInfoList](capi-netmanager-ext-ethernet-macaddrinfolist.md) *macAddrList | - The ethernet iface mac address list. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - success.<br> 201 - Permission denied.<br> 2200001 - Invalid parameter value.<br> 2200002 - Operation failed. Cannot connect to service.<br> 2201005 - Device information does not exist. |

### OH_Ethernet_GetNetAddress()

```c
int32_t OH_Ethernet_GetNetAddress(Ethernet_NetAddrList *netAddrList)
```

**Description**

Get the ethernet ip address list.

**System capability**: SystemCapability.Communication.NetManager.Ethernet

**Required permission**: ohos.permission.GET_NETWORK_INFO

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [Ethernet_NetAddrList](capi-netmanager-ext-ethernet-netaddrlist.md) *netAddrList | - The ethernet iface ip address list. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | 0 - success.<br> 201 - Permission denied.<br> 2200001 - Invalid parameter value.<br> 2200002 - Operation failed. Cannot connect to service.<br> 2201005 - Device information does not exist. |


