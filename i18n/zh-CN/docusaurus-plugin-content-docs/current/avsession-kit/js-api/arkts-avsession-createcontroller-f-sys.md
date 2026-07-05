# createController

## createController

```TypeScript
function createController(sessionId: string, callback: AsyncCallback<AVSessionController>): void
```

Create an avsession controller

**起始版本：** 9

**需要权限：** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sessionId | string | 是 | Specifies the sessionId to create the controller. |
| callback | AsyncCallback&lt;AVSessionController> | 是 | async callback for AVSessionController.  If provided 'default', the system will create a default controller, Used to control the system default session |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

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
            avSession.getAllSessionDescriptors().then((descriptors: avSession.AVSessionDescriptor[]) => {
              console.info(`Succeeded in getting all session descriptors, length: ${descriptors.length}`);
              if (descriptors.length > 0 ) {
avSession.createController(descriptors[0]?.sessionId, (avcontroller: avSession.AVSessionController) => { 
                    console.info('Succeeded in creating controller.'); 
                });
              }
            });
          })
      }
    .width('100%')
    .height('100%')
  }
}

```

## createController

```TypeScript
function createController(sessionId: string): Promise<AVSessionController>
```

Create an avsession controller

**起始版本：** 9

**需要权限：** 

- API版本9 - 22： ohos.permission.MANAGE_MEDIA_RESOURCES

- API版本23+： ohos.permission.MANAGE_MEDIA_RESOURCES or ohos.permission.MANAGE_MEDIA_RESOURCES_FOR_PUBLIC

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sessionId | string | 是 | Specifies the sessionId to create the controller.  If provided 'default', the system will create a default controller, Used to control the system default session |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AVSessionController> | Promise for AVSessionController |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Not System App. [since 9 - 22] |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

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
            avSession.getAllSessionDescriptors().then((descriptors: avSession.AVSessionDescriptor[]) => {
              console.info(`Succeeded in getting all session descriptors, length: ${descriptors.length}`);
              if (descriptors.length > 0 ) {
                avSession.createController(descriptors[0]?.sessionId).then((avcontroller: avSession.AVSessionController) => {
                  console.info('Succeeded in creating controller.');
                });
              }
            });
          })
      }
    .width('100%')
    .height('100%')
  }
}

```

