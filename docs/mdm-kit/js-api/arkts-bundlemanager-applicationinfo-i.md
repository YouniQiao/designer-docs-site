# ApplicationInfo

应用程序信息。

**Since:** 20

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { bundleManager } from '@kit.MDMKit';
```

## accessTokenId

```TypeScript
readonly accessTokenId: number
```

应用程序的accessTokenId，应用的身份标识，在程序访问控制校验接口 [checkAccessToken](docroot://reference/apis-ability-kit/js-apis-abilityAccessCtrl.md#checkaccesstoken9)中使用。

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## icon

```TypeScript
readonly icon: string
```

应用程序的图标，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的icon字段。关于icon的详细信息详见本表中的iconResource字段说 明。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## description

```TypeScript
readonly description: string
```

标识应用的描述信息，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的description字段。关于description的详细信息详见本表中 的descriptionResource字段说明。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## appDistributionType

```TypeScript
readonly appDistributionType: string
```

应用程序签名证书的分发类型，详细信息请参考[ApplicationInfo]./bundleManager/ApplicationInfo:ApplicationInfo的appProvisionType字段。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## enabled

```TypeScript
readonly enabled: boolean
```

判断应用程序是否可以使用，取值为true表示可以使用，取值为false表示不可使用。

**Type:** boolean

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## installSource

```TypeScript
readonly installSource: string
```

应用程序的安装来源，支持的取值如下： - pre-installed表示应用为第一次开机时安装的预置应用。 - ota表示应用为系统升级时新增的预置应用。 - recovery表示卸载后再恢复的预置应用。 - bundleName表示应用由此包名对应的应用安装。 - unknown表示应用安装来源未知。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## descriptionResource

```TypeScript
readonly descriptionResource: Resource
```

应用程序的描述资源信息，包含了该资源的信息的bundleName、moduleName和id。

**Type:** Resource

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## uid

```TypeScript
readonly uid: number
```

应用程序的UID。

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## appIndex

```TypeScript
readonly appIndex: number
```

应用包的分身索引标识，仅在分身应用中生效。

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## descriptionId

```TypeScript
readonly descriptionId: number
```

标识应用的描述信息的资源id，是编译构建时根据应用配置的description自动生成的资源id。

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## dataUnclearable

```TypeScript
readonly dataUnclearable: boolean
```

标识应用数据是否可被删除。true表示不可删除，false表示可以删除。

**Type:** boolean

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## labelId

```TypeScript
readonly labelId: number
```

标识应用名称的资源id，是编译构建时根据应用配置的label自动生成的资源id。

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## releaseType

```TypeScript
readonly releaseType: string
```

标识应用打包时使用的SDK的发布类型。当前SDK的发布类型可能为Canary、Beta、Release，其中Canary和Beta可能通过序号进一步细分，例如Canary1、Canary2、Beta1、Beta2等。开发者可通 过对比应用打包依赖的SDK发布类型和OS的发布类型（[deviceInfo.distributionOSReleaseType](../../apis-basic-service-kit/arkts-apis/arkts-deviceinfo.md#deviceInfo)）来判断兼容性。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## nativeLibraryPath

```TypeScript
readonly nativeLibraryPath: string
```

应用程序的本地库文件路径。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## iconId

```TypeScript
readonly iconId: number
```

应用程序图标的资源id，是编译构建时根据应用配置的icon自动生成的资源id。

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## process

```TypeScript
readonly process: string
```

应用程序的进程名称。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## debug

```TypeScript
readonly debug: boolean
```

标识应用是否处于调试模式，取值为true表示应用处于调试模式，取值为false表示应用处于非调试模式。

**Type:** boolean

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## labelResource

```TypeScript
readonly labelResource: Resource
```

应用程序的标签资源信息，包含了该资源的信息的bundleName、moduleName和id。

**Type:** Resource

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## appProvisionType

```TypeScript
readonly appProvisionType: string
```

应用程序签名证书文件的类型，分为debug和release两种类型。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## label

```TypeScript
readonly label: string
```

标识应用的名称。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## codePath

```TypeScript
readonly codePath: string
```

应用程序的安装目录。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## iconResource

```TypeScript
readonly iconResource: Resource
```

应用程序的图标资源信息，包含了该资源的信息的bundleName、moduleName和id。

**Type:** Resource

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## removable

```TypeScript
readonly removable: boolean
```

应用程序是否可以被移除，取值为true表示可以被移除，取值为false表示不可以被移除。

**Type:** boolean

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## name

```TypeScript
readonly name: string
```

应用包的名称，对应[app.json5](docroot://quick-start/app-configuration-file.md)中配置的bundleName字段。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## systemApp

```TypeScript
readonly systemApp: boolean
```

标识应用是否为系统应用，取值为true表示系统应用，取值为false表示非系统应用。

**Type:** boolean

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## iconData

```TypeScript
readonly iconData: string
```

应用程序的图标，为base64编码格式。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

