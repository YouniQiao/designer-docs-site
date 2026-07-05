# WebGL2RenderingContextOverloads

WebGL 2.0

**起始版本：** 7

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

## bufferData

```TypeScript
bufferData(target: webgl.GLenum, size: webgl.GLsizeiptr, usage: webgl.GLenum): void
```

Sets buffer data

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Buffer target |
| size | webgl.GLsizeiptr | 是 | Buffer size |
| usage | webgl.GLenum | 是 | Buffer usage |

## bufferData

```TypeScript
bufferData(target: webgl.GLenum, srcData: BufferSource | null, usage: webgl.GLenum): void
```

Sets buffer data from BufferSource

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Buffer target |
| srcData | BufferSource \| null | 是 | Buffer data |
| usage | webgl.GLenum | 是 | Buffer usage |

## bufferData

```TypeScript
bufferData(
      target: webgl.GLenum,
      srcData: ArrayBufferView,
      usage: webgl.GLenum,
      srcOffset: webgl.GLuint,
      length?: webgl.GLuint,
    ): void
```

Sets buffer data from ArrayBufferView with offset

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Buffer target |
| srcData | ArrayBufferView | 是 | Source data |
| usage | webgl.GLenum | 是 | Buffer usage |
| srcOffset | webgl.GLuint | 是 | Source offset |
| length | webgl.GLuint | 否 | Length |

## bufferSubData

```TypeScript
bufferSubData(target: webgl.GLenum, dstByteOffset: webgl.GLintptr, srcData: BufferSource): void
```

Sets buffer sub data

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Buffer target |
| dstByteOffset | webgl.GLintptr | 是 | Destination byte offset |
| srcData | BufferSource | 是 | Source data |

## bufferSubData

```TypeScript
bufferSubData(
      target: webgl.GLenum,
      dstByteOffset: webgl.GLintptr,
      srcData: ArrayBufferView,
      srcOffset: webgl.GLuint,
      length?: webgl.GLuint,
    ): void
```

Sets buffer sub data with offset

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Buffer target |
| dstByteOffset | webgl.GLintptr | 是 | Destination byte offset |
| srcData | ArrayBufferView | 是 | Source data |
| srcOffset | webgl.GLuint | 是 | Source offset |
| length | webgl.GLuint | 否 | Length |

## compressedTexImage2D

```TypeScript
compressedTexImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLenum,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      border: webgl.GLint,
      imageSize: webgl.GLsizei,
      offset: webgl.GLintptr,
    ): void
```

Compressed texture image 2D from PBO offset

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
| border | webgl.GLint | 是 | Border |
| imageSize | webgl.GLsizei | 是 | Image size |
| offset | webgl.GLintptr | 是 | Offset |

## compressedTexImage2D

```TypeScript
compressedTexImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLenum,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      border: webgl.GLint,
      srcData: ArrayBufferView,
      srcOffset?: webgl.GLuint,
      srcLengthOverride?: webgl.GLuint,
    ): void
```

Compressed texture image 2D from ArrayBufferView

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
| border | webgl.GLint | 是 | Border |
| srcData | ArrayBufferView | 是 | Source data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLengthOverride | webgl.GLuint | 否 | Source length override |

## compressedTexSubImage2D

```TypeScript
compressedTexSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      imageSize: webgl.GLsizei,
      offset: webgl.GLintptr,
    ): void
```

Compressed texture sub image 2D from PBO offset

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
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| format | webgl.GLenum | 是 | Format |
| imageSize | webgl.GLsizei | 是 | Image size |
| offset | webgl.GLintptr | 是 | Offset |

## compressedTexSubImage2D

```TypeScript
compressedTexSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      srcData: ArrayBufferView,
      srcOffset?: webgl.GLuint,
      srcLengthOverride?: webgl.GLuint,
    ): void
```

