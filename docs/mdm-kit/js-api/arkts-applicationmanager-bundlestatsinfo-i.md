# BundleStatsInfo

应用包统计信息。

**Since:** 26.0.0

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { applicationManager } from '@kit.MDMKit';
```

## abilityInFgTotalTime

```TypeScript
abilityInFgTotalTime: number
```

Ability在前台运行的总时长，单位：毫秒。

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## appIndex

```TypeScript
appIndex: number
```

应用分身索引，取值范围：大于等于0的整数。 appIndex可以通过@ohos.bundle.bundleManager中的 [getAppCloneIdentity](../../apis-ability-kit/arkts-apis/arkts-bundlemanager-getappcloneidentity-f.md#getAppCloneIdentity-1)等接口来获取。

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## bundleName

```TypeScript
bundleName: string
```

应用的包名。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

