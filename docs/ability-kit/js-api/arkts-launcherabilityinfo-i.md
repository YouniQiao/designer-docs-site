# LauncherAbilityInfo

桌面应用的Ability信息，可以通过 [getLauncherAbilityInfoSync]./../@ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfoSync <!--Del-->或者 [getLauncherAbilityInfo]./../@ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>) <!--DelEnd-->获取。

**Since:** 18

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

## iconId

```TypeScript
readonly iconId: long
```

launcher ability的图标的资源ID值。

**Type:** long

**Since:** 18

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

## labelId

```TypeScript
readonly labelId: long
```

launcher ability的名称的资源ID值。

**Type:** long

**Since:** 18

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

## installTime

```TypeScript
readonly installTime: long
```

launcher ability的安装时间戳，单位毫秒。

**Type:** long

**Since:** 18

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

## userId

```TypeScript
readonly userId: int
```

launcher ability的用户ID。

**Type:** int

**Since:** 18

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

## applicationInfo

```TypeScript
readonly applicationInfo: ApplicationInfo
```

launcher ability的应用程序配置信息。

**Type:** ApplicationInfo

**Since:** 18

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

## elementName

```TypeScript
readonly elementName: ElementName
```

launcher ability的ElementName信息。

**Type:** ElementName

**Since:** 18

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

