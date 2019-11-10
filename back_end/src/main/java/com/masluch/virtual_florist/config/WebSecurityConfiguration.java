package com.masluch.virtual_florist.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter
{
	   @Override
	    public void configure(HttpSecurity http) throws Exception {
	       http.csrf().disable().authorizeRequests()
	        .antMatchers("/").permitAll()
	        .antMatchers(HttpMethod.GET,"/**").permitAll()
	        .antMatchers(HttpMethod.POST, "/**").permitAll()
	        .antMatchers(HttpMethod.PUT, "/**").permitAll()
	        .antMatchers(HttpMethod.DELETE, "/**").permitAll()
        .anyRequest().authenticated();
	       http.cors();
	    }
	   
}
