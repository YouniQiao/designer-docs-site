# WebGL2RenderingContextBase

WebGL 2.0

**起始版本：** 7

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## beginQuery

```TypeScript
beginQuery(target: webgl.GLenum, query: WebGLQuery): void
```

Begins a query

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Target |
| query | WebGLQuery | 是 | Query |

## beginTransformFeedback

```TypeScript
beginTransformFeedback(primitiveMode: webgl.GLenum): void
```

Begins transform feedback

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| primitiveMode | webgl.GLenum | 是 | Primitive mode |

## bindBufferBase

```TypeScript
bindBufferBase(target: webgl.GLenum, index: webgl.GLuint, buffer: webgl.WebGLBuffer | null): void
```

Binds buffer base

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Target |
| index | webgl.GLuint | 是 | Index |
| buffer | webgl.WebGLBuffer \| null | 是 | Buffer |

## bindBufferRange

```TypeScript
bindBufferRange(
      target: webgl.GLenum,
      index: webgl.GLuint,
      buffer: webgl.WebGLBuffer | null,
      offset: webgl.GLintptr,
      size: webgl.GLsizeiptr,
    ): void
```

Binds buffer range

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Target |
| index | webgl.GLuint | 是 | Index |
| buffer | webgl.WebGLBuffer \| null | 是 | Buffer |
| offset | webgl.GLintptr | 是 | Offset |
| size | webgl.GLsizeiptr | 是 | Size |

## bindSampler

```TypeScript
bindSampler(unit: webgl.GLuint, sampler: WebGLSampler | null): void
```

Binds a sampler

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| unit | webgl.GLuint | 是 | Texture unit |
| sampler | WebGLSampler \| null | 是 | Sampler |

## bindTransformFeedback

```TypeScript
bindTransformFeedback(target: webgl.GLenum, tf: WebGLTransformFeedback | null): void
```

Binds a transform feedback

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Target |
| tf | WebGLTransformFeedback \| null | 是 | Transform feedback |

## bindVertexArray

```TypeScript
bindVertexArray(array: WebGLVertexArrayObject | null): void
```

Binds a vertex array

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| array | WebGLVertexArrayObject \| null | 是 | Vertex array |

## blitFramebuffer

```TypeScript
blitFramebuffer(
      srcX0: webgl.GLint,
      srcY0: webgl.GLint,
      srcX1: webgl.GLint,
      srcY1: webgl.GLint,
      dstX0: webgl.GLint,
      dstY0: webgl.GLint,
      dstX1: webgl.GLint,
      dstY1: webgl.GLint,
      mask: webgl.GLbitfield,
      filter: webgl.GLenum,
    ): void
```

Blits framebuffer

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| srcX0 | webgl.GLint | 是 | Source X0 |
| srcY0 | webgl.GLint | 是 | Source Y0 |
| srcX1 | webgl.GLint | 是 | Source X1 |
| srcY1 | webgl.GLint | 是 | Source Y1 |
| dstX0 | webgl.GLint | 是 | Destination X0 |
| dstY0 | webgl.GLint | 是 | Destination Y0 |
| dstX1 | webgl.GLint | 是 | Destination X1 |
| dstY1 | webgl.GLint | 是 | Destination Y1 |
| mask | webgl.GLbitfield | 是 | Mask |
| filter | webgl.GLenum | 是 | Filter |

## clearBufferfi

```TypeScript
clearBufferfi(buffer: webgl.GLenum, drawbuffer: webgl.GLint, depth: webgl.GLfloat, stencil: webgl.GLint): void
```

Clears bufferfi

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffer | webgl.GLenum | 是 | Buffer |
| drawbuffer | webgl.GLint | 是 | Draw buffer |
| depth | webgl.GLfloat | 是 | Depth |
| stencil | webgl.GLint | 是 | Stencil |

## clearBufferfv

```TypeScript
clearBufferfv(
      buffer: webgl.GLenum,
      drawbuffer: webgl.GLint,
      values: webgl.Float32List,
      srcOffset?: webgl.GLuint,
    ): void
```

Clears bufferfv

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffer | webgl.GLenum | 是 | Buffer |
| drawbuffer | webgl.GLint | 是 | Draw buffer |
| values | webgl.Float32List | 是 | Values |
| srcOffset | webgl.GLuint | 否 | Source offset |

## clearBufferiv

```TypeScript
clearBufferiv(
      buffer: webgl.GLenum,
      drawbuffer: webgl.GLint,
      values: webgl.Int32List,
      srcOffset?: webgl.GLuint,
    ): void
```

Clears bufferiv

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffer | webgl.GLenum | 是 | Buffer |
| drawbuffer | webgl.GLint | 是 | Draw buffer |
| values | webgl.Int32List | 是 | Values |
| srcOffset | webgl.GLuint | 否 | Source offset |

## clearBufferuiv

```TypeScript
clearBufferuiv(buffer: webgl.GLenum, drawbuffer: webgl.GLint, values: Uint32List, srcOffset?: webgl.GLuint): void
```

Clears bufferuiv

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffer | webgl.GLenum | 是 | Buffer |
| drawbuffer | webgl.GLint | 是 | Draw buffer |
| values | Uint32List | 是 | Values |
| srcOffset | webgl.GLuint | 否 | Source offset |

## clientWaitSync

```TypeScript
clientWaitSync(sync: WebGLSync, flags: webgl.GLbitfield, timeout: GLuint64 ): webgl.GLenum
```

Client waits for sync object

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sync | WebGLSync | 是 | Sync object |
| flags | webgl.GLbitfield | 是 | Flags |
| timeout | GLuint64 | 是 | Timeout |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| webgl.GLenum | Result |

## compressedTexImage3D

```TypeScript
compressedTexImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLenum,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      border: webgl.GLint,
      imageSize: webgl.GLsizei,
      offset: webgl.GLintptr,
    ): void
```

Compressed texture image 3D from PBO offset

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Texture target |
| level | webgl.GLint | 是 | Mipmap level |
| internalformat | webgl.GLenum | 是 | Internal format |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| depth | webgl.GLsizei | 是 | Depth |
| border | webgl.GLint | 是 | Border |
| imageSize | webgl.GLsizei | 是 | Image size |
| offset | webgl.GLintptr | 是 | Offset |

## compressedTexImage3D

```TypeScript
compressedTexImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLenum,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      border: webgl.GLint,
      srcData: ArrayBufferView,
      srcOffset?: webgl.GLuint,
      srcLengthOverride?: webgl.GLuint,
    ): void
```

Compressed texture image 3D from ArrayBufferView

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Texture target |
| level | webgl.GLint | 是 | Mipmap level |
| internalformat | webgl.GLenum | 是 | Internal format |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| depth | webgl.GLsizei | 是 | Depth |
| border | webgl.GLint | 是 | Border |
| srcData | ArrayBufferView | 是 | Source data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLengthOverride | webgl.GLuint | 否 | Source length override |

## compressedTexSubImage3D

```TypeScript
compressedTexSubImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      zoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      format: webgl.GLenum,
      imageSize: webgl.GLsizei,
      offset: webgl.GLintptr,
    ): void
```

Compressed texture sub image 3D from PBO offset

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Texture target |
| level | webgl.GLint | 是 | Mipmap level |
| xoffset | webgl.GLint | 是 | X offset |
| yoffset | webgl.GLint | 是 | Y offset |
| zoffset | webgl.GLint | 是 | Z offset |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| depth | webgl.GLsizei | 是 | Depth |
| format | webgl.GLenum | 是 | Format |
| imageSize | webgl.GLsizei | 是 | Image size |
| offset | webgl.GLintptr | 是 | Offset |

## compressedTexSubImage3D

```TypeScript
compressedTexSubImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      zoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      format: webgl.GLenum,
      srcData: ArrayBufferView,
      srcOffset?: webgl.GLuint,
      srcLengthOverride?: webgl.GLuint,
    ): void
```

Compressed texture sub image 3D from ArrayBufferView

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Texture target |
| level | webgl.GLint | 是 | Mipmap level |
| xoffset | webgl.GLint | 是 | X offset |
| yoffset | webgl.GLint | 是 | Y offset |
| zoffset | webgl.GLint | 是 | Z offset |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| depth | webgl.GLsizei | 是 | Depth |
| format | webgl.GLenum | 是 | Format |
| srcData | ArrayBufferView | 是 | Source data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLengthOverride | webgl.GLuint | 否 | Source length override |

## copyBufferSubData

```TypeScript
copyBufferSubData(
      readTarget: webgl.GLenum,
      writeTarget: webgl.GLenum,
      readOffset: webgl.GLintptr,
      writeOffset: webgl.GLintptr,
      size: webgl.GLsizeiptr,
    ): void
```

Copies data from one buffer to another

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| readTarget | webgl.GLenum | 是 | Read buffer target |
| writeTarget | webgl.GLenum | 是 | Write buffer target |
| readOffset | webgl.GLintptr | 是 | Read offset |
| writeOffset | webgl.GLintptr | 是 | Write offset |
| size | webgl.GLsizeiptr | 是 | Size to copy |

## copyTexSubImage3D

```TypeScript
copyTexSubImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      zoffset: webgl.GLint,
      x: webgl.GLint,
      y: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
    ): void
```