Compressed texture sub image 2D from ArrayBufferView

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
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| format | webgl.GLenum | 是 | Format |
| srcData | ArrayBufferView | 是 | Source data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLengthOverride | webgl.GLuint | 否 | Source length override |

## readPixels

```TypeScript
readPixels(
      x: webgl.GLint,
      y: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      dstData: ArrayBufferView | null,
    ): void
```

Reads pixels from the framebuffer to ArrayBufferView

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | webgl.GLint | 是 | X coordinate |
| y | webgl.GLint | 是 | Y coordinate |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| format | webgl.GLenum | 是 | Pixel format |
| type | webgl.GLenum | 是 | Pixel type |
| dstData | ArrayBufferView \| null | 是 | Destination data |

## readPixels

```TypeScript
readPixels(
      x: webgl.GLint,
      y: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      offset: webgl.GLintptr,
    ): void
```

Reads pixels from the framebuffer to PBO offset

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | webgl.GLint | 是 | X coordinate |
| y | webgl.GLint | 是 | Y coordinate |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| format | webgl.GLenum | 是 | Pixel format |
| type | webgl.GLenum | 是 | Pixel type |
| offset | webgl.GLintptr | 是 | Offset |

## readPixels

```TypeScript
readPixels(
      x: webgl.GLint,
      y: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      dstData: ArrayBufferView,
      dstOffset: webgl.GLuint,
    ): void
```

Reads pixels from the framebuffer to ArrayBufferView with offset

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | webgl.GLint | 是 | X coordinate |
| y | webgl.GLint | 是 | Y coordinate |
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| format | webgl.GLenum | 是 | Pixel format |
| type | webgl.GLenum | 是 | Pixel type |
| dstData | ArrayBufferView | 是 | Destination data |
| dstOffset | webgl.GLuint | 是 | Destination offset |

## texImage2D

```TypeScript
texImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      pixels: ArrayBufferView | null,
    ): void
```

Sets texture image 2D from pixels

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
| border | webgl.GLint | 是 | Border |
| format | webgl.GLenum | 是 | Pixel format |
| type | webgl.GLenum | 是 | Pixel type |
| pixels | ArrayBufferView \| null | 是 | Pixel data |

## texImage2D

```TypeScript
texImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      source: webgl.TexImageSource,
    ): void
```

Sets texture image 2D from TexImageSource

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| target | webgl.GLenum | 是 | Texture target |
| level | webgl.GLint | 是 | Mipmap level |
| internalformat | webgl.GLint | 是 | Internal format |
| format | webgl.GLenum | 是 | Pixel format |
| type | webgl.GLenum | 是 | Pixel type |
| source | webgl.TexImageSource | 是 | Image source |

## texImage2D

```TypeScript
texImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      pboOffset: webgl.GLintptr,
    ): void
```

Sets texture image 2D from PBO offset

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
| border | webgl.GLint | 是 | Border |
| format | webgl.GLenum | 是 | Pixel format |
| type | webgl.GLenum | 是 | Pixel type |
| pboOffset | webgl.GLintptr | 是 | PBO offset |

## texImage2D

```TypeScript
texImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      source: webgl.TexImageSource,
    ): void
```

Sets texture image 2D from TexImageSource

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
| border | webgl.GLint | 是 | Border |
| format | webgl.GLenum | 是 | Pixel format |
| type | webgl.GLenum | 是 | Pixel type |
| source | webgl.TexImageSource | 是 | Image source |

## texImage2D

```TypeScript
texImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      srcData: ArrayBufferView,
      srcOffset: webgl.GLuint,
    ): void
```

Sets texture image 2D from ArrayBufferView with offset

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
| border | webgl.GLint | 是 | Border |
| format | webgl.GLenum | 是 | Pixel format |
| type | webgl.GLenum | 是 | Pixel type |
| srcData | ArrayBufferView | 是 | Source data |
| srcOffset | webgl.GLuint | 是 | Source offset |

