package com.physician.restapi.configuration;

import javax.sql.DataSource;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
public class JdbcConfiguration {
	
	@Bean(name="jdbcTempalate")
	public JdbcTemplate jdbcTempalate(){
		return new JdbcTemplate(getDataSource());
	}

	@Bean
	public DataSource getDataSource() {
	    BasicDataSource dataSource = new BasicDataSource();
	    dataSource.setDriverClassName("org.h2.Driver");
	    dataSource.setUrl("jdbc:h2:~/test");
	    dataSource.setUsername("sa");
	    dataSource.setPassword("");
	    return dataSource;
	}
}
