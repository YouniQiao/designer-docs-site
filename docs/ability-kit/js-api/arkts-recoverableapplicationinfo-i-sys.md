# RecoverableApplicationInfo

预置应用被卸载后可以恢复的预置应用信息，通过接口 [bundleManager.getRecoverableApplicationInfo]./../@ohos.bundle.bundleManager:bundleManager.getRecoverableApplicationInfo(callback: AsyncCallback<Array<RecoverableApplicationInfo>>) 获取。 > **说明：** > > 本模块为系统接口。

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## iconId

```TypeScript
readonly iconId: long
```

模块图标的资源ID值。

**Type:** long

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## labelId

```TypeScript
readonly labelId: long
```

模块标签的资源ID值。

**Type:** long

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## codePaths

```TypeScript
readonly codePaths: Array<string>
```

应用程序的安装目录。

**Type:** Array<string>

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## moduleName

```TypeScript
readonly moduleName: string
```

模块名称。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## bundleName

```TypeScript
readonly bundleName: string
```

应用包的名称。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## bundleType

```TypeScript
readonly bundleType: bundleManager.BundleType
```

标识应用类型。

**Type:** bundleManager.BundleType

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

## systemApp

```TypeScript
readonly systemApp: boolean
```

标识应用是否为系统应用，取值为true表示系统应用，取值为false表示非系统应用。

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

