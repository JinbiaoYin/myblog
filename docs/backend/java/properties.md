---
title: SpringBoot自定义Properties
---

## 快速入门

以阿里云OSS的AccessKey为例，为防止上传到github泄露。自定义配置文件，并在 .gitignore 中配置。

1. Resource 目录下自定义配置文件 secret/oss.properties
```properties
oss.secret.accessKeyId=
oss.secret.accessKeySecret=
```

2. 新建 `OSSProperties.java`
```java
package top.yinjinbiao.video.common.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@ConfigurationProperties(prefix = "oss.secret", ignoreUnknownFields = false)
@PropertySource("classpath:secret/oss.properties")
@Data
public class OSSProperties {
    private String accessKeyId;
    private String accessKeySecret;
}
```

3. 使用时，`@Value("")` 来直接注入属性，或者使用`@Autowired`来注入`OSSProperties`。
例如：
```java
@Value("${oss.secret.accessKeyId}")
private String accessKeyId;

@Value("${oss.secret.accessKeySecret}")
private String accessKeySecret;
```
或：

```java
@Autowired
private OSSProperties ossProperties;
```

4. 在 `.gitignore` 中忽略 secret 文件夹
```
secret/
```