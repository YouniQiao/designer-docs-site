# DocumentSelectOptions

文档选择选项。

**Since:** 9

**System capability:** SystemCapability.FileManagement.UserFileService

## Modules to Import

```TypeScript
import { picker } from '@kit.CoreFileKit';
```

## multiAuthMode

```TypeScript
multiAuthMode?: boolean
```

支持批量授权模式，默认为false（非批量授权模式）。当multiAuthMode为true时为批量授权模式。当multiAuthMode为true时， 只有multiUriArray参数生效，其他参数不生效。 该参数在Phone设备中可正常使用，在其他设备中无效果。

**Type:** boolean

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

## authMode

```TypeScript
authMode?: boolean
```

拉起授权Picker，默认为false（非授权模式）。当authMode为true时为授权模式，defaultFilePathUri必填，表明待授权URI。 该参数在2in1设备中可正常使用，在其他设备中无效果。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService.FolderSelection

## allowsMulFolderSelection

```TypeScript
allowsMulFolderSelection?: boolean
```

是否支持多选文件夹。true表示支持，false表示不支持，默认值为false。该参数需要与selectMode配合使用， 当selectMode为FOLDER或者MIXED，并且allowsMulFolderSelection为true，多选文件夹功能生效。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService.FolderSelection

## themeColor

```TypeScript
themeColor?: CustomColors
```

主题色参数, 默认为空，跟随FilePicker应用颜色。当themeColor设置为特定的主题色属性 （[brand, fontPrimary, compBackgroundEmphasize, iconFourth](../../apis-arkui/arkts-apis/arkts-colors-i.md#Colors)）时， 被拉起的FilePicker应用将适配传入的主题色参数的效果。 该接口在Phone设备中可正常调用，在其他设备中无效果。

**Type:** CustomColors

**Since:** 18

**System capability:** SystemCapability.FileManagement.UserFileService

**System API:** This is a system API.

## defaultFilePathUri

```TypeScript
defaultFilePathUri?: string
```

指定选择的文件或者目录的URI。默认为空（效果为拉起最近打开页）。

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

## selectMode

```TypeScript
selectMode?: DocumentSelectMode
```

Picker选择的文档类型，默认值是FILE(文件类型)。

**Type:** DocumentSelectMode

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService.FolderSelection

## isEncryptionSupported

```TypeScript
isEncryptionSupported?: boolean
```

是否支持加密（仅支持文件，文件夹不生效），默认为false。该参数为true时，在Picker界面可以选择对文件进行加密。

**Type:** boolean

**Since:** 19

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

## fileSuffixFilters

```TypeScript
fileSuffixFilters?: Array<string>
```

选择文件的后缀类型。传入字符串数组，每一项代表一个后缀选项，每一项内部用"|"分为两部分，第一部分为描述， 第二部分为过滤后缀。没有"|"则没有描述，该项整体是一个过滤后缀。每项过滤后缀可以存在多个后缀名，则每一个后缀名之间用英 文逗号进行分隔，传入数组长度不能超过100，例如：['图片(.png, .jpg)|.png,.jpg', '文档|.txt', '视频|.mp4', '.pdf']。 默认不过滤，即显示所有文件。此外2in1设备支持通配符方式['所有文件(*.*)|.*'] （说明：从API version 17开始，手机支持该配置），表示为显示所有文件。 仅对具有该系统能力的设备开放。

**Type:** Array<string>

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

## multiUriArray

```TypeScript
multiUriArray?: Array<string>
```

传入需要批量授权的URI数组（仅支持文件，文件夹不生效）。配合multiAuthMode使用。当multiAuthMode为false时， 配置该参数不生效。默认为空（效果为拉起批量授权页面后展示的文件为空）。 该参数在Phone设备中可正常使用，在其他设备中无效果。

**Type:** Array<string>

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

## mergeMode

```TypeScript
mergeMode?: MergeTypeMode
```

开启聚合视图模式，支持拉起文件管理应用的聚合视图。默认为DEFAULT，表示该参数不生效，非聚合视图。 当该参数置为非DEFAULT时，其他参数不生效。 该参数在Phone设备中可正常使用，在其他设备中无效果。

**Type:** MergeTypeMode

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

## maxSelectNumber

```TypeScript
maxSelectNumber?: number
```

选择文件最大个数。 API version 20及之前的版本，单次文件选择的最大数量上限为500个，默认值也为500。 目录选择功能仅对具备该系统能力的设备开放，且单次最多可选择1个目录。 API version 21及之后的版本取消文件选择数量的限制。受系统能力限制，选择文件数量过大可能会出现功能异常或处理性能较差等情况， 建议单次选择文件个数不超过1万个。 API version 23及之后的版本取消目录选择数量的限制。

**Type:** number

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

