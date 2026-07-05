# BundleInfo

> **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用[bundleManager-BundleInfo](arkts-bundleinfo-i.md#BundleInfo)替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** bundleInfo:BundleInfo

**System capability:** SystemCapability.BundleManager.BundleFramework

## abilityInfos

```TypeScript
readonly abilityInfos: Array<AbilityInfo>
```

Ability的配置信息 通过调用 [bundle.getBundleInfo]./../@ohos.bundle:bundle.getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions) 接口时，传入GET_BUNDLE_WITH_ABILITIES获取。

**Type:** Array<AbilityInfo>

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.HapModuleInfo#abilitiesInfo

**System capability:** SystemCapability.BundleManager.BundleFramework

## entryInstallationFree

```TypeScript
readonly entryInstallationFree: boolean
```

Entry是否支持免安装，取值为true表示支持免安装，取值为false表示不支持免安装。

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## appInfo

```TypeScript
readonly appInfo: ApplicationInfo
```

应用程序的配置信息。

**Type:** ApplicationInfo

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.BundleInfo#appInfo

**System capability:** SystemCapability.BundleManager.BundleFramework

## reqPermissionStates

```TypeScript
readonly reqPermissionStates: Array<number>
```

申请权限的授予状态。0表示申请成功，-1表示申请失败。

**Type:** Array<number>

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.BundleInfo#permissionGrantStates

**System capability:** SystemCapability.BundleManager.BundleFramework

## minCompatibleVersionCode

```TypeScript
readonly minCompatibleVersionCode: number
```

分布式场景下的应用包兼容的最低版本。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.BundleInfo#minCompatibleVersionCode

**System capability:** SystemCapability.BundleManager.BundleFramework

## entryModuleName

```TypeScript
readonly entryModuleName: string
```

Entry的模块名称。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## updateTime

```TypeScript
readonly updateTime: number
```

HAP更新时间，单位：毫秒。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.BundleInfo#updateTime

**System capability:** SystemCapability.BundleManager.BundleFramework

## installTime

```TypeScript
readonly installTime: number
```

HAP安装时间，单位：毫秒。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.BundleInfo#installTime

**System capability:** SystemCapability.BundleManager.BundleFramework

## versionName

```TypeScript
readonly versionName: string
```

应用包的版本文本描述信息。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.BundleInfo#versionName

**System capability:** SystemCapability.BundleManager.BundleFramework

## type

```TypeScript
readonly type: string
```

应用包类型。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#bundleType

**System capability:** SystemCapability.BundleManager.BundleFramework

## versionCode

```TypeScript
readonly versionCode: number
```

应用包的版本号。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.BundleInfo#versionCode

**System capability:** SystemCapability.BundleManager.BundleFramework

## targetVersion

```TypeScript
readonly targetVersion: number
```

运行应用包所需要最高SDK版本号。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.BundleInfo#targetVersion

**System capability:** SystemCapability.BundleManager.BundleFramework

## reqPermissionDetails

```TypeScript
readonly reqPermissionDetails: Array<ReqPermissionDetail>
```

应用运行时需向系统申请的权限集合的详细信息 通过调用 [bundle.getBundleInfo]./../@ohos.bundle:bundle.getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions) 接口时，传入GET_BUNDLE_WITH_REQUESTED_PERMISSION获取。

**Type:** Array<ReqPermissionDetail>

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.BundleInfo#reqPermissionDetails

**System capability:** SystemCapability.BundleManager.BundleFramework

## cpuAbi

```TypeScript
readonly cpuAbi: string
```

应用包的cpuAbi信息。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## uid

```TypeScript
readonly uid: number
```

应用包里应用程序的uid。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#uid

**System capability:** SystemCapability.BundleManager.BundleFramework

## compatibleVersion

```TypeScript
readonly compatibleVersion: number
```

运行应用包所需要最低的SDK版本号。

**Type:** number

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## hapModuleInfos

```TypeScript
readonly hapModuleInfos: Array<HapModuleInfo>
```

模块的配置信息。

**Type:** Array<HapModuleInfo>

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.BundleInfo#hapModulesInfo

**System capability:** SystemCapability.BundleManager.BundleFramework

## vendor

```TypeScript
readonly vendor: string
```

应用包的供应商。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.BundleInfo#vendor

**System capability:** SystemCapability.BundleManager.BundleFramework

## appId

```TypeScript
readonly appId: string
```

应用包里应用程序的id。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.SignatureInfo#appId

**System capability:** SystemCapability.BundleManager.BundleFramework

## name

```TypeScript
readonly name: string
```

应用包的名称。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.BundleInfo#name

**System capability:** SystemCapability.BundleManager.BundleFramework

## isSilentInstallation

```TypeScript
readonly isSilentInstallation: string
```

是否通过静默安装。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## isCompressNativeLibs

```TypeScript
readonly isCompressNativeLibs: boolean
```

是否压缩应用包的本地库，取值为true表示压缩应用包的本地库，取值为false表示不压缩应用包的本地库。

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## reqPermissions

```TypeScript
readonly reqPermissions: Array<string>
```

应用运行时需向系统申请的权限集合 通过调用 [bundle.getBundleInfo]./../@ohos.bundle:bundle.getBundleInfo(bundleName: string, bundleFlags: number, options?: BundleOptions) 接口时，传入GET_BUNDLE_WITH_REQUESTED_PERMISSION获取。

**Type:** Array<string>

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#permissions

**System capability:** SystemCapability.BundleManager.BundleFramework

