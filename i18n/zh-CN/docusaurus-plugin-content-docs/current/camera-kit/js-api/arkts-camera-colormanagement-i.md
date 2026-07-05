# ColorManagement

ColorManagement** inherits from [ColorManagementQuery]camera.ColorManagementQuery. It provides the APIs for color space settings.

**继承实现关系：** ColorManagement继承自：ColorManagementQuery。

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getActiveColorSpace

```TypeScript
getActiveColorSpace(): colorSpaceManager.ColorSpace
```

Obtains the color space in use.

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| colorSpaceManager.ColorSpace | Color space. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

## setColorSpace

```TypeScript
setColorSpace(colorSpace: colorSpaceManager.ColorSpace): void
```

Sets a color space. Before the setting, call [getSupportedColorSpaces]camera.ColorManagementQuery.getSupportedColorSpaces to obtain the supported color spaces. You are advised to call this API after [addOutput]camera.Session.addOutput and before [commitConfig]camera.Session.commitConfig(). If this API is called after [commitConfig]camera.Session.commitConfig(), the camera session configuration will take a longer time. P3 wide color gamut and HDR imaging: An application can deliver different color space parameters to declare its support for P3 and HDR. If an application does not proactively set the color space, SDR is used by default in photo and video recording modes. For different modes, enabling HDR, setting the color space, and configuring [CameraFormat]camera.CameraFormat in the camera output stream [profile]camera.Profile should match. For details, see the table below. For example, to enable HDR in video recording mode, set [CameraFormat]camera.CameraFormat in the camera preview and video output stream [profiles]camera.Profile to **CAMERA_FORMAT_YCRCB_P010** and the color space to **BT2020_HLG_LIMIT**. To obtain HDR images in photo mode, set the color space to **DISPLAY_P3** or **BT2020_HLG**. **BT2020_HLG** provides a wider color gamut, and should be used together with the **CameraFormat**, including **CAMERA_FORMAT_YCRCB_P010** and **CAMERA_FORMAT_YCBCR_P010**, to improve the image quality. Since API version 23, you can call the [getSupportedFullOutputCapability]camera.CameraManager.getSupportedFullOutputCapability API to check whether the preview format P010 is supported in photo mode. - If the application does not set the color space, the default color space in photo mode is SRGB when the **CameraFormat** is **CAMERA_FORMAT_YUV_420_SP**, and the default color space is **BT2020_HLG** when the **CameraFormat** is **CAMERA_FORMAT_YCRCB_P010** or **CAMERA_FORMAT_YCBCR_P010**. - If the application sets the color space, in photo mode, the **CameraFormat** and **ColorSpace** must be configured according to the following mapping table. Otherwise, an error code will be returned in [setColorSpace]camera.ColorManagement.setColorSpace or [commitConfig]camera.Session.commitConfig(). Photo mode: | SDR/HDR Photo Capture | CameraFormat| ColorSpace| |--------------------|------------| ------------| | SDR(Default) | CAMERA_FORMAT_YUV_420_SP | SRGB | | HDR P3 | CAMERA_FORMAT_YUV_420_SP | DISPLAY_P3 | | HDR BT.2020 | CAMERA_FORMAT_YCRCB_P010,<br>CAMERA_FORMAT_YCBCR_P010 | BT2020_HLG | In video recording mode, if SDR or HDR VIVID is enabled, the camera format and color space must be configured according to the relationships specified in the table below. Configurations that do not match the table will cause issues such as preview exceptions. Recording mode: | SDR/HDR Photo Capture | CameraFormat | ColorSpace | |--------------------|--------------------------|------------------| | SDR(Default) | CAMERA_FORMAT_YUV_420_SP | BT709_LIMIT | | HDR_VIVID | CAMERA_FORMAT_YCRCB_P010 | BT2020_HLG_LIMIT,<br>BT2020_HLG | | HDR_VIVID | CAMERA_FORMAT_YCBCR_P010 | BT2020_HLG_LIMIT,<br>BT2020_HLG |

**起始版本：** 12

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Camera.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| colorSpace | colorSpaceManager.ColorSpace | 是 | The type of color space. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400102 | The colorSpace does not match the format. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

