# InputTextMode

描述文本输入模式。

**起始版本：** 20

**系统能力：** SystemCapability.Test.UiTest

## addition

```TypeScript
addition?: boolean
```

是否以追加模式输入文本。值**true**表示以追加模式输入文本，**false**表示相反。默认值：**false**

**类型：** boolean

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

## paste

```TypeScript
paste?: boolean
```

是否复制粘贴文本。值**true**表示复制粘贴文本，**false**表示键入文本。默认值：**false** **注意**：如果输入文本包含中文字符、特殊字符或文本长度超过200个字符， 无论此参数值如何，都将采用复制粘贴方式。

**类型：** boolean

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

