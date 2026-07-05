# SystemUpdateInfo

待更新的系统版本信息。

**Since:** 12

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { systemManager } from '@kit.MDMKit';
```

## firstReceivedTime

```TypeScript
firstReceivedTime: number
```

第一次收到系统更新包的时间（单位：秒）。 单位为： 秒，取值应为≥0的整数。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## versionName

```TypeScript
versionName: string
```

待更新的系统版本名称。

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## packageType

```TypeScript
packageType: string
```

待更新的系统更新包类型，类型分为normal和patch类型。

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