Copies a portion of a 3D texture image

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Texture target |
| level | webgl.GLint | 是 | Mipmap level |
| xoffset | webgl.GLint | 是 | X offset |
| yoffset | webgl.GLint | 是 | Y offset |
| zoffset | webgl.GLint | 是 | Z offset |
| x | webgl.GLint | 是 | X coordinate |
| y | webgl.GLint | 是 | Y coordinate |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |

## createQuery

```TypeScript
createQuery(): WebGLQuery | null
```

Creates a query

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLQuery | The created query |

## createSampler

```TypeScript
createSampler(): WebGLSampler | null
```

Creates a sampler

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLSampler | The created sampler |

## createTransformFeedback

```TypeScript
createTransformFeedback(): WebGLTransformFeedback | null
```

Creates a transform feedback object

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLTransformFeedback | The created transform feedback |

## createVertexArray

```TypeScript
createVertexArray(): WebGLVertexArrayObject | null
```

Creates a vertex array object

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLVertexArrayObject | The created vertex array object |

## deleteQuery

```TypeScript
deleteQuery(query: WebGLQuery | null): void
```

Deletes a query

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| query | WebGLQuery \| null | 是 | Query to delete |

## deleteSampler

```TypeScript
deleteSampler(sampler: WebGLSampler | null): void
```

Deletes a sampler

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sampler | WebGLSampler \| null | 是 | Sampler to delete |

## deleteSync

```TypeScript
deleteSync(sync: WebGLSync | null): void
```

Deletes a sync object

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sync | WebGLSync \| null | 是 | Sync object to delete |

## deleteTransformFeedback

```TypeScript
deleteTransformFeedback(tf: WebGLTransformFeedback | null): void
```

Deletes a transform feedback object

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tf | WebGLTransformFeedback \| null | 是 | Transform feedback to delete |

## deleteVertexArray

```TypeScript
deleteVertexArray(vertexArray: WebGLVertexArrayObject | null): void
```

Deletes a vertex array object

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| vertexArray | WebGLVertexArrayObject \| null | 是 | Vertex array to delete |

## drawArraysInstanced

```TypeScript
drawArraysInstanced(
      mode: webgl.GLenum,
      first: webgl.GLint,
      count: webgl.GLsizei,
      instanceCount: webgl.GLsizei,
    ): void
```

Draws arrays instanced

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | webgl.GLenum | 是 | Mode |
| first | webgl.GLint | 是 | First |
| count | webgl.GLsizei | 是 | Count |
| instanceCount | webgl.GLsizei | 是 | Instance count |

## drawBuffers

```TypeScript
drawBuffers(buffers: webgl.GLenum[]): void
```

Sets draw buffers

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffers | webgl.GLenum[] | 是 | Buffers |

## drawElementsInstanced

```TypeScript
drawElementsInstanced(
      mode: webgl.GLenum,
      count: webgl.GLsizei,
      type: webgl.GLenum,
      offset: webgl.GLintptr,
      instanceCount: webgl.GLsizei,
    ): void
```

Draws elements instanced

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | webgl.GLenum | 是 | Mode |
| count | webgl.GLsizei | 是 | Count |
| type | webgl.GLenum | 是 | Type |
| offset | webgl.GLintptr | 是 | Offset |
| instanceCount | webgl.GLsizei | 是 | Instance count |

## drawRangeElements

```TypeScript
drawRangeElements(
      mode: webgl.GLenum,
      start: webgl.GLuint,
      end: webgl.GLuint,
      count: webgl.GLsizei,
      type: webgl.GLenum,
      offset: webgl.GLintptr,
    ): void
```

Draws range elements

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | webgl.GLenum | 是 | Mode |
| start | webgl.GLuint | 是 | Start |
| end | webgl.GLuint | 是 | End |
| count | webgl.GLsizei | 是 | Count |
| type | webgl.GLenum | 是 | Type |
| offset | webgl.GLintptr | 是 | Offset |

## endQuery

```TypeScript
endQuery(target: webgl.GLenum): void
```

Ends a query

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Target |

## endTransformFeedback

```TypeScript
endTransformFeedback(): void
```

Ends transform feedback

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## fenceSync

```TypeScript
fenceSync(condition: webgl.GLenum, flags: webgl.GLbitfield): WebGLSync | null
```

Creates a sync object

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| condition | webgl.GLenum | 是 | Condition |
| flags | webgl.GLbitfield | 是 | Flags |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLSync | The created sync object |

## framebufferTextureLayer

```TypeScript
framebufferTextureLayer(
      target: webgl.GLenum,
      attachment: webgl.GLenum,
      texture: webgl.WebGLTexture | null,
      level: webgl.GLint,
      layer: webgl.GLint,
    ): void
```

Attaches a texture layer to a framebuffer

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Framebuffer target |
| attachment | webgl.GLenum | 是 | Attachment point |
| texture | webgl.WebGLTexture \| null | 是 | Texture |
| level | webgl.GLint | 是 | Mipmap level |
| layer | webgl.GLint | 是 | Layer |

## getActiveUniformBlockName

```TypeScript
getActiveUniformBlockName(program: webgl.WebGLProgram, uniformBlockIndex: webgl.GLuint): string | null
```

Gets active uniform block name

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | webgl.WebGLProgram | 是 | Program |
| uniformBlockIndex | webgl.GLuint | 是 | Uniform block index |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Uniform block name |

## getActiveUniformBlockParameter

```TypeScript
getActiveUniformBlockParameter(
      program: webgl.WebGLProgram,
      uniformBlockIndex: webgl.GLuint,
      pname: webgl.GLenum,
    ): any
```

Gets active uniform block parameter

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | webgl.WebGLProgram | 是 | Program |
| uniformBlockIndex | webgl.GLuint | 是 | Uniform block index |
| pname | webgl.GLenum | 是 | Parameter name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any | Parameter value |

## getActiveUniforms

```TypeScript
getActiveUniforms(program: webgl.WebGLProgram, uniformIndices: webgl.GLuint[], pname: webgl.GLenum): any
```

Gets active uniforms

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | webgl.WebGLProgram | 是 | Program |
| uniformIndices | webgl.GLuint[] | 是 | Uniform indices |
| pname | webgl.GLenum | 是 | Parameter name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any | Parameter value |

## getBufferSubData

```TypeScript
getBufferSubData(
      target: webgl.GLenum,
      srcByteOffset: webgl.GLintptr,
      dstBuffer: ArrayBufferView,
      dstOffset?: webgl.GLuint,
      length?: webgl.GLuint,
    ): void
```

Gets buffer sub data

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Buffer target |
| srcByteOffset | webgl.GLintptr | 是 | Source byte offset |
| dstBuffer | ArrayBufferView | 是 | Destination buffer |
| dstOffset | webgl.GLuint | 否 | Destination offset |
| length | webgl.GLuint | 否 | Length |

## getFragDataLocation

```TypeScript
getFragDataLocation(program: webgl.WebGLProgram, name: string): webgl.GLint
```

Gets fragment data location

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | webgl.WebGLProgram | 是 | Program |
| name | string | 是 | Name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| webgl.GLint | Location |

## getIndexedParameter

```TypeScript
getIndexedParameter(target: webgl.GLenum, index: webgl.GLuint): any
```

Gets indexed parameter

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Target |
| index | webgl.GLuint | 是 | Index |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any | Parameter value |

## getInternalformatParameter

```TypeScript
getInternalformatParameter(target: webgl.GLenum, internalformat: webgl.GLenum, pname: webgl.GLenum): any
```

Gets internal format parameter

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Target |
| internalformat | webgl.GLenum | 是 | Internal format |
| pname | webgl.GLenum | 是 | Parameter name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any | Parameter value |

## getQuery

```TypeScript
getQuery(target: webgl.GLenum, pname: webgl.GLenum): WebGLQuery | null
```

Gets a query

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Target |
| pname | webgl.GLenum | 是 | Parameter name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebGLQuery | The query |

## getQueryParameter

```TypeScript
getQueryParameter(query: WebGLQuery, pname: webgl.GLenum): any
```

Gets query parameter

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| query | WebGLQuery | 是 | Query |
| pname | webgl.GLenum | 是 | Parameter name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any | Parameter value |

## getSamplerParameter

```TypeScript
getSamplerParameter(sampler: WebGLSampler, pname: webgl.GLenum): any
```

Gets sampler parameter

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sampler | WebGLSampler | 是 | Sampler |
| pname | webgl.GLenum | 是 | Parameter name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any | Parameter value |

## getSyncParameter

```TypeScript
getSyncParameter(sync: WebGLSync, pname: webgl.GLenum): any
```

Gets sync parameter

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sync | WebGLSync | 是 | Sync object |
| pname | webgl.GLenum | 是 | Parameter name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| any | Parameter value |

## getTransformFeedbackVarying

```TypeScript
getTransformFeedbackVarying(program: webgl.WebGLProgram, index: webgl.GLuint): webgl.WebGLActiveInfo | null
```

Gets transform feedback varying

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | webgl.WebGLProgram | 是 | Program |
| index | webgl.GLuint | 是 | Index |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| webgl.WebGLActiveInfo | Active info |

## getUniformBlockIndex

```TypeScript
getUniformBlockIndex(program: webgl.WebGLProgram, uniformBlockName: string): webgl.GLuint
```

