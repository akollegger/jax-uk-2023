package com.akollegger.jax.engage;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.support.UUIDStringGenerator;

@Node("Content")
public class ContentEntity {
    @Id     
    @GeneratedValue(generatorClass = UUIDStringGenerator.class)
    private String uuid;

    private String title;
    private String contentType;
    private String contentUrl;
  
    public String getFirstName() {
      return title;
    }
  
    public void setFirstName(String title) {
      this.title = title;
    }
    public String getContentType() {
      return contentType;
    }
    public void setContentType(String contentType) {
      this.contentType = contentType;
    }
    public String getContentUrl() {
      return contentUrl;
    }
    public void setContentUrl(String contentUrl) {
      this.contentUrl = contentUrl;
    }
  
}
