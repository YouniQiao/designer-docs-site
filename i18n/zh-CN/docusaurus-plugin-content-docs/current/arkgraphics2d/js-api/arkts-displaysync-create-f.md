# create

## create

```TypeScript
function create(): DisplaySync
```

创建DisplaySync对象，通过此对象设置UI自绘制内容帧率。

**起始版本：** 11

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DisplaySync | 返回当前创建的DisplaySync对象实例。 |

**示例：**

```TypeScript
// 创建DisplaySync对象
let backDisplaySync: displaySync.DisplaySync = displaySync.create();

```

