# SceneResources

## 汇总

### 接口

| 名称 | 描述 |
| --- | --- |
| [Animation](arkts-animation-i.md) | 动画资源. |
| [Blend](arkts-blend-i.md) | 混合接口. |
| [Effect](arkts-effect-i.md) | 特效资源. |
| [Environment](arkts-environment-i.md) | 环境资源. |
| [Image](arkts-image-i.md) | 图像资源. |
| [ImageStream](arkts-imagestream-i.md) | 图像流资源. |
| [Material](arkts-material-i.md) | 材质资源. |
| [MaterialProperty](arkts-materialproperty-i.md) | 材质属性接口. |
| [Mesh](arkts-mesh-i.md) | 网格节点拥有的网格实例 |
| [MeshResource](arkts-meshresource-i.md) | 几何节点的网络数据描述资源 |
| [MetallicRoughnessMaterial](arkts-metallicroughnessmaterial-i.md) | 基于物理的金属粗糙度材质资源. |
| [Morpher](arkts-morpher-i.md) | 定义用于指定节点几何体形变目标的Morpher接口. |
| [OcclusionMaterial](arkts-occlusionmaterial-i.md) | 遮挡材质资源 |
| [RenderSort](arkts-rendersort-i.md) | 渲染排序层。在渲染槽中，层可以定义排序层顺序。 可用值为0-63（0最先，63最后）。默认id值为32。 典型用法：1. 将渲染排序层设置为对使用深度测试但未写入深度的对象进行渲染。 2. 始终首先渲染角色和/或相机对象以剔除大部分视图。 3. 对平面层进行排序。 |
| [Sampler](arkts-sampler-i.md) | 采样器接口 |
| [SceneResource](arkts-sceneresource-i.md) | 定义被其他3D资源扩展的场景资源. |
| [Shader](arkts-shader-i.md) | 着色器资源. |
| [ShaderMaterial](arkts-shadermaterial-i.md) | 着色器材质资源. |
| [SubMesh](arkts-submesh-i.md) | 子网格资源. |
| [UnlitMaterial](arkts-unlitmaterial-i.md) | 无光照材质资源 |
| <!--DelRow-->[UnlitShadowAlphaMaterial](arkts-unlitshadowalphamaterial-i.md) | 无光照阴影透明度材质资源 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [CullMode](arkts-cullmode-e.md) | PBR材质剔除模式枚举. |
| [EnvironmentBackgroundType](arkts-environmentbackgroundtype-e.md) | 环境背景类型枚举. |
| [MaterialType](arkts-materialtype-e.md) | 材质类型枚举. |
| [PolygonMode](arkts-polygonmode-e.md) | 多边形模式枚举. |
| [SamplerAddressMode](arkts-sampleraddressmode-e.md) | 采样器的寻址模式 |
| [SamplerFilter](arkts-samplerfilter-e.md) | 采样器过滤模式 |
| [SceneResourceType](arkts-sceneresourcetype-e.md) | 场景资源类型枚举. |