## texSubImage2D

```TypeScript
texSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      pixels: ArrayBufferView | null,
    ): void
```

Sets texture sub image 2D from pixels

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
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| format | webgl.GLenum | 是 | Pixel format |
| type | webgl.GLenum | 是 | Pixel type |
| pixels | ArrayBufferView \| null | 是 | Pixel data |

## texSubImage2D

```TypeScript
texSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      source: webgl.TexImageSource,
    ): void
```

Sets texture sub image 2D from TexImageSource

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
| format | webgl.GLenum | 是 | Pixel format |
| type | webgl.GLenum | 是 | Pixel type |
| source | webgl.TexImageSource | 是 | Image source |

## texSubImage2D

```TypeScript
texSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      pboOffset: webgl.GLintptr,
    ): void
```

Sets texture sub image 2D from PBO offset

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
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| format | webgl.GLenum | 是 | Pixel format |
| type | webgl.GLenum | 是 | Pixel type |
| pboOffset | webgl.GLintptr | 是 | PBO offset |

## texSubImage2D

```TypeScript
texSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      source: webgl.TexImageSource,
    ): void
```

Sets texture sub image 2D from TexImageSource

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
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| format | webgl.GLenum | 是 | Pixel format |
| type | webgl.GLenum | 是 | Pixel type |
| source | webgl.TexImageSource | 是 | Image source |

## texSubImage2D

```TypeScript
texSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      srcData: ArrayBufferView,
      srcOffset: webgl.GLuint,
    ): void
```

Sets texture sub image 2D from ArrayBufferView with offset

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
| width | webgl.GLsizei | 是 | Width |
| height | webgl.GLsizei | 是 | Height |
| format | webgl.GLenum | 是 | Pixel format |
| type | webgl.GLenum | 是 | Pixel type |
| srcData | ArrayBufferView | 是 | Source data |
| srcOffset | webgl.GLuint | 是 | Source offset |

## uniform1fv

```TypeScript
uniform1fv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform1fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| data | webgl.Float32List | 是 | Data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLength | webgl.GLuint | 否 | Source length |

## uniform1iv

```TypeScript
uniform1iv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Int32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform1iv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| data | webgl.Int32List | 是 | Data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLength | webgl.GLuint | 否 | Source length |

## uniform2fv

```TypeScript
uniform2fv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform2fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| data | webgl.Float32List | 是 | Data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLength | webgl.GLuint | 否 | Source length |

## uniform2iv

```TypeScript
uniform2iv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Int32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform2iv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| data | webgl.Int32List | 是 | Data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLength | webgl.GLuint | 否 | Source length |

## uniform3fv

```TypeScript
uniform3fv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform3fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| data | webgl.Float32List | 是 | Data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLength | webgl.GLuint | 否 | Source length |

## uniform3iv

```TypeScript
uniform3iv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Int32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform3iv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| data | webgl.Int32List | 是 | Data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLength | webgl.GLuint | 否 | Source length |

## uniform4fv

```TypeScript
uniform4fv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform4fv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| data | webgl.Float32List | 是 | Data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLength | webgl.GLuint | 否 | Source length |

## uniform4iv

```TypeScript
uniform4iv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Int32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniform4iv value

**起始版本：** 7

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.Graphic.Graphic2D.WebGL2

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | webgl.WebGLUniformLocation \| null | 是 | Uniform location |
| data | webgl.Int32List | 是 | Data |
| srcOffset | webgl.GLuint | 否 | Source offset |
| srcLength | webgl.GLuint | 否 | Source length |

## uniformMatrix2fv

```TypeScript
uniformMatrix2fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniformMatrix2fv value

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

## uniformMatrix3fv

```TypeScript
uniformMatrix3fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniformMatrix3fv value

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

## uniformMatrix4fv

```TypeScript
uniformMatrix4fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void
```

Sets uniformMatrix4fv value

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

