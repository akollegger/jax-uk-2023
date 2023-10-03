package com.akollegger.jax.engage;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "content", path = "content")
public interface ContentRepository extends PagingAndSortingRepository<ContentEntity, String>, CrudRepository<ContentEntity, String> {

	List<ContentEntity> findByTitle(@Param("title") String title);

}
