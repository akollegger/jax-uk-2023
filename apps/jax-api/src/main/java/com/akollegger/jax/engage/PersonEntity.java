package com.akollegger.jax.engage;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.support.UUIDStringGenerator;

@Node("Person")
public class PersonEntity {
    @Id     
    @GeneratedValue(generatorClass = UUIDStringGenerator.class)
    private String uuid;

    private String name;
  
    public String getName() {
      return name;
    }
  
    public void setName(String name) {
      this.name = name;
    }
  
}
