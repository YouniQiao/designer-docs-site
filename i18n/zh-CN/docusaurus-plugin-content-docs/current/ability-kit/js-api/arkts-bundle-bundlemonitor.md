# @ohos.bundle.bundleMonitor

本模块提供监听应用安装，卸载，更新的能力。

**起始版本：** 9

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { bundleMonitor } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[off](arkts-bundlemonitor-off-f-sys.md#off-1) | 注销监听应用的安装，卸载，更新。使用callback异步回调。 |
| <!--DelRow-->[offAdd](arkts-bundlemonitor-offadd-f-sys.md#offAdd-1) | 注销监听应用的安装。 |
| <!--DelRow-->[offRemove](arkts-bundlemonitor-offremove-f-sys.md#offRemove-1) | 注销监听应用的卸载。 |
| <!--DelRow-->[offUpdate](arkts-bundlemonitor-offupdate-f-sys.md#offUpdate-1) | 注销监听应用的更新。 |
| <!--DelRow-->[on](arkts-bundlemonitor-on-f-sys.md#on-1) | 注册监听应用的安装、卸载、更新。使用callback异步回调。 |
| <!--DelRow-->[onAdd](arkts-bundlemonitor-onadd-f-sys.md#onAdd-1) | 注册监听应用的安装。 |
| <!--DelRow-->[onRemove](arkts-bundlemonitor-onremove-f-sys.md#onRemove-1) | 注册监听应用的卸载。 |
| <!--DelRow-->[onUpdate](arkts-bundlemonitor-onupdate-f-sys.md#onUpdate-1) | 注册监听应用的更新。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[BundleChangedInfo](arkts-bundlemonitor-bundlechangedinfo-i-sys.md) | 应用变更信息。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[BundleChangedEvent](arkts-bundlemonitor-bundlechangedevent-t-sys.md) | 监听的事件类型。 |

