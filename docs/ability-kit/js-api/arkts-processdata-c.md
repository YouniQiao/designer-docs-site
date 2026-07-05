# ProcessData

进程数据的对象定义。使用接口 [appManager.on('applicationState')](arkts-appmanager-on-f.md#on-1) 注册生命周期变化监听后，当应用或组件的生命周期变化时，系统通过[ApplicationStateObserver]./application/ApplicationStateObserver的 [onProcessCreated](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronprocesscreated) 等方法回调给开发者。

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## uid

```TypeScript
uid: int
```

应用的uid。

**Type:** int

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## isContinuousTask

```TypeScript
isContinuousTask: boolean
```

是否为长时任务，true表示是，false表示不是。

**Type:** boolean

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## isKeepAlive

```TypeScript
isKeepAlive: boolean
```

是否为常驻进程，true表示是，false表示不是

**Type:** boolean

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## bundleName

```TypeScript
bundleName: string
```

应用包名。

**Type:** string

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## pid

```TypeScript
pid: int
```

进程ID。

**Type:** int

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## state

```TypeScript
state: int
```

应用的状态，取值及对应的状态为： 0 - 初始化状态，进程正在初始化， 1 - 就绪状态，进程已初始化完毕， 2 - 前台， 4 - 后台， 5 - 已终止。

**Type:** int

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

