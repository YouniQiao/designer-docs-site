# MetadataSalientDetectionObject

Implements the salient detection metadata object used for camera detection. It inherits from [MetadataObject]camera.MetadataObjectType and is the data source of the camera information in [CameraInput]camera.CameraInput. It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')]camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>).

**继承实现关系：** MetadataSalientDetectionObject继承自：MetadataObject。

**起始版本：** 13

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

