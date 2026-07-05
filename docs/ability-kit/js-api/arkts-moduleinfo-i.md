# ModuleInfo

应用程序的模块信息。 > **说明：** > > 从API version 9开始，该模块不再维护，建议使用[bundleManager-HapModuleInfo](arkts-hapmoduleinfo-i.md#HapModuleInfo)替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** hapModuleInfo:HapModuleInfo

**System capability:** SystemCapability.BundleManager.BundleFramework

## moduleSourceDir

```TypeScript
readonly moduleSourceDir: string
```

安装目录。不能拼接路径访问资源文件，请使用[资源管理接口]./../@ohos.resourceManager:resourceManager访问资源。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework

## moduleName

```TypeScript
readonly moduleName: string
```

模块名称。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bundle.bundleManager/bundleManager.HapModuleInfo#name

**System capability:** SystemCapability.BundleManager.BundleFramework

