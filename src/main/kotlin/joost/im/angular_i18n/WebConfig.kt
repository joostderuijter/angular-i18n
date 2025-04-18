package joost.im.angular_i18n

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer


@Configuration
class WebConfig: WebMvcConfigurer {
    override fun addViewControllers(registry: ViewControllerRegistry) {
        registry.addViewController("/english").setViewName("/en/index.html")
        registry.addViewController("/dutch").setViewName("/nl/index.html")
    }
}