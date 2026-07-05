# pattern_lock

定义PatternLock组件实例。

## pattern_lock

```TypeScript
pattern_lock(controller?: PatternLockController)
```

创建图案密码锁组件。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| controller | PatternLockController | 否 |  |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [PatternLockAttribute](arkts-patternlockattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性。 除支持[通用事件]{@link common}外，还支持以下事件。 |
| [PatternLockController](arkts-patternlockcontroller-c.md) | PatternLock组件的控制器，用于重置组件状态和设置图案密码的正确或错误状态。 ###### 导入对象 ```ts patternLockController: PatternLockController = new PatternLockController() ``` |

### 接口

| 名称 | 描述 |
| --- | --- |
| [CircleStyleOptions](arkts-circlestyleoptions-i.md) | 圆环样式的参数说明。 |
| [PatternLockInterface](arkts-patternlockinterface-i.md) | 图案密码锁组件，以九宫格图案的方式输入密码，用于密码验证场景。手指在PatternLock组件区域按下时开始进入输入状态，手指离开屏幕时结束输入状态完成密码输入。 > **说明：** > - 如果开发者有其他功能需求，可以使用[自定义组件](docroot://ui/state-management/arkts-create-custom-components.md)。例如自定义组件<!--RP1--> > [CustomPatternLock](https://gitcode.com/openharmony/applications_app_samples/tree/master/code/UI/CustomPatternLock) > <!--RP1End-->，通过[Canvas]{@link canvas}组件实现了图案密码锁功能，开发者可在此基础上自行进行功能扩展。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [PatternLockChallengeResult](arkts-patternlockchallengeresult-e.md) | 图案密码状态。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [PatternLock](arkts-pattern-lock-con.md#PatternLock) | 图案密码锁组件，以九宫格图案的方式输入密码，用于密码验证场景。手指在PatternLock组件区域按下时开始进入输入状态，手指离开屏幕时结束输入状态完成密码输入。 > **说明：** > - 如果开发者有其他功能需求，可以使用[自定义组件](docroot://ui/state-management/arkts-create-custom-components.md)。例如自定义组件<!--RP1--> > [CustomPatternLock](https://gitcode.com/openharmony/applications_app_samples/tree/master/code/UI/CustomPatternLock) > <!--RP1End-->，通过[Canvas]{@link canvas}组件实现了图案密码锁功能，开发者可在此基础上自行进行功能扩展。 ###### 子组件 无 |
| [PatternLockInstance](arkts-pattern-lock-con.md#PatternLockInstance) | 定义PatternLock组件实例。 |