Gets uniform block index

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | webgl.WebGLProgram | 是 | Program |
| uniformBlockName | string | 是 | Uniform block name |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| webgl.GLuint | Uniform block index |

## getUniformIndices

```TypeScript
getUniformIndices(program: webgl.WebGLProgram, uniformNames: string[]): webgl.GLuint[] | null
```

Gets uniform indices

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | webgl.WebGLProgram | 是 | Program |
| uniformNames | string[] | 是 | Uniform names |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| webgl.GLuint[] | Uniform indices |

## invalidateFramebuffer

```TypeScript
invalidateFramebuffer(target: webgl.GLenum, attachments: webgl.GLenum[]): void
```

Invalidates framebuffer attachments

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Framebuffer target |
| attachments | webgl.GLenum[] | 是 | Attachments to invalidate |

## invalidateSubFramebuffer

```TypeScript
invalidateSubFramebuffer(
      target: webgl.GLenum,
      attachments: webgl.GLenum[],
      x: webgl.GLint,
      y: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
    ): void
```

Invalidates sub framebuffer attachments

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Framebuffer target |
| attachments | webgl.GLenum[] | 是 | Attachments to invalidate |
| x | webgl.GLint | 是 | X coordinate |
| y | webgl.GLint | 是 | Y coordinate |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |

## isQuery

```TypeScript
isQuery(query: WebGLQuery | null): webgl.GLboolean
```

Returns whether a query is valid

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| query | WebGLQuery \| null | 是 | Query |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| webgl.GLboolean | Whether the query is valid |

## isSampler

```TypeScript
isSampler(sampler: WebGLSampler | null): webgl.GLboolean
```

Returns whether a sampler is valid

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sampler | WebGLSampler \| null | 是 | Sampler |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| webgl.GLboolean | Whether the sampler is valid |

## isSync

```TypeScript
isSync(sync: WebGLSync | null): webgl.GLboolean
```

Returns whether a sync object is valid

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sync | WebGLSync \| null | 是 | Sync object |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| webgl.GLboolean | Whether the sync is valid |

## isTransformFeedback

```TypeScript
isTransformFeedback(tf: WebGLTransformFeedback | null): webgl.GLboolean
```

Returns whether a transform feedback is valid

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tf | WebGLTransformFeedback \| null | 是 | Transform feedback |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| webgl.GLboolean | Whether the transform feedback is valid |

## isVertexArray

```TypeScript
isVertexArray(vertexArray: WebGLVertexArrayObject | null): webgl.GLboolean
```

Returns whether a vertex array is valid

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| vertexArray | WebGLVertexArrayObject \| null | 是 | Vertex array |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| webgl.GLboolean | Whether the vertex array is valid |

## pauseTransformFeedback

```TypeScript
pauseTransformFeedback(): void
```

Pauses transform feedback

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## readBuffer

```TypeScript
readBuffer(src: webgl.GLenum): void
```

Sets the read buffer

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| src | webgl.GLenum | 是 | Read buffer |

## renderbufferStorageMultisample

```TypeScript
renderbufferStorageMultisample(
      target: webgl.GLenum,
      samples: webgl.GLsizei,
      internalformat: webgl.GLenum,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
    ): void
```

Sets renderbuffer storage with multisampling

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Renderbuffer target |
| samples | webgl.GLsizei | 是 | Number of samples |
| internalformat | webgl.GLenum | 是 | Internal format |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |

## resumeTransformFeedback

```TypeScript
resumeTransformFeedback(): void
```

Resumes transform feedback

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## samplerParameterf

```TypeScript
samplerParameterf(sampler: WebGLSampler, pname: webgl.GLenum, param: webgl.GLfloat): void
```

Sets sampler parameterf

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sampler | WebGLSampler | 是 | Sampler |
| pname | webgl.GLenum | 是 | Parameter name |
| param | webgl.GLfloat | 是 | Parameter value |

## samplerParameteri

```TypeScript
samplerParameteri(sampler: WebGLSampler, pname: webgl.GLenum, param: webgl.GLint): void
```

Sets sampler parameteri

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sampler | WebGLSampler | 是 | Sampler |
| pname | webgl.GLenum | 是 | Parameter name |
| param | webgl.GLint | 是 | Parameter value |

## texImage3D

```TypeScript
texImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      pboOffset: webgl.GLintptr,
    ): void
```

Sets texture image 3D from PBO offset

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Texture target |
| level | webgl.GLint | 是 | Mipmap level |
| internalformat | webgl.GLint | 是 | Internal format |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| depth | webgl.GLsizei | 是 | Depth |
| border | webgl.GLint | 是 | Border |
| format | webgl.GLenum | 是 | Format |
| type | webgl.GLenum | 是 | Type |
| pboOffset | webgl.GLintptr | 是 | PBO offset |

## texImage3D

```TypeScript
texImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      source: webgl.TexImageSource,
    ): void
```

Sets texture image 3D from TexImageSource

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Texture target |
| level | webgl.GLint | 是 | Mipmap level |
| internalformat | webgl.GLint | 是 | Internal format |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| depth | webgl.GLsizei | 是 | Depth |
| border | webgl.GLint | 是 | Border |
| format | webgl.GLenum | 是 | Format |
| type | webgl.GLenum | 是 | Type |
| source | webgl.TexImageSource | 是 | Image source |

## texImage3D

```TypeScript
texImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      srcData: ArrayBufferView | null,
    ): void
```

Sets texture image 3D from ArrayBufferView

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Texture target |
| level | webgl.GLint | 是 | Mipmap level |
| internalformat | webgl.GLint | 是 | Internal format |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| depth | webgl.GLsizei | 是 | Depth |
| border | webgl.GLint | 是 | Border |
| format | webgl.GLenum | 是 | Format |
| type | webgl.GLenum | 是 | Type |
| srcData | ArrayBufferView \| null | 是 | Source data |

## texImage3D

```TypeScript
texImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      srcData: ArrayBufferView,
      srcOffset: webgl.GLuint,
    ): void
```

Sets texture image 3D from ArrayBufferView with offset

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Texture target |
| level | webgl.GLint | 是 | Mipmap level |
| internalformat | webgl.GLint | 是 | Internal format |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| depth | webgl.GLsizei | 是 | Depth |
| border | webgl.GLint | 是 | Border |
| format | webgl.GLenum | 是 | Format |
| type | webgl.GLenum | 是 | Type |
| srcData | ArrayBufferView | 是 | Source data |
| srcOffset | webgl.GLuint | 是 | Source offset |

## texStorage2D

```TypeScript
texStorage2D(
      target: webgl.GLenum,
      levels: webgl.GLsizei,
      internalformat: webgl.GLenum,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
    ): void
```

Sets texture storage 2D

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Texture target |
| levels | webgl.GLsizei | 是 | Number of levels |
| internalformat | webgl.GLenum | 是 | Internal format |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |

## texStorage3D

```TypeScript
texStorage3D(
      target: webgl.GLenum,
      levels: webgl.GLsizei,
      internalformat: webgl.GLenum,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
    ): void
```

Sets texture storage 3D

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Texture target |
| levels | webgl.GLsizei | 是 | Number of levels |
| internalformat | webgl.GLenum | 是 | Internal format |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| depth | webgl.GLsizei | 是 | Depth |

## texSubImage3D

```TypeScript
texSubImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      zoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      pboOffset: webgl.GLintptr,
    ): void
```

Sets texture sub image 3D from PBO offset

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Texture target |
| level | webgl.GLint | 是 | Mipmap level |
| xoffset | webgl.GLint | 是 | X offset |
| yoffset | webgl.GLint | 是 | Y offset |
| zoffset | webgl.GLint | 是 | Z offset |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| depth | webgl.GLsizei | 是 | Depth |
| format | webgl.GLenum | 是 | Format |
| type | webgl.GLenum | 是 | Type |
| pboOffset | webgl.GLintptr | 是 | PBO offset |

## texSubImage3D

```TypeScript
texSubImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      zoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      source: webgl.TexImageSource,
    ): void
```

Sets texture sub image 3D from TexImageSource

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Texture target |
| level | webgl.GLint | 是 | Mipmap level |
| xoffset | webgl.GLint | 是 | X offset |
| yoffset | webgl.GLint | 是 | Y offset |
| zoffset | webgl.GLint | 是 | Z offset |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| depth | webgl.GLsizei | 是 | Depth |
| format | webgl.GLenum | 是 | Format |
| type | webgl.GLenum | 是 | Type |
| source | webgl.TexImageSource | 是 | Image source |

## texSubImage3D

```TypeScript
texSubImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      zoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      srcData: ArrayBufferView | null,
      srcOffset?: webgl.GLuint,
    ): void
```

Sets texture sub image 3D from ArrayBufferView

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Texture target |
| level | webgl.GLint | 是 | Mipmap level |
| xoffset | webgl.GLint | 是 | X offset |
| yoffset | webgl.GLint | 是 | Y offset |
| zoffset | webgl.GLint | 是 | Z offset |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| depth | webgl.GLsizei | 是 | Depth |
| format | webgl.GLenum | 是 | Format |
| type | webgl.GLenum | 是 | Type |
| srcData | ArrayBufferView \| null | 是 | Source data |
| srcOffset | webgl.GLuint | 否 | Source offset |

