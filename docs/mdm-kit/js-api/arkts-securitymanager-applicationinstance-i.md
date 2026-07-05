# ApplicationInstance

应用实例。

**Since:** 20

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { securityManager } from '@kit.MDMKit';
```

## accountId

```TypeScript
accountId: number
```

Account ID, which must be greater than or equal to 0. You can call [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId) of

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## appIndex

```TypeScript
appIndex: number
```

表示分身应用的索引，默认值为0。 appIndex为0时，表示主应用。appIndex大于0时，表示指定的分身应用。

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## appIdentifier

```TypeScript
appIdentifier: string
```

应用[唯一标识符]./bundleManager/BundleInfo:SignatureInfo，如果应用没有appIdentifier可使用appId代替，可以通过接口 [bundleManager.getBundleInfo](../../apis-ability-kit/arkts-apis/arkts-bundlemanager-getbundleinfo-f.md#getBundleInfo-3) 获取bundleInfo.signatureInfo.appIdentifier和bundleInfo.signatureInfo.appId。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

