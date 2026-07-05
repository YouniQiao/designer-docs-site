# distortion_component

## distortion_component

```TypeScript
distortion_component(options?: DistortionComponentOptions)
```

Creates a DistortionComponent with content.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | DistortionComponentOptions | 否 |  |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[DistortionComponentAttribute](arkts-distortioncomponentattribute-c.md) | Defines the DistortionComponent attribute functions |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[DistortionComponentInterface](arkts-distortioncomponentinterface-i.md) | Create DistortionComponent. |
| <!--DelRow-->[DistortionComponentOptions](arkts-distortioncomponentoptions-i.md) | 空间扭曲形变选项。 |
| <!--DelRow-->[DistortionParam](arkts-distortionparam-i.md) | 空间扭曲形变参数。 > **说明：** > > - 四个角的坐标可以按照如下坐标系设置。一个组件，左上角位置为[0, 0]，右上角位置为[1, 0]，左下角位置为[0, 1]，右下角位置为[1, 1]。 > > - 如bottomLeft属性设置为[0.5, 0.5]，则表示左下角形变到组件中心点的位置，产生对应的形变效果。 > > - 设置四个角坐标位置时请符合空间感逻辑。如topLeft = [0, 0.7]，bottomLeft = [0, 0.2]，左上角的位置低于左下角的位置，违背空间感的逻辑，可能导致渲染异常。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[Vector2](arkts-vector2-t.md) | 二维向量类型，包含x和y坐标，表示位置坐标关系。 |
| <!--DelRow-->[Vector4](arkts-vector4-t.md) | 四维向量类型，包含x、y、z、w，各数值表示桶形形变程度。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[DistortionComponent](arkts-distortion-component-con-sys.md#DistortionComponent) | Defines DistortionComponent. |

