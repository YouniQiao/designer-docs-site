# OtaUpdatePolicy

升级策略。

**Since:** 12

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { systemManager } from '@kit.MDMKit';
```

## latestUpdateTime

```TypeScript
latestUpdateTime?: number
```

表示最晚升级时间（时间戳）。 单位为： 秒，取值应为≥0的整数。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## policyType

```TypeScript
policyType: PolicyType
```

表示升级策略类型。

**Type:** PolicyType

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## delayUpdateTime

```TypeScript
delayUpdateTime?: number
```

表示延迟升级时间（单位：小时）。 单位为： 小时，取值应为≥0的整数。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## disableSystemOtaUpdate

```TypeScript
disableSystemOtaUpdate?: boolean
```

表示是否禁用在公网环境下升级。true表示禁用公网升级，false表示不禁用公网升级。如果作为 [systemManager.setOtaUpdatePolicy]systemManager.setOtaUpdatePolicy的入参，该字段可缺省，缺省时保持当前配置不变。当前配置可通过 [systemManager.getOtaUpdatePolicy]systemManager.getOtaUpdatePolicy接口获取。禁用公网升级后，可以采用内网升级。<!--RP4--><!--RP4 End-->

**Type:** boolean

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## installEndTime

```TypeScript
installEndTime?: number
```

表示指定安装窗口结束时间（时间戳）。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## version

```TypeScript
version: string
```

表示待升级软件版本号。

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## installStartTime

```TypeScript
installStartTime?: number
```

表示指定安装窗口起始时间（时间戳）。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

