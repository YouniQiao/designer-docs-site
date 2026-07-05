# image_span

定义ImageSpan组件实例。

## image_span

```TypeScript
image_span(value: ResourceStr | PixelMap)
```

定义ImageSpan组件构造函数。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ResourceStr \| PixelMap | 是 | 图片的数据源，支持本地图片和网络图片。 当使用相对路径引用图片资源时，例如`ImageSpan("common/test.jpg")`，不  支持跨包/跨模块调用该ImageSpan组件，建议使用`$r`方式来管理需全局使用的图片资源。 - 支持的图片格式包括png、jpg、bmp、svg、gif和heif。 - 支持`Base64`字符串。格式  `data:image/[png\|jpeg\|bmp\|webp\|heif];base64,[base64 data]`，其中`[base64 data]`为`Base64`字符串数据。 - 支持file://data  /storage路径前缀的字符串，用于读取本应用安装目录下file文件夹下的图片资源。需要保证目录包路径下的文件有可读权限。 |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [ImageSpanAttribute](arkts-imagespanattribute-c.md) | 属性继承自[BaseSpan]{@link BaseSpan}，通用属性方法支持[尺寸设置]{@link common}、[背景设置]{@link common}、[边框设置]{@link common}。 通用事件仅支持[点击控制事件]{@link common}。还支持以下事件： |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ImageLoadResult](arkts-imageloadresult-i.md) | 图片数据加载成功和解码成功触发回调时返回的对象。 |
| [ImageSpanInterface](arkts-imagespaninterface-i.md) | [Text]{@link text}、[ContainerSpan]{@link container_span}组件的子组件，用于显示行内图片。 > **说明：** > - 本模块接口仅可在Stage模型下使用。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [ImageCompleteCallback](arkts-imagecompletecallback-t.md) | 图片加载成功和解码成功时触发的回调。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [ImageSpan](arkts-image-span-con.md#ImageSpan) | [Text]{@link text}、[ContainerSpan]{@link container_span}组件的子组件，用于显示行内图片。 > **说明：** > - 本模块接口仅可在Stage模型下使用。 ###### 子组件 无 |
| [ImageSpanInstance](arkts-image-span-con.md#ImageSpanInstance) | 定义ImageSpan组件实例。 |

