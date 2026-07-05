# createVpnConnection

## createVpnConnection

```TypeScript
function createVpnConnection(context: AbilityContext): VpnConnection
```

Create a VPN connection using the AbilityContext.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | AbilityContext | 是 | Indicates the context of application or capability. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| VpnConnection | the VpnConnection of the construct VpnConnection instance. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |

**示例：**

```TypeScript
import { vpn } from '@kit.NetworkKit';
import { common } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  private context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
  private VpnConnection: vpn.VpnConnection = vpn.createVpnConnection(this.context);
  functiontest()
  {
    console.info("vpn createVpnConnection: " + JSON.stringify(this.VpnConnection));
  }
  build() {  }
}

```

