# PartnerAgentExtensionAbility

Class for the PartnerAgentExtensionAbility.Applications can use this ability to discover devices.

**Inheritance/Implementation:** PartnerAgentExtensionAbility extends [ExtensionAbility](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-extensionability-extensionability-c.md)

**Since:** 23

**ArkTS mode:** ArkTS-Dyn since version 23; ArkTS-Sta since version 26.0.0.

<!--Device-unnamed-export default class PartnerAgentExtensionAbility extends ExtensionAbility--><!--Device-unnamed-export default class PartnerAgentExtensionAbility extends ExtensionAbility-End-->

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

## onDestroyWithReason

```TypeScript
onDestroyWithReason(reason: PartnerAgentExtensionAbilityDestroyReason): void
```

Called when the PartnerAgentExtensionAbility is to be destroyed.Applications can clean up resources in this callback function.

**Since:** 23

**ArkTS mode:** ArkTS-Dyn since version 23; ArkTS-Sta since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-PartnerAgentExtensionAbility-onDestroyWithReason(reason: PartnerAgentExtensionAbilityDestroyReason): void--><!--Device-PartnerAgentExtensionAbility-onDestroyWithReason(reason: PartnerAgentExtensionAbilityDestroyReason): void-End-->

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reason | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | The reason for Ability destruction. |

## onDeviceDiscovered

```TypeScript
onDeviceDiscovered(deviceAddress: PartnerDeviceAddress): void
```

Called when a device is discovered.

**Since:** 23

**ArkTS mode:** ArkTS-Dyn since version 23; ArkTS-Sta since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-PartnerAgentExtensionAbility-onDeviceDiscovered(deviceAddress: PartnerDeviceAddress): void--><!--Device-PartnerAgentExtensionAbility-onDeviceDiscovered(deviceAddress: PartnerDeviceAddress): void-End-->

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceAddress | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Address of the discovered device. |

## context

```TypeScript
context: PartnerAgentExtensionContext
```

Context of the PartnerAgentExtensionAbility.

**Type:** PartnerAgentExtensionContext

**Since:** 23

**ArkTS mode:** ArkTS-Dyn since version 23; ArkTS-Sta since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-PartnerAgentExtensionAbility-context: PartnerAgentExtensionContext--><!--Device-PartnerAgentExtensionAbility-context: PartnerAgentExtensionContext-End-->

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

