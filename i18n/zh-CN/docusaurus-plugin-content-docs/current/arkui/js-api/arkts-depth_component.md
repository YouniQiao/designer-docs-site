# depth_component

Defines DepthComponent Component instance.

## depth_component

```TypeScript
depth_component(background: ResourceStr | PixelMap, options?: DepthComponentOptions)
```

Defines the DepthComponent constructor.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| background | ResourceStr \| PixelMap | 是 | Background resource or PixelMap (required). |
| options | DepthComponentOptions | 否 |  |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[DepthComponentAttribute](arkts-depthcomponentattribute-c.md) | Style the DepthComponent. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[CameraBufferCrop](arkts-camerabuffercrop-i.md) | Camera buffer crop parameters. |
| <!--DelRow-->[CropOffset](arkts-cropoffset-i.md) | 2D offset for crop frame. |
| <!--DelRow-->[DepthCameraParams](arkts-depthcameraparams-i.md) | Camera parameters struct. |
| <!--DelRow-->[DepthComponentCompleteEvent](arkts-depthcomponentcompleteevent-i.md) | Information about the background resource loaded successfully. |
| <!--DelRow-->[DepthComponentErrorEvent](arkts-depthcomponenterrorevent-i.md) | Information about the background resource loading error. |
| <!--DelRow-->[DepthComponentInterface](arkts-depthcomponentinterface-i.md) | DepthComponentInterface |
| <!--DelRow-->[DepthComponentOptions](arkts-depthcomponentoptions-i.md) | Defines the options of DepthComponent. |
| <!--DelRow-->[DepthLightParams](arkts-depthlightparams-i.md) | Lighting parameters struct. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[DepthSpaceType](arkts-depthspacetype-e.md) | Depth space type enumeration. |

### 类型

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[DepthComponentCompleteCallback](arkts-depthcomponentcompletecallback-t.md) | Callback invoked when the background resource is loaded successfully. |
| <!--DelRow-->[DepthComponentErrorCallback](arkts-depthcomponenterrorcallback-t.md) | Callback invoked when an error occurs during background resource loading. |
| <!--DelRow-->[DepthMapCallback](arkts-depthmapcallback-t.md) | Callback invoked when the depth map resource is loaded. |

### 常量

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[DepthComponent](arkts-depth-component-con-sys.md#DepthComponent) | Defines DepthComponent Component. |
| <!--DelRow-->[DepthComponentInstance](arkts-depth-component-con-sys.md#DepthComponentInstance) | Defines DepthComponent Component instance. |

