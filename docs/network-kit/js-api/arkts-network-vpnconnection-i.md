# VpnConnection

Defines a VPN connection.

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.Vpn

## Modules to Import

```TypeScript
import { vpnExtension } from '@ohos.net.vpnExtension';
```

## create

```TypeScript
create(config: VpnConfig): Promise<number>
```

Create a VPN network using the VpnConfig.

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.Vpn

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | VpnConfig | Yes | Indicates the {@link VpnConfig} configuration of the VPN network. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | The promise returns file descriptor of VPN interface. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2200001](../errorcode-net-sharing.md#2200001-invalid-parameter-value) | Invalid parameter value. |
| [2200002](../errorcode-net-sharing.md#2200002-service-connection-failure) | Operation failed. Cannot connect to service. |
| [2200003](../errorcode-net-sharing.md#2200003-system-internal-error) | System internal error. |
| [2203001](../errorcode-net-vpn.md#2203001-failed-to-create-a-vpn) | VPN creation denied, please check the user type. |
| [2203002](../errorcode-net-vpn.md#2203002-vpn-already-exists) | VPN exist already, please execute destroy first. |

**Example**

```TypeScript
import { vpnExtension, VpnExtensionAbility } from '@kit.NetworkKit';
import { common, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let context: vpnExtension.VpnExtensionContext;
export default class MyVpnExtAbility extends VpnExtensionAbility {
  private tunIp: string = '10.0.0.5';
  private blockedAppName: string = 'com.example.myvpndemo';
  onCreate(want: Want) {
    let vpnConnection : vpnExtension.VpnConnection = vpnExtension.createVpnConnection(context);
    console.info("vpn createVpnConnection: " + JSON.stringify(vpnConnection));
    this.SetupVpn();
    
    // If no VPN is required, call destroy() to destroy the VPN and clear resources.
    vpnConnection.destroy().then(() => {
      console.info("destroy success.");
    }).catch((error : BusinessError) => {
      console.error(`destroy fail. Code:${error.code}, message:${error.message}`);
    });
  }
  SetupVpn() {
        class Address {
            address: string;
            family: number;

            constructor(address: string, family: number) {
                this.address = address;
                this.family = family;
            }
        }

        class AddressWithPrefix {
            address: Address;
            prefixLength: number;

            constructor(address: Address, prefixLength: number) {
                this.address = address;
                this.prefixLength = prefixLength;
            }
        }

        class Config {
            addresses: AddressWithPrefix[];
            mtu: number;
            dnsAddresses: string[];
            trustedApplications: string[];
            blockedApplications: string[];

            constructor(
                tunIp: string,
                blockedAppName: string
            ) {
                this.addresses = [
                    new AddressWithPrefix(new Address(tunIp, 1), 24)
                ];
                this.mtu = 1400;
                this.dnsAddresses = ["114.114.114.114"];
                this.trustedApplications = [];
                this.blockedApplications = [blockedAppName];
            }
        }

        let config = new Config(this.tunIp, this.blockedAppName);

        try {
            let vpnConnection : vpnExtension.VpnConnection = vpnExtension.createVpnConnection(context);
            vpnConnection.create(config).then((data) => {
                hilog.error(0x0000, 'developTag', 'tunfd: %{public}s', JSON.stringify(data) ?? '');
            })
        } catch (error) {
            hilog.error(0x0000, 'developTag', 'VPN setUp fail: %{public}s', JSON.stringify(error) ?? '');
        }
    }
}

```

## destroy

```TypeScript
destroy(): Promise<void>
```

Destroy the VPN network.

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.Vpn

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2200002](../errorcode-net-sharing.md#2200002-service-connection-failure) | Operation failed. Cannot connect to service. |
| [2200003](../errorcode-net-sharing.md#2200003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { vpnExtension, VpnExtensionAbility } from '@kit.NetworkKit';
import { common, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let context: vpnExtension.VpnExtensionContext;
export default class MyVpnExtAbility extends VpnExtensionAbility {
  onCreate(want: Want) {
    let vpnConnection : vpnExtension.VpnConnection = vpnExtension.createVpnConnection(context);
    console.info("VPN createVpnConnection: " + JSON.stringify(vpnConnection));
    vpnConnection.destroy().then(() => {
      console.info("destroy success.");
    }).catch((error : BusinessError) => {
      console.error("destroy fail" + JSON.stringify(error));
    });
  }
}

```

## destroy

```TypeScript
destroy(vpnId: string): Promise<void>
```

Destroy the VPN network.

**Since:** 20

**System capability:** SystemCapability.Communication.NetManager.Vpn

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| vpnId | string | Yes | vpn id. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19900001](../errorcode-net-vpn.md#19900001-invalid-parameter) | Invalid parameter value. |
| [19900002](../errorcode-net-vpn.md#19900002-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { vpnExtension, VpnExtensionAbility } from '@kit.NetworkKit';
import { BusinessError } from "@kit.BasicServicesKit";

export default class MyVpnExtAbility extends VpnExtensionAbility {
  onCreate() {
    let vpnConnection = vpnExtension.createVpnConnection(this.context);

    // You can call generateVpnId() to obtain the VPN ID.
    let vpnId = 'testVpnId';
    vpnConnection.destroy(vpnId).then(() => {
      console.info("destroy success");
    }).catch((error: BusinessError) => {
      console.error(`destroy fail, Code is ${error.code}, message is ${error.message}`);
    });
  }
}

```

## generateVpnId

```TypeScript
generateVpnId(): Promise<string>
```

generate vpn id.

**Since:** 20

**System capability:** SystemCapability.Communication.NetManager.Vpn

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | The promise returns vpn id. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19900001](../errorcode-net-vpn.md#19900001-invalid-parameter) | Invalid parameter value. |
| [19900002](../errorcode-net-vpn.md#19900002-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { vpnExtension, VpnExtensionAbility } from '@kit.NetworkKit';
import { BusinessError } from "@kit.BasicServicesKit";

export default class MyVpnExtAbility extends VpnExtensionAbility {
  onCreate() {
    let vpnConnection = vpnExtension.createVpnConnection(this.context);
    vpnConnection.generateVpnId().then((data) => {
      if (data) {
        console.info("generateVpnId success, vpnId = " + JSON.stringify(data));
      }
    }).catch((error: BusinessError) => {
      console.error(`generateVpnId fail, Code is ${error.code}, message is ${error.message}`);
    });
  }
}

```

## protect

```TypeScript
protect(socketFd: number): Promise<void>
```

Protect a socket from VPN connections. After protecting, data sent through this socket will go directly to the underlying network so its traffic will not be forwarded through the VPN.

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.Vpn

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| socketFd | number | Yes | File descriptor of socket, this socket from @ohos.net.socket. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2200001](../errorcode-net-sharing.md#2200001-invalid-parameter-value) | Invalid parameter value. |
| [2200002](../errorcode-net-sharing.md#2200002-service-connection-failure) | Operation failed. Cannot connect to service. |
| [2200003](../errorcode-net-sharing.md#2200003-system-internal-error) | System internal error. |
| [2203004](../errorcode-net-vpn.md#2203004-invalid-descriptor) | Invalid socket file descriptor. |

**Example**

```TypeScript
import { vpnExtension, VpnExtensionAbility } from '@kit.NetworkKit';
import { common, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let g_tunnelFd = -1;
let context: vpnExtension.VpnExtensionContext;
export default class MyVpnExtAbility extends VpnExtensionAbility {
  private vpnServerIp: string = '192.168.31.13';
  onCreate(want: Want) {
    let vpnConnection : vpnExtension.VpnConnection = vpnExtension.createVpnConnection(context);
    console.info("VPN createVpnConnection: " + JSON.stringify(vpnConnection));
    this.CreateTunnel();
    this.Protect();
  }
  CreateTunnel() {
      g_tunnelFd = 8888;
  }
  Protect() {
        hilog.info(0x0000, 'developTag', '%{public}s', 'VPN Protect');
        let vpnConnection : vpnExtension.VpnConnection = vpnExtension.createVpnConnection(context);
        vpnConnection.protect(g_tunnelFd).then(() => {
            hilog.info(0x0000, 'developTag', '%{public}s', 'VPN Protect Success');
        }).catch((err : Error) => {
            hilog.error(0x0000, 'developTag', 'VPN Protect Failed %{public}s', JSON.stringify(err) ?? '');
        })
  }
}

```

## protectProcessNet

```TypeScript
protectProcessNet(): Promise<void>
```

Protect all socket of the VPN process. After executing this function, all sockets subsequently created by the current process will be protected, while previously created sockets will not be protected.

**Since:** 22

**System capability:** SystemCapability.Communication.NetManager.Vpn

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Example**

```TypeScript
import { vpnExtension, VpnExtensionAbility } from '@kit.NetworkKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let g_tunnelFd = -1;
export default class MyVpnExtAbility  extends VpnExtensionAbility {
  onCreate() {
    let vpnConnection = vpnExtension.createVpnConnection(this.context);
    console.info("VPN createVpnConnection: " + JSON.stringify(vpnConnection));
    this.ProtectNetByProcess();
  }
  CreateTunnel() {
    g_tunnelFd = 8888;
  }
  ProtectNetByProcess() {
    hilog.info(0x0000, 'developTag', '%{public}s', 'vpn ProtectNetByProcess');
    let vpnConnection = vpnExtension.createVpnConnection(this.context);
    vpnConnection.protectProcessNet().then(() => {
      hilog.info(0x0000, 'developTag', '%{public}s', 'vpn ProtectNetByProcess Success');
      this.CreateTunnel();
    }).catch((err: Error) => {
      hilog.error(0x0000, 'developTag', 'vpn ProtectNetByProcess Failed %{public}s', JSON.stringify(err) ?? '');
    })
  }
}

```

