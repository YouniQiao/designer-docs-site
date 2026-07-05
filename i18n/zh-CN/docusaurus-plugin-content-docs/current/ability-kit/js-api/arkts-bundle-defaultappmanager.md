# @ohos.bundle.defaultAppManager

本模块提供查询默认应用的能力，支持查询当前应用是否是默认应用。

**起始版本：** 9

**系统能力：** SystemCapability.BundleManager.BundleFramework.DefaultApp

## 导入模块

```TypeScript
import { defaultAppManager } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getDefaultApplication](arkts-defaultappmanager-getdefaultapplication-f-sys.md#getDefaultApplication-1) | 根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型获取默认应用信息。使用 callback异步回调。 |
| <!--DelRow-->[getDefaultApplication](arkts-defaultappmanager-getdefaultapplication-f-sys.md#getDefaultApplication-2) | 根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型获取默认应用信息。使用 callback异步回调。 |
| <!--DelRow-->[getDefaultApplication](arkts-defaultappmanager-getdefaultapplication-f-sys.md#getDefaultApplication-3) | 根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型获取默认应用信息。使用Promise 异步回调。 |
| <!--DelRow-->[getDefaultApplicationSync](arkts-defaultappmanager-getdefaultapplicationsync-f-sys.md#getDefaultApplicationSync-1) | 以同步方法根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型获取默认应用信息，使用 BundleInfo返回结果。 |
| [isDefaultApplication](arkts-defaultappmanager-isdefaultapplication-f.md#isDefaultApplication-1) | 根据系统已定义的应用类型或者[UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}类型判断当前应用是否是该类型的默认应用。使用 callback异步回调。 |
| [isDefaultApplication](arkts-defaultappmanager-isdefaultapplication-f.md#isDefaultApplication-2) | 根据系统已定义的应用类型或者[UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型判断当前 应用是否是该类型的默认应用。使用Promise异步回调。 |
| [isDefaultApplicationSync](arkts-defaultappmanager-isdefaultapplicationsync-f.md#isDefaultApplicationSync-1) | 以同步方法根据系统已定义的应用类型或者[UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}类型判断当前应用是否是该类型的默认 应用，使用boolean形式返回结果。 |
| <!--DelRow-->[resetDefaultApplication](arkts-defaultappmanager-resetdefaultapplication-f-sys.md#resetDefaultApplication-1) | 根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型重置默认应用。使用callback异 步回调。 |
| <!--DelRow-->[resetDefaultApplication](arkts-defaultappmanager-resetdefaultapplication-f-sys.md#resetDefaultApplication-2) | 根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型重置默认应用。使用callback异 步回调。 |
| <!--DelRow-->[resetDefaultApplication](arkts-defaultappmanager-resetdefaultapplication-f-sys.md#resetDefaultApplication-3) | 根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型重置默认应用。使用Promise异步 回调。 |
| <!--DelRow-->[resetDefaultApplicationSync](arkts-defaultappmanager-resetdefaultapplicationsync-f-sys.md#resetDefaultApplicationSync-1) | 以同步方法根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型重置默认应用。 |
| <!--DelRow-->[setDefaultApplication](arkts-defaultappmanager-setdefaultapplication-f-sys.md#setDefaultApplication-1) | 根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型设置默认应用。使用callback异 步回调。 |
| <!--DelRow-->[setDefaultApplication](arkts-defaultappmanager-setdefaultapplication-f-sys.md#setDefaultApplication-2) | 根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型设置默认应用。使用callback异 步回调。 |
| <!--DelRow-->[setDefaultApplication](arkts-defaultappmanager-setdefaultapplication-f-sys.md#setDefaultApplication-3) | 根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型设置默认应用。使用Promise异步 回调。 |
| <!--DelRow-->[setDefaultApplicationForAppClone](arkts-defaultappmanager-setdefaultapplicationforappclone-f-sys.md#setDefaultApplicationForAppClone-1) | 以同步方法将分身应用设置为打开相应type类型的默认应用。 |
| <!--DelRow-->[setDefaultApplicationSync](arkts-defaultappmanager-setdefaultapplicationsync-f-sys.md#setDefaultApplicationSync-1) | 以同步方法根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者 [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型设置默认应用。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [ApplicationType](arkts-defaultappmanager-applicationtype-e.md) | 默认应用的应用类型。 |

