package com.akollegger.jax.engage;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.neo4j.repository.query.Query;

@RepositoryRestResource(collectionResourceRel = "people", path = "people")
public interface PersonRepository extends PagingAndSortingRepository<PersonEntity, String>, CrudRepository<PersonEntity, String> {

	List<PersonEntity> findByLastName(@Param("name") String name);

	@Query("MATCH (p:Person) RETURN p LIMIT 1")
	List<PersonEntity> findFirstPerson();

	Page<PersonEntity> findAll(Pageable pageable);
}
