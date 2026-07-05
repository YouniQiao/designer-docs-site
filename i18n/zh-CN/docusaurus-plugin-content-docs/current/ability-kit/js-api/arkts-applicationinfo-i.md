# ApplicationInfo

应用程序信息，未做特殊说明的属性，均通过 [bundle.getApplicationInfo]./../@ohos.bundle:bundle.getApplicationInfo(bundleName: string, bundleFlags: number, userId?: number) 获取。 > **说明：** > > 从API version 9开始，该模块不再维护，建议使用[bundleManager-ApplicationInfo](arkts-applicationinfo-i.md#ApplicationInfo)替代。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** applicationInfo:ApplicationInfo

**系统能力：** SystemCapability.BundleManager.BundleFramework

## accessTokenId

```TypeScript
readonly accessTokenId: number
```

应用程序的accessTokenId。

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#accessTokenId

**系统能力：** SystemCapability.BundleManager.BundleFramework

## iconId

```TypeScript
readonly iconId: string
```

应用程序图标的资源ID值。

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#iconId

**系统能力：** SystemCapability.BundleManager.BundleFramework

## process

```TypeScript
readonly process: string
```

应用程序的进程名称。

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#process

**系统能力：** SystemCapability.BundleManager.BundleFramework

## entityType

```TypeScript
readonly entityType: string
```

应用程序的类别，例如游戏、社交、影视、新闻。

**类型：** string

**起始版本：** 8

**废弃版本：** 9

**系统能力：** SystemCapability.BundleManager.BundleFramework

## icon

```TypeScript
readonly icon: string
```

应用程序的图标。

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#icon

**系统能力：** SystemCapability.BundleManager.BundleFramework

## description

```TypeScript
readonly description: string
```

应用程序的描述信息。

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#description

**系统能力：** SystemCapability.BundleManager.BundleFramework

## label

```TypeScript
readonly label: string
```

应用程序显示的标签。

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#label

**系统能力：** SystemCapability.BundleManager.BundleFramework

## supportedModes

```TypeScript
readonly supportedModes: number
```

标识应用支持的运行模式，当前只定义了驾驶模式（drive）。该标签只适用于车机。

**类型：** number

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.BundleManager.BundleFramework

## enabled

```TypeScript
readonly enabled: boolean
```

判断应用程序是否可以使用，取值为true表示可以使用，取值为false表示不可使用。

**类型：** boolean

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#enabled

**系统能力：** SystemCapability.BundleManager.BundleFramework

## entryDir

```TypeScript
readonly entryDir: string
```

应用程序的文件保存路径。不能拼接路径访问资源文件，请使用[资源管理接口]./../@ohos.resourceManager:resourceManager访问资源。

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.BundleManager.BundleFramework

## uid

```TypeScript
readonly uid: number
```

应用程序的uid。

**类型：** number

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#uid

**系统能力：** SystemCapability.BundleManager.BundleFramework

## metaData

```TypeScript
readonly metaData: Map<string, Array<CustomizeData>>
```

应用程序的自定义元信息。 通过调用 [bundle.getApplicationInfo]./../@ohos.bundle:bundle.getApplicationInfo(bundleName: string, bundleFlags: number, userId?: number) 接口时，传入GET_APPLICATION_INFO_WITH_METADATA获取。

**类型：** Map<string, Array<CustomizeData>>

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#metadataArray

**系统能力：** SystemCapability.BundleManager.BundleFramework

## codePath

```TypeScript
readonly codePath: string
```

应用程序的安装目录。不能拼接路径访问资源文件，请使用[资源管理接口]./../@ohos.resourceManager:resourceManager访问资源。

**类型：** string

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#codePath

**系统能力：** SystemCapability.BundleManager.BundleFramework

## descriptionId

```TypeScript
readonly descriptionId: number
```

应用程序的描述信息的资源ID。

**类型：** number

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#descriptionId

**系统能力：** SystemCapability.BundleManager.BundleFramework

## labelId

```TypeScript
readonly labelId: string
```

应用程序的标签的资源ID值。

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#labelId

**系统能力：** SystemCapability.BundleManager.BundleFramework

## removable

```TypeScript
readonly removable: boolean
```

应用程序是否可以被移除，取值为true表示可以被移除，取值为false表示不可以被移除。

**类型：** boolean

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#removable

**系统能力：** SystemCapability.BundleManager.BundleFramework

## moduleInfos

```TypeScript
readonly moduleInfos: Array<ModuleInfo>
```

应用程序的模块信息。

**类型：** Array<ModuleInfo>

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bundle.bundleManager/bundleManager.BundleInfo#hapModulesInfo

**系统能力：** SystemCapability.BundleManager.BundleFramework

## permissions

```TypeScript
readonly permissions: Array<string>
```

访问应用程序所需的权限。 通过调用 [bundle.getApplicationInfo]./../@ohos.bundle:bundle.getApplicationInfo(bundleName: string, bundleFlags: number, userId?: number) 接口时，传入GET_APPLICATION_INFO_WITH_PERMISSION获取。

**类型：** Array<string>

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#permissions

**系统能力：** SystemCapability.BundleManager.BundleFramework

## moduleSourceDirs

```TypeScript
readonly moduleSourceDirs: Array<string>
```

应用程序的资源存放的相对路径。不能拼接路径访问资源文件，请使用[资源管理接口]./../@ohos.resourceManager:resourceManager访问资源。

**类型：** Array<string>

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.BundleManager.BundleFramework

## name

```TypeScript
readonly name: string
```

应用程序的名称。

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#name

**系统能力：** SystemCapability.BundleManager.BundleFramework

## systemApp

```TypeScript
readonly systemApp: boolean
```

判断是否为系统应用程序，取值为true表示系统应用，取值为false表示非系统应用。

**类型：** boolean

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bundle.bundleManager/bundleManager.ApplicationInfo#systemApp

**系统能力：** SystemCapability.BundleManager.BundleFramework

