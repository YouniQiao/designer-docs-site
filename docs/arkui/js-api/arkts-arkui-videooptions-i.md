# VideoOptions

Defines the options of the **Video** component.

**Since:** 7

<!--Device-unnamed-declare interface VideoOptions--><!--Device-unnamed-declare interface VideoOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## controller

```TypeScript
controller?: VideoController
```

Video controller to control the video playback status.

**Type:** VideoController

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoOptions-controller?: VideoController--><!--Device-VideoOptions-controller?: VideoController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## controllerAsync

```TypeScript
controllerAsync?: VideoControllerAsync
```

controllerAsync of video.

**Type:** VideoControllerAsync

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-VideoOptions-controllerAsync?: VideoControllerAsync--><!--Device-VideoOptions-controllerAsync?: VideoControllerAsync-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## currentProgressRate

```TypeScript
currentProgressRate?: number | string | PlaybackSpeed
```

Video playback speed.
> **NOTE**  
>  
> The value of the number type can only be **0.75**, **1.0**, **1.25**, **1.75**, or **2.0**. Values **0.5**,  
> **1.5**, **3**, **0.25**, and **0.125** are supported since API version 22.

For the string type, numeric string values, for example, **0.75**, **1.0**, **1.25**, **1.75**, and **2.0**, are supported. Values **"0.5"**, **"1.5"**, **"3"**, **"0.25"**, and **"0.125"** are supported since API version 22.

Other values, for example, **"abc"** or **"1.5+1.5"**, are considered as invalid values.

Default value: 1.0 | PlaybackSpeed.Speed_Forward_1_00_X

If an invalid value is passed, the default value will be used.

**Type:** number \| string \| PlaybackSpeed

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoOptions-currentProgressRate?: number | string | PlaybackSpeed--><!--Device-VideoOptions-currentProgressRate?: number | string | PlaybackSpeed-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## imageAIOptions

```TypeScript
imageAIOptions?: ImageAIOptions
```

AI image analysis options. You can configure the analysis type or bind an analyzer controller through this parameter.

**Type:** ImageAIOptions

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-VideoOptions-imageAIOptions?: ImageAIOptions--><!--Device-VideoOptions-imageAIOptions?: ImageAIOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## posterOptions

```TypeScript
posterOptions?: PosterOptions
```

Display options for the first frame of the video.

**Type:** PosterOptions

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-VideoOptions-posterOptions?: PosterOptions--><!--Device-VideoOptions-posterOptions?: PosterOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## previewUri

```TypeScript
previewUri?: string | PixelMap | Resource
```

Path of the preview image displayed before the video playback starts. By default, no preview image is displayed.

The string type can be used to load network images and local images.

- URLs are supported for loading online images.  
- Relative paths are supported for loading local images, for example, **previewUri: "common/test.jpg"**. When using an image referenced using a relative path, the component cannot be called across bundles or modules.  
- Strings with the **file://** prefix, that is,[application sandbox URIs](../../apis-core-file-kit/arkts-apis/arkts-corefile-fileuri-fileuri-c.md#constructor):**file://`<bundleName>`/`<sandboxPath>`**, are supported. They are used to access resources in the application sandbox path. Ensure that the application has the read permission to the files in the specified path.

The Resource type allows cross-package and cross-module access to resource files.

- Resources in the **rawfile** folder are supported, which means that you can reference image files with **$rawfile**.  
- $r can be used to reference images in system resources or application resources.

The default value is an empty string.

If an invalid value is passed, the default value will be used.

**Type:** string \| PixelMap \| Resource

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoOptions-previewUri?: string | PixelMap | Resource--><!--Device-VideoOptions-previewUri?: string | PixelMap | Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## src

```TypeScript
src?: string | Resource
```

Video source, which can be either a local or a network video.

The Resource type allows cross-package and cross-module access to resource files and is commonly used for accessing local videos.

- Only resources in the rawfile folder are supported, which means that you can reference video files only with **$rawfile**.

The string type is used for loading local videos and, more frequently, network videos.

- Network video URLs are supported.  
- Strings with the **file://** prefix, that is,[application sandbox URIs](../../apis-core-file-kit/arkts-apis/arkts-corefile-fileuri-fileuri-c.md#constructor):**file://`<bundleName>`/`<sandboxPath>`**, are supported. They are used to access resources in the application sandbox path. Ensure that the application has the read permission to the files in the specified path.

The default value is an empty string.

If an invalid value is passed, the default value will be used.
> **NOTE**  
>  
> The supported video formats are MP4, MKV, and TS.

**Type:** string \| Resource

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoOptions-src?: string | Resource--><!--Device-VideoOptions-src?: string | Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

