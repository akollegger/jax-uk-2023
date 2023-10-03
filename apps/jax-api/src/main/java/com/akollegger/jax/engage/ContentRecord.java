package com.akollegger.jax.engage;

public record ContentRecord (
  String uuid,         // generic ID
  String title,        // title
  String contentType,  // MIME-type
  String contentUrl    // direct src URL
) {}