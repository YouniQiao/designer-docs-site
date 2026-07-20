# MediaAssetDataHandler

MediaAssetDataHandler is a media asset handler used to customize the media asset processing logic in **onDataPrepared**.

**Since:** 11

<!--Device-photoAccessHelper-interface MediaAssetDataHandler<T>--><!--Device-photoAccessHelper-interface MediaAssetDataHandler<T>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## onDataPrepared

```TypeScript
onDataPrepared(data: T, map?: Map<string, string>): void
```

Called when the requested media asset is ready. If an error occurs, **data** returned by the callback is **undefined**. Each media asset request corresponds to a callback.

T supports the following data types: ArrayBuffer, [ImageSource](../../apis-image-kit/arkts-apis/arkts-image-image-imagesource-i.md),[MovingPhoto](arkts-file-photoaccesshelper.md), and boolean. ArrayBuffer indicates the image or video asset data, [ImageSource](../../apis-image-kit/arkts-apis/arkts-image-image-imagesource-i.md) indicates the image source,[MovingPhoto](arkts-file-photoaccesshelper.md) indicates a moving photo object, and boolean indicates whether the image or video is successfully written to the application sandbox directory.

Information returned by **map**:

| Map Key | Description|  
|----------|-------|  
| 'quality' | Image quality. The value **high** means high quality, and **low** means poor quality.|

**Since:** 11

<!--Device-MediaAssetDataHandler-onDataPrepared(data: T, map?: Map<string, string>): void--><!--Device-MediaAssetDataHandler-onDataPrepared(data: T, map?: Map<string, string>): void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | T | Yes | Data of the image asset that is ready. It is of the generic type and supports the following data types: ArrayBuffer, [ImageSource](../../apis-image-kit/arkts-apis/arkts-image-image-imagesource-i.md),[MovingPhoto](arkts-file-photoaccesshelper.md), and boolean. |
| map | [Map](../../apis-na/arkts-apis/arkts-na-lib-es2015-collection-map-i.md)<string, string> | No | Additional information about the image asset, such as the image quality.Currently, only **quality** is supported.<br>**Since:** 12 |

