# OtaUpdatePolicy

Represents an OTA update policy.

**Since:** 12

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { systemManager } from '@kit.MDMKit';
```

## delayUpdateTime

```TypeScript
delayUpdateTime?: number
```

Period for which the update is postponed. Unit: Hours, The value must be an integer greater than or equal to 0.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## disableSystemOtaUpdate

```TypeScript
disableSystemOtaUpdate?: boolean
```

Whether to disable public network upgrade. The value **true** indicates that public network upgrade is disabled, and the value **false** indicates the opposite. If this field is used as an input parameter of [systemManager.setOtaUpdatePolicy](arkts-mdm-setotaupdatepolicy-f.md#setotaupdatepolicy-1), the default value can be retained. The current configuration can be obtained via the [systemManager.getOtaUpdatePolicy](arkts-mdm-getotaupdatepolicy-f.md#getotaupdatepolicy-1) API. After public network upgrade is disabled, you can perform intranet upgrade.<!--RP4--><!--RP4End-->

**Type:** boolean

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## installEndTime

```TypeScript
installEndTime?: number
```

End time (timestamp) of the installation window. Unit: Seconds, The value must be an integer greater than or equal to 0.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## installStartTime

```TypeScript
installStartTime?: number
```

Start time (timestamp) of the installation window. Unit: Seconds, The value must be an integer greater than or equal to 0.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## latestUpdateTime

```TypeScript
latestUpdateTime?: number
```

Latest update time (timestamp). Unit: Seconds, The value must be an integer greater than or equal to 0.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## policyType

```TypeScript
policyType: PolicyType
```

Type of the update policy.

**Type:** PolicyType

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## version

```TypeScript
version: string
```

Version of the software to update.

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

