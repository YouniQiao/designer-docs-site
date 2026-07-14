# @ohos.multimedia.camera

The module provides a set of camera service APIs for you to easily develop a camera application. The application can access and operate the camera hardware to implement basic operations, such as preview, taking photos, and recording videos. It can also perform more operations, for example, controlling the flash and exposure time, and focusing or adjusting the focus.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getCameraManager](arkts-camera-getcameramanager-f.md#getcameramanager-1) | Obtains a CameraManager instance. This API returns the result synchronously. |

<!--Del-->
### Classes（系统接口）

| Name | Description |
| --- | --- |
| [EffectSuggestionStatus](arkts-camera-effectsuggestionstatus-c-sys.md) | Effect suggestion status |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [AutoDeviceSwitch](arkts-camera-autodeviceswitch-i.md) | **AutoDeviceSwitch** inherits from [AutoDeviceSwitchQuery](arkts-camera-autodeviceswitchquery-i.md) and is used to enable or disable automatic camera switch. This capability can be used only on foldable devices. For details about the development, see [Practices for Automatic Camera Switching (ArkTS)](../../../../media/camera/camera-auto-switch.md). It is recommended that the system automatically handle input device switching, session configuration, and parameter continuity during automatic camera switch. If the system detects that the zoom ranges of the two cameras are different during camera switching, it will notify the application through the **isDeviceCapabilityChanged** field in [AutoDeviceSwitchStatus](arkts-camera-autodeviceswitchstatus-i.md). However, the application still needs to handle the UX change. For example, for the zoom range adjustment, the application needs to call [getZoomRatioRange](arkts-camera-zoomquery-i.md#getzoomratiorange-1) to obtain data and update the UX. Therefore, **AutoDeviceSwitch** is more applicable to simplified UX interactions. |
| [AutoDeviceSwitchQuery](arkts-camera-autodeviceswitchquery-i.md) | **AutoDeviceSwitchQuery** is used to check whether a device supports automatic camera switch. [Automatic Camera Switching](../../../../media/camera/camera-auto-switch.md) is supported only on foldable devices. For details about how to enable this capability, see [enableAutoDeviceSwitch](arkts-camera-autodeviceswitch-i.md#enableautodeviceswitch-1). |
| [AutoDeviceSwitchStatus](arkts-camera-autodeviceswitchstatus-i.md) | Describes the information about the automatic camera switch status. |
| [AutoExposure](arkts-camera-autoexposure-i.md) | AutoExposure inherits from [AutoExposureQuery](arkts-camera-autoexposurequery-i.md). It provides APIs related to auto exposure. |
| [AutoExposureQuery](arkts-camera-autoexposurequery-i.md) | AutoExposureQuery provides APIs to query the automatic exposure feature of a camera device. &gt; &gt; - In this version, a compatibility change was made that preserved the initial version information of inner &gt; elements. As a result, you might see outer element's @since version number being higher than that of the inner &gt; elements. However, this discrepancy does not affect the functionality of the interface. |
| [CameraConcurrentInfo](arkts-camera-cameraconcurrentinfo-i.md) | Describes the camera's concurrency information. |
| [CameraDevice](arkts-camera-cameradevice-i.md) | Describes the camera device information. |
| [CameraInput](arkts-camera-camerainput-i.md) | Defines the camera input object. It provides camera device information used in [Session](arkts-camera-session-i.md). |
| [CameraManager](arkts-camera-cameramanager-i.md) | Implements camera management. Before calling any API in CameraManager, you must use [getCameraManager](arkts-camera-getcameramanager-f.md#getcameramanager-1) to obtain a CameraManager instance. |
| [CameraOutput](arkts-camera-cameraoutput-i.md) | CameraOutput implements output information used in [Session](arkts-camera-session-i.md). It is the base class of **output**. |
| [CameraOutputCapability](arkts-camera-cameraoutputcapability-i.md) | Describes the camera output capability. |
| [CameraStatusInfo](arkts-camera-camerastatusinfo-i.md) | Describes the camera status information. |
| [CaptureEndInfo](arkts-camera-captureendinfo-i.md) | Describes the capture end information. |
| [CapturePhoto](arkts-camera-capturephoto-i.md) | **CapturePhoto** provides APIs for obtaining the objects of the full-quality image and the uncompressed image. |
| [CaptureSession](arkts-camera-capturesession-i.md) | Implements a capture session, which saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera and requests the camera to complete shooting or video recording. |
| [CaptureStartInfo](arkts-camera-capturestartinfo-i.md) | Describes the capture start information. |
| [ColorManagement](arkts-camera-colormanagement-i.md) | **ColorManagement** inherits from [ColorManagementQuery](arkts-camera-colormanagementquery-i.md). It provides the APIs for color space settings. |
| [ColorManagementQuery](arkts-camera-colormanagementquery-i.md) | ColorManagementQuery provides the APIs for color space query. |
| [ControlCenter](arkts-camera-controlcenter-i.md) | ControlCenter inherits from [ControlCenterQuery](arkts-camera-controlcenterquery-i.md). It is used to enable the camera controller. |
| [ControlCenterQuery](arkts-camera-controlcenterquery-i.md) | ControlCenterQuery is used to check whether the camera controller is supported. |
| [ControlCenterStatusInfo](arkts-camera-controlcenterstatusinfo-i.md) | Describes the effect status information of a camera controller. |
| [Flash](arkts-camera-flash-i.md) | Flash extends [FlashQuery](arkts-camera-flashquery-i.md) Provides APIs related to the flash. |
| [FlashQuery](arkts-camera-flashquery-i.md) | Provides APIs to obtain the flash information of a camera device, including whether the LCD flash is supported. |
| [Focus](arkts-camera-focus-i.md) | Focus extends [FocusQuery](arkts-camera-focusquery-i.md) Provides APIs to obtain and set the camera focus mode and focus position. |
| [FocusQuery](arkts-camera-focusquery-i.md) | Provides the API to check whether the focus assist is supported. |
| [FoldStatusInfo](arkts-camera-foldstatusinfo-i.md) | Describes the fold state information about a foldable device. |
| [FrameRateRange](arkts-camera-frameraterange-i.md) | Describes the frame rate range. |
| [FrameShutterEndInfo](arkts-camera-frameshutterendinfo-i.md) | Describes the frame shutter end information during capture. |
| [FrameShutterInfo](arkts-camera-frameshutterinfo-i.md) | Describes the frame shutter information. |
| [Location](arkts-camera-location-i.md) | Describes the geolocation information. |
| [ManualExposure](arkts-camera-manualexposure-i.md) | ManualExposure extends [ManualExposureQuery](arkts-camera-manualexposurequery-i.md) Provides APIs to obtain and set the exposure duration. |
| [ManualExposureQuery](arkts-camera-manualexposurequery-i.md) | Provides APIs to obtain the manual exposure range supported. |
| [ManualFocusQuery](arkts-camera-manualfocusquery-i.md) | Manual Focus Query object. |
| [ManualIsoQuery](arkts-camera-manualisoquery-i.md) | Provides APIs to check whether a camera device supports manual ISO setting and obtain the ISO range supported by the device. |
| [MetadataBarcodeObject](arkts-camera-metadatabarcodeobject-i.md) | Implements the barcode metadata object used for camera detection. It inherits from [MetadataObject](arkts-camera-metadataobjecttype-e.md) and is the data source of the camera information in [CameraInput](arkts-camera-camerainput-i.md). It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')](arkts-camera-metadataoutput-i.md#on-1). |
| [MetadataCatBodyObject](arkts-camera-metadatacatbodyobject-i.md) | Implements the cat body metadata object used for camera detection. It inherits from [MetadataObject](arkts-camera-metadataobjecttype-e.md) and is the data source of the camera information in [CameraInput](arkts-camera-camerainput-i.md). It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')](arkts-camera-metadataoutput-i.md#on-1). |
| [MetadataDogBodyObject](arkts-camera-metadatadogbodyobject-i.md) | Implements the dog body metadata object used for camera detection. It inherits from [MetadataObject](arkts-camera-metadataobjecttype-e.md) and is the data source of the camera information in [CameraInput](arkts-camera-camerainput-i.md). It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')](arkts-camera-metadataoutput-i.md#on-1). |
| [MetadataHumanBodyObject](arkts-camera-metadatahumanbodyobject-i.md) | Implements the human body metadata object used for camera detection. It inherits from [MetadataObject](arkts-camera-metadataobjecttype-e.md) and is the data source of the camera information in [CameraInput](arkts-camera-camerainput-i.md). It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')](arkts-camera-metadataoutput-i.md#on-1). |
| [MetadataObject](arkts-camera-metadataobject-i.md) | Implements the basic metadata object used for camera detection. It serves as the data source of the camera information in [CameraInput](arkts-camera-camerainput-i.md). It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')](arkts-camera-metadataoutput-i.md#on-1). |
| [MetadataOutput](arkts-camera-metadataoutput-i.md) | Implements metadata streams. It inherits from [CameraOutput](arkts-camera-cameraoutput-i.md). |
| [MetadataSalientDetectionObject](arkts-camera-metadatasalientdetectionobject-i.md) | Implements the salient detection metadata object used for camera detection. It inherits from [MetadataObject](arkts-camera-metadataobjecttype-e.md) and is the data source of the camera information in [CameraInput](arkts-camera-camerainput-i.md). It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')](arkts-camera-metadataoutput-i.md#on-1). |
| [OIS](arkts-camera-ois-i.md) | OIS (Optical Image Stabilization) interface. |
| [OISQuery](arkts-camera-oisquery-i.md) | OIS (Optical Image Stabilization) query interface. |
| [Photo](arkts-camera-photo-i.md) | Defines a higher-resolution image object. |
| [PhotoCaptureSetting](arkts-camera-photocapturesetting-i.md) | Describes the settings for taking an image. |
| [PhotoConflictFunctions](arkts-camera-photoconflictfunctions-i.md) | Photo Conflict Functions object. |
| [PhotoFunctions](arkts-camera-photofunctions-i.md) | Photo Functions object. |
| [PhotoOutput](arkts-camera-photooutput-i.md) | Implements output information used in a photo session. It inherits from [CameraOutput](arkts-camera-cameraoutput-i.md). |
| [PhotoSession](arkts-camera-photosession-i.md) | Implements a photo session, which sets the parameters of the normal photo mode and saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md). |
| [PhotoSessionForSys](arkts-camera-photosessionforsys-i.md) | Implements a photo session for system applications, which sets the parameters of the normal photo mode and saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md). |
| [Point](arkts-camera-point-i.md) | Describes the point coordinates, which are used for focus and exposure configuration. |
| [PortraitPhotoConflictFunctions](arkts-camera-portraitphotoconflictfunctions-i.md) | Portrait Photo Conflict Functions object. |
| [PortraitPhotoFunctions](arkts-camera-portraitphotofunctions-i.md) | Portrait Photo Functions object. |
| [PreviewOutput](arkts-camera-previewoutput-i.md) | Implements preview output. It inherits from [CameraOutput](arkts-camera-cameraoutput-i.md). |
| [Profile](arkts-camera-profile-i.md) | Describes the camera profile. |
| [Rect](arkts-camera-rect-i.md) | Describes a rectangle. The coordinate system for the returned detection points is based on the landscape device orientation, with the charging port on the right. In this coordinate system, the top-left corner is (0, 0), and the bottom-right corner is (1, 1). Here, **topLeftX** and **topLeftY** represent the coordinates of the top-left corner of the rectangle, whereas **width** and **height** represent the width and height of the rectangle, respectively. When cropping or selecting a face region based on specific requirements, the x and y coordinates of the rectangle must be multiplied by the width and height of the actual camera preview output stream to obtain the cropped face region. The width and height of the actual preview stream refer to the resolution of the camera output stream. For details, see **size** in [profile](arkts-camera-profile-i.md). For details about how to obtain the preview stream data, see [Dual-Channel Preview (ArkTS)](../../../../media/camera/camera-dual-channel-preview.md). |
| [SecureSession](arkts-camera-securesession-i.md) | **SecureSession** inherits from [Session](arkts-camera-session-i.md), [Flash](arkts-camera-flash-i.md), [AutoExposure](arkts-camera-autoexposure-i.md), [WhiteBalance](arkts-camera-whitebalance-i.md), [Focus](arkts-camera-focus-i.md), and [Zoom](arkts-camera-zoom-i.md). It implements a secure session, which provides operations on the flash, exposure, white balance, focus, and zoom. You can call [createSession](arkts-camera-cameramanager-i.md#createsession-1) with [SceneMode](arkts-camera-scenemode-e.md) set to **SECURE_PHOTO** to create a session in secure mode. The secure mode is designed for applications with high security requirements, such as facial recognition systems and banking services. It must be used together with the &lt;!--RP1--&gt;security TA&lt;!--RP1End--&gt; to support service scenarios where both standard preview streams and security streams are output.&lt;!--RP2--&gt; The security TA can verify the signature of data delivered by the server, sign images, parse and assemble TLV logic , and read, create, and operate keys. It applies to image processing.&lt;!--RP2End--&gt; |
| [Session](arkts-camera-session-i.md) | **Session** implements a session, which saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera and requests the camera to take a photo or record a video. |
| [Size](arkts-camera-size-i.md) | Describes the image dimensions. |
| [SmoothZoomInfo](arkts-camera-smoothzoominfo-i.md) | Describes the smooth zoom information. |
| [Stabilization](arkts-camera-stabilization-i.md) | **Stabilization** inherits from [StabilizationQuery](arkts-camera-stabilizationquery-i.md). It provides APIs to set video stabilization. Video stabilization can be set only when the session has a recording stream ( [VideoOutput](arkts-camera-videooutput-i.md)). Among the enums of [VideoStabilizationMode](arkts-camera-videostabilizationmode-e.md), the **HIGH** mode only takes effect when the resolution set in [Profile](arkts-camera-profile-i.md) is 1920×1080. |
| [StabilizationQuery](arkts-camera-stabilizationquery-i.md) | StabilizationQuery provides APIs to check the support for video stabilization. &gt; **NOTE** &gt; &gt; - This interface was first introduced in API version 12. In this version, a compatibility change was made that &gt; preserved the initial version information of inner elements. As a result, you might see outer element's @since &gt; version number being higher than that of the inner elements. However, this discrepancy does not affect the &gt; functionality of the interface. |
| [TorchStatusInfo](arkts-camera-torchstatusinfo-i.md) | Describes the flashlight status information. |
| [VideoConflictFunctions](arkts-camera-videoconflictfunctions-i.md) | Video Conflict Functions object. |
| [VideoFunctions](arkts-camera-videofunctions-i.md) | Video Functions object. |
| [VideoOutput](arkts-camera-videooutput-i.md) | **VideoOutput** implements output information used in a video session. It inherits from [CameraOutput](arkts-camera-cameraoutput-i.md). |
| [VideoProfile](arkts-camera-videoprofile-i.md) | Describes the video configuration information. It inherits from [Profile](arkts-camera-profile-i.md). |
| [VideoSession](arkts-camera-videosession-i.md) | VideoSession extends Session, Flash, AutoExposure, Focus, Zoom, Stabilization, ColorManagement Implements a video session, which sets the parameters of the normal video mode and saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md). |
| [VideoSessionForSys](arkts-camera-videosessionforsys-i.md) | Implements a video session for system applications, which sets the parameters of the normal video mode and saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md). |
| [WhiteBalance](arkts-camera-whitebalance-i.md) | **WhiteBalance** inherits from [WhiteBalanceQuery](arkts-camera-whitebalancequery-i.md). It provides APIs to process white balance, including obtaining and setting the white balance mode and white balance value. |
| [WhiteBalanceQuery](arkts-camera-whitebalancequery-i.md) | WhiteBalanceQuery provides APIs to check whether a white balance mode is supported and obtain the white balance mode range supported. |
| [Zoom](arkts-camera-zoom-i.md) | Zoom extend [ZoomQuery](arkts-camera-zoomquery-i.md) Provides APIs to process the zoom effect of a camera device, including obtaining the current zoom ratio, setting a zoom ratio, setting a zoom ratio in a smooth manner, and preparing or unpreparing for zooming. |
| [ZoomQuery](arkts-camera-zoomquery-i.md) | Provides the API to obtain the equivalent focal length information list in the current mode. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [Aperture](arkts-camera-aperture-i-sys.md) | Provides the APIs for aperture settings. It inherits from [ApertureQuery](arkts-camera-aperturequery-i-sys.md). |
| [ApertureInfo](arkts-camera-apertureinfo-i-sys.md) | Describes the aperture information. |
| [ApertureQuery](arkts-camera-aperturequery-i-sys.md) | Provides the aperture query capability. |
| [ApertureVideoSession](arkts-camera-aperturevideosession-i-sys.md) | Aperture video session object. |
| [AutoExposure](arkts-camera-autoexposure-i-sys.md) | AutoExposure inherits from [AutoExposureQuery](arkts-camera-autoexposurequery-i.md). It provides APIs related to auto exposure. |
| [AutoExposureQuery](arkts-camera-autoexposurequery-i-sys.md) | AutoExposureQuery provides APIs to query the automatic exposure feature of a camera device. &gt; &gt; - In this version, a compatibility change was made that preserved the initial version information of inner &gt; elements. As a result, you might see outer element's @since version number being higher than that of the inner &gt; elements. However, this discrepancy does not affect the functionality of the interface. |
| [Beauty](arkts-camera-beauty-i-sys.md) | Beauty extends [BeautyQuery](arkts-camera-beautyquery-i-sys.md) Provides APIs to obtain and set the beauty effect. |
| [BeautyQuery](arkts-camera-beautyquery-i-sys.md) | Provides APIs to obtain and set the beauty effect. |
| [CameraDevice](arkts-camera-cameradevice-i-sys.md) | Describes the camera device information. |
| [CameraInput](arkts-camera-camerainput-i-sys.md) | Defines the camera input object. It provides camera device information used in [Session](arkts-camera-session-i.md). |
| [CameraManager](arkts-camera-cameramanager-i-sys.md) | Implements camera management. Before calling any API in CameraManager, you must use [getCameraManager](arkts-camera-getcameramanager-f.md#getcameramanager-1) to obtain a CameraManager instance. |
| [CameraOcclusionDetectionResult](arkts-camera-cameraocclusiondetectionresult-i-sys.md) | Describes the instance returned by the occlusion status callback, which indicates whether the camera lens is blocked or dirty. |
| [CameraOutputCapability](arkts-camera-cameraoutputcapability-i-sys.md) | Describes the camera output capability. |
| [CaptureSession](arkts-camera-capturesession-i-sys.md) | Implements a capture session, which saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera and requests the camera to complete shooting or video recording. |
| [ColorEffect](arkts-camera-coloreffect-i-sys.md) | ColorEffect extends [ColorEffectQuery](arkts-camera-coloreffectquery-i-sys.md) Provides the APIs to obtain and set the lens color effect. |
| [ColorEffectQuery](arkts-camera-coloreffectquery-i-sys.md) | Provides the API to obtain the color effects supported. |
| [ColorReservation](arkts-camera-colorreservation-i-sys.md) | ColorReservation extends [ColorReservationQuery](arkts-camera-colorreservationquery-i-sys.md) Provides API for obtaining and setting a color reservation type. |
| [ColorReservationQuery](arkts-camera-colorreservationquery-i-sys.md) | Provides APIs for querying the color retention type supported by the device. |
| [ControlCenterSession](arkts-camera-controlcentersession-i-sys.md) | Control center session object. |
| [DeferredPhotoProxy](arkts-camera-deferredphotoproxy-i-sys.md) | A class object that functions as a thumbnail proxy. |
| [DeferredVideoEnhancementInfo](arkts-camera-deferredvideoenhancementinfo-i-sys.md) | Deferred video enhancement info. |
| [DepthData](arkts-camera-depthdata-i-sys.md) | Describes a depth data object. |
| [DepthDataOutput](arkts-camera-depthdataoutput-i-sys.md) | Implements depth data output. It inherits from [CameraOutput](arkts-camera-cameraoutput-i.md). |
| [DepthFusion](arkts-camera-depthfusion-i-sys.md) | Depth fusion class. It inherits from [DepthFusionQuery](arkts-camera-depthfusionquery-i-sys.md). |
| [DepthFusionQuery](arkts-camera-depthfusionquery-i-sys.md) | A class for querying depth fusion capabilities. |
| [DepthProfile](arkts-camera-depthprofile-i-sys.md) | Describes the profile of depth data. It inherits from [Profile](arkts-camera-profile-i.md). |
| [EffectSuggestion](arkts-camera-effectsuggestion-i-sys.md) | EffectSuggestion object. |
| [ExposureInfo](arkts-camera-exposureinfo-i-sys.md) | Describes the exposure information object. |
| [Flash](arkts-camera-flash-i-sys.md) | Flash extends [FlashQuery](arkts-camera-flashquery-i.md) Provides APIs related to the flash. |
| [FlashQuery](arkts-camera-flashquery-i-sys.md) | Provides APIs to obtain the flash information of a camera device, including whether the LCD flash is supported. |
| [FluorescencePhotoSession](arkts-camera-fluorescencephotosession-i-sys.md) | Fluorescence photo session object. |
| [Focus](arkts-camera-focus-i-sys.md) | Focus extends [FocusQuery](arkts-camera-focusquery-i.md) Provides APIs to obtain and set the camera focus mode and focus position. |
| [FocusQuery](arkts-camera-focusquery-i-sys.md) | Provides the API to check whether the focus assist is supported. |
| [FocusTrackingInfo](arkts-camera-focustrackinginfo-i-sys.md) | Describes the focus tracking information, which is obtained by calling VideoSessionForSys. [on('focusTrackingInfoAvailable')](arkts-camera-videosession-i-sys.md#on-8). |
| [HighResolutionPhotoSession](arkts-camera-highresolutionphotosession-i-sys.md) | HighResolutionPhotoSession extends Session, AutoExposure, Focus Implements a high-resolution photo session, which sets the parameters of the high-resolution photo mode and saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md). &gt; **NOTE** &gt; &gt; In high-resolution photo capture scenarios, the physical camera lens must be used instead of the logical lens. |
| [IsoInfo](arkts-camera-isoinfo-i-sys.md) | Describes the ISO information. |
| [LcdFlashStatus](arkts-camera-lcdflashstatus-i-sys.md) | Describes the LCD flash information. |
| [LightPaintingPhotoSession](arkts-camera-lightpaintingphotosession-i-sys.md) | LightPaintingPhotoSession extends Session, Flash, Focus, Zoom, ColorEffect Implements a light painting photo session, which sets the parameters of the light painting photo mode and saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md). |
| [LuminationInfo](arkts-camera-luminationinfo-i-sys.md) | Describes the illumination information. |
| [Macro](arkts-camera-macro-i-sys.md) | Macro inherits from [MacroQuery](arkts-camera-macroquery-i-sys.md). It provides the API to enable macro photography. |
| [MacroPhotoSession](arkts-camera-macrophotosession-i-sys.md) | Implements a macro photo session, which sets the parameters of the macro photo mode and saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md). |
| [MacroQuery](arkts-camera-macroquery-i-sys.md) | MacroQuery provides the API to check the support for macro photography. |
| [MacroVideoSession](arkts-camera-macrovideosession-i-sys.md) | Implements a macro video session, which sets the parameters of the macro video mode and saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md). |
| [ManualExposure](arkts-camera-manualexposure-i-sys.md) | ManualExposure extends [ManualExposureQuery](arkts-camera-manualexposurequery-i.md) Provides APIs to obtain and set the exposure duration. |
| [ManualExposureQuery](arkts-camera-manualexposurequery-i-sys.md) | Provides APIs to obtain the manual exposure range supported. |
| [ManualFocus](arkts-camera-manualfocus-i-sys.md) | ManualFocus object. |
| [ManualIso](arkts-camera-manualiso-i-sys.md) | ManualIso object. |
| [ManualIsoQuery](arkts-camera-manualisoquery-i-sys.md) | Provides APIs to check whether a camera device supports manual ISO setting and obtain the ISO range supported by the device. |
| [MetadataBasicFaceObject](arkts-camera-metadatabasicfaceobject-i-sys.md) | Metadata object for basic face. |
| [MetadataCatFaceObject](arkts-camera-metadatacatfaceobject-i-sys.md) | Implements the cat face metadata object used for camera detection. It inherits from [MetadataObject](arkts-camera-metadataobjecttype-e.md) and is the data source of the camera information in [CameraInput](arkts-camera-camerainput-i.md). It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')](arkts-camera-metadataoutput-i.md#on-1). |
| [MetadataDogFaceObject](arkts-camera-metadatadogfaceobject-i-sys.md) | Implements the dog face metadata object used for camera detection. It inherits from [MetadataObject](arkts-camera-metadataobjecttype-e.md) and is the data source of the camera information in [CameraInput](arkts-camera-camerainput-i.md). It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')](arkts-camera-metadataoutput-i.md#on-1). |
| [MetadataFaceObject](arkts-camera-metadatafaceobject-i-sys.md) | Implements the human face metadata object used for camera detection. It inherits from [MetadataObject](arkts-camera-metadataobjecttype-e.md) and is the data source of the camera information in [CameraInput](arkts-camera-camerainput-i.md). It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')](arkts-camera-metadataoutput-i.md#on-1). |
| [MetadataObject](arkts-camera-metadataobject-i-sys.md) | Implements the basic metadata object used for camera detection. It serves as the data source of the camera information in [CameraInput](arkts-camera-camerainput-i.md). It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')](arkts-camera-metadataoutput-i.md#on-1). |
| [MetadataOutput](arkts-camera-metadataoutput-i-sys.md) | Implements metadata streams. It inherits from [CameraOutput](arkts-camera-cameraoutput-i.md). |
| [NightPhotoSession](arkts-camera-nightphotosession-i-sys.md) | NightPhotoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ColorManagement, ManualExposure Implements a night photo session, which sets the parameters of the night photo mode and saves all [CameraInput](arkts-camera-camerainput-i.md), [CameraOutput](arkts-camera-cameraoutput-i.md), and [PhotoOutput](arkts-camera-photooutput-i.md) instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md). For night photo capture scenarios, you must listen for the [onCaptureEnd](arkts-camera-photooutput-i.md#on-8) event to mark the end of the photo capture session. |
| [PanoramaPhotoSession](arkts-camera-panoramaphotosession-i-sys.md) | PanoramaPhotoSession extends Session, Focus, AutoExposure, WhiteBalance, ColorEffect Implements a panoramic photo session, which sets the parameters of the panoramic photo mode and saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md). |
| [Photo](arkts-camera-photo-i-sys.md) | Defines a higher-resolution image object. |
| [PhotoOutput](arkts-camera-photooutput-i-sys.md) | Implements output information used in a photo session. It inherits from [CameraOutput](arkts-camera-cameraoutput-i.md). |
| [PhotoSession](arkts-camera-photosession-i-sys.md) | Implements a photo session, which sets the parameters of the normal photo mode and saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md). |
| [PhysicalAperture](arkts-camera-physicalaperture-i-sys.md) | Describes the physical aperture object. |
| [Portrait](arkts-camera-portrait-i-sys.md) | Portrait: inherits from [PortraitQuery](arkts-camera-portraitquery-i-sys.md). Provides the APIs for portrait photo settings. |
| [PortraitPhotoSession](arkts-camera-portraitphotosession-i-sys.md) | PortraitPhotoSession extends Session, Flash, AutoExposure, Focus, Zoom, Beauty, ColorEffect, ColorManagement, Portrait, Aperture Implements a portrait photo session, which sets the parameters of the portrait photo mode and saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md). |
| [PortraitQuery](arkts-camera-portraitquery-i-sys.md) | Queries portrait parameters. |
| [PrelaunchConfig](arkts-camera-prelaunchconfig-i-sys.md) | Defines the camera prelaunch configuration. Currently, the configuration is used for sensor-level prelaunch. It will be used for stream-level prelaunch in a later version. |
| [PreviewOutput](arkts-camera-previewoutput-i-sys.md) | Implements preview output. It inherits from [CameraOutput](arkts-camera-cameraoutput-i.md). |
| [ProfessionalPhotoSession](arkts-camera-professionalphotosession-i-sys.md) | ProfessionalPhotoSession extends Session, AutoExposure, ManualExposure, Focus, ManualFocus, WhiteBalance, ManualIso , Flash, Zoom, ColorEffect, Aperture Implements a professional photo session, which sets the parameters of the professional photo mode and saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md). |
| [ProfessionalVideoSession](arkts-camera-professionalvideosession-i-sys.md) | ProfessionalVideoSession extends Session, AutoExposure, ManualExposure, Focus, ManualFocus, WhiteBalance, ManualIso , Flash, Zoom, ColorEffect, Aperture Implements a professional video session, which sets the parameters of the professional video mode and saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md). |
| [QuickShotPhotoSession](arkts-camera-quickshotphotosession-i-sys.md) | Quick shot photo session object. |
| [QuickThumbnail](arkts-camera-quickthumbnail-i-sys.md) | Quick thumbnail object |
| [SceneDetection](arkts-camera-scenedetection-i-sys.md) | Provides the scene detection capability. It inherits from [SceneDetectionQuery](arkts-camera-scenedetectionquery-i-sys.md). |
| [SceneDetectionQuery](arkts-camera-scenedetectionquery-i-sys.md) | Provides the scene detection and query capabilities. |
| [SceneFeatureDetectionResult](arkts-camera-scenefeaturedetectionresult-i-sys.md) | Describes the scene feature detection result. |
| [Session](arkts-camera-session-i-sys.md) | **Session** implements a session, which saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera and requests the camera to take a photo or record a video. |
| [SettingParam](arkts-camera-settingparam-i-sys.md) | Defines the effect parameters used to preheat an image. |
| [SketchStatusData](arkts-camera-sketchstatusdata-i-sys.md) | Defines the PiP status data. |
| [SlowMotionVideoSession](arkts-camera-slowmotionvideosession-i-sys.md) | SlowMotionVideoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect Implements a slow-motion video session, which sets the parameters of the slow-motion video mode and saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md). &gt; **NOTE** &gt; &gt; In slow-motion video mode, only preview streams and video streams can be added. |
| [TimeLapsePhotoSession](arkts-camera-timelapsephotosession-i-sys.md) | TimeLapsePhotoSession extends Session, Focus, ManualFocus, AutoExposure, ManualExposure, ManualIso, WhiteBalance, Zoom, ColorEffect Implements a time-lapse photo session, which sets the parameters of the time-lapse photo mode and saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md). |
| [TripodDetectionResult](arkts-camera-tripoddetectionresult-i-sys.md) | TripodDetectionResult extends [SceneFeatureDetectionResult](arkts-camera-scenefeaturedetectionresult-i-sys.md) Describes the tripod detection result. |
| [TryAEInfo](arkts-camera-tryaeinfo-i-sys.md) | Describes the Try AE parameters. Try AE indicates that the hardware reports the status based on the ambient illumination change during time-lapse photographing. |
| [VideoOutput](arkts-camera-videooutput-i-sys.md) | **VideoOutput** implements output information used in a video session. It inherits from [CameraOutput](arkts-camera-cameraoutput-i.md). |
| [VideoSession](arkts-camera-videosession-i-sys.md) | VideoSession extends Session, Flash, AutoExposure, Focus, Zoom, Stabilization, ColorManagement Implements a video session, which sets the parameters of the normal video mode and saves all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md) instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md). |
| [WhiteBalance](arkts-camera-whitebalance-i-sys.md) | **WhiteBalance** inherits from [WhiteBalanceQuery](arkts-camera-whitebalancequery-i.md). It provides APIs to process white balance, including obtaining and setting the white balance mode and white balance value. |
| [WhiteBalanceQuery](arkts-camera-whitebalancequery-i-sys.md) | WhiteBalanceQuery provides APIs to check whether a white balance mode is supported and obtain the white balance mode range supported. |
| [Zoom](arkts-camera-zoom-i-sys.md) | Zoom extend [ZoomQuery](arkts-camera-zoomquery-i.md) Provides APIs to process the zoom effect of a camera device, including obtaining the current zoom ratio, setting a zoom ratio, setting a zoom ratio in a smooth manner, and preparing or unpreparing for zooming. |
| [ZoomPointInfo](arkts-camera-zoompointinfo-i-sys.md) | Describes the equivalent focal length information. |
| [ZoomQuery](arkts-camera-zoomquery-i-sys.md) | Provides the API to obtain the equivalent focal length information list in the current mode. |
| [ZoomRange](arkts-camera-zoomrange-i-sys.md) | Describes the zoom range. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AutomotiveCameraPosition](arkts-camera-automotivecameraposition-e.md) | Enum for automotive camera position. |
| [CameraConcurrentType](arkts-camera-cameraconcurrenttype-e.md) | Enumerates the camera concurrency types. |
| [CameraErrorCode](arkts-camera-cameraerrorcode-e.md) | Enumerates the camera error codes, which are returned when an API call is incorrect or the **on()** API is used to listen for the error status. |
| [CameraFormat](arkts-camera-cameraformat-e.md) | Enumerates the camera output formats. |
| [CameraPosition](arkts-camera-cameraposition-e.md) | Enumerates the camera positions. |
| [CameraStatus](arkts-camera-camerastatus-e.md) | Enumerates the camera statuses. |
| [CameraType](arkts-camera-cameratype-e.md) | Enumerates the camera types. |
| [ConnectionType](arkts-camera-connectiontype-e.md) | Enumerates the camera connection types. |
| [ControlCenterEffectType](arkts-camera-controlcentereffecttype-e.md) | Enumerates the effect types supported by the camera controller. |
| [ExposureMode](arkts-camera-exposuremode-e.md) | Enumerates the exposure modes. |
| [ExposureState](arkts-camera-exposurestate-e.md) | Enumerates the exposure states. |
| [FlashMode](arkts-camera-flashmode-e.md) | Enumerates the flash modes. |
| [FlashState](arkts-camera-flashstate-e.md) | Enumerates the flash states. |
| [FocusMode](arkts-camera-focusmode-e.md) | Enumerates the focus modes. |
| [FocusState](arkts-camera-focusstate-e.md) | Enumerates the focus states. |
| [FoldStatus](arkts-camera-foldstatus-e.md) | Enumerates the fold states available for a fordable device. |
| [ImageRotation](arkts-camera-imagerotation-e.md) | Enumerates the image rotation angles. |
| [MetadataObjectType](arkts-camera-metadataobjecttype-e.md) | Enumerates the types of metadata objects used for camera detection. |
| [OISAxes](arkts-camera-oisaxes-e.md) | Enumerates the OIS axes. |
| [OISMode](arkts-camera-oismode-e.md) | Enumerates the optical image stabilization (OIS) mode. |
| [PhotoQualityPrioritization](arkts-camera-photoqualityprioritization-e.md) | Enumerates the photo quality prioritization strategies. |
| [PreconfigRatio](arkts-camera-preconfigratio-e.md) | Enumerates the preconfigured aspect ratios. |
| [PreconfigType](arkts-camera-preconfigtype-e.md) | Enumerates the preconfigured resolution types. |
| [QualityLevel](arkts-camera-qualitylevel-e.md) | Enumerates the image quality levels. |
| [QualityPrioritization](arkts-camera-qualityprioritization-e.md) | Enumerates the priority levels for video recording quality. |
| [SceneMode](arkts-camera-scenemode-e.md) | Enumerates the camera scene modes. |
| [SensorColorFilterArrangement](arkts-camera-sensorcolorfilterarrangement-e.md) | Enumerates the arrangement modes of the sensor color filter. |
| [SmoothZoomMode](arkts-camera-smoothzoommode-e.md) | Enumerates the smooth zoom modes. |
| [TorchMode](arkts-camera-torchmode-e.md) | Enumerates the flashlight modes. |
| [VideoCodecType](arkts-camera-videocodectype-e.md) | Enumerates the video codec types. |
| [VideoStabilizationMode](arkts-camera-videostabilizationmode-e.md) | Enumerates the video stabilization modes. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AuxiliaryStatus](arkts-camera-auxiliarystatus-e-sys.md) | Enum for auxiliary status. |
| [AuxiliaryType](arkts-camera-auxiliarytype-e-sys.md) | Enum for auxiliary type. |
| [BeautyType](arkts-camera-beautytype-e-sys.md) | Enumerates the beauty types. |
| [CameraErrorCode](arkts-camera-cameraerrorcode-e-sys.md) | Enumerates the camera error codes, which are returned when an API call is incorrect or the **on()** API is used to listen for the error status. |
| [CameraFormat](arkts-camera-cameraformat-e-sys.md) | Enumerates the camera output formats. |
| [ColorEffectType](arkts-camera-coloreffecttype-e-sys.md) | Enumerates the color effect types. |
| [ColorReservationType](arkts-camera-colorreservationtype-e-sys.md) | Enumerates the color reservation types. |
| [DeferredDeliveryImageType](arkts-camera-deferreddeliveryimagetype-e-sys.md) | Enumerates the deferred delivery image types. In deferred delivery, photo and video capture are divided into two phases. In the first phase, an image or video is output to users at a relatively fast speed. In the second phase, a higher-resolution image or video is output again after optimization processing. |
| [DepthDataAccuracy](arkts-camera-depthdataaccuracy-e-sys.md) | Describes the accuracy of depth data. |
| [DepthDataQualityLevel](arkts-camera-depthdataqualitylevel-e-sys.md) | Enumerates the quality levels of depth data. |
| [EffectSuggestionType](arkts-camera-effectsuggestiontype-e-sys.md) | Enum for effect suggestion. |
| [Emotion](arkts-camera-emotion-e-sys.md) | Enumerates the types of emotions in the detected human face information. |
| [ExposureMeteringMode](arkts-camera-exposuremeteringmode-e-sys.md) | Enumerates the exposure metering modes. |
| [ExposureMode](arkts-camera-exposuremode-e-sys.md) | Enumerates the exposure modes. |
| [FocusDrivenType](arkts-camera-focusdriventype-e-sys.md) | Enumerates the focus drive types. |
| [FocusRangeType](arkts-camera-focusrangetype-e-sys.md) | Enumerates the focus range types. |
| [FocusTrackingMode](arkts-camera-focustrackingmode-e-sys.md) | Enumerates the focus tracking modes. |
| [HostDeviceType](arkts-camera-hostdevicetype-e-sys.md) | Enumerates the remote camera types. |
| [LightPaintingType](arkts-camera-lightpaintingtype-e-sys.md) | Enumerates the types of light painting shutter modes. |
| [LightStatus](arkts-camera-lightstatus-e-sys.md) | Enumerates the camera light statuses, which are obtained by calling VideoSessionForSys. [on('lightStatusChange')](arkts-camera-videosession-i-sys.md#on-10). |
| [MetadataObjectType](arkts-camera-metadataobjecttype-e-sys.md) | Enumerates the types of metadata objects used for camera detection. |
| [PolicyType](arkts-camera-policytype-e-sys.md) | Enumerates the policy types. |
| [PortraitEffect](arkts-camera-portraiteffect-e-sys.md) | Enumerates the portrait effects. |
| [PortraitThemeType](arkts-camera-portraitthemetype-e-sys.md) | Enumerates the camera portrait theme types. |
| [RestoreParamType](arkts-camera-restoreparamtype-e-sys.md) | Enumerates the types of the parameters used for prelaunch. |
| [SceneFeatureType](arkts-camera-scenefeaturetype-e-sys.md) | Enumerates the scene features. |
| [SceneMode](arkts-camera-scenemode-e-sys.md) | Enumerates the camera scene modes. |
| [SlowMotionStatus](arkts-camera-slowmotionstatus-e-sys.md) | Enumerates the slow-motion states. |
| [SystemPressureLevel](arkts-camera-systempressurelevel-e.md) | Enumerates the system pressure levels. |
| [TimeLapsePreviewType](arkts-camera-timelapsepreviewtype-e-sys.md) | Enumerates the time-lapse preview types, which affect the shooting algorithm. |
| [TimeLapseRecordState](arkts-camera-timelapserecordstate-e-sys.md) | Enumerates the time-lapse recording states. |
| [TripodStatus](arkts-camera-tripodstatus-e-sys.md) | Enumerates the tripod statuses. |
| [UsageType](arkts-camera-usagetype-e-sys.md) | Enum for usage type used in capture session. |
| [VideoMetaType](arkts-camera-videometatype-e-sys.md) | Video meta type. |
| [WhiteBalanceMode](arkts-camera-whitebalancemode-e-sys.md) | Enumerates the white balance modes. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [ImageType](arkts-camera-imagetype-t.md) | Defines the image container type, which is used to obtain full-quality images or uncompressed images (YUV). |

