# getUserFileMgr

## getUserFileMgr

```TypeScript
function getUserFileMgr(context: Context): UserFileManager
```

Returns an instance of UserFileManager

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper.getPhotoAccessHelper

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Hap context information |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| UserFileManager | Instance of UserFileManager |

**示例：**

```TypeScript
// 此处获取的userFileManager实例mgr为全局对象，后续使用到mgr的地方默认为使用此处获取的对象，如未添加此段代码报mgr未定义的错误请自行添加
// 请在组件内获取context，确保this.getUiContext().getHostContext()返回结果为UIAbilityContext
import { common } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  build() {
    Row() {
      Button("example").onClick(async () => {
        let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
        let mgr = userFileManager.getUserFileMgr(context);
      }).width('100%')
    }
    .height('90%')
  }
}

```

