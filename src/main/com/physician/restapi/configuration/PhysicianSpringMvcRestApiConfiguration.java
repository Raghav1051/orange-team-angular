package com.physician.restapi.configuration;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.physician.restapi")
@Import({JdbcConfiguration.class})
/**
 * 
 * @author 
 *
 */
public class PhysicianSpringMvcRestApiConfiguration {
	
}