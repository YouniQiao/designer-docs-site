# @ohos.app.ability.childProcessManager

childProcessManager模块提供子进程管理能力，支持子进程创建和启动操作。 创建的子进程会随着父进程的退出而退出，无法脱离父进程独立运行。

**起始版本：** 11

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## 导入模块

```TypeScript
import { childProcessManager } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [startArkChildProcess](arkts-childprocessmanager-startarkchildprocess-f.md#startArkChildProcess-1) | 启动[ArkTS子进程](docroot://application-models/ability-terminology.md#arkts子进程)。使用Promise异步回调。 该接口在Tablet、PC/2in1中可正常调用，在其他设备类型中返回801错误码。 > **说明：** > > 调用该接口创建的子进程不会继承父进程资源，子进程创建成功会返回子进程pid，然后执行子进程的 > [ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess#onStart}函数。 > [ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess#onStart}函数执行完后子进程不会自动销毁，需要子进程调用 > [process.abort]{@link @ohos.process:process.abort}销毁。调用该接口的进程销毁后，所创建的子进程也会一并销毁。 |
| [startChildProcess](arkts-childprocessmanager-startchildprocess-f.md#startChildProcess-1) | 启动[ArkTS子进程](docroot://application-models/ability-terminology.md#arkts子进程)。使用Promise异步回调。 该接口在Tablet、PC/2in1中可正常调用，在其他设备类型中返回16000061错误码。 > **说明：** > > 调用该接口创建子进程成功会返回子进程pid，然后执行子进程的[ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess#onStart}函数 > ，[ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess#onStart}函数执行完后子进程会自动销毁。 > > 调用该接口创建的子进程不支持异步ArkTS API调用，仅支持同步ArkTS API调用。 |
| [startChildProcess](arkts-childprocessmanager-startchildprocess-f.md#startChildProcess-2) | 启动[ArkTS子进程](docroot://application-models/ability-terminology.md#arkts子进程)。使用callback异步回调。 该接口在Tablet、PC/2in1中可正常调用，在其他设备类型中返回16000061错误码。 > **说明：** > > 调用该接口创建子进程成功会返回子进程pid，然后执行子进程的[ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess#onStart}函数 > ，[ChildProcess.onStart]{@link @ohos.app.ability.ChildProcess:ChildProcess#onStart}函数执行完后子进程会自动销毁。 > > 调用该接口创建的子进程不支持异步ArkTS API调用，仅支持同步ArkTS API调用。 |
| [startNativeChildProcess](arkts-childprocessmanager-startnativechildprocess-f.md#startNativeChildProcess-1) | 启动[Native子进程](docroot://application-models/ability-terminology.md#native子进程)。使用Promise异步回调。 该接口在Tablet、PC/2in1中可正常调用，在其他设备类型中返回801错误码。 > **说明：** > > 调用该接口创建的子进程不会继承父进程资源，子进程创建成功会返回子进程pid，然后加载参数中指定的动态链接库文件并执行子进程的入口函数，入口函数执行完后子进程会自动销毁。调用该接口的进程销毁后，所创建的子进程也会一并销毁。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [StartMode](arkts-childprocessmanager-startmode-e.md) | 子进程启动模式枚举。 |

