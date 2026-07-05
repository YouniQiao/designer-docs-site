# ApplicationInstance

应用的实例数据。 该接口目前在[addUserNonStopApps](arkts-applicationmanager-addusernonstopapps-f.md#addUserNonStopApps-1)、 [removeUserNonStopApps](arkts-applicationmanager-removeusernonstopapps-f.md#removeUserNonStopApps-1)、 [addFreezeExemptedApps](arkts-applicationmanager-addfreezeexemptedapps-f.md#addFreezeExemptedApps-1)、 [removeFreezeExemptedApps](arkts-applicationmanager-removefreezeexemptedapps-f.md#removeFreezeExemptedApps-1)接口 中作为入参使用。

**Since:** 22

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { common } from '@kit.MDMKit';
```

## accountId

```TypeScript
accountId: number
```

用户ID。取值范围：大于等于0的整数。 accountId可以通过[getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId)接 口获取。 取值应为≥0的整数。

**Type:** number

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## appIndex

```TypeScript
appIndex: number
```

应用分身索引。取值范围：大于等于0的整数。 appIndex可以通过[getAppCloneIdentity](../../apis-ability-kit/arkts-apis/arkts-bundlemanager-getappcloneidentity-f.md#getAppCloneIdentity-1)接口获取。 取值范围为全体整数。

**Type:** number

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## appIdentifier

```TypeScript
appIdentifier: string
```

应用[唯一标识符]./bundleManager/BundleInfo:SignatureInfo，可以通过接口 [bundleManager.getBundleInfo](../../apis-ability-kit/arkts-apis/arkts-bundlemanager-getbundleinfo-f.md#getBundleInfo-3) 获取bundleInfo.signatureInfo.appIdentifier。

**Type:** string

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

