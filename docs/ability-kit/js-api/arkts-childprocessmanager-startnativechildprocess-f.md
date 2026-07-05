# startNativeChildProcess

## startNativeChildProcess

```TypeScript
function startNativeChildProcess(entryPoint: string, args: ChildProcessArgs, options?: ChildProcessOptions): Promise<int>
```

启动[Native子进程](docroot://application-models/ability-terminology.md#native子进程)。使用Promise异步回调。 该接口在Tablet、PC/2in1中可正常调用，在其他设备类型中返回801错误码。 > **说明：** > > 调用该接口创建的子进程不会继承父进程资源，子进程创建成功会返回子进程pid，然后加载参数中指定的动态链接库文件并执行子进程的入口函数，入口函数执行完后子进程会自动销毁。调用该接口的进程销毁后，所创建的子进程也会一并销毁。

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| entryPoint | string | Yes | 子进程中调用动态库的符号和入口函数，中间用“:”隔开（例如“libentry.so:Main”)。 |
| args | ChildProcessArgs | Yes | 传递到子进程的参数。 |
| options | ChildProcessOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回子进程pid。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device capabilities. |
| 16000050 | Internal error. |
| 16000061 | Operation not supported. |
| 16000062 | The number of child processes exceeds the upper limit. |

**Example**

```TypeScript
#include <AbilityKit/native_child_process.h>

extern "C" {

/**
 * Entry function of a child process, which implements the service logic of the child process.
 * The function name can be customized and is specified when the main process calls the OH_Ability_StartNativeChildProcess method. In this example, the function name is Main.
 * After the function is returned, the child process exits.
 */
void Main(NativeChildProcess_Args args)
{
    // Obtain the input entryPrams.
    char *entryParams = args.entryParams;
    // Obtain the input FD list, corresponding to args.fds in ChildProcessArgs.
    NativeChildProcess_Fd *current = args.fdList.head;
    while (current != nullptr) {
        char *fdName = current->fdName;
        int32_t fd = current->fd;
        current = current->next;
        // Service logic
    }
}
} // extern "C"


// Main process:
// Call childProcessManager.startNativeChildProcess to start the child process.
import { common, ChildProcessArgs, ChildProcessOptions, childProcessManager } from '@kit.AbilityKit';
import { fileIo } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    Row() {
      Column() {
        Text('Click')
          .fontSize(30)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            try {
              let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
              let path = context.filesDir + "/test.txt";
              let file = fileIo.openSync(path, fileIo.OpenMode.READ_ONLY | fileIo.OpenMode.CREATE);
              let args: ChildProcessArgs = {
                entryParams: "testParam",
                fds: {
                  "key1": file.fd
                }
              };
              let options: ChildProcessOptions = {
                isolationMode: false
              };
              childProcessManager.startNativeChildProcess("libentry.so:Main", args, options)
                .then((pid) => {
                  console.info(`startChildProcess success, pid: ${pid}`);
                })
                .catch((err: BusinessError) => {
                  console.error(`startChildProcess business error, errorCode: ${err.code}, errorMsg:${err.message}`);
                })
            } catch (err) {
              console.error(`startChildProcess error, errorCode: ${err.code}, errorMsg:${err.message}`);
            }
          });
      }
      .width('100%')
    }
    .height('100%')
  }
}

```

