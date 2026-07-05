# TouchPadSwipeOptions

描述触控板滑动手势选项的信息。

**起始版本：** 18

**系统能力：** SystemCapability.Test.UiTest

## speed

```TypeScript
speed?: number
```

滑动速度。 <br>取值范围：[200, 40000] <br>单位：px/s。 <br>如果为负数则抛出错误码17000007。 <br>默认值：2000

**类型：** number

**起始版本：** 18

**元服务API：** 从API版本18开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

## stay

```TypeScript
stay?: boolean
```

滑动手势是否在触控板上停留1秒后再抬起。值**true**表示停留1秒，**false**表示不停留。 <br>默认值：false

**类型：** boolean

**起始版本：** 18

**元服务API：** 从API版本18开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

