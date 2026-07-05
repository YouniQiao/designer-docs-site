# @ohos.app.ability.autoStartupManager

autoStartupManager模块提供获取自身应用的开机自启状态。

**起始版本：** 11

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { autoStartupManager } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[cancelApplicationAutoStartup](arkts-autostartupmanager-cancelapplicationautostartup-f-sys.md#cancelApplicationAutoStartup-1) | 取消应用组件开机自启动。使用callback异步回调。 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。 |
| <!--DelRow-->[cancelApplicationAutoStartup](arkts-autostartupmanager-cancelapplicationautostartup-f-sys.md#cancelApplicationAutoStartup-2) | 取消应用组件开机自启动。使用Promise异步回调。 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。 |
| [getAutoStartupStatusForSelf](arkts-autostartupmanager-getautostartupstatusforself-f.md#getAutoStartupStatusForSelf-1) | 获取当前应用的开机自启动状态。使用Promise异步回调。 该接口仅在Phone、PC/2in1、Tablet和Wearable设备中可正常调用，在其他设备中返回801错误码。 |
| [isAutoStartupSupported](arkts-autostartupmanager-isautostartupsupported-f.md#isAutoStartupSupported-1) | 检查当前设备是否支持开机自启动。 > **说明：** > > 建议在调用[autoStartupManager.getAutoStartupStatusForSelf]{@link autoStartupManager.getAutoStartupStatusForSelf} 之前，先调 > 用该接口检查设备能力。如果返回false，则表明当前设备不支持开机自启动。 |
| <!--DelRow-->[off](arkts-autostartupmanager-off-f-sys.md#off-1) | 注销监听应用组件开机自启动状态变化的回调函数。 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。 |
| <!--DelRow-->[offSystemAutoStartup](arkts-autostartupmanager-offsystemautostartup-f-sys.md#offSystemAutoStartup-1) | 注销监听应用组件开机自启动状态变化的回调函数。 |
| <!--DelRow-->[on](arkts-autostartupmanager-on-f-sys.md#on-1) | 注册监听应用组件开机自启动状态变化的回调函数。 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。 |
| <!--DelRow-->[onSystemAutoStartup](arkts-autostartupmanager-onsystemautostartup-f-sys.md#onSystemAutoStartup-1) | 注册监听应用组件开机自启动状态变化的回调函数。 |
| <!--DelRow-->[queryAllAutoStartupApplications](arkts-autostartupmanager-queryallautostartupapplications-f-sys.md#queryAllAutoStartupApplications-1) | 查询自启动应用组件信息。使用callback异步回调。 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。 |
| <!--DelRow-->[queryAllAutoStartupApplications](arkts-autostartupmanager-queryallautostartupapplications-f-sys.md#queryAllAutoStartupApplications-2) | 查询自启动应用组件信息。使用Promise异步回调。 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。 |
| <!--DelRow-->[setApplicationAutoStartup](arkts-autostartupmanager-setapplicationautostartup-f-sys.md#setApplicationAutoStartup-1) | 设置应用组件开机自启动。使用callback异步回调。 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。 |
| <!--DelRow-->[setApplicationAutoStartup](arkts-autostartupmanager-setapplicationautostartup-f-sys.md#setApplicationAutoStartup-2) | 设置应用组件开机自启动。使用Promise异步回调。 从API version 21开始，该接口仅在Phone、2in1、Tablet和Wearable设备中正常调用，在其他设备上返回16000050错误码。 从API version 18开始，该接口仅在2in1和Wearable设备中可正常调用，在其他设备上返回16000050错误码。 对于API version 18之前版本，该接口仅在2in1设备中可正常调用，在其他设备上返回16000050错误码。 |

