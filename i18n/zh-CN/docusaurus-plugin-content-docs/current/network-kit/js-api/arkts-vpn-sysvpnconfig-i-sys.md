# SysVpnConfig

Define configuration of the system VPN network.

**继承实现关系：** SysVpnConfig继承自：VpnConfig。

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { vpn } from '@kit.NetworkKit';
```

## pkcs12FileData

```TypeScript
pkcs12FileData?: Uint8Array
```

The p12 cert data for the ipsec VPN network.

**类型：** Uint8Array

**起始版本：** 20

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

## password

```TypeScript
password?: string
```

The user password for the VPN network.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

## saveLogin

```TypeScript
saveLogin?: boolean
```

Whether the VPN network save login name and password. The default value is false.

**类型：** boolean

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

## vpnType

```TypeScript
vpnType?: SysVpnType
```

The type for the VPN network.

**类型：** SysVpnType

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

## pkcs12Password

```TypeScript
pkcs12Password?: string
```

The p12 cert password for the ipsec VPN network.

**类型：** string

**起始版本：** 20

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

## userName

```TypeScript
userName?: string
```

The user name for the VPN network.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

## vpnId

```TypeScript
vpnId?: string
```

The uuid for the VPN network.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

## userId

```TypeScript
userId?: number
```

The system user id for the VPN network.

**类型：** number

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

## localAddresses

```TypeScript
localAddresses?: Array<LinkAddress>
```

The array of local addresses for VPN interface.

**类型：** Array<LinkAddress>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

## forwardingRoutes

```TypeScript
forwardingRoutes?: string
```

The forwarding routes for the VPN network.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

## vpnName

```TypeScript
vpnName?: string
```

The name for the VPN network.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

## remoteAddresses

```TypeScript
remoteAddresses?: Array<string>
```

The array of addresses for remote server.

**类型：** Array<string>

**起始版本：** 20

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

