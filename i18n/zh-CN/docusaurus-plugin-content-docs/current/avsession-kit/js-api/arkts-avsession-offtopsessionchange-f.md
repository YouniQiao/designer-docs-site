# offTopSessionChange

## offTopSessionChange

```TypeScript
function offTopSessionChange(callback?: Callback<AVSessionDescriptor>): void
```

Unregister top session changed callback

**起始版本：** 23

**需要权限：** 

 ohos.permission.MANAGE_MEDIA_RESOURCES_FOR_PUBLIC

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AVSessionDescriptor> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permission denied. |
| 6600101 | Session service exception. |

**示例：**

```TypeScript
import { avSession } from '@kit.AVSessionKit';
@Entry
@Component
struct Index {
  @State message: string = 'hello world';

  build() {
    Column() {
        Text(this.message)
          .onClick(()=>{
            avSession.offTopSessionChange((descriptor: avSession.AVSessionDescriptor) => {
            });
            avSession.offTopSessionChange();
          })
      }
    .width('100%')
    .height('100%')
  }
}

```

