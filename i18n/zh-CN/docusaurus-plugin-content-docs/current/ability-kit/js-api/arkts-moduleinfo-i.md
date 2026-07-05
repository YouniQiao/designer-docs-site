# ModuleInfo

应用程序的模块信息。 > **说明：** > > 从API version 9开始，该模块不再维护，建议使用[bundleManager-HapModuleInfo](arkts-hapmoduleinfo-i.md#HapModuleInfo)替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** hapModuleInfo:HapModuleInfo

**系统能力：** SystemCapability.BundleManager.BundleFramework

## moduleSourceDir

```TypeScript
readonly moduleSourceDir: string
```

安装目录。不能拼接路径访问资源文件，请使用[资源管理接口]./../@ohos.resourceManager:resourceManager访问资源。

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.BundleManager.BundleFramework

## moduleName

```TypeScript
readonly moduleName: string
```

模块名称。

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bundle.bundleManager/bundleManager.HapModuleInfo#name

**系统能力：** SystemCapability.BundleManager.BundleFramework

