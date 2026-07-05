# @ohos.file.picker

选择器(Picker)是一个封装DocumentViewPicker、AudioViewPicker、PhotoViewPicker的API模块，具有选择与保存的能力。 应用可以选择使用以下API来实现文件的选择和保存的功能。该类接口，需要应用在界面UIAbility中调用，否则无法拉起FilePicker应用、 AudioPicker应用或PhotoPicker应用。调用本模块接口返回的URI数组， URI中的中文及非数字字母的特殊字符会被编码为对应的ASCII码并拼接到URI中。 > **说明：** > > 该模块接口从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

**Since:** 9

**System capability:** SystemCapability.FileManagement.UserFileService

## Modules to Import

```TypeScript
import { picker } from '@kit.CoreFileKit';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [AudioSaveOptions](arkts-picker-audiosaveoptions-c.md) | 音频保存选项。 |
| [AudioSelectOptions](arkts-picker-audioselectoptions-c.md) | 音频选择选项。 |
| [AudioViewPicker](arkts-picker-audioviewpicker-c.md) | 音频选择器对象，用来支撑选择和保存音频类文件等用户场景。在使用前，需要先创建AudioViewPicker实例。 |
| [DocumentSaveOptions](arkts-picker-documentsaveoptions-c.md) | 文档保存选项。 |
| [DocumentSelectOptions](arkts-picker-documentselectoptions-c.md) | 文档选择选项。 |
| [DocumentViewPicker](arkts-picker-documentviewpicker-c.md) | 文件选择器对象，用来支撑选择和保存各种格式文档。在使用前，需要先创建DocumentViewPicker实例。 |
| [PhotoSaveOptions](arkts-picker-photosaveoptions-c.md) | 图片或视频的保存选项。 |
| [PhotoSelectOptions](arkts-picker-photoselectoptions-c.md) | 图库选择选项。 |
| [PhotoSelectResult](arkts-picker-photoselectresult-c.md) | 返回图库选择后的结果集。 |
| [PhotoViewPicker](arkts-picker-photoviewpicker-c.md) | 图库选择器对象，用来支撑选择图片/视频和保存图片/视频等用户场景。选择文件推荐使用 [PhotoAccessHelper的PhotoViewPicker]{@link @ohos.file.photoAccessHelper:photoAccessHelper}。 在使用前，需要先创建PhotoViewPicker实例。 |

### Interfaces

| Name | Description |
| --- | --- |
| [AudioSaveOptions](arkts-picker-audiosaveoptions-i.md) | 音频保存选项。 |
| [AudioSelectOptions](arkts-picker-audioselectoptions-i.md) | 音频选择选项。 |
| [DocumentSaveOptions](arkts-picker-documentsaveoptions-i.md) | 文档保存选项。 |
| [DocumentSelectOptions](arkts-picker-documentselectoptions-i.md) | 文档选择选项。 |

### Enums

| Name | Description |
| --- | --- |
| [DocumentPickerMode](arkts-picker-documentpickermode-e.md) | Enumerates the modes for saving documents. |
| [DocumentSelectMode](arkts-picker-documentselectmode-e.md) | Enumerates the types of documents selected. |
| [MergeTypeMode](arkts-picker-mergetypemode-e.md) | Enumerates file aggregation types. |
| [PhotoViewMIMETypes](arkts-picker-photoviewmimetypes-e.md) | Enumerates the media file types that can be selected. |