## transformFeedbackVaryings

```TypeScript
transformFeedbackVaryings(program: webgl.WebGLProgram, varyings: string[], bufferMode: webgl.GLenum): void
```

Sets transform feedback varyings

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | webgl.WebGLProgram | 是 | Program |
| varyings | string[] | 是 | Varyings |
| bufferMode | webgl.GLenum | 是 | Buffer mode |

## uniform1ui

```TypeScript
uniform1ui(location: webgl.WebGLUniformLocation | null, v0: webgl.GLuint): void
```

Sets uniform1ui value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| v0 | webgl.GLuint | 是 | Value |

## uniform1uiv

```TypeScript
uniform1uiv(
      location: webgl.WebGLUniformLocation | null,
      data: Uint32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform1uiv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| data | Uint32List | 是 | Data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLength | webgl.GLuint | 否 | Source length |

## uniform2ui

```TypeScript
uniform2ui(location: webgl.WebGLUniformLocation | null, v0: webgl.GLuint, v1: webgl.GLuint): void
```

Sets uniform2ui value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| v0 | webgl.GLuint | 是 | X value |
| v1 | webgl.GLuint | 是 | Y value |

## uniform2uiv

```TypeScript
uniform2uiv(
      location: webgl.WebGLUniformLocation | null,
      data: Uint32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform2uiv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| data | Uint32List | 是 | Data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLength | webgl.GLuint | 否 | Source length |

## uniform3ui

```TypeScript
uniform3ui(location: webgl.WebGLUniformLocation | null, v0: webgl.GLuint, v1: webgl.GLuint, v2: webgl.GLuint): void
```

Sets uniform3ui value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| v0 | webgl.GLuint | 是 | X value |
| v1 | webgl.GLuint | 是 | Y value |
| v2 | webgl.GLuint | 是 | Z value |

## uniform3uiv

```TypeScript
uniform3uiv(
      location: webgl.WebGLUniformLocation | null,
      data: Uint32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform3uiv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| data | Uint32List | 是 | Data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLength | webgl.GLuint | 否 | Source length |

## uniform4ui

```TypeScript
uniform4ui(
      location: webgl.WebGLUniformLocation | null,
      v0: webgl.GLuint,
      v1: webgl.GLuint,
      v2: webgl.GLuint,
      v3: webgl.GLuint,
    ): void
```

Sets uniform4ui value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| v0 | webgl.GLuint | 是 | X value |
| v1 | webgl.GLuint | 是 | Y value |
| v2 | webgl.GLuint | 是 | Z value |
| v3 | webgl.GLuint | 是 | W value |

## uniform4uiv

```TypeScript
uniform4uiv(
      location: webgl.WebGLUniformLocation | null,
      data: Uint32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform4uiv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| data | Uint32List | 是 | Data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLength | webgl.GLuint | 否 | Source length |

## uniformBlockBinding

```TypeScript
uniformBlockBinding(
      program: webgl.WebGLProgram,
      uniformBlockIndex: webgl.GLuint,
      uniformBlockBinding: webgl.GLuint,
    ): void
```

Sets uniform block binding

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| program | webgl.WebGLProgram | 是 | Program |
| uniformBlockIndex | webgl.GLuint | 是 | Uniform block index |
| uniformBlockBinding | webgl.GLuint | 是 | Uniform block binding |

## uniformMatrix2x3fv

```TypeScript
uniformMatrix2x3fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniformMatrix2x3fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| transpose | webgl.GLboolean | 是 | Transpose |
| data | webgl.Float32List | 是 | Data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLength | webgl.GLuint | 否 | Source length |

## uniformMatrix2x4fv

```TypeScript
uniformMatrix2x4fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniformMatrix2x4fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| transpose | webgl.GLboolean | 是 | Transpose |
| data | webgl.Float32List | 是 | Data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLength | webgl.GLuint | 否 | Source length |

## uniformMatrix3x2fv

```TypeScript
uniformMatrix3x2fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniformMatrix3x2fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| transpose | webgl.GLboolean | 是 | Transpose |
| data | webgl.Float32List | 是 | Data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLength | webgl.GLuint | 否 | Source length |

## uniformMatrix3x4fv

```TypeScript
uniformMatrix3x4fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniformMatrix3x4fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| transpose | webgl.GLboolean | 是 | Transpose |
| data | webgl.Float32List | 是 | Data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLength | webgl.GLuint | 否 | Source length |

## uniformMatrix4x2fv

```TypeScript
uniformMatrix4x2fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniformMatrix4x2fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| transpose | webgl.GLboolean | 是 | Transpose |
| data | webgl.Float32List | 是 | Data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLength | webgl.GLuint | 否 | Source length |

## uniformMatrix4x3fv

```TypeScript
uniformMatrix4x3fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniformMatrix4x3fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| transpose | webgl.GLboolean | 是 | Transpose |
| data | webgl.Float32List | 是 | Data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLength | webgl.GLuint | 否 | Source length |

## vertexAttribDivisor

```TypeScript
vertexAttribDivisor(index: webgl.GLuint, divisor: webgl.GLuint): void
```

Sets vertex attrib divisor

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | webgl.GLuint | 是 | Vertex attribute index |
| divisor | webgl.GLuint | 是 | Divisor |

## vertexAttribI4i

```TypeScript
vertexAttribI4i(index: webgl.GLuint, x: webgl.GLint, y: webgl.GLint, z: webgl.GLint, w: webgl.GLint): void
```

Sets vertex attrib I4i value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | webgl.GLuint | 是 | Vertex attribute index |
| x | webgl.GLint | 是 | X value |
| y | webgl.GLint | 是 | Y value |
| z | webgl.GLint | 是 | Z value |
| w | webgl.GLint | 是 | W value |

## vertexAttribI4iv

```TypeScript
vertexAttribI4iv(index: webgl.GLuint, values: webgl.Int32List): void
```

Sets vertex attrib I4iv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | webgl.GLuint | 是 | Vertex attribute index |
| values | webgl.Int32List | 是 | Values |

## vertexAttribI4ui

```TypeScript
vertexAttribI4ui(index: webgl.GLuint, x: webgl.GLuint, y: webgl.GLuint, z: webgl.GLuint, w: webgl.GLuint): void
```

Sets vertex attrib I4ui value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | webgl.GLuint | 是 | Vertex attribute index |
| x | webgl.GLuint | 是 | X value |
| y | webgl.GLuint | 是 | Y value |
| z | webgl.GLuint | 是 | Z value |
| w | webgl.GLuint | 是 | W value |

## vertexAttribI4uiv

```TypeScript
vertexAttribI4uiv(index: webgl.GLuint, values: Uint32List): void
```

Sets vertex attrib I4uiv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | webgl.GLuint | 是 | Vertex attribute index |
| values | Uint32List | 是 | Values |

## vertexAttribIPointer

```TypeScript
vertexAttribIPointer(
      index: webgl.GLuint,
      size: webgl.GLint,
      type: webgl.GLenum,
      stride: webgl.GLsizei,
      offset: webgl.GLintptr,
    ): void
```

Sets vertex attrib integer pointer

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | webgl.GLuint | 是 | Vertex attribute index |
| size | webgl.GLint | 是 | Size |
| type | webgl.GLenum | 是 | Type |
| stride | webgl.GLsizei | 是 | Stride |
| offset | webgl.GLintptr | 是 | Offset |

## waitSync

```TypeScript
waitSync(sync: WebGLSync, flags: webgl.GLbitfield, timeout: GLint64): void
```

Waits for sync object

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sync | WebGLSync | 是 | Sync object |
| flags | webgl.GLbitfield | 是 | Flags |
| timeout | GLint64 | 是 | Timeout |

## FLOAT_32_UNSIGNED_INT_24_8_REV

```TypeScript
readonly FLOAT_32_UNSIGNED_INT_24_8_REV: webgl.GLenum
```

Float 32 Unsigned Int 24 8 Rev

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## SYNC_GPU_COMMANDS_COMPLETE

```TypeScript
readonly SYNC_GPU_COMMANDS_COMPLETE: webgl.GLenum
```

Sync Gpu Commands Complete

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGB32I

```TypeScript
readonly RGB32I: webgl.GLenum
```

Rgb32I

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER

```TypeScript
readonly UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: webgl.GLenum
```

Uniform Block Referenced By Fragment Shader

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## SEPARATE_ATTRIBS

```TypeScript
readonly SEPARATE_ATTRIBS: webgl.GLenum
```

Separate Attribs

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TRANSFORM_FEEDBACK_ACTIVE

```TypeScript
readonly TRANSFORM_FEEDBACK_ACTIVE: webgl.GLenum
```

Transform feedback active

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGB32F

```TypeScript
readonly RGB32F: webgl.GLenum
```

Rgb32F

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COMPARE_REF_TO_TEXTURE

```TypeScript
readonly COMPARE_REF_TO_TEXTURE: webgl.GLenum
```

Compare Ref To Texture

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## READ_BUFFER

```TypeScript
readonly READ_BUFFER: webgl.GLenum
```

Read buffer

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## R32F

```TypeScript
readonly R32F: webgl.GLenum
```

R32F

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## PACK_SKIP_PIXELS

```TypeScript
readonly PACK_SKIP_PIXELS: webgl.GLenum
```

Pack skip pixels

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER

```TypeScript
readonly UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: webgl.GLenum
```

Uniform Block Referenced By Vertex Shader

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN

```TypeScript
readonly TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: webgl.GLenum
```

Transform Feedback Primitives Written

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## WAIT_FAILED

```TypeScript
readonly WAIT_FAILED: webgl.GLenum
```

Wait Failed

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNSIGNED_NORMALIZED

```TypeScript
readonly UNSIGNED_NORMALIZED: webgl.GLenum
```

Unsigned Normalized

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## STATIC_READ

```TypeScript
readonly STATIC_READ: webgl.GLenum
```

Buffer usage: static read

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RED_INTEGER

```TypeScript
readonly RED_INTEGER: webgl.GLenum
```

Red Integer

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## R32UI

```TypeScript
readonly R32UI: webgl.GLenum
```

R32Ui

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## R32I

```TypeScript
readonly R32I: webgl.GLenum
```

R32I

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## SAMPLER_2D_SHADOW

```TypeScript
readonly SAMPLER_2D_SHADOW: webgl.GLenum
```

Sampler 2D Shadow

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RG8I

```TypeScript
readonly RG8I: webgl.GLenum
```

Rg8I

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGBA32UI

```TypeScript
readonly RGBA32UI: webgl.GLenum
```

Rgba32Ui

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## CURRENT_QUERY

```TypeScript
readonly CURRENT_QUERY: webgl.GLenum
```

Current query

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DRAW_FRAMEBUFFER

```TypeScript
readonly DRAW_FRAMEBUFFER: webgl.GLenum
```

Draw Framebuffer

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## SYNC_CONDITION

```TypeScript
readonly SYNC_CONDITION: webgl.GLenum
```

Sync Condition

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## R8

```TypeScript
readonly R8: webgl.GLenum
```

R8

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGB9_E5

```TypeScript
readonly RGB9_E5: webgl.GLenum
```

Rgb9 E5

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## INT_2_10_10_10_REV

```TypeScript
readonly INT_2_10_10_10_REV: webgl.GLenum
```

Data type: INT 2_10_10_10_REV

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_UNIFORM_BUFFER_BINDINGS

```TypeScript
readonly MAX_UNIFORM_BUFFER_BINDINGS: webgl.GLenum
```

Max Uniform Buffer Bindings

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MIN

```TypeScript
readonly MIN: webgl.GLenum
```

Min value

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RG

```TypeScript
readonly RG: webgl.GLenum
```

Rg

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TEXTURE_COMPARE_MODE

```TypeScript
readonly TEXTURE_COMPARE_MODE: webgl.GLenum
```

Texture compare mode

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TEXTURE_BINDING_2D_ARRAY

```TypeScript
readonly TEXTURE_BINDING_2D_ARRAY: webgl.GLenum
```

Texture Binding 2D Array

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COLOR_ATTACHMENT8

```TypeScript
readonly COLOR_ATTACHMENT8: webgl.GLenum
```

Color Attachment8

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COLOR_ATTACHMENT7

```TypeScript
readonly COLOR_ATTACHMENT7: webgl.GLenum
```

Color Attachment7

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COLOR_ATTACHMENT9

```TypeScript
readonly COLOR_ATTACHMENT9: webgl.GLenum
```

Color Attachment9

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COLOR_ATTACHMENT2

```TypeScript
readonly COLOR_ATTACHMENT2: webgl.GLenum
```

Color Attachment2

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COLOR_ATTACHMENT1

```TypeScript
readonly COLOR_ATTACHMENT1: webgl.GLenum
```

Color Attachment1

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## INT_SAMPLER_3D

```TypeScript
readonly INT_SAMPLER_3D: webgl.GLenum
```

Int Sampler 3D

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COLOR_ATTACHMENT4

```TypeScript
readonly COLOR_ATTACHMENT4: webgl.GLenum
```

Color Attachment4

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COLOR_ATTACHMENT3

```TypeScript
readonly COLOR_ATTACHMENT3: webgl.GLenum
```

Color Attachment3

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COLOR_ATTACHMENT6

```TypeScript
readonly COLOR_ATTACHMENT6: webgl.GLenum
```

Color Attachment6

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COLOR_ATTACHMENT5

```TypeScript
readonly COLOR_ATTACHMENT5: webgl.GLenum
```

Color Attachment5

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## SYNC_STATUS

```TypeScript
readonly SYNC_STATUS: webgl.GLenum
```

Sync Status

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNIFORM_BUFFER_START

```TypeScript
readonly UNIFORM_BUFFER_START: webgl.GLenum
```

Uniform Buffer Start

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## R16UI

```TypeScript
readonly R16UI: webgl.GLenum
```

R16Ui

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DEPTH32F_STENCIL8

```TypeScript
readonly DEPTH32F_STENCIL8: webgl.GLenum
```

Depth32F Stencil8

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNSIGNED_INT_2_10_10_10_REV

```TypeScript
readonly UNSIGNED_INT_2_10_10_10_REV: webgl.GLenum
```

Data type: unsigned int 2_10_10_10 rev

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TRANSFORM_FEEDBACK_BUFFER_START

```TypeScript
readonly TRANSFORM_FEEDBACK_BUFFER_START: webgl.GLenum
```

Transform Feedback Buffer Start

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS

```TypeScript
readonly MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: webgl.GLenum
```

Max Combined Vertex Uniform Components

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DEPTH_COMPONENT24

```TypeScript
readonly DEPTH_COMPONENT24: webgl.GLenum
```

Internal format: depth component24

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER

```TypeScript
readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: webgl.GLenum
```

Framebuffer Attachment Texture Layer

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_ARRAY_TEXTURE_LAYERS

```TypeScript
readonly MAX_ARRAY_TEXTURE_LAYERS: webgl.GLenum
```

Max Array Texture Layers

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## FLOAT_MAT2x4

```TypeScript
readonly FLOAT_MAT2x4: webgl.GLenum
```

Float Mat2X4

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## FLOAT_MAT2x3

```TypeScript
readonly FLOAT_MAT2x3: webgl.GLenum
```

Float Mat2X3

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNPACK_SKIP_PIXELS

```TypeScript
readonly UNPACK_SKIP_PIXELS: webgl.GLenum
```

Unpack skip pixels

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNPACK_SKIP_IMAGES

```TypeScript
readonly UNPACK_SKIP_IMAGES: webgl.GLenum
```

Unpack skip images

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNIFORM_MATRIX_STRIDE

```TypeScript
readonly UNIFORM_MATRIX_STRIDE: webgl.GLenum
```

Uniform Matrix Stride

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RED

```TypeScript
readonly RED: webgl.GLenum
```

Pixel format: red

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## STATIC_COPY

```TypeScript
readonly STATIC_COPY: webgl.GLenum
```

Buffer usage: static copy

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## STENCIL

```TypeScript
readonly STENCIL: webgl.GLenum
```

Buffer: stencil

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TEXTURE_2D_ARRAY

```TypeScript
readonly TEXTURE_2D_ARRAY: webgl.GLenum
```

Texture 2D Array

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TIMEOUT_IGNORED

```TypeScript
readonly TIMEOUT_IGNORED: GLint64
```

Timeout ignored

**类型：** GLint64

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_FRAGMENT_UNIFORM_COMPONENTS

```TypeScript
readonly MAX_FRAGMENT_UNIFORM_COMPONENTS: webgl.GLenum
```

Max Fragment Uniform Components

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## R8_SNORM

```TypeScript
readonly R8_SNORM: webgl.GLenum
```

R8 Snorm

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## SIGNALED

```TypeScript
readonly SIGNALED: webgl.GLenum
```

Signaled

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE

```TypeScript
readonly FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: webgl.GLenum
```

Framebuffer Attachment Depth Size

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COPY_WRITE_BUFFER_BINDING

```TypeScript
readonly COPY_WRITE_BUFFER_BINDING: webgl.GLenum
```

Copy Write Buffer Binding

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE

```TypeScript
readonly FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: webgl.GLenum
```

Framebuffer Attachment Stencil Size

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## R11F_G11F_B10F

```TypeScript
readonly R11F_G11F_B10F: webgl.GLenum
```

R11F G11F B10F

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TEXTURE_MIN_LOD

```TypeScript
readonly TEXTURE_MIN_LOD: webgl.GLenum
```

Texture min LOD

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_DRAW_BUFFERS

```TypeScript
readonly MAX_DRAW_BUFFERS: webgl.GLenum
```

Max draw buffers

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNIFORM_BUFFER_BINDING

```TypeScript
readonly UNIFORM_BUFFER_BINDING: webgl.GLenum
```

Uniform Buffer Binding

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_PROGRAM_TEXEL_OFFSET

```TypeScript
readonly MAX_PROGRAM_TEXEL_OFFSET: webgl.GLenum
```

Max Program Texel Offset

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## VERTEX_ARRAY_BINDING

```TypeScript
readonly VERTEX_ARRAY_BINDING: webgl.GLenum
```

Vertex Array Binding

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNSIGNALED

```TypeScript
readonly UNSIGNALED: webgl.GLenum
```

Unsignaled

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_SAMPLES

```TypeScript
readonly MAX_SAMPLES: webgl.GLenum
```

Max Samples

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COLOR

```TypeScript
readonly COLOR: webgl.GLenum
```

Buffer: color

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## PIXEL_PACK_BUFFER_BINDING

```TypeScript
readonly PIXEL_PACK_BUFFER_BINDING: webgl.GLenum
```

Pixel Pack Buffer Binding

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DEPTH_COMPONENT32F

```TypeScript
readonly DEPTH_COMPONENT32F: webgl.GLenum
```

Depth Component32F

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RG8

```TypeScript
readonly RG8: webgl.GLenum
```

Rg8

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## FLOAT_MAT3x2

```TypeScript
readonly FLOAT_MAT3x2: webgl.GLenum
```

Float Mat3X2

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## FLOAT_MAT3x4

```TypeScript
readonly FLOAT_MAT3x4: webgl.GLenum
```

Float Mat3X4

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## ANY_SAMPLES_PASSED

```TypeScript
readonly ANY_SAMPLES_PASSED: webgl.GLenum
```

Any Samples Passed

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## READ_FRAMEBUFFER_BINDING

```TypeScript
readonly READ_FRAMEBUFFER_BINDING: webgl.GLenum
```

Read Framebuffer Binding

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TRANSFORM_FEEDBACK

```TypeScript
readonly TRANSFORM_FEEDBACK: webgl.GLenum
```

Transform feedback target

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## INT_SAMPLER_2D

```TypeScript
readonly INT_SAMPLER_2D: webgl.GLenum
```

Int Sampler 2D

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TRANSFORM_FEEDBACK_BUFFER_SIZE

```TypeScript
readonly TRANSFORM_FEEDBACK_BUFFER_SIZE: webgl.GLenum
```

Transform Feedback Buffer Size

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNSIGNED_INT_5_9_9_9_REV

```TypeScript
readonly UNSIGNED_INT_5_9_9_9_REV: webgl.GLenum
```

Unsigned Int 5 9 9 9 Rev

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DRAW_BUFFER5

```TypeScript
readonly DRAW_BUFFER5: webgl.GLenum
```

Draw Buffer5

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGBA8I

```TypeScript
readonly RGBA8I: webgl.GLenum
```

Rgba8I

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGBA32I

```TypeScript
readonly RGBA32I: webgl.GLenum
```

Rgba32I

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DRAW_BUFFER6

```TypeScript
readonly DRAW_BUFFER6: webgl.GLenum
```

Draw Buffer6

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DRAW_BUFFER3

```TypeScript
readonly DRAW_BUFFER3: webgl.GLenum
```

Draw buffer 3

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DRAW_BUFFER4

```TypeScript
readonly DRAW_BUFFER4: webgl.GLenum
```

Draw buffer 4

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGBA8_SNORM

```TypeScript
readonly RGBA8_SNORM: webgl.GLenum
```

Rgba8 Snorm

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGBA32F

```TypeScript
readonly RGBA32F: webgl.GLenum
```

Rgba32F

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DRAW_BUFFER9

```TypeScript
readonly DRAW_BUFFER9: webgl.GLenum
```

Draw Buffer9

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DRAW_BUFFER7

```TypeScript
readonly DRAW_BUFFER7: webgl.GLenum
```

Draw Buffer7

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_VERTEX_OUTPUT_COMPONENTS

```TypeScript
readonly MAX_VERTEX_OUTPUT_COMPONENTS: webgl.GLenum
```

Max Vertex Output Components

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DRAW_BUFFER8

```TypeScript
readonly DRAW_BUFFER8: webgl.GLenum
```

Draw Buffer8

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DRAW_BUFFER1

```TypeScript
readonly DRAW_BUFFER1: webgl.GLenum
```

Draw buffer 1

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DRAW_BUFFER2

```TypeScript
readonly DRAW_BUFFER2: webgl.GLenum
```

Draw buffer 2

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DRAW_BUFFER0

```TypeScript
readonly DRAW_BUFFER0: webgl.GLenum
```

Draw buffer 0

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## HALF_FLOAT

```TypeScript
readonly HALF_FLOAT: webgl.GLenum
```

Half Float

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGB10_A2

```TypeScript
readonly RGB10_A2: webgl.GLenum
```

Internal format: RGB10_A2

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## FRAMEBUFFER_INCOMPLETE_MULTISAMPLE

```TypeScript
readonly FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: webgl.GLenum
```

Framebuffer Incomplete Multisample

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RG16UI

```TypeScript
readonly RG16UI: webgl.GLenum
```

Rg16Ui

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNIFORM_BUFFER_OFFSET_ALIGNMENT

```TypeScript
readonly UNIFORM_BUFFER_OFFSET_ALIGNMENT: webgl.GLenum
```

Uniform Buffer Offset Alignment

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RG16F

```TypeScript
readonly RG16F: webgl.GLenum
```

Rg16F

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TEXTURE_BASE_LEVEL

```TypeScript
readonly TEXTURE_BASE_LEVEL: webgl.GLenum
```

Texture base level

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RG16I

```TypeScript
readonly RG16I: webgl.GLenum
```

Rg16I

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TRANSFORM_FEEDBACK_BUFFER_MODE

```TypeScript
readonly TRANSFORM_FEEDBACK_BUFFER_MODE: webgl.GLenum
```

Transform Feedback Buffer Mode

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RG8UI

```TypeScript
readonly RG8UI: webgl.GLenum
```

Rg8Ui

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## FRAMEBUFFER_ATTACHMENT_BLUE_SIZE

```TypeScript
readonly FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: webgl.GLenum
```

Framebuffer Attachment Blue Size

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGB_INTEGER

```TypeScript
readonly RGB_INTEGER: webgl.GLenum
```

Rgb Integer

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGB10_A2UI

```TypeScript
readonly RGB10_A2UI: webgl.GLenum
```

Internal format: RGB10_A2UI

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## FRAMEBUFFER_ATTACHMENT_RED_SIZE

```TypeScript
readonly FRAMEBUFFER_ATTACHMENT_RED_SIZE: webgl.GLenum
```

Framebuffer Attachment Red Size

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGB8I

```TypeScript
readonly RGB8I: webgl.GLenum
```

Rgb8I

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNIFORM_ARRAY_STRIDE

```TypeScript
readonly UNIFORM_ARRAY_STRIDE: webgl.GLenum
```

Uniform Array Stride

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## QUERY_RESULT

```TypeScript
readonly QUERY_RESULT: webgl.GLenum
```

Query result

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## R8I

```TypeScript
readonly R8I: webgl.GLenum
```

R8I

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## FLOAT_MAT4x2

```TypeScript
readonly FLOAT_MAT4x2: webgl.GLenum
```

Float Mat4X2

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## FLOAT_MAT4x3

```TypeScript
readonly FLOAT_MAT4x3: webgl.GLenum
```

Float Mat4X3

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COLOR_ATTACHMENT15

```TypeScript
readonly COLOR_ATTACHMENT15: webgl.GLenum
```

Color Attachment15

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGBA16UI

```TypeScript
readonly RGBA16UI: webgl.GLenum
```

Rgba16Ui

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COLOR_ATTACHMENT14

```TypeScript
readonly COLOR_ATTACHMENT14: webgl.GLenum
```

Color Attachment14

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COLOR_ATTACHMENT13

```TypeScript
readonly COLOR_ATTACHMENT13: webgl.GLenum
```

Color Attachment13

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COLOR_ATTACHMENT12

```TypeScript
readonly COLOR_ATTACHMENT12: webgl.GLenum
```

Color Attachment12

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## PIXEL_UNPACK_BUFFER_BINDING

```TypeScript
readonly PIXEL_UNPACK_BUFFER_BINDING: webgl.GLenum
```

Pixel Unpack Buffer Binding

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNSIGNED_INT_SAMPLER_CUBE

```TypeScript
readonly UNSIGNED_INT_SAMPLER_CUBE: webgl.GLenum
```

Unsigned Int Sampler Cube

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DRAW_BUFFER14

```TypeScript
readonly DRAW_BUFFER14: webgl.GLenum
```

Draw Buffer14

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DRAW_BUFFER15

```TypeScript
readonly DRAW_BUFFER15: webgl.GLenum
```

Draw Buffer15

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RENDERBUFFER_SAMPLES

```TypeScript
readonly RENDERBUFFER_SAMPLES: webgl.GLenum
```

Renderbuffer Samples

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DRAW_BUFFER12

```TypeScript
readonly DRAW_BUFFER12: webgl.GLenum
```

Draw Buffer12

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DRAW_BUFFER13

```TypeScript
readonly DRAW_BUFFER13: webgl.GLenum
```

Draw Buffer13

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DRAW_BUFFER10

```TypeScript
readonly DRAW_BUFFER10: webgl.GLenum
```

Draw Buffer10

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## PACK_SKIP_ROWS

```TypeScript
readonly PACK_SKIP_ROWS: webgl.GLenum
```

Pack skip rows

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DRAW_BUFFER11

```TypeScript
readonly DRAW_BUFFER11: webgl.GLenum
```

Draw Buffer11

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES

```TypeScript
readonly UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: webgl.GLenum
```

Uniform Block Active Uniform Indices

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGB16F

```TypeScript
readonly RGB16F: webgl.GLenum
```

Rgb16F

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGB16I

```TypeScript
readonly RGB16I: webgl.GLenum
```

Rgb16I

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RG32UI

```TypeScript
readonly RG32UI: webgl.GLenum
```

Rg32Ui

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGB16UI

```TypeScript
readonly RGB16UI: webgl.GLenum
```

Rgb16Ui

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## R16F

```TypeScript
readonly R16F: webgl.GLenum
```

R16F

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TEXTURE_IMMUTABLE_FORMAT

```TypeScript
readonly TEXTURE_IMMUTABLE_FORMAT: webgl.GLenum
```

Texture immutable format

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_VERTEX_UNIFORM_BLOCKS

```TypeScript
readonly MAX_VERTEX_UNIFORM_BLOCKS: webgl.GLenum
```

Max Vertex Uniform Blocks

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGB8UI

```TypeScript
readonly RGB8UI: webgl.GLenum
```

Rgb8Ui

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## QUERY_RESULT_AVAILABLE

```TypeScript
readonly QUERY_RESULT_AVAILABLE: webgl.GLenum
```

Query result available

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGB8

```TypeScript
readonly RGB8: webgl.GLenum
```

Internal format: RGB8

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COPY_WRITE_BUFFER

```TypeScript
readonly COPY_WRITE_BUFFER: webgl.GLenum
```

Copy Write Buffer

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNPACK_ROW_LENGTH

```TypeScript
readonly UNPACK_ROW_LENGTH: webgl.GLenum
```

Unpack row length

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## R16I

```TypeScript
readonly R16I: webgl.GLenum
```

R16I

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COLOR_ATTACHMENT11

```TypeScript
readonly COLOR_ATTACHMENT11: webgl.GLenum
```

Color Attachment11

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_ELEMENTS_INDICES

```TypeScript
readonly MAX_ELEMENTS_INDICES: webgl.GLenum
```

Max elements indices

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COLOR_ATTACHMENT10

```TypeScript
readonly COLOR_ATTACHMENT10: webgl.GLenum
```

Color Attachment10

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## INT_SAMPLER_2D_ARRAY

```TypeScript
readonly INT_SAMPLER_2D_ARRAY: webgl.GLenum
```

Int Sampler 2D Array

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TEXTURE_BINDING_3D

```TypeScript
readonly TEXTURE_BINDING_3D: webgl.GLenum
```

Texture binding 3D

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DYNAMIC_COPY

```TypeScript
readonly DYNAMIC_COPY: webgl.GLenum
```

Buffer usage: dynamic copy

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## FRAGMENT_SHADER_DERIVATIVE_HINT

```TypeScript
readonly FRAGMENT_SHADER_DERIVATIVE_HINT: webgl.GLenum
```

Fragment Shader Derivative Hint

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNIFORM_BUFFER_SIZE

```TypeScript
readonly UNIFORM_BUFFER_SIZE: webgl.GLenum
```

Uniform Buffer Size

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNSIGNED_INT_SAMPLER_2D_ARRAY

```TypeScript
readonly UNSIGNED_INT_SAMPLER_2D_ARRAY: webgl.GLenum
```

Unsigned Int Sampler 2D Array

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TEXTURE_3D

```TypeScript
readonly TEXTURE_3D: webgl.GLenum
```

Texture target: 3D

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## R8UI

```TypeScript
readonly R8UI: webgl.GLenum
```

R8Ui

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNIFORM_BLOCK_DATA_SIZE

```TypeScript
readonly UNIFORM_BLOCK_DATA_SIZE: webgl.GLenum
```

Uniform Block Data Size

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## ACTIVE_UNIFORM_BLOCKS

```TypeScript
readonly ACTIVE_UNIFORM_BLOCKS: webgl.GLenum
```

Active Uniform Blocks

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGBA8

```TypeScript
readonly RGBA8: webgl.GLenum
```

Internal format: RGBA8

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DEPTH24_STENCIL8

```TypeScript
readonly DEPTH24_STENCIL8: webgl.GLenum
```

Depth24 Stencil8

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_CLIENT_WAIT_TIMEOUT_WEBGL

```TypeScript
readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: webgl.GLenum
```

Max client wait timeout WebGL

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## READ_FRAMEBUFFER

```TypeScript
readonly READ_FRAMEBUFFER: webgl.GLenum
```

Read Framebuffer

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## SYNC_FLUSH_COMMANDS_BIT

```TypeScript
readonly SYNC_FLUSH_COMMANDS_BIT: webgl.GLenum
```

Sync Flush Commands Bit

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MIN_PROGRAM_TEXEL_OFFSET

```TypeScript
readonly MIN_PROGRAM_TEXEL_OFFSET: webgl.GLenum
```

Min Program Texel Offset

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE

```TypeScript
readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: webgl.GLenum
```

Framebuffer Attachment Component Type

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_VERTEX_UNIFORM_COMPONENTS

```TypeScript
readonly MAX_VERTEX_UNIFORM_COMPONENTS: webgl.GLenum
```

Max Vertex Uniform Components

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_COMBINED_UNIFORM_BLOCKS

```TypeScript
readonly MAX_COMBINED_UNIFORM_BLOCKS: webgl.GLenum
```

Max Combined Uniform Blocks

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COPY_READ_BUFFER_BINDING

```TypeScript
readonly COPY_READ_BUFFER_BINDING: webgl.GLenum
```

Copy Read Buffer Binding

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_UNIFORM_BLOCK_SIZE

```TypeScript
readonly MAX_UNIFORM_BLOCK_SIZE: webgl.GLenum
```

Max Uniform Block Size

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DYNAMIC_READ

```TypeScript
readonly DYNAMIC_READ: webgl.GLenum
```

Buffer usage: dynamic read

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## INTERLEAVED_ATTRIBS

```TypeScript
readonly INTERLEAVED_ATTRIBS: webgl.GLenum
```

Interleaved Attribs

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TIMEOUT_EXPIRED

```TypeScript
readonly TIMEOUT_EXPIRED: webgl.GLenum
```

Timeout Expired

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX

```TypeScript
readonly MAX: webgl.GLenum
```

Max value

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## SRGB8

```TypeScript
readonly SRGB8: webgl.GLenum
```

Srgb8

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNIFORM_IS_ROW_MAJOR

```TypeScript
readonly UNIFORM_IS_ROW_MAJOR: webgl.GLenum
```

Uniform Is Row Major

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNSIGNED_INT_SAMPLER_3D

```TypeScript
readonly UNSIGNED_INT_SAMPLER_3D: webgl.GLenum
```

Unsigned Int Sampler 3D

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNIFORM_TYPE

```TypeScript
readonly UNIFORM_TYPE: webgl.GLenum
```

Uniform Type

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## SYNC_FLAGS

```TypeScript
readonly SYNC_FLAGS: webgl.GLenum
```

Sync Flags

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_SERVER_WAIT_TIMEOUT

```TypeScript
readonly MAX_SERVER_WAIT_TIMEOUT: webgl.GLenum
```

Max Server Wait Timeout

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DRAW_FRAMEBUFFER_BINDING

```TypeScript
readonly DRAW_FRAMEBUFFER_BINDING: webgl.GLenum
```

Draw Framebuffer Binding

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TEXTURE_IMMUTABLE_LEVELS

```TypeScript
readonly TEXTURE_IMMUTABLE_LEVELS: webgl.GLenum
```

Texture immutable levels

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TEXTURE_COMPARE_FUNC

```TypeScript
readonly TEXTURE_COMPARE_FUNC: webgl.GLenum
```

Texture compare function

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_ELEMENT_INDEX

```TypeScript
readonly MAX_ELEMENT_INDEX: webgl.GLenum
```

Max element index

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## SRGB

```TypeScript
readonly SRGB: webgl.GLenum
```

Srgb

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## PIXEL_PACK_BUFFER

```TypeScript
readonly PIXEL_PACK_BUFFER: webgl.GLenum
```

Pixel Pack Buffer

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING

```TypeScript
readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: webgl.GLenum
```

Framebuffer Attachment Color Encoding

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_COLOR_ATTACHMENTS

```TypeScript
readonly MAX_COLOR_ATTACHMENTS: webgl.GLenum
```

Max Color Attachments

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNIFORM_BLOCK_BINDING

```TypeScript
readonly UNIFORM_BLOCK_BINDING: webgl.GLenum
```

Uniform Block Binding

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_TEXTURE_LOD_BIAS

```TypeScript
readonly MAX_TEXTURE_LOD_BIAS: webgl.GLenum
```

Max texture LOD bias

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## SIGNED_NORMALIZED

```TypeScript
readonly SIGNED_NORMALIZED: webgl.GLenum
```

Signed Normalized

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNSIGNED_INT_SAMPLER_2D

```TypeScript
readonly UNSIGNED_INT_SAMPLER_2D: webgl.GLenum
```

Unsigned Int Sampler 2D

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## SAMPLER_2D_ARRAY

```TypeScript
readonly SAMPLER_2D_ARRAY: webgl.GLenum
```

Sampler 2D Array

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## CONDITION_SATISFIED

```TypeScript
readonly CONDITION_SATISFIED: webgl.GLenum
```

Condition Satisfied

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNSIGNED_INT_10F_11F_11F_REV

```TypeScript
readonly UNSIGNED_INT_10F_11F_11F_REV: webgl.GLenum
```

Unsigned Int 10F 11F 11F Rev

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS

```TypeScript
readonly MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: webgl.GLenum
```

Max Combined Fragment Uniform Components

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## SAMPLER_2D_ARRAY_SHADOW

```TypeScript
readonly SAMPLER_2D_ARRAY_SHADOW: webgl.GLenum
```

Sampler 2D Array Shadow

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RG8_SNORM

```TypeScript
readonly RG8_SNORM: webgl.GLenum
```

Rg8 Snorm

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## DEPTH

```TypeScript
readonly DEPTH: webgl.GLenum
```

Buffer: depth

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RASTERIZER_DISCARD

```TypeScript
readonly RASTERIZER_DISCARD: webgl.GLenum
```

Rasterizer Discard

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_FRAGMENT_INPUT_COMPONENTS

```TypeScript
readonly MAX_FRAGMENT_INPUT_COMPONENTS: webgl.GLenum
```

Max Fragment Input Components

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## ANY_SAMPLES_PASSED_CONSERVATIVE

```TypeScript
readonly ANY_SAMPLES_PASSED_CONSERVATIVE: webgl.GLenum
```

Any Samples Passed Conservative

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RG_INTEGER

```TypeScript
readonly RG_INTEGER: webgl.GLenum
```

Rg Integer

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_FRAGMENT_UNIFORM_BLOCKS

```TypeScript
readonly MAX_FRAGMENT_UNIFORM_BLOCKS: webgl.GLenum
```

Max Fragment Uniform Blocks

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_3D_TEXTURE_SIZE

```TypeScript
readonly MAX_3D_TEXTURE_SIZE: webgl.GLenum
```

Max 3D texture size

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## VERTEX_ATTRIB_ARRAY_INTEGER

```TypeScript
readonly VERTEX_ATTRIB_ARRAY_INTEGER: webgl.GLenum
```

Vertex Attrib Array Integer

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNIFORM_SIZE

```TypeScript
readonly UNIFORM_SIZE: webgl.GLenum
```

Uniform Size

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNPACK_SKIP_ROWS

```TypeScript
readonly UNPACK_SKIP_ROWS: webgl.GLenum
```

Unpack skip rows

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## PACK_ROW_LENGTH

```TypeScript
readonly PACK_ROW_LENGTH: webgl.GLenum
```

Pack row length

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## INVALID_INDEX

```TypeScript
readonly INVALID_INDEX: webgl.GLenum
```

Invalid Index

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TEXTURE_MAX_LOD

```TypeScript
readonly TEXTURE_MAX_LOD: webgl.GLenum
```

Texture max LOD

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNIFORM_BLOCK_ACTIVE_UNIFORMS

```TypeScript
readonly UNIFORM_BLOCK_ACTIVE_UNIFORMS: webgl.GLenum
```

Uniform Block Active Uniforms

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNIFORM_BUFFER

```TypeScript
readonly UNIFORM_BUFFER: webgl.GLenum
```

Uniform Buffer

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## FRAMEBUFFER_ATTACHMENT_GREEN_SIZE

```TypeScript
readonly FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: webgl.GLenum
```

Framebuffer Attachment Green Size

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGBA_INTEGER

```TypeScript
readonly RGBA_INTEGER: webgl.GLenum
```

Rgba Integer

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## SAMPLER_3D

```TypeScript
readonly SAMPLER_3D: webgl.GLenum
```

Sampler 3D

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## PIXEL_UNPACK_BUFFER

```TypeScript
readonly PIXEL_UNPACK_BUFFER: webgl.GLenum
```

Pixel Unpack Buffer

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGBA16F

```TypeScript
readonly RGBA16F: webgl.GLenum
```

Rgba16F

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNPACK_IMAGE_HEIGHT

```TypeScript
readonly UNPACK_IMAGE_HEIGHT: webgl.GLenum
```

Unpack image height

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TRANSFORM_FEEDBACK_BINDING

```TypeScript
readonly TRANSFORM_FEEDBACK_BINDING: webgl.GLenum
```

Transform feedback binding

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TRANSFORM_FEEDBACK_PAUSED

```TypeScript
readonly TRANSFORM_FEEDBACK_PAUSED: webgl.GLenum
```

Transform feedback paused

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNSIGNED_INT_24_8

```TypeScript
readonly UNSIGNED_INT_24_8: webgl.GLenum
```

Unsigned Int 24 8

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## INT_SAMPLER_CUBE

```TypeScript
readonly INT_SAMPLER_CUBE: webgl.GLenum
```

Int Sampler Cube

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGBA16I

```TypeScript
readonly RGBA16I: webgl.GLenum
```

Rgba16I

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TEXTURE_MAX_LEVEL

```TypeScript
readonly TEXTURE_MAX_LEVEL: webgl.GLenum
```

Texture max level

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGBA8UI

```TypeScript
readonly RGBA8UI: webgl.GLenum
```

Rgba8Ui

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGB32UI

```TypeScript
readonly RGB32UI: webgl.GLenum
```

Rgb32Ui

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNIFORM_BLOCK_INDEX

```TypeScript
readonly UNIFORM_BLOCK_INDEX: webgl.GLenum
```

Uniform Block Index

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## STREAM_COPY

```TypeScript
readonly STREAM_COPY: webgl.GLenum
```

Buffer usage: stream copy

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RGB8_SNORM

```TypeScript
readonly RGB8_SNORM: webgl.GLenum
```

Rgb8 Snorm

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TRANSFORM_FEEDBACK_VARYINGS

```TypeScript
readonly TRANSFORM_FEEDBACK_VARYINGS: webgl.GLenum
```

Transform Feedback Varyings

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## FRAMEBUFFER_DEFAULT

```TypeScript
readonly FRAMEBUFFER_DEFAULT: webgl.GLenum
```

Framebuffer Default

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## OBJECT_TYPE

```TypeScript
readonly OBJECT_TYPE: webgl.GLenum
```

Object Type

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RG32I

```TypeScript
readonly RG32I: webgl.GLenum
```

Rg32I

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNIFORM_OFFSET

```TypeScript
readonly UNIFORM_OFFSET: webgl.GLenum
```

Uniform Offset

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## SRGB8_ALPHA8

```TypeScript
readonly SRGB8_ALPHA8: webgl.GLenum
```

Srgb8 Alpha8

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## RG32F

```TypeScript
readonly RG32F: webgl.GLenum
```

Rg32F

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_ELEMENTS_VERTICES

```TypeScript
readonly MAX_ELEMENTS_VERTICES: webgl.GLenum
```

Max elements vertices

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TEXTURE_WRAP_R

```TypeScript
readonly TEXTURE_WRAP_R: webgl.GLenum
```

Texture wrap: R

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## VERTEX_ATTRIB_ARRAY_DIVISOR

```TypeScript
readonly VERTEX_ATTRIB_ARRAY_DIVISOR: webgl.GLenum
```

Vertex Attrib Array Divisor

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_VARYING_COMPONENTS

```TypeScript
readonly MAX_VARYING_COMPONENTS: webgl.GLenum
```

Max Varying Components

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## SYNC_FENCE

```TypeScript
readonly SYNC_FENCE: webgl.GLenum
```

Sync Fence

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## STREAM_READ

```TypeScript
readonly STREAM_READ: webgl.GLenum
```

Buffer usage: stream read

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## ALREADY_SIGNALED

```TypeScript
readonly ALREADY_SIGNALED: webgl.GLenum
```

Already Signaled

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNSIGNED_INT_VEC4

```TypeScript
readonly UNSIGNED_INT_VEC4: webgl.GLenum
```

Unsigned Int Vec4

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## SAMPLER_BINDING

```TypeScript
readonly SAMPLER_BINDING: webgl.GLenum
```

Sampler Binding

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNSIGNED_INT_VEC2

```TypeScript
readonly UNSIGNED_INT_VEC2: webgl.GLenum
```

Unsigned Int Vec2

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS

```TypeScript
readonly MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: webgl.GLenum
```

Max Transform Feedback Interleaved Components

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## UNSIGNED_INT_VEC3

```TypeScript
readonly UNSIGNED_INT_VEC3: webgl.GLenum
```

Unsigned Int Vec3

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## SAMPLER_CUBE_SHADOW

```TypeScript
readonly SAMPLER_CUBE_SHADOW: webgl.GLenum
```

Sampler Cube Shadow

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS

```TypeScript
readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: webgl.GLenum
```

Max Transform Feedback Separate Attribs

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS

```TypeScript
readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: webgl.GLenum
```

Max Transform Feedback Separate Components

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE

```TypeScript
readonly FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: webgl.GLenum
```

Framebuffer Attachment Alpha Size

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TRANSFORM_FEEDBACK_BUFFER

```TypeScript
readonly TRANSFORM_FEEDBACK_BUFFER: webgl.GLenum
```

Transform Feedback Buffer

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## COPY_READ_BUFFER

```TypeScript
readonly COPY_READ_BUFFER: webgl.GLenum
```

Copy Read Buffer

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## TRANSFORM_FEEDBACK_BUFFER_BINDING

```TypeScript
readonly TRANSFORM_FEEDBACK_BUFFER_BINDING: webgl.GLenum
```

Transform Feedback Buffer Binding

**类型：** webgl.GLenum

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

