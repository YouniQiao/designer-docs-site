# @ohos.multimedia.camera

The module provides a set of camera service APIs for you to easily develop a camera application. The application can access and operate the camera hardware to implement basic operations, such as preview, taking photos, and recording videos. It can also perform more operations, for example, controlling the flash and exposure time, and focusing or adjusting the focus.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.Camera.Core

## 导入模块

```TypeScript
import { camera } from '@kit.CameraKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getCameraManager](arkts-camera-getcameramanager-f.md#getCameraManager-1) | Obtains a CameraManager instance. This API returns the result synchronously. |

### 类

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[EffectSuggestionStatus](arkts-camera-effectsuggestionstatus-c-sys.md) | Effect suggestion status |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[Aperture](arkts-camera-aperture-i-sys.md) | Provides the APIs for aperture settings. It inherits from [ApertureQuery]{@link camera.ApertureQuery}. |
| <!--DelRow-->[ApertureInfo](arkts-camera-apertureinfo-i-sys.md) | Describes the aperture information. |
| <!--DelRow-->[ApertureQuery](arkts-camera-aperturequery-i-sys.md) | Provides the aperture query capability. |
| <!--DelRow-->[ApertureVideoSession](arkts-camera-aperturevideosession-i-sys.md) | Aperture video session object. |
| [AutoDeviceSwitch](arkts-camera-autodeviceswitch-i.md) | AutoDeviceSwitch** inherits from [AutoDeviceSwitchQuery]{@link camera.AutoDeviceSwitchQuery} and is used to enable or disable automatic camera switch. This capability can be used only on foldable devices. For details about the development, see [Practices for Automatic Camera Switching (ArkTS)](docroot://media/camera/camera-auto-switch.md). It is recommended that the system automatically handle input device switching, session configuration, and parameter continuity during automatic camera switch. If the system detects that the zoom ranges of the two cameras are different during camera switching, it will notify the application through the **isDeviceCapabilityChanged** field in [AutoDeviceSwitchStatus]{@link camera.AutoDeviceSwitchStatus}. However, the application still needs to handle the UX change. For example, for the zoom range adjustment, the application needs to call [getZoomRatioRange]{@link camera.ZoomQuery.getZoomRatioRange} to obtain data and update the UX. Therefore, **AutoDeviceSwitch** is more applicable to simplified UX interactions. |
| [AutoDeviceSwitchQuery](arkts-camera-autodeviceswitchquery-i.md) | AutoDeviceSwitchQuery** is used to check whether a device supports automatic camera switch. [Automatic Camera Switching](docroot://media/camera/camera-auto-switch.md) is supported only on foldable devices. For details about how to enable this capability, see [enableAutoDeviceSwitch]{@link camera.AutoDeviceSwitch.enableAutoDeviceSwitch}. |
| [AutoDeviceSwitchStatus](arkts-camera-autodeviceswitchstatus-i.md) | Describes the information about the automatic camera switch status. |
| [AutoExposure](arkts-camera-autoexposure-i.md) | AutoExposure inherits from [AutoExposureQuery]{@link camera.AutoExposureQuery}. It provides APIs related to auto exposure. |
| [AutoExposureQuery](arkts-camera-autoexposurequery-i.md) | AutoExposureQuery provides APIs to query the automatic exposure feature of a camera device. > > - In this version, a compatibility change was made that preserved the initial version information of inner > elements. As a result, you might see outer element's @since version number being higher than that of the inner > elements. However, this discrepancy does not affect the functionality of the interface. |
| <!--DelRow-->[Beauty](arkts-camera-beauty-i-sys.md) | Beauty extends [BeautyQuery]{@link camera.BeautyQuery} Provides APIs to obtain and set the beauty effect. |
| <!--DelRow-->[BeautyQuery](arkts-camera-beautyquery-i-sys.md) | Provides APIs to obtain and set the beauty effect. |
| [CameraConcurrentInfo](arkts-camera-cameraconcurrentinfo-i.md) | Describes the camera's concurrency information. |
| [CameraDevice](arkts-camera-cameradevice-i.md) | Describes the camera device information. |
| [CameraInput](arkts-camera-camerainput-i.md) | Defines the camera input object. It provides camera device information used in [Session]{@link camera.Session}. |
| [CameraManager](arkts-camera-cameramanager-i.md) | Implements camera management. Before calling any API in CameraManager, you must use [getCameraManager]{@link camera.getCameraManager} to obtain a CameraManager instance. |
| <!--DelRow-->[CameraOcclusionDetectionResult](arkts-camera-cameraocclusiondetectionresult-i-sys.md) | Describes the instance returned by the occlusion status callback, which indicates whether the camera lens is blocked or dirty. |
| [CameraOutput](arkts-camera-cameraoutput-i.md) | CameraOutput implements output information used in [Session]{@link camera.Session}. It is the base class of **output**. |
| [CameraOutputCapability](arkts-camera-cameraoutputcapability-i.md) | Describes the camera output capability. |
| [CameraStatusInfo](arkts-camera-camerastatusinfo-i.md) | Describes the camera status information. |
| [CaptureEndInfo](arkts-camera-captureendinfo-i.md) | Describes the capture end information. |
| [CapturePhoto](arkts-camera-capturephoto-i.md) | CapturePhoto** provides APIs for obtaining the objects of the full-quality image and the uncompressed image. |
| [CaptureSession](arkts-camera-capturesession-i.md) | Implements a capture session, which saves all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput} instances required to run the camera and requests the camera to complete shooting or video recording. |
| [CaptureStartInfo](arkts-camera-capturestartinfo-i.md) | Describes the capture start information. |
| <!--DelRow-->[ColorEffect](arkts-camera-coloreffect-i-sys.md) | ColorEffect extends [ColorEffectQuery]{@link camera.ColorEffectQuery} Provides the APIs to obtain and set the lens color effect. |
| <!--DelRow-->[ColorEffectQuery](arkts-camera-coloreffectquery-i-sys.md) | Provides the API to obtain the color effects supported. |
| [ColorManagement](arkts-camera-colormanagement-i.md) | ColorManagement** inherits from [ColorManagementQuery]{@link camera.ColorManagementQuery}. It provides the APIs for color space settings. |
| [ColorManagementQuery](arkts-camera-colormanagementquery-i.md) | ColorManagementQuery provides the APIs for color space query. |
| <!--DelRow-->[ColorReservation](arkts-camera-colorreservation-i-sys.md) | ColorReservation extends [ColorReservationQuery]{@link camera.ColorReservationQuery} Provides API for obtaining and setting a color reservation type. |
| <!--DelRow-->[ColorReservationQuery](arkts-camera-colorreservationquery-i-sys.md) | Provides APIs for querying the color retention type supported by the device. |
| [ControlCenter](arkts-camera-controlcenter-i.md) | ControlCenter inherits from [ControlCenterQuery]{@link camera.ControlCenterQuery}. It is used to enable the camera controller. |
| [ControlCenterQuery](arkts-camera-controlcenterquery-i.md) | ControlCenterQuery is used to check whether the camera controller is supported. |
| <!--DelRow-->[ControlCenterSession](arkts-camera-controlcentersession-i-sys.md) | Control center session object. |
| [ControlCenterStatusInfo](arkts-camera-controlcenterstatusinfo-i.md) | Describes the effect status information of a camera controller. |
| <!--DelRow-->[DeferredPhotoProxy](arkts-camera-deferredphotoproxy-i-sys.md) | A class object that functions as a thumbnail proxy. |
| <!--DelRow-->[DeferredVideoEnhancementInfo](arkts-camera-deferredvideoenhancementinfo-i-sys.md) | Deferred video enhancement info. |
| [DefocusFromProximityNotificationInfo](arkts-camera-defocusfromproximitynotificationinfo-i.md) | Describes defocus notification information caused by close proximity. |
| <!--DelRow-->[DepthData](arkts-camera-depthdata-i-sys.md) | Describes a depth data object. |
| <!--DelRow-->[DepthDataOutput](arkts-camera-depthdataoutput-i-sys.md) | Implements depth data output. It inherits from [CameraOutput]{@link camera.CameraOutput}. |
| <!--DelRow-->[DepthFusion](arkts-camera-depthfusion-i-sys.md) | Depth fusion class. It inherits from [DepthFusionQuery]{@link camera.DepthFusionQuery}. |
| <!--DelRow-->[DepthFusionQuery](arkts-camera-depthfusionquery-i-sys.md) | A class for querying depth fusion capabilities. |
| <!--DelRow-->[DepthProfile](arkts-camera-depthprofile-i-sys.md) | Describes the profile of depth data. It inherits from [Profile]{@link camera.Profile}. |
| <!--DelRow-->[EffectSuggestion](arkts-camera-effectsuggestion-i-sys.md) | EffectSuggestion object. |
| <!--DelRow-->[ExposureInfo](arkts-camera-exposureinfo-i-sys.md) | Describes the exposure information object. |
| [Flash](arkts-camera-flash-i.md) | Flash extends [FlashQuery]{@link camera.FlashQuery} Provides APIs related to the flash. |
| [FlashQuery](arkts-camera-flashquery-i.md) | Provides APIs to obtain the flash information of a camera device, including whether the LCD flash is supported. |
| <!--DelRow-->[FluorescencePhotoSession](arkts-camera-fluorescencephotosession-i-sys.md) | Fluorescence photo session object. |
| [Focus](arkts-camera-focus-i.md) | Focus extends [FocusQuery]{@link camera.FocusQuery} Provides APIs to obtain and set the camera focus mode and focus position. |
| [FocusQuery](arkts-camera-focusquery-i.md) | Provides the API to check whether the focus assist is supported. |
| <!--DelRow-->[FocusTrackingInfo](arkts-camera-focustrackinginfo-i-sys.md) | Describes the focus tracking information, which is obtained by calling VideoSessionForSys. [on('focusTrackingInfoAvailable')]{@link camera.VideoSession.on(type: 'focusTrackingInfoAvailable', callback: Callback<FocusTrackingInfo>)}. |
| [FoldStatusInfo](arkts-camera-foldstatusinfo-i.md) | Describes the fold state information about a foldable device. |
| [FrameRateRange](arkts-camera-frameraterange-i.md) | Describes the frame rate range. |
| [FrameShutterEndInfo](arkts-camera-frameshutterendinfo-i.md) | Describes the frame shutter end information during capture. |
| [FrameShutterInfo](arkts-camera-frameshutterinfo-i.md) | Describes the frame shutter information. |
| <!--DelRow-->[HighResolutionPhotoSession](arkts-camera-highresolutionphotosession-i-sys.md) | HighResolutionPhotoSession extends Session, AutoExposure, Focus Implements a high-resolution photo session, which sets the parameters of the high-resolution photo mode and saves all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput} instances required to run the camera. It inherits from [Session]{@link camera.Session}. > **NOTE** > > In high-resolution photo capture scenarios, the physical camera lens must be used instead of the logical lens. |
| <!--DelRow-->[IsoInfo](arkts-camera-isoinfo-i-sys.md) | Describes the ISO information. |
| <!--DelRow-->[LcdFlashStatus](arkts-camera-lcdflashstatus-i-sys.md) | Describes the LCD flash information. |
| <!--DelRow-->[LightPaintingPhotoSession](arkts-camera-lightpaintingphotosession-i-sys.md) | LightPaintingPhotoSession extends Session, Flash, Focus, Zoom, ColorEffect Implements a light painting photo session, which sets the parameters of the light painting photo mode and saves all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput} instances required to run the camera. It inherits from [Session]{@link camera.Session}. |
| [Location](arkts-camera-location-i.md) | Describes the geolocation information. |
| <!--DelRow-->[LuminationInfo](arkts-camera-luminationinfo-i-sys.md) | Describes the illumination information. |
| <!--DelRow-->[Macro](arkts-camera-macro-i-sys.md) | Macro inherits from [MacroQuery]{@link camera.MacroQuery}. It provides the API to enable macro photography. |
| <!--DelRow-->[MacroPhotoSession](arkts-camera-macrophotosession-i-sys.md) | Implements a macro photo session, which sets the parameters of the macro photo mode and saves all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput} instances required to run the camera. It inherits from [Session]{@link camera.Session}. |
| <!--DelRow-->[MacroQuery](arkts-camera-macroquery-i-sys.md) | MacroQuery provides the API to check the support for macro photography. |
| <!--DelRow-->[MacroVideoSession](arkts-camera-macrovideosession-i-sys.md) | Implements a macro video session, which sets the parameters of the macro video mode and saves all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput} instances required to run the camera. It inherits from [Session]{@link camera.Session}. |
| <!--DelRow-->[ManualExposure](arkts-camera-manualexposure-i-sys.md) | ManualExposure extends [ManualExposureQuery]{@link camera.ManualExposureQuery} Provides APIs to obtain and set the exposure duration. |
| <!--DelRow-->[ManualExposureQuery](arkts-camera-manualexposurequery-i-sys.md) | Provides APIs to obtain the manual exposure range supported. |
| <!--DelRow-->[ManualFocus](arkts-camera-manualfocus-i-sys.md) | ManualFocus object. |
| [ManualFocusQuery](arkts-camera-manualfocusquery-i.md) | Manual Focus Query object. |
| <!--DelRow-->[ManualIso](arkts-camera-manualiso-i-sys.md) | ManualIso object. |
| <!--DelRow-->[ManualIsoQuery](arkts-camera-manualisoquery-i-sys.md) | Provides APIs to check whether a camera device supports manual ISO setting and obtain the ISO range supported by the device. |
| <!--DelRow-->[MetadataBarcodeObject](arkts-camera-metadatabarcodeobject-i-sys.md) | Implements the barcode metadata object used for camera detection. It inherits from [MetadataObject]{@link camera.MetadataObjectType} and is the data source of the camera information in [CameraInput]{@link camera.CameraInput}. It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}. |
| <!--DelRow-->[MetadataBasicFaceObject](arkts-camera-metadatabasicfaceobject-i-sys.md) | Metadata object for basic face. |
| <!--DelRow-->[MetadataCatBodyObject](arkts-camera-metadatacatbodyobject-i-sys.md) | Implements the cat body metadata object used for camera detection. It inherits from [MetadataObject]{@link camera.MetadataObjectType} and is the data source of the camera information in [CameraInput]{@link camera.CameraInput}. It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}. |
| <!--DelRow-->[MetadataCatFaceObject](arkts-camera-metadatacatfaceobject-i-sys.md) | Implements the cat face metadata object used for camera detection. It inherits from [MetadataObject]{@link camera.MetadataObjectType} and is the data source of the camera information in [CameraInput]{@link camera.CameraInput}. It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}. |
| <!--DelRow-->[MetadataDogBodyObject](arkts-camera-metadatadogbodyobject-i-sys.md) | Implements the dog body metadata object used for camera detection. It inherits from [MetadataObject]{@link camera.MetadataObjectType} and is the data source of the camera information in [CameraInput]{@link camera.CameraInput}. It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}. |
| <!--DelRow-->[MetadataDogFaceObject](arkts-camera-metadatadogfaceobject-i-sys.md) | Implements the dog face metadata object used for camera detection. It inherits from [MetadataObject]{@link camera.MetadataObjectType} and is the data source of the camera information in [CameraInput]{@link camera.CameraInput}. It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}. |
| <!--DelRow-->[MetadataFaceObject](arkts-camera-metadatafaceobject-i-sys.md) | Implements the human face metadata object used for camera detection. It inherits from [MetadataObject]{@link camera.MetadataObjectType} and is the data source of the camera information in [CameraInput]{@link camera.CameraInput}. It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}. |
| <!--DelRow-->[MetadataHumanBodyObject](arkts-camera-metadatahumanbodyobject-i-sys.md) | Implements the human body metadata object used for camera detection. It inherits from [MetadataObject]{@link camera.MetadataObjectType} and is the data source of the camera information in [CameraInput]{@link camera.CameraInput}. It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}. |
| [MetadataObject](arkts-camera-metadataobject-i.md) | Implements the basic metadata object used for camera detection. It serves as the data source of the camera information in [CameraInput]{@link camera.CameraInput}. It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}. |
| [MetadataOutput](arkts-camera-metadataoutput-i.md) | Implements metadata streams. It inherits from [CameraOutput]{@link camera.CameraOutput}. |
| <!--DelRow-->[MetadataSalientDetectionObject](arkts-camera-metadatasalientdetectionobject-i-sys.md) | Implements the salient detection metadata object used for camera detection. It inherits from [MetadataObject]{@link camera.MetadataObjectType} and is the data source of the camera information in [CameraInput]{@link camera.CameraInput}. It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')]{@link camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)}. |
| <!--DelRow-->[NightPhotoSession](arkts-camera-nightphotosession-i-sys.md) | NightPhotoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect, ColorManagement, ManualExposure Implements a night photo session, which sets the parameters of the night photo mode and saves all [CameraInput]{@link camera.CameraInput}, [CameraOutput]{@link camera.CameraOutput}, and [PhotoOutput]{@link camera.PhotoOutput} instances required to run the camera. It inherits from [Session]{@link camera.Session}. For night photo capture scenarios, you must listen for the [onCaptureEnd]{@link camera.PhotoOutput.on(type: 'captureEnd', callback: AsyncCallback<CaptureEndInfo>)} event to mark the end of the photo capture session. |
| [Notification](arkts-camera-notification-i.md) | Provides APIs for managing notifications. |
| [OIS](arkts-camera-ois-i.md) | OIS (Optical Image Stabilization) interface. |
| [OISQuery](arkts-camera-oisquery-i.md) | OIS (Optical Image Stabilization) query interface. |
| <!--DelRow-->[PanoramaPhotoSession](arkts-camera-panoramaphotosession-i-sys.md) | PanoramaPhotoSession extends Session, Focus, AutoExposure, WhiteBalance, ColorEffect Implements a panoramic photo session, which sets the parameters of the panoramic photo mode and saves all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput} instances required to run the camera. It inherits from [Session]{@link camera.Session}. |
| [Photo](arkts-camera-photo-i.md) | Defines a higher-resolution image object. |
| [PhotoCaptureSetting](arkts-camera-photocapturesetting-i.md) | Describes the settings for taking an image. |
| <!--DelRow-->[PhotoConflictFunctions](arkts-camera-photoconflictfunctions-i-sys.md) | Photo Conflict Functions object. |
| <!--DelRow-->[PhotoFunctions](arkts-camera-photofunctions-i-sys.md) | Photo Functions object. |
| [PhotoOutput](arkts-camera-photooutput-i.md) | Implements output information used in a photo session. It inherits from [CameraOutput]{@link camera.CameraOutput}. |
| [PhotoSession](arkts-camera-photosession-i.md) | Implements a photo session, which sets the parameters of the normal photo mode and saves all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput} instances required to run the camera. It inherits from [Session]{@link camera.Session}. |
| <!--DelRow-->[PhotoSessionForSys](arkts-camera-photosessionforsys-i-sys.md) | Implements a photo session for system applications, which sets the parameters of the normal photo mode and saves all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput} instances required to run the camera. It inherits from [Session]{@link camera.Session}. |
| <!--DelRow-->[PhysicalAperture](arkts-camera-physicalaperture-i-sys.md) | Describes the physical aperture object. |
| [Point](arkts-camera-point-i.md) | Describes the point coordinates, which are used for focus and exposure configuration. |
| <!--DelRow-->[Portrait](arkts-camera-portrait-i-sys.md) | Portrait: inherits from [PortraitQuery]{@link camera.PortraitQuery}. Provides the APIs for portrait photo settings. |
| <!--DelRow-->[PortraitPhotoConflictFunctions](arkts-camera-portraitphotoconflictfunctions-i-sys.md) | Portrait Photo Conflict Functions object. |
| <!--DelRow-->[PortraitPhotoFunctions](arkts-camera-portraitphotofunctions-i-sys.md) | Portrait Photo Functions object. |
| <!--DelRow-->[PortraitPhotoSession](arkts-camera-portraitphotosession-i-sys.md) | PortraitPhotoSession extends Session, Flash, AutoExposure, Focus, Zoom, Beauty, ColorEffect, ColorManagement, Portrait, Aperture Implements a portrait photo session, which sets the parameters of the portrait photo mode and saves all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput} instances required to run the camera. It inherits from [Session]{@link camera.Session}. |
| <!--DelRow-->[PortraitQuery](arkts-camera-portraitquery-i-sys.md) | Queries portrait parameters. |
| <!--DelRow-->[PrelaunchConfig](arkts-camera-prelaunchconfig-i-sys.md) | Defines the camera prelaunch configuration. Currently, the configuration is used for sensor-level prelaunch. It will be used for stream-level prelaunch in a later version. |
| [PreviewOutput](arkts-camera-previewoutput-i.md) | Implements preview output. It inherits from [CameraOutput]{@link camera.CameraOutput}. |
| <!--DelRow-->[ProfessionalPhotoSession](arkts-camera-professionalphotosession-i-sys.md) | ProfessionalPhotoSession extends Session, AutoExposure, ManualExposure, Focus, ManualFocus, WhiteBalance, ManualIso , Flash, Zoom, ColorEffect, Aperture Implements a professional photo session, which sets the parameters of the professional photo mode and saves all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput} instances required to run the camera. It inherits from [Session]{@link camera.Session}. |
| <!--DelRow-->[ProfessionalVideoSession](arkts-camera-professionalvideosession-i-sys.md) | ProfessionalVideoSession extends Session, AutoExposure, ManualExposure, Focus, ManualFocus, WhiteBalance, ManualIso , Flash, Zoom, ColorEffect, Aperture Implements a professional video session, which sets the parameters of the professional video mode and saves all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput} instances required to run the camera. It inherits from [Session]{@link camera.Session}. |
| [Profile](arkts-camera-profile-i.md) | Describes the camera profile. |
| <!--DelRow-->[QuickShotPhotoSession](arkts-camera-quickshotphotosession-i-sys.md) | Quick shot photo session object. |
| <!--DelRow-->[QuickThumbnail](arkts-camera-quickthumbnail-i-sys.md) | Quick thumbnail object |
| [Rect](arkts-camera-rect-i.md) | Describes a rectangle. The coordinate system for the returned detection points is based on the landscape device orientation, with the charging port on the right. In this coordinate system, the top-left corner is (0, 0), and the bottom-right corner is (1, 1). Here, **topLeftX** and **topLeftY** represent the coordinates of the top-left corner of the rectangle, whereas **width** and **height** represent the width and height of the rectangle, respectively. When cropping or selecting a face region based on specific requirements, the x and y coordinates of the rectangle must be multiplied by the width and height of the actual camera preview output stream to obtain the cropped face region. The width and height of the actual preview stream refer to the resolution of the camera output stream. For details, see **size** in [profile]{@link camera.Profile}. For details about how to obtain the preview stream data, see [Dual-Channel Preview (ArkTS)](docroot://media/camera/camera-dual-channel-preview.md). |
| <!--DelRow-->[SceneDetection](arkts-camera-scenedetection-i-sys.md) | Provides the scene detection capability. It inherits from [SceneDetectionQuery]{@link camera.SceneDetectionQuery}. |
| <!--DelRow-->[SceneDetectionQuery](arkts-camera-scenedetectionquery-i-sys.md) | Provides the scene detection and query capabilities. |
| <!--DelRow-->[SceneFeatureDetectionResult](arkts-camera-scenefeaturedetectionresult-i-sys.md) | Describes the scene feature detection result. |
| [SecureSession](arkts-camera-securesession-i.md) | SecureSession** inherits from [Session]{@link camera.Session}, [Flash]{@link camera.Flash}, [AutoExposure]{@link camera.AutoExposure}, [WhiteBalance]{@link camera.WhiteBalance}, [Focus]{@link camera.Focus}, and [Zoom]{@link camera.Zoom}. It implements a secure session, which provides operations on the flash, exposure, white balance, focus, and zoom. You can call [createSession]{@link camera.CameraManager.createSession} with [SceneMode]{@link camera.SceneMode} set to **SECURE_PHOTO** to create a session in secure mode. The secure mode is designed for applications with high security requirements, such as facial recognition systems and banking services. It must be used together with the <!--RP1-->security TA<!--RP1End--> to support service scenarios where both standard preview streams and security streams are output.<!--RP2--> The security TA can verify the signature of data delivered by the server, sign images, parse and assemble TLV logic , and read, create, and operate keys. It applies to image processing.<!--RP2End--> |
| [Session](arkts-camera-session-i.md) | Session** implements a session, which saves all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput} instances required to run the camera and requests the camera to take a photo or record a video. |
| <!--DelRow-->[SettingParam](arkts-camera-settingparam-i-sys.md) | Defines the effect parameters used to preheat an image. |
| [Size](arkts-camera-size-i.md) | Describes the image dimensions. |
| <!--DelRow-->[SketchStatusData](arkts-camera-sketchstatusdata-i-sys.md) | Defines the PiP status data. |
| <!--DelRow-->[SlowMotionVideoSession](arkts-camera-slowmotionvideosession-i-sys.md) | SlowMotionVideoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorEffect Implements a slow-motion video session, which sets the parameters of the slow-motion video mode and saves all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput} instances required to run the camera. It inherits from [Session]{@link camera.Session}. > **NOTE** > > In slow-motion video mode, only preview streams and video streams can be added. |
| [SmoothZoomInfo](arkts-camera-smoothzoominfo-i.md) | Describes the smooth zoom information. |
| [Stabilization](arkts-camera-stabilization-i.md) | Stabilization** inherits from [StabilizationQuery]{@link camera.StabilizationQuery}. It provides APIs to set video stabilization. Video stabilization can be set only when the session has a recording stream ( [VideoOutput]{@link camera.VideoOutput}). Among the enums of [VideoStabilizationMode]{@link camera.VideoStabilizationMode}, the **HIGH** mode only takes effect when the resolution set in [Profile]{@link camera.Profile} is 1920×1080. |
| [StabilizationQuery](arkts-camera-stabilizationquery-i.md) | StabilizationQuery provides APIs to check the support for video stabilization. > **NOTE** > > - This interface was first introduced in API version 12. In this version, a compatibility change was made that > preserved the initial version information of inner elements. As a result, you might see outer element's @since > version number being higher than that of the inner elements. However, this discrepancy does not affect the > functionality of the interface. |
| <!--DelRow-->[TimeLapsePhotoSession](arkts-camera-timelapsephotosession-i-sys.md) | TimeLapsePhotoSession extends Session, Focus, ManualFocus, AutoExposure, ManualExposure, ManualIso, WhiteBalance, Zoom, ColorEffect Implements a time-lapse photo session, which sets the parameters of the time-lapse photo mode and saves all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput} instances required to run the camera. It inherits from [Session]{@link camera.Session}. |
| [TorchStatusInfo](arkts-camera-torchstatusinfo-i.md) | Describes the flashlight status information. |
| <!--DelRow-->[TripodDetectionResult](arkts-camera-tripoddetectionresult-i-sys.md) | TripodDetectionResult extends [SceneFeatureDetectionResult]{@link camera.SceneFeatureDetectionResult} Describes the tripod detection result. |
| <!--DelRow-->[TryAEInfo](arkts-camera-tryaeinfo-i-sys.md) | Describes the Try AE parameters. Try AE indicates that the hardware reports the status based on the ambient illumination change during time-lapse photographing. |
| <!--DelRow-->[VideoConflictFunctions](arkts-camera-videoconflictfunctions-i-sys.md) | Video Conflict Functions object. |
| <!--DelRow-->[VideoFunctions](arkts-camera-videofunctions-i-sys.md) | Video Functions object. |
| [VideoOutput](arkts-camera-videooutput-i.md) | VideoOutput** implements output information used in a video session. It inherits from [CameraOutput]{@link camera.CameraOutput}. |
| [VideoProfile](arkts-camera-videoprofile-i.md) | Describes the video configuration information. It inherits from [Profile]{@link camera.Profile}. |
| [VideoSession](arkts-camera-videosession-i.md) | VideoSession extends Session, Flash, AutoExposure, Focus, Zoom, Stabilization, ColorManagement Implements a video session, which sets the parameters of the normal video mode and saves all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput} instances required to run the camera. It inherits from [Session]{@link camera.Session}. |
| <!--DelRow-->[VideoSessionForSys](arkts-camera-videosessionforsys-i-sys.md) | Implements a video session for system applications, which sets the parameters of the normal video mode and saves all [CameraInput]{@link camera.CameraInput} and [CameraOutput]{@link camera.CameraOutput} instances required to run the camera. It inherits from [Session]{@link camera.Session}. |
| <!--DelRow-->[WhiteBalance](arkts-camera-whitebalance-i-sys.md) | WhiteBalance** inherits from [WhiteBalanceQuery]{@link camera.WhiteBalanceQuery}. It provides APIs to process white balance, including obtaining and setting the white balance mode and white balance value. |
| <!--DelRow-->[WhiteBalanceQuery](arkts-camera-whitebalancequery-i-sys.md) | WhiteBalanceQuery provides APIs to check whether a white balance mode is supported and obtain the white balance mode range supported. |
| [Zoom](arkts-camera-zoom-i.md) | Zoom extend [ZoomQuery]{@link camera.ZoomQuery} Provides APIs to process the zoom effect of a camera device, including obtaining the current zoom ratio, setting a zoom ratio, setting a zoom ratio in a smooth manner, and preparing or unpreparing for zooming. |
| <!--DelRow-->[ZoomPointInfo](arkts-camera-zoompointinfo-i-sys.md) | Describes the equivalent focal length information. |
| [ZoomQuery](arkts-camera-zoomquery-i.md) | Provides the API to obtain the equivalent focal length information list in the current mode. |
| <!--DelRow-->[ZoomRange](arkts-camera-zoomrange-i-sys.md) | Describes the zoom range. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [ImageType](arkts-camera-imagetype-t.md) | Defines the image container type, which is used to obtain full-quality images or uncompressed images (YUV). |
| [NotificationInfo](arkts-camera-notificationinfo-t.md) | Describes camera notification information. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [AutomotiveCameraPosition](arkts-camera-automotivecameraposition-e.md) | Enum for automotive camera position. |
| <!--DelRow-->[AuxiliaryStatus](arkts-camera-auxiliarystatus-e-sys.md) | Enum for auxiliary status. |
| <!--DelRow-->[AuxiliaryType](arkts-camera-auxiliarytype-e-sys.md) | Enum for auxiliary type. |
| <!--DelRow-->[BeautyType](arkts-camera-beautytype-e-sys.md) | Enumerates the beauty types. |
| [CameraConcurrentType](arkts-camera-cameraconcurrenttype-e.md) | Enumerates the camera concurrency types. |
| [CameraErrorCode](arkts-camera-cameraerrorcode-e.md) | Enumerates the camera error codes, which are returned when an API call is incorrect or the **on()** API is used to listen for the error status. |
| [CameraFormat](arkts-camera-cameraformat-e.md) | Enumerates the camera output formats. |
| [CameraPosition](arkts-camera-cameraposition-e.md) | Enumerates the camera positions. |
| [CameraStatus](arkts-camera-camerastatus-e.md) | Enumerates the camera statuses. |
| [CameraType](arkts-camera-cameratype-e.md) | Enumerates the camera types. |
| <!--DelRow-->[ColorEffectType](arkts-camera-coloreffecttype-e-sys.md) | Enumerates the color effect types. |
| <!--DelRow-->[ColorReservationType](arkts-camera-colorreservationtype-e-sys.md) | Enumerates the color reservation types. |
| [ConnectionType](arkts-camera-connectiontype-e.md) | Enumerates the camera connection types. |
| [ControlCenterEffectType](arkts-camera-controlcentereffecttype-e.md) | Enumerates the effect types supported by the camera controller. |
| <!--DelRow-->[DeferredDeliveryImageType](arkts-camera-deferreddeliveryimagetype-e-sys.md) | Enumerates the deferred delivery image types. In deferred delivery, photo and video capture are divided into two phases. In the first phase, an image or video is output to users at a relatively fast speed. In the second phase, a higher-resolution image or video is output again after optimization processing. |
| <!--DelRow-->[DepthDataAccuracy](arkts-camera-depthdataaccuracy-e-sys.md) | Describes the accuracy of depth data. |
| <!--DelRow-->[DepthDataQualityLevel](arkts-camera-depthdataqualitylevel-e-sys.md) | Enumerates the quality levels of depth data. |
| <!--DelRow-->[EffectSuggestionType](arkts-camera-effectsuggestiontype-e-sys.md) | Enum for effect suggestion. |
| <!--DelRow-->[Emotion](arkts-camera-emotion-e-sys.md) | Enumerates the types of emotions in the detected human face information. |
| <!--DelRow-->[ExposureMeteringMode](arkts-camera-exposuremeteringmode-e-sys.md) | Enumerates the exposure metering modes. |
| [ExposureMode](arkts-camera-exposuremode-e.md) | Enumerates the exposure modes. |
| [ExposureState](arkts-camera-exposurestate-e.md) | Enumerates the exposure states. |
| [FlashMode](arkts-camera-flashmode-e.md) | Enumerates the flash modes. |
| [FlashState](arkts-camera-flashstate-e.md) | Enumerates the flash states. |
| <!--DelRow-->[FocusDrivenType](arkts-camera-focusdriventype-e-sys.md) | Enumerates the focus drive types. |
| [FocusMode](arkts-camera-focusmode-e.md) | Enumerates the focus modes. |
| <!--DelRow-->[FocusRangeType](arkts-camera-focusrangetype-e-sys.md) | Enumerates the focus range types. |
| [FocusState](arkts-camera-focusstate-e.md) | Enumerates the focus states. |
| <!--DelRow-->[FocusTrackingMode](arkts-camera-focustrackingmode-e-sys.md) | Enumerates the focus tracking modes. |
| [FoldStatus](arkts-camera-foldstatus-e.md) | Enumerates the fold states available for a fordable device. |
| <!--DelRow-->[HostDeviceType](arkts-camera-hostdevicetype-e-sys.md) | Enumerates the remote camera types. |
| [ImageRotation](arkts-camera-imagerotation-e.md) | Enumerates the image rotation angles. |
| <!--DelRow-->[LightPaintingType](arkts-camera-lightpaintingtype-e-sys.md) | Enumerates the types of light painting shutter modes. |
| <!--DelRow-->[LightStatus](arkts-camera-lightstatus-e-sys.md) | Enumerates the camera light statuses, which are obtained by calling VideoSessionForSys. [on('lightStatusChange')]{@link camera.VideoSession.on(type: 'lightStatusChange', callback: AsyncCallback<LightStatus>)}. |
| [MetadataObjectType](arkts-camera-metadataobjecttype-e.md) | Enumerates the types of metadata objects used for camera detection. |
| [NotificationName](arkts-camera-notificationname-e.md) | Enumerates the notification names. |
| [OISAxes](arkts-camera-oisaxes-e.md) | Enumerates the OIS axes. |
| [OISMode](arkts-camera-oismode-e.md) | Enumerates the optical image stabilization (OIS) mode. |
| [PhotoQualityPrioritization](arkts-camera-photoqualityprioritization-e.md) | Enumerates the photo quality prioritization strategies. |
| <!--DelRow-->[PolicyType](arkts-camera-policytype-e-sys.md) | Enumerates the policy types. |
| <!--DelRow-->[PortraitEffect](arkts-camera-portraiteffect-e-sys.md) | Enumerates the portrait effects. |
| <!--DelRow-->[PortraitThemeType](arkts-camera-portraitthemetype-e-sys.md) | Enumerates the camera portrait theme types. |
| [PreconfigRatio](arkts-camera-preconfigratio-e.md) | Enumerates the preconfigured aspect ratios. |
| [PreconfigType](arkts-camera-preconfigtype-e.md) | Enumerates the preconfigured resolution types. |
| [ProximityStateForFocus](arkts-camera-proximitystateforfocus-e.md) | Enumer proximity states for focus. |
| [QualityLevel](arkts-camera-qualitylevel-e.md) | Enumerates the image quality levels. |
| [QualityPrioritization](arkts-camera-qualityprioritization-e.md) | Enumerates the priority levels for video recording quality. |
| <!--DelRow-->[RestoreParamType](arkts-camera-restoreparamtype-e-sys.md) | Enumerates the types of the parameters used for prelaunch. |
| <!--DelRow-->[SceneFeatureType](arkts-camera-scenefeaturetype-e-sys.md) | Enumerates the scene features. |
| [SceneMode](arkts-camera-scenemode-e.md) | Enumerates the camera scene modes. |
| [SensorColorFilterArrangement](arkts-camera-sensorcolorfilterarrangement-e.md) | Enumerates the arrangement modes of the sensor color filter. |
| <!--DelRow-->[SlowMotionStatus](arkts-camera-slowmotionstatus-e-sys.md) | Enumerates the slow-motion states. |
| [SmoothZoomMode](arkts-camera-smoothzoommode-e.md) | Enumerates the smooth zoom modes. |
| [SystemPressureLevel](arkts-camera-systempressurelevel-e.md) | Enumerates the system pressure levels. |
| <!--DelRow-->[TimeLapsePreviewType](arkts-camera-timelapsepreviewtype-e-sys.md) | Enumerates the time-lapse preview types, which affect the shooting algorithm. |
| <!--DelRow-->[TimeLapseRecordState](arkts-camera-timelapserecordstate-e-sys.md) | Enumerates the time-lapse recording states. |
| [TorchMode](arkts-camera-torchmode-e.md) | Enumerates the flashlight modes. |
| <!--DelRow-->[TripodStatus](arkts-camera-tripodstatus-e-sys.md) | Enumerates the tripod statuses. |
| <!--DelRow-->[UsageType](arkts-camera-usagetype-e-sys.md) | Enum for usage type used in capture session. |
| [VideoCodecType](arkts-camera-videocodectype-e.md) | Enumerates the video codec types. |
| <!--DelRow-->[VideoMetaType](arkts-camera-videometatype-e-sys.md) | Video meta type. |
| [VideoStabilizationMode](arkts-camera-videostabilizationmode-e.md) | Enumerates the video stabilization modes. |
| <!--DelRow-->[WhiteBalanceMode](arkts-camera-whitebalancemode-e-sys.md) | Enumerates the white balance modes. |

