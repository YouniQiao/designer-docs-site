# InterfaceConfig

以太网的网络接口配置。仅支持IPv4。

**Since:** 23

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { networkManager } from '@kit.MDMKit';
```

## ipSetMode

```TypeScript
ipSetMode: IpSetMode
```

以太网连接配置模式。

**Type:** IpSetMode

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## netMask

```TypeScript
netMask?: string
```

子网掩码，地址值范围0.0.0.0到255.255.255.255（DHCP模式无需配置）。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## ipAddress

```TypeScript
ipAddress?: string
```

静态IP地址，地址值范围0.0.0.0到255.255.255.255（DHCP模式无需配置）。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## dnsServers

```TypeScript
dnsServers?: string
```

DNS服务地址，地址值范围0.0.0.0到255.255.255.255（DHCP模式无需配置），多地址间用“,”隔开。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## gateway

```TypeScript
gateway?: string
```

网关，地址值范围0.0.0.0到255.255.255.255（DHCP模式无需配置）。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

