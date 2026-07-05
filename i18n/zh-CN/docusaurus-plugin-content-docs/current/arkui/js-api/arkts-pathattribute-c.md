# PathAttribute

除支持[通用属性]common外，还支持以下属性：

**继承实现关系：** PathAttribute继承自：CommonShapeMethod<PathAttribute>。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## commands

```TypeScript
commands(value: ResourceStr)
```

设置符合[SVG路径描述规范](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-path.md#svg路径描述规范)的命令字符串，单位为px。像素单位转换 方法请参考[像素单位转换]common。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ResourceStr | 是 | 线条绘制的路径。 默认值：空字符串 默认单位：px 异常值undefined和null按照默认值处理。 [since 20] |

