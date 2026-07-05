# getAllSessionDescriptors

## getAllSessionDescriptors

```TypeScript
function getAllSessionDescriptors(callback: AsyncCallback<Array<Readonly<AVSessionDescriptor>>>): void
```

Get all avsession descriptors of the system

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;Readonly&lt;AVSessionDescriptor>>> | Yes | async callback for an array of  AVSessionDescriptors. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. |
| 6600101 | Session service exception. |

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
            avSession.getAllSessionDescriptors((descriptors: avSession.AVSessionDescriptor[]) => { 
                console.info(`Succeeded in getting all session descriptors, length: ${descriptors.length}`); 
                if (descriptors.length > 0 ) { 
                    console.info(`Succeeded in getting session descriptor, isActive: ${descriptors[0].isActive}`); 
                    console.info(`Succeeded in getting session descriptor, type: ${descriptors[0].type}`); 
                    console.info(`Succeeded in getting session descriptor, sessionTag: ${descriptors[0].sessionTag}`); 
                } 
            }); 
          }) 
      } 
    .width('100%') 
    .height('100%') 
  } 
} 

```

## getAllSessionDescriptors

```TypeScript
function getAllSessionDescriptors(): Promise<Array<Readonly<AVSessionDescriptor>>>
```

Get all avsession descriptors which can be shown on system entrance.

**Since:** 9

**Required permissions:** 

- API version9  to  22: ohos.permission.MANAGE_MEDIA_RESOURCES

- API version23 and later: ohos.permission.MANAGE_MEDIA_RESOURCES or ohos.permission.MANAGE_MEDIA_RESOURCES_FOR_PUBLIC

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Readonly&lt;AVSessionDescriptor>>> | Promise for an array of AVSessionDescriptors |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. [since 9 - 22] |
| 6600101 | Session service exception. |

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
                console.info(`Succeeded in getting session descriptor, isActive: ${descriptors[0].isActive}`);
                console.info(`Succeeded in getting session descriptor, type: ${descriptors[0].type}`);
                console.info(`Succeeded in getting session descriptor, sessionTag: ${descriptors[0].sessionTag}`);
              }
            });
          })
      }
    .width('100%')
    .height('100%')
  }
}


```

