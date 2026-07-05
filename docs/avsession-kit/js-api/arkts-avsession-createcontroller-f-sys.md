# createController

## createController

```TypeScript
function createController(sessionId: string, callback: AsyncCallback<AVSessionController>): void
```

Create an avsession controller

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | string | Yes | Specifies the sessionId to create the controller. |
| callback | AsyncCallback&lt;AVSessionController> | Yes | async callback for AVSessionController.  If provided 'default', the system will create a default controller, Used to control the system default session |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

**Example**

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

**Since:** 9

**Required permissions:** 

- API version9  to  22: ohos.permission.MANAGE_MEDIA_RESOURCES

- API version23 and later: ohos.permission.MANAGE_MEDIA_RESOURCES or ohos.permission.MANAGE_MEDIA_RESOURCES_FOR_PUBLIC

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sessionId | string | Yes | Specifies the sessionId to create the controller.  If provided 'default', the system will create a default controller, Used to control the system default session |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AVSessionController> | Promise for AVSessionController |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Not System App. [since 9 - 22] |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

**Example**

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

