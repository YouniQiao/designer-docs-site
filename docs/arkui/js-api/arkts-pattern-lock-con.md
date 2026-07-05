# Constants

## PatternLock

```TypeScript
declare const PatternLock: PatternLockInterface
```

图案密码锁组件，以九宫格图案的方式输入密码，用于密码验证场景。手指在PatternLock组件区域按下时开始进入输入状态，手指离开屏幕时结束输入状态完成密码输入。 > **说明：** > - 如果开发者有其他功能需求，可以使用[自定义组件](docroot://ui/state-management/arkts-create-custom-components.md)。例如自定义组件<!--RP1--> > [CustomPatternLock](https://gitcode.com/openharmony/applications_app_samples/tree/master/code/UI/CustomPatternLock) > <!--RP1End-->，通过[Canvas]canvas组件实现了图案密码锁功能，开发者可在此基础上自行进行功能扩展。 ###### 子组件 无

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## PatternLockInstance

```TypeScript
declare const PatternLockInstance: PatternLockAttribute
```

定义PatternLock组件实例。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

