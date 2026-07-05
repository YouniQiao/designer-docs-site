# PartnerAgentExtensionAbility

Class for the PartnerAgentExtensionAbility. Applications can use this ability to discover devices.

**继承实现关系：** PartnerAgentExtensionAbility继承自：ExtensionAbility。

**起始版本：** 23

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

## 导入模块

```TypeScript
import { PartnerAgentExtensionAbility } from '@kit.ConnectivityKit';
```

## onDestroyWithReason

```TypeScript
onDestroyWithReason(reason: PartnerAgentExtensionAbilityDestroyReason): void
```

Called when the PartnerAgentExtensionAbility is to be destroyed. Applications can clean up resources in this callback function.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| reason | PartnerAgentExtensionAbilityDestroyReason | 是 | The reason for Ability destruction. |

**示例：**

```TypeScript
export default class PartnerAgentExtAbility extends PartnerAgentExtensionAbility {
  onDestroyWithReason(reason: partnerAgent.PartnerAgentExtensionAbilityDestroyReason): void {
    console.info(`onDestroyWithReason is: ${reason}`);
  }
}

```

## onDeviceDiscovered

```TypeScript
onDeviceDiscovered(deviceAddress: PartnerDeviceAddress): void
```

Called when a device is discovered.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceAddress | PartnerDeviceAddress | 是 | Address of the discovered device. |

**示例：**

```TypeScript
export default class PartnerAgentExtAbility extends PartnerAgentExtensionAbility {
  onDeviceDiscovered(deviceAddress: partnerAgent.PartnerDeviceAddress): void {
    console.info(`onDeviceDiscovered success: ${deviceAddress.bluetoothAddress}`);
  }
}

```

## context

```TypeScript
context: PartnerAgentExtensionContext
```

Context of the PartnerAgentExtensionAbility.

**类型：** PartnerAgentExtensionContext

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

