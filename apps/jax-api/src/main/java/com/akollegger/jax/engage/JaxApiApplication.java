package com.akollegger.jax.engage;

import org.neo4j.cypherdsl.core.renderer.Configuration;
import org.neo4j.cypherdsl.core.renderer.Dialect;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.Bean;

import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;



@EnableTransactionManagement
@EnableNeo4jRepositories
@SpringBootApplication
public class JaxApiApplication {

  @Bean
  Configuration cypherDslConfiguration() {
    return Configuration.newConfig()
                  .withDialect(Dialect.NEO4J_5).build();
  }
  
  public static void main(String[] args) {
    SpringApplication.run(JaxApiApplication.class, args);
  }
}