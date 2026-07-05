# offActiveSessionChanged

## offActiveSessionChanged

```TypeScript
function offActiveSessionChanged(callback?: Callback<Array<AVSessionDescriptor>>): void
```

Unregister active session changed callback.

**起始版本：** 23

**需要权限：** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;AVSessionDescriptor>> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. |
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
        .onClick(() => {
          avSession.onActiveSessionChanged((descriptors: Array<avSession.AVSessionDescriptor>) => {
          });
          avSession.offActiveSessionChanged();
        })
    }
    .width('100%')
    .height('100%')
  }
}

```

